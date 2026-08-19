__d("MAWWebWorkerSingleton", [
	"Deferred",
	"FBLogger",
	"MAWInit",
	"MAWMIC",
	"MAWStartupLoggingUtils",
	"MAWWaitForBackendSetup",
	"MAWWorkerWatchdogRecovery",
	"MawSharedWorkerV4Gating",
	"SharedWorkerBundleResource",
	"SharedWorkerMigrationUtils",
	"SharedWorkerV2ResourceExperimental",
	"SharedWorkerV4MigrationUtils",
	"SharedWorkerV4Resource",
	"WAResolvable",
	"WebWorkerV2Resource",
	"clearTimeout",
	"cr:6600",
	"err",
	"getErrorSafe",
	"gkx",
	"promiseDone",
	"setTimeout",
	"shouldUseMAWSharedWorker"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = null, s = function(n) {
		e = n;
	}, u = function() {
		return e;
	}, c = f, d = new (o("WAResolvable")).Resolvable(), m = null;
	function p() {
		return o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker() ? Promise.all([o("SharedWorkerMigrationUtils").isStatusLockHeld(n("cr:6600").name), o("SharedWorkerV4MigrationUtils").isV4WorkerRunning(n("cr:6600").name)]).then(function(e) {
			var t = e[0], n = e[1];
			return t || n;
		}) : Promise.resolve(m !== null);
	}
	function _() {
		var e = {
			isSharedWorker: o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker(),
			nativeLocksSupported: o("SharedWorkerMigrationUtils").supportsNativeWebLocks(),
			workerCreationPromiseExists: m !== null
		};
		if (e.isSharedWorker !== !0) return Promise.resolve(e.workerCreationPromiseExists === !0 ? {
			data: e,
			tag: "dedicated_exists"
		} : {
			data: e,
			tag: "dedicated_not_exists"
		});
		if (e.nativeLocksSupported !== !0) return Promise.resolve({
			data: e,
			tag: "shared_unknown_locks_not_supported"
		});
		var t = o("MAWWaitForBackendSetup").getCurrentWorkerID();
		return Promise.all([
			o("SharedWorkerMigrationUtils").isStatusLockHeld(n("cr:6600").name),
			t != null ? o("SharedWorkerMigrationUtils").isWorkerIdStatusLockHeld(n("cr:6600").name, t) : Promise.resolve(!1),
			o("SharedWorkerV4MigrationUtils").isV4WorkerRunning(n("cr:6600").name)
		]).then(function(t) {
			var n = t[0], r = t[1], o = t[2];
			return e.sharedLockHeld = n, e.workerIdLockHeld = r, e.v4Running = o, n && r ? {
				data: e,
				tag: "shared_exists_and_connected"
			} : n ? {
				data: e,
				tag: "shared_exists_not_connected"
			} : r ? {
				data: e,
				tag: "shared_only_unique_lock_held"
			} : o ? {
				data: e,
				tag: "shared_v4_running"
			} : {
				data: e,
				tag: "shared_not_exists"
			};
		});
	}
	function f() {
		m = null;
	}
	function g(e) {
		return m ? (o("MAWMIC").addPoint(e + "_wait_on_worker_creation"), o("MAWInit").MAWInit.logPoint(e + "_wait_on_worker_creation"), m) : (o("MAWInit").MAWInit.logPoint(e + "_create_worker_start"), o("MAWMIC").addPoint(e + "_create_worker_start"), m = (o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker() ? h(e) : y().then(function(e) {
			return {
				worker: e,
				workerID: "dedicated"
			};
		})).then(function(t) {
			var n = t.worker, r = t.workerID;
			return o("MAWMIC").addPoint(e + "_create_worker_end"), o("MAWInit").MAWInit.logPoint(e + "_create_worker_end"), {
				worker: n,
				workerID: r
			};
		}, function(e) {
			throw m = null, e;
		}), m);
	}
	function h(e) {
		var t = function(t, n, o) {
			r("promiseDone")(d.promise.then(function() {
				return c(t, n, o);
			}));
		};
		o("MAWWorkerWatchdogRecovery").setRecoveryForWatchdog(t);
		var a = new (r("Deferred"))(), i = async function() {
			var i = await o("SharedWorkerV4MigrationUtils").isV2WorkerRunning(n("cr:6600").name);
			if (o("MAWMIC").addBoolAnnotation("v2WorkerAlive", i), !i && "SharedWorker" in window && o("SharedWorkerMigrationUtils").supportsNativeWebLocks() && o("MawSharedWorkerV4Gating").isWorkerV4()) {
				o("MAWMIC").addBoolAnnotation("workerV4", !0);
				try {
					var l = await o("SharedWorkerV4Resource").createSharedWorkerV4(n("cr:6600"), t, {
						onQPLEvent: o("MAWStartupLoggingUtils").logSharedWorkerQPLEvents,
						reason: e
					}), u = l.worker, c = l.workerID, d = l.workerType;
					return s(u), o("MAWMIC").addPoint("shared_worker_v4_created"), o("MAWMIC").addStringAnnotation("workerID", c), o("MAWMIC").addStringAnnotation("workerType", d), u.addEventListener("error", function(e) {
						o("MAWStartupLoggingUtils").logWorkerError("Shared Worker V4", e, "");
					}), {
						worker: u.port,
						workerID: c
					};
				} catch (e) {
					o("MAWMIC").addPoint("shared_worker_v4_fallback_to_v2"), r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).mustfix("shared worker v4 init failed");
				}
			}
			var m = r("gkx")("7313");
			o("MAWMIC").addBoolAnnotation("migrationEnabled", m), await o("SharedWorkerV4MigrationUtils").detectAndTerminateV4Worker(n("cr:6600").name);
			var p = m ? o("SharedWorkerV2ResourceExperimental").createPushSafeSharedWebWorkerV2Async(n("cr:6600"), t, {
				migratedWorker: !0,
				onQPLEvent: o("MAWStartupLoggingUtils").logSharedWorkerQPLEvents,
				reason: e
			}) : o("SharedWorkerBundleResource").createPushSafeSharedWebWorkerV2Async(n("cr:6600"), t, {
				onQPLEvent: o("MAWStartupLoggingUtils").logSharedWorkerQPLEvents,
				reason: e,
				useDynamicStringInit: r("gkx")("8737")
			});
			return p.then(function(e) {
				s(e), o("MAWMIC").addPoint("shared_worker_bundle_created");
				var t = r("setTimeout")(function() {
					o("MAWMIC").addPoint("shared_worker_connection_ack_timeout"), a.reject(r("err")("Worker connection ack timeout"));
				}, 1e4), n = function(n) {
					var e, i, l;
					if (typeof n.data == "object" && ((e = n.data) == null ? void 0 : e.type) === "connection-ack" && typeof ((i = n.data) == null ? void 0 : i.response) == "object" && typeof ((l = n.data) == null || (l = l.response) == null ? void 0 : l.from) == "string") {
						var s, u, c = typeof ((s = n.data) == null || (s = s.response) == null ? void 0 : s.workerID) == "string" ? (u = n.data) == null || (u = u.response) == null ? void 0 : u.workerID : void 0;
						c != null ? (o("MAWMIC").addPoint("shared_worker_workerID_received"), o("MAWMIC").addStringAnnotation("workerID", c), t != null && r("clearTimeout")(t), a.resolve(c)) : (o("MAWMIC").addPoint("shared_worker_null_workerID_received"), o("MAWMIC").addStringAnnotation("workerID", "unknown"));
					}
				};
				return e.port.addEventListener("message", n), e.port.postMessage({ type: "ww-connection-ack" }), e.addEventListener("error", function(e) {
					o("MAWStartupLoggingUtils").logWorkerError("Shared Worker", e, "");
				}), a.getPromise().then(function(t) {
					return {
						worker: e.port,
						workerID: t
					};
				});
			});
		};
		return o("SharedWorkerV4MigrationUtils").withWorkerInitLock(n("cr:6600").name, i);
	}
	function y() {
		return Promise.resolve(o("WebWorkerV2Resource").createDedicatedV2WebWorker(n("cr:6600"))).then(function(e) {
			var t = e.url, n = e.worker;
			return n.onerror = function(e) {
				return o("MAWStartupLoggingUtils").logWorkerError("Dedicated Worker", e, t);
			}, o("MAWStartupLoggingUtils").setImportScriptsErrorListener(n), n;
		});
	}
	function C(e) {
		c = e, d.resolve();
	}
	l.getSharedWorkerInstance__TEST_ONLY = u, l.doesWorkerExist = p, l.getWorkerHealthStatus = _, l.resetWorkerCreation = f, l.createWorkerIfNone = g, l.setOnCloseForWorkerInstance = C;
}), 98);
