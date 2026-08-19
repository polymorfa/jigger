__d("WAWebNewsletterAdminInsightsTimelineWidgetContainer.react", [
	"WAWebChartUtils",
	"WAWebNewsletterAdminInsightsNoData.react",
	"WAWebNewsletterAdminInsightsTimelineWidget.react",
	"WAWebThemeContext",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.animate, n = e.newsletterMetadata, a = o("useWAWebModelValues").useModelValues(n, ["adminInsights"]), i = o("useWAWebModelValues").useOptionalModelValues(a.adminInsights, ["growthChart"]), l = o("WAWebThemeContext").useIsDarkTheme(), u = i == null ? void 0 : i.growthChart;
		return u == null || u.length === 0 ? s.jsx(r("WAWebNewsletterAdminInsightsNoData.react"), {}) : s.jsx(r("WAWebNewsletterAdminInsightsTimelineWidget.react"), {
			animate: t,
			dataSets: u,
			getChartColor: o("WAWebChartUtils").makeGetChartColorFromTheme(l ? "dark" : "light")
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
