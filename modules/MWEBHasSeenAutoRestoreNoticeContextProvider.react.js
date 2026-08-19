__d("MWEBHasSeenAutoRestoreNoticeContextProvider.react", [
	"MWEBHasSeenAutoRestoreNoticeContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.children, a = e.hasSeenNotice, i;
		t[0] !== a ? (i = { hasSeenNotice: a }, t[0] = a, t[1] = i) : i = t[1];
		var l = i, u;
		return t[2] !== n || t[3] !== l ? (u = s.jsx(r("MWEBHasSeenAutoRestoreNoticeContext").Provider, {
			value: l,
			children: n
		}), t[2] = n, t[3] = l, t[4] = u) : u = t[4], u;
	}
	l.default = c;
}), 98);
