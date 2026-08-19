__d("WAWebTPMediaPdfEditInWhatsapp.react", [
	"fbt",
	"WAWebAcrobatIcon.react",
	"WAWebFlex.react",
	"WAWebFormatInkHighlighterIcon.react",
	"WAWebFormatUnderlinedIcon.react",
	"WAWebGestureIcon.react",
	"WAWebMediaEditPdfButtonStyles",
	"WAWebMediaEditorUtilsColor",
	"WAWebMediaPanelHeaderTestIds",
	"WAWebMediaPdfAutoShareButton.react",
	"WAWebPdfViewerEventEmitter",
	"WAWebPdfViewerTestIds",
	"WAWebTPDefaultAnnotationColors",
	"WAWebTPEditPdfInWhatsappContext.react",
	"WAWebTPLoggingUtils",
	"WAWebTPPdfViewerGatingUtils",
	"WAWebUnstyledButton.react",
	"WAWebWebTPSensitive",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcEdit.react",
	"WDSIconIcFormatStrikethrough.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"react",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useRef, p = {
		iconColor: {
			color: "xhslqc4",
			$$css: !0
		},
		buttonText: {
			marginTop: "xfl633f",
			$$css: !0
		},
		acrobatRow: {
			position: "x1n2onr6",
			$$css: !0
		},
		acrobatTrailingIcon: {
			position: "x10l6tqk",
			top: "x13vifvy",
			bottom: "x1ey2m1c",
			insetInlineEnd: "xffp2at",
			left: null,
			right: null,
			pointerEvents: "x47corl",
			color: "xhslqc4",
			$$css: !0
		},
		buttonWrapper: {
			position: "x1n2onr6",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.isDisabled, n = t === void 0 ? !1 : t, a = e.mediaData, i = e.menuItemLabel, l = e.msg, c = e.onAutoShareError, _ = e.onEditInAcrobat, f = e.shouldAutoProceed, h = m(null), y = m(null), C = s._(
			/*BTDS*/
			""
		), b = d(function() {
			return u.jsx(g, {
				onEditInAcrobat: _,
				shouldAutoProceed: f,
				msg: l,
				mediaData: a,
				menuItemLabel: i,
				onAutoShareError: c,
				desktopCleanupRef: y
			});
		}, [
			a,
			i,
			l,
			c,
			_,
			f
		]), v = r("useWDSMenu")({
			targetRef: h,
			menu: b,
			dismissable: !0,
			align: "middle",
			position: "below",
			onClose: function() {
				y.current == null || y.current(), y.current = null;
			}
		}), S = v.closeMenu, R = v.isMenuOpen, L = v.menuPortal, E = v.openMenu;
		function k() {
			R ? S() : (o("WAWebTPLoggingUtils").logEditPdfClickEvent(a.filehash), E());
		}
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			inline: !0,
			xstyle: p.buttonWrapper,
			children: [u.jsxs(r("WAWebUnstyledButton.react"), {
				ref: h,
				xstyle: [r("WAWebMediaEditPdfButtonStyles").customButton, r("WAWebMediaEditPdfButtonStyles").unifiedButtonMargin],
				disabled: n,
				testid: r("WAWebMediaPanelHeaderTestIds").EDIT_PDF_BUTTON,
				"aria-label": C,
				onClick: k,
				children: [
					u.jsx(r("WDSIconIcEdit.react"), { iconXstyle: r("WAWebMediaEditPdfButtonStyles").buttonIcon }),
					u.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						textAlign: "center",
						selectable: !1,
						colorName: "contentDefault",
						xstyle: p.buttonText,
						children: C
					}),
					u.jsx(r("WDSIconIcArrowDropDown.react"), { iconXstyle: r("WAWebMediaEditPdfButtonStyles").buttonIcon })
				]
			}), L]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t;
		return [
			{
				Icon: o("WAWebGestureIcon.react").GestureIcon,
				text: s._(
					/*BTDS*/
					""
				),
				action: function() {
					return e("shape");
				},
				testid: (t = r("WAWebPdfViewerTestIds")).EDIT_DRAW
			},
			{
				Icon: o("WAWebFormatInkHighlighterIcon.react").FormatInkHighlighterIcon,
				text: s._(
					/*BTDS*/
					""
				),
				action: function() {
					return e("highlight");
				},
				testid: t.EDIT_HIGHLIGHT
			},
			{
				Icon: o("WAWebFormatUnderlinedIcon.react").FormatUnderlinedIcon,
				text: s._(
					/*BTDS*/
					""
				),
				action: function() {
					return e("underline");
				},
				testid: t.EDIT_UNDERLINE
			},
			{
				Icon: r("WDSIconIcFormatStrikethrough.react"),
				text: s._(
					/*BTDS*/
					""
				),
				action: function() {
					return e("strikeout");
				},
				testid: t.EDIT_STRIKETHROUGH
			}
		];
	}
	function g(e) {
		var t = e.desktopCleanupRef, n = e.mediaData, a = e.menuItemLabel, i = e.msg, l = e.onAutoShareError, s = e.onEditInAcrobat, c = e.shouldAutoProceed, d = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), m = d.filehash, _ = d.selectedThickness, g = d.setActiveAnnotationMode, h = d.setIsEditing, y = d.setSelectedColor;
		function C(e) {
			o("WAWebTPLoggingUtils").logAnnotationToolSelectEvent(o("WAWebTPLoggingUtils").toolSelectForToolClick(null, e), m), g(e), h(!0);
			var t = o("WAWebTPDefaultAnnotationColors").getDefaultAnnotationColorHex(e);
			y(o("WAWebMediaEditorUtilsColor").Color.fromHex(t));
			var n = {
				strokeColor: t,
				strokeWidth: _
			};
			o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", {
				type: "startMode",
				annotationType: e,
				config: n
			}), o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", {
				type: "updateToolConfig",
				annotationType: e,
				config: n
			});
		}
		var b = o("WAWebTPPdfViewerGatingUtils").isWebTPPdfAnnotationsEnabled() ? f(C) : [];
		return u.jsxs(r("WDSMenu.react"), {
			minWidth: 260,
			children: [b.map(function(e) {
				var t = e.Icon, n = e.action, o = e.testid, a = e.text;
				return u.jsx(r("WDSMenuItem.react"), {
					Icon: t,
					iconXstyle: p.iconColor,
					title: a,
					onPress: n,
					testid: o
				}, o);
			}), c ? u.jsx(r("WAWebMediaPdfAutoShareButton.react"), {
				desktopCleanupRef: t,
				mediaData: n,
				menuItemLabel: a,
				msg: i,
				onError: l
			}) : u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: p.acrobatRow,
				children: [u.jsx(r("WDSMenuItem.react"), {
					Icon: o("WAWebAcrobatIcon.react").AcrobatIcon,
					iconXstyle: p.iconColor,
					title: o("WAWebWebTPSensitive").getWAWebWebTPEditMenuTitle(),
					onPress: s,
					testid: r("WAWebPdfViewerTestIds").EDIT_IN_ACROBAT
				}), u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: p.acrobatTrailingIcon,
					children: o("WAWebWebTPSensitive").getEditAcrobatTrailingIcon()
				})]
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = _;
}), 226);
