__d("WAWebMediaPdfAutoShareButton.react", [
	"WAWebDesktopSharerSlot.react",
	"WAWebEnvironment",
	"WAWebMediaPdfInlineSharerIframe.react",
	"WAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebPdfViewerTestIds",
	"WAWebSpinner.react",
	"WAWebTPAnnotatedBufferUtils",
	"WAWebTPEditPdfInWhatsappContext.react",
	"WAWebWebTPSensitive",
	"react",
	"useWAWebPdfSharerConnection"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useRef, m = u.useState;
	function p(e) {
		var t = e.desktopCleanupRef, n = e.mediaData, a = e.menuItemLabel, i = e.msg, l = e.onDismiss, u = e.onError, p = d(null), _ = d(null), f = m(!1), g = f[0], h = f[1], y = r("WAWebEnvironment").isWindows, C = m(null), b = C[0], v = C[1], S = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), R = S.undoRedoState, L = R.hasUndo, E = c(function() {
			return o("WAWebTPAnnotatedBufferUtils").getAnnotatedPdfBuffer(L);
		}, [L]), k = c(function() {
			h(!0);
		}, []), I = c(function(e) {
			v(e), t != null && (t.current = function() {
				e.destroy();
			});
		}, [t]), T = c(function() {
			t != null && (t.current = null), b == null || b.hide(), l == null || l();
		}, [
			t,
			b,
			l
		]), D = c(function() {
			b == null || b.destroy(), u == null || u();
		}, [b, u]);
		return r("useWAWebPdfSharerConnection")(i, n, p, {
			appConfigOverrides: {
				menuItemLabel: a,
				savedPreference: !0
			},
			desktopSession: y ? b : null,
			getAnnotatedBuffer: E,
			onError: y ? D : u,
			onReady: k,
			onShareSuccess: y ? T : l
		}), s.jsxs("div", babelHelpers.extends({ ref: _ }, {
			0: { className: "x1rg5ohu x14vy60q x1n2onr6" },
			1: { className: "x1rg5ohu x14vy60q x1n2onr6 xti2d7y x1h6gzvc" }
		}[!g << 0], { children: [s.jsx(o("WAWebMenu.react").WAWebMenu, { children: s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			disabled: !0,
			optionId: "editPdf",
			testid: r("WAWebPdfViewerTestIds").EDIT_IN_ACROBAT,
			primary: a,
			detailLeft: s.jsx(o("WAWebSpinner.react").Spinner, {
				stroke: 2,
				size: 20
			}),
			detailRight: o("WAWebWebTPSensitive").getEditAcrobatTrailingIcon()
		}) }), s.jsx("div", babelHelpers.extends({}, {
			0: { className: "x5yr21d xixxii4 x6nvzda x4i4b9w xhl9efl xj65ea0 x1s85apg x1h6gzvc" },
			1: { className: "x5yr21d x6nvzda x4i4b9w xhl9efl xj65ea0 x10l6tqk x13vifvy x1o0tod xh8yej3 xzkaem6" }
		}[!!g << 0], { children: y ? s.jsx(r("WAWebDesktopSharerSlot.react"), {
			inline: !0,
			measureRef: _,
			visible: g,
			onSessionReady: I
		}) : s.jsx(r("WAWebMediaPdfInlineSharerIframe.react"), { iframeRef: p }) }))] }));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
