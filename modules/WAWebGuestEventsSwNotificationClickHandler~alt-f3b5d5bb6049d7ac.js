__d("WAWebGuestEventsSwNotificationClickHandler", [
	"WALogger",
	"WAWebGuestEventsNotificationTokenStore",
	"WAWebGuestEventsSwInitDb"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = "/guest/event/";
	function d(e) {
		return "" + self.location.origin + c + "?token=" + encodeURIComponent(e);
	}
	function m(e, t) {
		try {
			var n = new URL(e);
			return n.pathname === c && n.searchParams.get("token") === t;
		} catch (e) {
			return !1;
		}
	}
	function p(e) {
		if (e == null || typeof e != "object") return null;
		var t = e.id;
		return typeof t == "string" ? t : null;
	}
	function _(e) {
		e.notification.close(), e.waitUntil(f(e.notification.data));
	}
	async function f(t) {
		var n = p(t);
		if (n == null) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[sw][guest-events] notification click missing event id"])));
			return;
		}
		await o("WAWebGuestEventsSwInitDb").initGuestEventsSwDb();
		var r = await o("WAWebGuestEventsNotificationTokenStore").getGuestEventTokenForId(n);
		if (r == null) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[sw][guest-events] no token mapped for clicked event"])));
			return;
		}
		var a = d(r);
		o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[sw][guest-events] opening event landing page"]))), await self.clients.openWindow(a);
	}
	l.getGuestEventNotificationUrl = d, l.isMatchingGuestEventClientUrl = m, l.guestEventsNotificationClickHandler = _;
}), 98);
