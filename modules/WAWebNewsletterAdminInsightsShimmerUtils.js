__d("WAWebNewsletterAdminInsightsShimmerUtils", [
	"WAWebBaseShimmerComponents.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { paddingInline30: {
		paddingInlineStart: "x162tt16",
		paddingInlineEnd: "x5zjp28",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, c = { shimmerSection: {
		width: "xh8yej3",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [
			u.paddingInline30,
			o("WDSPaddings.stylex").wdsPaddings.paddingBottom20,
			o("WDSPaddings.stylex").wdsPaddings.paddingTop20
		], t[0] = a) : a = t[0];
		var i;
		return t[1] !== n ? (i = s.jsx(r("WAWebDrawerSection.react"), {
			xstyle: a,
			animation: !1,
			children: n
		}), t[1] = n, t[2] = i) : i = t[2], i;
	}
	function m() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: 20,
			width: 120
		}), e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsxs(d, { children: [t, s.jsx(o("WAWebFlex.react").FlexColumn, {
			marginTop: 20,
			align: "center",
			justify: "center",
			gap: 24,
			className: "xh8yej3",
			children: o("WAWebBaseShimmerComponents.react").times(p, 5)
		})] }), e[1] = n) : n = e[1], n;
	}
	function p() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = "xh8yej3", e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: t,
			gap: 8,
			children: [s.jsx(f, {}), s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 8,
				width: "100%"
			})]
		}), e[1] = n) : n = e[1], n;
	}
	function _() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(d, { children: s.jsx(f, {}) }), e[0] = t) : t = e[0], t;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(3), n = e.width, r = n === void 0 ? 56 : n, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = "xh8yej3", t[0] = a) : a = t[0];
		var i;
		return t[1] !== r ? (i = s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			className: a,
			children: [s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 20,
				width: r
			}), s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 20,
				width: r
			})]
		}), t[1] = r, t[2] = i) : i = t[2], i;
	}
	l.shimmerStyles = c, l.ShimmerSection = d, l.CountryBreakdownShimmer = m, l.DateRangeShimmer = _, l.LegendItemShimmer = f;
}), 98);
