__d("MAWCutoverEncryptedBackupsBanner.react", [
	"CometErrorBoundary.react",
	"cr:3127",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.isShown;
		return s.jsx(s.Fragment, { children: t && n("cr:3127") ? s.jsx(r("CometErrorBoundary.react"), {
			fallback: function() {
				return null;
			},
			children: s.jsx(n("cr:3127"), {})
		}) : null });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
