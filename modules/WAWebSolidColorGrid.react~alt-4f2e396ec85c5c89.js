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
	"useWAWebModelValues",
	"useWAWebRovingGridNavigation"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, a = e.chat, i = e.onSelect, l = e.showDoodle, c = e.themeMode, d = r("WAWebChatPreferenceCollection").get("defaultPreference"), m = o("useWAWebModelValues").useOptionalModelValues(a, ["wallpaperValue", "chatThemeValue"]), p = o("useWAWebModelValues").useOptionalModelValues(d, ["wallpaperValue"]), _ = o("WAWebSolidColorPalette").getSolidColors(c), f = a == null, g = o("WAWebChatThemeGatingUtils").isChatThemesEnabled(), h = g && o("WAWebChatThemeValue").isWallpaperOverride(m == null ? void 0 : m.wallpaperValue) ? m == null ? void 0 : m.wallpaperValue : p == null ? void 0 : p.wallpaperValue, y = h != null ? o("WAWebChatThemeValue").wallpaperValueToHex(h, c) : null, C = g && (m == null || (t = m.chatThemeValue) == null ? void 0 : t.chatThemeId) != null && (y == null || y === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER), b = C ? null : y, v = function(t) {
			if (b == null) return !1;
			if (o("WAWebSolidColorPalette").isDefaultSolidColor(t)) return b === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER;
			var e = o("WAWebSolidColorPalette").findPaletteIndex(b), n = o("WAWebSolidColorPalette").findPaletteIndex(t);
			return e !== -1 && e === n;
		}, S = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = o("WAWebSolidColorPalette").isDefaultSolidColor(e) ? o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER : e;
				if (g && a != null && m != null) {
					var n, r = m.wallpaperValue, l = o("WAWebChatThemeValue").doodleFromWallpaperValue(r);
					if (yield a.setWallpaperValue(o("WAWebChatThemeValue").wallpaperValueFromFlat({
						wallpaper: t,
						showDoodle: l,
						stockWallpaperImageId: null
					})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(t), a.id.toJid()), ((n = m.chatThemeValue) == null ? void 0 : n.chatThemeId) != null) {
						var s, u;
						yield a.setChatThemeValue({
							chatThemeId: null,
							colorSchemeId: (s = (u = m.chatThemeValue) == null ? void 0 : u.colorSchemeId) != null ? s : null
						}), o("WAWebSettingsSyncBridge").sendSettingChange("chatThemeId", "", a.id.toJid());
					}
				} else if (!(!f || d == null)) {
					var p = d.wallpaperValue, _ = p != null ? o("WAWebChatThemeValue").wallpaperValueToHex(p, c) : null;
					if (t !== _) {
						var h = o("WAWebChatThemeValue").doodleFromWallpaperValue(p);
						d.set("wallpaperValue", o("WAWebChatThemeValue").wallpaperValueFromFlat({
							wallpaper: t,
							showDoodle: h,
							stockWallpaperImageId: null
						})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(t));
					}
				}
				i == null || i();
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), R = _.findIndex(v), L = R !== -1 ? R : 0, E = o("useWAWebRovingGridNavigation").useWAWebRovingGridNavigation({
			initialFocusIndex: L,
			itemCount: _.length,
			movement: o("useWAWebRovingGridNavigation").createVerticalGridMovement()
		}), k = E.getItemProps, I = E.gridRef, T = E.handlers;
		return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: T,
			role: "radiogroup",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: u.jsx("div", {
				ref: I,
				"data-testid": "solid_color_grid",
				className: "xrvj5dj x1t59k0s xl56j7k xs2akgl x1f0uite x1h678fw xv6tirj xcldk2z x1phvje8",
				children: _.map(function(e, t) {
					var n = k(t);
					return u.jsx(r("WAWebSolidColorSwatch.react"), {
						colorHex: e,
						colorName: o("WAWebSolidColorPalette").getSolidColorName(e),
						doodleOpacity: o("WAWebSolidColorPalette").getSolidColorDoodleOpacity(e, c),
						isDefault: o("WAWebSolidColorPalette").isDefaultSolidColor(e),
						isSelected: v(e),
						onBlur: n.onBlur,
						onClick: function() {
							return void S(e);
						},
						onFocus: n.onFocus,
						ref: n.ref,
						showDoodle: l,
						tabIndex: n.tabIndex
					}, t);
				})
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
