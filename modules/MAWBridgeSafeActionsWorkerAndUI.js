__d("MAWBridgeSafeActionsWorkerAndUI", [
	"ExecutionEnvironment",
	"FBLogger",
	"MAWBridge",
	"Promise",
	"ifRequireable"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, a, i) {
		return (s || (s = r("ExecutionEnvironment"))).isInWorker ? o("MAWBridge").getBridge().sendAndReceive("backend", t, a, i == null ? void 0 : i.isLoggingDisabled) : new (e || (e = (n("Promise"))))(function(e, n) {
			return r("ifRequireable")("MAWBridgeSendAndReceive", function(n) {
				var r = n.sendAndReceive;
				return e(r("backend", t, a, i));
			}, function() {
				return n("MAWBridgeSendAndReceive not available in UI ifRequired");
			});
		});
	}
	function c(e, t, n) {
		return (s || (s = r("ExecutionEnvironment"))).isInWorker ? o("MAWBridge").getBridge().fireAndForget("backend", e, t, n) : r("ifRequireable")("MAWBridgeFireAndForget", function(r) {
			var o = r.fireAndForget;
			return o("backend", e, t, n);
		}, function() {
			throw r("FBLogger")("messenger_web").mustfixThrow("MAWBridgeFireAndForget not available in UI ifRequired");
		});
	}
	l.sendAndReceiveBackendWorkerAndUIShared = u, l.fireAndForgetBackendWorkerAndUIShared = c;
}), 98);
