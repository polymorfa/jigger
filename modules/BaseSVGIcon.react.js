__d("BaseSVGIcon.react", [
	"BaseIsDecorativeContext",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useContext, d = { color: function(t) {
		return [{
			color: t != null ? "x14rh7hd" : t,
			$$css: !0
		}, { "--x-color": t != null ? t : void 0 }];
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(13), a = t.alt, i = t["aria-labelledby"], l = t.color, s = t.icon, m = t.id, p = t.size, _ = t.testid, f = t.xstyle, g = p === void 0 ? 8 : p, h = c(r("BaseIsDecorativeContext")), y = a == null || a === "", C = i != null, b = y && !C && h === !0 ? !0 : void 0, v = !y || C ? "img" : void 0, S = y ? void 0 : a, R;
		n[0] !== l || n[1] !== f ? (R = (e || (e = r("stylex"))).props([l != null && d.color(l), f]), n[0] = l, n[1] = f, n[2] = R) : R = n[2];
		var L;
		return n[3] !== s || n[4] !== i || n[5] !== m || n[6] !== b || n[7] !== g || n[8] !== v || n[9] !== S || n[10] !== R || n[11] !== _ ? (L = u.jsx(s, babelHelpers.extends({
			"aria-hidden": b,
			"aria-labelledby": i,
			"data-testid": void 0,
			height: g,
			id: m,
			role: v,
			title: S,
			width: g
		}, R)), n[3] = s, n[4] = i, n[5] = m, n[6] = b, n[7] = g, n[8] = v, n[9] = S, n[10] = R, n[11] = _, n[12] = L) : L = n[12], L;
	}
	l.default = m;
}), 98);
