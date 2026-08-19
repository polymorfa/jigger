__d("WAWebNewsletterAdminInsightsReachWidgetContainer.react", [
	"WAWebNewsletterAdminInsightsNoData.react",
	"WAWebNewsletterAdminInsightsReachWidget.react",
	"WAWebNewsletterGatingUtils",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.animate, n = e.newsletterMetadata, a = o("useWAWebModelValues").useModelValues(n, ["adminInsights", "showInsightDelta"]), i = o("useWAWebModelValues").useOptionalModelValues(a.adminInsights, [
			"accountsReached",
			"followersReached",
			"nonFollowersReached",
			"reachDelta"
		]);
		if (i == null) return s.jsx(r("WAWebNewsletterAdminInsightsNoData.react"), {});
		var l = i.accountsReached, u = i.followersReached, c = i.nonFollowersReached, d = i.reachDelta;
		return l == null || u == null || c == null ? s.jsx(r("WAWebNewsletterAdminInsightsNoData.react"), {}) : s.jsx(r("WAWebNewsletterAdminInsightsReachWidget.react"), {
			animate: t,
			delta: o("WAWebNewsletterGatingUtils").shouldHideProducerInsightsDeltas() ? null : d,
			followers: u,
			others: c,
			reach: l,
			showDelta: a.showInsightDelta
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
