__d("WAWebNewsletterDirectoryCategoriesShimmer.react", [
	"WAWebBaseShimmerComponents.react",
	"WAWebFlex.react",
	"WAWebNewsletterDirectoryShimmer.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { paddingInline13: {
		paddingInlineStart: "xbmws1g",
		paddingInlineEnd: "x1hwfens",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, c = 73, d = 250, m = 20;
	function p(e) {
		var t = e.height, n = Math.floor(t / d), r = t % d;
		return s.jsxs(s.Fragment, { children: [Array.from({ length: n }, function(e, t) {
			return s.jsx(_, { height: d }, t);
		}), s.jsx(_, { height: r })] });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.height, n = Math.floor((t - m) / c);
		return n === 0 ? null : s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.paddingInline13,
			children: [s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 18,
				width: 250
			}), s.jsx(r("WAWebNewsletterDirectoryShimmer.react"), { count: n })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 98);
