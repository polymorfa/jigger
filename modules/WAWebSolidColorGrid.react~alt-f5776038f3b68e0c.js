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
	"useWAWebModelValues",
	"useWAWebRovingGridNavigation"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.chat, a = e.onSelect, i = e.showDoodle, l = e.themeMode, c = r("WAWebChatPreferenceCollection").get("defaultPreference"), d = o("useWAWebModelValues").useOptionalModelValues(n, ["wallpaperValue", "chatThemeValue"]), m = o("useWAWebModelValues").useOptionalModelValues(c, ["wallpaperValue"]), p = o("WAWebSolidColorPalette").getSolidColors(l), _ = n == null, f = o("WAWebChatThemeGatingUtils").isChatThemesEnabled(), g = f && o("WAWebChatThemeValue").isWallpaperOverride(d == null ? void 0 : d.wallpaperValue) ? d == null ? void 0 : d.wallpaperValue : m == null ? void 0 : m.wallpaperValue, h = g != null ? o("WAWebChatThemeValue").wallpaperValueToHex(g, l) : null, y = f && (d == null || (t = d.chatThemeValue) == null ? void 0 : t.chatThemeId) != null && (h == null || h === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER), C = y ? null : h, b = function(t) {
			if (C == null) return !1;
			if (o("WAWebSolidColorPalette").isDefaultSolidColor(t)) return C === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER;
			var e = o("WAWebSolidColorPalette").findPaletteIndex(C), n = o("WAWebSolidColorPalette").findPaletteIndex(t);
			return e !== -1 && e === n;
		}, v = async function(t) {
			var e = o("WAWebSolidColorPalette").isDefaultSolidColor(t) ? o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER : t;
			if (f && n != null && d != null) {
				var r, i = d.wallpaperValue, s = o("WAWebChatThemeValue").doodleFromWallpaperValue(i);
				if (await n.setWallpaperValue(o("WAWebChatThemeValue").wallpaperValueFromFlat({
					wallpaper: e,
					showDoodle: s,
					stockWallpaperImageId: null
				})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(e), n.id.toJid()), ((r = d.chatThemeValue) == null ? void 0 : r.chatThemeId) != null) {
					var u, m;
					await n.setChatThemeValue({
						chatThemeId: null,
						colorSchemeId: (u = (m = d.chatThemeValue) == null ? void 0 : m.colorSchemeId) != null ? u : null
					}), o("WAWebSettingsSyncBridge").sendSettingChange("chatThemeId", "", n.id.toJid());
				}
			} else if (!(!_ || c == null)) {
				var p = c.wallpaperValue, g = p != null ? o("WAWebChatThemeValue").wallpaperValueToHex(p, l) : null;
				if (e !== g) {
					var h = o("WAWebChatThemeValue").doodleFromWallpaperValue(p);
					c.set("wallpaperValue", o("WAWebChatThemeValue").wallpaperValueFromFlat({
						wallpaper: e,
						showDoodle: h,
						stockWallpaperImageId: null
					})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(e));
				}
			}
			a == null || a();
		}, S = p.findIndex(b), R = S !== -1 ? S : 0, L = o("useWAWebRovingGridNavigation").useWAWebRovingGridNavigation({
			initialFocusIndex: R,
			itemCount: p.length,
			movement: o("useWAWebRovingGridNavigation").createVerticalGridMovement()
		}), E = L.getItemProps, k = L.gridRef, I = L.handlers;
		return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: I,
			role: "radiogroup",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: u.jsx("div", {
				ref: k,
				"data-testid": "solid_color_grid",
				className: "xrvj5dj x1t59k0s xl56j7k xs2akgl x1f0uite x1h678fw xv6tirj xcldk2z x1phvje8",
				children: p.map(function(e, t) {
					var n = E(t);
					return u.jsx(r("WAWebSolidColorSwatch.react"), {
						colorHex: e,
						colorName: o("WAWebSolidColorPalette").getSolidColorName(e),
						doodleOpacity: o("WAWebSolidColorPalette").getSolidColorDoodleOpacity(e, l),
						isDefault: o("WAWebSolidColorPalette").isDefaultSolidColor(e),
						isSelected: b(e),
						onBlur: n.onBlur,
						onClick: function() {
							return void v(e);
						},
						onFocus: n.onFocus,
						ref: n.ref,
						showDoodle: i,
						tabIndex: n.tabIndex
					}, t);
				})
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
