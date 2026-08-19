__d("WAWebNewsletterInsightsGrowthSection.react", [
	"fbt",
	"WAWebCommonNewsletterStrings",
	"WAWebNewsletterAdminInsightWidgetDrawerList.react",
	"WAWebNewsletterAdminInsightsPeriodWidgetContainer.react",
	"WAWebNewsletterAdminInsightsTimelineWidgetContainer.react",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebWamEnumActionTarget",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.animate, a = e.error, i = e.newsletterMetadata, l = e.retry, s = e.tsNavigationData;
		o("WAWebTimeSpentLoggingNavigation").useTsNavigation(s);
		var c;
		return t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l ? (c = u.jsx(r("WAWebNewsletterAdminInsightWidgetDrawerList.react"), {
			animate: n,
			error: a,
			newsletterMetadata: i,
			widgets: d,
			retry: l
		}), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = c) : c = t[4], c;
	}
	var d = [{ Component: r("WAWebNewsletterAdminInsightsPeriodWidgetContainer.react") }, {
		getTitle: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		metricsInfo: {
			getMetrics: function() {
				return [
					o("WAWebCommonNewsletterStrings").getNetFollowsMetricInfo(),
					o("WAWebCommonNewsletterStrings").getFollowsMetricInfo(),
					o("WAWebCommonNewsletterStrings").getUnfollowsMetricInfo()
				];
			},
			getMetricsThresholdInfo: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			infoIconLoggingId: o("WAWebWamEnumActionTarget").ACTION_TARGET.GROWTH_CHART_INFO_ICON,
			tab: "growth"
		},
		Component: r("WAWebNewsletterAdminInsightsTimelineWidgetContainer.react")
	}];
	l.default = c;
}), 226);
