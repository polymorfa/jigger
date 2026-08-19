__d("WAWebTPEditPdfThicknessSelector.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebKeyboardRotateFocusModal.react",
	"WAWebKeyboardTabUtils",
	"WAWebLineWeightIcon.react",
	"WAWebNoop",
	"WAWebPdfViewerEventEmitter",
	"WAWebPdfViewerTestIds",
	"WAWebTPAnnotationThickness",
	"WAWebTPEditPdfInWhatsappContext.react",
	"WAWebTPLoggingUtils",
	"WAWebUnstyledButton.react",
	"WDSButton.react",
	"WDSTooltip.react",
	"react",
	"stylex",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useRef, f = {
		height: "x16ye13r",
		width: "x5lhr3w",
		$$css: !0
	}, g = {
		thicknessPanel: {
			height: "xnnlda6",
			boxSizing: "x9f619",
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
		thicknessChipContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			paddingTop: "x1tiyuxx",
			paddingInlineEnd: "x1uc92m",
			paddingBottom: "x1nbhmlj",
			paddingInlineStart: "x181vq82",
			cursor: "x1ypdohk",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			position: "x1n2onr6",
			$$css: !0
		},
		thicknessChipDefault: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x3qdkio",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		thicknessChipSelected: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x3l9nec",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		thicknessSize: function(t) {
			return [f, {
				"--x-height": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t * 2 + "px"),
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t * 2 + "px")
			}];
		},
		rotateFocusContainer: {
			position: "x1uhb9sk",
			$$css: !0
		},
		thicknessSelectorActive: {
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
			return c.jsx(y, { closeMenuRef: t });
		}, []), a = r("useWDSMenu")({
			targetRef: e,
			menu: n,
			dismissable: !0,
			isContainer: !0,
			align: "middle",
			position: "below"
		}), i = a.closeMenu, l = a.isMenuOpen, u = a.menuPortal, d = a.openMenu;
		m(function() {
			t.current = i;
		}, [i]);
		var f = l ? i : d;
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
					Icon: o("WAWebLineWeightIcon.react").LineWeightIcon,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					testid: r("WAWebPdfViewerTestIds").EDIT_THICKNESS,
					onPress: f,
					xstyle: l && g.thicknessSelectorActive
				})
			}), u]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.closeMenuRef, n = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), a = n.activeAnnotationMode, i = n.filehash, l = n.selectedThickness, s = n.setSelectedThickness, u = _(null), d = _(null);
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
				xstyle: g.thicknessPanel,
				children: o("WAWebTPAnnotationThickness").ANNOTATION_THICKNESS_OPTIONS.map(function(e) {
					return c.jsx(C, {
						ref: l === e ? d : void 0,
						thickness: e,
						isSelected: l === e,
						onSelect: function() {
							o("WAWebTPLoggingUtils").logAnnotationStyleChangeEvent("thickness", i), s(e), o("WAWebPdfViewerEventEmitter").updateAnnotationToolConfig(a, { strokeWidth: e }), t.current();
						}
					}, e);
				})
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var n = t.isSelected, o = t.onSelect, a = t.ref, i = t.thickness;
		return c.jsx(r("WAWebUnstyledButton.react"), {
			ref: a,
			xstyle: g.thicknessChipContainer,
			onClick: o,
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._param("thickness", i)]
			),
			children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(n ? g.thicknessChipSelected : g.thicknessChipDefault, g.thicknessSize(i))))
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = h;
}), 226);
