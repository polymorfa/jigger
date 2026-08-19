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
	"react-compiler-runtime",
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
		var n, a = o("react-compiler-runtime").c(24), i = t.chat, l;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (l = r("WAWebChatPreferenceCollection").getDefault(), a[0] = l) : l = a[0];
		var s = l, c;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (c = ["wallpaperValue", "chatThemeValue"], a[1] = c) : c = a[1];
		var d = o("useWAWebModelValues").useModelValues(s, c), g = d.chatThemeValue, y = d.wallpaperValue, C = (n = g == null ? void 0 : g.colorSchemeId) != null ? n : null, b;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? (b = o("WAWebChatThemeGatingUtils").isChatThemesEnabled(), a[2] = b) : b = a[2];
		var v = b, S;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (S = { isChatThemeEnabled: v }, a[3] = S) : S = a[3];
		var R = o("WAWebUseChatTheme").useLazyChatThemeDefinitions(S), L = o("WAWebThemeContext").useIsDarkTheme(), E = L ? "dark" : "light", k;
		a[4] !== E || a[5] !== y ? (k = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(y, E), a[4] = E, a[5] = y, a[6] = k) : k = a[6];
		var I = k, T = I.showDoodle, D = I.wallpaper, x = v && C != null && R != null ? R.getChatTheme(C, L ? "dark" : "light") : null, $ = m(null), P;
		a[7] === Symbol.for("react.memo_cache_sentinel") ? (P = new (r("WAWebMultiSelection"))([], h), a[7] = P) : P = a[7];
		var N = P, M = (e || (e = r("stylex"))).props(p.container, x), w;
		a[8] !== T || a[9] !== D ? (w = u.jsx(r("WAWebConversationBackground.react"), {
			wallpaper: D,
			showDoodle: T
		}), a[8] = T, a[9] = D, a[10] = w) : w = a[10];
		var A, F;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x1n2onr6 x1iyjqo2 xs83m0k x1r8uery x6ikm8r x10wlt62" }, F = { className: "x5yr21d" }, a[11] = A, a[12] = F) : (A = a[11], F = a[12]);
		var O;
		a[13] !== i || a[14] !== N ? (O = u.jsx("div", babelHelpers.extends({}, A, { children: u.jsx("div", babelHelpers.extends({}, F, { children: u.jsx(r("WAWebConversationMsgs.react"), {
			ref: $,
			chat: i,
			msgCollection: i.msgs,
			selectable: !1,
			focusCtx: null,
			selectedMessages: N,
			onMessageSelect: _,
			onSelectMessages: _,
			onCancelSelectMessages: _,
			notifyChatRendered: f,
			updateOpenedChatInfo: _,
			bottomBanners: null
		}) })) })), a[13] = i, a[14] = N, a[15] = O) : O = a[15];
		var B;
		a[16] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "x1c4vz4f x2lah0s xdl72j9" }, a[16] = B) : B = a[16];
		var W;
		a[17] !== i ? (W = u.jsx("div", babelHelpers.extends({}, B, { children: u.jsx(o("WAWebComposeBox.react").ComposeBox, {
			chat: i,
			onComposeHeightChange: r("WAWebNoop"),
			onPageUpDown: r("WAWebNoop")
		}) })), a[17] = i, a[18] = W) : W = a[18];
		var q;
		return a[19] !== O || a[20] !== W || a[21] !== M || a[22] !== w ? (q = u.jsxs("div", babelHelpers.extends({}, M, {
			"data-testid": "contact-info-chat-tab-full",
			children: [
				w,
				O,
				W
			]
		})), a[19] = O, a[20] = W, a[21] = M, a[22] = w, a[23] = q) : q = a[23], q;
	}
	function h(e) {
		return e.id.toString();
	}
	l.default = g;
}), 98);
