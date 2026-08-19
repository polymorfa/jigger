__d("WAWebMediaEditPdfButton.react", [
	"fbt",
	"WAWebDropdownV2.react",
	"WAWebMediaEditPdfButtonStyles",
	"WAWebMediaPanelHeaderTestIds",
	"WAWebMediaPdfAutoShareButton.react",
	"WAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebNoop",
	"WAWebPdfEditIconIcon.react",
	"WAWebPdfViewerTestIds",
	"WAWebTPEditInAcrobatUtils",
	"WAWebTPEditPdfInWhatsappContext.react",
	"WAWebTPIframeUtils",
	"WAWebTPLoggingUtils",
	"WAWebTPPdfViewerGatingUtils",
	"WAWebTPSharerPreference",
	"WAWebUnstyledButton.react",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcEdit.react",
	"WDSText.react",
	"cr:1539",
	"cr:27443",
	"react",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState, f = {
		dropdownShadow: {
			boxShadow: "xs2e80n",
			$$css: !0
		},
		buttonText: {
			marginTop: "xfl633f",
			$$css: !0
		}
	};
	function g(e) {
		var t, a = e.isDisabled, i = a === void 0 ? !1 : a, l = e.mediaData, c = e.msg, g = p(null), h = _(!1), y = h[0], C = h[1], b = _(o("WAWebTPSharerPreference").getSharerSkipPreference), v = b[0], S = b[1], R = v && !y;
		m(function() {
			return R && o("WAWebTPIframeUtils").preloadWebTPInlineSharerIframeIfEnabled("application/pdf", "pdfPreviewClick"), function() {
				return o("WAWebTPIframeUtils").removePreloadedInlineSharerIframe();
			};
		}, [R]);
		var L = s._(
			/*BTDS*/
			""
		), E = (t = n("cr:1539") == null ? void 0 : n("cr:1539").getWAWebWebTPEditMenuTitle()) != null ? t : L, k = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), I = k.undoRedoState, T = I.hasUndo, D = d(function() {
			S(o("WAWebTPSharerPreference").getSharerSkipPreference());
		}, []), x = d(function() {
			o("WAWebTPEditInAcrobatUtils").openEditInAcrobatModal({
				hasUnsavedAnnotations: T,
				mediaData: l,
				msg: c,
				onPreferenceSaved: D,
				source: "menu"
			});
		}, [
			c,
			l,
			T,
			D
		]), $ = d(function() {
			C(!0), o("WAWebTPEditInAcrobatUtils").openEditInAcrobatModal({
				hasUnsavedAnnotations: T,
				mediaData: l,
				msg: c,
				source: "menu"
			});
		}, [
			c,
			l,
			T
		]), P = p(r("WAWebNoop")), N = p(null), M = d(function() {
			P.current();
		}, []), w = d(function() {
			P.current(), x();
		}, [x]), A = d(function() {
			o("WAWebTPLoggingUtils").logEditPdfClickEvent(l.filehash);
		}, [l.filehash]), F = o("WAWebDropdownV2.react").useDropdownV2({
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
			children: R ? u.jsx(r("WAWebMediaPdfAutoShareButton.react"), {
				desktopCleanupRef: N,
				mediaData: l,
				menuItemLabel: String(E),
				msg: c,
				onDismiss: M,
				onError: $
			}) : u.jsx(o("WAWebMenu.react").WAWebMenu, {
				onSelect: w,
				children: u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
					optionId: "editPdf",
					testid: r("WAWebPdfViewerTestIds").EDIT_IN_ACROBAT,
					primary: E,
					detailLeft: u.jsx(o("WAWebPdfEditIconIcon.react").PdfEditIconIcon, { height: 20 }),
					detailRight: n("cr:1539") == null ? void 0 : n("cr:1539").getEditAcrobatTrailingIcon()
				})
			}),
			onClose: function() {
				N.current == null || N.current(), N.current = null;
			},
			position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
			target: g,
			xstyle: f.dropdownShadow
		}), O = F.hidePopover, B = F.popover;
		m(function() {
			P.current = O;
		}, [O]);
		var W = r("useWAWebThrottledCallback")(O, 100);
		return m(function() {
			return window.addEventListener("resize", W), function() {
				return window.removeEventListener("resize", W);
			};
		}, [W]), n("cr:27443") != null && o("WAWebTPPdfViewerGatingUtils").isWebTPPdfAnnotationsEnabled() ? u.jsx(n("cr:27443"), {
			onEditInAcrobat: x,
			isDisabled: i,
			shouldAutoProceed: R,
			msg: c,
			mediaData: l,
			menuItemLabel: String(E),
			onAutoShareError: $
		}) : u.jsxs(u.Fragment, { children: [u.jsxs(r("WAWebUnstyledButton.react"), {
			ref: g,
			xstyle: [r("WAWebMediaEditPdfButtonStyles").customButton, r("WAWebMediaEditPdfButtonStyles").unifiedButtonMargin],
			disabled: i,
			onClick: A,
			testid: r("WAWebMediaPanelHeaderTestIds").EDIT_PDF_BUTTON,
			"aria-label": L,
			children: [
				u.jsx(r("WDSIconIcEdit.react"), { iconXstyle: r("WAWebMediaEditPdfButtonStyles").buttonIcon }),
				u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					textAlign: "center",
					selectable: !1,
					colorName: "contentDefault",
					xstyle: f.buttonText,
					children: L
				}),
				u.jsx(r("WDSIconIcArrowDropDown.react"), { iconXstyle: r("WAWebMediaEditPdfButtonStyles").buttonIcon })
			]
		}), B] });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
