__d("useMWXLazyDialog", [
	"FDSDialogLoadingState.react",
	"react",
	"react-compiler-runtime",
	"tracePolicyFromResource",
	"useBaseLazyDialog"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = function(t) {
		return s.jsx(r("FDSDialogLoadingState.react"), { onClose: t });
	};
	function c(e, t, n) {
		var a = o("react-compiler-runtime").c(2), i;
		a[0] !== e ? (i = r("tracePolicyFromResource")("mwp.dialog", e), a[0] = e, a[1] = i) : i = a[1];
		var l = i;
		return r("useBaseLazyDialog")(e, t != null ? t : u, l, n);
	}
	l.default = c;
}), 98);
