__d("WAWebSwNotificationClickHandler", [
	"WALogger",
	"WAWebBoolFunc",
	"WAWebModelStorage",
	"WAWebNotificationWorkerBackend",
	"WAWebSwFeature",
	"WAWebUA",
	"WAWebUserPrefsGeneral"
], (function(t, n, r, o, a, i, l) {
	var e, s = (function(t) {
		function n() {
			for (var n, r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
			return n = t.call.apply(t, [this].concat(a)) || this, n.matchNotificationClick = o("WAWebBoolFunc").returnTrue, n.onNotificationClick = function(t) {
				t.notification.close(), t.waitUntil(self.clients.matchAll({ type: "window" }).then(async function(n) {
					if (n) {
						for (var r = 0; r < n.length; r++) {
							var a = n[r];
							if (self.WindowClient != null && a instanceof self.WindowClient) return a.focus();
						}
						try {
							await o("WAWebModelStorage").initialize(), await u();
						} catch (t) {
							o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to log offline notification click engagement, error: ", ""])), t).sendLogs("log-offline-notifications-click-failed");
						}
						var i = self.location.origin;
						return t.action === o("WAWebNotificationWorkerBackend").OPEN_NOTIFICATIONS_SETTING_ACTION && o("WAWebUA").UA.os !== o("WAWebUA").OS_TYPE.WINDOWS && (i += "/?ns=1"), self.clients.openWindow(i);
					}
				}));
			}, babelHelpers.assertThisInitialized(n) || babelHelpers.assertThisInitialized(n);
		}
		return babelHelpers.inheritsLoose(n, t), n;
	})(o("WAWebSwFeature").SWFeature);
	async function u() {
		var e, t, n = await o("WAWebUserPrefsGeneral").getOfflineNotificationEngagement();
		o("WAWebUserPrefsGeneral").setOfflineNotificationContentEngagement({
			totalNotifShown: (e = n == null ? void 0 : n.totalNotifShown) != null ? e : 0,
			totalNotifTapToOpen: ((t = n == null ? void 0 : n.totalNotifTapToOpen) != null ? t : 0) + 1
		});
	}
	l.default = s;
}), 98);
