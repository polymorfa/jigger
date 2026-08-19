__d("WAWebNewsletterInsightsReachSectionShimmer.react", [
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
		var t = o("react-compiler-runtime").c(4), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(o("WAWebNewsletterAdminInsightsShimmerUtils").DateRangeShimmer, {}), t[0] = n) : n = t[0];
		var a;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: 20,
			width: 120
		}), t[1] = a) : a = t[1];
		var i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = (e || (e = r("stylex")))(o("WAWebNewsletterAdminInsightsShimmerUtils").shimmerStyles.shimmerSection), t[2] = i) : i = t[2];
		var l;
		if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
			var s;
			l = u.jsxs(u.Fragment, { children: [
				n,
				u.jsxs((s = o("WAWebNewsletterAdminInsightsShimmerUtils")).ShimmerSection, { children: [a, u.jsxs(o("WAWebFlex.react").FlexColumn, {
					marginTop: 20,
					gap: 20,
					justify: "center",
					align: "center",
					className: i,
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
						u.jsx(s.LegendItemShimmer, {}),
						u.jsx(s.LegendItemShimmer, {})
					]
				})] }),
				u.jsx(s.CountryBreakdownShimmer, {})
			] }), t[3] = l;
		} else l = t[3];
		return l;
	}
	function d() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(o("WAWebFlex.react").FlexRow, {
			gap: 20,
			align: "center",
			justify: "center",
			children: u.jsxs("div", {
				className: "x1n2onr6",
				children: [u.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, { diameter: 72 }), u.jsx("div", { className: "x10l6tqk xwa60dl xbudbmw x11lhmoz x1280gxy x15yg21f xnnlda6 x1c9tyrk xeusxvb x1pahc9y x1ertn4p" })]
			})
		}), e[0] = t) : t = e[0], t;
	}
	l.default = c;
}), 98);
