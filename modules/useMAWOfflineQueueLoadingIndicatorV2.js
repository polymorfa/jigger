__d("useMAWOfflineQueueLoadingIndicatorV2", [
	"MAWSharedProtocolQueueConst",
	"useMAWOfflineQueueLoadingIndicatorShown",
	"useMAWOfflineQueueLoadingIndicatorThreadJid",
	"useMAWOfflineQueueState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		e === void 0 && (e = !1), n === void 0 && (n = function() {
			return function() {
				return !0;
			};
		});
		var a = r("useMAWOfflineQueueLoadingIndicatorShown")(e), i = r("useMAWOfflineQueueLoadingIndicatorThreadJid")(t.threadKey, t.threadType), l = o("useMAWOfflineQueueState").useMAWOfflineQueueState();
		if (i != null && Object.keys(l.offlineQueueThreadStatus).length > 0) {
			var s;
			return a && l.offlineQueueThreadStatus[i] != null && ((s = l.offlineQueueThreadStatus[i]) == null ? void 0 : s.chatStatus) !== o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete;
		}
		return a && l.offlineQueueCount > 0 && l.offlineQueueSyncState !== o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete;
	}
	l.default = e;
}), 98);
