__d("WAWebWindowsShowNotificationBannerDrawerItem.react", [
	"WAWebNoop",
	"WAWebWindowsNotificationDrawerItem.react",
	"WAWebWindowsNotificationSettingsHelpers",
	"WAWebWindowsShowNotificationBannerOption",
	"WAWebWindowsShowNotificationBannerOptions",
	"WAWebWindowsUserPrefsNotifications",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4), n = e.isNotificationsEnabledInSystem, a = e.onClick, i;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var l, u, c = (l = o("WAWebWindowsUserPrefsNotifications").getNotificationBannerSetting()) != null ? l : o("WAWebWindowsShowNotificationBannerOption").ShowNotificationBannerOption.Always;
			i = (u = o("WAWebWindowsShowNotificationBannerOptions").ShowNotificationBannerOptions.find(function(e) {
				return e.value === c;
			})) == null ? void 0 : u.label(), t[0] = i;
		} else i = t[0];
		var d = i, m = n ? a : r("WAWebNoop"), p;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (p = o("WAWebWindowsNotificationSettingsHelpers").ShowNotificationBannerSettingsItem.title(), t[1] = p) : p = t[1];
		var _;
		return t[2] !== m ? (_ = s.jsx(r("WAWebWindowsNotificationDrawerItem.react"), {
			title: p,
			subtitle: d,
			testid: o("WAWebWindowsNotificationSettingsHelpers").ShowNotificationBannerSettingsItem.testid,
			onClick: m
		}), t[2] = m, t[3] = _) : _ = t[3], _;
	}
	l.default = u;
}), 98);
