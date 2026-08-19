__d("WAWebNewsletterAdminInsightCountryBarChartWidgetContainer.react", [
	"WAWebBarChart.react",
	"WAWebNewsletterInsightCountryDataProcessors",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		var t = e.animate, n = e.barXstyle, a = e.values, i = m([]), l = i[0], u = i[1], p = c(async function() {
			var e = await o("WAWebNewsletterInsightCountryDataProcessors").getCountryBarValues(a);
			u(e);
		}, [a]);
		return d(function() {
			p();
		}, [p]), s.jsx(r("WAWebBarChart.react"), {
			animate: t,
			barValues: l,
			barXstyle: n
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
