__d("WAWebNewsletterAdminInsightWidgetDrawerList.react", [
	"WAWebDrawerSection.react",
	"WAWebInsightSection.react",
	"WAWebNewsletterAdminInsightsFailedToLoad.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(11), n = e.animate, a = e.error, i = e.newsletterMetadata, l = e.retry, c = e.widgets, d;
		if (t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== c) {
			var m;
			t[6] !== n || t[7] !== a || t[8] !== i || t[9] !== l ? (m = function(t, c) {
				var e, d = t.Component, m = t.getTitle, p = t.metricsInfo, _ = m != null;
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
						lastUpdateTime: (e = i.adminInsights) == null ? void 0 : e.rangeEnd,
						children: a != null ? s.jsx(r("WAWebNewsletterAdminInsightsFailedToLoad.react"), { onClick: l }) : s.jsx(d, {
							animate: n,
							newsletterMetadata: i
						})
					})
				}, c);
			}, t[6] = n, t[7] = a, t[8] = i, t[9] = l, t[10] = m) : m = t[10], d = c.map(m), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = c, t[5] = d;
		} else d = t[5];
		return d;
	}
	l.default = c;
}), 98);
