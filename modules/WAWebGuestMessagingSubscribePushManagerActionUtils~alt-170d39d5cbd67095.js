__d("WAWebGuestMessagingSubscribePushManagerActionUtils", [
	"fbt",
	"WAWebFbtCommon",
	"WAWebGuestCoreConsts",
	"WAWebGuestCoreGetMobilePlatform",
	"WAWebGuestCoreLocalStorage",
	"WAWebGuestMessagingGetInviterInfoAction",
	"WAWebNotificationConstants",
	"WAWebPushNotificationsGatingUtils",
	"WAWebSchemaLocalStorage",
	"WAWebUserPrefsKeys"
], (function(t, n, r, o, a, i, l, s) {
	function e() {
		var e = o("WAWebGuestCoreGetMobilePlatform").getGuestMobilePlatform();
		return e === o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN || e === o("WAWebGuestCoreConsts").GuestMobilePlatform.ANDROID_BROWSER;
	}
	async function u(e) {
		var t, n = e && ((t = window.Notification) == null ? void 0 : t.permission) === o("WAWebNotificationConstants").PERMISSION_ALLOWED && o("WAWebPushNotificationsGatingUtils").canEnableOfflineNotifications();
		return n;
	}
	async function c() {
		var e = r("WAWebFbtCommon")("WhatsApp"), t = s._(
			/*BTDS*/
			""
		), n = await o("WAWebGuestMessagingGetInviterInfoAction").getInviterInfo(), a = n[0], i = n[1], l = a != null ? s._(
			/*BTDS*/
			"",
			[s._param("contactName", "~ " + a)]
		) : t;
		o("WAWebSchemaLocalStorage").getTable().bulkCreateOrReplace([
			{
				key: o("WAWebUserPrefsKeys").KEYS.GUEST_MSG_NOTIFICATION_TITLE,
				value: e.toString()
			},
			{
				key: o("WAWebUserPrefsKeys").KEYS.GUEST_MSG_NOTIFICATION_TEXT,
				value: t.toString()
			},
			{
				key: o("WAWebUserPrefsKeys").KEYS.GUEST_MSG_NOTIFICATION_TEXT_WITH_PUSHNAME,
				value: l.toString()
			},
			{
				key: o("WAWebUserPrefsKeys").KEYS.GUEST_ACTIVE_INVITE_CODE,
				value: o("WAWebGuestCoreLocalStorage").getActiveGuestInviteCode()
			},
			{
				key: o("WAWebUserPrefsKeys").KEYS.GUEST_INVITER_PUSHNAME,
				value: a == null ? void 0 : a.toString()
			},
			{
				key: o("WAWebUserPrefsKeys").KEYS.GUEST_INVITER_PROFILE_PIC_URL,
				value: i == null ? void 0 : i.toString()
			}
		]);
	}
	l.isOfflineNotificationsEnabled = e, l.shouldSubscribePushManager = u, l.updateOfflineNotificationL10nStrings = c;
}), 226);
