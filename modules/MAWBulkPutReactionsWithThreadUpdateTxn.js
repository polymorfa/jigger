__d("MAWBulkPutReactionsWithThreadUpdateTxn", [
	"FBLogger",
	"MAWDbReaction",
	"MAWDbReactionsTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWJidUtils",
	"MAWThreadSnippetBuildTxns",
	"WAArrayGroupBy",
	"WAJids",
	"WAMsgMap",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e.reduce(function(e, t) {
			var n = o("MAWJidUtils").maybeToProtocolMsgId(t.author, t.threadJid, t.reactToExternalId);
			return n == null || e.set(n, o("MAWDbReactionsTxns").coerceToReaction(t)), e;
		}, new (o("WAMsgMap")).MsgMap()).values();
	}
	function s(t, n, a) {
		if (n.length === 0) return o("MAWDexieTable").dexieResolve();
		var i = e(n), l = i.map(function(e) {
			var t = a.get(e.threadJid);
			if (t == null) throw r("FBLogger")("messenger_web").mustfixThrow("Should not have got here - expect thread to exist for flow");
			return e;
		}), s = o("WAArrayGroupBy").groupBy(l, function(e) {
			var t = e.threadJid;
			return t;
		}), u = s.map(function(e) {
			var n = e[0], r = e[1], i = a.get(n);
			if (i == null || r.length === 0) return null;
			for (var l = null, s = r.length - 1; s >= 0 && (l = o("MAWDbReaction").maybeCastToIncomingDbReaction(r[s]), l == null); s--);
			var u = r.filter(function(e) {
				return e.reaction == null;
			}), c = o("WAJids").interpretAsGroupJid(i.jid) != null;
			return o("MAWThreadSnippetBuildTxns").getThreadChangesetForReactionChanges(t, i, {
				newestReaction: l,
				reactionsToClear: u
			}, c);
		}).filter(Boolean);
		return o("MAWDexieTable").dexieAll(u).then(function(e) {
			var n = e.map(function(e) {
				var t = e.thread;
				return t;
			});
			return o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndBulkPut(n, function(e) {
				return {
					snippetMsg: e.snippetMsg,
					snippetMsgTs: e.snippetMsgTs
				};
			}, "MAWBulkPutReactionsWithThreadUpdateTxn.bulkPutReactionsWithThreadUpdates"), o("MAWDexieTable").dexieAll([o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve() : t.threads.bulkPut(n), t.reactions.bulkPut(l)]).then(r("emptyFunction"));
		});
	}
	l.bulkPutReactionsWithThreadUpdates = s;
}), 98);
