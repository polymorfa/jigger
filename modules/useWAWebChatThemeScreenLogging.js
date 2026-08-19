__d("useWAWebChatThemeScreenLogging", [
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeLogger",
	"WAWebChatWallpaperWamType",
	"WAWebWamEnumChatThemeEntryType",
	"WAWebWamEnumDeviceAppearanceType",
	"react",
	"react-compiler-runtime",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef;
	function d(e, t, n, a, i, l, s) {
		var d = o("react-compiler-runtime").c(13), m = c(null), p = c(null), _ = c(!1), f = c(!1), g, h;
		d[0] !== e || d[1] !== t || d[2] !== s ? (g = function() {
			s && !_.current && (m.current = e, p.current = t, _.current = !0);
		}, h = [
			s,
			e,
			t
		], d[0] = e, d[1] = t, d[2] = s, d[3] = g, d[4] = h) : (g = d[3], h = d[4]), u(g, h);
		var y;
		d[5] !== e || d[6] !== t || d[7] !== a || d[8] !== i || d[9] !== n || d[10] !== l ? (y = function() {
			if (!(!o("WAWebChatThemeGatingUtils").isChatThemeLoggingEnabled() || !_.current)) {
				var r = e !== m.current, s = t !== p.current, u = n === "dark" ? o("WAWebWamEnumDeviceAppearanceType").DEVICE_APPEARANCE_TYPE.DARK : o("WAWebWamEnumDeviceAppearanceType").DEVICE_APPEARANCE_TYPE.LIGHT, c = o("WAWebChatWallpaperWamType").wamWallpaperType(l, n), d;
				a ? d = o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE.APP_WIDE : i ? d = o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE.GROUP : d = o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE.ONE_TO_ONE, o("WAWebChatThemeLogger").logChatThemeScreenEvent({
					appearanceType: u,
					chatThemeChangeApplied: f.current,
					chatThemeId: r && e != null ? e : "",
					chatThemeSource: d,
					chatWallpaperType: c,
					colorSchemeId: s && t != null ? t : void 0
				});
			}
		}, d[5] = e, d[6] = t, d[7] = a, d[8] = i, d[9] = n, d[10] = l, d[11] = y) : y = d[11], r("useWAWebOnUnmount")(y);
		var C;
		return d[12] === Symbol.for("react.memo_cache_sentinel") ? (C = { markThemeChangeApplied: function() {
			f.current = !0;
		} }, d[12] = C) : C = d[12], C;
	}
	l.useChatThemeScreenLogging = d;
}), 98);
