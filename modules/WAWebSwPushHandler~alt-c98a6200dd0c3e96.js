__d("WAWebSwPushHandler", [
	"WALogger",
	"WAWebBoolFunc",
	"WAWebInitializeWorkerBackendSw",
	"WAWebNotificationWorkerBackend",
	"WAWebPushNotificationsGatingUtils",
	"WAWebSwCallPushNotification",
	"WAWebSwFeature",
	"WAWebWamEnumOfflineProcessRunReasons",
	"WAWebWamWorkerOfflineProcessReporter"
], (function(t, n, r, o, a, i, l) {
	var e, s = !1, u = (function(t) {
		function n() {
			for (var n, r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
			return n = t.call.apply(t, [this].concat(a)) || this, n.matchInstall = o("WAWebBoolFunc").returnTrue, n.onInstall = function(e) {}, n.matchActivate = o("WAWebBoolFunc").returnTrue, n.onActivate = function(e) {}, n.matchPush = o("WAWebBoolFunc").returnTrue, n.onPush = function(t) {
				var n = async function() {
					if (!o("WAWebPushNotificationsGatingUtils").canSupportOfflineNotifications()) return Promise.resolve();
					var n = null;
					try {
						var r;
						n = (r = t.data) == null ? void 0 : r.json();
					} catch (e) {}
					if (n != null && (n.nt === "voip_call_offer_1on1" || n.nt === "voip_call_offer_group")) return o("WAWebSwCallPushNotification").handleCallPushPayload(n);
					if (s) return Promise.resolve();
					s = !0;
					var a = await self.clients.matchAll({ type: "window" });
					if (!((a == null ? void 0 : a.length) > 0)) {
						o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[PushNotif] Starting backend for push notification"]))), o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.logWorkerInitialized(o("WAWebWamEnumOfflineProcessRunReasons").OFFLINE_PROCESS_RUN_REASONS.PUSH_NOTIFICATION);
						var i = await o("WAWebInitializeWorkerBackendSw").initializeDb();
						return i ? (o("WAWebInitializeWorkerBackendSw").handlePushNotification(), o("WAWebNotificationWorkerBackend").showPushNotificationSyncStartMessage()) : o("WAWebNotificationWorkerBackend").showPushNotificationSyncCompleteMessage(!1);
					}
				};
				t.waitUntil(n());
			}, n.matchAction = o("WAWebSwCallPushNotification").isCallAction, n.onAction = o("WAWebSwCallPushNotification").handleCallAction, babelHelpers.assertThisInitialized(n) || babelHelpers.assertThisInitialized(n);
		}
		return babelHelpers.inheritsLoose(n, t), n;
	})(o("WAWebSwFeature").SWFeature);
	l.default = u;
}), 98);
