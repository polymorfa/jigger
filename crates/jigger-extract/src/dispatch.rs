//! How an inbound stanza finds its handler.
//!
//! Everything the server sends that is not a reply to something we asked for
//! arrives at one function, `WAWebCommsHandleLoggedInStanza`, and is routed by a
//! nested switch:
//!
//! ```text
//! switch (node.tag) {
//!   case "notification":
//!     switch (attrs.type) {
//!       case "server_sync": return handleServerSyncNotification(node)
//!       case "encrypt":
//!         switch (content[0].tag) {
//!           case "count": case "pq_count": return handlePreKeyLow(node)
//!           case "digest":                 return handleDigestKey(node)
//!         }
//! ```
//!
//! Knowing that `<notification type="server_sync">` exists is the easy half.
//! The half that decides whether a library behaves correctly is *this*: that the
//! client dispatches on `type`, that `encrypt` needs a third look at the first
//! child's tag before it means anything, and that an unmatched `type` falls
//! through to a nack rather than being ignored.
//!
//! Collecting handler modules on their own would miss all of that — it would say
//! which functions exist, not which stanza reaches them.

use jigger_ir::{Handler, Route};
use oxc_allocator::Allocator;
use oxc_ast::ast::{Expression, Statement, SwitchStatement};
use oxc_parser::Parser;
use oxc_span::{GetSpan, SourceType};

/// The module that owns the logged-in dispatch table.
pub const DISPATCH_MODULE: &str = "WAWebCommsHandleLoggedInStanza";

/// Cap on switch nesting. The real table is three deep (`tag` -> `type` ->
/// first child tag); the limit is a backstop, not a tuning knob.
const MAX_NESTING: u8 = 4;

/// The routing table, as a tree of stanza tags and their discriminators.
pub fn routes(src: &str) -> Vec<Route> {
    let alloc = Allocator::default();
    let ret = Parser::new(&alloc, src, SourceType::cjs()).parse();
    if ret.panicked {
        return vec![];
    }

    // The outermost switch keyed on a stanza tag is the dispatch table. Other
    // switches in the module key on unrelated things (nack reasons, log
    // sampling), so the table is identified by what it contains rather than by
    // being first: a switch whose cases include the stanza roots.
    let mut found: Vec<Route> = Vec::new();
    walk(&ret.program.body, src, &mut found, 0);
    found
}

fn walk(stmts: &[Statement], src: &str, out: &mut Vec<Route>, depth: u8) {
    if depth > 12 {
        return;
    }
    for st in stmts {
        match st {
            Statement::SwitchStatement(sw) if is_root_switch(sw, src) => {
                out.extend(routes_of(sw, src, 0, &Bindings::new()));
            }
            _ => {
                for inner in nested_statements(st) {
                    walk(inner, src, out, depth + 1);
                }
            }
        }
    }
}

/// Whether a switch is *the* one: the root-tag dispatch.
///
/// Recognised by its cases rather than its position. The module contains other
/// switches, and the discriminant is a minified local whose name says nothing.
fn is_root_switch(sw: &SwitchStatement, src: &str) -> bool {
    const ROOTS: &[&str] = &["notification", "receipt", "message", "presence", "call", "ack"];
    let hits = sw.cases.iter()
        .filter_map(|c| c.test.as_ref())
        .filter_map(|t| string_of(t, src))
        .filter(|v| ROOTS.contains(&v.as_str()))
        .count();
    hits >= 3
}

fn string_of(e: &Expression, _src: &str) -> Option<String> {
    match e {
        Expression::StringLiteral(s) => Some(s.value.to_string()),
        _ => None,
    }
}

/// What a switch keys on, as written.
///
/// Kept as source text on purpose. `attrs.type` is meaningful and
/// `content[0].tag` is meaningful; the minified receiver in front of them is
/// not, so only the trailing property is worth reporting — but inventing a name
/// for it would be a guess, and this is the one place the guess would be
/// invisible.
fn discriminant_of(sw: &SwitchStatement, src: &str, binding: &Bindings) -> Option<String> {
    let text = src[sw.discriminant.span().start as usize..sw.discriminant.span().end as usize].trim();

    // A bare minified local says nothing. `switch (_)` is only meaningful once
    // you know `_` came from `content[0].tag`, and that is the whole rule for
    // half the notification types — so the binding is chased back through the
    // case body rather than reported as `_`.
    if let Some(resolved) = resolve(text, binding, 0) {
        // The receiver is the stanza node under a one-letter minified name.
        // `e.content[0].tag` and `content[0].tag` say the same thing; only the
        // second says it to a reader.
        let (head, rest) = resolved.split_once('.').unwrap_or((resolved.as_str(), ""));
        return Some(if head.len() <= 2 && !rest.is_empty() { rest.to_string() } else { resolved });
    }

    let prop = text.rsplit('.').next()?.trim();
    (!prop.is_empty() && prop.chars().all(|c| c.is_ascii_alphanumeric() || c == '_'))
        .then(|| prop.to_string())
}

/// Local variable -> the expression it was assigned, as source text.
type Bindings = std::collections::BTreeMap<String, String>;

/// Substitutes bindings until the text names something real.
///
/// Two hops is enough for the shapes in the table (`_ = p[0].tag`, `p = e.content`)
/// and the depth cap stops a self-referential assignment from spinning.
fn resolve(text: &str, binding: &Bindings, depth: u8) -> Option<String> {
    if depth > 3 {
        return None;
    }
    // Replace the leading identifier with whatever it was bound to.
    let head: String = text.chars().take_while(|c| c.is_ascii_alphanumeric() || *c == '_').collect();
    let bound = binding.get(&head)?;
    let rest = &text[head.len()..];
    let joined = format!("{bound}{rest}");
    Some(resolve(&joined, binding, depth + 1).unwrap_or(joined))
}

/// Bindings introduced directly in a case body.
fn bindings_in(stmts: &[Statement], src: &str, into: &mut Bindings) {
    for st in stmts {
        match st {
            Statement::VariableDeclaration(d) => {
                for decl in &d.declarations {
                    let (Some(init), Some(id)) = (&decl.init, decl.id.get_binding_identifier())
                    else {
                        continue;
                    };
                    let s = init.span();
                    into.insert(
                        id.name.to_string(),
                        src[s.start as usize..s.end as usize].trim().to_string(),
                    );
                }
            }
            Statement::BlockStatement(b) => bindings_in(&b.body, src, into),
            _ => {}
        }
    }
}

/// One switch's cases, as routes.
///
/// Fallthrough cases (`case "count": case "pq_count": return …`) share a body,
/// and both values are recorded against it — a library that implements only the
/// first would drop the other on the floor with no error anywhere.
fn routes_of(sw: &SwitchStatement, src: &str, depth: u8, outer: &Bindings) -> Vec<Route> {
    if depth > MAX_NESTING {
        return vec![];
    }
    let on = discriminant_of(sw, src, outer);
    let mut out: Vec<Route> = Vec::new();
    let mut pending: Vec<String> = Vec::new();

    for case in &sw.cases {
        let Some(value) = case.test.as_ref().and_then(|t| string_of(t, src)) else {
            continue; // `default:` — the fallthrough, not a route
        };
        if case.consequent.is_empty() {
            // Empty body: falls through to the next case's.
            pending.push(value);
            continue;
        }

        // Bindings from this case body are in scope for any switch inside it.
        let mut scope = outer.clone();
        bindings_in(&case.consequent, src, &mut scope);

        let mut children = Vec::new();
        collect_switches(&case.consequent, src, &mut children, depth, &scope);
        // An arm that re-dispatches has no handler of its own. Without this the
        // text scan finds the first handler *inside* the nested switch and
        // reports `<notification>` as being handled by whichever type happens to
        // be listed first — which reads as a fact and is not one.
        let handler = children.is_empty().then(|| handler_in(&case.consequent, src)).flatten();

        for v in pending.drain(..).chain(std::iter::once(value)) {
            out.push(Route {
                value: v,
                on: on.clone(),
                handler: handler.clone(),
                variants: children.clone(),
            });
        }
    }
    out
}

fn collect_switches(stmts: &[Statement], src: &str, out: &mut Vec<Route>, depth: u8, scope: &Bindings) {
    for st in stmts {
        match st {
            Statement::SwitchStatement(sw) => out.extend(routes_of(sw, src, depth + 1, scope)),
            _ => {
                for inner in nested_statements(st) {
                    collect_switches(inner, src, out, depth, scope);
                }
            }
        }
    }
}

/// The handler a case body reaches.
///
/// Two call shapes mean the same thing: `o("WAWebHandleX").handleX(node)` for an
/// eagerly-loaded handler, and `r("WAWebHandleX")(node)` for a lazily-loaded one
/// whose default export is called directly. Matching only the first form would
/// silently lose every lazy handler, and those are not the unimportant ones.
fn handler_in(stmts: &[Statement], src: &str) -> Option<Handler> {
    let re = regex::Regex::new(
        r#"[or]\("(WAWeb[A-Za-z0-9_]*Handle[A-Za-z0-9_]*|WA[A-Za-z0-9_]*Handler)"\)(?:\.([a-zA-Z0-9_]+))?"#,
    ).expect("static regex");
    let span = stmts.first()?.span();
    let end = stmts.last()?.span().end as usize;
    let text = &src[span.start as usize..end.min(src.len())];
    let c = re.captures(text)?;
    Some(Handler {
        module: c[1].to_string(),
        method: c.get(2).map(|m| m.as_str().to_string()).unwrap_or_else(|| "default".into()),
    })
}

/// Statement bodies worth descending into. Deliberately not a full visitor: the
/// dispatch table lives inside a generator wrapped in a try, and that is the
/// only shape that has to be reached.
fn nested_statements<'a>(st: &'a Statement<'a>) -> Vec<&'a [Statement<'a>]> {
    let mut out: Vec<&[Statement]> = Vec::new();
    match st {
        Statement::BlockStatement(b) => out.push(&b.body),
        Statement::TryStatement(t) => {
            out.push(&t.block.body);
            if let Some(h) = &t.handler {
                out.push(&h.body.body);
            }
            if let Some(f) = &t.finalizer {
                out.push(&f.body);
            }
        }
        Statement::IfStatement(i) => {
            if let Statement::BlockStatement(b) = &i.consequent {
                out.push(&b.body);
            }
            if let Some(Statement::BlockStatement(b)) = &i.alternate {
                out.push(&b.body);
            }
        }
        Statement::ForStatement(f) => {
            if let Statement::BlockStatement(b) = &f.body {
                out.push(&b.body);
            }
        }
        Statement::WhileStatement(w) => {
            if let Statement::BlockStatement(b) = &w.body {
                out.push(&b.body);
            }
        }
        Statement::FunctionDeclaration(f) => {
            if let Some(b) = &f.body {
                out.push(&b.statements);
            }
        }
        Statement::ExpressionStatement(e) => {
            collect_fn_bodies(&e.expression, &mut out);
        }
        Statement::VariableDeclaration(d) => {
            for decl in &d.declarations {
                if let Some(init) = &decl.init {
                    collect_fn_bodies(init, &mut out);
                }
            }
        }
        Statement::ReturnStatement(r) => {
            if let Some(a) = &r.argument {
                collect_fn_bodies(a, &mut out);
            }
        }
        _ => {}
    }
    out
}

/// Function bodies hanging off an expression — the module factory, and the
/// generator `asyncToGenerator` wraps the dispatch in.
fn collect_fn_bodies<'a>(e: &'a Expression<'a>, out: &mut Vec<&'a [Statement<'a>]>) {
    match e.get_inner_expression() {
        Expression::FunctionExpression(f) => {
            if let Some(b) = &f.body {
                out.push(&b.statements);
            }
        }
        Expression::ArrowFunctionExpression(f) => {
            if let oxc_ast::ast::ArrowFunctionBody::FunctionBody(b) = &f.body {
                out.push(&b.statements);
            }
        }
        Expression::CallExpression(c) => {
            collect_fn_bodies(&c.callee, out);
            for a in &c.arguments {
                if let Some(x) = a.as_expression() {
                    collect_fn_bodies(x, out);
                }
            }
        }
        Expression::AssignmentExpression(a) => collect_fn_bodies(&a.right, out),
        Expression::SequenceExpression(s) => {
            for x in &s.expressions {
                collect_fn_bodies(x, out);
            }
        }
        _ => {}
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const TABLE: &str = r#"
__d("WAWebCommsHandleLoggedInStanza", [], (function(t, n, r, o, a, i, l) {
  function g(e, t) {
    switch (e.tag) {
      case "receipt":
        if (n.type === "retry") return o("WAWebHandleMessageRetryRequest").handleMessageRetryRequest(e);
        break;
      case "notification":
        switch (n.type) {
          case "server_sync": return o("WAWebHandleServerSyncNotification").handleServerSyncNotification(e);
          case "contacts": return r("WAWebHandleContactNotification")(e);
          case "encrypt": {
            var p = e.content;
            var _ = p[0].tag;
            switch (_) {
              case "count":
              case "pq_count": return r("WAWebHandlePreKeyLow")(e, t);
              case "digest": return r("WAWebHandleDigestKey")(e);
            }
            break;
          }
        }
        break;
      case "message": return o("WAWebHandleWaChat").handleMessage(e);
      case "presence": return o("WAWebHandlePresence").handlePresence(e);
      case "call": return o("WAWebHandleVoipCall").handleCall(e);
    }
  }
}), 98);
"#;

    #[test]
    fn nested_dispatch_is_recovered_with_its_discriminators() {
        let rs = routes(TABLE);
        let notif = rs.iter().find(|r| r.value == "notification").expect("notification route");
        assert_eq!(notif.on.as_deref(), Some("tag"));

        let names: Vec<&str> = notif.variants.iter().map(|v| v.value.as_str()).collect();
        assert_eq!(names, ["server_sync", "contacts", "encrypt"]);
        assert_eq!(notif.variants[0].on.as_deref(), Some("type"));

        // The lazy `r("Module")(node)` form resolves too, not just `o(…).method(…)`.
        let contacts = &notif.variants[1];
        assert_eq!(contacts.handler.as_ref().map(|h| h.module.as_str()), Some("WAWebHandleContactNotification"));
        assert_eq!(contacts.handler.as_ref().map(|h| h.method.as_str()), Some("default"));
    }

    #[test]
    fn fallthrough_cases_each_get_their_own_route() {
        let rs = routes(TABLE);
        let encrypt = rs.iter().find(|r| r.value == "notification").unwrap()
            .variants.iter().find(|v| v.value == "encrypt").unwrap();
        let vals: Vec<&str> = encrypt.variants.iter().map(|v| v.value.as_str()).collect();
        // `count` shares a body with `pq_count`; both must be reachable, or a
        // library implements one and silently drops the other.
        assert!(vals.contains(&"count") && vals.contains(&"pq_count"));
        // `switch (_)` on its own says nothing; the binding is chased back to
        // the thing it actually reads.
        assert_eq!(encrypt.variants[0].on.as_deref(), Some("content[0].tag"));
        for v in &encrypt.variants {
            if v.value == "count" || v.value == "pq_count" {
                assert_eq!(v.handler.as_ref().map(|h| h.module.as_str()), Some("WAWebHandlePreKeyLow"));
            }
        }
    }
}

#[cfg(test)]
mod real {
    #[test]
    #[ignore = "reads the local cellar bundle"]
    fn against_the_shipped_table() {
        let p = "/Users/purpshell/.cellar/bundles/whatsapp-1044822804/modules/WAWebCommsHandleLoggedInStanza.js";
        let src = std::fs::read_to_string(p).unwrap();
        let rs = super::routes(&src);
        for r in &rs {
            eprintln!("{} (on {:?}) -> {:?}  [{} variants]", r.value, r.on, r.handler, r.variants.len());
            for v in &r.variants {
                eprintln!("    {} (on {:?}) -> {:?} [{}]", v.value, v.on, v.handler.as_ref().map(|h| &h.module), v.variants.len());
            }
        }
        assert!(!rs.is_empty());
    }
}
