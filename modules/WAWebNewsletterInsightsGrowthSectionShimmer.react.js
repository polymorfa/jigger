__d("WAWebNewsletterInsightsGrowthSectionShimmer.react", [
	"WAWebBaseShimmerComponents.react",
	"WAWebFlex.react",
	"WAWebNewsletterAdminInsightsShimmerUtils",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c() {
		var t = o("react-compiler-runtime").c(3), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").DateRangeShimmer, {}), t[0] = n) : n = t[0];
		var a;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (e || (e = r("stylex")))(o("WAWebNewsletterAdminInsightsShimmerUtils").shimmerStyles.shimmerSection), t[1] = a) : a = t[1];
		var i;
		return t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsxs(u.Fragment, { children: [n, u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").ShimmerSection, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: a,
			gap: 20,
			children: [
				u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 20,
					width: 120
				}),
				o("WAWebBaseShimmerComponents.react").times(d, 3),
				u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 244,
					width: "100%"
				})
			]
		}) })] }), t[2] = i) : i = t[2], i;
	}
	function d() {
		return u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").LegendItemShimmer, { width: 96 });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 98);
