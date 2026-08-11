//! Enum value sets.
//!
//! A WAM field typed `MEDIA_TYPE` is a number on the wire, and the number means
//! nothing without the set. `MEDIA_TYPE = 34` is `REACTION`; a library that logs
//! `34` because the spec only said "enum" is reporting telemetry nobody can
//! read, and one that guesses the ordering reports the wrong thing entirely.
//!
//! Two populations, one shape:
//!
//! ```text
//! // WAWebWamEnumMediaType — analytics, numeric
//! var e = Object.freeze({ NONE: 1, PHOTO: 2, VIDEO: 3, … });  i.MEDIA_TYPE = e;
//!
//! // WASmaxInAbPropsEnums — stanza attributes, string-valued
//! var e = { false: "false", true: "true" };  i.ENUM_FALSE_TRUE = e;
//! ```
//!
//! The *exported* name is the identity, not the module name: that is the name a
//! field's type refers to, so it is the only string that joins the two.

use anyhow::Result;
use cellar_core::{BundleHandle, ModuleEntry};
use jigger_ir::{Data, EnumVariant, Fact, Kind};
use oxc_allocator::Allocator;
use oxc_ast::ast::{Expression, ObjectPropertyKind, PropertyKey, Statement};
use oxc_parser::Parser;
use oxc_span::SourceType;
use std::collections::BTreeMap;

/// Variants of an object literal, in declaration order.
///
/// Order is preserved rather than sorted: for a numeric enum it usually matches
/// the values, and where it does not, the declaration order is what a reader of
/// the module sees. Sorting would silently invent a different sequence.
fn variants_of(obj: &oxc_ast::ast::ObjectExpression) -> Vec<EnumVariant> {
    let mut out = Vec::new();
    for p in &obj.properties {
        let ObjectPropertyKind::ObjectProperty(p) = p else { continue };
        let name = match &p.key {
            PropertyKey::StaticIdentifier(i) => i.name.to_string(),
            PropertyKey::StringLiteral(s) => s.value.to_string(),
            // `Object.freeze({ 1: "A" })` — a numeric key is still a name here.
            PropertyKey::NumericLiteral(n) => n.value.to_string(),
            _ => continue,
        };
        let value = match &p.value {
            Expression::NumericLiteral(n) => serde_json::json!(n.value),
            Expression::StringLiteral(s) => serde_json::json!(s.value.as_str()),
            Expression::BooleanLiteral(b) => serde_json::json!(b.value),
            _ => continue,
        };
        out.push(EnumVariant { name, value });
    }
    out
}

/// Unwraps `Object.freeze({…})` down to the literal it protects.
fn literal_of<'a>(e: &'a Expression<'a>) -> Option<&'a oxc_ast::ast::ObjectExpression<'a>> {
    match e {
        Expression::ObjectExpression(o) => Some(o),
        Expression::CallExpression(c) => {
            let Expression::StaticMemberExpression(m) = &c.callee else { return None };
            (m.property.name == "freeze")
                .then(|| c.arguments.first()?.as_expression().and_then(literal_of))
                .flatten()
        }
        _ => None,
    }
}

/// Every enum a module exports.
///
/// Modules assign to a local first and export it by name afterwards
/// (`var e = Object.freeze({…}); i.MEDIA_TYPE = e;`), so the locals are
/// collected on the way past and resolved when the export is reached.
pub fn enums_in(src: &str) -> Vec<(String, Vec<EnumVariant>)> {
    let alloc = Allocator::default();
    let ret = Parser::new(&alloc, src, SourceType::cjs()).parse();
    if ret.panicked {
        return vec![];
    }

    let mut locals: BTreeMap<String, Vec<EnumVariant>> = BTreeMap::new();
    let mut out: Vec<(String, Vec<EnumVariant>)> = Vec::new();
    walk(&ret.program.body, &mut locals, &mut out, 0);
    out
}

fn walk(
    stmts: &[Statement],
    locals: &mut BTreeMap<String, Vec<EnumVariant>>,
    out: &mut Vec<(String, Vec<EnumVariant>)>,
    depth: u8,
) {
    if depth > 6 {
        return;
    }
    for st in stmts {
        match st {
            Statement::VariableDeclaration(d) => {
                for decl in &d.declarations {
                    let (Some(init), Some(id)) = (&decl.init, decl.id.get_binding_identifier())
                    else {
                        continue;
                    };
                    if let Some(obj) = literal_of(init) {
                        let v = variants_of(obj);
                        if !v.is_empty() {
                            locals.insert(id.name.to_string(), v);
                        }
                    }
                    descend(init, locals, out, depth);
                }
            }
            Statement::ExpressionStatement(e) => {
                collect_exports(&e.expression, locals, out);
                descend(&e.expression, locals, out, depth);
            }
            Statement::FunctionDeclaration(f) => {
                if let Some(b) = &f.body {
                    walk(&b.statements, locals, out, depth + 1);
                }
            }
            _ => {}
        }
    }
}

fn descend(
    e: &Expression,
    locals: &mut BTreeMap<String, Vec<EnumVariant>>,
    out: &mut Vec<(String, Vec<EnumVariant>)>,
    depth: u8,
) {
    match e.get_inner_expression() {
        Expression::FunctionExpression(f) => {
            if let Some(b) = &f.body {
                walk(&b.statements, locals, out, depth + 1);
            }
        }
        Expression::CallExpression(c) => {
            for a in &c.arguments {
                if let Some(x) = a.as_expression() {
                    descend(x, locals, out, depth);
                }
            }
        }
        _ => {}
    }
}

/// `i.MEDIA_TYPE = e` / `i.MEDIA_TYPE = Object.freeze({…})`.
///
/// The exported name has to look like an enum name — SCREAMING_SNAKE. The same
/// module object carries functions and constants, and taking every assignment
/// would fill the ledger with things that are not enums.
fn collect_exports(
    e: &Expression,
    locals: &BTreeMap<String, Vec<EnumVariant>>,
    out: &mut Vec<(String, Vec<EnumVariant>)>,
) {
    match e {
        Expression::SequenceExpression(s) => {
            for x in &s.expressions {
                collect_exports(x, locals, out);
            }
        }
        Expression::AssignmentExpression(a) => {
            let Some(name) = a.left.as_member_expression()
                .and_then(|m| m.static_property_name())
                .map(str::to_string)
            else {
                return;
            };
            if !is_enum_name(&name) {
                return;
            }
            let variants = match &a.right {
                Expression::Identifier(id) => locals.get(id.name.as_str()).cloned(),
                other => literal_of(other).map(variants_of),
            };
            if let Some(v) = variants
                && !v.is_empty()
                && !out.iter().any(|(n, _)| n == &name)
            {
                out.push((name, v));
            }
        }
        _ => {}
    }
}

fn is_enum_name(s: &str) -> bool {
    s.len() > 1
        && s.chars().next().is_some_and(|c| c.is_ascii_uppercase())
        && s.chars().all(|c| c.is_ascii_uppercase() || c.is_ascii_digit() || c == '_')
}

/// Every enum in the bundle, as facts.
///
/// Scanned by module-name shape rather than by walking everything: `WAWebWamEnum*`
/// and `*Enums` are where they live, and parsing 188k modules to find 900 would
/// cost minutes to learn nothing new.
pub fn enums(bundle: &BundleHandle, entries: &[ModuleEntry]) -> Result<Vec<Fact>> {
    let mut out = Vec::new();
    let mut seen: BTreeMap<String, String> = BTreeMap::new();

    for e in entries.iter().filter(|e| {
        e.name.starts_with("WAWebWamEnum") || e.name.ends_with("Enums") || e.name.ends_with("Enum")
    }) {
        let Ok(src) = bundle.read_module(e) else { continue };
        for (name, variants) in enums_in(&src) {
            // One exported name, one enum. A collision means two modules export
            // the same name, and silently keeping the last would make the ledger
            // depend on directory order.
            if let Some(first) = seen.get(&name) {
                if first != &e.name {
                    continue;
                }
            }
            seen.insert(name.clone(), e.name.clone());
            let m = format!(r"{}\s*[:=]", regex::escape(&name));
            out.push(crate::fact(
                Kind::Enum,
                name.clone(),
                Data::Enum { module: e.name.clone(), variants },
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

    #[test]
    fn numeric_wam_enum() {
        let src = r#"
__d("WAWebWamEnumMediaType", [], (function(t, n, r, o, a, i) {
    var e = Object.freeze({ NONE: 1, PHOTO: 2, REACTION: 34 });
    i.MEDIA_TYPE = e;
}), 66);"#;
        let got = enums_in(src);
        assert_eq!(got.len(), 1);
        assert_eq!(got[0].0, "MEDIA_TYPE");
        assert_eq!(got[0].1.len(), 3);
        // Declaration order is preserved; the values are not assumed contiguous.
        assert_eq!(got[0].1[2].name, "REACTION");
        assert_eq!(got[0].1[2].value, serde_json::json!(34.0));
    }

    #[test]
    fn string_valued_stanza_enum() {
        let src = r#"
__d("WASmaxInAbPropsEnums", [], (function(t, n, r, o, a, i) {
    var e = { false: "false", true: "true" };
    i.ENUM_FALSE_TRUE = e;
}), 66);"#;
        let got = enums_in(src);
        assert_eq!(got[0].0, "ENUM_FALSE_TRUE");
        assert_eq!(got[0].1[0].value, serde_json::json!("false"));
    }

    #[test]
    fn ignores_exports_that_are_not_enums() {
        // Same module shape, but the export is a function and the name is not a
        // SCREAMING_SNAKE constant. Taking every assignment would put these in
        // the ledger as enums with no variants.
        let src = r#"
__d("WAWebSomething", [], (function(t, n, r, o, a, i) {
    var e = { a: 1, b: 2 };
    i.parseThing = e, i.Helper = e;
}), 66);"#;
        assert!(enums_in(src).is_empty());
    }
}
