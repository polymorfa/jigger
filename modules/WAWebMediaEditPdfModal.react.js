__d("WAWebMediaEditPdfModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebDesktopSharerSlot.react",
	"WAWebEnvironment",
	"WAWebFlex.react",
	"WAWebMediaPdfSharerIframe.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebSpinner.react",
	"WAWebTPAnnotatedBufferUtils",
	"WAWebTPPdfViewerGatingUtils",
	"WAWebTPSharerPreference",
	"WDSButtonGroup.react",
	"WDSIconIcWarning.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebPdfSharerConnection"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useLayoutEffect, p = c.useRef, _ = c.useState, f = {
		browserCompatContainer: {
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		buttonContainer: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function g(e) {
		var t, n = o("react-compiler-runtime").c(29), a = o("WAWebTPPdfViewerGatingUtils").getWebTPBrowserCompatibility(), i = p(null), l = r("WAWebEnvironment").isWindows, c = _(null), d = c[0], f = c[1], g = e.mediaData, b = e.msg, v;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (v = function(t) {
			f(t);
		}, n[0] = v) : v = n[0];
		var S = v, R = p(!1), L, E;
		n[1] !== d ? (L = function() {
			var e = d;
			return (function() {
				e != null && !R.current && e.destroy();
			});
		}, E = [d], n[1] = d, n[2] = L, n[3] = E) : (L = n[2], E = n[3]), m(L, E);
		var k;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (k = o("WAWebTPSharerPreference").getSharerSkipPreference(), n[4] = k) : k = n[4];
		var I = k, T = (t = e.hasUnsavedAnnotations) != null ? t : !1, D;
		n[5] !== T ? (D = function() {
			return o("WAWebTPAnnotatedBufferUtils").getAnnotatedPdfBuffer(T);
		}, n[5] = T, n[6] = D) : D = n[6];
		var x = D, $;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? ($ = {
			showSavePreferenceCheckbox: o("WAWebTPPdfViewerGatingUtils").isWebTPSharerSavePreferenceEnabled(),
			savedPreference: I
		}, n[7] = $) : $ = n[7];
		var P = l ? d : null, N;
		n[8] !== e ? (N = function(n) {
			R.current = !0, n.savePreference != null && (o("WAWebTPSharerPreference").setSharerSkipPreference(n.savePreference), e.onPreferenceSaved == null || e.onPreferenceSaved()), o("WAWebModalManager").ModalManager.closeSupportOrModal();
		}, n[8] = e, n[9] = N) : N = n[9];
		var M;
		n[10] !== x || n[11] !== P || n[12] !== N ? (M = {
			appConfigOverrides: $,
			desktopSession: P,
			getAnnotatedBuffer: x,
			onShareSuccess: N,
			onCancel: y
		}, n[10] = x, n[11] = P, n[12] = N, n[13] = M) : M = n[13];
		var w = r("useWAWebPdfSharerConnection")(b, g, i, M), A = w.hasError, F = w.loading, O = h;
		if (a === "upgrade_browser") {
			var B;
			return n[14] === Symbol.for("react.memo_cache_sentinel") ? (B = u.jsx(C, {
				onDismiss: O,
				title: s._(
					/*BTDS*/
					""
				),
				description: s._(
					/*BTDS*/
					""
				)
			}), n[14] = B) : B = n[14], B;
		}
		if (a === "unsupported") {
			var W;
			return n[15] === Symbol.for("react.memo_cache_sentinel") ? (W = u.jsx(C, {
				onDismiss: O,
				title: s._(
					/*BTDS*/
					""
				),
				description: s._(
					/*BTDS*/
					""
				)
			}), n[15] = W) : W = n[15], W;
		}
		if (A) {
			var q;
			return n[16] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsx(C, {
				onDismiss: O,
				title: s._(
					/*BTDS*/
					""
				),
				description: s._(
					/*BTDS*/
					""
				)
			}), n[16] = q) : q = n[16], q;
		}
		var U;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (U = {
			surface: "unknown",
			viewName: "edit-pdf"
		}, n[17] = U) : U = n[17];
		var V;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (V = { className: "x14luw17" }, n[18] = V) : V = n[18];
		var H;
		n[19] !== F ? (H = F && u.jsx("div", {
			className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
			children: u.jsx("div", {
				className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 xl56j7k x6s0dn4",
				children: u.jsx(o("WAWebSpinner.react").Spinner, {
					stroke: 6,
					size: 40
				})
			})
		}), n[19] = F, n[20] = H) : H = n[20];
		var G;
		n[21] !== F ? (G = {
			0: { className: "x10l6tqk x5yr21d xh8yej3 x13vifvy xg01cxk x1o0tod" },
			1: { className: "x10l6tqk x5yr21d xh8yej3 x13vifvy x1o0tod x1hc1fzr" }
		}[!F << 0], n[21] = F, n[22] = G) : G = n[22];
		var z;
		n[23] === Symbol.for("react.memo_cache_sentinel") ? (z = l ? u.jsx(r("WAWebDesktopSharerSlot.react"), { onSessionReady: S }) : u.jsx(r("WAWebMediaPdfSharerIframe.react"), { iframeRef: i }), n[23] = z) : z = n[23];
		var j;
		n[24] !== G ? (j = u.jsx("div", babelHelpers.extends({}, G, { children: z })), n[24] = G, n[25] = j) : j = n[25];
		var K;
		return n[26] !== H || n[27] !== j ? (K = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: U,
			type: o("WAWebModal.react").ModalTheme.PdfEdit,
			testid: "edit-pdf-modal",
			onOverlayClick: O,
			children: u.jsxs("div", babelHelpers.extends({}, V, { children: [H, j] }))
		}), n[26] = H, n[27] = j, n[28] = K) : K = n[28], K;
	}
	function h() {
		o("WAWebModalManager").ModalManager.closeSupportOrModal();
	}
	function y() {
		o("WAWebModalManager").ModalManager.closeSupportOrModal();
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(18), n = e.description, a = e.onDismiss, i = e.title, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			surface: "unknown",
			viewName: "edit-pdf"
		}, t[0] = l) : l = t[0];
		var c, d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx(r("WDSIconIcWarning.react"), {
			height: 24,
			width: 24
		}), d = { className: "x2b8uid" }, t[1] = c, t[2] = d) : (c = t[1], d = t[2]);
		var m;
		t[3] !== i ? (m = u.jsx("div", babelHelpers.extends({}, d, { children: u.jsx(r("WDSText.react"), {
			type: "Headline1",
			colorName: "contentDefault",
			children: i
		}) })), t[3] = i, t[4] = m) : m = t[4];
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x1yc453h xh8yej3" }, t[5] = p) : p = t[5];
		var _;
		t[6] !== n ? (_ = u.jsx("div", babelHelpers.extends({}, p, { children: u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: n
		}) })), t[6] = n, t[7] = _) : _ = t[7];
		var g;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[8] = g) : g = t[8];
		var h;
		t[9] !== a ? (h = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			xstyle: f.buttonContainer,
			children: u.jsx(r("WDSButtonGroup.react"), {
				orientation: "horizontal",
				width: "hug",
				primaryButtonProps: {
					label: g,
					variant: "filled",
					onPress: a
				}
			})
		}), t[9] = a, t[10] = h) : h = t[10];
		var y;
		t[11] !== m || t[12] !== _ || t[13] !== h ? (y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "start",
			xstyle: f.browserCompatContainer,
			gap: 16,
			padding: 24,
			children: [
				c,
				m,
				_,
				h
			]
		}), t[11] = m, t[12] = _, t[13] = h, t[14] = y) : y = t[14];
		var C;
		return t[15] !== a || t[16] !== y ? (C = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: l,
			type: o("WAWebModal.react").ModalTheme.PdfEditError,
			testid: "edit-pdf-modal",
			onOverlayClick: a,
			children: y
		}), t[15] = a, t[16] = y, t[17] = C) : C = t[17], C;
	}
	l.default = g;
}), 226);
