__d("WAWebNewsletterInsightsAudienceSectionShimmer.react", [
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
		var t = o("react-compiler-runtime").c(3), n, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = (e || (e = r("stylex")))(o("WAWebNewsletterAdminInsightsShimmerUtils").shimmerStyles.shimmerSection), a = u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: 20,
			width: 120
		}), t[0] = n, t[1] = a) : (n = t[0], a = t[1]);
		var i;
		return t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").ShimmerSection, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: n,
			children: [a, u.jsxs(o("WAWebFlex.react").FlexColumn, {
				marginTop: 20,
				align: "center",
				justify: "center",
				gap: 8,
				className: (e || (e = r("stylex")))(o("WAWebNewsletterAdminInsightsShimmerUtils").shimmerStyles.shimmerSection),
				children: [u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 24,
					width: 72
				}), u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 20,
					width: 96
				})]
			})]
		}) }), u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").CountryBreakdownShimmer, {})] }), t[2] = i) : i = t[2], i;
	}
	l.default = c;
}), 98);
