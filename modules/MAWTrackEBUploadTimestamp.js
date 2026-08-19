__d("MAWTrackEBUploadTimestamp", [
	"I64",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
			if (r.length > 0) {
				var a = yield o("ReQL").toArrayAsync(o("ReQL").fromTableDescending(t.pending_backups_context_v2));
				if (a != null && a.length > 0) {
					var i = a.reduce(function(e, t) {
						var n, r = t.lsTraceId, o = t.uniqueKey;
						return r != null ? babelHelpers.extends({}, e, (n = {}, n[r] = o, n)) : e;
					}, {}), l = (s || (s = o("I64"))).of_float(Date.now());
					r.forEach((function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
							var n = i[e];
							if (n != null) {
								var r = yield o("ReQL").firstAsync(o("ReQL").fromTableDescending(t.messages.index("optimistic")).getKeyRange(n));
								if (r != null) return t.messages.put(babelHelpers.extends({}, r, { ebUploadTs: l }));
							}
						});
						return function(t) {
							return e.apply(this, arguments);
						};
					})());
				}
			}
			return (e || (e = n("Promise"))).resolve();
		}), c.apply(this, arguments);
	}
	l.default = u;
}), 98);
