__d("GeoFlexbox.react", [
	"GeoALSurface",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime",
	"stylex",
	"webFlexItem",
	"webFlexbox"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(29), a = t.accessibilityRole, i = t.alignContent, l = t.alignItems, s = t.alignSelf, c = t.basis, d = t.children, m = t.columnGap, p = t.containerRef, _ = t["data-testid"], f = t.defaultMinSize, g = t.direction, h = t.display, y = t.element, C = t.gap, b = t.grow, v = t.isFlexItemOnly, S = t.justifyContent, R = t.logging, L = t.order, E = t.rowGap, k = t.shrink, I = t.style, T = t.wrap, D = t.xstyle, x = h === void 0 ? "flex" : h, $ = y === void 0 ? "div" : y, P = v === void 0 ? !1 : v, N;
		n[0] !== i || n[1] !== l || n[2] !== s || n[3] !== c || n[4] !== m || n[5] !== f || n[6] !== g || n[7] !== x || n[8] !== C || n[9] !== b || n[10] !== P || n[11] !== S || n[12] !== L || n[13] !== E || n[14] !== k || n[15] !== T || n[16] !== D ? (N = (e || (e = r("stylex")))(!P && r("webFlexbox")({
			alignContent: i,
			alignItems: l,
			direction: g,
			display: x,
			gap: C,
			justifyContent: S,
			wrap: T,
			rowGap: E,
			columnGap: m
		}), r("webFlexItem")({
			alignSelf: s,
			basis: c,
			defaultMinSize: f,
			grow: b,
			order: L,
			shrink: k
		}), D), n[0] = i, n[1] = l, n[2] = s, n[3] = c, n[4] = m, n[5] = f, n[6] = g, n[7] = x, n[8] = C, n[9] = b, n[10] = P, n[11] = S, n[12] = L, n[13] = E, n[14] = k, n[15] = T, n[16] = D, n[17] = N) : N = n[17];
		var M = N, w;
		n[18] !== $ || n[19] !== a || n[20] !== d || n[21] !== M || n[22] !== p || n[23] !== _ || n[24] !== I ? (w = u.jsx($, {
			className: M,
			"data-testid": void 0,
			ref: p,
			role: a,
			style: I,
			children: d
		}), n[18] = $, n[19] = a, n[20] = d, n[21] = M, n[22] = p, n[23] = _, n[24] = I, n[25] = w) : w = n[25];
		var A;
		return n[26] !== R || n[27] !== w ? (A = u.jsx(r("GeoALSurface"), {
			logging: R,
			name: "GeoFlexbox",
			children: w
		}), n[26] = R, n[27] = w, n[28] = A) : A = n[28], A;
	}
	var d = o("GeoPrivateMakeComponent").makeGeoComponent("GeoFlexbox", c);
	l.default = d;
}), 98);
