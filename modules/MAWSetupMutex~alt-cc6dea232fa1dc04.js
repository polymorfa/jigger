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
	"getErrorSafe",
	"promiseDone",
	"qpl",
	"react",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useEffect, m = u.useMemo, p = o("MWFBLogger").MWLogger().tags(["MAWInit"]), _ = !1, f = 0;
	async function g(e) {
		if (document.visibilityState !== "visible") return !1;
		var t = indexedDB != null, n = o("MAWLocalStorage").isLocalStorageAvailable();
		return e ? (p.debug("AppMutex - Shouldn't reinitialize, worker already exists"), !1) : !(!t || !n);
	}
	function h(t) {
		var n = t.logout, a = t.reregisterDevice, i = t.rotateCryptoAuthToken, l = t.setupBridge, s = m(function() {
			return o("MAWAppMutex").use();
		}, []), u = (e || (e = r("useReStore")))(), h = u.persistenceTypes.includes("indexeddb"), y = c(async function(e) {
			var t = s.takeoverFilter(e);
			!t || e.newValue === o("LocalStorageMutex").THIS_TAB || e.newValue === "" || (h || o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: [{
				tag: "DropAllSecureThreads",
				value: void 0
			}] }), await o("MAWSetupWorker").terminateDedicatedWorker("MAWSetupMutexV2:handleStoreChange"), o("MAWWaitForBackendSetup").resetBackendSetup(), o("MAWMIC").cancel("workerMutexLost"), o("MAWInit").MAWInit.cancel("workerMutexLost"), s.onMutexDeath());
		}, [s, h]), C = c(function() {
			s.onMutexDeath(), r("promiseDone")(o("MAWSetupWorker").terminateDedicatedWorker("MAWSetupMutexV2:handleUnload"));
		}, [s]), b = c(async function() {
			var e = await o("MAWWebWorkerSingleton").doesWorkerExist(), t = await g(e);
			if (!(!t || _)) {
				_ = !0, f++;
				try {
					await r("MAWReinitWorker")({
						allTablesPersisted: h,
						db: u,
						instanceKey: f,
						logout: n,
						reregisterDevice: a,
						rotateCryptoAuthToken: i,
						setupBridge: l,
						workerCreateReason: "mawReinitSetupMutex"
					}), o("MAWIssueNewUserVisibleErrors").deleteUserVisibleErrorByJSErrorMessage("maw_appmutex_no_permission");
				} catch (e) {
					var s = r("getErrorSafe")(e);
					p.catching(s).mustfix("AppMutex - failed to reinitialize worker"), r("QPLUserFlow").endFailure(r("qpl")._(25310984, "169"), "failed_to_reinitialize_worker", {
						annotations: { string: { error: s.message } },
						error: s,
						instanceKey: f
					});
				} finally {
					_ = !1;
				}
			}
		}, [
			h,
			u,
			n,
			a,
			i,
			l
		]);
		d(function() {
			window.addEventListener("storage", y);
			var e = o("Run").onBeforeUnload(C, !1), t = o("Run").onUnload(C);
			return window.addEventListener("visibilitychange", b), function() {
				window.removeEventListener("storage", y), e.remove(), t.remove(), window.removeEventListener("visibilitychange", b);
			};
		}, [
			y,
			C,
			b
		]);
	}
	l.useMutex = h;
}), 98);
