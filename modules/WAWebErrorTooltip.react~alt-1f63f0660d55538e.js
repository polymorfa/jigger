__d("WAWebErrorTooltip.react", [
	"WAWebTooltipStyles",
	"WDSPaddings.stylex",
	"react",
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
		var n = t.children, a = t.fromMe;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
			a !== !1 && o("WAWebTooltipStyles").tooltipStyles.fromMe,
			a === !1 && o("WAWebTooltipStyles").tooltipStyles.notFromMe,
			a === !1 && c.marginInlineStart10,
			o("WAWebTooltipStyles").tooltipStyles.tooltip,
			c.marginInlineEnd10,
			o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor12
		]), {
			role: "tooltip",
			children: n
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
