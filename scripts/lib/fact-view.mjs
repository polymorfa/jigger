// What a fact looks like from the outside: the handful of attributes that tell
// one apart from the next, and the words it can be found by.
//
// Shared because the search index and every list page need exactly the same
// derivation. Two copies of this is how a result row and a list row start
// disagreeing about what a fact is.

export const metaOf = (f) => {
  const d = f.data ?? {};
  const n = (x) => (x ?? []).length;
  switch (f.kind) {
    case "ab": {
      const reads = f.usage?.read_count ?? 0;
      return [
        `id ${d.opaque_id}`,
        d.type,
        `default ${JSON.stringify(d.default)}`,
        // The rollout signal: two shipped defaults that disagree means the
        // value is being decided server-side right now.
        d.default !== d.alt_default ? "split" : null,
        reads === 0 ? "never read" : `read by ${reads}`,
      ];
    }
    case "wam":
      return [
        `event ${d.event_id}`,
        `${Object.keys(d.fields ?? {}).length} fields`,
        d.channel && `channel ${d.channel}`,
      ];
    case "iq":
      return [
        d.xmlns,
        d.type,
        n(d.responses) ? `${n(d.responses)} reply arms` : "no reply parsed",
      ];
    case "proto":
      return [`${Object.keys(d.fields ?? {}).length} fields`, d.module];
    case "enum":
      return [`${n(d.variants)} variants`, d.module];
    case "appstate":
      return [
        d.index_name,
        d.collection ?? "collection unresolved",
        d.version != null ? `v${d.version}` : null,
      ];
    case "mex":
      return [d.operation, `doc ${d.doc_id}`, n(d.variables) ? `${n(d.variables)} vars` : null];
    case "sig":
      return [`<${d.root}>`, d.responds_to ? `answers ${d.responds_to}` : "server-initiated"];
    case "const":
      return [d.group];
    default:
      return [];
  }
};


export const termsOf = (f) => {
  const t = new Set();
  const d = f.data ?? {};
  switch (f.kind) {
    case "proto":
    case "wam":
      for (const [k, v] of Object.entries(d.fields ?? {})) {
        t.add(k);
        if (v?.wire) t.add(v.wire);
        if (v?.enum_ref) t.add(v.enum_ref);
        if (v?.type_name) t.add(String(v.type_name).split(".").pop());
      }
      if (d.channel) t.add(d.channel);
      break;
    case "iq": {
      // Both directions: an attribute you saw on the wire could have been in
      // the request or in any reply arm, and you rarely know which.
      const walk = (n) => {
        if (!n) return;
        t.add(n.tag);
        for (const a of n.attrs ?? []) t.add(a.name);
        for (const c of n.children ?? []) walk(c);
      };
      walk(d.request);
      for (const r of d.responses ?? []) {
        walk(r.node);
        for (const e of r.errors ?? []) t.add(e);
      }
      t.add(d.xmlns);
      break;
    }
    case "enum":
      for (const v of d.variants ?? []) t.add(v.name);
      break;
    case "appstate":
      t.add(d.index_name);
      if (d.collection) t.add(d.collection);
      if (d.value_field) t.add(d.value_field);
      break;
    case "sig":
      t.add(d.root);
      for (const c of d.children ?? []) t.add(c);
      break;
    case "mex":
      t.add(d.operation);
      for (const v of d.variables ?? []) t.add(v);
      if (d.root_field) t.add(d.root_field);
      break;
    case "ab":
      t.add(d.type);
      break;
  }
  t.delete(undefined);
  t.delete("");
  // The fact's own name is already indexed; repeating it wastes bytes.
  t.delete(f.name);
  return [...t].slice(0, 64);
};

// The handful of attributes that distinguish one result from the next.
//
// A results list showing only a name and a kind makes you open things to find
// out whether they are the thing you wanted. What that costs is a round trip
// per candidate; what it takes to avoid is four short strings per fact, which
// is the difference between scanning and hunting.
//
// Pre-formatted rather than structured: the client renders these verbatim, so
// the shapes of nine different payloads stay here instead of turning into a
// switch in a component.
