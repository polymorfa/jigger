__d("useCounter", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useMemo, c = s.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(3), n = e === void 0 ? 0 : e, r = c(n), a = r[0], i = r[1], l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			changeBy: function(t) {
				return i(function(e) {
					return e + t;
				});
			},
			decrement: function() {
				return i(p);
			},
			increment: function() {
				return i(m);
			},
			set: i
		}, t[0] = l) : l = t[0];
		var s = l, u;
		return t[1] !== a ? (u = [a, s], t[1] = a, t[2] = u) : u = t[2], u;
	}
	function m(e) {
		return e + 1;
	}
	function p(e) {
		return e - 1;
	}
	l.default = d;
}), 98);
