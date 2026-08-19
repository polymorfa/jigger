__d("WAWebBizAdCreationSelectedCatalogMediaContextProvider.react", [
	"WAWebBizAdCreationSelectedCatalogMediaContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(7), n = e.children, a = m(_), i = a[0], l = a[1], u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = function(t) {
			l(t);
		}, t[0] = u) : u = t[0];
		var c = u, d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = function() {
			l([]);
		}, t[1] = d) : d = t[1];
		var p = d, f;
		t[2] !== i ? (f = {
			clearCatalogSelections: p,
			selectedCatalogMedia: i,
			setCatalogSelections: c
		}, t[2] = i, t[3] = f) : f = t[3];
		var g = f, h;
		return t[4] !== n || t[5] !== g ? (h = s.jsx(r("WAWebBizAdCreationSelectedCatalogMediaContext").Provider, {
			value: g,
			children: n
		}), t[4] = n, t[5] = g, t[6] = h) : h = t[6], h;
	}
	function _() {
		return [];
	}
	l.default = p;
}), 98);
