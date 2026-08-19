__d("useCometAlertDialog", [
	"FDSDialogLoadingState.react",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"useCometDeferredDialog"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useCallback, c = r("requireDeferred")("FDSAlertDialogImpl.react").__setRef("useCometAlertDialog");
	function d() {
		return s.jsx(r("FDSDialogLoadingState.react"), {});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		var e = o("react-compiler-runtime").c(2), t = r("useCometDeferredDialog")(c, d), n;
		return e[0] !== t ? (n = function(n, r, o) {
			var e = r === void 0 ? p : r;
			t(n, e, o);
		}, e[0] = t, e[1] = n) : n = e[1], n;
	}
	function p() {}
	l.default = m;
}), 98);
