__d("MAWWasmFeatureSupport", [
	"Promise",
	"react",
	"react-compiler-runtime",
	"wasm-feature-detect"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useEffect, d = u.useState, m = null;
	function p() {
		var t = o("react-compiler-runtime").c(2), r = d(m), a = r[0], i = r[1], l, s;
		return t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			(e || (e = n("Promise"))).all([
				o("wasm-feature-detect").bulkMemory(),
				o("wasm-feature-detect").bigInt(),
				o("wasm-feature-detect").referenceTypes()
			]).then(function(e) {
				var t = e[0], n = e[1], r = e[2];
				i({
					bigInt: n,
					bulkMemory: t,
					referenceTypes: r
				}), m = {
					bigInt: n,
					bulkMemory: t,
					referenceTypes: r
				};
			});
		}, s = [i], t[0] = l, t[1] = s) : (l = t[0], s = t[1]), c(l, s), a;
	}
	l.useWasmFeatureSupport = p;
}), 98);
