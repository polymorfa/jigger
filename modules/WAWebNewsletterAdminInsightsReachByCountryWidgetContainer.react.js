__d("WAWebNewsletterAdminInsightsReachByCountryWidgetContainer.react", [
	"WAWebNewsletterAdminInsightCountryBarChartWidgetContainer.react",
	"WAWebNewsletterAdminInsightsNoData.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { bar: {
		backgroundColor: "x45jci1",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(6), n = e.animate, a = e.newsletterMetadata, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ["adminInsights"], t[0] = i) : i = t[0];
		var l = o("useWAWebModelValues").useModelValues(a, i), c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = ["reachByCountry"], t[1] = c) : c = t[1];
		var d = o("useWAWebModelValues").useOptionalModelValues(l.adminInsights, c), m = d == null ? void 0 : d.reachByCountry;
		if (m == null || m.length === 0) {
			var p;
			return t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = s.jsx(r("WAWebNewsletterAdminInsightsNoData.react"), {}), t[2] = p) : p = t[2], p;
		}
		var _;
		return t[3] !== n || t[4] !== m ? (_ = s.jsx(r("WAWebNewsletterAdminInsightCountryBarChartWidgetContainer.react"), {
			animate: n,
			values: m,
			barXstyle: u.bar
		}), t[3] = n, t[4] = m, t[5] = _) : _ = t[5], _;
	}
	l.default = c;
}), 98);
