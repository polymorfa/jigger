__d("MAWSetupWrapperOnce.react", ["CometPlaceholder.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext, c = s.createContext(!1);
	function d(e) {
		var t = e.children, n = e.setupComponent, o = u(c);
		return o ? t : s.jsxs(c.Provider, {
			value: !0,
			children: [t, s.jsx(r("CometPlaceholder.react"), {
				fallback: null,
				name: "MAWSetupWrapperOnce",
				children: n
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
