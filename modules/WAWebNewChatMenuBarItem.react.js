__d("WAWebNewChatMenuBarItem.react", [
	"fbt",
	"WAWebABProps",
	"WAWebActions",
	"WAWebMobilePlatforms",
	"WAWebNewChatButtonGatingUtils",
	"WAWebNewChatOutlineIcon.react",
	"WAWebTabOrder",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSIconWdsIcNewChatFilled.react",
	"WDSMenuBarItem.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(21), n = e.chatListVisible, a = e.onNewChat, i = o("WAWebNewChatButtonGatingUtils").getNewChatButtonVariant(), l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebABProps").getABPropConfigValue("wa_web_match_primary_icons"), t[0] = l) : l = t[0];
		var c = l, d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = c && o("WAWebMobilePlatforms").isIOSPrimary(), t[1] = d) : d = t[1];
		var m = d, p;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = c && o("WAWebMobilePlatforms").isAndroidPrimary(), t[2] = p) : p = t[2];
		var _ = p, f;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[3] = f) : f = t[3];
		var g = f;
		switch (i) {
			case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant.FILLED_ICON_BUTTON: {
				var h = !n, y;
				t[4] !== a || t[5] !== h ? (y = u.jsx(r("WDSButton.react"), {
					testid: "menu-bar-chat",
					Icon: r("WDSIconWdsIcNewChatFilled.react"),
					"aria-label": g,
					onPress: a,
					variant: "filled",
					type: "default",
					size: "medium",
					disabled: h
				}, "btn-new-chat"), t[4] = a, t[5] = h, t[6] = y) : y = t[6];
				var C = y, b;
				return t[7] !== C || t[8] !== n ? (b = n ? u.jsx(r("WDSTooltip.react"), {
					label: g,
					shortcut: o("WAWebActions").Action.OPEN_NEW_CHAT,
					children: C
				}) : C, t[7] = C, t[8] = n, t[9] = b) : b = t[9], b;
			}
			case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant.FILLED_TEXT_BUTTON: {
				var v, S;
				t[10] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
					/*BTDS*/
					""
				), S = s._(
					/*BTDS*/
					""
				), t[10] = v, t[11] = S) : (v = t[10], S = t[11]);
				var R = n ? o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER : void 0, L = !n, E;
				return t[12] !== a || t[13] !== R || t[14] !== L ? (E = u.jsx(r("WDSMenuBarItem.react"), {
					testid: "menu-bar-chat",
					icon: r("WDSIconWdsIcNewChatFilled.react"),
					onClick: a,
					title: v,
					label: S,
					buttonVariant: "filled",
					tabOrder: R,
					disabled: L,
					keyboardShortcutAction: o("WAWebActions").Action.OPEN_NEW_CHAT
				}, "btn-new-chat"), t[12] = a, t[13] = R, t[14] = L, t[15] = E) : E = t[15], E;
			}
			case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant.CONTROL: {
				var k;
				t[16] === Symbol.for("react.memo_cache_sentinel") ? (k = (function(e) {
					return m ? r("WDSIconIcAdd.react") : _ ? r("WDSIconWdsIcNewChatFilled.react") : o("WAWebNewChatOutlineIcon.react").NewChatOutlineIcon;
				})(!0), t[16] = k) : k = t[16];
				var I = k, T = m || _ ? "filled" : "borderless", D = n ? o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER : void 0, x = !n, $;
				return t[17] !== a || t[18] !== D || t[19] !== x ? ($ = u.jsx(r("WDSMenuBarItem.react"), {
					testid: "menu-bar-chat",
					icon: I,
					onClick: a,
					title: g,
					buttonVariant: T,
					tabOrder: D,
					disabled: x,
					keyboardShortcutAction: o("WAWebActions").Action.OPEN_NEW_CHAT
				}, "btn-new-chat"), t[17] = a, t[18] = D, t[19] = x, t[20] = $) : $ = t[20], $;
			}
		}
	}
	l.default = c;
}), 226);
