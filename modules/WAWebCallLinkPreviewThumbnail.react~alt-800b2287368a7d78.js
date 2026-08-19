__d("WAWebCallLinkPreviewThumbnail.react", [
	"WAWebPhoneIcon.react",
	"WAWebVideoIcon.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { icon: {
		color: "xw2c8ud",
		$$css: !0
	} };
	function c(e) {
		var t = e.callType;
		return s.jsx("div", {
			"data-testid": "call-link-preview-thumbnail",
			className: "xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xfrb85r",
			children: t === "video" ? s.jsx(o("WAWebVideoIcon.react").VideoIcon, {
				"aria-hidden": !0,
				height: 46,
				width: 46,
				iconXstyle: u.icon
			}) : s.jsx(o("WAWebPhoneIcon.react").PhoneIcon, {
				"aria-hidden": !0,
				height: 46,
				width: 46,
				iconXstyle: u.icon
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
