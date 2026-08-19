__d("WAWebNewsletterAdminInsightsFollowersByCountryWidgetContainer.react", [
	"WAWebNewsletterAdminInsightCountryBarChartWidgetContainer.react",
	"WAWebNewsletterAdminInsightsNoData.react",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.animate, n = e.newsletterMetadata, a = o("useWAWebModelValues").useModelValues(n, ["adminInsights"]), i = o("useWAWebModelValues").useOptionalModelValues(a.adminInsights, ["followersByCountry"]), l = i == null ? void 0 : i.followersByCountry;
		return l == null || l.length === 0 ? s.jsx(r("WAWebNewsletterAdminInsightsNoData.react"), {}) : s.jsx(r("WAWebNewsletterAdminInsightCountryBarChartWidgetContainer.react"), {
			animate: t,
			values: l
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
