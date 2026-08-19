__d("WAWebSwNotificationClickHandler", [
	"WALogger",
	"WAWebBoolFunc",
	"WAWebModelStorage",
	"WAWebNotificationWorkerBackend",
	"WAWebSwFeature",
	"WAWebUA",
	"WAWebUserPrefsGeneral",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s = (function(t) {
		function r() {
			for (var r, a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l];
			return r = t.call.apply(t, [this].concat(i)) || this, r.matchNotificationClick = o("WAWebBoolFunc").returnTrue, r.onNotificationClick = function(t) {
				t.notification.close(), t.waitUntil(self.clients.matchAll({ type: "window" }).then((function() {
					var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
						if (n) {
							for (var r = 0; r < n.length; r++) {
								var a = n[r];
								if (self.WindowClient != null && a instanceof self.WindowClient) return a.focus();
							}
							try {
								yield o("WAWebModelStorage").initialize(), yield u();
							} catch (t) {
								o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to log offline notification click engagement, error: ", ""])), t).sendLogs("log-offline-notifications-click-failed");
							}
							var i = self.location.origin;
							return t.action === o("WAWebNotificationWorkerBackend").OPEN_NOTIFICATIONS_SETTING_ACTION && o("WAWebUA").UA.os !== o("WAWebUA").OS_TYPE.WINDOWS && (i += "/?ns=1"), self.clients.openWindow(i);
						}
					});
					return function(e) {
						return r.apply(this, arguments);
					};
				})()));
			}, babelHelpers.assertThisInitialized(r) || babelHelpers.assertThisInitialized(r);
		}
		return babelHelpers.inheritsLoose(r, t), r;
	})(o("WAWebSwFeature").SWFeature);
	function u() {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e, t, n = yield o("WAWebUserPrefsGeneral").getOfflineNotificationEngagement();
			o("WAWebUserPrefsGeneral").setOfflineNotificationContentEngagement({
				totalNotifShown: (e = n == null ? void 0 : n.totalNotifShown) != null ? e : 0,
				totalNotifTapToOpen: ((t = n == null ? void 0 : n.totalNotifTapToOpen) != null ? t : 0) + 1
			});
		}), c.apply(this, arguments);
	}
	l.default = s;
}), 98);
