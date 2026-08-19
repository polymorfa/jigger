__d("GeoHeading.react", [
	"GeoBaseText.react",
	"GeoFlexbox.react",
	"GeoPrivateMakeComponent",
	"GeoTextUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"children",
		"display",
		"level",
		"ref",
		"textAlign",
		"tooltip",
		"whiteSpace"
	], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(30), a, i, l, s, c, d, m, p;
		n[0] !== t ? (a = t.children, c = t.display, i = t.level, s = t.ref, d = t.textAlign, p = t.tooltip, m = t.whiteSpace, l = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = d, n[7] = m, n[8] = p) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], d = n[6], m = n[7], p = n[8]);
		var _ = c === void 0 ? "block" : c, f = d === void 0 ? "start" : d, g = m === void 0 ? "inherit" : m, h;
		n[9] !== i ? (h = o("GeoTextUtils").mapHeadingLevelToSize(i), n[9] = i, n[10] = h) : h = n[10];
		var y;
		n[11] !== _ || n[12] !== h || n[13] !== f || n[14] !== g ? (y = {
			color: "heading",
			display: _,
			size: h,
			textAlign: f,
			whiteSpace: g
		}, n[11] = _, n[12] = h, n[13] = f, n[14] = g, n[15] = y) : y = n[15];
		var C = y;
		if (_ === "truncate" && p != null) {
			var b;
			n[16] !== C || n[17] !== a || n[18] !== l || n[19] !== s ? (b = u.jsx(r("GeoBaseText.react"), babelHelpers.extends({}, C, { ref: s }, l, { children: a })), n[16] = C, n[17] = a, n[18] = l, n[19] = s, n[20] = b) : b = n[20];
			var v;
			return n[21] !== b || n[22] !== p ? (v = u.jsxs(r("GeoFlexbox.react"), {
				direction: "row",
				children: [b, p]
			}), n[21] = b, n[22] = p, n[23] = v) : v = n[23], v;
		}
		var S;
		return n[24] !== C || n[25] !== a || n[26] !== l || n[27] !== s || n[28] !== p ? (S = u.jsxs(r("GeoBaseText.react"), babelHelpers.extends({}, C, { ref: s }, l, { children: [a, p] })), n[24] = C, n[25] = a, n[26] = l, n[27] = s, n[28] = p, n[29] = S) : S = n[29], S;
	}
	var d = o("GeoPrivateMakeComponent").makeGeoComponent("GeoHeading", c);
	l.default = d;
}), 98);
