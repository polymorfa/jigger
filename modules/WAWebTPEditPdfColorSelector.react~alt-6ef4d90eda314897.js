__d("WAWebTPEditPdfColorSelector.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebKeyboardRotateFocusModal.react",
	"WAWebKeyboardTabUtils",
	"WAWebMediaEditorEnumsColors",
	"WAWebNoop",
	"WAWebPdfViewerEventEmitter",
	"WAWebPdfViewerTestIds",
	"WAWebTPEditPdfInWhatsappContext.react",
	"WAWebTPLoggingUtils",
	"WAWebUnstyledButton.react",
	"WDSButton.react",
	"WDSTooltip.react",
	"react",
	"stylex",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useRef, f = [
		o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
		o("WAWebMediaEditorEnumsColors").ColorType.GRAY,
		o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
		o("WAWebMediaEditorEnumsColors").ColorType.BLUE,
		o("WAWebMediaEditorEnumsColors").ColorType.GREEN,
		o("WAWebMediaEditorEnumsColors").ColorType.PURPLE,
		o("WAWebMediaEditorEnumsColors").ColorType.ORANGE,
		o("WAWebMediaEditorEnumsColors").ColorType.RED
	], g = {
		colorSelectorPanel: {
			columnGap: "x46w9ns",
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x1xn7y0n",
			borderStartEndRadius: "x1uxb8k9",
			borderEndEndRadius: "x1vmbcc8",
			borderEndStartRadius: "x16xm01d",
			boxShadow: "xs2e80n",
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		colorChipContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			height: "x10w6t97",
			width: "x1td3qas",
			cursor: "x1ypdohk",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			position: "x1n2onr6",
			$$css: !0
		},
		colorChip: {
			height: "x1qx5ct2",
			width: "xw4jnvo",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			boxShadow: "x1hdfv4t",
			$$css: !0
		},
		colorSelectorOuter: {
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		},
		colorSelectorInner: {
			height: "x1qx5ct2",
			width: "xw4jnvo",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			boxShadow: "x1hdfv4t",
			$$css: !0
		},
		colorBackground: function(t) {
			return [{
				backgroundColor: t != null ? "xl8spv7" : t,
				$$css: !0
			}, { "--x-backgroundColor": t != null ? t : void 0 }];
		},
		rotateFocusContainer: {
			position: "x1uhb9sk",
			$$css: !0
		},
		colorSelectorActive: {
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_top": "x1m1drc7",
			"::after_insetInlineStart": "x1iygr5g",
			"::after_left": null,
			"::after_right": null,
			"::after_pointerEvents": "x2q1x1w",
			"::after_borderStartStartRadius": "xfijbtm",
			"::after_borderStartEndRadius": "xfenqrj",
			"::after_borderEndEndRadius": "xgy0gl7",
			"::after_borderEndStartRadius": "x19igvu",
			"::after_width": "x4eaejv",
			"::after_height": "x1wsn0xg",
			"::after_transform": "x10hb6ac",
			"::after_backgroundColor": "x1qxhgua",
			$$css: !0
		}
	};
	function h() {
		var e = _(null), t = _(r("WAWebNoop")), n = p(function() {
			return c.jsx(C, { closeMenuRef: t });
		}, []), o = r("useWDSMenu")({
			targetRef: e,
			menu: n,
			dismissable: !0,
			isContainer: !0,
			align: "middle",
			position: "below"
		}), a = o.closeMenu, i = o.isMenuOpen, l = o.menuPortal, u = o.openMenu;
		m(function() {
			t.current = a;
		}, [a]);
		function d() {
			i ? a() : u();
		}
		return c.jsxs("span", {
			ref: e,
			className: "x3nfvp2 x1n2onr6",
			children: [c.jsx(r("WDSTooltip.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				children: c.jsx(r("WDSButton.react"), {
					variant: "borderless",
					type: "default",
					Icon: y,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					testid: r("WAWebPdfViewerTestIds").EDIT_COLOR_SELECTOR,
					onPress: d,
					xstyle: i && g.colorSelectorActive
				})
			}), l]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), a = n.selectedColor;
		return c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: g.colorSelectorOuter,
			children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.colorSelectorInner, g.colorBackground(a.toRgbaString()))))
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.closeMenuRef, n = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), a = n.activeAnnotationMode, i = n.filehash, l = n.selectedColor, s = n.setSelectedColor, u = _(null), d = _(null);
		m(function() {
			var e;
			(e = d.current) == null || e.focus();
		}, []);
		var p = function(t) {
			t.relatedTarget instanceof HTMLElement && u.current != null && u.current.contains(t.relatedTarget) && t.stopPropagation();
		};
		return c.jsx(r("WAWebKeyboardRotateFocusModal.react"), {
			ref: u,
			focusType: { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
			onBlur: p,
			xstyle: g.rotateFocusContainer,
			children: c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: g.colorSelectorPanel,
				children: f.map(function(e) {
					var n = o("WAWebMediaEditorEnumsColors").getColorValue(e), r = l.toRgbaString() === n.toRgbaString();
					return c.jsx(b, {
						ref: r ? d : void 0,
						color: n,
						isSelected: r,
						onSelect: function() {
							o("WAWebTPLoggingUtils").logAnnotationStyleChangeEvent("color", i), s(n), o("WAWebPdfViewerEventEmitter").updateAnnotationToolConfig(a, { strokeColor: n.toHex() }), t.current();
						}
					}, e);
				})
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var n = t.color, o = t.isSelected, a = t.onSelect, i = t.ref;
		return c.jsxs(r("WAWebUnstyledButton.react"), {
			ref: i,
			xstyle: g.colorChipContainer,
			onClick: a,
			children: [o && c.jsx("div", { className: "x10l6tqk xxk0z11 xvy4d1p x1c9tyrk xeusxvb x1pahc9y x1ertn4p x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs" }), c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.colorChip, g.colorBackground(n.toRgbaString()))))]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = h;
}), 226);
