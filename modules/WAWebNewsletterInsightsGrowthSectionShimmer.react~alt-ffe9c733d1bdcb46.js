__d("WAWebNewsletterInsightsGrowthSectionShimmer.react", [
	"WAWebBaseShimmerComponents.react",
	"WAWebFlex.react",
	"WAWebNewsletterAdminInsightsShimmerUtils",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c() {
		return u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").DateRangeShimmer, {}), u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").ShimmerSection, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: (e || (e = r("stylex")))(o("WAWebNewsletterAdminInsightsShimmerUtils").shimmerStyles.shimmerSection),
			gap: 20,
			children: [
				u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 20,
					width: 120
				}),
				o("WAWebBaseShimmerComponents.react").times(function() {
					return u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").LegendItemShimmer, { width: 96 });
				}, 3),
				u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 244,
					width: "100%"
				})
			]
		}) })] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
