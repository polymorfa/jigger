__d("MAWGetThreadInfoForDeletionApi", [
	"FBLogger",
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WALogger",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		messages: o("MAWTransactionMode").READONLY,
		threads: o("MAWTransactionMode").READONLY
	}, "getThreadInfoForDeletion", function(t) {
		return (function(n) {
			var a = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(n)) : t.threads.get({ jid: n });
			return a.then(function(n) {
				var a = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(n, "MAWGetThreadInfoForDeletionApi.getThreadInfoForDeletion");
				if (a == null) {
					var i = "Thread was null when getting thread for deletion";
					throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])), i), r("FBLogger")("messenger_web").mustfixThrow(i);
				}
				return o("MAWDbMsgTxns").getThreadNewestMessageMs(t, a.jid).then(function(e) {
					var t;
					return {
						chatJid: a.jid,
						newestMsgTs: (t = o("WATimeUtils").castMillisTimeToUnixTime(e)) != null ? t : void 0
					};
				});
			});
		});
	});
	l.getThreadInfoForDeletion = s;
}), 98);
