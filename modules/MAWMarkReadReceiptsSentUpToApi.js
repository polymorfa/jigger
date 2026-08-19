__d("MAWMarkReadReceiptsSentUpToApi", [
	"FBLogger",
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWODSProxy",
	"MAWTransactionMode",
	"WAOdsEnums",
	"WmiMetadataThreadsWriter"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({
		messages: o("MAWTransactionMode").READWRITE,
		threads: o("MAWTransactionMode").READWRITE
	}, "markReadReceiptsSentUpTo", function(e) {
		return (function(t, n) {
			c("success");
			var r = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(t)) : e.threads.get({ jid: t });
			return o("MAWDexieTable").dexieAll([r, o("MAWDbMsgTxns").maybeGetMsgByProtocolMsgId(e, n)]).then(function(t) {
				var n = t[0], r = t[1], a = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(n, "MAWMarkReadReceiptsSentUpToApi.markReadReceiptsSentUpTo");
				return a == null ? (c("missingThread"), { type: "missing_thread" }) : r == null ? (c("invalidMsg"), { type: "invalid_msg" }) : o("MAWDexieTable").dexieAll([o("MAWDbMsgTxns").clearRetroactiveReadReceiptStatusFromMsgsUpTo(e, a.chatId, o("MAWDbMsg").getSortOrderWithFallback(r)), s(e, a, r)]).then(function(e) {
					var t = e[0], n = e[1];
					return n;
				});
			});
		});
	});
	function s(e, t, n) {
		if (n.threadJid !== t.jid) return c("invalidMsg"), { type: "invalid_msg" };
		var r = t.lastReadMsgReceiptSent, a = o("MAWDbMsg").getSortOrderWithFallback(n);
		return r != null ? e.messages.get({ msgId: r }).then(function(r) {
			return r != null && a < o("MAWDbMsg").getSortOrderWithFallback(r) ? (c("unchanged"), { type: "unchanged" }) : u(e, t, n.msgId);
		}) : u(e, t, n.msgId);
	}
	function u(e, t, n) {
		var r = babelHelpers.extends({}, t, { lastReadMsgReceiptSent: n });
		o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && (o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(r, { lastReadMsgReceiptSent: n }, "MAWMarkReadReceiptsSentUpToApi.updateLastReadMsgReceiptSentForThread"), o("WmiMetadataThreadsWriter").storeThreadPartialOnDisk(r));
		var a = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.put(r);
		return a.then(function() {
			return c("updateLastReadMsgReceiptSent"), { type: "success" };
		});
	}
	function c(e) {
		r("FBLogger")("ArmadilloReadReceipts").info("armadillo_send_read_receipts for stat %s", e), o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.SEND_READ_RECEIPTS,
			key: e
		});
	}
	l.markReadReceiptsSentUpTo = e;
}), 98);
