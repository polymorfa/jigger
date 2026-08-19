__d("WAWebDrawerButtonRefreshed.react", [
	"WAWebFlex.react",
	"WAWebL10NFbtTypeUtils",
	"WDSPaddings.stylex",
	"WDSText.react",
	"react",
	"useMergeRefs",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		paddingBlock10: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		marginInlineEnd14: {
			marginInlineEnd: "x1my54xf",
			$$css: !0
		}
	}, c = {
		container: {
			boxSizing: "x9f619",
			height: "x1x0gksc",
			$$css: !0
		},
		iconContainer: {
			width: "x100vrsf",
			color: "xhslqc4",
			$$css: !0
		},
		danger: {
			color: "xqnyt8g",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.ariaLabel, n = e.children, a = e.danger, i = e.disabled, l = e.icon, d = e.maxLines, m = e.onClick, p = e.ref, _ = e.testid, f = e.title, g = e.xstyle, h = r("useWAWebStaticButtonA11y")(m, { disabled: i }), y = h[0], C = h[1], b = r("useMergeRefs")(y, p), v = o("WAWebL10NFbtTypeUtils").isStringOrFbt(n) ? n : null, S = t != null ? t : v, R = i !== !0 && a === !0, L = s.jsx(r("WDSText.react"), {
			type: "Body1",
			maxLines: d,
			colorName: R ? "secondaryNegativeEmphasized" : "contentDefault",
			children: n
		});
		return s.jsx("div", babelHelpers.extends({}, C, {
			0: { className: "x7zqoo0 xt1g1te x1iz9ej4 x1ga13z8 x1aiwb2g x1n67ipk x1hm9lzh x1sa5p1d" },
			2: { className: "x7zqoo0 xt1g1te x1iz9ej4 x1ga13z8 xoo5hyf x3039w2 x1hm9lzh x1sa5p1d" },
			1: { className: "x7zqoo0 xt1g1te x1iz9ej4 x1ga13z8 xyd83as xt0e3qv x1rpam2w xlwr4kp x1hm9lzh x1sa5p1d" },
			3: { className: "x7zqoo0 xt1g1te x1iz9ej4 x1ga13z8 xyd83as xt0e3qv x1rpam2w xlwr4kp x1hm9lzh x1sa5p1d" }
		}[!!R << 1 | (i === !0) << 0], {
			"data-ignore-capture": "any",
			"data-testid": _,
			ref: b,
			title: f,
			"aria-label": S,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "stretch",
				xstyle: [
					c.container,
					o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
					u.paddingBlock10
				],
				children: [s.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: [
						c.iconContainer,
						u.marginInlineEnd14,
						R && c.danger
					],
					children: l
				}), s.jsx(o("WAWebFlex.react").FlexColumn, {
					justify: "center",
					grow: 1,
					children: L
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
