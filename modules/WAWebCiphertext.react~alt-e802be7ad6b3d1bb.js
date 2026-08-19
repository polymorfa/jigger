__d("WAWebCiphertext.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebPlaceholder",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = function(t) {
		o("WAWebExternalLink.react").openExternalLink(t);
	};
	function d(e) {
		var t = e.subtype, n = o("WAWebPlaceholder").getPlaceholderDetails(t), r = n.externalLink, a = n.placeholderIcon, i = n.placeholderMsg, l = u.jsx("span", {
			className: "xo1mcw5",
			role: "button",
			onClick: function() {
				c(r != null ? r : "");
			},
			children: s._(
				/*BTDS*/
				""
			)
		});
		return u.jsxs("div", {
			className: "xhslqc4 x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1k4tb9n x1vvkbs",
			children: [
				a != null ? u.jsx("div", {
					className: "x1okw0bk x18cpw0e xe9ewy2 xf6vk7d",
					children: a
				}) : null,
				i,
				"\xA0",
				l
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
