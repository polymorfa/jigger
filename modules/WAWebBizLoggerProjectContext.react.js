__d("WAWebBizLoggerProjectContext.react", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useContext, m = c(null);
	function p(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, r = e.project, a;
		return t[0] !== n || t[1] !== r ? (a = s.jsx(m, {
			value: r,
			children: n
		}), t[0] = n, t[1] = r, t[2] = a) : a = t[2], a;
	}
	var _ = "wa_ctwa_web";
	function f() {
		var e;
		return (e = d(m)) != null ? e : _;
	}
	l.BizLoggerProjectProvider = p, l.useBizLoggerProject = f;
}), 98);
