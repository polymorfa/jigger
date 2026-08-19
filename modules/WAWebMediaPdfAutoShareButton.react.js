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
	"react-compiler-runtime",
	"useWAWebPdfSharerConnection"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useRef, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(38), n = e.desktopCleanupRef, a = e.mediaData, i = e.menuItemLabel, l = e.msg, u = e.onDismiss, c = e.onError, p = d(null), _ = d(null), f = m(!1), g = f[0], h = f[1], y = r("WAWebEnvironment").isWindows, C = m(null), b = C[0], v = C[1], S = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), R = S.undoRedoState, L = R.hasUndo, E;
		t[0] !== L ? (E = function() {
			return o("WAWebTPAnnotatedBufferUtils").getAnnotatedPdfBuffer(L);
		}, t[0] = L, t[1] = E) : E = t[1];
		var k = E, I;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			h(!0);
		}, t[2] = I) : I = t[2];
		var T = I, D;
		t[3] !== n ? (D = function(t) {
			v(t), n != null && (n.current = function() {
				t.destroy();
			});
		}, t[3] = n, t[4] = D) : D = t[4];
		var x = D, $;
		t[5] !== n || t[6] !== b || t[7] !== u ? ($ = function() {
			n != null && (n.current = null), b == null || b.hide(), u == null || u();
		}, t[5] = n, t[6] = b, t[7] = u, t[8] = $) : $ = t[8];
		var P = $, N;
		t[9] !== b || t[10] !== c ? (N = function() {
			b == null || b.destroy(), c == null || c();
		}, t[9] = b, t[10] = c, t[11] = N) : N = t[11];
		var M = N, w;
		t[12] !== i ? (w = {
			menuItemLabel: i,
			savedPreference: !0
		}, t[12] = i, t[13] = w) : w = t[13];
		var A = y ? b : null, F = y ? M : c, O = y ? P : u, B;
		t[14] !== k || t[15] !== w || t[16] !== A || t[17] !== F || t[18] !== O ? (B = {
			appConfigOverrides: w,
			desktopSession: A,
			getAnnotatedBuffer: k,
			onError: F,
			onReady: T,
			onShareSuccess: O
		}, t[14] = k, t[15] = w, t[16] = A, t[17] = F, t[18] = O, t[19] = B) : B = t[19], r("useWAWebPdfSharerConnection")(l, a, p, B);
		var W;
		t[20] !== g ? (W = {
			0: { className: "x1rg5ohu x14vy60q x1n2onr6" },
			1: { className: "x1rg5ohu x14vy60q x1n2onr6 xti2d7y x1h6gzvc" }
		}[!g << 0], t[20] = g, t[21] = W) : W = t[21];
		var q, U;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (q = s.jsx(o("WAWebSpinner.react").Spinner, {
			stroke: 2,
			size: 20
		}), U = o("WAWebWebTPSensitive").getEditAcrobatTrailingIcon(), t[22] = q, t[23] = U) : (q = t[22], U = t[23]);
		var V;
		t[24] !== i ? (V = s.jsx(o("WAWebMenu.react").WAWebMenu, { children: s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			disabled: !0,
			optionId: "editPdf",
			testid: r("WAWebPdfViewerTestIds").EDIT_IN_ACROBAT,
			primary: i,
			detailLeft: q,
			detailRight: U
		}) }), t[24] = i, t[25] = V) : V = t[25];
		var H;
		t[26] !== g ? (H = {
			0: { className: "x5yr21d xixxii4 x6nvzda x4i4b9w xhl9efl xj65ea0 x1s85apg x1h6gzvc" },
			1: { className: "x5yr21d x6nvzda x4i4b9w xhl9efl xj65ea0 x10l6tqk x13vifvy x1o0tod xh8yej3 xzkaem6" }
		}[!!g << 0], t[26] = g, t[27] = H) : H = t[27];
		var G;
		t[28] !== x || t[29] !== g ? (G = y ? s.jsx(r("WAWebDesktopSharerSlot.react"), {
			inline: !0,
			measureRef: _,
			visible: g,
			onSessionReady: x
		}) : s.jsx(r("WAWebMediaPdfInlineSharerIframe.react"), { iframeRef: p }), t[28] = x, t[29] = g, t[30] = G) : G = t[30];
		var z;
		t[31] !== H || t[32] !== G ? (z = s.jsx("div", babelHelpers.extends({}, H, { children: G })), t[31] = H, t[32] = G, t[33] = z) : z = t[33];
		var j;
		return t[34] !== W || t[35] !== V || t[36] !== z ? (j = s.jsxs("div", babelHelpers.extends({ ref: _ }, W, { children: [V, z] })), t[34] = W, t[35] = V, t[36] = z, t[37] = j) : j = t[37], j;
	}
	l.default = p;
}), 98);
