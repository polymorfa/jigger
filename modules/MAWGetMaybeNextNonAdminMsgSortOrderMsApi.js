__d("MAWGetMaybeNextNonAdminMsgSortOrderMsApi", [
	"MAWDbMsgTxns",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWRestoreMsgsTxns",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({
		messages: o("MAWTransactionMode").READONLY,
		threads: o("MAWTransactionMode").READONLY
	}, "getMaybeNextNonAdminMsgSortOrderMs", function(e) {
		return (function(t, n) {
			return o("MAWDexieTable").dexieAll([o("MAWDbMsgTxns").maybeGetMsg(e, n), o("MAWDbThreadTxns").getThread(e, t)]).then(function(t) {
				var n = t[0], r = t[1], a = 0;
				return o("MAWRestoreMsgsTxns").isE2eeOrCutoverAdminMsg(n) && r.success && n != null ? o("MAWRestoreMsgsTxns").getNextMsgBasedOnSortOrderMs(e, r.value, n == null ? void 0 : n.msgId).then(function(e) {
					return e != null && e.sortOrderMs != null && (a = e.sortOrderMs), { minMsgTimestampMs: a };
				}) : (n != null && n.sortOrderMs != null && (a = n.sortOrderMs), { minMsgTimestampMs: a });
			});
		});
	});
	l.getMaybeNextNonAdminMsgSortOrderMs = e;
}), 98);
