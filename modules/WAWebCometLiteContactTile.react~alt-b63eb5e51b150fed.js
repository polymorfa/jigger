__d("WAWebCometLiteContactTile.react", [
	"fbt",
	"WAWebDetailImage.react",
	"WAWebName.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 224;
	function d(e) {
		var t = e.index, n = e.item, r = e.onSelect, a;
		return n.chat != null ? a = u.jsx(o("WAWebName.react").Name, {
			chat: n.chat,
			titlify: !0,
			ellipsify: !0
		}) : n.contact != null ? a = u.jsx(o("WAWebName.react").Name, {
			contact: n.contact,
			titlify: !0,
			ellipsify: !0
		}) : a = s._(
			/*BTDS*/
			""
		), u.jsx("div", {
			className: "x78zum5 xdt5ytf x2lah0s x6s0dn4 x1qvou4u xafpxmx x1ypdohk",
			"data-testid": "wa-web-lite-contact-" + t,
			role: "listitem",
			children: u.jsxs("button", {
				type: "button",
				className: "x78zum5 xdt5ytf x6s0dn4 x1qvou4u xjyslct xexx8yu xyri2b x18d9i69 x1c1uobl x1ejq31n x18oe1m7 x1sy0etr xstzfhl xjbqb8w x14ug900 x1ypdohk",
				onClick: function() {
					return r(n);
				},
				"aria-label": s._(
					/*BTDS*/
					""
				),
				children: [u.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: n.wid,
					size: c,
					quality: o("WAWebDetailImage.react").DetailImageQuality.High
				}), u.jsx("div", {
					className: "x16em4ew x6ikm8r x10wlt62 x2b8uid",
					children: a
				})]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
