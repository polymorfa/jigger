__d("WAWebErrorTooltip.react", [
	"WAWebTooltipStyles",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		marginInlineStart10: {
			marginInlineStart: "x1hm9lzh",
			$$css: !0
		},
		marginInlineEnd10: {
			marginInlineEnd: "x1sa5p1d",
			$$css: !0
		}
	};
	function d(t) {
		var n = o("react-compiler-runtime").c(5), a = t.children, i = t.fromMe, l;
		n[0] !== i ? (l = (e || (e = r("stylex"))).props([
			i !== !1 && o("WAWebTooltipStyles").tooltipStyles.fromMe,
			i === !1 && o("WAWebTooltipStyles").tooltipStyles.notFromMe,
			i === !1 && c.marginInlineStart10,
			o("WAWebTooltipStyles").tooltipStyles.tooltip,
			c.marginInlineEnd10,
			o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor12
		]), n[0] = i, n[1] = l) : l = n[1];
		var s;
		return n[2] !== a || n[3] !== l ? (s = u.jsx("div", babelHelpers.extends({}, l, {
			role: "tooltip",
			children: a
		})), n[2] = a, n[3] = l, n[4] = s) : s = n[4], s;
	}
	l.default = d;
}), 98);
