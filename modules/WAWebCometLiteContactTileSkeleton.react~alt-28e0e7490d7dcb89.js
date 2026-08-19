__d("WAWebCometLiteContactTileSkeleton.react", ["WAWebBaseShimmerComponents.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 224, c = { skeletonName: {
		marginTop: "x1380le5",
		$$css: !0
	} };
	function d() {
		return s.jsxs("div", {
			className: "x78zum5 xdt5ytf x2lah0s x6s0dn4 x1qvou4u xafpxmx",
			"aria-hidden": !0,
			children: [s.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, { diameter: u }), s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 14,
				width: 120,
				xstyle: c.skeletonName
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
