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
		var n, a, i = d(), l = d(), u = d(), m = d(), p = t.theme === f.StatusReplyComposeBox, g = (n = o("useWAWebChatValues").useOptionalChatValues((a = t.chat) == null ? void 0 : a.id, [
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebChatGetters").getId,
			o("WAWebChatGetters").getId
		])) != null ? n : [], C = g[0], b = g[1], v = function(n) {
			t.onChange(n);
		}, S = function() {
			t.onChange(null);
		}, R = function() {
			var e = !!t.selectedExpressionPanel;
			if (!e && !p) {
				t.onChange(!C && o("WAWebUserPrefsGeneral").getLastComposeBoxExpressionPanel() || o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
				return;
			}
			v(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_compose_box_panel", v);
		var L = function(t) {
			m.current = t;
		}, E = t.readOnly, k = !!t.selectedExpressionPanel, I = !C && t.isMessageToBot !== !0, T = t.isMediaProtected === !0, D = [_.button, t.buttonStyle], x = [D, t.openButtonStyle], $ = t.buttonProps, P = h(t.theme, k, I, T);
		return c.jsxs("div", babelHelpers.extends({
			"data-state": k ? "open" : "closed",
			ref: L
		}, (e || (e = r("stylex"))).props(_.menu, _.marginHoriz8, P.menu), { children: [
			c.jsx(o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton, babelHelpers.extends({
				"aria-label": s._(
					/*BTDS*/
					""
				),
				xstyle: [D, k ? _.visible : _.invisible],
				tabIndex: k ? 0 : -1,
				"data-tab": k && !E ? o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_MENU_BUTTON : null,
				Icon: o("WAWebXIcon.react").XIcon,
				isActive: !1,
				testid: "emoji-picker-close-btn",
				onClick: S,
				ref: i,
				size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES.SQUARE24,
				containerXstyle: P.button
			}, $ == null ? void 0 : $.closePanel)),
			c.jsx(o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton, babelHelpers.extends({
				"aria-label": s._(
					/*BTDS*/
					""
				),
				xstyle: x,
				testid: "compose-btn-emoji",
				"data-tab": k || E ? null : o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_MENU_BUTTON,
				Icon: r("WDSIconIcMood.react"),
				isActive: t.selectedExpressionPanel === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI,
				isMain: !0,
				onClick: R,
				ref: l,
				size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES.SQUARE26,
				containerXstyle: P.button,
				style: y(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI, k, t.theme, T)
			}, $ == null ? void 0 : $.openEmoji)),
			I && c.jsx(o("WAWebComposeBoxPanelsMenuButton.react").PanelsMenuButton, babelHelpers.extends({
				"aria-label": s._(
					/*BTDS*/
					""
				),
				xstyle: [x, k || p ? _.visible : _.invisible],
				testid: "compose-btn-sticker",
				Icon: r("WDSIconWdsIcSticker.react"),
				isActive: t.selectedExpressionPanel === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER,
				onClick: function() {
					return v(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER);
				},
				ref: u,
				size: o("WAWebComposeBoxPanelsMenuButton.react").SIZES.SQUARE26,
				containerXstyle: P.button,
				style: y(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER, k, t.theme, T)
			}, $ == null ? void 0 : $.openSticker))
		] }));
	}
	C.displayName = C.name + " [from " + i.id + "]", l.PanelsTheme = f, l.ComposeBoxExpressionPanelsMenu = C;
}), 226);
