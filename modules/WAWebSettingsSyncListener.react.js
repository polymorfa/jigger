__d("WAWebSettingsSyncListener.react", [
	"WALogger",
	"WAWebChatCollection",
	"WAWebChatPreferenceCollection",
	"WAWebChatPreferenceModel",
	"WAWebChatThemeValue",
	"WAWebL10N",
	"WAWebL10NConstants",
	"WAWebSettingsSyncEventEmitter",
	"WAWebSystemTheme",
	"WAWebThemeContext",
	"WAWebThemeType",
	"WAWebWallpaper",
	"WAWebWidFactory",
	"asyncToGeneratorRuntime",
	"cr:12509",
	"cr:13156",
	"getErrorSafe",
	"react",
	"useWAWebDebouncedCallback",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k = (E || (E = o("react"))).useContext, I = (e = n("cr:12509")) != null ? e : {}, T = I.AllowedZoomLevel, D = (s = n("cr:13156")) != null ? s : {}, x = D.WAWebScalingControlManager;
	function $() {
		var e, t, a = k(o("WAWebThemeContext").ThemeContext), i = r("useWAWebDebouncedCallback")(function(e) {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Applying theme value: ", ""])), e);
			var t = o("WAWebThemeType").ThemesSettingValue.cast(e);
			if (t == null) {
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Invalid theme value: ", ""])), e).tags("settings-sync");
				return;
			}
			e: {
				if (t === o("WAWebThemeType").ThemesSettingValue.SystemDefault) {
					a.setSystemThemeMode(!0), a.setTheme(r("WAWebSystemTheme").getCurrentTheme());
					break e;
				}
				if (t === o("WAWebThemeType").ThemesSettingValue.Light) {
					a.setSystemThemeMode(!1), a.setTheme("light");
					break e;
				}
				if (t === o("WAWebThemeType").ThemesSettingValue.Dark) {
					a.setSystemThemeMode(!1), a.setTheme("dark");
					break e;
				}
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
			}
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Successfully applied theme: ", ""])), t);
		}, 1e3);
		(t = o("useWAWebListener")).useListener(e = r("WAWebSettingsSyncEventEmitter"), "applyTheme", i), t.useListener(e, "applyWallpaper", function(e) {
			try {
				o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Applying wallpaper ID: ", ""])), e);
				var t = r("WAWebChatPreferenceCollection").get(o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE);
				if (t) {
					var n = t.wallpaperValue, i = o("WAWebChatThemeValue").doodleFromWallpaperValue(n);
					t.set("wallpaperValue", o("WAWebChatThemeValue").wallpaperValueFromFlat({
						wallpaper: o("WAWebWallpaper").getWallpaperColorForSync(e, a.theme),
						showDoodle: i,
						stockWallpaperImageId: null
					})), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Successfully applied wallpaper: ", ""])), e);
				} else o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] default chat pref not found for wallpaper"]))).tags("settings-sync");
			} catch (t) {
				o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Error applying wallpaper ", ""])), e).catching(r("getErrorSafe")(t)).tags("settings-sync");
			}
		}), t.useListener(e, "applyPerChatWallpaper", function(e) {
			var t = e.chatJid, n = e.wallpaperId;
			try {
				o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Applying per-chat wallpaper ID: ", ""])), n);
				var i = o("WAWebWidFactory").createWid(t), l = i.isLid() ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(i) : o("WAWebChatCollection").ChatCollection.get(i);
				if (l != null) {
					var s = l.wallpaperValue, u = o("WAWebChatThemeValue").doodleFromWallpaperValue(s), c = o("WAWebWallpaper").getWallpaperColorForSync(n, a.theme);
					l.setWallpaperValue(c === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER ? null : o("WAWebChatThemeValue").wallpaperValueFromFlat({
						wallpaper: c,
						showDoodle: u,
						stockWallpaperImageId: null
					})), o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Successfully applied per-chat wallpaper: ", ""])), n);
				}
			} catch (e) {
				o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Error applying per-chat wallpaper ", ""])), n).catching(r("getErrorSafe")(e)).tags("settings-sync");
			}
		});
		var l = r("useWAWebDebouncedCallback")((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				try {
					o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Applying language: ", ""])), e), e !== r("WAWebL10N").getLocale() && (yield r("WAWebL10N").setLocale(e, o("WAWebL10NConstants").L10N_PRIORITY.SAVED, !1), o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Successfully applied language: ", ""])), e));
				} catch (t) {
					o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Error applying language ", ""])), e).catching(r("getErrorSafe")(t)).tags("settings-sync");
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), 1e3);
		t.useListener(e, "applyLanguage", l);
		var s = r("useWAWebDebouncedCallback")((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				try {
					o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Applying zoom value: ", ""])), e);
					var t = T == null ? void 0 : T.cast(e / 100);
					t && (yield x == null ? void 0 : x.setZoomLevel(t), o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Successfully applied zoom: ", ""])), t));
				} catch (t) {
					o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Error applying zoom ", ""])), e).catching(r("getErrorSafe")(t)).tags("settings-sync");
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), 1e3);
		t.useListener(e, "applyZoom", s);
	}
	l.useSettingsSyncListener = $;
}), 98);
