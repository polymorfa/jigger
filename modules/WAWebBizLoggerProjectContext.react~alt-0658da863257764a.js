__d("WAWebBizLoggerProjectContext.react", ["react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useContext, m = c(null);
	function p(e) {
		var t = e.children, n = e.project;
		return s.jsx(m, {
			value: n,
			children: t
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	var _ = "wa_ctwa_web";
	function f() {
		var e;
		return (e = d(m)) != null ? e : _;
	}
	l.BizLoggerProjectProvider = p, l.useBizLoggerProject = f;
}), 98);
