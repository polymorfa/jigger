__d("MWXIconForListCell.react", [
	"MWXIconStrict.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 20, c = 36;
	function d(e) {
		var t = o("react-compiler-runtime").c(7), n = e.alt, a = e.color, i = e.hasBackground, l = e.icon, d = e.isDecorative, m = e.size, p = i === void 0 ? !0 : i, _ = m === void 0 ? "medium" : m, f;
		_ === "medium" ? f = p ? c : u : f = p ? 36 : 20;
		var g;
		return t[0] !== n || t[1] !== a || t[2] !== p || t[3] !== l || t[4] !== f || t[5] !== d ? (g = s.jsx(r("MWXIconStrict.react"), {
			alt: n,
			backgroundEnabled: p,
			color: a,
			icon: l,
			isDecorative: d,
			size: f
		}), t[0] = n, t[1] = a, t[2] = p, t[3] = l, t[4] = f, t[5] = d, t[6] = g) : g = t[6], g;
	}
	l.default = d;
}), 98);
