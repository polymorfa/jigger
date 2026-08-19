__d("WAWebNewsletterInsightsGrowthSection.react", [
	"fbt",
	"WAWebCommonNewsletterStrings",
	"WAWebNewsletterAdminInsightWidgetDrawerList.react",
	"WAWebNewsletterAdminInsightsPeriodWidgetContainer.react",
	"WAWebNewsletterAdminInsightsTimelineWidgetContainer.react",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebWamEnumActionTarget",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.animate, n = e.error, a = e.newsletterMetadata, i = e.retry, l = e.tsNavigationData;
		return o("WAWebTimeSpentLoggingNavigation").useTsNavigation(l), u.jsx(r("WAWebNewsletterAdminInsightWidgetDrawerList.react"), {
			animate: t,
			error: n,
			newsletterMetadata: a,
			widgets: d,
			retry: i
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
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
