__d("WAWebGuestMessagingSwNotificationClickHandler", [
	"WALogger",
	"WAWebApiLocalStorage",
	"WAWebGuestMessagingSwInitDb",
	"WAWebUserPrefsKeys",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c;
	function d(t) {
		t.notification.close(), t.waitUntil(self.clients.matchAll({ type: "window" }).then((function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					if (self.WindowClient != null && r instanceof self.WindowClient) return r.focus();
				}
				try {
					o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[push notif] user clicked on notif, opening new window"]))), yield o("WAWebGuestMessagingSwInitDb").initDb(), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[push notif] initialized db"])));
					var a = yield o("WAWebApiLocalStorage").getLocalStorageValue(o("WAWebUserPrefsKeys").KEYS.GUEST_ACTIVE_INVITE_CODE), i = self.location.origin + "/guest?invite_code=" + (a != null ? a : "");
					return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[push notif] successfully formed url"]))), self.clients.openWindow(i);
				} catch (e) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[push notif]  error while forming url ", ""])), e);
				}
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})()));
	}
	l.guestNotificationClickHandler = d;
}), 98);
