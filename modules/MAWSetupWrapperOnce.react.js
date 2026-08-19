__d("MAWSetupWrapperOnce.react", [
	"CometPlaceholder.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext, c = s.createContext(!1);
	function d(e) {
		var t = o("react-compiler-runtime").c(5), n = e.children, a = e.setupComponent, i = u(c);
		if (i) return n;
		var l;
		t[0] !== a ? (l = s.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: "MAWSetupWrapperOnce",
			children: a
		}), t[0] = a, t[1] = l) : l = t[1];
		var d;
		return t[2] !== n || t[3] !== l ? (d = s.jsxs(c.Provider, {
			value: !0,
			children: [n, l]
		}), t[2] = n, t[3] = l, t[4] = d) : d = t[4], d;
	}
	l.default = d;
}), 98);
