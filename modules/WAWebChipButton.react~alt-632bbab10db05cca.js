__d("WAWebChipButton.react", [
	"WAWebUnstyledButton.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		paddingInlineStart36: {
			paddingInlineStart: "xf7qf19",
			$$css: !0
		},
		paddingInlineEnd36: {
			paddingInlineEnd: "xjfo4ez",
			$$css: !0
		},
		marginInlineStart5: {
			marginInlineStart: "xpcyujq",
			$$css: !0
		}
	}, c = {
		container: {
			position: "x1n2onr6",
			color: "xq49mwq",
			backgroundColor: "xlelruc",
			borderStartStartRadius: "x12ol6y4",
			borderStartEndRadius: "x180vkcf",
			borderEndEndRadius: "x1khw62d",
			borderEndStartRadius: "x709u02",
			$$css: !0
		},
		containerRefreshed: {
			color: "x1v5yvga",
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		icon: {
			display: "x1rg5ohu",
			position: "x10l6tqk",
			right: "x4a824z",
			insetInlineStart: null,
			insetInlineEnd: null,
			top: "x1jzctok",
			$$css: !0
		},
		iconSvg: {
			color: "xq49mwq",
			$$css: !0
		},
		iconSvgRefreshed: {
			color: "x1v5yvga",
			$$css: !0
		},
		prefixIcon: {
			left: "x1rvfpmx",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		paddedSvg: {
			paddingTop: "x4p5aij",
			paddingInlineEnd: "x1ccui7m",
			paddingBottom: "x1j85h84",
			paddingInlineStart: "x18pi947",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.PostfixIcon, n = e.PrefixIcon, a = e.label, i = e.onClick, l = e.xstyle, d = e.iconTheme === "padded-svg", m = [
			c.iconSvg,
			c.iconSvgRefreshed,
			d ? c.paddedSvg : o("WDSPaddings.stylex").wdsPaddings.padding4
		], p = {
			width: d ? 20 : 16,
			height: d ? 20 : 16
		};
		return s.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: [
				c.container,
				c.containerRefreshed,
				o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor12,
				n != null && u.paddingInlineStart36,
				t != null && u.paddingInlineEnd36,
				l
			],
			onClick: i,
			"aria-label": e["aria-label"],
			children: [
				n && s.jsx(n, babelHelpers.extends({
					xstyle: [
						c.icon,
						c.prefixIcon,
						u.marginInlineStart5
					],
					iconXstyle: m
				}, p)),
				s.jsx("div", {
					className: "x1rg5ohu",
					children: a
				}),
				t && s.jsx(t, babelHelpers.extends({
					xstyle: [c.icon, u.marginInlineStart5],
					iconXstyle: m
				}, p))
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
