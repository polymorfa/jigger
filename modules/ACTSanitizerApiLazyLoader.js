__d("ACTSanitizerApiLazyLoader", ["ACTSanitizerApiWasm"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = null, s = 1024 * 1024;
	function u() {
		e == null && (e = o("ACTSanitizerApiWasm").ACTSanitizerWasm());
		var t = e;
		return t.then(function(t) {
			var n = t.getWasmMemorySize();
			n != null && n >= s && (e = o("ACTSanitizerApiWasm").ACTSanitizerWasm());
		}), t;
	}
	l.loadACTSanitizerApi = u;
}), 98);
