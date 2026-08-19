__d("WAWebNewsletterInsightsReachSection.react", [
	"fbt",
	"WAWebCommonNewsletterStrings",
	"WAWebNewsletterAdminInsightWidgetDrawerList.react",
	"WAWebNewsletterAdminInsightsPeriodWidgetContainer.react",
	"WAWebNewsletterAdminInsightsReachByCountryWidgetContainer.react",
	"WAWebNewsletterAdminInsightsReachWidgetContainer.react",
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
			newsletterMetadata: a,
			widgets: d,
			error: n,
			retry: i
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = [
		{ Component: r("WAWebNewsletterAdminInsightsPeriodWidgetContainer.react") },
		{
			getTitle: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			metricsInfo: {
				getMetrics: function() {
					return [
						o("WAWebCommonNewsletterStrings").getAccountsReachMetricInfo(),
						o("WAWebCommonNewsletterStrings").getReachFollowersMetricInfo(),
						o("WAWebCommonNewsletterStrings").getReachNonFollowersMetricInfo()
					];
				},
				getMetricsThresholdInfo: function() {
					return o("WAWebCommonNewsletterStrings").getReachMetricsThreshold();
				},
				infoIconLoggingId: o("WAWebWamEnumActionTarget").ACTION_TARGET.ACCOUNTS_REACHED_INFO_ICON,
				tab: "reach"
			},
			Component: r("WAWebNewsletterAdminInsightsReachWidgetContainer.react")
		},
		{
			getTitle: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			metricsInfo: {
				getMetrics: function() {
					return [o("WAWebCommonNewsletterStrings").getReachTopRegionsMetricInfo()];
				},
				getMetricsThresholdInfo: function() {
					return s._(
						/*BTDS*/
						""
					);
				},
				infoIconLoggingId: o("WAWebWamEnumActionTarget").ACTION_TARGET.TOP_REGIONS_REACH_INFO_ICON,
				tab: "reach"
			},
			Component: r("WAWebNewsletterAdminInsightsReachByCountryWidgetContainer.react")
		}
	];
	l.default = c;
}), 226);
