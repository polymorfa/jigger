__d("WAWebGuestEventsSwPushHandler", [
	"WALogger",
	"WAWebSwResources",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s;
	function u(e) {
		if (e == null || typeof e != "object") return null;
		var t = e.id, n = e.text, r = e.type;
		return (r === "EVENT_DETAIL_CHANGED" || r === "EVENT_REMINDER") && typeof n == "string" && typeof t == "string" ? {
			type: r,
			text: n,
			id: t
		} : null;
	}
	function c(e) {
		return u(e) != null;
	}
	function d(e) {
		return {
			body: e.text,
			icon: r("WAWebSwResources").wa_default_notification_icon,
			actions: [],
			data: {
				type: e.type,
				id: e.id
			}
		};
	}
	function m(t, r) {
		var a = u(r);
		if (a == null) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[sw][guest-events] dropped push with invalid payload"])));
			return;
		}
		var i = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[sw][guest-events] showing notification ", ""])), a.type), yield self.registration.showNotification == null ? void 0 : self.registration.showNotification("WhatsApp", d(a));
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		t.waitUntil(i());
	}
	l.parseGuestEventNotificationPayload = u, l.isGuestEventNotificationPayload = c, l.getGuestEventNotificationOptions = d, l.guestEventsPushHandler = m;
}), 98);
