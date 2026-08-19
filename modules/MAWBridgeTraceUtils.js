__d("MAWBridgeTraceUtils", [
	"I64",
	"Promise",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, r, a) {
		return o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.data_trace_meta).filter(function(e) {
			var t = e.contextThree;
			return t != null && r === t && (s || (s = o("I64"))).equal(e.traceType, a) ? e.shouldFlush === !1 : !1;
		})).then(function(t) {
			return t.length !== 0 ? (e || (e = n("Promise"))).resolve(t[0].traceId) : (e || (e = n("Promise"))).resolve();
		});
	}
	l.getTraceId = u;
}), 98);
