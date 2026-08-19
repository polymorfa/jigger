__d("WAWebSwPeriodicSyncHandler", [
	"Promise",
	"WAComms",
	"WALogger",
	"WAWebBoolFunc",
	"WAWebInitializeWorkerBackendSw",
	"WAWebNotificationWorkerBackend",
	"WAWebPushNotificationsGatingUtils",
	"WAWebSwFeature",
	"WAWebWamEnumOfflineProcessRunReasons",
	"WAWebWamWorkerOfflineProcessReporter",
	"asyncToGeneratorRuntime",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m = !1, p = (function(t) {
		function a() {
			for (var a, i = arguments.length, l = new Array(i), p = 0; p < i; p++) l[p] = arguments[p];
			return a = t.call.apply(t, [this].concat(l)) || this, a.matchPeriodicSync = o("WAWebBoolFunc").returnTrue, a.onPeriodicSync = (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					if (!o("WAWebPushNotificationsGatingUtils").canSupportPeriodicBackgroundSync() || r("justknobx")._("2337") !== !1) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[background-sync] Invalid access"]))).sendLogs("background-sync-invalid-access"), (d || (d = n("Promise"))).resolve();
					if (t.tag !== "background-sync") return o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[background-sync] Received an unknown tag: ", ""])), t.tag).sendLogs("background-sync-received-unknown-tag"), (d || (d = n("Promise"))).resolve();
					if (m || o("WAComms").getComms()) return (d || (d = n("Promise"))).resolve();
					m = !0;
					var a = yield self.clients.matchAll({ type: "window" });
					if ((a == null ? void 0 : a.length) > 0) {
						o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[background-sync] skip: active pages exist"]))).sendLogs("background-sync-called-while-active-pages-exist");
						return;
					}
					o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[background-sync] Starting backend for background sync"]))), o("WAWebWamWorkerOfflineProcessReporter").WorkerOfflineResumeReporter.logWorkerInitialized(o("WAWebWamEnumOfflineProcessRunReasons").OFFLINE_PROCESS_RUN_REASONS.PERIODIC_BACKGROUND_SYNC);
					var i = yield o("WAWebInitializeWorkerBackendSw").initializeDb();
					i && (o("WAWebNotificationWorkerBackend").setHideNotifications(), o("WAWebInitializeWorkerBackendSw").handlePushNotification());
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})(), babelHelpers.assertThisInitialized(a) || babelHelpers.assertThisInitialized(a);
		}
		return babelHelpers.inheritsLoose(a, t), a;
	})(o("WAWebSwFeature").SWFeature);
	l.default = p;
}), 98);
