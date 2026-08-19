__d("MAWEditMessageContext.react", ["emptyFunction", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useMemo, m = u.useState;
	function p(e) {
		var t = e.children, n = m(null), r = n[0], o = n[1], a = d(function() {
			return {
				editMessageData: r,
				setEditMessageData: o
			};
		}, [r, o]);
		return s.jsx(_.Provider, {
			value: a,
			children: t
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	var _ = c({
		editMessageData: null,
		setEditMessageData: r("emptyFunction")
	});
	l.MAWEditMessageContext = p, l.Context = _;
}), 98);
