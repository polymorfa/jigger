__d("MAWTrackEBUploadTimestamp", ["I64", "ReQL"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s(t, n) {
		if (n.length > 0) {
			var r = await o("ReQL").toArrayAsync(o("ReQL").fromTableDescending(t.pending_backups_context_v2));
			if (r != null && r.length > 0) {
				var a = r.reduce(function(e, t) {
					var n, r = t.lsTraceId, o = t.uniqueKey;
					return r != null ? babelHelpers.extends({}, e, (n = {}, n[r] = o, n)) : e;
				}, {}), i = (e || (e = o("I64"))).of_float(Date.now());
				n.forEach(async function(e) {
					var n = a[e];
					if (n != null) {
						var r = await o("ReQL").firstAsync(o("ReQL").fromTableDescending(t.messages.index("optimistic")).getKeyRange(n));
						if (r != null) return t.messages.put(babelHelpers.extends({}, r, { ebUploadTs: i }));
					}
				});
			}
		}
		return Promise.resolve();
	}
	l.default = s;
}), 98);
