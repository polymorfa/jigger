__d("WmiMetadataThreadsWriter", ["WmiMetadataDb", "promiseDone"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s([e]);
	}
	function s(e) {
		if (e.length !== 0) {
			var t = e.map(u);
			r("promiseDone")(o("WmiMetadataDb").getMetadataDb().runInTransaction(["threads"], "readwrite", function(e) {
				return e.stores.threads.bulkPut(t);
			}, "WmiMetadataThreadsWriter.storeThreadPartialsOnDisk"));
		}
	}
	function u(e) {
		var t = e.didInsertDualThreadCutoverAdminMsg, n = e.isMigratedLocally, r = e.jid, o = e.lastReadMsgReceiptSent, a = e.optimisticThreadKey;
		return {
			didInsertDualThreadCutoverAdminMsg: t,
			isMigratedLocally: n,
			jid: r,
			lastReadMsgReceiptSent: o,
			optimisticThreadKey: a
		};
	}
	l.storeThreadPartialOnDisk = e, l.bulkStoreThreadPartialsOnDisk = s;
}), 98);
