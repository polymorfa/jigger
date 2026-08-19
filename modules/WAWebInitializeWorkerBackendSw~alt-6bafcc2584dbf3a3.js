__d("WAWebInitializeWorkerBackendSw", [
	"WALogger",
	"WAWebABPropsCache",
	"WAWebABPropsUpdateFromStorage",
	"WAWebBuildConstants",
	"WAWebDbRolloutUtil",
	"WAWebFtsStorage",
	"WAWebInitializeWorkerBackend",
	"WAWebModelStorage",
	"WAWebNotificationWorkerBackend",
	"WAWebOffdStorage",
	"WAWebSignalStorage",
	"WAWebUpdaterVersion",
	"WAWebUserPrefsGeneral",
	"WAWebWorkerEncKeyHelper",
	"WAWebWorkerStorage",
	"getErrorSafe",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h = 9;
	async function y() {
		try {
			return await o("WAWebDbRolloutUtil").loadSchemaVersions(), await Promise.all([
				o("WAWebSignalStorage").initialize(),
				o("WAWebModelStorage").initialize(),
				o("WAWebWorkerStorage").initialize(),
				o("WAWebOffdStorage").initialize(),
				o("WAWebFtsStorage").initialize()
			]), !0;
		} catch (t) {
			return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] db init failed"]))).catching(r("getErrorSafe")(t)).sendLogs("push-notification-db-init-error"), await C(), !1;
		}
	}
	async function C() {
		try {
			var e = r("justknobx")._("1050");
			if (e === !1) {
				var t, n;
				o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] unsubscribe push mgr (db fail)"])));
				var a = await ((t = await ((n = self.registration) == null || (n = n.pushManager) == null || n.getSubscription == null ? void 0 : n.getSubscription())) == null || t.unsubscribe == null ? void 0 : t.unsubscribe());
				a === !0 ? o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] unsubscribed from push mgr +"]))) : o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] Failed to unsubscribe from push manager"])));
			}
		} catch (e) {
			o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] Failed to unsubscribe from push manager"]))).catching(r("getErrorSafe")(e));
		}
	}
	async function b() {
		try {
			var e = await Promise.all([
				S(),
				v(),
				o("WAWebUserPrefsGeneral").getOfflinePushDisabled()
			]), t = e[0], n = e[1], a = e[2];
			if (!t || n || a === !0) return R(), o("WAWebNotificationWorkerBackend").showPushNotificationSyncCompleteMessage();
			await o("WAWebWorkerEncKeyHelper").initEncSalt(), o("WAWebInitializeWorkerBackend").startBackendWorker();
		} catch (e) {
			o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] backend start failed"]))).catching(r("getErrorSafe")(e)).sendLogs("push-notification-init-error");
		}
	}
	async function v() {
		var e, t = (e = await o("WAWebUserPrefsGeneral").getOfflinePushCount()) != null ? e : 0;
		return o("WAWebUserPrefsGeneral").setOfflinePushCount(t + 1), t > h ? (o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] offline push limit exceeded"]))), !0) : !1;
	}
	async function S() {
		var e = await o("WAWebUserPrefsGeneral").getAppVersionBase();
		if (e == null) return !1;
		var t = new (o("WAWebUpdaterVersion")).Version(e), n = new (o("WAWebUpdaterVersion")).Version(o("WAWebBuildConstants").VERSION_BASE);
		return n.lt(t) ? (o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
			"Service worker (",
			") version is less than main app (",
			") version"
		])), o("WAWebBuildConstants").VERSION_BASE, t).sendLogs("service-worker-lt-main-page-version"), !1) : !0;
	}
	async function R() {
		try {
			var e;
			o("WAWebABPropsCache").initializeABPropsCache(), await o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage();
			var t = await ((e = self.registration) == null || (e = e.pushManager) == null || e.getSubscription == null ? void 0 : e.getSubscription());
			if (t) {
				var n = await (t.unsubscribe == null ? void 0 : t.unsubscribe());
				o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Push subscription unsubscribed ", "."])), n ? "successfully" : "unsuccessfully");
			}
		} catch (e) {
			var a = r("getErrorSafe")(e);
			o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["unsubscribe-push-subscription-failure"]))).catching(a).sendLogs("unsubscribe-push-subscription-failure");
		}
	}
	l.initializeDb = y, l.handlePushNotification = b;
}), 98);
