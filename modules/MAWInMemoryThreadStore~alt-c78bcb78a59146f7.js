__d("MAWInMemoryThreadStore", [
	"MAWDbThread",
	"MAWDexieTable",
	"MAWInMemoryStore",
	"MAWThreadsMetadataCompareScheduler",
	"WmiMetadataDb",
	"WmiMetadataThreadsWriter",
	"gkx",
	"qex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = new (o("MAWInMemoryStore")).MAWInMemoryStore("threads", function(e) {
		return e.jid;
	}, function(e, t, n) {
		return o("MAWThreadsMetadataCompareScheduler").runComparison(e, t, n);
	}), s = function() {
		return o("MAWDexieTable").getDexiePSDItem("threadsAccessMode");
	}, u = new Map();
	function c() {
		e.clear();
	}
	function d() {
		return o("MAWInMemoryStore").getReadwriteInMemoryStore(e, s);
	}
	function m() {
		return o("MAWInMemoryStore").getReadonlyInMemoryStore(e, s);
	}
	function p(t) {
		return e.getCommitted(t);
	}
	async function _() {
		var e = await o("WmiMetadataDb").getMetadataDb().runInTransaction(["threads"], "readonly", function(e) {
			return e.stores.threads.readAll();
		}, "MAWInMemoryThreadsStore.preloadInMemoryThreadsStore");
		for (var t of e) u.set(t.jid, t);
	}
	function f(e, t) {
		var n = d(), r = [];
		for (var a of e) n.get(a.jid) == null && r.push(a);
		return r.length === 0 ? o("MAWDexieTable").dexieResolve() : g(e, t);
	}
	function g(e, t) {
		var n = d(), r = [];
		for (var a of e) n.get(a.jid) == null && r.push(a);
		if (r.length === 0) return o("MAWDexieTable").dexieResolve();
		var i = r.map(function(e) {
			return h(e, t);
		});
		for (var l of i) u.delete(l.jid);
		return n.bulkPut(i), o("WmiMetadataThreadsWriter").bulkStoreThreadPartialsOnDisk(i), o("MAWDexieTable").dexieResolve();
	}
	function h(e, t) {
		var n = t == null ? void 0 : t.get(e.jid);
		return y(e, u.get(e.jid), {
			newestMsgTs: n == null ? void 0 : n.newestMsgTs,
			oldestMsg: n == null ? void 0 : n.oldestMsgId,
			snippetMsg: n == null ? void 0 : n.newestMsgId,
			snippetMsgTs: n == null ? void 0 : n.newestMsgTs
		});
	}
	function y(e, t, n) {
		var r, a, i, l, s = (r = n.newestMsgTs) != null ? r : e.newestMsgTs;
		return babelHelpers.extends({}, e, t, {
			chatId: -1,
			newestMsgTs: s,
			oldestMsg: (a = n.oldestMsg) != null ? a : e.oldestMsg,
			snippetMsg: (i = n.snippetMsg) != null ? i : e.snippetMsg,
			snippetMsgTs: (l = n.snippetMsgTs) != null ? l : e.snippetMsgTs,
			threadOrder: s != null ? o("MAWDbThread").craftThreadOrder(s, e.jid) : e.threadOrder
		});
	}
	function C(e, t) {
		if (e == null) return null;
		var n = b([e], t);
		return n.length > 0 ? n[0] : null;
	}
	function b(e, t) {
		if (e.length === 0) return [];
		if (!R() || S() === !0) return e;
		var n = m(), r = [];
		for (var a of e) {
			var i = n.get(a.jid);
			o("MAWThreadsMetadataCompareScheduler").runComparison(i, a, t, "read"), i != null && r.push(babelHelpers.extends({}, i, { chatId: a.chatId }));
		}
		return r.length === e.length && v() ? r : e;
	}
	function v() {
		return R() === !0 && r("qex")._("2207") === !0;
	}
	function S() {
		return R() === !0 && r("qex")._("2739") === !0;
	}
	function R() {
		return r("gkx")("1643");
	}
	l.resetMAWInMemoryThreadStore_INTERNAL_USE_ONLY = c, l.getReadwriteInMemoryThreadsStore = d, l.getReadonlyInMemoryThreadsStore = m, l.getCommittedInMemoryThread = p, l.preloadWormPartialThreads = _, l.initializeInMemoryThreadsIfMissing = f, l.initializeInMemoryThreadsIfMissingFromMpsThreadMsgInfo = g, l.compareThreadAndMaybeSwap = C, l.compareThreadsAndMaybeSwap = b, l.shouldUseInMemoryThreadsExclusively = S, l.isInMemoryThreadsStoreExperiment = R;
}), 98);
