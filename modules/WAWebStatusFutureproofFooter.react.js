__d("WAWebStatusFutureproofFooter.react", [
	"fbt",
	"WAWebText.react",
	"WAWebWarningOutlineIcon.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(5), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = s._(
			/*BTDS*/
			""
		), t[0] = n) : n = t[0];
		var a = n, i, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = (e || (e = r("stylex"))).props(m.container, o("WDSMargins.stylex").wdsMargins.marginStartAuto, o("WDSMargins.stylex").wdsMargins.marginEndAuto), l = { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x10l6tqk xh8yej3 x1ey2m1c x1vjfegm x17t9dm2 x2b8uid x1c8ul09" }, t[1] = i, t[2] = l) : (i = t[1], l = t[2]);
		var u;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = [o("WDSPaddings.stylex").wdsPaddings.paddingHor40, o("WDSPaddings.stylex").wdsPaddings.paddingVer12], t[3] = u) : u = t[3];
		var p;
		return t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx("div", babelHelpers.extends({}, i, { children: c.jsx("div", babelHelpers.extends({}, l, { children: c.jsxs(o("WAWebText.react").WAWebTextSectionTitle, {
			color: "white",
			xstyle: u,
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
				a
			]
		}) })) })), t[4] = p) : p = t[4], p;
	}
	l.default = p;
}), 226);
