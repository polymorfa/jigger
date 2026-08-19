__d("MAWSetupMutex", [
	"LocalStorageMutex",
	"MAWAppMutex",
	"MAWBridge",
	"MAWInit",
	"MAWIssueNewUserVisibleErrors",
	"MAWLocalStorage",
	"MAWMIC",
	"MAWReinitWorker",
	"MAWSetupWorker",
	"MAWWaitForBackendSetup",
	"MAWWebWorkerSingleton",
	"MWFBLogger",
	"QPLUserFlow",
	"Run",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"promiseDone",
	"qpl",
	"react",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useEffect, m = u.useMemo, p = o("MWFBLogger").MWLogger().tags(["MAWInit"]), _ = !1, f = 0;
	function g(e) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (document.visibilityState !== "visible") return !1;
			var t = indexedDB != null, n = o("MAWLocalStorage").isLocalStorageAvailable();
			return e ? (p.debug("AppMutex - Shouldn't reinitialize, worker already exists"), !1) : !(!t || !n);
		}), h.apply(this, arguments);
	}
	function y(t) {
		var a = t.logout, i = t.reregisterDevice, l = t.rotateCryptoAuthToken, s = t.setupBridge, u = m(function() {
			return o("MAWAppMutex").use();
		}, []), h = (e || (e = r("useReStore")))(), y = h.persistenceTypes.includes("indexeddb"), C = c((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = u.takeoverFilter(e);
				!t || e.newValue === o("LocalStorageMutex").THIS_TAB || e.newValue === "" || (y || o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: [{
					tag: "DropAllSecureThreads",
					value: void 0
				}] }), yield o("MAWSetupWorker").terminateDedicatedWorker("MAWSetupMutexV2:handleStoreChange"), o("MAWWaitForBackendSetup").resetBackendSetup(), o("MAWMIC").cancel("workerMutexLost"), o("MAWInit").MAWInit.cancel("workerMutexLost"), u.onMutexDeath());
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [u, y]), b = c(function() {
			u.onMutexDeath(), r("promiseDone")(o("MAWSetupWorker").terminateDedicatedWorker("MAWSetupMutexV2:handleUnload"));
		}, [u]), v = c(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("MAWWebWorkerSingleton").doesWorkerExist(), t = yield g(e);
			if (!(!t || _)) {
				_ = !0, f++;
				try {
					yield r("MAWReinitWorker")({
						allTablesPersisted: y,
						db: h,
						instanceKey: f,
						logout: a,
						reregisterDevice: i,
						rotateCryptoAuthToken: l,
						setupBridge: s,
						workerCreateReason: "mawReinitSetupMutex"
					}), o("MAWIssueNewUserVisibleErrors").deleteUserVisibleErrorByJSErrorMessage("maw_appmutex_no_permission");
				} catch (e) {
					var n = r("getErrorSafe")(e);
					p.catching(n).mustfix("AppMutex - failed to reinitialize worker"), r("QPLUserFlow").endFailure(r("qpl")._(25310984, "169"), "failed_to_reinitialize_worker", {
						annotations: { string: { error: n.message } },
						error: n,
						instanceKey: f
					});
				} finally {
					_ = !1;
				}
			}
		}), [
			y,
			h,
			a,
			i,
			l,
			s
		]);
		d(function() {
			window.addEventListener("storage", C);
			var e = o("Run").onBeforeUnload(b, !1), t = o("Run").onUnload(b);
			return window.addEventListener("visibilitychange", v), function() {
				window.removeEventListener("storage", C), e.remove(), t.remove(), window.removeEventListener("visibilitychange", v);
			};
		}, [
			C,
			b,
			v
		]);
	}
	l.useMutex = y;
}), 98);
