__d("WAWebNewsletterInsightsReachSection.react", [
	"fbt",
	"WAWebCommonNewsletterStrings",
	"WAWebNewsletterAdminInsightWidgetDrawerList.react",
	"WAWebNewsletterAdminInsightsPeriodWidgetContainer.react",
	"WAWebNewsletterAdminInsightsReachByCountryWidgetContainer.react",
	"WAWebNewsletterAdminInsightsReachWidgetContainer.react",
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
			newsletterMetadata: i,
			widgets: d,
			error: a,
			retry: l
		}), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = c) : c = t[4], c;
	}
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
