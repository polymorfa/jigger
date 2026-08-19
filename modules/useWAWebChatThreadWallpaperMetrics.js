__d("useWAWebChatThreadWallpaperMetrics", [
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeLogger",
	"WAWebChatThemeValue",
	"WAWebChatThreadLogging",
	"WAWebSolidColorPalette",
	"WAWebThemeContext",
	"WAWebWallpaper",
	"WAWebWamEnumChatThemeEntryType",
	"WAWebWamEnumDeviceAppearanceType",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useEffectEvent, d = "doodle@whatsapp-green#tonal";
	function m(e) {
		var t, r, a, i = o("react-compiler-runtime").c(9), l;
		if (i[0] !== ((t = e.chatThemeValue) == null ? void 0 : t.chatThemeId) || i[1] !== ((r = e.chatThemeValue) == null ? void 0 : r.colorSchemeId) || i[2] !== ((a = e.groupMetadata) == null ? void 0 : a.parentGroup) || i[3] !== e.id || i[4] !== e.wallpaperValue) {
			var s, m, p;
			l = (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var t, n, r, a = o("WAWebThemeContext").isDarkTheme(), i = e.wallpaperValue, l = i != null && i.type === "solid", s = i != null && i.type === "solid" ? o("WAWebChatThemeValue").wallpaperValueToHex(i, a ? "dark" : "light") : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER, u = a ? o("WAWebWamEnumDeviceAppearanceType").DEVICE_APPEARANCE_TYPE.DARK : o("WAWebWamEnumDeviceAppearanceType").DEVICE_APPEARANCE_TYPE.LIGHT, c = (t = (n = e.chatThemeValue) == null ? void 0 : n.chatThemeId) != null ? t : null, m = c != null, p, _, f;
					if (o("WAWebChatThemeGatingUtils").isChatThemesEnabled()) {
						var g, h;
						m ? e.id.isGroup() ? p = o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE.GROUP : p = o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE.ONE_TO_ONE : p = o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE.APP_WIDE, _ = c != null ? c : d;
						var y = (g = (h = e.chatThemeValue) == null ? void 0 : h.colorSchemeId) != null ? g : null;
						f = y != null ? y : void 0;
					}
					var C = yield o("WAWebChatThreadLogging").getChatThreadID(e.id.toJid()), b = i != null && i.type !== "default" || m;
					o("WAWebChatThemeLogger").logChatThreadWallpaperEvent({
						appearanceType: u,
						belongsToCommunity: ((r = e.groupMetadata) == null ? void 0 : r.parentGroup) != null,
						chatThemeId: _,
						chatThemeSource: p,
						chatWid: e.id,
						colorSchemeId: f,
						threadId: C,
						wallpaperApplied: b,
						wallpaperId: l ? String(o("WAWebSolidColorPalette").findPaletteIndex(s)) : void 0
					});
				});
				return function() {
					return t.apply(this, arguments);
				};
			})(), i[0] = (s = e.chatThemeValue) == null ? void 0 : s.chatThemeId, i[1] = (m = e.chatThemeValue) == null ? void 0 : m.colorSchemeId, i[2] = (p = e.groupMetadata) == null ? void 0 : p.parentGroup, i[3] = e.id, i[4] = e.wallpaperValue, i[5] = l;
		} else l = i[5];
		var _ = c(l), f;
		i[6] !== _ ? (f = function() {
			if (o("WAWebChatThemeGatingUtils").isChatThemeLoggingEnabled()) {
				var e = self.setTimeout(function() {
					_();
				}, 1e3);
				return (function() {
					self.clearTimeout(e);
				});
			}
		}, i[6] = _, i[7] = f) : f = i[7];
		var g;
		i[8] === Symbol.for("react.memo_cache_sentinel") ? (g = [], i[8] = g) : g = i[8], u(f, g);
	}
	l.useChatThreadWallpaperMetrics = m;
}), 98);
