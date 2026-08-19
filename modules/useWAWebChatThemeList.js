__d("useWAWebChatThemeList", [
	"WAWebSolidColorPalette",
	"WAWebStockWallpaper",
	"WAWebWallpaper",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useMemo;
	function u(e, t, n) {
		var r = o("react-compiler-runtime").c(22), a;
		r[0] !== e ? (a = e != null ? [].concat(e.getAllColorSchemes()).filter(function(t) {
			return !e.isMinimalScheme(t);
		}) : [], r[0] = e, r[1] = a) : a = r[1];
		var i = a, l;
		r[2] !== e ? (l = e != null ? e.getDoodleThemeOrder() : [], r[2] = e, r[3] = l) : l = r[3];
		var s = l, u;
		r[4] !== e ? (u = e != null ? o("WAWebStockWallpaper").getStockWallpaperPresets() : [], r[4] = e, r[5] = u) : u = r[5];
		var c = u, d;
		r[6] !== e ? (d = e != null ? o("WAWebStockWallpaper").getThemesWithStockWallpapers() : [], r[6] = e, r[7] = d) : d = r[7];
		var m = d, p;
		r[8] !== e ? (p = e != null ? o("WAWebStockWallpaper").getAllStockWallpaperPresets() : [], r[8] = e, r[9] = p) : p = r[9];
		var _ = p, f = t != null ? t : null, g;
		if (r[10] !== e || r[11] !== f || r[12] !== m) {
			var h;
			g = e != null && f != null && (h = m.find(function(t) {
				return e.getBaseTheme(t) === f;
			})) != null ? h : null, r[10] = e, r[11] = f, r[12] = m, r[13] = g;
		} else g = r[13];
		var y = g, C;
		e: {
			if (n != null && n !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER && f == null && o("WAWebSolidColorPalette").isSolidColor(n)) {
				C = n;
				break e;
			}
			C = null;
		}
		var b = C, v;
		return r[14] !== b || r[15] !== i || r[16] !== y || r[17] !== s || r[18] !== _ || r[19] !== c || r[20] !== m ? (v = {
			colorThemes: i,
			doodleThemes: s,
			wallpaperPresets: c,
			wallpaperThemes: m,
			wallpaperGridPresets: _,
			currentWallpaperTheme: y,
			activeSolidColorHex: b
		}, r[14] = b, r[15] = i, r[16] = y, r[17] = s, r[18] = _, r[19] = c, r[20] = m, r[21] = v) : v = r[21], v;
	}
	l.useChatThemeList = u;
}), 98);
