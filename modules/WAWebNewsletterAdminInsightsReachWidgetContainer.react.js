__d("WAWebNewsletterAdminInsightsReachWidgetContainer.react", [
	"WAWebNewsletterAdminInsightsNoData.react",
	"WAWebNewsletterAdminInsightsReachWidget.react",
	"WAWebNewsletterGatingUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(13), n = e.animate, a = e.newsletterMetadata, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ["adminInsights", "showInsightDelta"], t[0] = i) : i = t[0];
		var l = o("useWAWebModelValues").useModelValues(a, i), u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = [
			"accountsReached",
			"followersReached",
			"nonFollowersReached",
			"reachDelta"
		], t[1] = u) : u = t[1];
		var c = o("useWAWebModelValues").useOptionalModelValues(l.adminInsights, u);
		if (c == null) {
			var d;
			return t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = s.jsx(r("WAWebNewsletterAdminInsightsNoData.react"), {}), t[2] = d) : d = t[2], d;
		}
		var m = c.accountsReached, p = c.followersReached, _ = c.nonFollowersReached, f = c.reachDelta;
		if (m == null || p == null || _ == null) {
			var g;
			return t[3] === Symbol.for("react.memo_cache_sentinel") ? (g = s.jsx(r("WAWebNewsletterAdminInsightsNoData.react"), {}), t[3] = g) : g = t[3], g;
		}
		var h;
		t[4] !== f ? (h = o("WAWebNewsletterGatingUtils").shouldHideProducerInsightsDeltas() ? null : f, t[4] = f, t[5] = h) : h = t[5];
		var y;
		return t[6] !== m || t[7] !== n || t[8] !== p || t[9] !== l.showInsightDelta || t[10] !== _ || t[11] !== h ? (y = s.jsx(r("WAWebNewsletterAdminInsightsReachWidget.react"), {
			animate: n,
			delta: h,
			followers: p,
			others: _,
			reach: m,
			showDelta: l.showInsightDelta
		}), t[6] = m, t[7] = n, t[8] = p, t[9] = l.showInsightDelta, t[10] = _, t[11] = h, t[12] = y) : y = t[12], y;
	}
	l.default = u;
}), 98);
