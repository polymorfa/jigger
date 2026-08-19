__d("WAWebSettingsStepIcon.react", [
	"WAWebChatRefreshedIcon.react",
	"WAWebDevIcon.react",
	"WAWebIcComputerIcon.react",
	"WAWebIcDownloadIcon.react",
	"WAWebIcSyncIcon.react",
	"WAWebInfoRefreshedIcon.react",
	"WAWebListPeopleIcon.react",
	"WAWebMessageReportRefreshedIcon.react",
	"WAWebSettingsConst",
	"WAWebStorefrontIcon.react",
	"WAWebTransferRefreshedIcon.react",
	"WDSIconIcAccountCircle.react",
	"WDSIconIcBrightnessMedium.react",
	"WDSIconIcBugReport.react",
	"WDSIconIcDescription.react",
	"WDSIconIcHelp.react",
	"WDSIconIcKey.react",
	"WDSIconIcKeyboard.react",
	"WDSIconIcLock.react",
	"WDSIconIcLogout.react",
	"WDSIconIcNotifications.react",
	"WDSIconIcSecurity.react",
	"WDSIconIcVideocam.react",
	"WDSIconIcWallpaper.react",
	"WDSIconIcWarning.react",
	"WDSIconWdsIcCurrencyReal.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(3), n = e.setting, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "xhslqc4" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = s.jsx("div", babelHelpers.extends({}, r, { children: s.jsx(c, { setting: n }) })), t[1] = n, t[2] = a) : a = t[2], a;
	}
	function c(e) {
		var t = o("react-compiler-runtime").c(26), n = e.setting;
		switch (n) {
			case o("WAWebSettingsConst").SettingsSteps.BusinessTools: {
				var a;
				return t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(o("WAWebStorefrontIcon.react").StorefrontIcon, {}), t[0] = a) : a = t[0], a;
			}
			case o("WAWebSettingsConst").SettingsSteps.DataSharing: {
				var i;
				return t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx(o("WAWebTransferRefreshedIcon.react").TransferRefreshedIcon, {}), t[1] = i) : i = t[1], i;
			}
			case o("WAWebSettingsConst").SettingsSteps.Notifications: {
				var l;
				return t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx(r("WDSIconIcNotifications.react"), {}), t[2] = l) : l = t[2], l;
			}
			case o("WAWebSettingsConst").SettingsSteps.PaymentsHome: {
				var u;
				return t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = s.jsx(r("WDSIconWdsIcCurrencyReal.react"), {}), t[3] = u) : u = t[3], u;
			}
			case o("WAWebSettingsConst").SettingsSteps.PrivacySettings: {
				var c;
				return t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(r("WDSIconIcLock.react"), {}), t[4] = c) : c = t[4], c;
			}
			case o("WAWebSettingsConst").SettingsSteps.Security: {
				var d;
				return t[5] === Symbol.for("react.memo_cache_sentinel") ? (d = s.jsx(r("WDSIconIcSecurity.react"), {}), t[5] = d) : d = t[5], d;
			}
			case o("WAWebSettingsConst").SettingsSteps.Wallpaper: {
				var m;
				return t[6] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx(r("WDSIconIcWallpaper.react"), {}), t[6] = m) : m = t[6], m;
			}
			case o("WAWebSettingsConst").SettingsSteps.MediaAutoDownload: {
				var p;
				return t[7] === Symbol.for("react.memo_cache_sentinel") ? (p = s.jsx(o("WAWebIcDownloadIcon.react").IcDownloadIcon, {}), t[7] = p) : p = t[7], p;
			}
			case o("WAWebSettingsConst").SettingsSteps.RequestAccountInfoSettings: {
				var _;
				return t[8] === Symbol.for("react.memo_cache_sentinel") ? (_ = s.jsx(r("WDSIconIcDescription.react"), {}), t[8] = _) : _ = t[8], _;
			}
			case o("WAWebSettingsConst").SettingsSteps.Help: {
				var f;
				return t[9] === Symbol.for("react.memo_cache_sentinel") ? (f = s.jsx(r("WDSIconIcHelp.react"), {}), t[9] = f) : f = t[9], f;
			}
			case o("WAWebSettingsConst").SettingsSteps.Bugnub: {
				var g;
				return t[10] === Symbol.for("react.memo_cache_sentinel") ? (g = s.jsx(r("WDSIconIcBugReport.react"), {}), t[10] = g) : g = t[10], g;
			}
			case o("WAWebSettingsConst").SettingsSteps.DownloadLogs: {
				var h;
				return t[11] === Symbol.for("react.memo_cache_sentinel") ? (h = s.jsx(o("WAWebIcDownloadIcon.react").IcDownloadIcon, {}), t[11] = h) : h = t[11], h;
			}
			case o("WAWebSettingsConst").SettingsSteps.Developer:
			case o("WAWebSettingsConst").SettingsSteps.DeveloperABProps: {
				var y;
				return t[12] === Symbol.for("react.memo_cache_sentinel") ? (y = s.jsx(o("WAWebDevIcon.react").DevIcon, {}), t[12] = y) : y = t[12], y;
			}
			case o("WAWebSettingsConst").SettingsSteps.KeyboardShortcuts: {
				var C;
				return t[13] === Symbol.for("react.memo_cache_sentinel") ? (C = s.jsx(r("WDSIconIcKeyboard.react"), {}), t[13] = C) : C = t[13], C;
			}
			case o("WAWebSettingsConst").SettingsSteps.Theme: {
				var b;
				return t[14] === Symbol.for("react.memo_cache_sentinel") ? (b = s.jsx(r("WDSIconIcBrightnessMedium.react"), {}), t[14] = b) : b = t[14], b;
			}
			case o("WAWebSettingsConst").SettingsSteps.Logout: {
				var v;
				return t[15] === Symbol.for("react.memo_cache_sentinel") ? (v = s.jsx(r("WDSIconIcLogout.react"), { colorName: "secondaryNegative" }), t[15] = v) : v = t[15], v;
			}
			case o("WAWebSettingsConst").SettingsSteps.NewsletterReports: {
				var S;
				return t[16] === Symbol.for("react.memo_cache_sentinel") ? (S = s.jsx(o("WAWebMessageReportRefreshedIcon.react").MessageReportRefreshedIcon, {}), t[16] = S) : S = t[16], S;
			}
			case o("WAWebSettingsConst").SettingsSteps.Account: {
				var R;
				return t[17] === Symbol.for("react.memo_cache_sentinel") ? (R = s.jsx(r("WDSIconIcKey.react"), {}), t[17] = R) : R = t[17], R;
			}
			case o("WAWebSettingsConst").SettingsSteps.Profile: {
				var L;
				return t[18] === Symbol.for("react.memo_cache_sentinel") ? (L = s.jsx(r("WDSIconIcAccountCircle.react"), {}), t[18] = L) : L = t[18], L;
			}
			case o("WAWebSettingsConst").SettingsSteps.Chats: {
				var E;
				return t[19] === Symbol.for("react.memo_cache_sentinel") ? (E = s.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {}), t[19] = E) : E = t[19], E;
			}
			case o("WAWebSettingsConst").SettingsSteps.DeleteAccount: {
				var k;
				return t[20] === Symbol.for("react.memo_cache_sentinel") ? (k = s.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, {}), t[20] = k) : k = t[20], k;
			}
			case o("WAWebSettingsConst").SettingsSteps.Lists: {
				var I;
				return t[21] === Symbol.for("react.memo_cache_sentinel") ? (I = s.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, {}), t[21] = I) : I = t[21], I;
			}
			case o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings: {
				var T;
				return t[22] === Symbol.for("react.memo_cache_sentinel") ? (T = s.jsx(o("WAWebIcComputerIcon.react").IcComputerIcon, {
					height: 24,
					width: 24
				}), t[22] = T) : T = t[22], T;
			}
			case o("WAWebSettingsConst").SettingsSteps.WinDevicesSettings: {
				var D;
				return t[23] === Symbol.for("react.memo_cache_sentinel") ? (D = s.jsx(r("WDSIconIcVideocam.react"), {
					height: 24,
					width: 24
				}), t[23] = D) : D = t[23], D;
			}
			case o("WAWebSettingsConst").SettingsSteps.HistorySyncPaused: {
				var x;
				return t[24] === Symbol.for("react.memo_cache_sentinel") ? (x = s.jsx(r("WDSIconIcWarning.react"), { colorName: "secondaryWarning" }), t[24] = x) : x = t[24], x;
			}
			case o("WAWebSettingsConst").SettingsSteps.HistorySyncInProgress: {
				var $;
				return t[25] === Symbol.for("react.memo_cache_sentinel") ? ($ = s.jsx(o("WAWebIcSyncIcon.react").IcSyncIcon, {}), t[25] = $) : $ = t[25], $;
			}
			default: return null;
		}
	}
	l.default = u;
}), 98);
