__d("WAWebBusinessProfileIconSection.react", [
	"fbt",
	"$InternalEnum",
	"WAWebFlex.react",
	"WAWebPencilRefreshedIcon.react",
	"WAWebStylesEnv",
	"WDSButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		marginInlineEnd7: {
			marginInlineEnd: "xcknrev",
			$$css: !0
		},
		marginTop6: {
			marginTop: "x1k70j0n",
			$$css: !0
		}
	}, d = {
		disabled: {
			color: "xhslqc4",
			$$css: !0
		},
		editPencil: {
			color: "xhslqc4",
			$$css: !0
		},
		fontSmoothing: {
			"-moz-osx-font-smoothing": "xlh3980",
			"-webkit-font-smoothing": "xvmahel",
			$$css: !0
		},
		sectionEmptyText: {
			color: "xhslqc4",
			fontSize: "x1lkfr7t",
			$$css: !0
		},
		sectionMain: {
			flexBasis: "x1t1x2f9",
			flexGrow: "x1iyjqo2",
			lineHeight: "x37zpob",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		sectionPrimaryIcon: {
			color: "xhslqc4",
			flexShrink: "x2lah0s",
			width: "xvy4d1p",
			$$css: !0
		},
		sectionPrimaryIconSvg: {
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		}
	}, m = n("$InternalEnum")({
		SmallMargin: "small-margin",
		NoMargin: "no-margin",
		NoMarginSmallGutter: "no-margin-small-gutter"
	});
	function p(e) {
		var t = e.Icon, n = e.content, a = e.disabled, i = e.editPencilXstyle, l = e.emptyText, p = e.fieldName, _ = e.onEdit, f = e.svgXstyle, g = e.testid, h = e.theme, y = e.type, C = y === void 0 ? "field" : y, b = e.xstyle, v = _ ? u.jsx("div", {
			"data-testid": g != null ? g + "-edit" : void 0,
			children: u.jsx(r("WDSButton.react"), {
				Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
				xstyle: [d.editPencil, i],
				onPress: _,
				variant: "borderless",
				directional: !0,
				"aria-label": s._(
					/*BTDS*/
					"",
					[s._param("fieldName", p)]
				)
			})
		}) : void 0, S = l != null && !n, R = S ? l : n, L = t ? u.jsx(t, { iconXstyle: [d.sectionPrimaryIconSvg, f] }) : null;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				o("WDSMargins.stylex").wdsMargins.marginTop32,
				h === m.SmallMargin && o("WDSMargins.stylex").wdsMargins.marginTop16,
				(h === m.NoMargin || h === m.NoMarginSmallGutter) && o("WDSMargins.stylex").wdsMargins.marginTop0
			],
			children: [
				u.jsx(o("WAWebFlex.react").FlexItem, {
					testid: g != null ? g + "-icon" : void 0,
					xstyle: [
						d.sectionPrimaryIcon,
						o("WDSMargins.stylex").wdsMargins.marginEnd28,
						C === "field" && c.marginTop6,
						h === m.NoMarginSmallGutter && c.marginInlineEnd7,
						b
					],
					children: L
				}),
				u.jsx(o("WAWebFlex.react").FlexItem, {
					testid: g != null ? g + "-content" : void 0,
					xstyle: [
						d.sectionMain,
						o("WDSPaddings.stylex").wdsPaddings.paddingEnd2,
						C === "container" && o("WDSMargins.stylex").wdsMargins.marginTop4,
						S && d.sectionEmptyText,
						S && o("WAWebStylesEnv").isOSMac && d.fontSmoothing,
						a === !0 && d.disabled
					],
					children: R
				}),
				v
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.IconSectionTheme = m, l.IconSection = p;
}), 226);
