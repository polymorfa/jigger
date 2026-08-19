__d("FDSImageCover.react", [
	"BaseImage.react",
	"coerceImageishURL",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["src"], s, u = s || (s = o("react")), c = { cover: {
		display: "x1rg5ohu",
		height: "x5yr21d",
		width: "xh8yej3",
		$$css: !0
	} };
	function d(t) {
		var n = o("react-compiler-runtime").c(8), a, i;
		n[0] !== t ? (i = t.src, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l;
		n[3] !== i ? (l = r("coerceImageishURL")(i), n[3] = i, n[4] = l) : l = n[4];
		var s = l, d = s != null ? s.uri : typeof i == "string" ? i : "", m;
		return n[5] !== d || n[6] !== a ? (m = u.jsx(r("BaseImage.react"), babelHelpers.extends({
			objectFit: "cover",
			src: d,
			xstyle: c.cover
		}, a)), n[5] = d, n[6] = a, n[7] = m) : m = n[7], m;
	}
	l.default = d;
}), 98);
