__d("useDelayedBooleanState", [
	"clearTimeout",
	"react",
	"react-compiler-runtime",
	"setTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useLayoutEffect, d = s.useRef, m = s.useState, p = 50;
	function _(e, t) {
		var n = o("react-compiler-runtime").c(6), a = t === void 0 ? p : t, i = m(!1), l = i[0], s = i[1], _ = d(null), f, g;
		n[0] !== a || n[1] !== e ? (f = function() {
			r("clearTimeout")(_.current), _.current = null, e ? _.current = r("setTimeout")(function() {
				s(!0), _.current = null;
			}, a) : s(!1);
		}, g = [e, a], n[0] = a, n[1] = e, n[2] = f, n[3] = g) : (f = n[2], g = n[3]), c(f, g);
		var h, y;
		return n[4] === Symbol.for("react.memo_cache_sentinel") ? (h = function() {
			return function() {
				return r("clearTimeout")(_.current);
			};
		}, y = [], n[4] = h, n[5] = y) : (h = n[4], y = n[5]), u(h, y), l;
	}
	l.default = _;
}), 98);
