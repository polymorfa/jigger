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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(26), n = e.isDisabled, a = e.mediaData, i = e.menuItemLabel, l = e.msg, c = e.onAutoShareError, d = e.onEditInAcrobat, _ = e.shouldAutoProceed, f = n === void 0 ? !1 : n, h = m(null), y = m(null), C;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[0] = C) : C = t[0];
		var b = C, v;
		t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== c || t[5] !== d || t[6] !== _ ? (v = u.jsx(g, {
			onEditInAcrobat: d,
			shouldAutoProceed: _,
			msg: l,
			mediaData: a,
			menuItemLabel: i,
			onAutoShareError: c,
			desktopCleanupRef: y
		}), t[1] = a, t[2] = i, t[3] = l, t[4] = c, t[5] = d, t[6] = _, t[7] = v) : v = t[7];
		var S = v, R;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (R = function() {
			y.current == null || y.current(), y.current = null;
		}, t[8] = R) : R = t[8];
		var L;
		t[9] !== S ? (L = {
			targetRef: h,
			menu: S,
			dismissable: !0,
			align: "middle",
			position: "below",
			onClose: R
		}, t[9] = S, t[10] = L) : L = t[10];
		var E = r("useWDSMenu")(L), k = E.closeMenu, I = E.isMenuOpen, T = E.menuPortal, D = E.openMenu, x;
		t[11] !== k || t[12] !== I || t[13] !== a || t[14] !== D ? (x = function() {
			I ? k() : (o("WAWebTPLoggingUtils").logEditPdfClickEvent(a.filehash), D());
		}, t[11] = k, t[12] = I, t[13] = a, t[14] = D, t[15] = x) : x = t[15];
		var $ = x, P;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (P = [r("WAWebMediaEditPdfButtonStyles").customButton, r("WAWebMediaEditPdfButtonStyles").unifiedButtonMargin], t[16] = P) : P = t[16];
		var N, M, w;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (N = u.jsx(r("WDSIconIcEdit.react"), { iconXstyle: r("WAWebMediaEditPdfButtonStyles").buttonIcon }), M = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			textAlign: "center",
			selectable: !1,
			colorName: "contentDefault",
			xstyle: p.buttonText,
			children: b
		}), w = u.jsx(r("WDSIconIcArrowDropDown.react"), { iconXstyle: r("WAWebMediaEditPdfButtonStyles").buttonIcon }), t[17] = N, t[18] = M, t[19] = w) : (N = t[17], M = t[18], w = t[19]);
		var A;
		t[20] !== $ || t[21] !== f ? (A = u.jsxs(r("WAWebUnstyledButton.react"), {
			ref: h,
			xstyle: P,
			disabled: f,
			testid: r("WAWebMediaPanelHeaderTestIds").EDIT_PDF_BUTTON,
			"aria-label": b,
			onClick: $,
			children: [
				N,
				M,
				w
			]
		}), t[20] = $, t[21] = f, t[22] = A) : A = t[22];
		var F;
		return t[23] !== A || t[24] !== T ? (F = u.jsxs(o("WAWebFlex.react").FlexRow, {
			inline: !0,
			xstyle: p.buttonWrapper,
			children: [A, T]
		}), t[23] = A, t[24] = T, t[25] = F) : F = t[25], F;
	}
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
		var t = o("react-compiler-runtime").c(21), n = e.desktopCleanupRef, a = e.mediaData, i = e.menuItemLabel, l = e.msg, s = e.onAutoShareError, c = e.onEditInAcrobat, d = e.shouldAutoProceed, m = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), _ = m.filehash, g = m.selectedThickness, y = m.setActiveAnnotationMode, C = m.setIsEditing, b = m.setSelectedColor, v, S, R;
		if (t[0] !== _ || t[1] !== g || t[2] !== y || t[3] !== C || t[4] !== b) {
			var L = function(t) {
				o("WAWebTPLoggingUtils").logAnnotationToolSelectEvent(o("WAWebTPLoggingUtils").toolSelectForToolClick(null, t), _), y(t), C(!0);
				var e = o("WAWebTPDefaultAnnotationColors").getDefaultAnnotationColorHex(t);
				b(o("WAWebMediaEditorUtilsColor").Color.fromHex(e));
				var n = {
					strokeColor: e,
					strokeWidth: g
				};
				o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", {
					type: "startMode",
					annotationType: t,
					config: n
				}), o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger("annotation:command", {
					type: "updateToolConfig",
					annotationType: t,
					config: n
				});
			}, E = o("WAWebTPPdfViewerGatingUtils").isWebTPPdfAnnotationsEnabled() ? f(L) : [];
			v = r("WDSMenu.react"), S = 260, R = E.map(h), t[0] = _, t[1] = g, t[2] = y, t[3] = C, t[4] = b, t[5] = v, t[6] = S, t[7] = R;
		} else v = t[5], S = t[6], R = t[7];
		var k;
		t[8] !== n || t[9] !== a || t[10] !== i || t[11] !== l || t[12] !== s || t[13] !== c || t[14] !== d ? (k = d ? u.jsx(r("WAWebMediaPdfAutoShareButton.react"), {
			desktopCleanupRef: n,
			mediaData: a,
			menuItemLabel: i,
			msg: l,
			onError: s
		}) : u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: p.acrobatRow,
			children: [u.jsx(r("WDSMenuItem.react"), {
				Icon: o("WAWebAcrobatIcon.react").AcrobatIcon,
				iconXstyle: p.iconColor,
				title: o("WAWebWebTPSensitive").getWAWebWebTPEditMenuTitle(),
				onPress: c,
				testid: r("WAWebPdfViewerTestIds").EDIT_IN_ACROBAT
			}), u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: p.acrobatTrailingIcon,
				children: o("WAWebWebTPSensitive").getEditAcrobatTrailingIcon()
			})]
		}), t[8] = n, t[9] = a, t[10] = i, t[11] = l, t[12] = s, t[13] = c, t[14] = d, t[15] = k) : k = t[15];
		var I;
		return t[16] !== v || t[17] !== S || t[18] !== R || t[19] !== k ? (I = u.jsxs(v, {
			minWidth: S,
			children: [R, k]
		}), t[16] = v, t[17] = S, t[18] = R, t[19] = k, t[20] = I) : I = t[20], I;
	}
	function h(e) {
		var t = e.Icon, n = e.action, o = e.testid, a = e.text;
		return u.jsx(r("WDSMenuItem.react"), {
			Icon: t,
			iconXstyle: p.iconColor,
			title: a,
			onPress: n,
			testid: o
		}, o);
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = _;
}), 226);
