__d("WAWebEnforcementHeader.react", [
	"WAWebEnforcementPictograms.react",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(2), n = e.enforcementType, a;
		return t[0] !== n ? (a = s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: s.jsx(r("WAWebEnforcementPictograms.react"), { enforcementType: n })
		}), t[0] = n, t[1] = a) : a = t[1], a;
	}
	l.default = u;
}), 98);
