__d("WAWebNewsletterAdminInsightsTimelineWidgetContainer.react", [
	"WAWebChartUtils",
	"WAWebNewsletterAdminInsightsNoData.react",
	"WAWebNewsletterAdminInsightsTimelineWidget.react",
	"WAWebThemeContext",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(9), n = e.animate, a = e.newsletterMetadata, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ["adminInsights"], t[0] = i) : i = t[0];
		var l = o("useWAWebModelValues").useModelValues(a, i), u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = ["growthChart"], t[1] = u) : u = t[1];
		var c = o("useWAWebModelValues").useOptionalModelValues(l.adminInsights, u), d = o("WAWebThemeContext").useIsDarkTheme(), m = c == null ? void 0 : c.growthChart;
		if (m == null || m.length === 0) {
			var p;
			return t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = s.jsx(r("WAWebNewsletterAdminInsightsNoData.react"), {}), t[2] = p) : p = t[2], p;
		}
		var _ = d ? "dark" : "light", f;
		t[3] !== _ ? (f = o("WAWebChartUtils").makeGetChartColorFromTheme(_), t[3] = _, t[4] = f) : f = t[4];
		var g;
		return t[5] !== n || t[6] !== m || t[7] !== f ? (g = s.jsx(r("WAWebNewsletterAdminInsightsTimelineWidget.react"), {
			animate: n,
			dataSets: m,
			getChartColor: f
		}), t[5] = n, t[6] = m, t[7] = f, t[8] = g) : g = t[8], g;
	}
	l.default = u;
}), 98);
