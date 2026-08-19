__d("MWXColumn.react", [
	"CometColumn.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(6), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l;
		return n[3] !== a || n[4] !== i ? (l = u.jsx(r("CometColumn.react"), babelHelpers.extends({}, a, { ref: i })), n[3] = a, n[4] = i, n[5] = l) : l = n[5], l;
	}
	l.default = c;
}), 98);
