__d("WAWebInitializeWorkerBackendSw", [
	"Promise",
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
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y = 9;
	function C() {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				return yield o("WAWebDbRolloutUtil").loadSchemaVersions(), yield (h || (h = n("Promise"))).all([
					o("WAWebSignalStorage").initialize(),
					o("WAWebModelStorage").initialize(),
					o("WAWebWorkerStorage").initialize(),
					o("WAWebOffdStorage").initialize(),
					o("WAWebFtsStorage").initialize()
				]), !0;
			} catch (t) {
				return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] db init failed"]))).catching(r("getErrorSafe")(t)).sendLogs("push-notification-db-init-error"), yield v(), !1;
			}
		}), b.apply(this, arguments);
	}
	function v() {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				var e = r("justknobx")._("1050");
				if (e === !1) {
					var t, n;
					o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] unsubscribe push mgr (db fail)"])));
					var a = yield (t = yield (n = self.registration) == null || (n = n.pushManager) == null || n.getSubscription == null ? void 0 : n.getSubscription()) == null || t.unsubscribe == null ? void 0 : t.unsubscribe();
					a === !0 ? o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] unsubscribed from push mgr +"]))) : o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] Failed to unsubscribe from push manager"])));
				}
			} catch (e) {
				o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] Failed to unsubscribe from push manager"]))).catching(r("getErrorSafe")(e));
			}
		}), S.apply(this, arguments);
	}
	function R() {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				var e = yield (h || (h = n("Promise"))).all([
					I(),
					E(),
					o("WAWebUserPrefsGeneral").getOfflinePushDisabled()
				]), t = e[0], a = e[1], i = e[2];
				if (!t || a || i === !0) return D(), o("WAWebNotificationWorkerBackend").showPushNotificationSyncCompleteMessage();
				yield o("WAWebWorkerEncKeyHelper").initEncSalt(), o("WAWebInitializeWorkerBackend").startBackendWorker();
			} catch (e) {
				o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] backend start failed"]))).catching(r("getErrorSafe")(e)).sendLogs("push-notification-init-error");
			}
		}), L.apply(this, arguments);
	}
	function E() {
		return k.apply(this, arguments);
	}
	function k() {
		return k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e, t = (e = yield o("WAWebUserPrefsGeneral").getOfflinePushCount()) != null ? e : 0;
			return o("WAWebUserPrefsGeneral").setOfflinePushCount(t + 1), t > y ? (o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[push-notification] offline push limit exceeded"]))), !0) : !1;
		}), k.apply(this, arguments);
	}
	function I() {
		return T.apply(this, arguments);
	}
	function T() {
		return T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAWebUserPrefsGeneral").getAppVersionBase();
			if (e == null) return !1;
			var t = new (o("WAWebUpdaterVersion")).Version(e), n = new (o("WAWebUpdaterVersion")).Version(o("WAWebBuildConstants").VERSION_BASE);
			return n.lt(t) ? (o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
				"Service worker (",
				") version is less than main app (",
				") version"
			])), o("WAWebBuildConstants").VERSION_BASE, t).sendLogs("service-worker-lt-main-page-version"), !1) : !0;
		}), T.apply(this, arguments);
	}
	function D() {
		return x.apply(this, arguments);
	}
	function x() {
		return x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				var e;
				o("WAWebABPropsCache").initializeABPropsCache(), yield o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage();
				var t = yield (e = self.registration) == null || (e = e.pushManager) == null || e.getSubscription == null ? void 0 : e.getSubscription();
				if (t) {
					var n = yield t.unsubscribe == null ? void 0 : t.unsubscribe();
					o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Push subscription unsubscribed ", "."])), n ? "successfully" : "unsuccessfully");
				}
			} catch (e) {
				var a = r("getErrorSafe")(e);
				o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["unsubscribe-push-subscription-failure"]))).catching(a).sendLogs("unsubscribe-push-subscription-failure");
			}
		}), x.apply(this, arguments);
	}
	l.initializeDb = C, l.handlePushNotification = R;
}), 98);
