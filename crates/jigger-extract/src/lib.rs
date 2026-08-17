//! Bundle -> facts.
//!
//! Everything here reads a parse tree or a literal. Nothing evaluates the
//! bundle. That matters for three reasons: extraction stays deterministic, no
//! untrusted JavaScript is ever executed, and the tool remains a single static
//! binary with no runtime to install.
//!
//! Bundle access goes through `cellar-core`, so the on-disk layout, the module
//! index and the filter engine are cellar's concern and are not re-implemented.

use anyhow::Result;
use cellar_core::{BundleHandle, ModuleEntry};
pub mod appstate;
pub mod dispatch;
pub mod enums;
pub mod wam;
pub mod stanza;
pub mod symbols;

use jigger_ir::{Data, Evidence, Fact, IqResponse, Kind, ModuleGraph, ProtoField, Usage};
use std::collections::BTreeSet;
use regex::Regex;
use std::collections::BTreeMap;

pub(crate) fn fact(kind: Kind, name: String, data: Data, module: &str, matches: String) -> Fact {
    let id = Fact::make_id(kind, &name, &data);
    let literals = Fact::literals_for(&name, &data);
    Fact { id, kind, name, data, evidence: Evidence { module: module.to_string(), matches }, literals, usage: None, graph: None }
}

/// A/B properties. `ABPropConfigs = { name: [opaqueId, type, default, alt] }`
///
/// WhatsApp identifies these on the wire by the opaque number, which teaches
/// nothing on its own. The readable name and the count of modules that read it
/// are what make the number mean something, so both travel with the fact.
pub fn abprops(
    bundle: &BundleHandle,
    entries: &[ModuleEntry],
    reads: &BTreeMap<String, Vec<String>>,
) -> Result<Vec<Fact>> {
    let entry = Regex::new(r#"([a-z][a-z0-9_]*):\s*\[\s*(\d+),\s*"([a-z]+)",\s*([^,\]]+),\s*([^,\]]+)"#)?;
    let Some(e) = entries.iter().find(|e| e.name == "WAWebABPropsConfigs") else { return Ok(vec![]) };
    let src = bundle.read_module(e)?;

    let lit = |s: &str| -> serde_json::Value {
        match s.trim() {
            "!1" | "false" => serde_json::Value::Bool(false),
            "!0" | "true" => serde_json::Value::Bool(true),
            v => v.parse::<i64>().map(Into::into)
                  .unwrap_or_else(|_| serde_json::Value::String(v.trim_matches('"').to_string())),
        }
    };

    Ok(entry.captures_iter(&src).map(|c| {
        let name = c[1].to_string();
        let opaque_id: u32 = c[2].parse().unwrap_or(0);
        let mut f = fact(Kind::Ab, name.clone(),
             Data::Ab { opaque_id, r#type: c[3].to_string(), default: lit(&c[4]), alt_default: lit(&c[5]) },
             &e.name, format!(r"{name}:\s*\[\s*{opaque_id}"));
        let r = reads.get(&name).cloned().unwrap_or_default();
        let mut readers = r.clone();
        // Capped for size; read_count keeps the true total so a truncated list
        // is never mistaken for the complete one.
        readers.truncate(40);
        f.usage = Some(Usage { read_count: r.len() as u32, readers });
        f
    }).collect())
}

/// Counts how many modules read each A/B property. A property registered but
/// never read is a flag reserved ahead of its feature — recorded as zero rather
/// than dropped, because that is an early signal, not an absence.
pub fn abprop_reads(
    bundle: &BundleHandle,
    entries: &[ModuleEntry],
) -> Result<BTreeMap<String, Vec<String>>> {
    let call = Regex::new(r#"get[Aa][Bb]PropConfigValue\("([a-z0-9_]+)""#)?;
    let mut readers: BTreeMap<String, Vec<String>> = BTreeMap::new();
    for e in entries.iter().filter(|e| e.name.starts_with("WA") || e.name.starts_with("MAW")) {
        let Ok(src) = bundle.read_module(e) else { continue };
        if !src.contains("PropConfigValue") { continue }
        for c in call.captures_iter(&src) {
            let v = readers.entry(c[1].to_string()).or_default();
            // One module reading a flag twice is still one reader.
            if v.last().map(|l| l != &e.name).unwrap_or(true) {
                v.push(e.name.clone());
            }
        }
    }
    for v in readers.values_mut() {
        v.sort();
        v.dedup();
    }
    Ok(readers)
}

/// Outbound stanzas. `smax("<tag>", ...)` gives the child tags; the namespace
/// and the get/set type are not in the request module at all.
///
/// Both live in a base mixin reached through the dependency array — the
/// namespace as `xmlns: "w:g2"`, the type encoded in the mixin's *name*
/// (`BaseIQGetRequestMixin` vs `BaseIQSetRequestMixin`). Cellar's index already
/// carries `deps` per module, so this is a lookup rather than a re-parse.
///
/// Without the type the id collides: a get and a set on one namespace produce
/// the same namespace/tag pair and would silently merge into a single fact.
pub fn iq(bundle: &BundleHandle, entries: &[ModuleEntry]) -> Result<Vec<Fact>> {
    let by_name: BTreeMap<&str, &ModuleEntry> = entries.iter().map(|e| (e.name.as_str(), e)).collect();
    let xmlns_re = Regex::new(r#"xmlns:\s*"([^"]+)""#)?;
    let smax_re = Regex::new(r#"smax\("([a-z0-9_]+)""#)?;
    // Tags every IQ has. They identify nothing, so they cannot distinguish an
    // operation and must not end up in an id.
    let generic = Regex::new(r"^(iq|to|from|id|type|xmlns|error|text)$")?;

    // Depth-limited: the mixin chain is Request -> Base -> BaseIQ, so two hops
    // reaches the namespace. Unbounded recursion here would walk the whole graph.
    fn resolve<'a>(
        name: &str, by_name: &BTreeMap<&str, &'a ModuleEntry>, bundle: &BundleHandle,
        re: &Regex, depth: u8, want_type: bool,
    ) -> Option<String> {
        if depth > 2 { return None }
        let e = by_name.get(name)?;
        if want_type {
            if name.contains("IQGetRequest") { return Some("get".into()) }
            if name.contains("IQSetRequest") { return Some("set".into()) }
        } else if let Ok(src) = bundle.read_module(e)
            && let Some(c) = re.captures(&src) {
            return Some(c[1].to_string());
        }
        e.deps.iter()
            .filter(|d| d.starts_with("WASmax") && (d.contains("Mixin") || d.contains("Base")))
            .find_map(|d| resolve(d, by_name, bundle, re, depth + 1, want_type))
    }

    // Which RPC drives which request. The request module never names its own
    // caller, so this is built the only way it can be: from the other side.
    let mut rpc_of: BTreeMap<&str, &ModuleEntry> = BTreeMap::new();
    for r in entries.iter().filter(|e| e.name.ends_with("RPC")) {
        for d in &r.deps {
            if d.starts_with("WASmaxOut") && d.ends_with("Request") {
                rpc_of.entry(d.as_str()).or_insert(r);
            }
        }
    }

    let mut out = Vec::new();
    for e in entries.iter().filter(|e| e.name.starts_with("WASmaxOut") && e.name.ends_with("Request")) {
        let Some(xmlns) = resolve(&e.name, &by_name, bundle, &xmlns_re, 0, false) else { continue };
        let src = bundle.read_module(e)?;
        let mut tags: Vec<String> = smax_re.captures_iter(&src)
            .map(|c| c[1].to_string()).filter(|t| !generic.is_match(t)).collect();
        tags.sort();
        tags.dedup();
        if tags.is_empty() { continue }

        // The full stanza, off the parse tree — attributes, their codecs, and
        // the nested children the tag list only hints at.
        let request = stanza::request_with_mixins(bundle, &by_name, e, &src);

        // The stanza's own `type` first, the mixin chain second. Most requests
        // spell it out where they build it; the walk only catches the ones that
        // inherit it, which left a seventh of them reading `unknown` when the
        // answer was in their own source. Still `unknown` rather than guessed
        // when neither route resolves it: a wrong type merges two operations.
        let ty = request.as_ref()
            .and_then(|n| n.attrs.iter().find(|a| a.name == "type"))
            .and_then(|a| a.literal.clone())
            .filter(|t| t == "get" || t == "set")
            .or_else(|| resolve(&e.name, &by_name, bundle, &xmlns_re, 0, true))
            .unwrap_or_else(|| "unknown".into());

        let rpc = rpc_of.get(e.name.as_str()).copied();
        let responses = match rpc {
            Some(r) => responses_of(bundle, r, &by_name)?,
            None => Vec::new(),
        };

        let op = e.name.trim_start_matches("WASmaxOut").trim_end_matches("Request").to_string();
        let m = format!(r#"smax\("{}""#, tags[0]);
        out.push(fact(Kind::Iq, op,
                      Data::Iq { xmlns, r#type: ty, tags, request, rpc: rpc.map(|r| r.name.clone()), responses },
                      &e.name, m));
    }
    Ok(out)
}

/// The reply arms an RPC tries, paired with the stanza each one accepts.
fn responses_of(
    bundle: &BundleHandle, rpc: &ModuleEntry, by_name: &BTreeMap<&str, &ModuleEntry>,
) -> Result<Vec<IqResponse>> {
    let src = bundle.read_module(rpc)?;
    let mut out = Vec::new();
    for name in stanza::rpc_arms(&src) {
        let (node, errors) = stanza::arm(bundle, by_name, &name, 0);
        let Some(node) = node else { continue };
        // The arm is the tail of the module name past the operation it repeats:
        // `...GetExperimentConfigResponseErrorRetry` -> `ErrorRetry`.
        let arm = name.rsplit_once("Response").map(|(_, a)| a.to_string())
            .filter(|a| !a.is_empty())
            .unwrap_or_else(|| name.trim_start_matches("WASmaxIn").to_string());
        out.push(IqResponse { arm, module: name, node, errors });
    }
    Ok(out)
}

/// Constants a library must hardcode: HKDF labels, the Noise pattern. Long and
/// distinctive, so a literal search for them in a library is conclusive.
pub fn consts(bundle: &BundleHandle, entries: &[ModuleEntry]) -> Result<Vec<Fact>> {
    const WANTED: &[(&str, &str)] = &[
        ("Noise_XX_25519_AESGCM_SHA256", "noise"),
        ("WhatsApp Image Keys", "hkdf"), ("WhatsApp Video Keys", "hkdf"),
        ("WhatsApp Audio Keys", "hkdf"), ("WhatsApp Document Keys", "hkdf"),
        ("WhatsApp History Keys", "hkdf"), ("WhatsApp App State Keys", "hkdf"),
        ("WhatsApp Media Retry Notification", "hkdf"),
        ("WhatsApp Sticker Pack Keys", "hkdf"), ("WhatsApp Link Thumbnail Keys", "hkdf"),
    ];
    let mut out = Vec::new();
    for (value, group) in WANTED {
        let needle = format!("\"{value}\"");
        let found = entries.iter().filter(|e| e.name.starts_with("WA")).find(|e| {
            bundle.read_module(e).map(|s| s.contains(&needle)).unwrap_or(false)
        });
        let Some(e) = found else { continue };
        out.push(fact(Kind::Const, value.to_string(),
                      Data::Const { group: group.to_string(), value: value.to_string() },
                      &e.name, regex::escape(value)));
    }
    Ok(out)
}

/// Protobuf schemas.
///
/// The minified shape is a pair of assignments onto one local:
///
/// ```js
/// Be.name = "Message", Be.internalSpec = { conversation: [1, ...], ... }
/// ```
///
/// So the message name is given literally rather than inferred from a variable
/// name, and the field numbers — the actual wire contract — are the first
/// element of each array. Both are read from the parse tree. Brace counting
/// would work until the first `}` inside a string literal silently truncated a
/// message, and evaluating the module would mean running WhatsApp's code to
/// find out what its schema is.
pub fn proto(bundle: &BundleHandle, entries: &[ModuleEntry]) -> Result<Vec<Fact>> {
    use oxc_allocator::Allocator;
    use oxc_ast::ast::{Expression, ObjectPropertyKind, PropertyKey};
    use oxc_ast_visit::Visit;
    use oxc_parser::Parser;
    use oxc_span::SourceType;

    #[derive(Default)]
    struct Collect {
        /// local variable -> message name, from `X.name = "Message"`
        names: BTreeMap<String, String>,
        /// local variable -> fields, from `X.internalSpec = { ... }`
        specs: BTreeMap<String, BTreeMap<String, (u32, Option<String>)>>,
    }

    fn key_name(k: &PropertyKey) -> Option<String> {
        match k {
            PropertyKey::StaticIdentifier(i) => Some(i.name.to_string()),
            PropertyKey::StringLiteral(s) => Some(s.value.to_string()),
            _ => None,
        }
    }

    /// `field: [3, TYPE, Ref]`. The number is the first element and always a
    /// literal. A later element may be an identifier naming the local that holds
    /// the referenced message's spec — captured here as a variable name and
    /// resolved to a message name once the whole module has been walked.
    fn fields_of(obj: &oxc_ast::ast::ObjectExpression) -> BTreeMap<String, (u32, Option<String>)> {
        let mut out = BTreeMap::new();
        for p in &obj.properties {
            let ObjectPropertyKind::ObjectProperty(p) = p else { continue };
            let Some(name) = key_name(&p.key) else { continue };
            let Expression::ArrayExpression(arr) = &p.value else { continue };
            let Some(first) = arr.elements.first() else { continue };
            let Some(Expression::NumericLiteral(n)) = first.as_expression() else { continue };
            let reference = arr.elements.iter().skip(1).find_map(|e| match e.as_expression() {
                Some(Expression::Identifier(id)) => Some(id.name.to_string()),
                _ => None,
            });
            out.insert(name, (n.value as u32, reference));
        }
        out
    }

    impl<'a> Visit<'a> for Collect {
        fn visit_assignment_expression(&mut self, a: &oxc_ast::ast::AssignmentExpression<'a>) {
            if let Some(m) = a.left.as_member_expression()
                && let Some(prop) = m.static_property_name()
                && let Expression::Identifier(obj) = m.object()
            {
                let var = obj.name.to_string();
                match (prop, &a.right) {
                    ("name", Expression::StringLiteral(s)) => {
                        self.names.insert(var, s.value.to_string());
                    }
                    ("internalSpec", Expression::ObjectExpression(o)) => {
                        let f = fields_of(o);
                        if !f.is_empty() {
                            self.specs.insert(var, f);
                        }
                    }
                    _ => {}
                }
            }
            oxc_ast_visit::walk::walk_assignment_expression(self, a);
        }
    }

    let mut out = Vec::new();
    let mut failed = 0usize;

    for e in entries.iter().filter(|e| {
        e.name.ends_with(".pb") && (e.name.starts_with("WA") || e.name.starts_with("MAW"))
    }) {
        let Ok(src) = bundle.read_module(e) else { continue };
        let alloc = Allocator::default();
        let ret = Parser::new(&alloc, &src, SourceType::cjs()).parse();
        if ret.panicked {
            // Counted, never swallowed: a jump here means the parser or the
            // bundle format moved, not that WhatsApp deleted its schemas.
            failed += 1;
            continue;
        }
        let mut c = Collect::default();
        c.visit_program(&ret.program);

        let module = e.name.trim_end_matches(".pb").to_string();
        for (var, raw) in &c.specs {
            // A spec whose sibling `name` assignment is missing cannot be named,
            // so it is dropped rather than given a made-up identity.
            let Some(msg) = c.names.get(var) else { continue };
            // WhatsApp writes nesting with `$`. It means the same thing a dot
            // does everywhere else, so it is normalised here — otherwise every
            // consumer has to know the quirk and half of them will forget.
            let msg = msg.replace('$', ".");
            let fields = raw.iter().map(|(k, (num, r))| {
                let type_name = r.as_ref()
                    .and_then(|v| c.names.get(v))
                    .map(|n| format!("{module}.{}", n.replace('$', ".")));
                (k.clone(), ProtoField { number: *num, type_name })
            }).collect();
            out.push(fact(Kind::Proto, format!("{module}.{msg}"),
                          Data::Proto { fields, module: e.name.clone() },
                          &e.name, format!(r#"name = "{msg}""#)));
        }
    }
    if failed > 0 {
        eprintln!("  proto: {failed} module(s) failed to parse");
    }
    Ok(out)
}

/// Persisted GraphQL operations, printed from the Relay AST.
///
/// Everything is in the `.graphql` module: `params.id` is the persisted document
/// id, `operation.name` and `operationKind` name it, `argumentDefinitions` give
/// the variables, and `selections` is the full field tree. The document is not
/// server-side folklore — the bundle ships the whole thing, so it is printed
/// rather than described.
///
/// The id is data, not identity. It rotates between releases, and keying on it
/// would turn a rotation into a brand new operation instead of a change to an
/// existing one — which is the single event worth tracking here, because a
/// library holding a stale id fails silently.
pub fn mex(bundle: &BundleHandle, entries: &[ModuleEntry]) -> Result<Vec<Fact>> {
    let id_re = Regex::new(r#"id:\s*"(\d{6,})""#)?;
    let kind_re = Regex::new(r#"operationKind:\s*"([a-z]+)""#)?;
    let name_re = Regex::new(r#"name:\s*"(WAWeb[A-Za-z0-9]+)""#)?;
    let arg_re = Regex::new(r#"kind:\s*"LocalArgument",\s*name:\s*"([A-Za-z0-9_]+)""#)?;
    // Field tokens in source order, with their kind, so nesting can be rebuilt.
    let field_re = Regex::new(r#"kind:\s*"(LinkedField|ScalarField)",\s*name:\s*"([A-Za-z0-9_]+)""#)?;
    let root_re = Regex::new(r#""(xwa2_[a-z0-9_]+)""#)?;

    let mut out = Vec::new();
    for e in entries.iter().filter(|e| {
        e.name.starts_with("WAWeb") && e.name.ends_with(".graphql") && !e.name.contains("~alt-")
    }) {
        let Ok(src) = bundle.read_module(e) else { continue };
        let flat = src.replace('\n', " ");
        let Some(doc_id) = id_re.captures(&flat).map(|c| c[1].to_string()) else { continue };
        let op_kind = kind_re.captures(&flat).map(|c| c[1].to_string()).unwrap_or_else(|| "query".into());
        let name = name_re.captures(&flat).map(|c| c[1].to_string())
            .unwrap_or_else(|| e.name.trim_end_matches(".graphql").to_string());

        let mut variables: Vec<String> =
            arg_re.captures_iter(&flat).map(|c| c[1].to_string()).collect();
        variables.sort();
        variables.dedup();

        let root_field = root_re.captures(&flat).map(|c| c[1].to_string());

        // Print the document. Relay stores the tree flat with `selections`
        // nesting; a linked field opens a block and scalars are leaves, which is
        // enough structure to render something a person can read and compare.
        let mut doc = String::new();
        let vars = if variables.is_empty() { String::new() }
            else { format!("({})", variables.iter().map(|v| format!("${v}")).collect::<Vec<_>>().join(", ")) };
        doc.push_str(&format!("{op_kind} {}{vars} {{\n", name.trim_start_matches("WAWeb")));
        let mut depth = 1usize;
        let mut seen = BTreeSet::new();
        for c in field_re.captures_iter(&flat) {
            let (fk, fname) = (&c[1], c[2].to_string());
            if !seen.insert(format!("{depth}:{fname}")) { continue }
            doc.push_str(&"  ".repeat(depth));
            doc.push_str(&fname);
            if fk == "LinkedField" {
                doc.push_str(" {\n");
                depth += 1;
            } else {
                doc.push('\n');
            }
        }
        while depth > 1 { depth -= 1; doc.push_str(&"  ".repeat(depth)); doc.push_str("}\n"); }
        doc.push('}');

        let m = format!(r#"id: "{doc_id}""#);
        out.push(fact(Kind::Mex, name.clone(),
                      Data::Mex { doc_id, operation: op_kind, variables, root_field, document: doc },
                      &e.name, m));
    }
    Ok(out)
}

/// Inbound stanza handlers: what the server sends us.
///
/// A handler is identified by the stanza it matches, not by its module name.
/// That distinction matters here more than anywhere else: the parser for
/// usync device notifications is called
/// `WASmaxInUsyncNotificationAddDevicesNotificationMixin` — filtering on the
/// `Mixin` suffix, as the outbound side does with `Request`, would discard the
/// real handlers and keep the fragments.
///
/// So the signature is the *outermost* `assertTag`, plus the children the parse
/// then requires:
///
/// ```js
/// assertTag(t, "notification")
/// flattenedChildWithTag(t, "add")
/// ```
///
/// Two populations end up here. A **response** is the reply half of an outbound
/// operation and is paired to it by name. A **notification** is server-initiated
/// with nothing to pair against — which is precisely why libraries miss them:
/// nothing in their outbound code hints that the stanza exists.
pub fn sigs(bundle: &BundleHandle, entries: &[ModuleEntry], outbound: &[Fact]) -> Result<Vec<Fact>> {
    let assert_re = Regex::new(r#"assertTag\([a-z], *"([a-z:_-]+)"\)"#)?;
    let child_re = Regex::new(r#"(?:flattened|optional|required)ChildWithTag\([^,]+, *"([a-z0-9:_-]+)""#)?;
    // Roots that are actually top-level stanzas. Everything else the parsers
    // assert — `participant`, `enc`, `item` — is a nested element, and counting
    // those as handlers inflates the surface several times over.
    const ROOTS: &[&str] = &["notification", "receipt", "message", "ack", "presence", "call", "chatstate", "stream:error", "iq"];

    // Outbound stems, for pairing. 118 of 127 operations have a reply.
    let stems: BTreeSet<String> = outbound.iter()
        .filter(|f| f.kind == Kind::Iq)
        .map(|f| f.name.clone())
        .collect();

    let mut out = Vec::new();
    for e in entries.iter().filter(|e| e.name.starts_with("WASmaxIn")) {
        let Ok(src) = bundle.read_module(e) else { continue };
        // Outermost assert only: a module asserting `notification` and then
        // `participant` inside it is one handler, not two.
        let Some(root) = assert_re.captures(&src).map(|c| c[1].to_string()) else { continue };
        if !ROOTS.contains(&root.as_str()) { continue }

        let mut children: Vec<String> = child_re.captures_iter(&src)
            .map(|c| c[1].to_string()).collect();
        children.sort();
        children.dedup();
        children.truncate(4);
        if children.is_empty() { continue }

        let bare = e.name.trim_start_matches("WASmaxIn");
        let stem = bare.split("Response").next().unwrap_or(bare).to_string();
        let responds_to = stems.contains(&stem).then(|| stem.clone());

        let m = format!(r#"assertTag\([a-z], "{root}"\)"#);
        out.push(fact(Kind::Sig, bare.to_string(),
                      Data::Sig { root, children, responds_to }, &e.name, m));
    }
    Ok(out)
}

/// Attach the module graph to every fact.
///
/// Done in one pass at the end rather than inside each extractor: the graph is a
/// property of the module a fact came from, not of the fact, and every extractor
/// would otherwise repeat the same lookup.
pub fn attach_graph(facts: &mut [Fact], entries: &[ModuleEntry]) {
    const CAP: usize = 60;
    let by_name: BTreeMap<&str, &ModuleEntry> =
        entries.iter().map(|e| (e.name.as_str(), e)).collect();
    for f in facts.iter_mut() {
        let Some(e) = by_name.get(f.evidence.module.as_str()) else { continue };
        let mut deps = e.deps.clone();
        deps.sort();
        deps.dedup();
        let mut dependents = e.dependents.clone();
        dependents.sort();
        dependents.dedup();
        let (dc, pc) = (deps.len() as u32, dependents.len() as u32);
        deps.truncate(CAP);
        dependents.truncate(CAP);
        f.graph = Some(ModuleGraph { deps, dependents, dep_count: dc, dependent_count: pc });
    }
}
