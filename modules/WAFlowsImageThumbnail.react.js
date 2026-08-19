__d("WAFlowsImageThumbnail.react", ["WAFlowsImage.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 72;
	function c(e) {
		var t = e.ref, n = e.id, r = e.isImageZoomedIn, a = e.onClick, i = e.src, l = {
			width: u,
			height: u
		};
		return s.jsx("button", {
			ref: t,
			onClick: function(t) {
				t.preventDefault(), a(t);
			},
			"aria-haspopup": "true",
			"aria-expanded": r,
			id: n,
			style: l,
			className: "x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1n2onr6 xexx8yu xyri2b x18d9i69 x1c1uobl x1uvtmcs xaqnwrm xjbqb8w x15mokao x1ga7v0g x16uus16 xbiv7yw",
			children: s.jsx(o("WAFlowsImage.react").WAFlowsImage, {
				src: i != null ? i : "",
				altText: "Image",
				scaleType: "contain",
				hasFixedSize: !0,
				height: u,
				width: u
			}, n)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
