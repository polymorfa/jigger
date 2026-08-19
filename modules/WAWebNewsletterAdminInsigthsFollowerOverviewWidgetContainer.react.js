__d("WAWebNewsletterAdminInsigthsFollowerOverviewWidgetContainer.react", [
	"WAWebFlex.react",
	"WAWebNewsletterAdminInsightsNoData.react",
	"WAWebValueWithDeltaOverPeriod.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(8), n = e.newsletterMetadata, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["adminInsights", "showInsightDelta"], t[0] = a) : a = t[0];
		var i = o("useWAWebModelValues").useModelValues(n, a), l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			"followers",
			"followersDelta",
			"rangeInDays"
		], t[1] = l) : l = t[1];
		var u = o("useWAWebModelValues").useOptionalModelValues(i.adminInsights, l), c = u == null ? void 0 : u.followers, d = u == null ? void 0 : u.followersDelta, m = u == null ? void 0 : u.rangeInDays;
		if (c == null || d == null || m == null) {
			var p;
			return t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = s.jsx(r("WAWebNewsletterAdminInsightsNoData.react"), {}), t[2] = p) : p = t[2], p;
		}
		var _;
		return t[3] !== m || t[4] !== c || t[5] !== d || t[6] !== i.showInsightDelta ? (_ = s.jsx(o("WAWebFlex.react").FlexItem, {
			paddingTop: 8,
			children: s.jsx(r("WAWebValueWithDeltaOverPeriod.react"), {
				days: m,
				delta: d,
				value: c,
				showDelta: i.showInsightDelta
			})
		}), t[3] = m, t[4] = c, t[5] = d, t[6] = i.showInsightDelta, t[7] = _) : _ = t[7], _;
	}
	l.default = u;
}), 98);
