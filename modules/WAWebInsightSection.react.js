__d("WAWebInsightSection.react", [
	"WAWebFlex.react",
	"WAWebInsightSectionHeading.react",
	"WAWebMetricInfoModal.react",
	"WAWebModalManager",
	"WAWebNewsletterProducerInsightsLogger",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext, c = { container: {
		width: "xh8yej3",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(12), n = e.children, a = e.lastUpdateTime, i = e.metricsInfo, l = e.title, d = u(o("WAWebNewsletterProducerInsightsLogger").NewsletterProducerInsightsLoggerContext), m;
		t[0] !== a || t[1] !== d || t[2] !== i ? (m = i != null && i.getMetrics().length > 0 ? function() {
			d.logInfoIconTap(i.infoIconLoggingId), o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebMetricInfoModal.react"), {
				metrics: i.getMetrics(),
				metricsThreshold: i.getMetricsThresholdInfo == null ? void 0 : i.getMetricsThresholdInfo(),
				logger: d,
				lastUpdated: i.showLastUpdatedTime === !0 ? a : void 0
			}));
		} : void 0, t[0] = a, t[1] = d, t[2] = i, t[3] = m) : m = t[3];
		var p = m, _;
		t[4] !== p || t[5] !== l ? (_ = l != null && s.jsx(o("WAWebFlex.react").FlexRow, {
			paddingBottom: 20,
			children: s.jsx(r("WAWebInsightSectionHeading.react"), {
				title: l,
				onIconClick: p
			})
		}), t[4] = p, t[5] = l, t[6] = _) : _ = t[6];
		var f;
		t[7] !== n ? (f = s.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: c.container,
			children: n
		}), t[7] = n, t[8] = f) : f = t[8];
		var g;
		return t[9] !== _ || t[10] !== f ? (g = s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [_, f] }), t[9] = _, t[10] = f, t[11] = g) : g = t[11], g;
	}
	l.default = d;
}), 98);
