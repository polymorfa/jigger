__d("FDSRelativeTimestamp.react", [
	"BaseRelativeTimestamp.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(3), n = e.date, a = e.format, i;
		return t[0] !== n || t[1] !== a ? (i = s.jsx(r("BaseRelativeTimestamp.react"), {
			date: n,
			format: a
		}), t[0] = n, t[1] = a, t[2] = i) : i = t[2], i;
	}
	l.default = u;
}), 98);
