__d("MAWMessageIntegrityTruncateStatus", ["I64"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["threadKey"], s, u = 0, c = new Map();
	function d(t, n, r) {
		var a, i = (a = c.get((s || (s = o("I64"))).to_float(t))) != null ? a : {}, l = n.threadKey, u = babelHelpers.objectWithoutPropertiesLoose(n, e), d = babelHelpers.extends({}, i, {
			lastUpsertedRange: babelHelpers.extends({}, u, r, {
				maxTimestampMs: (s || (s = o("I64"))).to_float(n.maxTimestampMs),
				minTimestampMs: s.to_float(n.minTimestampMs)
			}),
			updateRangeTimestamp: Date.now()
		});
		c.set(s.to_float(t), d);
	}
	function m(e) {
		var t, n = (t = c.get((s || (s = o("I64"))).to_float(e))) != null ? t : {}, r = babelHelpers.extends({}, n, { truncateTimestamp: n.truncateTimestamp == null ? u : Date.now() });
		c.set((s || (s = o("I64"))).to_float(e), r);
	}
	function p(e) {
		var t = c.get((s || (s = o("I64"))).to_float(e));
		return (t == null ? void 0 : t.truncateTimestamp) == null ? null : t;
	}
	l.setThreadLastUpsertedRange = d, l.setThreadThuncated = m, l.getThreadThuncateState = p;
}), 98);
