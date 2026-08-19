__d("WAWebContactInfoChatTabFull.react", [
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeValue",
	"WAWebComposeBox.react",
	"WAWebConversationBackground.react",
	"WAWebConversationMsgs.react",
	"WAWebMultiSelection",
	"WAWebNoop",
	"WAWebThemeContext",
	"WAWebUseChatTheme",
	"react",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useMemo, m = c.useRef, p = { container: {
		position: "x1n2onr6",
		display: "x78zum5",
		flexDirection: "xdt5ytf",
		height: "x5yr21d",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		backgroundColor: "x1q80dvb",
		$$css: !0
	} };
	function _() {}
	function f(e) {}
	function g(t) {
		var n, a = t.chat, i = r("WAWebChatPreferenceCollection").getDefault(), l = o("useWAWebModelValues").useModelValues(i, ["wallpaperValue", "chatThemeValue"]), s = l.chatThemeValue, c = l.wallpaperValue, g = (n = s == null ? void 0 : s.colorSchemeId) != null ? n : null, h = o("WAWebChatThemeGatingUtils").isChatThemesEnabled(), y = o("WAWebUseChatTheme").useLazyChatThemeDefinitions({ isChatThemeEnabled: h }), C = o("WAWebThemeContext").useIsDarkTheme(), b = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(c, C ? "dark" : "light"), v = b.showDoodle, S = b.wallpaper, R = h && g != null && y != null ? y.getChatTheme(g, C ? "dark" : "light") : null, L = m(null), E = d(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id.toString();
			});
		}, []);
		return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.container, R), {
			"data-testid": "contact-info-chat-tab-full",
			children: [
				u.jsx(r("WAWebConversationBackground.react"), {
					wallpaper: S,
					showDoodle: v
				}),
				u.jsx("div", {
					className: "x1n2onr6 x1iyjqo2 xs83m0k x1r8uery x6ikm8r x10wlt62",
					children: u.jsx("div", {
						className: "x5yr21d",
						children: u.jsx(r("WAWebConversationMsgs.react"), {
							ref: L,
							chat: a,
							msgCollection: a.msgs,
							selectable: !1,
							focusCtx: null,
							selectedMessages: E,
							onMessageSelect: _,
							onSelectMessages: _,
							onCancelSelectMessages: _,
							notifyChatRendered: f,
							updateOpenedChatInfo: _,
							bottomBanners: null
						})
					})
				}),
				u.jsx("div", {
					className: "x1c4vz4f x2lah0s xdl72j9",
					children: u.jsx(o("WAWebComposeBox.react").ComposeBox, {
						chat: a,
						onComposeHeightChange: r("WAWebNoop"),
						onPageUpDown: r("WAWebNoop")
					})
				})
			]
		}));
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
