__d("WAWebNotificationWorkerBackend", [
	"WALogger",
	"WAWebNotificationConstants",
	"WAWebPushNotificationsGatingUtils",
	"WAWebSwResources",
	"WAWebUserPrefsGeneral"
], (function(t, n, r, o, a, i, l) {
	var e, s = "WhatsApp", u = null, c = null, d = !1;
	function m() {
		d = !0;
	}
	var p = "open-notifications-setting";
	async function _(e) {
		if (e === void 0 && (e = !0), !d) return await c, c = f(e), c;
	}
	async function f(e) {
		var t, n, r, a;
		return u == null && e && (u = await o("WAWebUserPrefsGeneral").getOfflineNotificationContent()), y((t = (n = u) == null ? void 0 : n.notificationTitle) != null ? t : s, (r = (a = u) == null ? void 0 : a.notificationSyncCompleteText) != null ? r : "Syncing messages complete", e);
	}
	async function g() {
		return c || (c = h(), c);
	}
	async function h() {
		var e, t, n, r;
		return u == null && (u = await o("WAWebUserPrefsGeneral").getOfflineNotificationContent()), y((e = (t = u) == null ? void 0 : t.notificationTitle) != null ? e : s, (n = (r = u) == null ? void 0 : r.notificationText) != null ? n : "Syncing messages in the background");
	}
	async function y(t, n, a) {
		if (a === void 0 && (a = !0), Notification.permission && Notification.permission === o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
			var i = await b();
			return i === 0 && a && v().catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to log offline notification shown engagement, error: ", ""])), t).sendLogs("log-offline-notifications-shown-failed");
			}), C(t, n, r("WAWebSwResources").wa_default_notification_icon);
		}
		return Promise.resolve();
	}
	function C(e, t, n) {
		var r, a, i = {
			body: t,
			icon: n,
			actions: o("WAWebPushNotificationsGatingUtils").canSupportNotificationActions() ? [{
				action: p,
				title: (r = (a = u) == null ? void 0 : a.notificationSettingActionText) != null ? r : "Go to app"
			}] : []
		};
		return self.registration.showNotification(e, i);
	}
	async function b() {
		var e = await self.registration.getNotifications();
		return e.forEach(function(e) {
			return e.close();
		}), e.length;
	}
	async function v() {
		var e, t, n = await o("WAWebUserPrefsGeneral").getOfflineNotificationEngagement();
		o("WAWebUserPrefsGeneral").setOfflineNotificationContentEngagement({
			totalNotifShown: ((e = n == null ? void 0 : n.totalNotifShown) != null ? e : 0) + 1,
			totalNotifTapToOpen: (t = n == null ? void 0 : n.totalNotifTapToOpen) != null ? t : 0
		});
	}
	async function S(e, t, n) {
		if (Notification.permission && Notification.permission === o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
			var a = {
				body: t,
				icon: r("WAWebSwResources").wa_default_notification_icon,
				tag: n != null ? n : void 0,
				renotify: n != null
			};
			return self.registration.showNotification(e, a);
		}
	}
	async function R(e) {
		var t = await self.registration.getNotifications({ tag: e });
		t.forEach(function(e) {
			return e.close();
		});
	}
	l.setHideNotifications = m, l.OPEN_NOTIFICATIONS_SETTING_ACTION = p, l.showPushNotificationSyncCompleteMessage = _, l.showPushNotificationSyncStartMessage = g, l.showCallNotification = S, l.closeCallNotification = R;
}), 98);
