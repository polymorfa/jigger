__d("MAWWasmFeatureSupport", [
	"Promise",
	"react",
	"wasm-feature-detect"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useEffect, d = u.useState, m = null;
	function p() {
		var t = d(m), r = t[0], a = t[1];
		return c(function() {
			(e || (e = n("Promise"))).all([
				o("wasm-feature-detect").bulkMemory(),
				o("wasm-feature-detect").bigInt(),
				o("wasm-feature-detect").referenceTypes()
			]).then(function(e) {
				var t = e[0], n = e[1], r = e[2];
				a({
					bigInt: n,
					bulkMemory: t,
					referenceTypes: r
				}), m = {
					bigInt: n,
					bulkMemory: t,
					referenceTypes: r
				};
			});
		}, [a]), r;
	}
	l.useWasmFeatureSupport = p;
}), 98);
