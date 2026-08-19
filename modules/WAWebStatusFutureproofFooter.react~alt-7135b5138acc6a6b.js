__d("WAWebStatusFutureproofFooter.react", [
	"fbt",
	"WAWebText.react",
	"WAWebWarningOutlineIcon.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
		paddingTop1: {
			paddingTop: "x4p5aij",
			$$css: !0
		},
		paddingInlineEnd7: {
			paddingInlineEnd: "x1bjonze",
			$$css: !0
		}
	}, m = {
		container: {
			width: "xlybum",
			position: "x10l6tqk",
			bottom: "x11unvnq",
			insetInlineStart: "x1o0tod",
			insetInlineEnd: "xtijo5x",
			$$css: !0
		},
		warningIcon: {
			color: "x1l1qxae",
			display: "x3nfvp2",
			$$css: !0
		}
	};
	function p() {
		var t = s._(
			/*BTDS*/
			""
		);
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.container, o("WDSMargins.stylex").wdsMargins.marginStartAuto, o("WDSMargins.stylex").wdsMargins.marginEndAuto), { children: c.jsx("div", {
			className: "xyi3aci xwf5gio x1p453bz x1suzm8a x10l6tqk xh8yej3 x1ey2m1c x1vjfegm x17t9dm2 x2b8uid x1c8ul09",
			children: c.jsxs(o("WAWebText.react").WAWebTextSectionTitle, {
				color: "white",
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor40, o("WDSPaddings.stylex").wdsPaddings.paddingVer12],
				children: [
					c.jsx(o("WAWebWarningOutlineIcon.react").WarningOutlineIcon, {
						width: 14,
						height: 14,
						displayInline: !0,
						iconXstyle: [
							m.warningIcon,
							d.paddingTop1,
							d.paddingInlineEnd7
						]
					}),
					" ",
					t
				]
			})
		}) }));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
