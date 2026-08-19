__d("useJSON", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useMemo;
	function u(e, t) {
		var n = o("react-compiler-runtime").c(3), r;
		return n[0] !== t || n[1] !== e ? (r = JSON.parse(e, t), n[0] = t, n[1] = e, n[2] = r) : r = n[2], r;
	}
	l.default = u;
}), 98);
