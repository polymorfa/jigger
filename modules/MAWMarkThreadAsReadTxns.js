__d("MAWMarkThreadAsReadTxns", [
	"FBLogger",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWMessageRequestUtils",
	"MAWTimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, o, a) {
		a === void 0 && (a = !1);
		var i = new Map();
		return i.set(t, {
			msgId: n,
			sortOrderMs: o
		}), s(e, i, a).then(function(e) {
			var n = e.get(t);
			if (n == null) throw r("FBLogger")("messenger_web_devx", "maw_mark_thread_as_read").warn("ThreadReadReceiptInfo unexpectedly unavailable for thread\n         in markThreadAsReadUpToMsgSortOrderMs()");
			return n;
		});
	}
	function s(e, t, n) {
		return n === void 0 && (n = !1), c(e, t).then(function(t) {
			var n = t.threadJidToReadReceiptInfo, r = t.updatedThreads;
			o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndBulkPut(r, function(e) {
				return {
					lastReadMsg: e.lastReadMsg,
					newestMsgTs: e.newestMsgTs
				};
			}, "MAWMarkThreadAsReadTxns.bulkMarkThreadAsReadUpToMsgSortOrderMs");
			var a = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : e.threads.bulkPut(r);
			return a.then(function() {
				return r.forEach(function(e) {
					var t, r;
					n.set(e.jid, {
						isReadReceiptExpectedToBeSent: (t = (r = n.get(e.jid)) == null ? void 0 : r.isReadReceiptExpectedToBeSent) != null ? t : !1,
						type: "success"
					});
				}), n;
			});
		});
	}
	function u(e, t, n) {
		return o("MAWDbMsgTxns").getThreadOldestMessageId(e, t.jid).then(function(e) {
			if (e == null) return null;
			var r = o("MAWTimeUtils").ensureValidMillisTime(t.newestMsgTs);
			return babelHelpers.extends({}, t, {
				lastReadMsg: n.msgId,
				newestMsgTs: r
			});
		});
	}
	function c(e, t) {
		var n = new Map(), a = Array.from(t.keys()), i = [];
		return e.threads.where("jid").anyOf(a).toArray().then(function(l) {
			var s = new Map();
			l.forEach(function(e) {
				return s.set(e.jid, e);
			}), a.forEach(function(e) {
				s.has(e) || s.set(e, null);
			});
			var c = Array.from(s).map(function(o) {
				var a = o[0], l = o[1];
				if (l == null) {
					n.set(a, {
						isReadReceiptExpectedToBeSent: !1,
						type: "missing"
					});
					return;
				}
				var s = d(l.folder);
				n.set(l.jid, {
					isReadReceiptExpectedToBeSent: s,
					type: "success"
				});
				var c = t.get(l.jid);
				if (c == null) throw r("FBLogger")("maw_threads", "maw_mark_thread_as_read").warn("ThreadReadReceiptInfo unexpectedly unavailable for thread\n            in getThreadJidToReadReceiptInfo()");
				return u(e, l, c).then(function(e) {
					e != null && i.push(e);
				});
			});
			return o("MAWDexieTable").dexieAll(c).then(function() {
				return {
					threadJidToReadReceiptInfo: n,
					updatedThreads: i
				};
			});
		});
	}
	function d(e) {
		return !o("MAWMessageRequestUtils").isMessageRequestOrSpamThread(e);
	}
	l.markThreadAsReadUpToMsgSortOrderMs = e, l.bulkMarkThreadAsReadUpToMsgSortOrderMs = s, l.isReadReceiptExpectedToBeSentFor = d;
}), 98);
