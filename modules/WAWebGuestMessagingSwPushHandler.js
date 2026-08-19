__d("WAWebGuestMessagingSwPushHandler", [
	"WALogger",
	"WAWebGuestMessagingBackendUtils",
	"WAWebGuestMessagingSwInitDb",
	"WAWebSwResources",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u;
	function c(t, a) {
		var i = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] Start processing guest push notification"]))), a == null) {
					var t, n, i, l;
					yield o("WAWebGuestMessagingSwInitDb").initDb(), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] done initializing db"])));
					var c = yield o("WAWebGuestMessagingBackendUtils").getOfflineNotificationContent();
					o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] fetched notif content from db"])));
					var d = {
						body: (t = (n = c == null ? void 0 : c.notificationTextWithPushname) != null ? n : c == null ? void 0 : c.notificationText) != null ? t : "You have a new message",
						icon: (i = c == null ? void 0 : c.inviterProfilePicUrl) != null ? i : r("WAWebSwResources").wa_default_notification_icon,
						actions: []
					}, m = (l = c == null ? void 0 : c.notificationTitle) != null ? l : "WhatsApp";
					return self.registration.showNotification == null ? void 0 : self.registration.showNotification(m, d);
				}
				var p = {
					body: a.body,
					icon: r("WAWebSwResources").wa_default_notification_icon,
					actions: []
				};
				return self.registration.showNotification == null ? void 0 : self.registration.showNotification(a.title, p);
			});
			return function() {
				return t.apply(this, arguments);
			};
		})();
		t.waitUntil(i());
	}
	l.guestPushHandler = c;
}), 98);
