__d("MAWWriteAdminMessageForDualThreadCutoverApi", [
	"MAWDbThreadTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"mawAdminWriteDualThreadCutoverMsgTxns"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READONLY,
		ftsBackloggedMessages: e.READWRITE,
		groupInfo: e.READONLY,
		media: e.READONLY,
		messages: e.READWRITE,
		threads: e.READWRITE
	}, "writeAdminMessageForDualThreadCutover", function(e) {
		return (function(t) {
			var n = t.chatJid, a = t.cutoverTimestampMs, i = t.localizationType, l = t.otherUserID;
			return r("mawAdminWriteDualThreadCutoverMsgTxns")(e, n, a, i, l).then(function(t) {
				var r = t.needsMarkThreadAsMigrated;
				if (r) return o("MAWDbThreadTxns").markCutoverThreadAsMigratedLocally(e, n);
			});
		});
	});
	l.writeAdminMessageForDualThreadCutover = s;
}), 98);
