__d("WAWebNewsletterAdminInsightWidgetDrawerList.react", [
	"WAWebDrawerSection.react",
	"WAWebInsightSection.react",
	"WAWebNewsletterAdminInsightsFailedToLoad.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { paddingInline30: {
		paddingInlineStart: "x162tt16",
		paddingInlineEnd: "x5zjp28",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function c(e) {
		var t = e.animate, n = e.error, a = e.newsletterMetadata, i = e.retry, l = e.widgets;
		return l.map(function(e, l) {
			var c, d = e.Component, m = e.getTitle, p = e.metricsInfo, _ = m != null;
			return s.jsx(r("WAWebDrawerSection.react"), {
				xstyle: [
					u.paddingInline30,
					_ ? o("WDSPaddings.stylex").wdsPaddings.paddingBottom32 : o("WDSPaddings.stylex").wdsPaddings.paddingBottom20,
					o("WDSPaddings.stylex").wdsPaddings.paddingTop20
				],
				animation: !1,
				children: s.jsx(r("WAWebInsightSection.react"), {
					metricsInfo: p,
					title: m == null ? void 0 : m(),
					lastUpdateTime: (c = a.adminInsights) == null ? void 0 : c.rangeEnd,
					children: n != null ? s.jsx(r("WAWebNewsletterAdminInsightsFailedToLoad.react"), { onClick: i }) : s.jsx(d, {
						animate: t,
						newsletterMetadata: a
					})
				})
			}, l);
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
