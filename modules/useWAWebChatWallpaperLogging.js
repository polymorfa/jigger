__d("useWAWebChatWallpaperLogging", [
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeLogger",
	"WAWebChatWallpaperWamType",
	"WAWebWamEnumChatWallpaperEntryType",
	"WAWebWamEnumDeviceAppearanceType",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useEffectEvent, d = s.useRef;
	function m(e, t, n, r, a) {
		var i = o("react-compiler-runtime").c(17), l = d(!1), s = d(!1), m;
		i[0] !== n || i[1] !== r || i[2] !== e || i[3] !== a ? (m = function() {
			var t;
			n ? t = o("WAWebWamEnumChatWallpaperEntryType").CHAT_WALLPAPER_ENTRY_TYPE.APP_WIDE : r ? t = o("WAWebWamEnumChatWallpaperEntryType").CHAT_WALLPAPER_ENTRY_TYPE.GROUP : t = o("WAWebWamEnumChatWallpaperEntryType").CHAT_WALLPAPER_ENTRY_TYPE.ONE_TO_ONE, o("WAWebChatThemeLogger").logChatWallpaperEvent({
				appearanceType: e === "dark" ? o("WAWebWamEnumDeviceAppearanceType").DEVICE_APPEARANCE_TYPE.DARK : o("WAWebWamEnumDeviceAppearanceType").DEVICE_APPEARANCE_TYPE.LIGHT,
				chatWallpaperChangeApplied: s.current,
				chatWallpaperSource: t,
				chatWallpaperType: o("WAWebChatWallpaperWamType").wamWallpaperType(a, e),
				chatWallpaperVisit: !0
			});
		}, i[0] = n, i[1] = r, i[2] = e, i[3] = a, i[4] = m) : m = i[4];
		var p = m, _;
		i[5] !== t || i[6] !== p ? (_ = function() {
			o("WAWebChatThemeGatingUtils").isChatThemeLoggingEnabled() && l.current && (t === "wallpaper" || t === "solidColor") && p();
		}, i[5] = t, i[6] = p, i[7] = _) : _ = i[7];
		var f = c(_), g;
		i[8] !== f ? (g = function() {
			return (function() {
				return f();
			});
		}, i[8] = f, i[9] = g) : g = i[9];
		var h;
		i[10] === Symbol.for("react.memo_cache_sentinel") ? (h = [], i[10] = h) : h = i[10], u(g, h);
		var y;
		i[11] !== p ? (y = function() {
			o("WAWebChatThemeGatingUtils").isChatThemeLoggingEnabled() && l.current && (p(), l.current = !1);
		}, i[11] = p, i[12] = y) : y = i[12];
		var C, b;
		i[13] === Symbol.for("react.memo_cache_sentinel") ? (C = function() {
			s.current = !0;
		}, b = function() {
			l.current = !0, s.current = !1;
		}, i[13] = C, i[14] = b) : (C = i[13], b = i[14]);
		var v;
		return i[15] !== y ? (v = {
			logWallpaperOnBack: y,
			markWallpaperChangeApplied: C,
			markWallpaperVisited: b
		}, i[15] = y, i[16] = v) : v = i[16], v;
	}
	l.useChatWallpaperLogging = m;
}), 98);
