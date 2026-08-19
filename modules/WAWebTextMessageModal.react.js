__d("WAWebTextMessageModal.react", [
	"fbt",
	"WAWebComposeBoxPopupPanel.react",
	"WAWebComposeConstants",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebEmojiText.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebMediaLinkPreview.react",
	"WAWebModal.react",
	"WAWebRichTextField.react",
	"WAWebRound.react",
	"WAWebUimUie.react",
	"WAWebWdsIcSendFilledIcon.react",
	"react",
	"react-compiler-runtime",
	"useWAWebLinkPreview"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useState, m = { buttonRefresh: {
		color: "x1pse0pq",
		backgroundColor: "xfn3atn",
		$$css: !0
	} };
	function p(t) {
		var n = o("react-compiler-runtime").c(46), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.ariaLabel, p = l.defaultText, _ = l.onBack, f = l.onSend, g = l.title, h = d(p), y = h[0], C = h[1], b;
		n[3] !== y ? (b = o("useWAWebLinkPreview").findFirstWebLink(y), n[3] = y, n[4] = b) : b = n[4];
		var v = b, S = o("useWAWebLinkPreview").useLinkPreview(v), R = S.clearLinkPreview, L = S.linkPreview, E;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (E = function(t) {
			var e = t.text;
			C(e);
		}, n[5] = E) : E = n[5];
		var k = E, I;
		n[6] !== L || n[7] !== f || n[8] !== y ? (I = function() {
			y.length && f(y, L);
		}, n[6] = L, n[7] = f, n[8] = y, n[9] = I) : I = n[9];
		var T = I, D;
		n[10] !== g ? (D = g ? c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: g,
			direction: "auto",
			titlify: !0,
			ellipsify: !0
		}) : null, n[10] = g, n[11] = D) : D = n[11];
		var x = D, $;
		n[12] !== L ? ($ = L || {}, n[12] = L, n[13] = $) : $ = n[13];
		var P = $, N = P.description, M = P.matchedText, w = P.thumbnail, A = P.title, F;
		n[14] !== R || n[15] !== N || n[16] !== L || n[17] !== A || n[18] !== M || n[19] !== w ? (F = L ? c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ComposeBoxLinkPreview",
			escapable: !0,
			requestDismiss: R,
			children: c.jsx(r("WAWebComposeBoxPopupPanel.react"), {
				onOmit: R,
				children: c.jsx(r("WAWebMediaLinkPreview.react"), {
					title: A,
					compose: !0,
					matchedText: M,
					description: N,
					thumbnailJpeg: w,
					isLoading: !1
				})
			})
		}) : null, n[14] = R, n[15] = N, n[16] = L, n[17] = A, n[18] = M, n[19] = w, n[20] = F) : F = n[20];
		var O = F, B;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (B = {
			surface: "unknown",
			viewName: "text-message"
		}, n[21] = B) : B = n[21];
		var W;
		n[22] !== _ || n[23] !== x ? (W = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
			onBack: _,
			children: x
		}), n[22] = _, n[23] = x, n[24] = W) : W = n[24];
		var q, U;
		n[25] === Symbol.for("react.memo_cache_sentinel") ? (U = "x78zum5 xdt5ytf x1egiwwb xs9asl8 x6ikm8r x10wlt62 xhjsbib", q = { className: "x1iyjqo2 x9desvi xjfo4ez xs9asl8 xf7qf19 xw2csxc x1odjw0f xhjsbib" }, n[25] = q, n[26] = U) : (q = n[25], U = n[26]);
		var V = u != null ? u : g, H;
		n[27] !== V || n[28] !== y ? (H = c.jsx("div", babelHelpers.extends({}, q, { children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "text-message-modal-text-unput",
			value: y,
			ariaLabel: V,
			maxLength: o("WAWebComposeConstants").MAX_TXT_MSG_SIZE,
			onChange: k,
			emojiBtnPosition: "side",
			multiline: !0,
			spellCheck: !0,
			showRemaining: !0,
			focusOnMount: !0,
			theme: "small",
			textFormatEnabled: !0
		}) })), n[27] = V, n[28] = y, n[29] = H) : H = n[29];
		var G;
		n[30] !== O || n[31] !== H ? (G = c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			className: U,
			children: [H, O]
		}) }), n[30] = O, n[31] = H, n[32] = G) : G = n[32];
		var z, j;
		n[33] === Symbol.for("react.memo_cache_sentinel") ? (z = { className: "x1n2onr6 x12xzxwr x1x0gksc x1280gxy" }, j = { className: "x10l6tqk x145d82y x3h4tne" }, n[33] = z, n[34] = j) : (z = n[33], j = n[34]);
		var K;
		n[35] === Symbol.for("react.memo_cache_sentinel") ? (K = s._(
			/*BTDS*/
			""
		), n[35] = K) : K = n[35];
		var Q;
		n[36] === Symbol.for("react.memo_cache_sentinel") ? (Q = c.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
			width: 30,
			directional: !0
		}), n[36] = Q) : Q = n[36];
		var X;
		n[37] !== T ? (X = c.jsx("div", babelHelpers.extends({}, z, { children: c.jsx("div", babelHelpers.extends({}, j, { children: c.jsx(o("WAWebRound.react").Round, {
			large: !0,
			onClick: T,
			label: K,
			xstyle: m.buttonRefresh,
			children: Q
		}) })) })), n[37] = T, n[38] = X) : X = n[38];
		var Y;
		n[39] !== G || n[40] !== X || n[41] !== W ? (Y = c.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: B,
			children: [
				W,
				G,
				X
			]
		}), n[39] = G, n[40] = X, n[41] = W, n[42] = Y) : Y = n[42];
		var J;
		return n[43] !== i || n[44] !== Y ? (J = c.jsx(o("WAWebModal.react").Modal, {
			ref: i,
			type: o("WAWebModal.react").ModalTheme.Box,
			children: Y
		}), n[43] = i, n[44] = Y, n[45] = J) : J = n[45], J;
	}
	l.default = p;
}), 226);
