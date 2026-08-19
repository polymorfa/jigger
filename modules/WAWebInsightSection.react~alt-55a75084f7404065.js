__d("WAWebInsightSection.react", [
	"WAWebFlex.react",
	"WAWebInsightSectionHeading.react",
	"WAWebMetricInfoModal.react",
	"WAWebModalManager",
	"WAWebNewsletterProducerInsightsLogger",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext, c = { container: {
		width: "xh8yej3",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		$$css: !0
	} };
	function d(e) {
		var t = e.children, n = e.lastUpdateTime, a = e.metricsInfo, i = e.title, l = u(o("WAWebNewsletterProducerInsightsLogger").NewsletterProducerInsightsLoggerContext), d = a != null && a.getMetrics().length > 0 ? function() {
			l.logInfoIconTap(a.infoIconLoggingId), o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebMetricInfoModal.react"), {
				metrics: a.getMetrics(),
				metricsThreshold: a.getMetricsThresholdInfo == null ? void 0 : a.getMetricsThresholdInfo(),
				logger: l,
				lastUpdated: a.showLastUpdatedTime === !0 ? n : void 0
			}));
		} : void 0;
		return s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [i != null && s.jsx(o("WAWebFlex.react").FlexRow, {
			paddingBottom: 20,
			children: s.jsx(r("WAWebInsightSectionHeading.react"), {
				title: i,
				onIconClick: d
			})
		}), s.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: c.container,
			children: t
		})] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
