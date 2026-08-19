__d("MAWVisibilityRestoreGapUIBySurface.react", [
	"MAWVisibilityInThreadRestoreGapUI.react",
	"MAWVisibilityRestoreGapUI.react",
	"MWLSThreadDisplayContext",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext();
		return e === "ChatTab" ? s.jsx(r("MAWVisibilityRestoreGapUI.react"), {}) : s.jsx(r("MAWVisibilityInThreadRestoreGapUI.react"), {});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
