__d("E2EEMessagingLinkContext.react", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useContext, m = u.useMemo, p = c({
		inThread: !1,
		isSecure: !1
	});
	function _(e) {
		var t = o("react-compiler-runtime").c(6), n = e.children, r = e.inThread, a = e.isSecure, i;
		t[0] !== r || t[1] !== a ? (i = {
			inThread: r,
			isSecure: a
		}, t[0] = r, t[1] = a, t[2] = i) : i = t[2];
		var l = i, u;
		return t[3] !== n || t[4] !== l ? (u = s.jsx(p.Provider, {
			value: l,
			children: n
		}), t[3] = n, t[4] = l, t[5] = u) : u = t[5], u;
	}
	function f() {
		return d(p);
	}
	l.E2EEMessagingLinkContext = p, l.E2EEMessagingLinkProvider = _, l.useE2EEMessagingLink = f;
}), 98);
