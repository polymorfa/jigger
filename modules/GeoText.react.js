__d("GeoText.react", [
	"GeoBaseText.react",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"children",
		"containerRef",
		"display"
	], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(10), a, i, l, s;
		n[0] !== t ? (a = t.children, i = t.containerRef, s = t.display, l = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s) : (a = n[1], i = n[2], l = n[3], s = n[4]);
		var c = s === void 0 ? "inline" : s, d;
		return n[5] !== a || n[6] !== i || n[7] !== c || n[8] !== l ? (d = u.jsx(r("GeoBaseText.react"), babelHelpers.extends({
			color: "value",
			display: c,
			size: "value"
		}, l, {
			ref: i,
			children: a
		})), n[5] = a, n[6] = i, n[7] = c, n[8] = l, n[9] = d) : d = n[9], d;
	}
	var d = o("GeoPrivateMakeComponent").makeGeoComponent("GeoText", c);
	l.default = d;
}), 98);
