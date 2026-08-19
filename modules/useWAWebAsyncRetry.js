__d("useWAWebAsyncRetry", [
	"react",
	"react-compiler-runtime",
	"useWAWebAsync"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useState;
	function d(e, t) {
		var n = o("react-compiler-runtime").c(8), a = c(0), i = a[0], l = a[1], s;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (s = function() {
			l(m);
		}, n[0] = s) : s = n[0];
		var u = s, d;
		n[1] !== e ? (d = function() {
			return e();
		}, n[1] = e, n[2] = d) : d = n[2];
		var p;
		n[3] !== t || n[4] !== i ? (p = [].concat(t, [i]), n[3] = t, n[4] = i, n[5] = p) : p = n[5];
		var _ = r("useWAWebAsync")(d, p), f;
		return n[6] !== _ ? (f = babelHelpers.extends({}, _, { retry: u }), n[6] = _, n[7] = f) : f = n[7], f;
	}
	function m(e) {
		return e + 1;
	}
	l.default = d;
}), 98);
