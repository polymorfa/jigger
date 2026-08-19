__d("WAWebComposeBoxPanelsMenu.react", [
	"fbt",
	"$InternalEnum",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebComposeBoxPanelTypes",
	"WAWebComposeBoxPanelsMenuButton.react",
	"WAWebL10N",
	"WAWebTabOrder",
	"WAWebUserPrefsGeneral",
	"WAWebXIcon.react",
	"WDSIconIcMood.react",
	"WDSIconWdsIcSticker.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebChatValues",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useRef, m = 26, p = 16, _ = {
		menu: {
			position: "x1n2onr6",
			display: "x78zum5",
			height: "x1dxfi9l",
			transition: "x15cnf4b",
			":hover_willChange": "x1v3ui1v",
			$$css: !0
		},
		menuOpenStatusReply: {
			width: "x1j5n0mt",
			$$css: !0
		},
		menuOpen: {
			width: "x1ohurxr",
			$$css: !0
		},
		menuFull: {
			width: "x1t741oc",
			$$css: !0
		},
		menuClosedStatusReply: {
			width: "x72722d",
			$$css: !0
		},
		menuOpenStatusReplyMediaProtected: {
			width: "xue0253",
			$$css: !0
		},
		menuClosedStatusReplyMediaProtected: {
			width: "xqr7jod",
			$$css: !0
		},
		menuClosed: {
			width: "xpjhzmb",
			$$css: !0
		},
		button: {
			transition: "xl0co6n",
			transform: null,
			$$css: !0
		},
		statusReplyButton: {
			alignItems: "x6s0dn4",
			bottom: null,
			display: "x78zum5",
			height: "x1vqgdyp",
			justifyContent: "xl56j7k",
			top: "xnfr1j",
			width: "x100vrsf",
			$$css: !0
		},
		visible: {
			opacity: "x1hc1fzr",
			$$css: !0
		},
		invisible: {
			opacity: "xg01cxk",
			$$css: !0
		},
		marginHoriz8: {
			marginInlineStart: "x150mmf0",
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		}
	}, f = n("$InternalEnum").Mirrored(["ChatComposeBox", "StatusReplyComposeBox"]), g = 48, h = function(t, n, r, o) {
		switch (t) {
			case f.ChatComposeBox: return n ? {
				button: null,
				menu: r ? _.menuFull : _.menuOpen
			} : {
				button: null,
				menu: _.menuClosed
			};
			case f.StatusReplyComposeBox: return o ? {
				button: _.statusReplyButton,
				menu: n ? _.menuOpenStatusReplyMediaProtected : _.menuClosedStatusReplyMediaProtected
			} : {
				button: null,
				menu: n ? _.menuOpenStatusReply : _.menuClosedStatusReply
			};
		}
	}, y = function(t, n, a, i) {
		var e = a === f.StatusReplyComposeBox && i ? g : m + p, l = 0;
		switch (t) {
			case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI:
				l = n ? e : 0;
				break;
			case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER:
				switch (a) {
					case f.ChatComposeBox:
						l = n ? 3 * e : 0;
						break;
					case f.StatusReplyComposeBox:
						l = n ? 2 * e : e;
						break;
				}
				break;
			default: break;
		}
		var s = (r("WAWebL10N").isRTL() ? -1 : 1) * l;
		return { transform: "translateX(" + s + "px)" };
	};
	function C(t) {
		var n, a, i = o("react-compiler-runtime").c(65), l = d(), u = d(), m = d(), p = d(), g = t.theme === f.StatusReplyComposeBox, C = (n = o("useWAWebChatValues").useOptionalChatValues((a = t.chat) == null ? void 0 : a.id, [
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebChatGetters").getId,
			o("WAWebChatGetters").getId
		])) != null ? n : [], b = C[0], v;
		i[0] !== t ? (v = function(n) {
			t.onChange(n);
		}, i[0] = t, i[1] = v) : v = i[1];
		var S = v, R;
		i[2] !== t ? (R = function() {
			t.onChange(null);
		}, i[2] = t, i[3] = R) : R = i[3];
		var L = R, E;
		i[4] !== S || i[5] !== b || i[6] !== g || i[7] !== t ? (E = function() {
			var e = !!t.selectedExpressionPanel;
			if (!e && !g) {
				t.onChange(!b && o("WAWebUserPrefsGeneral").getLastComposeBoxExpressionPanel() || o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
				return;
			}
			S(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
		}, i[4] = S, i[5] = b, i[6] = g, i[7] = t, i[8] = E) : E = i[8];
		var k = E;
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_compose_box_panel", S);
		var I;
		i[9] === Symbol.for("react.memo_cache_sentinel") ? (I = function(t) {
			p.current = t;
		}, i[9] = I) : I = i[9];
		var T = I, D = t.readOnly, x = !!t.selectedExpressionPanel, $ = !b && t.isMessageToBot !== !0, P = t.isMediaProtected === !0, N;
		i[10] !== t.buttonStyle ? (N = [_.button, t.buttonStyle], i[10] = t.buttonStyle, i[11] = N) : N = i[11];
		var M = N, w;
		i[12] !== M || i[13] !== t.openButtonStyle ? (w = [M, t.openButtonStyle], i[12] = M, i[13] = t.openButtonStyle, i[14] = w) : w = i[14];
		var A = w, F = t.buttonProps, O, B, W, q;
		i[15] !== P || i[16] !== x || i[17] !== t.theme || i[18] !== $ ? (O = h(t.theme, x, $, P), B = x ? "open" : "closed", W = T, q = (e || (e = r("stylex"))).props(_.menu, _.marginHoriz8, O.menu), i[15] = P, i[16] = x, i[17] = t.theme, i[18] = $, i[19] = O, i[20] = B, i[21] = W, i[22] = q) : (O = i[19], B = i[20], W = i[21], q = i[22]);
		var U;
		i[23] === Symbol.for("react.memo_cache_sentinel") ? (U = s._(
			/*BTDS*/
			""
		), i[23] = U) : U = i[23];
		var V = x ? _.visible : _.invisible, H;
		i[24] !== M || i[25] !== V ? (H = [M, V], i[24] = M, i[25] = V, i[26] = H) : H = i[26];
		var G = x ? 0 : -1, z = x && !D ? o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_MENU_BUTTON : null, j = F == null ? void 0 : F.closePanel, K;
		i[27] !== L || i[28] !== O.button || i[29] !== H || i[30] !== G || i[31] !== z || i[32] !== j ? (K = c.jsx(o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton, babelHelpers.extends({
			"aria-label": U,
			xstyle: H,
			tabIndex: G,
			"data-tab": z,
			Icon: o("WAWebXIcon.react").XIcon,
			isActive: !1,
			testid: "emoji-picker-close-btn",
			onClick: L,
			ref: l,
			size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES.SQUARE24,
			containerXstyle: O.button
		}, j)), i[27] = L, i[28] = O.button, i[29] = H, i[30] = G, i[31] = z, i[32] = j, i[33] = K) : K = i[33];
		var Q;
		i[34] === Symbol.for("react.memo_cache_sentinel") ? (Q = s._(
			/*BTDS*/
			""
		), i[34] = Q) : Q = i[34];
		var X = x || D ? null : o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_MENU_BUTTON, Y = t.selectedExpressionPanel === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI, J = O.button, Z;
		i[35] !== P || i[36] !== x || i[37] !== t.theme ? (Z = y(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI, x, t.theme, P), i[35] = P, i[36] = x, i[37] = t.theme, i[38] = Z) : Z = i[38];
		var ee = F == null ? void 0 : F.openEmoji, te;
		i[39] !== k || i[40] !== O.button || i[41] !== A || i[42] !== X || i[43] !== Y || i[44] !== Z || i[45] !== ee ? (te = c.jsx(o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton, babelHelpers.extends({
			"aria-label": Q,
			xstyle: A,
			testid: "compose-btn-emoji",
			"data-tab": X,
			Icon: r("WDSIconIcMood.react"),
			isActive: Y,
			isMain: !0,
			onClick: k,
			ref: u,
			size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES.SQUARE26,
			containerXstyle: J,
			style: Z
		}, ee)), i[39] = k, i[40] = O.button, i[41] = A, i[42] = X, i[43] = Y, i[44] = Z, i[45] = ee, i[46] = te) : te = i[46];
		var ne;
		i[47] !== (F == null ? void 0 : F.openSticker) || i[48] !== S || i[49] !== P || i[50] !== x || i[51] !== g || i[52] !== O.button || i[53] !== A || i[54] !== t.selectedExpressionPanel || i[55] !== t.theme || i[56] !== $ ? (ne = $ && c.jsx(o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton, babelHelpers.extends({
			"aria-label": s._(
				/*BTDS*/
				""
			),
			xstyle: [A, x || g ? _.visible : _.invisible],
			testid: "compose-btn-sticker",
			Icon: r("WDSIconWdsIcSticker.react"),
			isActive: t.selectedExpressionPanel === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER,
			onClick: function() {
				return S(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER);
			},
			ref: m,
			size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES.SQUARE26,
			containerXstyle: O.button,
			style: y(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER, x, t.theme, P)
		}, F == null ? void 0 : F.openSticker)), i[47] = F == null ? void 0 : F.openSticker, i[48] = S, i[49] = P, i[50] = x, i[51] = g, i[52] = O.button, i[53] = A, i[54] = t.selectedExpressionPanel, i[55] = t.theme, i[56] = $, i[57] = ne) : ne = i[57];
		var re;
		return i[58] !== K || i[59] !== te || i[60] !== ne || i[61] !== B || i[62] !== W || i[63] !== q ? (re = c.jsxs("div", babelHelpers.extends({
			"data-state": B,
			ref: W
		}, q, { children: [
			K,
			te,
			ne
		] })), i[58] = K, i[59] = te, i[60] = ne, i[61] = B, i[62] = W, i[63] = q, i[64] = re) : re = i[64], re;
	}
	l.PanelsTheme = f, l.ComposeBoxExpressionPanelsMenu = C;
}), 226);
