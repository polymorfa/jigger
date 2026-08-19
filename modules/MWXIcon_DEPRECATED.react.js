__d("MWXIcon_DEPRECATED.react", [
	"FDSIcon.react",
	"getMDSIconColorCometFallback",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s = ["backgroundEnabled", "color"], u, c = u || (u = o("react"));
	function d(t) {
		var n = o("react-compiler-runtime").c(12), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l, u;
		if (n[3] !== a) {
			var d = a, m = d.backgroundEnabled, p = d.color, _ = babelHelpers.objectWithoutPropertiesLoose(d, s);
			l = p, u = _, n[3] = a, n[4] = l, n[5] = u;
		} else l = n[4], u = n[5];
		var f;
		n[6] !== l ? (f = o("getMDSIconColorCometFallback").getMDSIconColorCometFallback(l), n[6] = l, n[7] = f) : f = n[7];
		var g;
		return n[8] !== u || n[9] !== i || n[10] !== f ? (g = c.jsx(r("FDSIcon.react"), babelHelpers.extends({
			color: f,
			ref: i
		}, u)), n[8] = u, n[9] = i, n[10] = f, n[11] = g) : g = n[11], g;
	}
	l.default = d;
}), 98);
