__d("WAWebNewsletterAdminInsightCountryBarChartWidgetContainer.react", [
	"WAWebBarChart.react",
	"WAWebNewsletterInsightCountryDataProcessors",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		var t = e.animate, a = e.barXstyle, i = e.values, l = m([]), u = l[0], p = l[1], _ = c(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAWebNewsletterInsightCountryDataProcessors").getCountryBarValues(i);
			p(e);
		}), [i]);
		return d(function() {
			_();
		}, [_]), s.jsx(r("WAWebBarChart.react"), {
			animate: t,
			barValues: u,
			barXstyle: a
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
