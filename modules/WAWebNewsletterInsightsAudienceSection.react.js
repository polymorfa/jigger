__d("WAWebNewsletterInsightsAudienceSection.react", [
	"fbt",
	"WAWebCommonNewsletterStrings",
	"WAWebNewsletterAdminInsightWidgetDrawerList.react",
	"WAWebNewsletterAdminInsightsFollowersByCountryWidgetContainer.react",
	"WAWebNewsletterAdminInsigthsFollowerOverviewWidgetContainer.react",
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
