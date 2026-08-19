__d("WebUXLoggingSurfaceContextProvider", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.createContext, c = u("unknown");
	function d(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r = e.value, a;
		return t[0] !== n || t[1] !== r ? (a = s.jsx(c.Provider, {
			value: r,
			children: n
		}), t[0] = n, t[1] = r, t[2] = a) : a = t[2], a;
	}
	l.WebUXSurfaceLoggingContext = c, l.WebUXLoggingSurfaceContextProvider = d;
}), 98);
