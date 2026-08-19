__d("MAWGetUnreadMsgsApi", [
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WAJids",
	"WAMsgType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({
		messages: o("MAWTransactionMode").READONLY,
		threads: o("MAWTransactionMode").READONLY
	}, "getUnreadMsgs", function(e) {
		return (function(t, n, r, a) {
			r === void 0 && (r = !1);
			var i = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(t)) : e.threads.get({ jid: t });
			return i.then(function(i) {
				var l = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(i, "MAWGetUnreadMsgsApi.getUnreadMsgs");
				return l == null ? { type: "missing" } : o("MAWDexieTable").dexieAll([
					o("MAWDbMsgTxns").getMsgsNeedingRetroactiveReadReceiptsUpTo(e, l.chatId, a, n),
					o("MAWDbMsgTxns").maybeGetMsg(e, l.lastReadMsgReceiptSent),
					o("MAWDbMsgTxns").getThreadOldestMessageBySortOrder(e, l.jid)
				]).then(function(i) {
					var l = i[0], d = i[1], m = i[2], p = n - l.length, _ = p > 0 && (d == null || a > o("MAWDbMsg").getSortOrderWithFallback(d)), f = s(l, t, r), g = d == null, h = d != null ? d : m;
					return h == null || !_ ? l.length === 0 ? { type: "none" } : u(l, f, t, n, a) : c(e, o("MAWDbMsg").getSortOrderWithFallback(h), a, g, p, t, r).then(function(e) {
						return u([].concat(l, e.nextMsgs), [].concat(f, e.unreadNextMsgs), t, n, a);
					});
				});
			});
		});
	});
	function s(e, t, n) {
		var r = [];
		return e.forEach(function(e) {
			var a, i, l = e.author, s = e.externalId, u = e.type, c = ((a = (i = e.ephemeralSetting) == null ? void 0 : i.ephemeralExpirationInSec) != null ? a : 0) > 0, d = u !== o("WAMsgType").MSG_TYPE.CIPHERTEXT && u !== o("WAMsgType").MSG_TYPE.UNAVAILABLE && u !== o("WAMsgType").MSG_TYPE.FUTUREPROOF;
			!o("WAJids").isAuthorMe(l) && !o("WAJids").isAuthorSystem(l) && d && (!n || c) && r.push({
				author: l,
				chat: t,
				externalId: s
			});
		}), r;
	}
	function u(e, t, n, r, a) {
		if (e.length === 0 || t.length === 0) return { type: "none" };
		var i = o("MAWDbMsg").getSortOrderWithFallback(e[e.length - 1]), l = t[t.length - 1];
		return {
			loadedUpTo: {
				author: l.author,
				chat: n,
				externalId: l.externalId
			},
			maybeMore: i < a && e.length === r,
			type: "found",
			unreadMsgs: t
		};
	}
	function c(e, t, n, r, o, a, i) {
		return e.messages.where(["threadJid", "sortOrderMs"]).between([a, t], [a, n], r, !0).limit(o).toArray().then(function(l) {
			var u = s(l, a, i);
			return u.length === 0 ? e.messages.where(["threadJid", "sortOrderMs"]).between([a, t], [a, n], r, !0).toArray().then(function(e) {
				return {
					nextMsgs: e.slice(0, o),
					unreadNextMsgs: s(e, a, i).slice(0, o)
				};
			}) : {
				nextMsgs: l,
				unreadNextMsgs: u
			};
		});
	}
	l.getUnreadMsgs = e;
}), 98);
