__d("WAWebDeveloperToolNub.react", [
	"WAWebUnstyledButton.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		paddingInline5: {
			paddingInlineStart: "xaso8d8",
			paddingInlineEnd: "x1gabggj",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingTop3: {
			paddingTop: "xyqdw3p",
			$$css: !0
		}
	}, c = { button: {
		borderStartStartRadius: "x1c9tyrk",
		borderStartEndRadius: "xeusxvb",
		borderEndEndRadius: "x1pahc9y",
		borderEndStartRadius: "x1ertn4p",
		width: "xq14iec",
		":hover_backgroundColor": "x1ubxc9n",
		$$css: !0
	} };
	function d(e) {
		var t = e.icon, n = e.onClick, a = e.ref, i = e.testID, l = e.title;
		return s.jsx(r("WAWebUnstyledButton.react"), {
			ref: a,
			title: l,
			xstyle: [
				c.button,
				u.paddingInline5,
				u.paddingTop3,
				o("WDSPaddings.stylex").wdsPaddings.paddingBottom4
			],
			onClick: n,
			tabIndex: -1,
			testid: i,
			children: t
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
