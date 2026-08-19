__d("WAWebWindowsShowNotificationBannerDrawerItem.react", [
	"WAWebNoop",
	"WAWebWindowsNotificationDrawerItem.react",
	"WAWebWindowsNotificationSettingsHelpers",
	"WAWebWindowsShowNotificationBannerOption",
	"WAWebWindowsShowNotificationBannerOptions",
	"WAWebWindowsUserPrefsNotifications",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n, a = e.isNotificationsEnabledInSystem, i = e.onClick, l = (t = o("WAWebWindowsUserPrefsNotifications").getNotificationBannerSetting()) != null ? t : o("WAWebWindowsShowNotificationBannerOption").ShowNotificationBannerOption.Always, u = (n = o("WAWebWindowsShowNotificationBannerOptions").ShowNotificationBannerOptions.find(function(e) {
			return e.value === l;
		})) == null ? void 0 : n.label(), c = a ? i : r("WAWebNoop");
		return s.jsx(r("WAWebWindowsNotificationDrawerItem.react"), {
			title: o("WAWebWindowsNotificationSettingsHelpers").ShowNotificationBannerSettingsItem.title(),
			subtitle: u,
			testid: o("WAWebWindowsNotificationSettingsHelpers").ShowNotificationBannerSettingsItem.testid,
			onClick: c
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
