__d("GeoModalFooter.react", [
	"GeoALSurface",
	"GeoPrivateCardFooter.react",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["forwardedRef", "logging"], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(10), a, i, l;
		n[0] !== t ? (a = t.forwardedRef, i = t.logging, l = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l) : (a = n[1], i = n[2], l = n[3]);
		var s;
		n[4] !== a || n[5] !== l ? (s = u.jsx(r("GeoPrivateCardFooter.react"), babelHelpers.extends({}, l, { forwardedRef: a })), n[4] = a, n[5] = l, n[6] = s) : s = n[6];
		var c;
		return n[7] !== i || n[8] !== s ? (c = u.jsx(r("GeoALSurface"), {
			logging: i,
			name: "GeoModalFooter",
			children: s
		}), n[7] = i, n[8] = s, n[9] = c) : c = n[9], c;
	}
	var d = o("GeoPrivateMakeComponent").makeGeoComponent("GeoModalFooter", c);
	l.default = d;
}), 98);
