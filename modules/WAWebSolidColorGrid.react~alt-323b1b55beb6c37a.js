__d("WAWebSolidColorGrid.react", [
	"fbt",
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeValue",
	"WAWebKeyboardHotKeys.react",
	"WAWebSettingsSyncBridge",
	"WAWebSolidColorPalette",
	"WAWebSolidColorSwatch.react",
	"WAWebWallpaper",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues",
	"useWAWebRovingGridNavigation"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = o("react-compiler-runtime").c(24), a = e.chat, i = e.onSelect, l = e.showDoodle, c = e.themeMode, d;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (d = r("WAWebChatPreferenceCollection").get("defaultPreference"), n[0] = d) : d = n[0];
		var m = d, p;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (p = ["wallpaperValue", "chatThemeValue"], n[1] = p) : p = n[1];
		var _ = o("useWAWebModelValues").useOptionalModelValues(a, p), f;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (f = ["wallpaperValue"], n[2] = f) : f = n[2];
		var g = o("useWAWebModelValues").useOptionalModelValues(m, f), h = o("WAWebSolidColorPalette").getSolidColors(c), y = a == null, C;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebChatThemeGatingUtils").isChatThemesEnabled(), n[3] = C) : C = n[3];
		var b = C, v;
		n[4] !== (_ == null ? void 0 : _.wallpaperValue) || n[5] !== (g == null ? void 0 : g.wallpaperValue) ? (v = b && o("WAWebChatThemeValue").isWallpaperOverride(_ == null ? void 0 : _.wallpaperValue) ? _ == null ? void 0 : _.wallpaperValue : g == null ? void 0 : g.wallpaperValue, n[4] = _ == null ? void 0 : _.wallpaperValue, n[5] = g == null ? void 0 : g.wallpaperValue, n[6] = v) : v = n[6];
		var S = v, R = S != null ? o("WAWebChatThemeValue").wallpaperValueToHex(S, c) : null, L = b && (_ == null || (t = _.chatThemeValue) == null ? void 0 : t.chatThemeId) != null && (R == null || R === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER), E = L ? null : R, k = function(t) {
			if (E == null) return !1;
			if (o("WAWebSolidColorPalette").isDefaultSolidColor(t)) return E === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER;
			var e = o("WAWebSolidColorPalette").findPaletteIndex(E), n = o("WAWebSolidColorPalette").findPaletteIndex(t);
			return e !== -1 && e === n;
		}, I;
		n[7] !== a || n[8] !== _ || n[9] !== y || n[10] !== i || n[11] !== c ? (I = async function(t) {
			var e = o("WAWebSolidColorPalette").isDefaultSolidColor(t) ? o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER : t;
			if (b && a != null && _ != null) {
				var n, r = _.wallpaperValue, l = o("WAWebChatThemeValue").doodleFromWallpaperValue(r);
				if (await a.setWallpaperValue(o("WAWebChatThemeValue").wallpaperValueFromFlat({
					wallpaper: e,
					showDoodle: l,
					stockWallpaperImageId: null
				})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(e), a.id.toJid()), ((n = _.chatThemeValue) == null ? void 0 : n.chatThemeId) != null) {
					var s, u;
					await a.setChatThemeValue({
						chatThemeId: null,
						colorSchemeId: (s = (u = _.chatThemeValue) == null ? void 0 : u.colorSchemeId) != null ? s : null
					}), o("WAWebSettingsSyncBridge").sendSettingChange("chatThemeId", "", a.id.toJid());
				}
			} else if (!(!y || m == null)) {
				var d = m.wallpaperValue, p = d != null ? o("WAWebChatThemeValue").wallpaperValueToHex(d, c) : null;
				if (e !== p) {
					var f = o("WAWebChatThemeValue").doodleFromWallpaperValue(d);
					m.set("wallpaperValue", o("WAWebChatThemeValue").wallpaperValueFromFlat({
						wallpaper: e,
						showDoodle: f,
						stockWallpaperImageId: null
					})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(e));
				}
			}
			i == null || i();
		}, n[7] = a, n[8] = _, n[9] = y, n[10] = i, n[11] = c, n[12] = I) : I = n[12];
		var T = I, D = h.findIndex(k), x = D !== -1 ? D : 0, $ = o("useWAWebRovingGridNavigation").useWAWebRovingGridNavigation({
			initialFocusIndex: x,
			itemCount: h.length,
			movement: o("useWAWebRovingGridNavigation").createVerticalGridMovement()
		}), P = $.getItemProps, N = $.gridRef, M = $.handlers, w = o("WAWebKeyboardHotKeys.react").HotKeys, A = "radiogroup", F;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
			/*BTDS*/
			""
		), n[13] = F) : F = n[13];
		var O = "solid_color_grid", B;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "xrvj5dj x1t59k0s xl56j7k xs2akgl x1f0uite x1h678fw xv6tirj xcldk2z x1phvje8" }, n[14] = B) : B = n[14];
		var W = h.map(function(e, t) {
			var n = P(t);
			return u.jsx(r("WAWebSolidColorSwatch.react"), {
				colorHex: e,
				colorName: o("WAWebSolidColorPalette").getSolidColorName(e),
				doodleOpacity: o("WAWebSolidColorPalette").getSolidColorDoodleOpacity(e, c),
				isDefault: o("WAWebSolidColorPalette").isDefaultSolidColor(e),
				isSelected: k(e),
				onBlur: n.onBlur,
				onClick: function() {
					return void T(e);
				},
				onFocus: n.onFocus,
				ref: n.ref,
				showDoodle: l,
				tabIndex: n.tabIndex
			}, t);
		}), q;
		n[15] !== N || n[16] !== B || n[17] !== W ? (q = u.jsx("div", babelHelpers.extends({
			ref: N,
			"data-testid": O
		}, B, { children: W })), n[15] = N, n[16] = B, n[17] = W, n[18] = q) : q = n[18];
		var U;
		return n[19] !== w || n[20] !== M || n[21] !== q || n[22] !== F ? (U = u.jsx(w, {
			handlers: M,
			role: A,
			"aria-label": F,
			children: q
		}), n[19] = w, n[20] = M, n[21] = q, n[22] = F, n[23] = U) : U = n[23], U;
	}
	l.default = c;
}), 226);
