__d("GeoMenuSeparator.react", [
	"GeoMenuLayoutContext",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { isSeparator: !0 };
	function c() {
		var e = o("react-compiler-runtime").c(5), t = r("GeoMenuLayoutContext").useLayoutContext(u), n = t[0], a = t[1], i;
		e[0] !== n ? (i = {
			0: { className: "x178xt8z x13fuv20 x13198l7" },
			1: { className: "x178xt8z x13fuv20 x13198l7 x1s85apg" }
		}[!n << 0], e[0] = n, e[1] = i) : i = e[1];
		var l;
		return e[2] !== a || e[3] !== i ? (l = s.jsx("div", babelHelpers.extends({}, i, { ref: a })), e[2] = a, e[3] = i, e[4] = l) : l = e[4], l;
	}
	var d = o("GeoPrivateMakeComponent").makeGeoComponent("GeoMenuSeparator", c);
	l.default = d;
}), 98);
