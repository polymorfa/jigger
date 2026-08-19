__d("WAWebDeveloperToolsDBViewerUpdateFilters", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e) {
		var t = e.filterIndex, n = e.filters, r = e.updatedValue, o = [].concat(n);
		return r ? o.splice(t, 1, r) : o.splice(t, 1), o;
	}
	async function l(t, n, r, o) {
		var a = await e({
			filterIndex: t,
			filters: n,
			updatedValue: o
		});
		await r(a);
	}
	i.getUpdatedFilters = e, i.updateFilters = l;
}), 66);
