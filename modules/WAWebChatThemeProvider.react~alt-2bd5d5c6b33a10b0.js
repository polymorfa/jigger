__d("WAWebChatThemeProvider.react", [
	"WAWebChatPreferenceCollection",
	"WAWebChatPreferenceModel",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeModeContext",
	"WAWebThemeContext",
	"react",
	"useWAWebChatThemeModeValue",
	"useWAWebModelValues",
	"useWAWebResolvedChatTheme"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.chat, n = e.children, a = r("WAWebChatPreferenceCollection").get(o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE), i = o("useWAWebModelValues").useOptionalModelValues(a, ["chatThemeValue"]), l = o("useWAWebModelValues").useOptionalModelValues(t, ["chatThemeValue"]), u = o("WAWebThemeContext").useIsDarkTheme(), c = o("WAWebChatThemeGatingUtils").isChatThemesEnabled(), d = o("useWAWebResolvedChatTheme").resolveStoredColorAndTheme(c ? l == null ? void 0 : l.chatThemeValue : null, i == null ? void 0 : i.chatThemeValue), m = d.storedColorSchemeId, p = o("useWAWebResolvedChatTheme").useResolvedChatTheme({
			isChatThemeEnabled: c,
			storedColorSchemeId: m,
			isDarkTheme: u
		}), _ = p.chatThemeStyle, f = p.isVibrant, g = r("useWAWebChatThemeModeValue")(_, f);
		return s.jsx(r("WAWebChatThemeModeContext").Provider, {
			value: g,
			children: n
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
