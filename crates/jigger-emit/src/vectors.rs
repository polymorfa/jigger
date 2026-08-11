//! Conformance vectors: the spec, as something a library either passes or fails.
//!
//! Prose and generated constants both rely on someone reading them. A vector
//! does not: it is an input and the exact bytes expected out, so a library can
//! run the whole set in CI and find out that pinning still writes `pin` instead
//! of `pin_v1` before a user does.
//!
//! Two shapes, and the distinction matters:
//!
//! * **constant** — a value that has to match exactly. An A/B property's opaque
//!   id, a WAM field number, an app-state collection. Cheap to check and covers
//!   most of the ledger.
//! * **build** — an operation, its inputs, and the stanza that must come out.
//!   The only kind that tests behaviour rather than transcription, and the only
//!   one that catches an attribute serialised in the wrong place.
//!
//! Values are placeholders chosen by type, not real user data. A vector is about
//! shape and placement — that `jid` lands on `<user_feedback>` and not on `<iq>`
//! — and a plausible-looking phone number in a fixture invites someone to think
//! it means something.

use jigger_ir::{Data, Fact, IqAttr, IqNode};
use serde::Serialize;

#[derive(Debug, Serialize)]
pub struct Vector {
    pub id: String,
    pub kind: String,
    pub name: String,
    /// `constant` or `build`.
    pub check: String,
    /// Inputs, for a `build`. Empty for a constant.
    #[serde(skip_serializing_if = "serde_json::Map::is_empty")]
    pub input: serde_json::Map<String, serde_json::Value>,
    /// What must come out: a canonical stanza string, or the values themselves.
    pub expect: serde_json::Value,
}

/// A stand-in value for an attribute of a given type.
///
/// Fixed per type rather than random, so two runs of the generator produce
/// byte-identical vectors and a diff of the fixture file is a protocol change
/// rather than noise.
fn placeholder(ty: &str) -> &'static str {
    match ty {
        "jid" => "1555550100@s.whatsapp.net",
        "int" | "timestamp" => "1",
        "bool" => "true",
        "bytes" => "AAEC",
        _ => "x",
    }
}

/// The stanza a builder must produce, with placeholders substituted.
///
/// Attributes are emitted in the order the bundle declares them, because that is
/// the order WhatsApp's own encoder writes and a library that sorts them is
/// producing different bytes for the same logical stanza.
fn canonical(n: &IqNode, out: &mut String) {
    out.push('<');
    out.push_str(&n.tag);
    for a in &n.attrs {
        // Optional attributes are omitted: a vector that supplied every optional
        // would test one arbitrary combination and quietly assert that the
        // library never omits them.
        if a.optional {
            continue;
        }
        let v = match &a.literal {
            Some(l) => l.clone(),
            None if a.ty == "id" => "<generated>".into(),
            None => placeholder(&a.ty).to_string(),
        };
        out.push_str(&format!(" {}=\"{}\"", a.name, v));
    }
    let kids: Vec<&IqNode> = n.children.iter().filter(|c| c.card != "optional").collect();
    if kids.is_empty() {
        out.push_str("/>");
        return;
    }
    out.push('>');
    for c in kids {
        canonical(c, out);
    }
    out.push_str(&format!("</{}>", n.tag));
}

fn free_attrs(n: &IqNode, out: &mut Vec<IqAttr>) {
    for a in &n.attrs {
        if a.literal.is_none() && a.ty != "id" && !a.optional {
            out.push(a.clone());
        }
    }
    for c in &n.children {
        free_attrs(c, out);
    }
}

/// Every vector a fact yields. Most yield exactly one.
pub fn vectors_for(f: &Fact) -> Vec<Vector> {
    let base = |check: &str, input: serde_json::Map<String, serde_json::Value>, expect: serde_json::Value| Vector {
        id: f.id.clone(),
        kind: f.kind.as_str().to_string(),
        name: f.name.clone(),
        check: check.to_string(),
        input,
        expect,
    };

    match &f.data {
        Data::Iq { request: Some(req), responses, .. } => {
            let mut attrs = Vec::new();
            free_attrs(req, &mut attrs);
            let mut input = serde_json::Map::new();
            for a in &attrs {
                input.insert(a.name.clone(), placeholder(&a.ty).into());
            }
            let mut xml = String::new();
            canonical(req, &mut xml);

            let mut out = vec![base("build", input, serde_json::json!(xml))];

            // The reply arms, in the order the client tries them. A library that
            // classifies a reply differently fails here even if its request is
            // byte-perfect, and that is the failure nobody notices otherwise.
            if !responses.is_empty() {
                out.push(base(
                    "constant",
                    serde_json::Map::new(),
                    serde_json::json!({
                        "response_arms": responses.iter().map(|r| &r.arm).collect::<Vec<_>>(),
                        "errors": responses.iter().flat_map(|r| r.errors.clone()).collect::<Vec<_>>(),
                    }),
                ));
            }
            out
        }

        Data::Ab { opaque_id, r#type, default, alt_default } => vec![base(
            "constant",
            serde_json::Map::new(),
            serde_json::json!({
                "opaque_id": opaque_id, "type": r#type,
                "default": default, "alt_default": alt_default,
            }),
        )],

        Data::Wam { event_id, fields, .. } => vec![base(
            "constant",
            serde_json::Map::new(),
            serde_json::json!({
                "event_id": event_id,
                "fields": fields.iter()
                    .map(|(k, v)| (if v.wire.is_empty() { k.clone() } else { v.wire.clone() }, serde_json::json!({
                        "id": v.id, "type": v.r#type,
                    })))
                    .collect::<serde_json::Map<_, _>>(),
            }),
        )],

        Data::Proto { fields, .. } => vec![base(
            "constant",
            serde_json::Map::new(),
            serde_json::json!(fields.iter()
                .map(|(k, v)| (k.clone(), serde_json::json!(v.number)))
                .collect::<serde_json::Map<_, _>>()),
        )],

        Data::Enum { variants, .. } => vec![base(
            "constant",
            serde_json::Map::new(),
            serde_json::json!(variants.iter()
                .map(|v| (v.name.clone(), v.value.clone()))
                .collect::<serde_json::Map<_, _>>()),
        )],

        Data::AppState { index_name, collection, version, .. } => vec![base(
            "constant",
            serde_json::Map::new(),
            serde_json::json!({
                "index": index_name, "collection": collection, "version": version,
            }),
        )],

        Data::Mex { doc_id, operation, .. } => vec![base(
            "constant",
            serde_json::Map::new(),
            serde_json::json!({ "doc_id": doc_id, "operation": operation }),
        )],

        Data::Const { value, .. } => vec![base(
            "constant",
            serde_json::Map::new(),
            serde_json::json!(value),
        )],

        // An IQ with no readable request, and inbound signatures: nothing here
        // is an input/output pair, so there is no vector to write. Emitting an
        // empty one would inflate the count without testing anything.
        _ => vec![],
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use jigger_ir::{Evidence, Kind};

    fn attr(name: &str, ty: &str, lit: Option<&str>, opt: bool) -> IqAttr {
        IqAttr {
            name: name.into(),
            ty: ty.into(),
            literal: lit.map(str::to_string),
            optional: opt,
        }
    }

    #[test]
    fn build_vector_places_attributes_on_the_right_element() {
        let req = IqNode {
            tag: "iq".into(),
            attrs: vec![
                attr("xmlns", "string", Some("w:biz:msg_feedback"), false),
                attr("type", "string", Some("set"), false),
                attr("id", "id", None, false),
            ],
            children: vec![IqNode {
                tag: "user_feedback".into(),
                attrs: vec![
                    attr("jid", "jid", None, false),
                    attr("feedback", "string", None, true),
                ],
                children: vec![],
                card: "one".into(),
            }],
            card: "one".into(),
        };
        let f = Fact {
            id: "iq:test".into(),
            kind: Kind::Iq,
            name: "Test".into(),
            data: Data::Iq {
                xmlns: "w:biz:msg_feedback".into(),
                r#type: "set".into(),
                tags: vec!["user_feedback".into()],
                request: Some(req),
                rpc: None,
                responses: vec![],
            },
            evidence: Evidence { module: "m".into(), matches: "x".into() },
            literals: vec![],
            usage: None,
            graph: None,
        };

        let v = &vectors_for(&f)[0];
        assert_eq!(v.check, "build");
        // The jid belongs on the child, not on the `<iq>`. Getting this wrong is
        // a real and easy mistake and nothing else in the tooling catches it.
        assert_eq!(
            v.expect.as_str().unwrap(),
            "<iq xmlns=\"w:biz:msg_feedback\" type=\"set\" id=\"<generated>\">\
             <user_feedback jid=\"1555550100@s.whatsapp.net\"/></iq>",
        );
        // Optional attributes are absent: including one would assert the library
        // must always send it.
        assert!(!v.expect.as_str().unwrap().contains("feedback="));
        assert_eq!(v.input.len(), 1);
        assert!(v.input.contains_key("jid"));
    }
}
