//! App-state (syncd) mutation actions.
//!
//! The multi-device sync surface: every star, mute, pin, archive and label edit
//! travels as a mutation in a named collection, and a client that gets the
//! collection or the version wrong desynchronises silently — no error, just two
//! devices that disagree forever.
//!
//! Three things have to line up and they live in three places:
//!
//! ```text
//! // WAWebSyncdConst — the wire names
//! Actions        = { Star: "star", Pin: "pin_v1", … }
//! CollectionName = { RegularHigh: "regular_high", … }
//!
//! // WAWebStarMessageSync — the handler
//! e.collectionName = CollectionName.RegularHigh;
//! getVersion() { return 2 }
//! getAction()  { return Actions.Star }
//!
//! // WAWebProtobufSyncAction — the payload
//! SyncActionValue { starAction = 1, … }
//! ```
//!
//! Note `Pin: "pin_v1"`. The index name on the wire is not the action's name and
//! not derivable from it — there is a deprecated `pin` alongside it. Anything
//! that guesses this string gets pinning wrong on every device.

use anyhow::Result;
use cellar_core::{BundleHandle, ModuleEntry};
use jigger_ir::{Data, Fact, Kind};
use regex::Regex;
use std::collections::BTreeMap;

const CONST_MODULE: &str = "WAWebSyncdConst";

/// A `$InternalEnum({ Name: "wire" })` table, as name -> wire value.
fn table(src: &str, after: &str) -> BTreeMap<String, String> {
    let mut out = BTreeMap::new();
    let Some(start) = src.find(after) else { return out };
    let rest = &src[start..];
    let Some(open) = rest.find('{') else { return out };
    let Some(close) = rest[open..].find('}') else { return out };
    let body = &rest[open..open + close];
    let re = Regex::new(r#"(\w+):\s*"([^"]+)""#).expect("static regex");
    for c in re.captures_iter(body) {
        out.insert(c[1].to_string(), c[2].to_string());
    }
    out
}

/// The two wire-name tables from `WAWebSyncdConst`.
///
/// Anchored on the exported symbol rather than on position, because both are
/// assigned to one-letter locals and only the export names them.
pub fn tables(src: &str) -> (BTreeMap<String, String>, BTreeMap<String, String>) {
    // `l.Actions = h` — find which local, then read the object it was built from.
    let local = |export: &str| -> Option<String> {
        let re = Regex::new(&format!(r"\.{export}\s*=\s*(\w+)")).ok()?;
        re.captures(src).map(|c| c[1].to_string())
    };
    let of = |export: &str| -> BTreeMap<String, String> {
        match local(export) {
            Some(v) => table(src, &format!("{v} = ")),
            None => BTreeMap::new(),
        }
    };
    (of("Actions"), of("CollectionName"))
}

/// The `SyncActionValue` field that carries an action's payload.
///
/// Not derived. `Star` is `starAction` and the convention looks safe until
/// `Archive` turns out to be `archiveChatAction` and `InteractiveMessageAction`
/// would derive to `interactiveMessageActionAction`. A wrong field name is worse
/// than none — it names a field that exists nowhere and reads as verified — so
/// this resolves against the message actually extracted and gives up otherwise.
fn value_field(action: &str, fields: &[String]) -> Option<String> {
    let camel = format!("{}{}", action[..1].to_lowercase(), &action[1..]);
    let exact = format!("{camel}Action");
    if fields.iter().any(|f| f == &exact) {
        return Some(exact);
    }
    // A unique field beginning with the action name. Ambiguity means the
    // convention has broken down and guessing would pick one of several.
    let mut hits = fields.iter().filter(|f| f.starts_with(&camel));
    let first = hits.next()?;
    hits.next().is_none().then(|| first.clone())
}

pub fn appstate(
    bundle: &BundleHandle,
    entries: &[ModuleEntry],
    sync_action_fields: &[String],
) -> Result<Vec<Fact>> {
    let Some(c) = entries.iter().find(|e| e.name == CONST_MODULE) else { return Ok(vec![]) };
    let (actions, collections) = tables(&bundle.read_module(c)?);
    if actions.is_empty() {
        return Ok(vec![]);
    }

    let get_action = Regex::new(r"getAction\s*=\s*function[^{]*\{[^}]*Actions\.(\w+)")?;
    let coll = Regex::new(r"collectionName\s*=\s*[^;]*CollectionName\.(\w+)")?;
    let version = Regex::new(r"getVersion\s*=\s*function[^{]*\{\s*return\s+(\d+)")?;
    // `e.chatJidIndex = 1` — which slot of the composite index holds the chat.
    let idx = Regex::new(r"(\w*[Ii]ndex)\s*=\s*(\d+)")?;

    // Handler modules only. A module that merely mentions `Actions.Star` is a
    // caller, not the handler, and would contribute a duplicate with no
    // collection or version attached.
    let mut by_action: BTreeMap<String, Fact> = BTreeMap::new();
    for e in entries.iter().filter(|e| e.name.starts_with("WAWeb") && !e.name.contains("~alt-")) {
        let Ok(src) = bundle.read_module(e) else { continue };
        if !src.contains("getAction") || !src.contains("Actions.") {
            continue;
        }
        let Some(a) = get_action.captures(&src) else { continue };
        let action = a[1].to_string();
        let Some(index_name) = actions.get(&action).cloned() else { continue };

        let collection = coll.captures(&src)
            .and_then(|c| collections.get(&c[1]).cloned());
        let version = version.captures(&src).and_then(|c| c[1].parse::<u32>().ok());
        let index_fields: BTreeMap<String, u32> = idx.captures_iter(&src)
            .filter_map(|c| Some((c[1].to_string(), c[2].parse().ok()?)))
            .filter(|(k, _)| k != "index")
            .collect();

        let value_field = value_field(&action, sync_action_fields);

        let m = format!(r#"Actions\.{}"#, regex::escape(&action));
        let f = crate::fact(
            Kind::AppState,
            action.clone(),
            Data::AppState {
                index_name,
                collection,
                version,
                value_field,
                index_fields,
            },
            &e.name,
            m,
        );
        // First handler wins; a later module referencing the same action is a
        // caller or an alt-chunk copy.
        by_action.entry(action).or_insert(f);
    }
    Ok(by_action.into_values().collect())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn payload_field_is_resolved_against_the_message_not_guessed() {
        let fields: Vec<String> = ["starAction", "archiveChatAction", "pinAction", "muteAction"]
            .iter().map(|s| s.to_string()).collect();
        assert_eq!(value_field("Star", &fields).as_deref(), Some("starAction"));
        // The convention breaks here, and deriving would produce `archiveAction`
        // — a field that exists in no message.
        assert_eq!(value_field("Archive", &fields).as_deref(), Some("archiveChatAction"));
        // Nothing plausible: better to say so than to name something imaginary.
        assert_eq!(value_field("InteractiveMessageAction", &fields), None);
    }

    const CONSTS: &str = r#"
__d("WAWebSyncdConst", ["$InternalEnum"], (function(t, n, r, o, a, i, l) {
    var e, h = (e = n("$InternalEnum"))({
        Star: "star",
        PinDEPRECATED: "pin",
        Pin: "pin_v1",
        Mute: "mute"
    }), y = e({
        Regular: "regular",
        RegularHigh: "regular_high"
    });
    l.Actions = h, l.CollectionName = y;
}), 98);"#;

    #[test]
    fn wire_index_names_are_read_not_derived() {
        let (actions, collections) = tables(CONSTS);
        assert_eq!(actions.get("Star").map(String::as_str), Some("star"));
        // The one that matters: `Pin` is `pin_v1` on the wire, and `pin` is a
        // different, deprecated action. Deriving the name from `Pin` produces
        // the wrong string and silently targets the dead index.
        assert_eq!(actions.get("Pin").map(String::as_str), Some("pin_v1"));
        assert_eq!(actions.get("PinDEPRECATED").map(String::as_str), Some("pin"));
        assert_eq!(collections.get("RegularHigh").map(String::as_str), Some("regular_high"));
    }
}
