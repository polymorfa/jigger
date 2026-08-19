__d("WAWebSwPushHandler", [
	"Promise",
	"WALogger",
	"WAWebBoolFunc",
	"WAWebInitializeWorkerBackendSw",
	"WAWebNotificationWorkerBackend",
	"WAWebPushNotificationsGatingUtils",
	"WAWebSwCallPushNotification",
	"WAWebSwFeature",
	"WAWebWamEnumOfflineProcessRunReasons",
	"WAWebWamWorkerOfflineProcessReporter",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = !1, c = (function(t) {
		function r() {
			for (var r, a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l];
			return r = t.call.apply(t, [this].concat(i)) || this, r.matchInstall = o("WAWebBoolFunc").returnTrue, r.onInstall = function(e) {}, r.matchActivate = o("WAWebBoolFunc").returnTrue, r.onActivate = function(e) {}, r.matchPush = o("WAWebBoolFunc").returnTrue, r.onPush = function(t) {
				var r = (function() {
					var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						if (!o("WAWebPushNotificationsGatingUtils").canSupportOfflineNotifications()) return (s || (s = n("Promise"))).resolve();
						var r = null;
						try {
							var a;
							r = (a = t.data) == null ? void 0 : a.json();
						} catch (e) {}
						if (r != null && (r.nt === "voip_call_offer_1on1" || r.nt === "voip_call_offer_group")) return o("WAWebSwCallPushNotification").handleCallPushPayload(r);
						if (u) return (s || (s = n("Promise"))).resolve();
						u = !0;
						var i = yield self.clients.matchAll({ type: "window" });
						if (!((i == null ? void 0 : i.length) > 0)) {
							o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[PushNotif] Starting backend for push notification"]))), o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.logWorkerInitialized(o("WAWebWamEnumOfflineProcessRunReasons").OFFLINE_PROCESS_RUN_REASONS.PUSH_NOTIFICATION);
							var l = yield o("WAWebInitializeWorkerBackendSw").initializeDb();
							return l ? (o("WAWebInitializeWorkerBackendSw").handlePushNotification(), o("WAWebNotificationWorkerBackend").showPushNotificationSyncStartMessage()) : o("WAWebNotificationWorkerBackend").showPushNotificationSyncCompleteMessage(!1);
						}
					});
					return function() {
						return r.apply(this, arguments);
					};
				})();
				t.waitUntil(r());
			}, r.matchAction = o("WAWebSwCallPushNotification").isCallAction, r.onAction = o("WAWebSwCallPushNotification").handleCallAction, babelHelpers.assertThisInitialized(r) || babelHelpers.assertThisInitialized(r);
		}
		return babelHelpers.inheritsLoose(r, t), r;
	})(o("WAWebSwFeature").SWFeature);
	l.default = c;
}), 98);
