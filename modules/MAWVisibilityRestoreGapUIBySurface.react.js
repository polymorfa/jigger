__d("MAWVisibilityRestoreGapUIBySurface.react", [
	"MAWVisibilityInThreadRestoreGapUI.react",
	"MAWVisibilityRestoreGapUI.react",
	"MWLSThreadDisplayContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("react-compiler-runtime").c(2), t = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), n;
		return e[0] !== t ? (n = t === "ChatTab" ? s.jsx(r("MAWVisibilityRestoreGapUI.react"), {}) : s.jsx(r("MAWVisibilityInThreadRestoreGapUI.react"), {}), e[0] = t, e[1] = n) : n = e[1], n;
	}
	l.default = u;
}), 98);
