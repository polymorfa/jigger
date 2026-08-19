// Wire-protocol IR types. A fact's `id` is itself a wire literal (the exact
// bytes that appear on the socket), which is why it doubles as the primary key,
// the codegen key, and the string a coverage scanner greps for. Never prettify
// an id away.
//
// Schema note: the Rust extractor emits snake_case inside `data` (event_id,
// opaque_id, read_count) and a serde `kind` tag duplicated inside `data` — the
// inner tag is ignored; the outer `fact.kind` is authoritative.

export type FactKind =
  | "ab" | "wam" | "iq" | "const" | "proto" | "mex" | "sig" | "enum" | "appstate";

export const FACT_KINDS: FactKind[] =
  ["ab", "wam", "iq", "const", "proto", "mex", "sig", "enum", "appstate"];

// --- per-kind data ---

export type WamField = {
  id: number;
  /** A scalar (`STRING`, `INTEGER`, `TIMER`) or the name of an enum. */
  type: string;
  /** snake_case name as it travels; the key is the client's camelCase. */
  wire?: string;
  /** The value set this field draws from. Joins to `enum:<name>`. */
  enum_ref?: string;
  /** Constraints the client asserts before sending, verbatim. */
  constraints?: string[];
};

export type WamData = {
  event_id: number;
  fields: Record<string, WamField>;
  /** Per-channel sampling weights. Weighted 0 means defined but never sent. */
  weights?: number[];
  /** Which pipeline carries it: `regular`, `critical`, … */
  channel?: string;
};

/** A named value set. The identity is the exported name, because that is what a
 *  field's type refers to. */
export type EnumVariant = { name: string; value: string | number | boolean };
export type EnumData = { module: string; variants: EnumVariant[] };

/** An app-state (syncd) mutation action. Collection and version have to be right
 *  or two devices desynchronise silently — no error, they simply disagree. */
export type AppStateData = {
  /** The index name on the wire. Read, never derived: `Pin` is `pin_v1`. */
  index_name: string;
  collection?: string;
  version?: number;
  /** The `SyncActionValue` field carrying the payload, when resolvable. */
  value_field?: string;
  index_fields?: Record<string, number>;
};

export type IqType = "get" | "set" | "unknown";

/**
 * One attribute, typed by the codec the bundle validates it with rather than by
 * what a sample value looked like. `literal` marks the ones that are pinned:
 * `type="get"`, `protocol="1"` — a client that sends anything else is wrong.
 */
export type IqAttr = {
  name: string;
  /** `jid`, `string`, `int`, `bool`, `bytes`, `timestamp`, `enum`, `id`. */
  ty: string;
  literal?: string;
  optional: boolean;
};

/** One element of a stanza. The same shape describes both directions. */
export type IqNode = {
  tag: string;
  attrs?: IqAttr[];
  children?: IqNode[];
  /** How the parent carries it. */
  card: "one" | "optional" | "repeated";
};

/**
 * One arm of the reply. The client does not receive "a response" — it receives
 * whichever arm's parser accepts first, which is why the order is preserved.
 */
export type IqResponse = {
  /** `Success`, `ErrorNoRetry`, `InvalidRequest`… */
  arm: string;
  module: string;
  node: IqNode;
  /** Named errors this arm resolves to. Retryable and fatal look identical
   *  without them. */
  errors?: string[];
};

export type IqData = {
  xmlns: string;
  type: IqType;
  tags: string[];
  request?: IqNode;
  /** The module that sends the request and parses what comes back. */
  rpc?: string;
  responses?: IqResponse[];
};

export type ConstData = { group: string; value: string };

export type ProtoField = {
  number: number;
  /** The message this field points at, fully qualified. Absent for scalars.
   *  Without it every field renders as `bytes`, which is both wrong and
   *  unnavigable — following a field into the message it references is most of
   *  what a schema view is for. */
  type_name?: string;
};

export type ProtoData = { fields: Record<string, ProtoField>; module: string };

// A/B property. Identified on the wire by `opaque_id`; `read_count` is the
// number of modules that read it (0 = registered but unwired — reserved ahead
// of rollout).
export type AbValue = string | number | boolean;
export type AbData = {
  opaque_id: number;
  type: string; // "bool" | "int" | "string" | "float" | ...
  default: AbValue;
  alt_default: AbValue;
};

/** A persisted GraphQL operation. `doc_id` is what travels in
 *  `<iq xmlns="w:mex"><query query_id="..."/></iq>`, and it rotates between
 *  releases — a library holding a stale one fails silently, with the server
 *  simply not recognising the query. */
export type GqlArg = { name: string; ty?: string; default?: string };

/** One node of the selection tree, as Relay records it. */
export type GqlField = {
  name: string;
  alias?: string;
  /** The concrete type a linked field returns. */
  ty?: string;
  plural?: boolean;
  args?: string[];
  kind: string;
  selections?: GqlField[];
};

export type MexData = {
  doc_id: string;
  operation: string;
  variables: string[];
  args?: GqlArg[];
  /** The selection tree. Kept alongside the printed document because a tree can
   *  be navigated and a string cannot. */
  selections?: GqlField[];
  root_field?: string;
  /** The document, printed from the Relay AST. */
  document?: string;
};

/** Inbound: a stanza the server sends us. `responds_to` is set when this is the
 *  reply half of an outbound operation; when it is absent the stanza is
 *  server-initiated, and nothing in a library's outbound code hints it exists. */
export type SigData = { root: string; children: string[]; responds_to?: string };

export type FactData =
  | WamData | IqData | ConstData | ProtoData | AbData | MexData | SigData
  | EnumData | AppStateData;

// --- evidence & generated ---

export type Evidence = { module: string; matches: string };

export type Language = "go" | "ts" | "rust" | "proto";
export type Generated = Partial<Record<Language, string>>;

export const LANGUAGE_LABEL: Record<Language, string> = {
  go: "Go",
  ts: "TypeScript",
  rust: "Rust",
  proto: ".proto",
};

// Kinds that carry a `.proto` generated form.
// `.proto` is protobuf's native form and nothing else's. An IQ stanza is XML,
// so offering a .proto tab on it mislabels what it is showing.
export const PROTO_LANG_KINDS: FactKind[] = ["proto"];

/** The module graph around a fact's defining module. Dependents cannot be
 *  recovered any other way: minified call sites reference modules positionally
 *  as `d[3]`, never by name, so grep cannot answer "what uses this". */
export type ModuleGraph = {
  deps: string[];
  dependents: string[];
  dep_count: number;
  dependent_count: number;
};

export type Fact = {
  graph?: ModuleGraph;
  /** Usage, deliberately outside `data`: it churns independently of the
   *  protocol, so it is excluded from what a revision diff compares. */
  usage?: {
    read_count: number;
    /** Which modules read it. A count says a flag is live; the list says what it
     *  gates, which is the only thing that makes an opaque id mean anything.
     *  Capped, with read_count carrying the true total. */
    readers?: string[];
  };
  id: string;
  kind: FactKind;
  name: string;
  data: FactData;
  evidence: Evidence;
  generated: Generated;
  literals: string[];
};

/**
 * How the client routes an inbound stanza to a handler.
 *
 * A route is not a thing on the wire — it is the client's decision procedure
 * about things on the wire — so it sits beside the facts rather than among
 * them, with no wire-literal id of its own.
 */
export type Route = {
  /** The literal this arm matches: `notification`, `server_sync`, `count`. */
  value: string;
  /** What the switch keys on at this level: `tag`, `type`, a child tag. */
  on?: string;
  /** Absent on an arm that only re-dispatches to a deeper switch. */
  handler?: { module: string; method: string };
  variants?: Route[];
};

export type Ir = {
  revision: number;
  revisions?: number[];
  version: number;
  facts: Fact[];
  /** The inbound dispatch table, root tag first. */
  dispatch?: Route[];
};

// Narrowing helpers — the discriminant lives on `fact.kind`.
export function isWam(f: Fact): f is Fact & { data: WamData } {
  return f.kind === "wam";
}
export function isIq(f: Fact): f is Fact & { data: IqData } {
  return f.kind === "iq";
}
export function isConst(f: Fact): f is Fact & { data: ConstData } {
  return f.kind === "const";
}
export function isProto(f: Fact): f is Fact & { data: ProtoData } {
  return f.kind === "proto";
}
export function isAb(f: Fact): f is Fact & { data: AbData } {
  return f.kind === "ab";
}
export function isEnum(f: Fact): f is Fact & { data: EnumData } {
  return f.kind === "enum";
}
export function isAppState(f: Fact): f is Fact & { data: AppStateData } {
  return f.kind === "appstate";
}

// --- diff.json (precomputed, bundled analysis artifact) ---

export type DiffEntry = { id: string; name: string; module: string };
export type DiffKindSummary = { added: number; removed: number; changed: number; stable: number };

export type Diff = {
  from: number;
  to: number;
  revisions: number[];
  summary: {
    added: number;
    removed: number;
    changed: number;
    stable: number;
    byKind: Record<string, DiffKindSummary>;
  };
  added: Record<string, DiffEntry[]>;
  removed: Record<string, DiffEntry[]>;
  /** Same wire-literal id, different payload: WhatsApp reshaped something that
   *  already existed. A plain added/removed diff misses this case entirely, and
   *  for A/B properties it is precisely the rollout signal. */
  changed: Record<string, DiffEntry[]>;
};

// --- coverage.json (bundled analysis artifact) ---

export type CoverageState = "covered" | "missing" | "inconclusive";
export type CoverageRow = {
  repo: string;
  id: string;
  kind: FactKind;
  name: string;
  state: CoverageState;
};

export type CoveragePivot = {
  id: string;
  kind: FactKind;
  name: string;
  byRepo: Partial<Record<string, CoverageState>>;
};

// --- search index (public/data/search-index.json, built by scripts/prepare.mjs) ---

/**
 * What search can find. Facts and modules share one index deliberately: if the
 * two were separate, you would have to know which kind of thing you were
 * looking for before you could look for it.
 */
export type SearchKind = FactKind | "module";

export const SEARCH_KINDS: SearchKind[] = [...FACT_KINDS, "module"];

export type SearchEntry = {
  id: string;
  kind: SearchKind;
  name: string;
  /** A short qualifier shown beside the name — for a module, its role. */
  sub?: string;
  /** What the fact *contains*: field names, attribute names, enum variants,
   *  stanza tags. Ranked below id and name so a deep hit never outranks the
   *  thing actually called that. */
  terms?: string[];
  /** The module it was extracted from. Facts only. */
  module?: string;
  /** A few short, pre-formatted attributes — enough to tell one result from the
   *  next without opening it. Rendered verbatim. */
  meta?: string[];
};

export function isMex(f: Fact): f is Fact & { data: MexData } {
  return f.kind === "mex";
}

export function isSig(f: Fact): f is Fact & { data: SigData } {
  return f.kind === "sig";
}
