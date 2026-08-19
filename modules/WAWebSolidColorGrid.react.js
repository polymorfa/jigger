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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues",
	"useWAWebRovingGridNavigation"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, a = o("react-compiler-runtime").c(24), i = e.chat, l = e.onSelect, c = e.showDoodle, d = e.themeMode, m;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (m = r("WAWebChatPreferenceCollection").get("defaultPreference"), a[0] = m) : m = a[0];
		var p = m, _;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (_ = ["wallpaperValue", "chatThemeValue"], a[1] = _) : _ = a[1];
		var f = o("useWAWebModelValues").useOptionalModelValues(i, _), g;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? (g = ["wallpaperValue"], a[2] = g) : g = a[2];
		var h = o("useWAWebModelValues").useOptionalModelValues(p, g), y = o("WAWebSolidColorPalette").getSolidColors(d), C = i == null, b;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (b = o("WAWebChatThemeGatingUtils").isChatThemesEnabled(), a[3] = b) : b = a[3];
		var v = b, S;
		a[4] !== (f == null ? void 0 : f.wallpaperValue) || a[5] !== (h == null ? void 0 : h.wallpaperValue) ? (S = v && o("WAWebChatThemeValue").isWallpaperOverride(f == null ? void 0 : f.wallpaperValue) ? f == null ? void 0 : f.wallpaperValue : h == null ? void 0 : h.wallpaperValue, a[4] = f == null ? void 0 : f.wallpaperValue, a[5] = h == null ? void 0 : h.wallpaperValue, a[6] = S) : S = a[6];
		var R = S, L = R != null ? o("WAWebChatThemeValue").wallpaperValueToHex(R, d) : null, E = v && (f == null || (t = f.chatThemeValue) == null ? void 0 : t.chatThemeId) != null && (L == null || L === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER), k = E ? null : L, I = function(t) {
			if (k == null) return !1;
			if (o("WAWebSolidColorPalette").isDefaultSolidColor(t)) return k === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER;
			var e = o("WAWebSolidColorPalette").findPaletteIndex(k), n = o("WAWebSolidColorPalette").findPaletteIndex(t);
			return e !== -1 && e === n;
		}, T;
		a[7] !== i || a[8] !== f || a[9] !== C || a[10] !== l || a[11] !== d ? (T = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = o("WAWebSolidColorPalette").isDefaultSolidColor(e) ? o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER : e;
				if (v && i != null && f != null) {
					var n, r = f.wallpaperValue, a = o("WAWebChatThemeValue").doodleFromWallpaperValue(r);
					if (yield i.setWallpaperValue(o("WAWebChatThemeValue").wallpaperValueFromFlat({
						wallpaper: t,
						showDoodle: a,
						stockWallpaperImageId: null
					})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(t), i.id.toJid()), ((n = f.chatThemeValue) == null ? void 0 : n.chatThemeId) != null) {
						var s, u;
						yield i.setChatThemeValue({
							chatThemeId: null,
							colorSchemeId: (s = (u = f.chatThemeValue) == null ? void 0 : u.colorSchemeId) != null ? s : null
						}), o("WAWebSettingsSyncBridge").sendSettingChange("chatThemeId", "", i.id.toJid());
					}
				} else if (!(!C || p == null)) {
					var c = p.wallpaperValue, m = c != null ? o("WAWebChatThemeValue").wallpaperValueToHex(c, d) : null;
					if (t !== m) {
						var _ = o("WAWebChatThemeValue").doodleFromWallpaperValue(c);
						p.set("wallpaperValue", o("WAWebChatThemeValue").wallpaperValueFromFlat({
							wallpaper: t,
							showDoodle: _,
							stockWallpaperImageId: null
						})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(t));
					}
				}
				l == null || l();
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), a[7] = i, a[8] = f, a[9] = C, a[10] = l, a[11] = d, a[12] = T) : T = a[12];
		var D = T, x = y.findIndex(I), $ = x !== -1 ? x : 0, P = o("useWAWebRovingGridNavigation").useWAWebRovingGridNavigation({
			initialFocusIndex: $,
			itemCount: y.length,
			movement: o("useWAWebRovingGridNavigation").createVerticalGridMovement()
		}), N = P.getItemProps, M = P.gridRef, w = P.handlers, A = o("WAWebKeyboardHotKeys.react").HotKeys, F = "radiogroup", O;
		a[13] === Symbol.for("react.memo_cache_sentinel") ? (O = s._(
			/*BTDS*/
			""
		), a[13] = O) : O = a[13];
		var B = "solid_color_grid", W;
		a[14] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "xrvj5dj x1t59k0s xl56j7k xs2akgl x1f0uite x1h678fw xv6tirj xcldk2z x1phvje8" }, a[14] = W) : W = a[14];
		var q = y.map(function(e, t) {
			var n = N(t);
			return u.jsx(r("WAWebSolidColorSwatch.react"), {
				colorHex: e,
				colorName: o("WAWebSolidColorPalette").getSolidColorName(e),
				doodleOpacity: o("WAWebSolidColorPalette").getSolidColorDoodleOpacity(e, d),
				isDefault: o("WAWebSolidColorPalette").isDefaultSolidColor(e),
				isSelected: I(e),
				onBlur: n.onBlur,
				onClick: function() {
					return void D(e);
				},
				onFocus: n.onFocus,
				ref: n.ref,
				showDoodle: c,
				tabIndex: n.tabIndex
			}, t);
		}), U;
		a[15] !== M || a[16] !== W || a[17] !== q ? (U = u.jsx("div", babelHelpers.extends({
			ref: M,
			"data-testid": B
		}, W, { children: q })), a[15] = M, a[16] = W, a[17] = q, a[18] = U) : U = a[18];
		var V;
		return a[19] !== A || a[20] !== w || a[21] !== U || a[22] !== O ? (V = u.jsx(A, {
			handlers: w,
			role: F,
			"aria-label": O,
			children: U
		}), a[19] = A, a[20] = w, a[21] = U, a[22] = O, a[23] = V) : V = a[23], V;
	}
	l.default = c;
}), 226);
