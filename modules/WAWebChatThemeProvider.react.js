__d("WAWebChatThemeProvider.react", [
	"WAWebChatPreferenceCollection",
	"WAWebChatPreferenceModel",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeModeContext",
	"WAWebThemeContext",
	"react",
	"react-compiler-runtime",
	"useWAWebChatThemeModeValue",
	"useWAWebModelValues",
	"useWAWebResolvedChatTheme"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(13), n = e.chat, a = e.children, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = r("WAWebChatPreferenceCollection").get(o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE), t[0] = i) : i = t[0];
		var l = i, u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = ["chatThemeValue"], t[1] = u) : u = t[1];
		var c = o("useWAWebModelValues").useOptionalModelValues(l, u), d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = ["chatThemeValue"], t[2] = d) : d = t[2];
		var m = o("useWAWebModelValues").useOptionalModelValues(n, d), p = o("WAWebThemeContext").useIsDarkTheme(), _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = o("WAWebChatThemeGatingUtils").isChatThemesEnabled(), t[3] = _) : _ = t[3];
		var f = _, g = f ? m == null ? void 0 : m.chatThemeValue : null, h = c == null ? void 0 : c.chatThemeValue, y;
		t[4] !== g || t[5] !== h ? (y = o("useWAWebResolvedChatTheme").resolveStoredColorAndTheme(g, h), t[4] = g, t[5] = h, t[6] = y) : y = t[6];
		var C = y, b = C.storedColorSchemeId, v;
		t[7] !== p || t[8] !== b ? (v = {
			isChatThemeEnabled: f,
			storedColorSchemeId: b,
			isDarkTheme: p
		}, t[7] = p, t[8] = b, t[9] = v) : v = t[9];
		var S = o("useWAWebResolvedChatTheme").useResolvedChatTheme(v), R = S.chatThemeStyle, L = S.isVibrant, E = r("useWAWebChatThemeModeValue")(R, L), k;
		return t[10] !== a || t[11] !== E ? (k = s.jsx(r("WAWebChatThemeModeContext").Provider, {
			value: E,
			children: a
		}), t[10] = a, t[11] = E, t[12] = k) : k = t[12], k;
	}
	l.default = u;
}), 98);
