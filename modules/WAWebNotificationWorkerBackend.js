__d("WAWebNotificationWorkerBackend", [
	"Promise",
	"WALogger",
	"WAWebNotificationConstants",
	"WAWebPushNotificationsGatingUtils",
	"WAWebSwResources",
	"WAWebUserPrefsGeneral",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = "WhatsApp", c = null, d = null, m = !1;
	function p() {
		m = !0;
	}
	var _ = "open-notifications-setting";
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (e === void 0 && (e = !0), !m) return yield d, d = h(e), d;
		}), g.apply(this, arguments);
	}
	function h(e) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, n, r, a;
			return c == null && e && (c = yield o("WAWebUserPrefsGeneral").getOfflineNotificationContent()), R((t = (n = c) == null ? void 0 : n.notificationTitle) != null ? t : u, (r = (a = c) == null ? void 0 : a.notificationSyncCompleteText) != null ? r : "Syncing messages complete", e);
		}), y.apply(this, arguments);
	}
	function C() {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			return d || (d = v(), d);
		}), b.apply(this, arguments);
	}
	function v() {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e, t, n, r;
			return c == null && (c = yield o("WAWebUserPrefsGeneral").getOfflineNotificationContent()), R((e = (t = c) == null ? void 0 : t.notificationTitle) != null ? e : u, (n = (r = c) == null ? void 0 : r.notificationText) != null ? n : "Syncing messages in the background");
		}), S.apply(this, arguments);
	}
	function R(e, t, n) {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
			if (i === void 0 && (i = !0), Notification.permission && Notification.permission === o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
				var l = yield k();
				return l === 0 && i && T().catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to log offline notification shown engagement, error: ", ""])), t).sendLogs("log-offline-notifications-shown-failed");
				}), E(t, a, r("WAWebSwResources").wa_default_notification_icon);
			}
			return (s || (s = n("Promise"))).resolve();
		}), L.apply(this, arguments);
	}
	function E(e, t, n) {
		var r, a, i = {
			body: t,
			icon: n,
			actions: o("WAWebPushNotificationsGatingUtils").canSupportNotificationActions() ? [{
				action: _,
				title: (r = (a = c) == null ? void 0 : a.notificationSettingActionText) != null ? r : "Go to app"
			}] : []
		};
		return self.registration.showNotification(e, i);
	}
	function k() {
		return I.apply(this, arguments);
	}
	function I() {
		return I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield self.registration.getNotifications();
			return e.forEach(function(e) {
				return e.close();
			}), e.length;
		}), I.apply(this, arguments);
	}
	function T() {
		return D.apply(this, arguments);
	}
	function D() {
		return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e, t, n = yield o("WAWebUserPrefsGeneral").getOfflineNotificationEngagement();
			o("WAWebUserPrefsGeneral").setOfflineNotificationContentEngagement({
				totalNotifShown: ((e = n == null ? void 0 : n.totalNotifShown) != null ? e : 0) + 1,
				totalNotifTapToOpen: (t = n == null ? void 0 : n.totalNotifTapToOpen) != null ? t : 0
			});
		}), D.apply(this, arguments);
	}
	function x(e, t, n) {
		return $.apply(this, arguments);
	}
	function $() {
		return $ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			if (Notification.permission && Notification.permission === o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
				var a = {
					body: t,
					icon: r("WAWebSwResources").wa_default_notification_icon,
					tag: n != null ? n : void 0,
					renotify: n != null
				};
				return self.registration.showNotification(e, a);
			}
		}), $.apply(this, arguments);
	}
	function P(e) {
		return N.apply(this, arguments);
	}
	function N() {
		return N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield self.registration.getNotifications({ tag: e });
			t.forEach(function(e) {
				return e.close();
			});
		}), N.apply(this, arguments);
	}
	l.setHideNotifications = p, l.OPEN_NOTIFICATIONS_SETTING_ACTION = _, l.showPushNotificationSyncCompleteMessage = f, l.showPushNotificationSyncStartMessage = C, l.showCallNotification = x, l.closeCallNotification = P;
}), 98);
