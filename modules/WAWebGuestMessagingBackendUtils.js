__d("WAWebGuestMessagingBackendUtils", [
	"Promise",
	"WALogger",
	"WAWebApiLocalStorage",
	"WAWebUserPrefsKeys",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s;
	function u() {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				var t, r, a, i = yield (s || (s = n("Promise"))).all([
					o("WAWebApiLocalStorage").getLocalStorageValue(o("WAWebUserPrefsKeys").KEYS.GUEST_MSG_NOTIFICATION_TITLE),
					o("WAWebApiLocalStorage").getLocalStorageValue(o("WAWebUserPrefsKeys").KEYS.GUEST_MSG_NOTIFICATION_TEXT),
					o("WAWebApiLocalStorage").getLocalStorageValue(o("WAWebUserPrefsKeys").KEYS.GUEST_MSG_NOTIFICATION_TEXT_WITH_PUSHNAME),
					o("WAWebApiLocalStorage").getLocalStorageValue(o("WAWebUserPrefsKeys").KEYS.GUEST_INVITER_PUSHNAME),
					o("WAWebApiLocalStorage").getLocalStorageValue(o("WAWebUserPrefsKeys").KEYS.GUEST_INVITER_PROFILE_PIC_URL)
				]);
				return {
					notificationTitle: (t = i[0]) != null ? t : "WhatsApp",
					notificationText: (r = i[1]) != null ? r : "You have unread message.",
					notificationTextWithPushname: (a = i[2]) != null ? a : "You have unread message.",
					inviterPushname: i[3],
					inviterProfilePicUrl: i[4]
				};
			} catch (t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["failed reading notif content from worker store ", ""])), t);
			}
		}), c.apply(this, arguments);
	}
	l.getOfflineNotificationContent = u;
}), 98);
