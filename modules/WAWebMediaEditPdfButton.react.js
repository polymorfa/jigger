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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(51), a = e.isDisabled, i = e.mediaData, l = e.msg, c = a === void 0 ? !1 : a, d = p(null), g = _(!1), y = g[0], C = g[1], b = _(o("WAWebTPSharerPreference").getSharerSkipPreference), v = b[0], S = b[1], R = v && !y, L, E;
		t[0] !== R ? (L = function() {
			return R && o("WAWebTPIframeUtils").preloadWebTPInlineSharerIframeIfEnabled("application/pdf", "pdfPreviewClick"), h;
		}, E = [R], t[0] = R, t[1] = L, t[2] = E) : (L = t[1], E = t[2]), m(L, E);
		var k;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), t[3] = k) : k = t[3];
		var I = k, T;
		if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
			var D;
			T = (D = n("cr:1539") == null ? void 0 : n("cr:1539").getWAWebWebTPEditMenuTitle()) != null ? D : I, t[4] = T;
		} else T = t[4];
		var x = T, $ = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), P = $.undoRedoState, N = P.hasUndo, M;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			S(o("WAWebTPSharerPreference").getSharerSkipPreference());
		}, t[5] = M) : M = t[5];
		var w = M, A;
		t[6] !== N || t[7] !== i || t[8] !== l ? (A = function() {
			o("WAWebTPEditInAcrobatUtils").openEditInAcrobatModal({
				hasUnsavedAnnotations: N,
				mediaData: i,
				msg: l,
				onPreferenceSaved: w,
				source: "menu"
			});
		}, t[6] = N, t[7] = i, t[8] = l, t[9] = A) : A = t[9];
		var F = A, O;
		t[10] !== N || t[11] !== i || t[12] !== l ? (O = function() {
			C(!0), o("WAWebTPEditInAcrobatUtils").openEditInAcrobatModal({
				hasUnsavedAnnotations: N,
				mediaData: i,
				msg: l,
				source: "menu"
			});
		}, t[10] = N, t[11] = i, t[12] = l, t[13] = O) : O = t[13];
		var B = O, W = p(r("WAWebNoop")), q = p(null), U;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (U = function() {
			W.current();
		}, t[14] = U) : U = t[14];
		var V = U, H;
		t[15] !== F ? (H = function() {
			W.current(), F();
		}, t[15] = F, t[16] = H) : H = t[16];
		var G = H, z;
		t[17] !== i.filehash ? (z = function() {
			o("WAWebTPLoggingUtils").logEditPdfClickEvent(i.filehash);
		}, t[17] = i.filehash, t[18] = z) : z = t[18];
		var j = z, K;
		t[19] !== B || t[20] !== G || t[21] !== i || t[22] !== l || t[23] !== R ? (K = R ? u.jsx(r("WAWebMediaPdfAutoShareButton.react"), {
			desktopCleanupRef: q,
			mediaData: i,
			menuItemLabel: String(x),
			msg: l,
			onDismiss: V,
			onError: B
		}) : u.jsx(o("WAWebMenu.react").WAWebMenu, {
			onSelect: G,
			children: u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
				optionId: "editPdf",
				testid: r("WAWebPdfViewerTestIds").EDIT_IN_ACROBAT,
				primary: x,
				detailLeft: u.jsx(o("WAWebPdfEditIconIcon.react").PdfEditIconIcon, { height: 20 }),
				detailRight: n("cr:1539") == null ? void 0 : n("cr:1539").getEditAcrobatTrailingIcon()
			})
		}), t[19] = B, t[20] = G, t[21] = i, t[22] = l, t[23] = R, t[24] = K) : K = t[24];
		var Q;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (Q = function() {
			q.current == null || q.current(), q.current = null;
		}, t[25] = Q) : Q = t[25];
		var X;
		t[26] !== K ? (X = {
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
			children: K,
			onClose: Q,
			position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
			target: d,
			xstyle: f.dropdownShadow
		}, t[26] = K, t[27] = X) : X = t[27];
		var Y = o("WAWebDropdownV2.react").useDropdownV2(X), J = Y.hidePopover, Z = Y.popover, ee, te;
		t[28] !== J ? (ee = function() {
			W.current = J;
		}, te = [J], t[28] = J, t[29] = ee, t[30] = te) : (ee = t[29], te = t[30]), m(ee, te);
		var ne = r("useWAWebThrottledCallback")(J, 100), re, oe;
		if (t[31] !== ne ? (re = function() {
			return window.addEventListener("resize", ne), (function() {
				return window.removeEventListener("resize", ne);
			});
		}, oe = [ne], t[31] = ne, t[32] = re, t[33] = oe) : (re = t[32], oe = t[33]), m(re, oe), n("cr:27443") != null && o("WAWebTPPdfViewerGatingUtils").isWebTPPdfAnnotationsEnabled()) {
			var ae;
			return t[34] !== B || t[35] !== F || t[36] !== c || t[37] !== i || t[38] !== l || t[39] !== R ? (ae = u.jsx(n("cr:27443"), {
				onEditInAcrobat: F,
				isDisabled: c,
				shouldAutoProceed: R,
				msg: l,
				mediaData: i,
				menuItemLabel: String(x),
				onAutoShareError: B
			}), t[34] = B, t[35] = F, t[36] = c, t[37] = i, t[38] = l, t[39] = R, t[40] = ae) : ae = t[40], ae;
		}
		var ie;
		t[41] === Symbol.for("react.memo_cache_sentinel") ? (ie = [r("WAWebMediaEditPdfButtonStyles").customButton, r("WAWebMediaEditPdfButtonStyles").unifiedButtonMargin], t[41] = ie) : ie = t[41];
		var le, se, ue;
		t[42] === Symbol.for("react.memo_cache_sentinel") ? (le = u.jsx(r("WDSIconIcEdit.react"), { iconXstyle: r("WAWebMediaEditPdfButtonStyles").buttonIcon }), se = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			textAlign: "center",
			selectable: !1,
			colorName: "contentDefault",
			xstyle: f.buttonText,
			children: I
		}), ue = u.jsx(r("WDSIconIcArrowDropDown.react"), { iconXstyle: r("WAWebMediaEditPdfButtonStyles").buttonIcon }), t[42] = le, t[43] = se, t[44] = ue) : (le = t[42], se = t[43], ue = t[44]);
		var ce;
		t[45] !== j || t[46] !== c ? (ce = u.jsxs(r("WAWebUnstyledButton.react"), {
			ref: d,
			xstyle: ie,
			disabled: c,
			onClick: j,
			testid: r("WAWebMediaPanelHeaderTestIds").EDIT_PDF_BUTTON,
			"aria-label": I,
			children: [
				le,
				se,
				ue
			]
		}), t[45] = j, t[46] = c, t[47] = ce) : ce = t[47];
		var de;
		return t[48] !== Z || t[49] !== ce ? (de = u.jsxs(u.Fragment, { children: [ce, Z] }), t[48] = Z, t[49] = ce, t[50] = de) : de = t[50], de;
	}
	function h() {
		return o("WAWebTPIframeUtils").removePreloadedInlineSharerIframe();
	}
	l.default = g;
}), 226);
