__d("GeoPill.react", [
	"GeoPrivateBadge.react",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["status"], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(6), a, i;
		n[0] !== t ? (i = t.status, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = i === void 0 ? "info" : i, s;
		return n[3] !== a || n[4] !== l ? (s = u.jsx(r("GeoPrivateBadge.react"), babelHelpers.extends({
			isPill: !0,
			status: l
		}, a)), n[3] = a, n[4] = l, n[5] = s) : s = n[5], s;
	}
	var d = o("GeoPrivateMakeComponent").makeGeoComponent("GeoPill", c);
	l.default = d;
}), 98);
