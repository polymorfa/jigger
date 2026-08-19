__d("WAWebNewsletterInsightsReachSectionShimmer.react", [
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
		return u.jsxs(u.Fragment, { children: [
			u.jsx((t = o("WAWebNewsletterAdminInsightsShimmerUtils")).DateRangeShimmer, {}),
			u.jsxs(t.ShimmerSection, { children: [u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 20,
				width: 120
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				marginTop: 20,
				gap: 20,
				justify: "center",
				align: "center",
				className: (e || (e = r("stylex")))(o("WAWebNewsletterAdminInsightsShimmerUtils").shimmerStyles.shimmerSection),
				children: [
					u.jsxs(o("WAWebFlex.react").FlexColumn, {
						justify: "center",
						align: "center",
						gap: 4,
						children: [u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
							height: 24,
							width: 72
						}), u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
							height: 20,
							width: 96
						})]
					}),
					u.jsx(d, {}),
					u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").LegendItemShimmer, {}),
					u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").LegendItemShimmer, {})
				]
			})] }),
			u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").CountryBreakdownShimmer, {})
		] });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		return u.jsx(o("WAWebFlex.react").FlexRow, {
			gap: 20,
			align: "center",
			justify: "center",
			children: u.jsxs("div", {
				className: "x1n2onr6",
				children: [u.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, { diameter: 72 }), u.jsx("div", { className: "x10l6tqk xwa60dl xbudbmw x11lhmoz x1280gxy x15yg21f xnnlda6 x1c9tyrk xeusxvb x1pahc9y x1ertn4p" })]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 98);
