__d("MAWEditMessageContext.react", [
	"emptyFunction",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useMemo, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(5), n = e.children, r = m(null), a = r[0], i = r[1], l;
		t[0] !== a ? (l = {
			editMessageData: a,
			setEditMessageData: i
		}, t[0] = a, t[1] = l) : l = t[1];
		var u = l, c;
		return t[2] !== n || t[3] !== u ? (c = s.jsx(_.Provider, {
			value: u,
			children: n
		}), t[2] = n, t[3] = u, t[4] = c) : c = t[4], c;
	}
	var _ = c({
		editMessageData: null,
		setEditMessageData: r("emptyFunction")
	});
	l.MAWEditMessageContext = p, l.Context = _;
}), 98);
