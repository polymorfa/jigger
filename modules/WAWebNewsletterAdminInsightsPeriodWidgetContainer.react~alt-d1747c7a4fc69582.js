__d("WAWebNewsletterAdminInsightsPeriodWidgetContainer.react", [
	"WAWebDaysPeriodCovered.react",
	"react",
	"useWAWebAdminInsightsHooks"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.animate, n = e.newsletterMetadata, a = o("useWAWebAdminInsightsHooks").useAdminInsightPeriod(n), i = a.days, l = a.end, u = a.start;
		return s.jsx(r("WAWebDaysPeriodCovered.react"), {
			days: i,
			start: u,
			end: l
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
