__d("useAsyncEffect", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useEffect;
	function u(e, t, n) {
		var r = o("react-compiler-runtime").c(3), a;
		return r[0] !== e || r[1] !== n ? (a = function() {
			return e(), n;
		}, r[0] = e, r[1] = n, r[2] = a) : a = r[2], s(a, t);
	}
	l.default = u;
}), 98);
