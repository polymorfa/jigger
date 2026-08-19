__d("MAWWorkerPersistedDataService", [
	"FBLogger",
	"MAWBridge",
	"MAWCacheServiceUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "maw_persisted_data_service_broadcast", s = function() {
		return o("MAWCacheServiceUtils").globalScope.BroadcastChannel ? new (o("MAWCacheServiceUtils")).globalScope.BroadcastChannel(e) : (r("FBLogger")("messenger_e2ee_web").warn("BroadcastChannel is not supported in this browser"), null);
	}, u = (function() {
		function t() {
			this.$1 = s();
		}
		var n = t.prototype;
		return n.emitBroadcastChannelMessageToUI = function(n, r, a, i) {
			var t = {
				cache: r,
				instanceKey: i,
				namespace: n,
				source: a
			};
			this.$1 == null ? o("MAWBridge").getBridge().fireAndForget("event", "broadcastChannelFallback", {
				event: { data: t },
				namespace: e
			}) : this.$1.postMessage(t);
		}, t;
	})(), c = null, d = function() {
		return c == null && (c = new u()), c;
	};
	l.getMAWWorkerPersistedDataService = d;
}), 98);
