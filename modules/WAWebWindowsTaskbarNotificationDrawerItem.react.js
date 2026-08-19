__d("WAWebWindowsTaskbarNotificationDrawerItem.react", [
	"WAWebWindowsNotificationDrawerItem.react",
	"WAWebWindowsTaskbarNotificationOption",
	"WAWebWindowsTaskbarNotificationSettingOptions",
	"WAWebWindowsTaskbarNotificationSettingsHelpers",
	"WAWebWindowsUserPrefsNotifications",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4), n = e.onClick, a;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var i, l, u = (i = o("WAWebWindowsUserPrefsNotifications").getTaskbarNotificationSetting()) != null ? i : o("WAWebWindowsTaskbarNotificationOption").TaskbarNotificationOption.Always;
			a = (l = o("WAWebWindowsTaskbarNotificationSettingOptions").TaskbarNotificationSettingOptions.find(function(e) {
				return e.value === u;
			})) == null ? void 0 : l.label(), t[0] = a;
		} else a = t[0];
		var c = a, d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = o("WAWebWindowsTaskbarNotificationSettingsHelpers").TaskbarNotificationSettingsItem.title(), t[1] = d) : d = t[1];
		var m;
		return t[2] !== n ? (m = s.jsx(r("WAWebWindowsNotificationDrawerItem.react"), {
			title: d,
			subtitle: c,
			testid: o("WAWebWindowsTaskbarNotificationSettingsHelpers").TaskbarNotificationSettingsItem.testid,
			onClick: n
		}), t[2] = n, t[3] = m) : m = t[3], m;
	}
	l.default = u;
}), 98);
