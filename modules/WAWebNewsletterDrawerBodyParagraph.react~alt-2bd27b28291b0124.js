__d("WAWebNewsletterDrawerBodyParagraph.react", [
	"WAWebText.react",
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = { paragraph: {
		flexGrow: "x1iyjqo2",
		$$css: !0
	} };
	function d(t) {
		var n = t.description, a = t.icon, i = t.title;
		return u.jsxs("div", {
			className: "x78zum5 xh8yej3 xcxhlts x1fqp7bg",
			children: [u.jsx("div", {
				className: "xvy4d1p xxk0z11",
				children: a
			}), u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([c.paragraph, o("WDSMargins.stylex").wdsMargins.marginHor16]), { children: [u.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "p",
				weight: "normal",
				color: "primary",
				children: i
			}), u.jsx(o("WAWebText.react").WAWebTextMuted, {
				as: "p",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop8,
				children: n
			})] }))]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
