__d("MAWInsertAdminMessageInCutoverThreadsApi", [
	"MAWAdminWriteCutoverThreadMsgTxn",
	"MAWDbThreadTxns",
	"MAWIndexedDb",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READONLY,
		ftsBackloggedMessages: e.READWRITE,
		groupInfo: e.READONLY,
		media: e.READONLY,
		messages: e.READWRITE,
		threads: e.READWRITE
	}, "insertAdminMessageInCutoverThreads", function(e) {
		return (function(t) {
			var n = t.openThreadId, r = t.threadJid, a = t.traceId;
			return o("MAWAdminWriteCutoverThreadMsgTxn").writeCutoverThreadAdminMsg(e, r, n, a).then(function(t) {
				var n = t.needsMarkThreadAsMigrated;
				if (n) return o("MAWDbThreadTxns").markCutoverThreadAsMigratedLocally(e, r);
			}).then(function() {
				return !0;
			});
		});
	});
	l.insertAdminMessageInCutoverThreads = s;
}), 98);
