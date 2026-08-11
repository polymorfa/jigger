//! IR -> helpers. One place knows how a fact becomes Go, TypeScript or Rust, and
//! both the per-fact snippets the web tool shows and the aggregate files a
//! library vendors are produced by these same functions.
//!
//! Nothing here generates a public API. These are wire-layer builders: a library
//! keeps its own method names, error types and concurrency model, and calls in
//! for the bytes.

pub mod vectors;

use jigger_ir::{Data, Fact, IqAttr, IqNode};

trait Pipe: Sized { fn pipe<T>(self, f: impl FnOnce(Self) -> T) -> T { f(self) } }
impl<T> Pipe for T {}

#[derive(Debug, Default, Clone)]
pub struct Snippets {
    pub go: Option<String>,
    pub ts: Option<String>,
    pub rust: Option<String>,
    /// Protobuf's native IR is `.proto`. Emitting a JSON description of a schema
    /// that already has a canonical text form would invent a worse format that
    /// no existing tool reads, so proto facts emit this and nothing else.
    pub proto: Option<String>,
}

pub fn pascal(s: &str) -> String {
    let mut out = String::new();
    let mut up = true;
    for c in s.chars() {
        if c.is_ascii_alphanumeric() {
            if up { out.extend(c.to_uppercase()); up = false } else { out.push(c) }
        } else { up = true }
    }
    out
}

/// Joins a parameter list, dropping whichever half is empty.
fn join(a: String, b: String) -> String {
    match (a.is_empty(), b.is_empty()) {
        (true, _) => b,
        (_, true) => a,
        _ => format!("{a}, {b}"),
    }
}

fn wam_go(t: &str) -> &'static str {
    match t { "INTEGER" => "int64", "BOOLEAN" => "bool", "REAL" | "FLOAT" => "float64", _ => "string" }
}
fn wam_ts(t: &str) -> &'static str {
    match t { "INTEGER" | "REAL" | "FLOAT" => "number", "BOOLEAN" => "boolean", _ => "string" }
}
fn wam_rs(t: &str) -> &'static str {
    match t { "INTEGER" => "i64", "BOOLEAN" => "bool", "REAL" | "FLOAT" => "f64", _ => "String" }
}

pub fn camel(s: &str) -> String {
    let p = pascal(s);
    let mut c = p.chars();
    match c.next() {
        Some(f) => f.to_lowercase().chain(c).collect(),
        None => p,
    }
}

/// The attributes a caller supplies, flattened depth-first through the stanza.
///
/// Pinned attributes are excluded: a `type="get"` or `protocol="1"` is part of
/// what the stanza *is*, and exposing it as a parameter invites a caller to pass
/// something the server will reject. `id` is excluded for the same reason — the
/// bundle generates it, it is never chosen.
fn free_attrs(n: &IqNode) -> Vec<IqAttr> {
    let mut out: Vec<IqAttr> = n.attrs.iter()
        .filter(|a| a.literal.is_none() && a.ty != "id")
        .cloned()
        .collect();
    for c in &n.children {
        out.extend(free_attrs(c));
    }
    // Two children can carry the same attribute name; one parameter serves both.
    let mut seen = std::collections::BTreeSet::new();
    out.retain(|a| seen.insert(a.name.clone()));
    out
}

fn go_ty(t: &str) -> &'static str {
    match t {
        "jid" => "types.JID",
        "int" | "timestamp" => "int",
        "bool" => "bool",
        "bytes" => "[]byte",
        _ => "string",
    }
}

fn ts_ty(t: &str) -> &'static str {
    match t {
        "int" | "timestamp" => "number",
        "bool" => "boolean",
        "bytes" => "Uint8Array",
        _ => "string",
    }
}

fn rs_ty(t: &str) -> &'static str {
    match t {
        "jid" => "Jid",
        "int" | "timestamp" => "i64",
        "bool" => "bool",
        "bytes" => "Vec<u8>",
        _ => "String",
    }
}

/// The attribute list of one element, ready to paste into a builder.
///
/// Pinned values are written out as the literals they are; supplied ones are
/// written as the parameter that carries them.
fn attr_pairs(n: &IqNode, quote: fn(&str) -> String) -> Vec<(String, String)> {
    n.attrs.iter()
        .filter(|a| a.ty != "id")
        .map(|a| {
            let v = match &a.literal {
                Some(l) => quote(l),
                None => camel(&a.name),
            };
            (a.name.clone(), v)
        })
        .collect()
}

fn go_body(req: Option<&IqNode>, ty: &str, xmlns: &str) -> String {
    let Some(r) = req else {
        return format!("\t\tTag: \"iq\",\n\t\tAttrs: waBinary.Attrs{{\"type\": \"{ty}\", \"xmlns\": \"{xmlns}\", \"to\": to}},\n");
    };
    let mut attrs: Vec<String> = attr_pairs(r, |l| format!("{l:?}"))
        .into_iter().map(|(k, v)| format!("{k:?}: {v}")).collect();
    if !r.attrs.iter().any(|a| a.name == "to") { attrs.push("\"to\": to".into()) }
    let kids: String = r.children.iter().map(|c| go_child(c, 3)).collect();
    format!("\t\tTag: \"iq\",\n\t\tAttrs: waBinary.Attrs{{{}}},\n{}",
            attrs.join(", "),
            if kids.is_empty() { String::new() } else { format!("\t\tContent: []waBinary.Node{{\n{kids}\t\t}},\n") })
}

fn go_child(n: &IqNode, depth: usize) -> String {
    let pad = "\t".repeat(depth);
    let attrs: Vec<String> = attr_pairs(n, |l| format!("{l:?}"))
        .into_iter().map(|(k, v)| format!("{k:?}: {v}")).collect();
    let note = match n.card.as_str() {
        "optional" => " // optional",
        "repeated" => " // repeated",
        _ => "",
    };
    format!("{pad}{{Tag: {:?}, Attrs: waBinary.Attrs{{{}}}}},{note}\n", n.tag, attrs.join(", "))
}

fn ts_body(req: Option<&IqNode>, ty: &str, xmlns: &str) -> String {
    let Some(r) = req else {
        return format!("{{ tag: 'iq', attrs: {{ type: '{ty}', xmlns: '{xmlns}', to }} }}");
    };
    let mut attrs: Vec<String> = attr_pairs(r, |l| format!("'{l}'"))
        .into_iter().map(|(k, v)| format!("{k}: {v}")).collect();
    if !r.attrs.iter().any(|a| a.name == "to") { attrs.push("to".into()) }
    let kids: String = r.children.iter()
        .map(|c| {
            let a: Vec<String> = attr_pairs(c, |l| format!("'{l}'"))
                .into_iter().map(|(k, v)| format!("{k}: {v}")).collect();
            let note = if c.card == "one" { String::new() } else { format!(" /* {} */", c.card) };
            format!("\n      {{ tag: '{}', attrs: {{ {} }} }},{note}", c.tag, a.join(", "))
        })
        .collect();
    format!("{{ tag: 'iq', attrs: {{ {} }}{} }}",
            attrs.join(", "),
            if kids.is_empty() { String::new() } else { format!(", content: [{kids}\n    ]") })
}

fn rs_body(req: Option<&IqNode>, ty: &str, xmlns: &str) -> String {
    let Some(r) = req else {
        return format!("NodeBuilder::new(\"iq\").attr(\"type\", \"{ty}\").attr(\"xmlns\", \"{xmlns}\").attr(\"to\", to).build()");
    };
    let mut s = String::from("NodeBuilder::new(\"iq\")");
    for (k, v) in attr_pairs(r, |l| format!("{l:?}")) {
        s.push_str(&format!("\n        .attr({k:?}, {v})"));
    }
    if !r.attrs.iter().any(|a| a.name == "to") { s.push_str("\n        .attr(\"to\", to)") }
    for c in &r.children {
        let a: String = attr_pairs(c, |l| format!("{l:?}"))
            .into_iter().map(|(k, v)| format!(".attr({k:?}, {v})")).collect();
        let note = if c.card == "one" { String::new() } else { format!(" // {}", c.card) };
        s.push_str(&format!("\n        .child(NodeBuilder::new({:?}){a}.build()){note}", c.tag));
    }
    s.push_str("\n        .build()");
    s
}

pub fn screaming(s: &str) -> String {
    let mut out = String::new();
    let mut prev_lower = false;
    for c in s.chars() {
        if c.is_ascii_alphanumeric() {
            if c.is_ascii_uppercase() && prev_lower { out.push('_') }
            out.extend(c.to_uppercase());
            prev_lower = c.is_ascii_lowercase() || c.is_ascii_digit();
        } else if !out.ends_with('_') { out.push('_'); prev_lower = false }
    }
    out.trim_matches('_').to_string()
}

pub fn emit(f: &Fact) -> Snippets {
    match &f.data {
        Data::Wam { event_id, fields, channel, .. } => {
            let n = pascal(&f.name);
            let mut go_fields = String::new();
            let mut ts_fields = String::new();
            let mut rs_fields = String::new();
            let mut sorted: Vec<_> = fields.iter().collect();
            sorted.sort_by_key(|(_, v)| v.id);
            for (name, v) in sorted {
                // The type is the resolved one: an enum field gets the enum, not
                // a string. A `MediaType` that cannot hold 99 is the difference
                // between a compile error and unreadable telemetry.
                let (g, t, r) = match &v.enum_ref {
                    Some(en) => (pascal(en), pascal(en), pascal(en)),
                    None => (wam_go(&v.r#type).into(), wam_ts(&v.r#type).into(), wam_rs(&v.r#type).into()),
                };
                let note = if v.constraints.is_empty() { String::new() } else { format!(" ({})", v.constraints.join("; ")) };
                go_fields.push_str(&format!("\t{} {g} `wam:\"{}\"` // field {}{note}\n", pascal(name), v.wire, v.id));
                ts_fields.push_str(&format!("  /** field {}, wire `{}`{note} */\n  {}?: {t}\n", v.id, v.wire, name));
                rs_fields.push_str(&format!("    /// field {}, wire `{}`{note}\n    pub {}: Option<{r}>,\n", v.id, v.wire, screaming(name).to_lowercase()));
            }
            let ch = channel.as_deref().map(|c| format!(" // channel: {c}")).unwrap_or_default();
            Snippets {
                go: Some(format!("const Wam{n} = {event_id}{ch}\n\ntype {n}Event struct {{\n{go_fields}}}")),
                ts: Some(format!("export const Wam{n} = {event_id} as const\n\nexport interface {n}Event {{\n{ts_fields}}}")),
                rust: Some(format!("pub const WAM_{}: u32 = {event_id};\n\n#[derive(Debug, Default)]\npub struct {n}Event {{\n{rs_fields}}}", screaming(&f.name))),
                proto: None,
            }
        }
        Data::Iq { xmlns, r#type, request, responses, .. } => {
            let n = pascal(&f.name);
            let ty = r#type;

            // Only the attributes a caller actually supplies become parameters.
            // Pinned ones (`type="get"`, `protocol="1"`) are part of the stanza,
            // not of its interface, and taking them as arguments would invite a
            // caller to pass something the server rejects.
            let params = request.as_ref().map(|r| free_attrs(r)).unwrap_or_default();
            // Most stanzas address themselves to s.whatsapp.net and say so. Only
            // the ones that leave the recipient open take it as an argument;
            // otherwise the signature offers a knob that does nothing.
            let pinned_to = request.as_ref()
                .is_some_and(|r| r.attrs.iter().any(|a| a.name == "to" && a.literal.is_some()));
            let recipient = |t: &str| if pinned_to { String::new() } else { format!("to{t}") };
            let sig = |t: fn(&str) -> &'static str, sep: &str, opt: &str| -> String {
                params.iter()
                    .map(|p| format!("{}{}{sep}{}", camel(&p.name), if p.optional { opt } else { "" }, t(&p.ty)))
                    .collect::<Vec<_>>().join(", ")
            };

            // The arms, as a doc comment. A caller that handles only the success
            // shape silently mishandles every error the server actually sends,
            // and nothing else in the generated code would say so.
            let arms = if responses.is_empty() {
                String::new()
            } else {
                format!(" Replies with one of: {}.",
                        responses.iter().map(|r| r.arm.as_str()).collect::<Vec<_>>().join(", "))
            };

            Snippets {
                go: Some(format!(
                    "// Build{n} builds <iq type=\"{ty}\" xmlns=\"{xmlns}\">.{arms}\nfunc Build{n}({}) waBinary.Node {{\n\treturn waBinary.Node{{\n{}\t}}\n}}",
                    join(recipient(" types.JID"), sig(go_ty, " ", "")),
                    go_body(request.as_ref(), ty, xmlns),
                )),
                ts: Some(format!(
                    "/** <iq type=\"{ty}\" xmlns=\"{xmlns}\">.{arms} */\nexport function build{n}({}): BinaryNode {{\n  return {}\n}}",
                    join(recipient(": string"), sig(ts_ty, ": ", "?")),
                    ts_body(request.as_ref(), ty, xmlns),
                )),
                rust: Some(format!(
                    "/// <iq type=\"{ty}\" xmlns=\"{xmlns}\">.{arms}\npub fn build_{}({}) -> Node {{\n    {}\n}}",
                    screaming(&f.name).to_lowercase(),
                    join(recipient(": Jid"), sig(rs_ty, ": ", "")),
                    rs_body(request.as_ref(), ty, xmlns),
                )),
                // The stanza is XML and is already shown as the schema. It does not
                // belong in the proto slot.
                proto: None,
            }
        }
        Data::Ab { opaque_id, r#type, default, .. } => {
            let n = pascal(&f.name);
            Snippets {
                go: Some(format!("// AB{n} is A/B property {opaque_id} ({ty}), default {default}.\nconst AB{n} = \"{}\"", f.name, ty = r#type)),
                ts: Some(format!("/** A/B property {opaque_id} ({ty}), default {default}. */\nexport const AB{n} = '{}' as const", f.name, ty = r#type)),
                rust: Some(format!("/// A/B property {opaque_id} ({ty}), default {default}.\npub const AB_{}: &str = \"{}\";", screaming(&f.name), f.name, ty = r#type)),
                proto: None,
            }
        }
        Data::AppState { index_name, collection, version, value_field, .. } => {
            let n = pascal(&f.name);
            let c = collection.as_deref().unwrap_or("unknown");
            let payload = value_field.as_ref()
                .map(|v| format!("SyncActionValue.{v}"))
                .unwrap_or_else(|| "unresolved".into());
            let v = version.map(|v| v.to_string()).unwrap_or_else(|| "?".into());
            // Emitted as three constants that belong together. Splitting them
            // across a file is how a client ends up writing the right index into
            // the wrong collection.
            Snippets {
                go: Some(format!(
                    "// {n} app-state mutation. Payload: {payload}\nconst (\n\tAppState{n}Index      = {index_name:?}\n\tAppState{n}Collection = {c:?}\n\tAppState{n}Version    = {v}\n)")),
                ts: Some(format!(
                    "/** {n} app-state mutation. Payload: {payload} */\nexport const AppState{n} = {{\n  index: {index_name:?},\n  collection: {c:?},\n  version: {v},\n}} as const")),
                rust: Some(format!(
                    "/// {n} app-state mutation. Payload: `{payload}`\npub const APPSTATE_{0}_INDEX: &str = {index_name:?};\npub const APPSTATE_{0}_COLLECTION: &str = {c:?};\npub const APPSTATE_{0}_VERSION: u32 = {v};",
                    screaming(&f.name))),
                proto: None,
            }
        }
        Data::Enum { variants, .. } => {
            let n = pascal(&f.name);
            // Real enums, not string constants. The whole point of resolving the
            // value set is that a library can stop passing integers around: a
            // `MediaType` that cannot hold 99 is the difference between a bug at
            // the call site and a bug in production telemetry.
            let num = |v: &serde_json::Value| v.as_f64().map(|x| x as i64);
            let all_num = variants.iter().all(|v| num(&v.value).is_some());

            let go = variants.iter().map(|v| match num(&v.value) {
                Some(x) if all_num => format!("\t{n}{} {n} = {x}\n", pascal(&v.name)),
                _ => format!("\t{n}{} {n} = {:?}\n", pascal(&v.name), v.value.as_str().unwrap_or_default()),
            }).collect::<String>();
            let ts = variants.iter().map(|v| match num(&v.value) {
                Some(x) if all_num => format!("  {} = {x},\n", screaming(&v.name)),
                _ => format!("  {} = {:?},\n", screaming(&v.name), v.value.as_str().unwrap_or_default()),
            }).collect::<String>();
            let rs = variants.iter().map(|v| match num(&v.value) {
                Some(x) if all_num => format!("    {} = {x},\n", pascal(&v.name)),
                _ => format!("    {},\n", pascal(&v.name)),
            }).collect::<String>();

            Snippets {
                go: Some(format!("type {n} {}\n\nconst (\n{go})", if all_num { "int" } else { "string" })),
                ts: Some(format!("export enum {n} {{\n{ts}}}")),
                rust: Some(match all_num {
                    // `#[repr(i64)]` because the number *is* the wire value; a
                    // Rust-chosen discriminant would encode the wrong bytes.
                    true => format!("#[repr(i64)]\n#[derive(Debug, Clone, Copy, PartialEq, Eq)]\npub enum {n} {{\n{rs}}}"),
                    false => format!("#[derive(Debug, Clone, Copy, PartialEq, Eq)]\npub enum {n} {{\n{rs}}}"),
                }),
                proto: None,
            }
        }
        Data::Const { group, value } => {
            let n = format!("{}{}", pascal(group), pascal(&f.name));
            Snippets {
                go: Some(format!("const {n} = {value:?}")),
                ts: Some(format!("export const {n} = {value:?} as const")),
                rust: Some(format!("pub const {}: &str = {value:?};", screaming(&format!("{group}_{}", f.name)))),
                proto: None,
            }
        }
        Data::Mex { doc_id, operation, variables, .. } => {
            let n = pascal(&f.name);
            let vars = variables.join(", ");
            Snippets {
                go: Some(format!("// {n} is the persisted {operation}. Variables: {vars}\nconst Mex{n} = {doc_id:?}")),
                ts: Some(format!("/** Persisted {operation}. Variables: {vars} */\nexport const Mex{n} = {doc_id:?} as const")),
                rust: Some(format!("/// Persisted {operation}. Variables: {vars}\npub const MEX_{}: &str = {doc_id:?};", screaming(&f.name))),
                proto: None,
            }
        }
        Data::Sig { root, children, responds_to } => {
            let n = pascal(&f.name);
            let kids: String = children.iter().map(|c| format!("\n  <{c}/>")).collect();
            let note = responds_to.as_deref()
                .map(|o| format!(" Response to {o}."))
                .unwrap_or_else(|| " Server-initiated; nothing sends it.".into());
            Snippets {
                go: Some(format!("// Parse{n} matches <{root}>.{note}\nfunc Parse{n}(n *waBinary.Node) (*{n}, error)")),
                ts: Some(format!("/** Matches `<{root}>`.{note} */\nexport function parse{n}(n: BinaryNode): {n} | null")),
                rust: Some(format!("/// Matches `<{root}>`.{note}\npub fn parse_{}(n: &Node) -> Option<{n}>", screaming(&f.name).to_lowercase())),
                proto: None,
            }
            .pipe(|mut s| { s.proto = Some(format!("<{root}>{kids}\n</{root}>")); s })
        }
        Data::Proto { fields, .. } => {
            let short = f.name.rsplit('.').next().unwrap_or(&f.name);
            let mut sorted: Vec<_> = fields.iter().collect();
            sorted.sort_by_key(|(_, v)| v.number);
            let body: String = sorted.iter()
                .map(|(name, v)| {
                    let ty = v.type_name.as_deref()
                        .and_then(|t| t.rsplit('.').next())
                        .unwrap_or("bytes");
                    format!("  optional {ty} {name} = {};\n", v.number)
                })
                .collect();
            Snippets { proto: Some(format!("message {short} {{\n{body}}}")), ..Default::default() }
        }
    }
}
