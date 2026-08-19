__d("GeoHStack.react", [
	"GeoFlexbox.react",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime",
	"useGeoTheme"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"alignItems",
		"containerRef",
		"context",
		"direction",
		"display",
		"grow",
		"relation",
		"shrink",
		"xstyle"
	], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(28), a, i, l, s, c, d, m, p, _, f;
		n[0] !== t ? (l = t.alignItems, a = t.containerRef, s = t.context, c = t.direction, d = t.display, m = t.grow, p = t.relation, _ = t.shrink, f = t.xstyle, i = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = d, n[7] = m, n[8] = p, n[9] = _, n[10] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], d = n[6], m = n[7], p = n[8], _ = n[9], f = n[10]);
		var g = l === void 0 ? "start" : l, h = s === void 0 ? "component" : s, y = c === void 0 ? "row" : c, C = d === void 0 ? "flex" : d, b = m === void 0 ? 1 : m, v = p === void 0 ? "unrelated" : p, S = _ === void 0 ? 1 : _, R = r("useGeoTheme")(), L = R.selectLayoutSpacing, E = y === "row" ? "horizontal" : "horizontal-reverse", k;
		n[11] !== h || n[12] !== v || n[13] !== L || n[14] !== E ? (k = L({
			context: h,
			relation: v,
			direction: E
		}), n[11] = h, n[12] = v, n[13] = L, n[14] = E, n[15] = k) : k = n[15];
		var I = k, T;
		n[16] !== I || n[17] !== f ? (T = [I, f], n[16] = I, n[17] = f, n[18] = T) : T = n[18];
		var D;
		return n[19] !== g || n[20] !== a || n[21] !== y || n[22] !== C || n[23] !== b || n[24] !== i || n[25] !== S || n[26] !== T ? (D = u.jsx(r("GeoFlexbox.react"), babelHelpers.extends({
			alignItems: g,
			containerRef: a,
			direction: y,
			display: C,
			grow: b,
			shrink: S,
			wrap: "nowrap",
			xstyle: T
		}, i)), n[19] = g, n[20] = a, n[21] = y, n[22] = C, n[23] = b, n[24] = i, n[25] = S, n[26] = T, n[27] = D) : D = n[27], D;
	}
	var d = o("GeoPrivateMakeComponent").makeGeoComponent("GeoHStack", c);
	l.default = d;
}), 98);
