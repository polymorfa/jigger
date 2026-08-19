__d("WAWebInsightSectionHeading.react", [
	"WAWebFlex.react",
	"WAWebText.react",
	"WAWebUnstyledButton.react",
	"WDSIconIcInfo.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		button: {
			display: "x78zum5",
			$$css: !0
		},
		secondaryLighterColor: {
			color: "xhslqc4",
			$$css: !0
		},
		marginStart4: {
			marginInlineStart: "x1wbi8v6",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.onIconClick, n = e.title;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [s.jsx(o("WAWebText.react").WAWebTextMuted, {
				color: "secondary",
				children: n
			}), t != null && s.jsx(r("WAWebUnstyledButton.react"), {
				onClick: t,
				xstyle: u.button,
				children: s.jsx(r("WDSIconIcInfo.react"), {
					iconXstyle: u.secondaryLighterColor,
					height: 18,
					width: 18,
					xstyle: u.marginStart4
				})
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
