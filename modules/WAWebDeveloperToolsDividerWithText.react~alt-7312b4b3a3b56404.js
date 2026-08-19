__d("WAWebDeveloperToolsDividerWithText.react", [
	"WAWebFlexBox.react",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { container: {
		textAlign: "x2b8uid",
		$$css: !0
	} };
	function c(e) {
		var t = e.text;
		return s.jsxs(o("WAWebFlexBox.react").FlexRow, {
			align: "center",
			xstyle: u.container,
			children: [
				s.jsx("div", { className: "x1q0q8m5 x1iyjqo2 xso031l xqf2s3x" }),
				s.jsx(o("WAWebText.react").WAWebTextSmall, { children: t }),
				s.jsx("div", { className: "x1q0q8m5 x1iyjqo2 xso031l x150mmf0" })
			]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
