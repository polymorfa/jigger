__d("useMWMessageRowTheme", [
	"MWLSThreadDisplayContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useMemo;
	function u() {
		var e = o("react-compiler-runtime").c(2), t = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), n = t === "Inbox" ? "16px" : "8px", r;
		return e[0] !== n ? (r = {
			dark: { "mwp-message-list-profile-start-padding": n },
			light: { "mwp-message-list-profile-start-padding": n },
			type: "VARIABLES"
		}, e[0] = n, e[1] = r) : r = e[1], r;
	}
	l.default = u;
}), 98);
