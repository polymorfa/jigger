__d("MAWMarkThreadAsReadUpToApi", [
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWMarkThreadAsReadTxns",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		isReadReceiptExpectedToBeSent: !1,
		type: "missing"
	}, s = o("MAWIndexedDb").makeMsgrTransactor({
		messages: o("MAWTransactionMode").READWRITE,
		threads: o("MAWTransactionMode").READWRITE
	}, "markThreadAsReadUpTo", function(t) {
		return (function(n) {
			var r = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(n)) : t.threads.get({ jid: n });
			return r.then(function(n) {
				var r = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(n, "MAWMarkThreadAsReadUpToApi.markThreadAsReadUpTo");
				return r == null ? e : o("MAWDexieTable").dexieAll([o("MAWDbMsgTxns").getThreadNewestMessageId(t, r.jid), o("MAWDbMsgTxns").getThreadNewestMessageMs(t, r.jid)]).then(function(n) {
					var a = n[0], i = n[1];
					if (a == null || i == null) return e;
					var l = !0;
					return o("MAWMarkThreadAsReadTxns").markThreadAsReadUpToMsgSortOrderMs(t, r.jid, a, i, l).then(function(t) {
						return t.type === "missing" ? e : {
							folder: r.folder,
							isReadReceiptExpectedToBeSent: t.isReadReceiptExpectedToBeSent,
							readUpToMs: i,
							type: "success"
						};
					});
				});
			});
		});
	});
	l.markThreadAsReadUpTo = s;
}), 98);
