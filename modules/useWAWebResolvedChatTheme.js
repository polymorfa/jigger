__d("useWAWebResolvedChatTheme", [
	"WAWebChatThemeEnums",
	"WAWebChatThemeValue",
	"WAWebUseChatTheme",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		var n, r = o("WAWebChatThemeValue").isChatThemeOverride(e) ? e : t;
		return { storedColorSchemeId: (n = r == null ? void 0 : r.colorSchemeId) != null ? n : null };
	}
	function s(e) {
		var t = o("react-compiler-runtime").c(15), n = e.isChatThemeEnabled, r = e.isDarkTheme, a = e.storedColorSchemeId, i = n && a != null ? a : null, l;
		t[0] !== n ? (l = { isChatThemeEnabled: n }, t[0] = n, t[1] = l) : l = t[1];
		var s = o("WAWebUseChatTheme").useLazyChatThemeDefinitions(l), u = r ? "dark" : "light", c;
		t[2] !== s || t[3] !== i || t[4] !== u ? (c = i != null && s != null ? s.getChatTheme(i, u) : null, t[2] = s, t[3] = i, t[4] = u, t[5] = c) : c = t[5];
		var d = c, m;
		t[6] !== i ? (m = i != null && o("WAWebChatThemeEnums").hasVibrantBubbleColor(i), t[6] = i, t[7] = m) : m = t[7];
		var p = m, _;
		t[8] !== s || t[9] !== i ? (_ = i != null && s != null && s.isMinimalScheme(i), t[8] = s, t[9] = i, t[10] = _) : _ = t[10];
		var f = _, g;
		return t[11] !== d || t[12] !== f || t[13] !== p ? (g = {
			chatThemeStyle: d,
			isMinimalScheme: f,
			isVibrant: p
		}, t[11] = d, t[12] = f, t[13] = p, t[14] = g) : g = t[14], g;
	}
	l.resolveStoredColorAndTheme = e, l.useResolvedChatTheme = s;
}), 98);
