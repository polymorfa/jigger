__d("useWAWebChatThemeRenderState", [
	"WAWebChatThemeValue",
	"WAWebChatWallpaperRenderState",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useMemo;
	function u(e) {
		var t = o("react-compiler-runtime").c(13), n = e.activeWallpaperId, r = e.chatThemeModule, a = e.currentThemeId, i = e.effectiveChatThemeId, l = e.effectiveWallpaper, s = e.isDoodleEnabled, u = e.minimalModeActive, c = e.themeMode, d;
		t[0] !== r || t[1] !== a ? (d = r != null && a != null && r.isMinimalScheme(a), t[0] = r, t[1] = a, t[2] = d) : d = t[2];
		var m = d, p;
		t[3] !== r || t[4] !== i ? (p = r != null && i != null && r.isMinimalScheme(i), t[3] = r, t[4] = i, t[5] = p) : p = t[5];
		var _ = p, f = u || _, g;
		e: {
			if (r == null) {
				g = null;
				break e;
			}
			var h;
			if (t[6] !== n || t[7] !== f || t[8] !== l || t[9] !== m || t[10] !== s || t[11] !== c) {
				var y = o("WAWebChatThemeValue").wallpaperValueFromFlat({
					wallpaper: l,
					showDoodle: s,
					stockWallpaperImageId: n
				});
				h = o("WAWebChatWallpaperRenderState").deriveChatWallpaperRenderState({
					effectiveMinimalMode: f,
					isMinimalScheme: m,
					isDarkTheme: c === "dark",
					wallpaperValue: y,
					wallpaperPreview: null
				}), t[6] = n, t[7] = f, t[8] = l, t[9] = m, t[10] = s, t[11] = c, t[12] = h;
			} else h = t[12];
			g = h;
		}
		return g;
	}
	l.useChatThemeRenderState = u;
}), 98);
