__d("WAWebCometLiteContactTileSkeleton.react", [
	"WAWebBaseShimmerComponents.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 224, c = { skeletonName: {
		marginTop: "x1380le5",
		$$css: !0
	} };
	function d() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { className: "x78zum5 xdt5ytf x2lah0s x6s0dn4 x1qvou4u xafpxmx" }, e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsxs("div", babelHelpers.extends({}, t, {
			"aria-hidden": !0,
			children: [s.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, { diameter: u }), s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 14,
				width: 120,
				xstyle: c.skeletonName
			})]
		})), e[1] = n) : n = e[1], n;
	}
	l.default = d;
}), 98);
