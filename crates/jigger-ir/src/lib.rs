//! The IR: what jigger knows about the WhatsApp Web protocol, and how it is named.
//!
//! # Identity
//!
//! A fact's id **is a wire literal**. Not a name anyone chose.
//!
//! ```text
//! wam:4750
//! iq:privacy/set/category
//! ab:wds_web_text_layout
//! proto:WAWebProtobufsE2E.Message
//! const:hkdf/WhatsApp Image Keys
//! ```
//!
//! A wire literal is the only durable identity in this domain, because it is
//! stable exactly to the extent that changing it would break the protocol.
//! Module names drift, line numbers move on every re-minification, and an
//! invented id scheme has no relationship to anything.
//!
//! That one decision is why the system holds together: the same string is the
//! key in the generated data, the citation written in the spec, the constant
//! emitted into Go, TypeScript and Rust, and the needle the coverage scanner
//! looks for in a library. One identity space, four consumers, no translation
//! table to fall out of sync.
//!
//! # Evidence
//!
//! Content-addressed, never line-addressed. [`Evidence`] carries a module and a
//! pattern that must match inside it; line numbers are recomputed when rendering
//! and never stored, so re-minification does not rot every reference at once.
//!
//! The module's own hash is deliberately *not* part of a fact. It changes on
//! essentially every release even when the protocol did not, and committing it
//! alongside the fact would make every fact in a touched module look modified,
//! drowning the real signal on the first run.

use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;

/// Everything jigger can currently extract. Adding a variant is a deliberate
/// act: each one needs an extractor, an identity rule, an emitter and a
/// coverage rule, and a kind that has only some of those is worse than absent.
#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum Kind {
    /// Analytics event: numeric id and numbered fields.
    Wam,
    /// Outbound stanza: namespace, type and distinguishing child tags.
    Iq,
    /// A/B property: readable name plus the opaque numeric id used on the wire.
    Ab,
    /// Protobuf message. Its native IR is `.proto`, not JSON.
    Proto,
    /// A constant lifted from the bundle: an HKDF label, a protocol string.
    Const,
    /// A persisted GraphQL operation.
    Mex,
    /// An inbound stanza handler: something the server sends us.
    Sig,
    /// A named value set. A field typed `MEDIA_TYPE` carries a number, and the
    /// number is meaningless without this.
    Enum,
    /// An app-state (syncd) mutation action: how a star, mute or pin syncs
    /// between devices.
    AppState,
}

impl Kind {
    pub fn as_str(self) -> &'static str {
        match self {
            Kind::Wam => "wam",
            Kind::Iq => "iq",
            Kind::Ab => "ab",
            Kind::Proto => "proto",
            Kind::Const => "const",
            Kind::Mex => "mex",
            Kind::Sig => "sig",
            Kind::Enum => "enum",
            Kind::AppState => "appstate",
        }
    }
}

/// Where a claim comes from, addressed by content rather than position.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct Evidence {
    /// Module the fact was read out of.
    pub module: String,
    /// A pattern that must match inside that module. Re-running it is how a
    /// reader verifies the claim, and how line numbers are derived on demand.
    pub matches: String,
}

/// The kind-specific payload. This is the part a diff between two revisions is
/// actually about, so nothing volatile belongs in here.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(tag = "kind", rename_all = "lowercase")]
pub enum Data {
    Wam {
        event_id: u32,
        /// field name -> (field number, wire type)
        fields: BTreeMap<String, WamField>,
        /// Per-channel sampling weights. An event weighted 0 on a channel is
        /// defined but never sent there, which is why "the event exists" and
        /// "the event arrives" are different questions.
        #[serde(default, skip_serializing_if = "Vec::is_empty")]
        weights: Vec<i64>,
        /// `regular`, `critical`, … — which pipeline carries it.
        #[serde(default, skip_serializing_if = "Option::is_none")]
        channel: Option<String>,
    },
    Iq {
        xmlns: String,
        /// `get`, `set`, or `unknown` when neither the stanza nor the mixin walk
        /// resolved it. Recorded as unknown rather than guessed, because a wrong
        /// type here silently merges two different operations.
        r#type: String,
        tags: Vec<String>,
        /// The stanza actually built, with every attribute typed by the codec
        /// the bundle validates it with.
        #[serde(default, skip_serializing_if = "Option::is_none")]
        request: Option<IqNode>,
        /// The RPC module that sends this request and parses what comes back.
        /// Its absence means the request is built somewhere we could not follow.
        #[serde(default, skip_serializing_if = "Option::is_none")]
        rpc: Option<String>,
        /// The replies the RPC tries, in the order it tries them.
        ///
        /// A library that only implements the success arm silently mishandles
        /// every error arm, so the alternatives are as much a part of the
        /// contract as the request is.
        #[serde(default, skip_serializing_if = "Vec::is_empty")]
        responses: Vec<IqResponse>,
    },
    Ab {
        /// What WhatsApp uses on the wire. On its own it teaches nothing.
        opaque_id: u32,
        r#type: String,
        default: serde_json::Value,
        alt_default: serde_json::Value,
    },
    Proto {
        /// field name -> number, and the message it references if it has one.
        fields: BTreeMap<String, ProtoField>,
        module: String,
    },
    Const {
        group: String,
        value: String,
    },
    /// A persisted GraphQL operation. The `doc_id` is what actually travels in
    /// `<iq xmlns="w:mex"><query query_id="...">`, and it rotates between
    /// releases — a library holding a stale one fails silently, which is why
    /// this is worth tracking at all.
    Mex {
        /// The persisted document id. Deliberately *not* part of the fact's
        /// identity: this is the part that rotates. Keying on it would make a
        /// rotation look like a brand new operation instead of a change to an
        /// existing one, which is exactly the event worth tracking.
        doc_id: String,
        operation: String,
        variables: Vec<String>,
        /// Argument definitions with their GraphQL types, which `variables`
        /// alone cannot carry.
        #[serde(default, skip_serializing_if = "Vec::is_empty")]
        args: Vec<GqlArg>,
        /// The selection tree, as Relay records it — types, arguments,
        /// plurality and all. The printed document is derived from this; it is
        /// kept because a tree can be navigated and a string cannot.
        #[serde(default, skip_serializing_if = "Vec::is_empty")]
        selections: Vec<GqlField>,
        /// The `xwa2_*` root the response hangs off, when there is one.
        #[serde(default, skip_serializing_if = "Option::is_none")]
        root_field: Option<String>,
        /// The document, printed from the Relay AST the bundle ships.
        #[serde(default, skip_serializing_if = "String::is_empty")]
        document: String,
    },
    /// One app-state mutation action.
    ///
    /// Getting the collection or the version wrong desynchronises two devices
    /// silently — there is no error, they simply disagree from then on — which
    /// is why these three fields travel together and not as three lookups.
    AppState {
        /// The index name on the wire. Read, never derived: `Pin` is `pin_v1`
        /// and a separate deprecated action owns `pin`.
        index_name: String,
        /// Which collection carries it: `regular_high`, `critical_block`, …
        #[serde(default, skip_serializing_if = "Option::is_none")]
        collection: Option<String>,
        /// The action's schema version. A mutation written at the wrong version
        /// is rejected or, worse, misparsed.
        #[serde(default, skip_serializing_if = "Option::is_none")]
        version: Option<u32>,
        /// The `SyncActionValue` field carrying the payload, when it could be
        /// resolved against that message. Absent rather than guessed.
        #[serde(default, skip_serializing_if = "Option::is_none")]
        value_field: Option<String>,
        /// Named positions in the composite index (`chatJidIndex = 1`).
        #[serde(default, skip_serializing_if = "BTreeMap::is_empty")]
        index_fields: BTreeMap<String, u32>,
    },
    /// A named value set, joined to a field by its exported name.
    ///
    /// The exported name is the identity rather than the module name, because
    /// that is the string a field's type refers to — the only thing that links
    /// `mediaType: [3, TYPES.MEDIA_TYPE]` to the 80 variants it can hold.
    Enum {
        module: String,
        variants: Vec<EnumVariant>,
    },
    /// Inbound. The client parses these rather than building them.
    ///
    /// Two populations live here and they behave differently. A *response* is
    /// the reply half of an outbound operation and pairs with it by name. A
    /// *notification* is server-initiated with nothing to pair against, which is
    /// exactly why it is easy to miss: nothing in a library's outbound code
    /// hints that it exists.
    Sig {
        /// Root stanza tag: `notification`, `receipt`, `message`, `ack`, `iq`.
        root: String,
        /// Child tags the parser requires.
        children: Vec<String>,
        /// The outbound operation this answers, when it is a response.
        #[serde(default, skip_serializing_if = "Option::is_none")]
        responds_to: Option<String>,
    },
}

/// A node in the inbound dispatch table.
///
/// The tree mirrors the nested switch the client actually runs: root tag, then
/// the `type` attribute, then — for a few — the first child's tag. Each level
/// records what it keys on, because "there is a notification called encrypt" and
/// "the client re-dispatches encrypt on its first child" are different facts and
/// only the second tells you how to handle it.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct Route {
    /// The literal this arm matches — `notification`, `server_sync`, `count`.
    pub value: String,
    /// What the switch keys on: `tag`, `type`, or the child tag it inspects.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub on: Option<String>,
    /// Where it lands. Absent on an arm that only re-dispatches.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub handler: Option<Handler>,
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub variants: Vec<Route>,
}

/// The function a routed stanza reaches.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct Handler {
    pub module: String,
    /// `default` when the module is lazily loaded and called directly.
    pub method: String,
}

/// One name/value pair of an enum. The value is whatever the bundle uses —
/// numbers for analytics enums, strings for stanza attributes.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct EnumVariant {
    pub name: String,
    pub value: serde_json::Value,
}

/// One argument a persisted GraphQL operation takes.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct GqlArg {
    pub name: String,
    /// The GraphQL type, when Relay recorded one.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub ty: Option<String>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub default: Option<String>,
}

/// One node of a GraphQL selection tree.
///
/// Kept as a tree rather than only as printed text because a tree can be walked:
/// a concrete type is something to link to, and a document is a string.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct GqlField {
    pub name: String,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub alias: Option<String>,
    /// The concrete type a linked field returns.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub ty: Option<String>,
    /// A list-typed field. `categories` and `category` are different contracts.
    #[serde(default, skip_serializing_if = "std::ops::Not::not")]
    pub plural: bool,
    /// Arguments, already rendered: `query_params: $query_params`, `first: 10`.
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub args: Vec<String>,
    /// `ScalarField`, `LinkedField`, `InlineFragment`, `FragmentSpread`, …
    pub kind: String,
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub selections: Vec<GqlField>,
}

/// One protobuf field.
///
/// `type_name` is the message a field points at, resolved through the local
/// variable the schema assigns it to. Without it every field renders as `bytes`,
/// which is both wrong and unnavigable — the whole value of a schema view is
/// being able to follow a field into the message it references.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct ProtoField {
    pub number: u32,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub type_name: Option<String>,
}

/// One arm of an IQ's reply — a `WASmaxIn*Response*` parser.
///
/// The client does not get a reply, it gets *one of these*, decided by trying
/// each parser in turn until one accepts. So the arms and their order are the
/// contract, not a detail: an implementation that assumes success is the only
/// shape mishandles every error the server actually sends.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct IqResponse {
    /// `Success`, `ErrorNoRetry`, `ErrorRetry` — the arm, stripped of the
    /// operation name it repeats.
    pub arm: String,
    pub module: String,
    /// The stanza this arm accepts.
    pub node: IqNode,
    /// The named errors this arm can resolve to — `IQErrorRateOverlimit`,
    /// `IQErrorForbidden`. An arm that lists none is not an error arm.
    ///
    /// The distinction matters at the call site: rate-overlimit is worth
    /// retrying and forbidden never is, and a library that only sees "an error
    /// came back" cannot tell them apart.
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub errors: Vec<String>,
}

/// One element of a stanza, with everything the wire needs to carry it.
///
/// The same type describes both directions on purpose. A request module builds
/// this tree with `smax(tag, attrs, ...children)` and a response module takes it
/// apart with `assertTag`/`childWithTag`/`attrString`; both are describing the
/// same XML, and holding them in one shape is what makes a request and its reply
/// comparable at all.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct IqNode {
    pub tag: String,
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub attrs: Vec<IqAttr>,
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub children: Vec<IqNode>,
    /// How the parent carries it: `one`, `optional` or `repeated`.
    pub card: String,
}

/// One attribute, with the codec the bundle applies to it.
///
/// The type is not inferred from the value — it is read off the codec the
/// stanza builder wraps the value in (`WAWap.JID`, `CUSTOM_STRING`,
/// `attrIntRange`), which is the same function that validates it. That makes
/// `jid` mean the server will reject anything else, rather than "a string that
/// looked like a jid in the one example we saw".
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct IqAttr {
    pub name: String,
    /// `jid`, `string`, `int`, `bool`, `bytes`, `enum`, or `id`.
    pub ty: String,
    /// Set when the value is pinned rather than supplied: `type="get"`,
    /// `protocol="1"`. A library that sends anything else is simply wrong.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub literal: Option<String>,
    pub optional: bool,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct WamField {
    pub id: u32,
    /// The declared type: a scalar (`STRING`, `INTEGER`) or an enum's name.
    pub r#type: String,
    /// snake_case name as it appears on the wire; the key is camelCase.
    #[serde(default, skip_serializing_if = "String::is_empty")]
    pub wire: String,
    /// The enum whose value set this field draws from, when it is not a scalar.
    /// Joins to `enum:<name>`.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub enum_ref: Option<String>,
    /// Constraints the client asserts before sending, verbatim
    /// (`"psa_read_count >= 0"`). A value outside them never reaches the wire.
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub constraints: Vec<String>,
}

/// One thing the client does.
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Fact {
    pub id: String,
    pub kind: Kind,
    pub name: String,
    pub data: Data,
    pub evidence: Evidence,
    /// The literals a library must contain to be said to implement this. Derived
    /// once here so no consumer re-derives it and gets it subtly different.
    pub literals: Vec<String>,
    /// Usage, deliberately outside `data`.
    ///
    /// How many modules read an A/B property is genuinely useful — zero means a
    /// flag registered ahead of its feature — but it is not protocol truth, and
    /// it moves constantly. Left inside `data` it dominated the revision diff
    /// 60 to 1: 297 read-count wobbles against 5 default flips, and a default
    /// flipping is the rollout signal the whole system exists to surface.
    ///
    /// Same rule as the module hash, which is why neither lives in `data`:
    /// anything that churns independently of the protocol stays out of the part
    /// that gets diffed.
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub usage: Option<Usage>,
    /// The module graph around the module this fact came from.
    ///
    /// Cellar computes both directions while indexing, and dependents in
    /// particular cannot be recovered any other way: minified call sites
    /// reference modules positionally as `d[3]`, never by name, so grep cannot
    /// answer "what uses this".
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub graph: Option<ModuleGraph>,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct ModuleGraph {
    /// What the defining module imports.
    pub deps: Vec<String>,
    /// What imports the defining module. Capped, with `dependent_count`
    /// carrying the true total so a truncated list never reads as complete.
    pub dependents: Vec<String>,
    pub dep_count: u32,
    pub dependent_count: u32,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct Usage {
    /// How many modules read this. Zero means registered but not wired up.
    pub read_count: u32,
    /// *Which* modules read it. A count tells you a flag is live; the list tells
    /// you what it gates, which is the only thing that makes an opaque numeric
    /// id mean anything. Capped, with `read_count` still reporting the true
    /// total, so a truncated list never reads as the whole story.
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub readers: Vec<String>,
}

impl Fact {
    /// The identity rule, in one place. Every id is built from wire literals so
    /// that two facts sharing an id genuinely produce the same bytes.
    pub fn make_id(kind: Kind, name: &str, data: &Data) -> String {
        match data {
            Data::Wam { event_id, .. } => format!("wam:{event_id}"),
            Data::Iq { xmlns, r#type, tags, .. } => {
                format!("iq:{xmlns}/{}/{}", r#type, tags.join("+"))
            }
            Data::Ab { .. } => format!("ab:{name}"),
            Data::Proto { .. } => format!("proto:{name}"),
            Data::Const { group, value } => format!("const:{group}/{value}"),
            Data::Enum { .. } => format!("enum:{name}"),
            // The index name, because that is the string on the wire — the
            // action's identifier in the client is a local convenience.
            Data::AppState { index_name, .. } => format!("appstate:{index_name}"),
            Data::Mex { .. } => format!("mex:{name}"),
            Data::Sig { root, children, .. } => format!("sig:{root}/{}", children.join("+")),
        }
        .pipe(|s| {
            let _ = kind;
            s
        })
    }

    pub fn literals_for(name: &str, data: &Data) -> Vec<String> {
        match data {
            Data::Wam { event_id, .. } => vec![event_id.to_string()],
            Data::Iq { xmlns, tags, .. } => {
                let mut v = vec![xmlns.clone()];
                v.extend(tags.iter().cloned());
                v
            }
            // Both identities matter: the name is what a human and a library
            // grep for, the opaque id is what travels on the wire.
            Data::Ab { opaque_id, .. } => vec![name.to_string(), opaque_id.to_string()],
            Data::Proto { .. } => vec![name.rsplit('.').next().unwrap_or(name).to_string()],
            Data::Const { value, .. } => vec![value.clone()],
            // The enum's own name plus every variant name. A library that has
            // transcribed the set will contain the variant names verbatim —
            // they are SCREAMING_SNAKE and distinctive enough to be conclusive.
            Data::AppState { index_name, value_field, .. } => {
                let mut v = vec![index_name.clone(), name.to_string()];
                v.extend(value_field.clone());
                v
            }
            Data::Enum { variants, .. } => {
                let mut v = vec![name.to_string()];
                v.extend(variants.iter().map(|x| x.name.clone()));
                v
            }
            // The doc id is the only thing that appears on the wire, and the
            // only thing a library can be checked against.
            // Both: a library may hold the id, the operation name, or the
            // response root. Any of the three is evidence it implements this.
            Data::Mex { doc_id, root_field, .. } => {
                let mut v = vec![doc_id.clone(), name.to_string()];
                v.extend(root_field.clone());
                v
            }
            Data::Sig { root, children, .. } => {
                let mut v = vec![root.clone()];
                v.extend(children.iter().cloned());
                v
            }
        }
    }

    /// A filesystem-safe, human-readable slug.
    ///
    /// The authoritative id always lives *inside* the file, so the slug is
    /// cosmetic: a collision or a truncation costs readability, never
    /// correctness. That is what lets it be capped — some IQ operations join a
    /// dozen child tags and blow past the 255-byte filename limit, so anything
    /// over the cap is cut and given a short hash of the full id to keep two
    /// long neighbours distinguishable.
    pub fn slug(&self) -> String {
        const MAX: usize = 96;
        let body: String = self
            .id
            .split_once(':')
            .map(|(_, rest)| rest)
            .unwrap_or(&self.id)
            .chars()
            .map(|c| match c {
                '/' => '~',
                ' ' => '_',
                c if c.is_ascii_alphanumeric() || matches!(c, '.' | '-' | '_' | '~' | '+') => c,
                _ => '-',
            })
            .collect();
        if body.len() <= MAX {
            return body;
        }
        let mut h: u64 = 0xcbf2_9ce4_8422_2325;
        for b in self.id.as_bytes() {
            h ^= *b as u64;
            h = h.wrapping_mul(0x100_0000_01b3);
        }
        let mut cut = MAX - 9;
        while !body.is_char_boundary(cut) {
            cut -= 1;
        }
        format!("{}-{:08x}", &body[..cut], h as u32)
    }
}

trait Pipe: Sized {
    fn pipe<T>(self, f: impl FnOnce(Self) -> T) -> T {
        f(self)
    }
}
impl<T> Pipe for T {}

/// The whole extracted surface for one revision.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Ir {
    pub version: u32,
    pub revision: u64,
    pub facts: Vec<Fact>,
}

impl Ir {
    /// Sorted by id so the emitted JSON is byte-identical run to run and a diff
    /// of two revisions is readable.
    pub fn normalized(mut self) -> Self {
        self.facts.sort_by(|a, b| a.id.cmp(&b.id));
        self.facts.dedup_by(|a, b| a.id == b.id);
        self
    }
}
