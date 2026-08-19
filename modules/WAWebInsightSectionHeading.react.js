__d("WAWebInsightSectionHeading.react", [
	"WAWebFlex.react",
	"WAWebText.react",
	"WAWebUnstyledButton.react",
	"WDSIconIcInfo.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(7), n = e.onIconClick, a = e.title, i;
		t[0] !== a ? (i = s.jsx(o("WAWebText.react").WAWebTextMuted, {
			color: "secondary",
			children: a
		}), t[0] = a, t[1] = i) : i = t[1];
		var l;
		t[2] !== n ? (l = n != null && s.jsx(r("WAWebUnstyledButton.react"), {
			onClick: n,
			xstyle: u.button,
			children: s.jsx(r("WDSIconIcInfo.react"), {
				iconXstyle: u.secondaryLighterColor,
				height: 18,
				width: 18,
				xstyle: u.marginStart4
			})
		}), t[2] = n, t[3] = l) : l = t[3];
		var c;
		return t[4] !== i || t[5] !== l ? (c = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [i, l]
		}), t[4] = i, t[5] = l, t[6] = c) : c = t[6], c;
	}
	l.default = c;
}), 98);
