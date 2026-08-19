__d("useMAWUnrecoverableDbError", [
	"MAWUnrecoverableDbErrors",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = o("MAWUnrecoverableDbErrors").getError(), e[0] = t) : t = e[0];
		var n = c(t), r = n[0], a = n[1], i, l;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = function() {
			var e = function(t) {
				a(t);
			}, t = o("MAWUnrecoverableDbErrors").subscribe(e);
			return (function() {
				t();
			});
		}, l = [], e[1] = i, e[2] = l) : (i = e[1], l = e[2]), u(i, l), r;
	}
	l.default = d;
}), 98);
