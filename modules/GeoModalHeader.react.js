__d("GeoModalHeader.react", [
	"GeoALSurface",
	"GeoCardHeader.react",
	"GeoPrivateCardLayerContext",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["forwardedRef"], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(9), a, i;
		n[0] !== t ? (a = t.forwardedRef, i = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l;
		n[3] !== a || n[4] !== i ? (l = u.jsx(r("GeoPrivateCardLayerContext").Provider, {
			value: !0,
			children: u.jsx(r("GeoCardHeader.react"), babelHelpers.extends({}, i, { forwardedRef: a }))
		}), n[3] = a, n[4] = i, n[5] = l) : l = n[5];
		var s;
		return n[6] !== i.logging || n[7] !== l ? (s = u.jsx(r("GeoALSurface"), {
			logging: i.logging,
			name: "GeoModalHeader",
			children: l
		}), n[6] = i.logging, n[7] = l, n[8] = s) : s = n[8], s;
	}
	var d = o("GeoPrivateMakeComponent").makeGeoComponent("GeoModalHeader", c);
	l.default = d;
}), 98);
