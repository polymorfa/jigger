__d("useWAWebDeveloperToolsDBViewerColumnSearch", [
	"WAWebDeveloperToolsSearch",
	"WAWebFormatConfiguration",
	"react",
	"useWAWebDebouncedSearch"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useMemo, u = 250;
	function c(e) {
		var t = r("useWAWebDebouncedSearch")(u), n = t[0], a = t[1], i = s(function() {
			return n ? d(n, e) : e;
		}, [n, e]), l = n != null && n !== "" ? o("WAWebFormatConfiguration").SearchName({ terms: [n] }) : void 0;
		return {
			searchResults: i,
			formatters: l,
			setQuery: a
		};
	}
	function d(e, t) {
		return e === "" ? t : t.filter(function(t) {
			var n = t.name;
			return o("WAWebDeveloperToolsSearch").filter(e, n);
		}).sort(function(t, n) {
			return o("WAWebDeveloperToolsSearch").sort(t.name, n.name, e);
		});
	}
	l.default = c;
}), 98);
