__d("MAWDeleteThreadApi", [
	"FBLogger",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWThreadManagementTxns",
	"MAWTransactionMode",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (s = o("MAWTransactionMode")).READWRITE,
		deletedMessages: s.READWRITE,
		groupInfo: s.READWRITE,
		groupInvites: s.READWRITE,
		media: s.READWRITE,
		messages: s.READWRITE,
		participants: s.READWRITE,
		pendingStanzas: s.READWRITE,
		reactions: s.READWRITE,
		threads: s.READWRITE,
		unrenderedMessages: s.READWRITE
	}, "deleteThread", function(t) {
		return (function(n) {
			var a = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(n)) : t.threads.get({ jid: n });
			return a.then(function(a) {
				var i = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(a, "MAWDeleteThreadApi.deleteThread");
				if (i == null) throw r("FBLogger")("messenger_web").mustfixThrow("There was no thread to delete in local delete thread");
				return o("MAWThreadManagementTxns").deleteAllThreadData(t, i).then(function() {
					o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Successfully deleted thread ", ""])), n);
				});
			});
		});
	});
	l.deleteThread = u;
}), 98);
