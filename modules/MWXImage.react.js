__d("MWXImage.react", [
	"CometImage.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"alt",
		"isDecorative",
		"objectFit",
		"src"
	], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(12), a, i, l, s, c;
		n[0] !== t ? (a = t.alt, i = t.isDecorative, l = t.objectFit, c = t.src, s = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5]);
		var d;
		return n[6] !== a || n[7] !== i || n[8] !== l || n[9] !== s || n[10] !== c ? (d = u.jsx(r("CometImage.react"), babelHelpers.extends({
			alt: a,
			isDecorative: i,
			objectFit: l,
			src: c
		}, s)), n[6] = a, n[7] = i, n[8] = l, n[9] = s, n[10] = c, n[11] = d) : d = n[11], d;
	}
	l.default = c;
}), 98);
