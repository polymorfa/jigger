__d("useWAWebChatThemeStore", [
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeEvents",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeValue",
	"WAWebSettingsSyncBridge",
	"WAWebThemeContext",
	"WAWebWallpaper",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues",
	"useWAWebSettingSync"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useState;
	function u(e) {
		var t, n, a, i, l, u, m, p, _ = o("react-compiler-runtime").c(81), f = e == null, g;
		_[0] === Symbol.for("react.memo_cache_sentinel") ? (g = r("WAWebChatPreferenceCollection").get("defaultPreference"), _[0] = g) : g = _[0];
		var h = g, y = o("WAWebThemeContext").useIsDarkTheme(), C = y ? "dark" : "light", b;
		_[1] === Symbol.for("react.memo_cache_sentinel") ? (b = ["wallpaperValue", "chatThemeValue"], _[1] = b) : b = _[1];
		var v = o("useWAWebModelValues").useOptionalModelValues(e, b), S;
		_[2] === Symbol.for("react.memo_cache_sentinel") ? (S = ["wallpaperValue", "chatThemeValue"], _[2] = S) : S = _[2];
		var R = o("useWAWebModelValues").useOptionalModelValues(h, S), L = f ? R : v, E = L == null ? void 0 : L.wallpaperValue, k;
		_[3] !== E || _[4] !== C ? (k = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(E, C), _[3] = E, _[4] = C, _[5] = k) : k = _[5];
		var I = k, T = (t = L == null || (n = L.chatThemeValue) == null ? void 0 : n.chatThemeId) != null ? t : null, D = (a = L == null || (i = L.chatThemeValue) == null ? void 0 : i.colorSchemeId) != null ? a : null, x = (L == null ? void 0 : L.wallpaperValue) != null ? I.wallpaper : null, $;
		_[6] !== I.showDoodle || _[7] !== T || _[8] !== D || _[9] !== x ? ($ = {
			chatThemeId: T,
			colorSchemeId: D,
			wallpaper: x,
			doodleEnabled: I.showDoodle
		}, _[6] = I.showDoodle, _[7] = T, _[8] = D, _[9] = x, _[10] = $) : $ = _[10];
		var P = $, N = (l = L == null || (u = L.wallpaperValue) == null ? void 0 : u.type) != null ? l : null, M;
		_[11] !== (v == null ? void 0 : v.chatThemeValue) || _[12] !== (R == null ? void 0 : R.chatThemeValue) ? (M = o("WAWebChatThemeValue").isChatThemeOverride(v == null ? void 0 : v.chatThemeValue) ? v == null ? void 0 : v.chatThemeValue : R == null ? void 0 : R.chatThemeValue, _[11] = v == null ? void 0 : v.chatThemeValue, _[12] = R == null ? void 0 : R.chatThemeValue, _[13] = M) : M = _[13];
		var w = M, A;
		_[14] !== (v == null ? void 0 : v.wallpaperValue) || _[15] !== (R == null ? void 0 : R.wallpaperValue) ? (A = o("WAWebChatThemeValue").isWallpaperOverride(v == null ? void 0 : v.wallpaperValue) ? v == null ? void 0 : v.wallpaperValue : R == null ? void 0 : R.wallpaperValue, _[14] = v == null ? void 0 : v.wallpaperValue, _[15] = R == null ? void 0 : R.wallpaperValue, _[16] = A) : A = _[16];
		var F = A, O = (m = w == null ? void 0 : w.chatThemeId) != null ? m : null, B;
		_[17] !== F || _[18] !== C ? (B = F != null ? o("WAWebChatThemeValue").wallpaperValueToHex(F, C) : null, _[17] = F, _[18] = C, _[19] = B) : B = _[19];
		var W = B, q = (F == null ? void 0 : F.type) === "stock" ? F.stockImageId : null, U = (p = L == null ? void 0 : L.wallpaperValue) != null ? p : null, V;
		_[20] !== (e == null ? void 0 : e.id) ? (V = e == null ? void 0 : e.id.toJid(), _[20] = e == null ? void 0 : e.id, _[21] = V) : V = _[21];
		var H = V, G;
		_[22] !== (e == null ? void 0 : e.chatThemeValue) || _[23] !== f ? (G = function() {
			return f ? h == null ? void 0 : h.chatThemeValue : e == null ? void 0 : e.chatThemeValue;
		}, _[22] = e == null ? void 0 : e.chatThemeValue, _[23] = f, _[24] = G) : G = _[24];
		var z = G, j;
		_[25] !== e ? (j = function(n) {
			if (e != null) {
				var t = n.chatThemeId == null && n.colorSchemeId == null ? null : n;
				e.setChatThemeValue(t);
			} else h == null || h.set("chatThemeValue", n);
		}, _[25] = e, _[26] = j) : j = _[26];
		var K = j, Q;
		_[27] !== (e == null ? void 0 : e.wallpaperValue) || _[28] !== f ? (Q = function() {
			return f ? h == null ? void 0 : h.wallpaperValue : e == null ? void 0 : e.wallpaperValue;
		}, _[27] = e == null ? void 0 : e.wallpaperValue, _[28] = f, _[29] = Q) : Q = _[29];
		var X = Q, Y;
		_[30] !== e ? (Y = function(n) {
			e != null ? e.setWallpaperValue(n) : h == null || h.set("wallpaperValue", n);
		}, _[30] = e, _[31] = Y) : Y = _[31];
		var J = Y, Z;
		_[32] !== z || _[33] !== K ? (Z = function(t) {
			var e, n = z();
			K({
				chatThemeId: (e = n == null ? void 0 : n.chatThemeId) != null ? e : null,
				colorSchemeId: t
			});
		}, _[32] = z, _[33] = K, _[34] = Z) : Z = _[34];
		var ee;
		_[35] !== H || _[36] !== Z ? (ee = {
			settingName: "colorSchemeId",
			originalSetter: Z,
			toProtobufValue: d,
			target: H
		}, _[35] = H, _[36] = Z, _[37] = ee) : ee = _[37];
		var te = o("useWAWebSettingSync").useMappedSettingSync(ee), ne;
		_[38] !== z || _[39] !== K ? (ne = function(t) {
			var e, n = z();
			K({
				chatThemeId: t,
				colorSchemeId: (e = n == null ? void 0 : n.colorSchemeId) != null ? e : null
			});
		}, _[38] = z, _[39] = K, _[40] = ne) : ne = _[40];
		var re;
		_[41] !== H || _[42] !== ne ? (re = {
			settingName: "chatThemeId",
			originalSetter: ne,
			toProtobufValue: c,
			target: H
		}, _[41] = H, _[42] = ne, _[43] = re) : re = _[43];
		var oe = o("useWAWebSettingSync").useMappedSettingSync(re), ae;
		_[44] !== e || _[45] !== H || _[46] !== f || _[47] !== X || _[48] !== J ? (ae = function(n) {
			if (n == null && e != null) {
				e.setWallpaperValue(null), H != null && o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(null), H);
				return;
			}
			var t = X(), r = o("WAWebChatThemeValue").doodleFromWallpaperValue(t);
			J(o("WAWebChatThemeValue").wallpaperValueFromFlat({
				wallpaper: n,
				showDoodle: r,
				stockWallpaperImageId: null
			})), f && h != null ? o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(n)) : !f && H != null && o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(n), H);
		}, _[44] = e, _[45] = H, _[46] = f, _[47] = X, _[48] = J, _[49] = ae) : ae = _[49];
		var ie = ae, le;
		_[50] !== H || _[51] !== f || _[52] !== X || _[53] !== J ? (le = function(t) {
			var e = X();
			J(o("WAWebChatThemeValue").wallpaperValueWithDoodle(e, t)), f && h != null ? o("WAWebSettingsSyncBridge").sendSettingChange("isDoodleWallpaperEnabled", t) : !f && H != null && o("WAWebSettingsSyncBridge").sendSettingChange("isDoodleWallpaperEnabled", t, H);
		}, _[50] = H, _[51] = f, _[52] = X, _[53] = J, _[54] = le) : le = _[54];
		var se = le, ue;
		_[55] !== e || _[56] !== H || _[57] !== C ? (ue = function(n) {
			if (e != null) {
				if (e.setWallpaperValue(n), H != null && (n == null ? void 0 : n.type) === "stock") o("WAWebChatThemeGatingUtils").isStockWallpaperSyncEncodeEnabled() && o("WAWebSettingsSyncBridge").sendSettingChange("stockWallpaperImageId", n.stockImageId, H);
				else if (H != null) {
					var t = n != null ? o("WAWebChatThemeValue").wallpaperValueToHex(n, C) : null;
					o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(t), H);
				}
				var r = n != null ? o("WAWebChatThemeValue").doodleFromWallpaperValue(n) : null;
				H != null && (n == null ? void 0 : n.type) !== "stock" && r != null && o("WAWebSettingsSyncBridge").sendSettingChange("isDoodleWallpaperEnabled", r, H);
			} else if (h != null) {
				var a;
				if (h.set("wallpaperValue", n), (n == null ? void 0 : n.type) === "stock") o("WAWebChatThemeGatingUtils").isStockWallpaperSyncEncodeEnabled() && o("WAWebSettingsSyncBridge").sendSettingChange("stockWallpaperImageId", n.stockImageId);
				else {
					var i = n != null ? o("WAWebChatThemeValue").wallpaperValueToHex(n, C) : null;
					o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(i));
				}
				o("WAWebSettingsSyncBridge").sendSettingChange("isDoodleWallpaperEnabled", (a = o("WAWebChatThemeValue").doodleFromWallpaperValue(n)) != null ? a : !0);
			}
		}, _[55] = e, _[56] = H, _[57] = C, _[58] = ue) : ue = _[58];
		var ce = ue, de;
		_[59] !== H || _[60] !== f || _[61] !== X || _[62] !== J ? (de = function(t) {
			var e = X();
			if (t != null) J({
				type: "stock",
				stockImageId: t,
				isDoodleEnabled: o("WAWebChatThemeValue").doodleFromWallpaperValue(e)
			}), o("WAWebChatThemeGatingUtils").isStockWallpaperSyncEncodeEnabled() && (f && h != null ? o("WAWebSettingsSyncBridge").sendSettingChange("stockWallpaperImageId", t) : !f && H != null && o("WAWebSettingsSyncBridge").sendSettingChange("stockWallpaperImageId", t, H));
			else if (e != null && e.type === "stock") {
				var n;
				J({
					type: "default",
					isDoodleEnabled: (n = e.isDoodleEnabled) != null ? n : !0
				}), o("WAWebChatThemeGatingUtils").isStockWallpaperSyncEncodeEnabled() && (f && h != null ? o("WAWebSettingsSyncBridge").sendSettingChange("stockWallpaperImageId", "") : !f && H != null && o("WAWebSettingsSyncBridge").sendSettingChange("stockWallpaperImageId", "", H));
			}
		}, _[59] = H, _[60] = f, _[61] = X, _[62] = J, _[63] = de) : de = _[63];
		var me = de, pe = s(!1), _e = pe[0], fe = pe[1], ge = s(H), he = ge[0], ye = ge[1];
		he !== H && (ye(H), fe(!1));
		var Ce;
		_[64] === Symbol.for("react.memo_cache_sentinel") ? (Ce = function(t) {
			fe(t), o("WAWebChatThemeEvents").triggerMinimalModeActive({ active: t });
		}, _[64] = Ce) : Ce = _[64];
		var be = Ce, ve = f ? R != null : !0, Se;
		return _[65] !== q || _[66] !== me || _[67] !== te || _[68] !== se || _[69] !== oe || _[70] !== ie || _[71] !== O || _[72] !== W || _[73] !== f || _[74] !== ve || _[75] !== _e || _[76] !== U || _[77] !== ce || _[78] !== P || _[79] !== N ? (Se = {
			values: P,
			wallpaperType: N,
			effectiveChatThemeId: O,
			effectiveWallpaper: W,
			rawWallpaperValue: U,
			applyTheme: oe,
			applyColor: te,
			applyWallpaper: ie,
			applyDoodle: se,
			restoreWallpaperValue: ce,
			activeWallpaperId: q,
			applyActiveWallpaperId: me,
			minimalModeActive: _e,
			applyMinimalMode: be,
			isGlobal: f,
			isReady: ve
		}, _[65] = q, _[66] = me, _[67] = te, _[68] = se, _[69] = oe, _[70] = ie, _[71] = O, _[72] = W, _[73] = f, _[74] = ve, _[75] = _e, _[76] = U, _[77] = ce, _[78] = P, _[79] = N, _[80] = Se) : Se = _[80], Se;
	}
	function c(e) {
		return e != null ? String(e) : "";
	}
	function d(e) {
		return e != null ? String(e) : "";
	}
	l.useChatThemeStore = u;
}), 98);
