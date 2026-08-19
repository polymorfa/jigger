__d("WASentBytesCacheApi", ["WASignalDB"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return o("WASignalDB").getDb().runInTransaction(["sentBytesCache"], "readwrite", function(t) {
			return t.stores.sentBytesCache.bulkDelete(e);
		}, o("WASignalDB").signalOp("deleteSentBytes"));
	}
	function s(e) {
		return o("WASignalDB").getDb().runInTransaction(["sentBytesCache"], "readonly", async function(t) {
			var n = await t.stores.sentBytesCache.readIndexRange("ts", { lessThanOrEqual: [e] });
			return n.map(function(e) {
				return e.waMsgId;
			});
		}, o("WASignalDB").signalOp("loadExpiredSentBytes"));
	}
	function u(e) {
		return o("WASignalDB").getDb().runInTransaction(["sentBytesCache"], "readonly", async function(t) {
			var n = await t.stores.sentBytesCache.bulkGet(e);
			return n.filter(Boolean);
		}, o("WASignalDB").signalOp("loadSentBytes"));
	}
	function c(e) {
		return o("WASignalDB").getDb().runInTransaction(["sentBytesCache"], "readwrite", function(t) {
			return t.stores.sentBytesCache.bulkPut([e]);
		}, o("WASignalDB").signalOp("saveSentBytes")).then(function() {});
	}
	l.deleteSentBytes = e, l.loadExpired = s, l.loadSentBytes = u, l.saveSentBytes = c;
}), 98);
