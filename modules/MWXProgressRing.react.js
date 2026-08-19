__d("MWXProgressRing.react", [
	"FDSProgressRingDeterminate.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4), n = e.color, a = e.percentage, i = e.size, l = n != null ? n : "light", u = a != null ? a : 0, c = i != null ? i : 16, d;
		return t[0] !== l || t[1] !== u || t[2] !== c ? (d = s.jsx(r("FDSProgressRingDeterminate.react"), {
			color: l,
			percentage: u,
			size: c
		}), t[0] = l, t[1] = u, t[2] = c, t[3] = d) : d = t[3], d;
	}
	l.default = u;
}), 98);
