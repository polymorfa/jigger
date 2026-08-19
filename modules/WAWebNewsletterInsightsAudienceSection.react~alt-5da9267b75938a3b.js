__d("WAWebNewsletterInsightsAudienceSection.react", [
	"fbt",
	"WAWebCommonNewsletterStrings",
	"WAWebNewsletterAdminInsightWidgetDrawerList.react",
	"WAWebNewsletterAdminInsightsFollowersByCountryWidgetContainer.react",
	"WAWebNewsletterAdminInsigthsFollowerOverviewWidgetContainer.react",
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
	var d = [{
		getTitle: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		metricsInfo: {
			getMetrics: function() {
				return [o("WAWebCommonNewsletterStrings").getTotalFollowersMetricInfo()];
			},
			infoIconLoggingId: o("WAWebWamEnumActionTarget").ACTION_TARGET.TOTAL_FOLLOWERS_INFO_ICON,
			showLastUpdatedTime: !0,
			tab: "followers"
		},
		Component: r("WAWebNewsletterAdminInsigthsFollowerOverviewWidgetContainer.react")
	}, {
		getTitle: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		metricsInfo: {
			getMetrics: function() {
				return [o("WAWebCommonNewsletterStrings").getFollowerTopRegionsMetricInfo()];
			},
			getMetricsThresholdInfo: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			infoIconLoggingId: o("WAWebWamEnumActionTarget").ACTION_TARGET.TOP_REGIONS_REACH_INFO_ICON,
			tab: "followers"
		},
		Component: r("WAWebNewsletterAdminInsightsFollowersByCountryWidgetContainer.react")
	}];
	l.default = c;
}), 226);
