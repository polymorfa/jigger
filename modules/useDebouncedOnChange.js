__d("useDebouncedOnChange", [
	"react",
	"react-compiler-runtime",
	"useDebounced"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useEffect, d = s.useLayoutEffect, m = s.useRef, p = s.useState;
	function _(e, t, n) {
		var a = o("react-compiler-runtime").c(20), i = n === void 0 ? 100 : n, l = p(e), s = l[0], u = l[1], _ = r("useDebounced")(t, i), f;
		a[0] !== _ || a[1] !== e || a[2] !== s ? (f = _.isPending() ? s : e, a[0] = _, a[1] = e, a[2] = s, a[3] = f) : f = a[3];
		var g = f, h;
		a[4] !== _ ? (h = function(t) {
			_(t), u(t);
		}, a[4] = _, a[5] = h) : h = a[5];
		var y = h, C;
		a[6] !== g || a[7] !== _ || a[8] !== e || a[9] !== t ? (C = function() {
			g !== e && t(g), _.reset();
		}, a[6] = g, a[7] = _, a[8] = e, a[9] = t, a[10] = C) : C = a[10];
		var b = C, v = m(b), S, R;
		a[11] !== b ? (S = function() {
			v.current = b;
		}, R = [b], a[11] = b, a[12] = S, a[13] = R) : (S = a[12], R = a[13]), d(S, R);
		var L, E;
		a[14] === Symbol.for("react.memo_cache_sentinel") ? (L = function() {
			return function() {
				return v.current();
			};
		}, E = [], a[14] = L, a[15] = E) : (L = a[14], E = a[15]), c(L, E);
		var k;
		return a[16] !== g || a[17] !== y || a[18] !== b ? (k = [
			g,
			y,
			b
		], a[16] = g, a[17] = y, a[18] = b, a[19] = k) : k = a[19], k;
	}
	l.default = _;
}), 98);
