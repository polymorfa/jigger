__d("WAWebWindowsTaskbarNotificationDrawerItem.react", [
	"WAWebWindowsNotificationDrawerItem.react",
	"WAWebWindowsTaskbarNotificationOption",
	"WAWebWindowsTaskbarNotificationSettingOptions",
	"WAWebWindowsTaskbarNotificationSettingsHelpers",
	"WAWebWindowsUserPrefsNotifications",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n, a = e.onClick, i = (t = o("WAWebWindowsUserPrefsNotifications").getTaskbarNotificationSetting()) != null ? t : o("WAWebWindowsTaskbarNotificationOption").TaskbarNotificationOption.Always, l = (n = o("WAWebWindowsTaskbarNotificationSettingOptions").TaskbarNotificationSettingOptions.find(function(e) {
			return e.value === i;
		})) == null ? void 0 : n.label();
		return s.jsx(r("WAWebWindowsNotificationDrawerItem.react"), {
			title: o("WAWebWindowsTaskbarNotificationSettingsHelpers").TaskbarNotificationSettingsItem.title(),
			subtitle: l,
			testid: o("WAWebWindowsTaskbarNotificationSettingsHelpers").TaskbarNotificationSettingsItem.testid,
			onClick: a
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
