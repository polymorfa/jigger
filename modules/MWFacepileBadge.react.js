__d("MWFacepileBadge.react", [
	"CometPlaceholder.react",
	"MWPReQLPresenceBadge.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4), n = e.borderThemeColor, a = e.size, i = e.threadKey, l;
		return t[0] !== n || t[1] !== a || t[2] !== i ? (l = s.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: "MWFacepileBadge",
			children: s.jsx(r("MWPReQLPresenceBadge.react"), {
				borderThemeColor: n,
				size: a,
				threadKey: i
			})
		}), t[0] = n, t[1] = a, t[2] = i, t[3] = l) : l = t[3], l;
	}
	l.default = u;
}), 98);
