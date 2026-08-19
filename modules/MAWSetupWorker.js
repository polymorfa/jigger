__d("MAWSetupWorker", [
	"CurrentAppID",
	"Deferred",
	"IGDWebUtils",
	"MAWClientConsistencyRefresh",
	"MAWCommonSetupWorker",
	"MAWCrossWorkerPortal",
	"MAWInit",
	"MAWLoggerUtils",
	"MAWMIC",
	"MAWSetupWorkerAuxStateForLogging",
	"MAWUnrecoverableDbErrors",
	"MAWWaitForBackendSetup",
	"MAWWebWorkerSingleton",
	"MAWWorkerOnClose",
	"MAWWorkerReboot",
	"MAWWorkerWatchdog",
	"MWFBLogger",
	"QPLUserFlow",
	"SharedWorkerBundleResource",
	"SharedWorkerV2ResourceExperimental",
	"SharedWorkerV4Resource",
	"asyncToGeneratorRuntime",
	"cr:6600",
	"gkx",
	"promiseDone",
	"shouldUseMAWSharedWorker"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p = o("MWFBLogger").MWLogger().tags([o("MAWLoggerUtils").Tag.WorkerSetup, o("MAWLoggerUtils").Tag.MAWInit]), _ = o("IGDWebUtils").isInstagramWebSupportedApp(Number(o("CurrentAppID").getAppID())), f = _ ? "IGDAWMainWorker" : "MAWMainWorker", g = null, h = !1;
	function y(e) {
		h = e, o("MAWSetupWorkerAuxStateForLogging").WorkerLifeCycleState.workerTerminatedPermanently = e;
	}
	function C() {
		return h;
	}
	function b(e) {
		switch (e) {
			case "mawInit": return !0;
			case "mawReinitSetupMutex":
			case "mawReinitReregDevice":
			case "bridgeRecovery":
			case "workerUpgraded":
			case "rebootRequired":
			case "workerTerminated":
			default: return !1;
		}
	}
	function v(e, t, n, r, o, a, i) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, c, d, m) {
			if (C()) throw p.mustfixThrow("Worker is permanently killed.");
			o("MAWWaitForBackendSetup").markBackendSetupStarted();
			var _ = function(n) {
				return v(t, a, i, l, n, d, m);
			};
			(c === "bridgeRecovery" || c === "backendSetupFailure") && r("QPLUserFlow").addPoint(o("MAWWorkerReboot").BAD_STATE_RECOVERY_QPL, "create_worker_start"), o("MAWWebWorkerSingleton").setOnCloseForWorkerInstance(function(e, t, n) {
				o("MAWWorkerOnClose").startQPL(e, n, t);
				var a = e != null ? e : "unknown", i = M(a) && o("MAWWaitForBackendSetup").isBackendSetupSettled();
				if (o("MAWSetupWorkerAuxStateForLogging").WorkerLifeCycleState.restartReasons.push(a), o("MAWSetupWorkerAuxStateForLogging").WorkerLifeCycleState.restartMessageTypes.push(n != null ? n : "unknown"), o("MAWWaitForBackendSetup").getCurrentWorkerID() == null || t !== o("MAWWaitForBackendSetup").getCurrentWorkerID()) {
					o("MAWInit").MAWInit.logPoint(a + "_worker_termination_skipped"), o("MAWMIC").addPoint(a + "_worker_termination_skipped"), o("MAWWorkerOnClose").success(a + "_worker_restart_skipped"), p.warn("Worker termination skipped %s. Terminate reason: %s, Worker: %s, current worker: %s", c, e, t, o("MAWWaitForBackendSetup").getCurrentWorkerID());
					return;
				}
				o("MAWWaitForBackendSetup").resetCurrentWorkerSkipIdCheck(), p.warn("Worker termination started %s. Terminate reason: %s, Worker: %s", c, e, t), o("MAWInit").MAWInit.logPoint(a + "_worker_terminated"), o("MAWMIC").addPoint(a + "_worker_terminated"), o("MAWInit").MAWInit.addStringArrayAnnotation("workerTerminationReason", o("MAWSetupWorkerAuxStateForLogging").WorkerLifeCycleState.restartReasons), o("MAWMIC").addStringArrayAnnotation("workerTerminationReason", o("MAWSetupWorkerAuxStateForLogging").WorkerLifeCycleState.restartReasons), o("MAWInit").MAWInit.addStringArrayAnnotation("workerTerminationMsgType", o("MAWSetupWorkerAuxStateForLogging").WorkerLifeCycleState.restartMessageTypes), o("MAWMIC").addStringArrayAnnotation("workerTerminationMsgType", o("MAWSetupWorkerAuxStateForLogging").WorkerLifeCycleState.restartMessageTypes);
				var l = e === "requested-upgrade" ? "workerUpgraded" : a + "_worker_terminated";
				r("promiseDone")(P(), function() {
					if (i) {
						y(!0), p.warn("Tab displays soft refresh. Flow: %s", a), o("MAWInit").MAWInit.logPoint(a + "_soft_refresh"), o("MAWMIC").addPoint(a + "_soft_refresh"), r("MAWClientConsistencyRefresh")("maw_request_refresh"), o("MAWWorkerOnClose").success("softRefresh");
						return;
					}
					if (a !== "logout") return _(l).then(function() {
						return o("MAWWorkerOnClose").success(l);
					}).catch(function(e) {
						o("MAWInit").MAWInit.fail("worker_restart_failed", e), o("MAWWorkerOnClose").fail("workerUpgradeFailed", e), o("MAWWaitForBackendSetup").rejectBackendSetup(e);
					});
					o("SharedWorkerV4Resource").clearV4HrpCache(f), o("MAWWorkerOnClose").success("skip_logout");
				});
			});
			var h = yield o("MAWWebWorkerSingleton").createWorkerIfNone(c), b = h.worker, S = h.workerID;
			o("MAWWaitForBackendSetup").setCurrentWorker(S);
			var R = new (r("Deferred"))();
			g = R.getPromise(), (c === "bridgeRecovery" || c === "backendSetupFailure") && r("QPLUserFlow").addPoint(o("MAWWorkerReboot").BAD_STATE_RECOVERY_QPL, "create_worker_end");
			var L = o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker();
			p.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"worker setting up with reason: ",
				", use shared worker: ",
				""
			])), c, L), L && b.addEventListener("message", function(e) {
				var t, n;
				typeof e.data == "object" && ((t = e.data) == null ? void 0 : t.type) === "sw-shutdown" && typeof e.data.response == "object" && ((n = e.data.response) == null ? void 0 : n.reason) === "maw-request-refresh" && r("MAWClientConsistencyRefresh")("maw_request_refresh");
			});
			var E = new (o("MAWCommonSetupWorker")).BridgeAdapter(b, f);
			return yield a(E), R.resolve(E), p.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["bridge promise resolved"]))), o("MAWMIC").addPoint(c + "_connect_to_backend"), yield o("MAWInit").MAWInit.measurePerformance(c + "-init_backend", n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = function(n) {
					return o("MAWCommonSetupWorker").initWorker({
						bridge: E,
						ebState: n,
						onWorkerAlreadySetup: i,
						onWorkerRestart: _,
						reason: c,
						vaultMaterials: t
					});
				}, n = L ? yield e(m) : yield E.fullyConnected.then(function() {
					return e(m);
				});
				o("MAWWaitForBackendSetup").resolveBackendSetup(n), p.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["backend setup successful"])));
			})), o("MAWWaitForBackendSetup").waitForBackendSetup("setup-worker");
		}), S.apply(this, arguments);
	}
	function R(e, t, n, a, i, l, s) {
		var u = v(e, t, n, a, i, l, s);
		return b(i) && r("promiseDone")(o("MAWWaitForBackendSetup").waitForBackendSetup("init worker watchdog").then(function() {
			o("MAWWorkerWatchdog").startWatchdog();
		})), u;
	}
	function L() {
		return g;
	}
	function E(e) {
		return k.apply(this, arguments);
	}
	function k() {
		return k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			return p.debug("Terminating dedicated worker: %s. Bridge Promise: %s", e, !!g), g ? (p.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["worker terminating: for ", ""])), e), yield P(), !0) : (p.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["worker doesn't exist, no need to terminate"]))), !1);
		}), k.apply(this, arguments);
	}
	function I() {
		return T.apply(this, arguments);
	}
	function T() {
		return T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield E("terminateWorkerPermanently"), y(!0);
		}), T.apply(this, arguments);
	}
	function D(e, t) {
		var a = r("gkx")("7313");
		return a ? o("SharedWorkerV2ResourceExperimental").terminateSharedWorker(n("cr:6600"), e ? "maw-request-refresh" : t != null ? t : "unknown") : o("SharedWorkerBundleResource").terminateSharedWorker(n("cr:6600"), null, e ? "maw-request-refresh" : t != null ? t : "unknown");
	}
	function x(e) {
		return $.apply(this, arguments);
	}
	function $() {
		return $ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker();
			if (t) {
				p.debug("Terminating shared worker: %s", e);
				var n = yield D(!1, e).then(function() {
					return !0;
				}, function() {
					return !1;
				});
				p.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Shared worker responded to termination request: ", ""])), n);
			} else yield E(e);
		}), $.apply(this, arguments);
	}
	function P() {
		return N.apply(this, arguments);
	}
	function N() {
		return N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e;
			p.debug("Updating worker state on termination"), (e = yield g) == null || e.close(), g = null, o("MAWWaitForBackendSetup").resetBackendSetup(), o("MAWCrossWorkerPortal").killPortalWhenWorkerTerminating(), o("MAWWebWorkerSingleton").resetWorkerCreation();
		}), N.apply(this, arguments);
	}
	function M(e) {
		return !!(e === "MAWEARKeychainDecryptionError" || o("MAWUnrecoverableDbErrors").isUnrecoverableDbErrorByName(e) || e === "update-required-fbid_change" || e === "update-required-vault_materials_change");
	}
	l.setPreventWorkerRestart = y, l.getOrSetupWorker = R, l.waitForWorkerSetup = L, l.terminateDedicatedWorker = E, l.terminateWorkerPermanently = I, l.killSharedWorker = D, l.terminateWorker = x;
}), 98);
