__d("WAWebNewsletterAdminInsightsFollowersByCountryWidgetContainer.react", [
	"WAWebNewsletterAdminInsightCountryBarChartWidgetContainer.react",
	"WAWebNewsletterAdminInsightsNoData.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(6), n = e.animate, a = e.newsletterMetadata, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ["adminInsights"], t[0] = i) : i = t[0];
		var l = o("useWAWebModelValues").useModelValues(a, i), u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = ["followersByCountry"], t[1] = u) : u = t[1];
		var c = o("useWAWebModelValues").useOptionalModelValues(l.adminInsights, u), d = c == null ? void 0 : c.followersByCountry;
		if (d == null || d.length === 0) {
			var m;
			return t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx(r("WAWebNewsletterAdminInsightsNoData.react"), {}), t[2] = m) : m = t[2], m;
		}
		var p;
		return t[3] !== n || t[4] !== d ? (p = s.jsx(r("WAWebNewsletterAdminInsightCountryBarChartWidgetContainer.react"), {
			animate: n,
			values: d
		}), t[3] = n, t[4] = d, t[5] = p) : p = t[5], p;
	}
	l.default = u;
}), 98);
