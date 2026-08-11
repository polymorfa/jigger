//! Analytics events.
//!
//! ```text
//! defineEvents({ ChatPsaRead: [
//!     3574,                                                    // event id
//!     { messageMediaType: [1, WAWebWamEnumMediaType.MEDIA_TYPE],
//!       psaCampaignId:    [4, WAWebWamCodegenUtils.TYPES.STRING] },
//!     [1, 1, 1],                                               // channel weights
//!     "regular"                                                // channel
//! ] }, { ChatPsaRead: [ …validators… ] });
//! ```
//!
//! Read from the parse tree because a regex cannot tell the two type forms
//! apart. Both are member chains ending in a capitalised name, and matching the
//! last one blindly reports every scalar field as `TYPES` — the *penultimate*
//! segment — while an enum field happens to come out right. That is the worst
//! kind of extraction bug: it looks like data.
//!
//! The validator argument carries constraints as human-readable strings
//! (`"about_chat_bubble_tap_count >= 0"`), which is where the snake_case wire
//! names come from — the field keys are camelCase and the wire is not.

use anyhow::Result;
use cellar_core::{BundleHandle, ModuleEntry};
use jigger_ir::{Data, Fact, Kind, WamField};
use oxc_allocator::Allocator;
use oxc_ast::ast::{Argument, Expression, ObjectPropertyKind, PropertyKey, Statement};
use oxc_parser::Parser;
use oxc_span::SourceType;
use std::collections::BTreeMap;

/// One `defineEvents` call, decoded.
pub struct Event {
    pub name: String,
    pub id: u32,
    pub fields: BTreeMap<String, WamField>,
    pub weights: Vec<i64>,
    pub channel: Option<String>,
}

fn key_name(k: &PropertyKey) -> Option<String> {
    match k {
        PropertyKey::StaticIdentifier(i) => Some(i.name.to_string()),
        PropertyKey::StringLiteral(s) => Some(s.value.to_string()),
        _ => None,
    }
}

/// The property chain of a member expression, outermost last.
fn chain(e: &Expression) -> Vec<String> {
    match e {
        Expression::StaticMemberExpression(m) => {
            let mut v = chain(&m.object);
            v.push(m.property.name.to_string());
            v
        }
        Expression::CallExpression(c) => {
            // `o("WAWebWamEnumMediaType")` — the module name is the useful part.
            match c.arguments.first().and_then(Argument::as_expression) {
                Some(Expression::StringLiteral(s)) => vec![s.value.to_string()],
                _ => vec![],
            }
        }
        Expression::Identifier(i) => vec![i.name.to_string()],
        _ => vec![],
    }
}

/// A field's type, and the enum it refers to when it has one.
///
/// `…TYPES.STRING` is a scalar; anything else ending in a capitalised name is a
/// reference to an enum module, and the last segment is the exported name that
/// joins to the enum fact.
fn type_of(e: &Expression) -> (String, Option<String>) {
    let c = chain(e);
    let last = c.last().cloned().unwrap_or_else(|| "UNKNOWN".into());
    if c.iter().any(|s| s == "TYPES") {
        return (last, None);
    }
    // The chain is `Module . EXPORTED_NAME`; the enum fact is keyed on the name.
    (last.clone(), Some(last))
}

/// camelCase -> snake_case, the way the wire spells it.
fn snake(s: &str) -> String {
    let mut out = String::new();
    for (i, c) in s.chars().enumerate() {
        if c.is_ascii_uppercase() {
            if i > 0 {
                out.push('_');
            }
            out.extend(c.to_lowercase());
        } else {
            out.push(c);
        }
    }
    out
}

/// Constraint strings from the validator argument, keyed by the wire name they
/// open with.
fn constraints_of(e: &Expression) -> BTreeMap<String, Vec<String>> {
    let mut out: BTreeMap<String, Vec<String>> = BTreeMap::new();
    let mut strings = Vec::new();
    collect_strings(e, &mut strings, 0);
    for s in strings {
        // `about_chat_bubble_tap_count >= 0` — the subject is the first token.
        let Some(head) = s.split_whitespace().next() else { continue };
        if head.chars().all(|c| c.is_ascii_lowercase() || c.is_ascii_digit() || c == '_') {
            out.entry(head.to_string()).or_default().push(s);
        }
    }
    out
}

fn collect_strings(e: &Expression, out: &mut Vec<String>, depth: u8) {
    if depth > 12 {
        return;
    }
    match e {
        Expression::StringLiteral(s) => out.push(s.value.to_string()),
        Expression::ArrayExpression(a) => {
            for el in &a.elements {
                if let Some(x) = el.as_expression() {
                    collect_strings(x, out, depth + 1);
                }
            }
        }
        Expression::ObjectExpression(o) => {
            for p in &o.properties {
                if let ObjectPropertyKind::ObjectProperty(p) = p {
                    collect_strings(&p.value, out, depth + 1);
                }
            }
        }
        _ => {}
    }
}

/// Every event a module defines.
pub fn events_in(src: &str) -> Vec<Event> {
    let alloc = Allocator::default();
    let ret = Parser::new(&alloc, src, SourceType::cjs()).parse();
    if ret.panicked {
        return vec![];
    }
    let mut out = Vec::new();
    walk(&ret.program.body, &mut out, 0);
    out
}

fn walk(stmts: &[Statement], out: &mut Vec<Event>, depth: u8) {
    if depth > 8 {
        return;
    }
    for st in stmts {
        match st {
            Statement::VariableDeclaration(d) => {
                for decl in &d.declarations {
                    if let Some(init) = &decl.init {
                        expr(init, out, depth);
                    }
                }
            }
            Statement::ExpressionStatement(e) => expr(&e.expression, out, depth),
            Statement::FunctionDeclaration(f) => {
                if let Some(b) = &f.body {
                    walk(&b.statements, out, depth + 1);
                }
            }
            _ => {}
        }
    }
}

fn expr(e: &Expression, out: &mut Vec<Event>, depth: u8) {
    match e.get_inner_expression() {
        Expression::CallExpression(c) => {
            let is_define = match &c.callee {
                Expression::StaticMemberExpression(m) => m.property.name == "defineEvents",
                Expression::Identifier(i) => i.name == "defineEvents",
                _ => false,
            };
            if is_define {
                let events = c.arguments.first().and_then(Argument::as_expression);
                let validators = c.arguments.get(1).and_then(Argument::as_expression);
                if let Some(Expression::ObjectExpression(o)) = events {
                    decode(o, validators, out);
                }
                return;
            }
            for a in &c.arguments {
                if let Some(x) = a.as_expression() {
                    expr(x, out, depth);
                }
            }
            expr(&c.callee, out, depth);
        }
        Expression::FunctionExpression(f) => {
            if let Some(b) = &f.body {
                walk(&b.statements, out, depth + 1);
            }
        }
        Expression::AssignmentExpression(a) => expr(&a.right, out, depth),
        Expression::SequenceExpression(s) => {
            for x in &s.expressions {
                expr(x, out, depth);
            }
        }
        _ => {}
    }
}

fn decode(
    obj: &oxc_ast::ast::ObjectExpression,
    validators: Option<&Expression>,
    out: &mut Vec<Event>,
) {
    // Constraints are looked up by wire name across the whole validator blob
    // rather than paired positionally: a field with no constraint contributes no
    // entry, so the positions do not line up with the field list and pairing by
    // index would attach constraints to the wrong fields.
    let cons = validators.map(constraints_of).unwrap_or_default();

    for p in &obj.properties {
        let ObjectPropertyKind::ObjectProperty(p) = p else { continue };
        let Some(name) = key_name(&p.key) else { continue };
        let Expression::ArrayExpression(arr) = &p.value else { continue };
        let mut it = arr.elements.iter().filter_map(|e| e.as_expression());

        let Some(Expression::NumericLiteral(id)) = it.next() else { continue };
        let Some(Expression::ObjectExpression(fobj)) = it.next() else { continue };

        let mut fields = BTreeMap::new();
        for f in &fobj.properties {
            let ObjectPropertyKind::ObjectProperty(f) = f else { continue };
            let Some(fname) = key_name(&f.key) else { continue };
            let Expression::ArrayExpression(fa) = &f.value else { continue };
            let mut fi = fa.elements.iter().filter_map(|e| e.as_expression());
            let Some(Expression::NumericLiteral(num)) = fi.next() else { continue };
            let (ty, enum_ref) = fi.next().map(type_of).unwrap_or(("UNKNOWN".into(), None));
            let wire = snake(&fname);
            fields.insert(fname, WamField {
                id: num.value as u32,
                r#type: ty,
                enum_ref,
                constraints: cons.get(&wire).cloned().unwrap_or_default(),
                wire,
            });
        }

        let weights = match it.next() {
            Some(Expression::ArrayExpression(w)) => w.elements.iter()
                .filter_map(|e| e.as_expression())
                .filter_map(|e| match e {
                    Expression::NumericLiteral(n) => Some(n.value as i64),
                    _ => None,
                })
                .collect(),
            _ => vec![],
        };
        let channel = match it.next() {
            Some(Expression::StringLiteral(s)) => Some(s.value.to_string()),
            _ => None,
        };

        out.push(Event { name, id: id.value as u32, fields, weights, channel });
    }
}

pub fn wam(bundle: &BundleHandle, entries: &[ModuleEntry]) -> Result<Vec<Fact>> {
    let mut out = Vec::new();
    for e in entries.iter().filter(|e| e.name.starts_with("WAWeb") && e.name.ends_with("WamEvent")) {
        let src = bundle.read_module(e)?;
        for ev in events_in(&src) {
            let m = format!(r"{}:\s*\[\s*{}", regex::escape(&ev.name), ev.id);
            out.push(crate::fact(
                Kind::Wam,
                ev.name.clone(),
                Data::Wam {
                    event_id: ev.id,
                    fields: ev.fields,
                    weights: ev.weights,
                    channel: ev.channel,
                },
                &e.name,
                m,
            ));
        }
    }
    Ok(out)
}

#[cfg(test)]
mod tests {
    use super::*;

    const SRC: &str = r#"
__d("WAWebChatPsaReadWamEvent", [], (function(t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents({ ChatPsaRead: [
        3574,
        {
            messageMediaType: [1, o("WAWebWamEnumMediaType").MEDIA_TYPE],
            psaCampaignId: [4, o("WAWebWamCodegenUtils").TYPES.STRING],
            psaReadCount: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER]
        },
        [1, 1, 1],
        "regular"
    ] }, { ChatPsaRead: [
        [[],[],[[function(e) { return e.getValue("psaReadCount") >= 0; }, "psa_read_count >= 0"]]]
    ] });
    l.ChatPsaReadWamEvent = e;
}), 98);"#;

    #[test]
    fn scalar_types_are_the_last_segment_not_types() {
        let ev = &events_in(SRC)[0];
        assert_eq!(ev.id, 3574);
        // The bug this replaced reported `TYPES` here, for every scalar field in
        // the bundle, because it took the last capitalised name a regex saw.
        assert_eq!(ev.fields["psaCampaignId"].r#type, "STRING");
        assert_eq!(ev.fields["psaReadCount"].r#type, "INTEGER");
        assert!(ev.fields["psaCampaignId"].enum_ref.is_none());
    }

    #[test]
    fn enum_fields_carry_the_name_that_joins_to_the_value_set() {
        let ev = &events_in(SRC)[0];
        let f = &ev.fields["messageMediaType"];
        assert_eq!(f.r#type, "MEDIA_TYPE");
        assert_eq!(f.enum_ref.as_deref(), Some("MEDIA_TYPE"));
    }

    #[test]
    fn channel_weights_and_constraints() {
        let ev = &events_in(SRC)[0];
        assert_eq!(ev.channel.as_deref(), Some("regular"));
        assert_eq!(ev.weights, vec![1, 1, 1]);
        // Matched by wire name, not by position: `psaReadCount` is the second
        // field but the only constrained one.
        assert_eq!(ev.fields["psaReadCount"].constraints, vec!["psa_read_count >= 0"]);
        assert!(ev.fields["psaCampaignId"].constraints.is_empty());
        assert_eq!(ev.fields["messageMediaType"].wire, "message_media_type");
    }
}
