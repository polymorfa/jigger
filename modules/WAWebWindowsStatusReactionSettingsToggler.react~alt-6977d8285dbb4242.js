__d("WAWebWindowsStatusReactionSettingsToggler.react", [
	"fbt",
	"WAWebSettingsCheckList.react",
	"WAWebText.react",
	"WAWebWindowsUserPrefsNotifications",
	"react",
	"useWAWebSettingSync",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isNotificationEnabled, n = o("useWAWebSettingSync").useSettingSync("isStatusReactionsNotificationEnabled", function(e) {
			o("WAWebWindowsUserPrefsNotifications").setStatusReactionsSetting(e);
		}), a = r("useWAWebToggle")(function() {
			return o("WAWebWindowsUserPrefsNotifications").getStatusReactionsSetting();
		}, n), i = a[0], l = a[1];
		return u.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			id: "status-reactions-toggle",
			disabled: !t,
			checked: t && i,
			checkboxRightAligned: !0,
			onChange: l,
			testid: "status-reactions-toogle-id",
			children: [s._(
				/*BTDS*/
				""
			), u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
				/*BTDS*/
				""
			) })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
