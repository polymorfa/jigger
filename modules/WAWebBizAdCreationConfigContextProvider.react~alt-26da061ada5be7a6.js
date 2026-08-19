__d("WAWebBizAdCreationConfigContextProvider.react", ["WAWebBizAdCreationConfigContext", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = e.children, n = e.entryMode, o = e.entryPoint, a = e.flow, i = e.flowID, l = e.pageID, c = e.product, d = u(function() {
			return {
				entryMode: n,
				entryPoint: o,
				flow: a,
				flowID: i,
				pageID: l,
				product: c
			};
		}, [
			n,
			o,
			a,
			i,
			l,
			c
		]);
		return s.jsx(r("WAWebBizAdCreationConfigContext").Provider, {
			value: d,
			children: t
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
