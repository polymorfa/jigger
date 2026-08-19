__d("MWXProfilePhoto.react", [
	"FDSProfilePhoto.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s = ["isDecorative"], u, c = u || (u = o("react"));
	function d(t) {
		var n = o("react-compiler-runtime").c(10), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l, u;
		if (n[3] !== a) {
			var d = a;
			l = d.isDecorative, u = babelHelpers.objectWithoutPropertiesLoose(d, s), n[3] = a, n[4] = l, n[5] = u;
		} else l = n[4], u = n[5];
		var m = l === !0 ? l : void 0, p;
		return n[6] !== u || n[7] !== i || n[8] !== m ? (p = c.jsx(r("FDSProfilePhoto.react"), babelHelpers.extends({ "aria-hidden": m }, u, { ref: i })), n[6] = u, n[7] = i, n[8] = m, n[9] = p) : p = n[9], p;
	}
	l.default = d;
}), 98);
