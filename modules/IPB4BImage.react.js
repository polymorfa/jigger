__d("IPB4BImage.react", [
	"Image.react",
	"react",
	"react-compiler-runtime",
	"useIPB4BImpressionLog"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["src"], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(7), a, i;
		if (n[0] !== t) {
			var l = t.src, s = babelHelpers.objectWithoutPropertiesLoose(t, e);
			i = s, n[0] = t, n[1] = i;
		} else i = n[1];
		if (typeof t.src == "function") {
			var c;
			n[2] !== t.src ? (c = t.src("light"), n[2] = t.src, n[3] = c) : c = n[3], a = c;
		} else a = t.src;
		r("useIPB4BImpressionLog")(a);
		var d;
		return n[4] !== a || n[5] !== i ? (d = u.jsx(r("Image.react"), babelHelpers.extends({}, i, { src: a })), n[4] = a, n[5] = i, n[6] = d) : d = n[6], d;
	}
	l.default = c;
}), 98);
