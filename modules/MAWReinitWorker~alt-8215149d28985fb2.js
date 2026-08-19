__d("MAWReinitWorker", [
	"MAWCommonBackendSetup",
	"MAWOccamadilloOnMutexChange",
	"MAWReinit",
	"MAWSetupBridgeOfflineConsumer"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e) {
		var t = e.allTablesPersisted, n = e.db, r = e.instanceKey, a = e.logout, i = e.reregisterDevice, l = e.rotateCryptoAuthToken, s = e.setupBridge, u = e.workerCreateReason, c = o("MAWReinit").getMAWReinit(r);
		c.start();
		var d = function() {
			o("MAWSetupBridgeOfflineConsumer").processOfflineQueue({
				tag: "InitOfflineQueueSyncComplete",
				value: void 0
			});
		};
		await o("MAWCommonBackendSetup").setupArmadilloBackend(c, function(e) {
			var r = s({
				logout: a,
				reregisterDevice: i,
				rotateCryptoAuthToken: l,
				worker: e
			});
			return t || o("MAWOccamadilloOnMutexChange").onOccamadilloMutexChange(n), r;
		}, d, d, u, function(e) {}), c.endSuccess();
	}
	l.default = e;
}), 98);
