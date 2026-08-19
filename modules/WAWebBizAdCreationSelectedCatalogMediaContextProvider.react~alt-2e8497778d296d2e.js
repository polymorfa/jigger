__d("WAWebBizAdCreationSelectedCatalogMediaContextProvider.react", ["WAWebBizAdCreationSelectedCatalogMediaContext", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = u.useState;
	function p(e) {
		var t = e.children, n = m(function() {
			return [];
		}), o = n[0], a = n[1], i = c(function(e) {
			a(e);
		}, []), l = c(function() {
			a([]);
		}, []), u = d(function() {
			return {
				clearCatalogSelections: l,
				selectedCatalogMedia: o,
				setCatalogSelections: i
			};
		}, [
			l,
			o,
			i
		]);
		return s.jsx(r("WAWebBizAdCreationSelectedCatalogMediaContext").Provider, {
			value: u,
			children: t
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
