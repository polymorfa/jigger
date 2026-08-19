__d("WAWebNewsletterDirectoryCategoriesShimmer.react", [
	"WAWebBaseShimmerComponents.react",
	"WAWebFlex.react",
	"WAWebNewsletterDirectoryShimmer.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(7), n = e.height, r = Math.floor(n / d), a = n % d, i;
		t[0] !== r ? (i = Array.from({ length: r }, _), t[0] = r, t[1] = i) : i = t[1];
		var l;
		t[2] !== a ? (l = s.jsx(f, { height: a }), t[2] = a, t[3] = l) : l = t[3];
		var u;
		return t[4] !== i || t[5] !== l ? (u = s.jsxs(s.Fragment, { children: [i, l] }), t[4] = i, t[5] = l, t[6] = u) : u = t[6], u;
	}
	function _(e, t) {
		return s.jsx(f, { height: d }, t);
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = o("react-compiler-runtime").c(3), n = e.height, a = Math.floor((n - m) / c);
		if (a === 0) return null;
		var i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: 18,
			width: 250
		}), t[0] = i) : i = t[0];
		var l;
		return t[1] !== a ? (l = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.paddingInline13,
			children: [i, s.jsx(r("WAWebNewsletterDirectoryShimmer.react"), { count: a })]
		}), t[1] = a, t[2] = l) : l = t[2], l;
	}
	l.default = p;
}), 98);
