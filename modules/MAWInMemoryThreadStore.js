__d("MAWInMemoryThreadStore", [
	"MAWDbThread",
	"MAWDexieTable",
	"MAWInMemoryStore",
	"MAWThreadsMetadataCompareScheduler",
	"WmiMetadataDb",
	"WmiMetadataThreadsWriter",
	"asyncToGeneratorRuntime",
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
	function _() {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WmiMetadataDb").getMetadataDb().runInTransaction(["threads"], "readonly", function(e) {
				return e.stores.threads.readAll();
			}, "MAWInMemoryThreadsStore.preloadInMemoryThreadsStore");
			for (var t of e) u.set(t.jid, t);
		}), f.apply(this, arguments);
	}
	function g(e, t) {
		var n = d(), r = [];
		for (var a of e) n.get(a.jid) == null && r.push(a);
		return r.length === 0 ? o("MAWDexieTable").dexieResolve() : h(e, t);
	}
	function h(e, t) {
		var n = d(), r = [];
		for (var a of e) n.get(a.jid) == null && r.push(a);
		if (r.length === 0) return o("MAWDexieTable").dexieResolve();
		var i = r.map(function(e) {
			return y(e, t);
		});
		for (var l of i) u.delete(l.jid);
		return n.bulkPut(i), o("WmiMetadataThreadsWriter").bulkStoreThreadPartialsOnDisk(i), o("MAWDexieTable").dexieResolve();
	}
	function y(e, t) {
		var n = t == null ? void 0 : t.get(e.jid);
		return C(e, u.get(e.jid), {
			newestMsgTs: n == null ? void 0 : n.newestMsgTs,
			oldestMsg: n == null ? void 0 : n.oldestMsgId,
			snippetMsg: n == null ? void 0 : n.newestMsgId,
			snippetMsgTs: n == null ? void 0 : n.newestMsgTs
		});
	}
	function C(e, t, n) {
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
	function b(e, t) {
		if (e == null) return null;
		var n = v([e], t);
		return n.length > 0 ? n[0] : null;
	}
	function v(e, t) {
		if (e.length === 0) return [];
		if (!L() || R() === !0) return e;
		var n = m(), r = [];
		for (var a of e) {
			var i = n.get(a.jid);
			o("MAWThreadsMetadataCompareScheduler").runComparison(i, a, t, "read"), i != null && r.push(babelHelpers.extends({}, i, { chatId: a.chatId }));
		}
		return r.length === e.length && S() ? r : e;
	}
	function S() {
		return L() === !0 && r("qex")._("2207") === !0;
	}
	function R() {
		return L() === !0 && r("qex")._("2739") === !0;
	}
	function L() {
		return r("gkx")("1643");
	}
	l.resetMAWInMemoryThreadStore_INTERNAL_USE_ONLY = c, l.getReadwriteInMemoryThreadsStore = d, l.getReadonlyInMemoryThreadsStore = m, l.getCommittedInMemoryThread = p, l.preloadWormPartialThreads = _, l.initializeInMemoryThreadsIfMissing = g, l.initializeInMemoryThreadsIfMissingFromMpsThreadMsgInfo = h, l.compareThreadAndMaybeSwap = b, l.compareThreadsAndMaybeSwap = v, l.shouldUseInMemoryThreadsExclusively = R, l.isInMemoryThreadsStoreExperiment = L;
}), 98);
