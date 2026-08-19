__d("WAWebNewsletterAdminInsigthsFollowerOverviewWidgetContainer.react", [
	"WAWebFlex.react",
	"WAWebNewsletterAdminInsightsNoData.react",
	"WAWebValueWithDeltaOverPeriod.react",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.animate, n = e.newsletterMetadata, a = o("useWAWebModelValues").useModelValues(n, ["adminInsights", "showInsightDelta"]), i = o("useWAWebModelValues").useOptionalModelValues(a.adminInsights, [
			"followers",
			"followersDelta",
			"rangeInDays"
		]), l = i == null ? void 0 : i.followers, u = i == null ? void 0 : i.followersDelta, c = i == null ? void 0 : i.rangeInDays;
		return l == null || u == null || c == null ? s.jsx(r("WAWebNewsletterAdminInsightsNoData.react"), {}) : s.jsx(o("WAWebFlex.react").FlexItem, {
			paddingTop: 8,
			children: s.jsx(r("WAWebValueWithDeltaOverPeriod.react"), {
				days: c,
				delta: u,
				value: l,
				showDelta: a.showInsightDelta
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
