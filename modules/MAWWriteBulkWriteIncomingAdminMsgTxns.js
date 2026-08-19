__d("MAWWriteBulkWriteIncomingAdminMsgTxns", [
	"MAWAdminMsgTxns",
	"MAWAfterWriteMsgUtil",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWQplProxy",
	"WALogger",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		var r = [], a = [], i = [], l = new Map(), s = new Map(), u = n.map(function(e) {
			return o("MAWDbMsgTxns").getThreadOldestMessageId(t, e.jid).then(function(t) {
				return l.set(e.jid, t);
			});
		}), c = n.map(function(e) {
			return o("MAWDbMsgTxns").getThreadNewestMessageMs(t, e.jid).then(function(t) {
				return s.set(e.jid, t);
			});
		});
		return o("MAWDexieTable").dexieAll([u, c]).then(function() {
			return n.forEach(function(t) {
				t == null && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["OfflineBulkWriteAdminmsg - Missing thread when write e2ee thread description"])));
				var n = o("MAWAdminMsgTxns").buildE2EEThreadDescriptionMsg(t), l = o("MAWAdminMsgTxns").getUpdatedThreadForAdminMsg(n, t, s.get(t.jid));
				r.push(n), i.push(l), a.push({
					dbMsg: n,
					isFirstMsg: !1,
					updatedThread: l
				});
			}), {
				afterTransactionSyncMsgsData: a,
				e2eeThreadAdminMsgs: r,
				threadsToUpdate: i
			};
		});
	}
	function u(e, t, n) {
		return d(e, t, n).then(function(e) {
			var t = e.afterTransactionSyncMsgsData, n = e.threadsToUpdate, r = new Map();
			return t.forEach(function(e) {
				var t = e.updatedThread.jid;
				r.set(t, {
					externalId: e.dbMsg.externalId,
					msgId: e.dbMsg.msgId
				});
			}), n.map(function(e) {
				return {
					adminMsgParams: r.get(e.jid),
					thread: e
				};
			});
		});
	}
	function c(e, t, n) {
		return d(e, t, n).then(function(e) {
			var t = e.afterTransactionSyncMsgsData, n = e.threadsToUpdate;
			return t.forEach(function(e) {
				return o("MAWAfterWriteMsgUtil").writeMsgAfterTransaction(e);
			}), n;
		});
	}
	function d(e, t, n) {
		return s(e, t).then(function(t) {
			var a = t.afterTransactionSyncMsgsData, i = t.e2eeThreadAdminMsgs, l = t.threadsToUpdate;
			return n != null && o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25313175, "1551"), "write-bulk-admin-msgs-start", { instanceKey: n }), o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndBulkPut(l, function(e) {
				return {
					newestMsgTs: e.newestMsgTs,
					oldestMsg: e.oldestMsg,
					snippetMsg: e.snippetMsg,
					snippetMsgTs: e.snippetMsgTs,
					threadOrder: e.threadOrder
				};
			}, "MAWWriteBulkWriteIncomingAdminMsgTxns.writeE2EEAdminMsgsForIncomingCreatedThreads"), o("MAWDexieTable").dexieAll([e.messages.bulkAdd(i), o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.bulkPut(l)]).then(function() {
				return n != null && o("MAWQplProxy").sendQplPointThroughBridge(r("qpl")._(25313175, "1551"), "write-bulk-admin-msgs-end", { instanceKey: n }), {
					afterTransactionSyncMsgsData: a,
					threadsToUpdate: l
				};
			});
		});
	}
	l.writeE2EEAdminMsgsForIncomingCreatedThreadsWithoutAfterTxns = u, l.writeE2EEAdminMsgsForIncomingCreatedThreadsWithAfterTxns = c;
}), 98);
