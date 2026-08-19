__d("MAWStateManagerSyncToMainThread", [
	"FBLogger",
	"MAWBridge",
	"WACommsConnectionState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = { WACommsConnectionState: o("WACommsConnectionState").WACommsConnectionState };
	function s() {
		var t = function(n) {
			var t = e[n];
			d(n, t.get()), t.onSet(function(e) {
				d(n, e);
			});
		};
		for (var n of Object.keys(e)) t(n);
	}
	function u(t, n) {
		var o = e[t];
		if (o == null) {
			r("FBLogger")("messenger_e2ee_web").warn("Unable to find GenericStateManager for key %s", t);
			return;
		}
		o.set(n);
	}
	function c() {
		for (var t of Object.keys(e)) {
			var n = e[t];
			d(t, n.get());
		}
	}
	function d(e, t) {
		o("MAWBridge").getBridge().fireAndForget("event", "updateStateManagerStateInMainThread", {
			stateManagerKey: e,
			value: t
		});
	}
	l.subscribeAndSyncStateManagerValuesToMainThread = s, l.updateStateManagerInMainThreadFromBridgeCall = u, l.resendCurrentValuesToMainThread = c;
}), 98);
