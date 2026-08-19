__d("WAWebNewsletterAdminInsightsReachByCountryWidgetContainer.react", [
	"WAWebNewsletterAdminInsightCountryBarChartWidgetContainer.react",
	"WAWebNewsletterAdminInsightsNoData.react",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { bar: {
		backgroundColor: "x45jci1",
		$$css: !0
	} };
	function c(e) {
		var t = e.animate, n = e.newsletterMetadata, a = o("useWAWebModelValues").useModelValues(n, ["adminInsights"]), i = o("useWAWebModelValues").useOptionalModelValues(a.adminInsights, ["reachByCountry"]), l = i == null ? void 0 : i.reachByCountry;
		return l == null || l.length === 0 ? s.jsx(r("WAWebNewsletterAdminInsightsNoData.react"), {}) : s.jsx(r("WAWebNewsletterAdminInsightCountryBarChartWidgetContainer.react"), {
			animate: t,
			values: l,
			barXstyle: u.bar
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
