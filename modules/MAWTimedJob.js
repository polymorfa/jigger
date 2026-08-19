__d("MAWTimedJob", [
	"FBLogger",
	"MAWBridgeLoggingUtils",
	"MAWMaybeWithTimeout",
	"MAWTimedBridge",
	"MAWUIJob",
	"MAWWaitForBackendSetup",
	"MAWWebWorkerSingleton",
	"MAWWorkerEvent"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		fireAndForget: function(t, n) {
			n === void 0 && (n = o("MAWTimedBridge").DEFAULT_MAW_BRIDGE_TIMEOUT_MS);
			var e = !1;
			return o("MAWMaybeWithTimeout").maybeWithTimeout(o("MAWWaitForBackendSetup").waitForBackendSetup(t.type).then(function() {
				return e = !0, o("MAWUIJob").UIJobStarters.fireAndForget(t);
			}), n, function() {
				return o("MAWWebWorkerSingleton").getWorkerHealthStatus().then(function(n) {
					throw r("FBLogger")("maw_core_lla").mustfixThrow("Failed to ack execution of job %s in time. Backend setup: %s, workerHealthStatus: %s", t.type, e, n.tag);
				});
			}, t.type);
		},
		waitUntilCompleted: function(t, n) {
			n === void 0 && (n = o("MAWTimedBridge").DEFAULT_MAW_BRIDGE_TIMEOUT_MS);
			var e = !1, a = o("MAWBridgeLoggingUtils").getBridgeEventInstanceKey(t.type);
			return o("MAWMaybeWithTimeout").maybeWithTimeout(o("MAWWaitForBackendSetup").waitForBackendSetup(t.type).then(function() {
				return e = !0, o("MAWUIJob").UIJobStarters.waitUntilCompleted(t, { onAck: function(n) {
					o("MAWWorkerEvent").logAck(t.type, n);
				} }, { bridgeQPLInstanceKey: a });
			}), n, function() {
				return o("MAWWebWorkerSingleton").getWorkerHealthStatus().then(function(n) {
					throw r("FBLogger")("maw_core_lla").mustfixThrow("Failed to complete execution of job %s in time. Backend setup: %s, workerHealthStatus: %s", t.type, e, n.tag);
				});
			}, t.type);
		},
		waitUntilPersisted: function(t, n) {
			n === void 0 && (n = o("MAWTimedBridge").DEFAULT_MAW_BRIDGE_TIMEOUT_MS);
			var e = !1, a = o("MAWBridgeLoggingUtils").getBridgeEventInstanceKey(t.type);
			return o("MAWMaybeWithTimeout").maybeWithTimeout(o("MAWWaitForBackendSetup").waitForBackendSetup(t.type).then(function() {
				return e = !0, o("MAWUIJob").UIJobStarters.waitUntilPersisted(t, { onAck: function(n) {
					o("MAWWorkerEvent").logAck(t.type, n);
				} }, { bridgeQPLInstanceKey: a });
			}), n, function() {
				return o("MAWWebWorkerSingleton").getWorkerHealthStatus().then(function(n) {
					throw r("FBLogger")("maw_core_lla").mustfixThrow("Failed to persist execution of job %s in time. Backend setup: %s, workerHealthStatus: %s", t.type, e, n.tag);
				});
			}, t.type);
		}
	};
	l.TimedUIJobStarters = e;
}), 98);
