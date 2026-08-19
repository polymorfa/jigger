__d("useWAWebWallpaperState", [
	"WALogger",
	"WAWebChatThemeEvents",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeValue",
	"WAWebChatWallpaperRenderState",
	"WAWebThemeContext",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues",
	"useWAWebResolvedChatTheme"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = u.useEffect, d = u.useState;
	function m(e) {
		var t = o("react-compiler-runtime").c(37), n = e.chat, r = e.chatPreference, a = e.showPreview, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ["wallpaperValue", "chatThemeValue"], t[0] = i) : i = t[0];
		var l = o("useWAWebModelValues").useModelValues(r, i), s;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = ["wallpaperValue", "chatThemeValue"], t[1] = s) : s = t[1];
		var u = o("useWAWebModelValues").useOptionalModelValues(n, s), m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = o("WAWebChatThemeGatingUtils").isChatThemesEnabled(), t[2] = m) : m = t[2];
		var _ = m, f = o("WAWebThemeContext").useIsDarkTheme(), g, h;
		t[3] !== n ? (g = function() {
			n != null && _ && n.persistDerivedThemeValuesIfNeeded().catch(p);
		}, h = [n, _], t[3] = n, t[4] = g, t[5] = h) : (g = t[4], h = t[5]), c(g, h);
		var y = _ ? u == null ? void 0 : u.chatThemeValue : null, C;
		t[6] !== y || t[7] !== l.chatThemeValue ? (C = o("useWAWebResolvedChatTheme").resolveStoredColorAndTheme(y, l.chatThemeValue), t[6] = y, t[7] = l.chatThemeValue, t[8] = C) : C = t[8];
		var b = C, v = b.storedColorSchemeId, S;
		t[9] !== f || t[10] !== v ? (S = {
			isChatThemeEnabled: _,
			storedColorSchemeId: v,
			isDarkTheme: f
		}, t[9] = f, t[10] = v, t[11] = S) : S = t[11];
		var R = o("useWAWebResolvedChatTheme").useResolvedChatTheme(S), L = R.chatThemeStyle, E = R.isMinimalScheme, k = R.isVibrant, I = d(null), T = I[0], D = I[1], x;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (x = function(t) {
			var e;
			D((e = t.hex) != null ? e : null);
		}, t[12] = x) : x = t[12], o("WAWebChatThemeEvents").useWallpaperPreviewListener(x);
		var $ = d(!1), P = $[0], N = $[1], M;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (M = function(t) {
			N(t.active);
		}, t[13] = M) : M = t[13], o("WAWebChatThemeEvents").useMinimalModeActiveListener(M);
		var w = a == null && _ ? u == null ? void 0 : u.wallpaperValue : null, A;
		t[14] !== w || t[15] !== l.wallpaperValue ? (A = o("WAWebChatThemeValue").isWallpaperOverride(w) ? w : l.wallpaperValue, t[14] = w, t[15] = l.wallpaperValue, t[16] = A) : A = t[16];
		var F = A, O = P || E, B;
		t[17] !== O || t[18] !== f || t[19] !== E || t[20] !== F || t[21] !== T ? (B = o("WAWebChatWallpaperRenderState").deriveChatWallpaperRenderState({
			effectiveMinimalMode: O,
			isMinimalScheme: E,
			isDarkTheme: f,
			wallpaperValue: F,
			wallpaperPreview: T
		}), t[17] = O, t[18] = f, t[19] = E, t[20] = F, t[21] = T, t[22] = B) : B = t[22];
		var W = B, q;
		t[23] !== W.solidWallpaperHex ? (q = W.solidWallpaperHex != null ? { backgroundColor: W.solidWallpaperHex } : null, t[23] = W.solidWallpaperHex, t[24] = q) : q = t[24];
		var U;
		t[25] !== W.cssVariableOverrides || t[26] !== q ? (U = babelHelpers.extends({}, W.cssVariableOverrides, q), t[25] = W.cssVariableOverrides, t[26] = q, t[27] = U) : U = t[27];
		var V = U, H;
		return t[28] !== V || t[29] !== L || t[30] !== f || t[31] !== k || t[32] !== W.displayWallpaper || t[33] !== W.showDoodle || t[34] !== W.showStockWallpaper || t[35] !== W.stockWallpaperUrl ? (H = {
			chatThemeStyle: L,
			backgroundWrapperStyle: V,
			stockWallpaperUrl: W.stockWallpaperUrl,
			showStockWallpaper: W.showStockWallpaper,
			isDarkTheme: f,
			displayWallpaper: W.displayWallpaper,
			showDoodle: W.showDoodle,
			isVibrant: k
		}, t[28] = V, t[29] = L, t[30] = f, t[31] = k, t[32] = W.displayWallpaper, t[33] = W.showDoodle, t[34] = W.showStockWallpaper, t[35] = W.stockWallpaperUrl, t[36] = H) : H = t[36], H;
	}
	function p(t) {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to persist derived chat theme values"]))).catching(r("getErrorSafe")(t)).sendLogs("chat-theme-persist-derived-failed");
	}
	l.useWallpaperState = m;
}), 98);
