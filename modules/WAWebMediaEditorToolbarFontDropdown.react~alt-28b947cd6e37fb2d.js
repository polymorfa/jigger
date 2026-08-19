__d("WAWebMediaEditorToolbarFontDropdown.react", [
	"fbt",
	"WAWebDropdownItem.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFontLoader",
	"WAWebMediaEditorEnumsFonts",
	"WDSIconIcCheck.react",
	"WDSIconIcFormatAlignCenter.react",
	"WDSIconIcFormatAlignLeft.react",
	"WDSIconIcFormatAlignRight.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useEffect, m = { paddingTop13: {
		paddingTop: "x1d0ri9u",
		$$css: !0
	} }, p = [
		{
			alignment: o("WAWebMediaEditorEnumsFonts").TextAlignment.LEFT,
			icon: r("WDSIconIcFormatAlignLeft.react")
		},
		{
			alignment: o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER,
			icon: r("WDSIconIcFormatAlignCenter.react")
		},
		{
			alignment: o("WAWebMediaEditorEnumsFonts").TextAlignment.RIGHT,
			icon: r("WDSIconIcFormatAlignRight.react")
		}
	], _ = {
		noricanRegular: {
			marginInlineStart: "x4h0osi",
			$$css: !0
		},
		item: {
			boxSizing: "x9f619",
			display: "x1lliihq",
			height: "x1vqgdyp",
			paddingInlineEnd: "x1ikfw9c",
			fontSize: "x7yx35o",
			lineHeight: "xwgyvy0",
			color: "x14ug900",
			whiteSpace: "xuxw1ft",
			cursor: "x1ypdohk",
			$$css: !0
		},
		alignmentIconSelected: {
			opacity: "x1hc1fzr",
			$$css: !0
		},
		alignmentIcon: {
			opacity: "x197sbye",
			$$css: !0
		}
	};
	function f(t) {
		var n = t.font, a = t.isSelectedFont, i = t.onAction, l;
		a && (l = c.jsx("span", {
			className: "x10l6tqk xyc4j8s xeer0ze",
			children: c.jsx(r("WDSIconIcCheck.react"), { displayInline: !0 })
		}));
		var s = o("WAWebMediaEditorEnumsFonts").getFontTranslation(n), u;
		switch (n) {
			case o("WAWebMediaEditorEnumsFonts").FontType.SANS_SERIF:
				u = (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginTop0);
				break;
			case o("WAWebMediaEditorEnumsFonts").FontType.SERIF:
				u = (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginTop2);
				break;
			case o("WAWebMediaEditorEnumsFonts").FontType.NORICAN_REGULAR:
				u = (e || (e = r("stylex")))(_.noricanRegular, o("WDSMargins.stylex").wdsMargins.marginTop4);
				break;
			case o("WAWebMediaEditorEnumsFonts").FontType.BRYNDAN_WRITE:
				u = "xe9ewy2 xngnso2";
				break;
			case o("WAWebMediaEditorEnumsFonts").FontType.OSWALD_HEAVY:
				u = "x1kgmq87 x1603h9y";
				break;
		}
		return c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			action: function(t) {
				return i(t, n);
			},
			children: c.jsxs("div", {
				role: "button",
				className: (e || (e = r("stylex")))(_.item, m.paddingTop13, o("WDSPaddings.stylex").wdsPaddings.paddingStart24),
				style: o("WAWebMediaEditorEnumsFonts").getFontStyle(n),
				children: [c.jsx("span", {
					className: u,
					children: s
				}), l]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		return e === o("WAWebMediaEditorEnumsFonts").TextAlignment.LEFT ? s._(
			/*BTDS*/
			""
		) : e === o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER ? s._(
			/*BTDS*/
			""
		) : e === o("WAWebMediaEditorEnumsFonts").TextAlignment.RIGHT ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function h(e) {
		var t = e.onAction, n = e.selectedAlignment;
		return c.jsx(o("WAWebFlex.react").FlexRow, {
			className: "x1vqgdyp x178xt8z x13fuv20 xx42vgk x96k8nx",
			justify: "around",
			align: "center",
			children: p.map(function(e) {
				var a = e.alignment, i = e.icon;
				return c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function(n) {
						return t(n, a);
					},
					children: c.jsx("div", {
						"aria-label": g(a).toString(),
						className: "x78zum5 x6s0dn4 xl56j7k x1td3qas x10w6t97 xt8t1vi x1xc408v x129tdwq x15urzxu x1ubxc9n",
						children: c.jsx(i, {
							height: 20,
							iconXstyle: a === n ? _.alignmentIconSelected : _.alignmentIcon,
							width: 20
						})
					})
				}) }, a);
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.onAlignmentSelect, n = e.onFontSelect, r = e.selectedAlignment, a = e.selectedFont, i = e.showAlignmentOptions;
		d(function() {
			o("WAWebFontLoader").FontLoader.loadAllFonts();
		}, []);
		var l = function(t, r) {
			t.stopPropagation(), n(r);
		}, s = function(n, r) {
			n.stopPropagation(), t(r);
		};
		return c.jsxs("div", { children: [e.fonts.map(function(e) {
			return c.jsx(f, {
				font: e,
				isSelectedFont: a === e,
				onAction: l
			}, e);
		}), i && c.jsx(h, {
			selectedAlignment: r,
			onAction: s
		}, "alignment")] });
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
