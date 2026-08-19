__d("WAWebNewsletterInsightsAudienceSectionShimmer.react", [
	"WAWebBaseShimmerComponents.react",
	"WAWebFlex.react",
	"WAWebNewsletterAdminInsightsShimmerUtils",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c() {
		var t;
		return u.jsxs(u.Fragment, { children: [u.jsx((t = o("WAWebNewsletterAdminInsightsShimmerUtils")).ShimmerSection, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: (e || (e = r("stylex")))(o("WAWebNewsletterAdminInsightsShimmerUtils").shimmerStyles.shimmerSection),
			children: [u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 20,
				width: 120
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				marginTop: 20,
				align: "center",
				justify: "center",
				gap: 8,
				className: e(o("WAWebNewsletterAdminInsightsShimmerUtils").shimmerStyles.shimmerSection),
				children: [u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 24,
					width: 72
				}), u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 20,
					width: 96
				})]
			})]
		}) }), u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").CountryBreakdownShimmer, {})] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
