__d("WAWebNewsletterAdminInsightsPeriodWidgetContainer.react", [
	"WAWebDaysPeriodCovered.react",
	"react",
	"react-compiler-runtime",
	"useWAWebAdminInsightsHooks"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4), n = e.newsletterMetadata, a = o("useWAWebAdminInsightsHooks").useAdminInsightPeriod(n), i = a.days, l = a.end, u = a.start, c;
		return t[0] !== i || t[1] !== l || t[2] !== u ? (c = s.jsx(r("WAWebDaysPeriodCovered.react"), {
			days: i,
			start: u,
			end: l
		}), t[0] = i, t[1] = l, t[2] = u, t[3] = c) : c = t[3], c;
	}
	l.default = u;
}), 98);
