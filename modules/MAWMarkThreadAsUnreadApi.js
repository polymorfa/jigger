__d("MAWMarkThreadAsUnreadApi", [
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWTimeUtils",
	"MAWTransactionMode",
	"MAWUpdateThreadUtil",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({
		messages: o("MAWTransactionMode").READONLY,
		threads: o("MAWTransactionMode").READWRITE
	}, "markThreadAsUnread", function(e) {
		return (function(t) {
			var n = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(t)) : e.threads.get({ jid: t });
			return n.then(function(n) {
				var r = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(n, "MAWMarkThreadAsUnreadApi.markThreadAsUnread");
				if (r != null) return o("MAWDbMsgTxns").getThreadNewestMessageMs(e, r.jid).then(function(n) {
					var a = o("MAWTimeUtils").ensureValidMillisTime(n), i = o("WATimeUtils").castToMillisTime(0);
					if (!(a == null || n === i)) {
						var l = { lastReadMsg: null };
						return o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(babelHelpers.extends({}, r, l), { lastReadMsg: null }, "MAWMarkThreadAsUnreadApi.markThreadAsUnread"), o("MAWUpdateThreadUtil").updateThreadWithJid(e, t, l).then(function() {});
					}
				});
			});
		});
	});
	l.markThreadAsUnread = e;
}), 98);
