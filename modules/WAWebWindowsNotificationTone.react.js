__d("WAWebWindowsNotificationTone.react", [
	"fbt",
	"WALogger",
	"WAWebBackendApi",
	"WAWebChatGetters",
	"WAWebDBUpdateChatTable",
	"WAWebWindowsNotificationToneDropdown.react",
	"WAWebWindowsNotificationToneOption",
	"WAWebWindowsUserPrefsNotifications",
	"react",
	"useWAWebSettingSync"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n, a = t.chat, i = o("useWAWebSettingSync").useMappedSettingSync({
			settingName: "notificationToneId",
			originalSetter: function(n) {
				var t = Number(n);
				n === o("WAWebWindowsNotificationToneOption").NotificationToneOption.Default && (t = null), o("WAWebDBUpdateChatTable").updateChatTable(a.id, { toneId: t }).then(function() {
					o("WAWebBackendApi").frontendFireAndForget("updateChatToneId", {
						id: a.id,
						toneId: t
					});
				}).catch(function(t) {
					return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to update chat tone id: ", ""])), t);
				});
			},
			toProtobufValue: function(t) {
				return t;
			},
			target: a.id.toString()
		}), l = i;
		return c.jsx(r("WAWebWindowsNotificationToneDropdown.react"), {
			initialTone: (n = o("WAWebWindowsNotificationToneOption").NotificationToneOption.cast(a == null ? void 0 : a.toneId)) != null ? n : o("WAWebWindowsNotificationToneOption").NotificationToneOption.Default,
			overrideDefaultTone: o("WAWebChatGetters").getIsGroup(a) ? o("WAWebWindowsUserPrefsNotifications").getNotificationToneGroupSetting() : o("WAWebWindowsUserPrefsNotifications").getNotificationToneSetting(),
			onToneSelect: l,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
