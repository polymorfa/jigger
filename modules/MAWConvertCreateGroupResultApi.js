__d("MAWConvertCreateGroupResultApi", [
	"FBLogger",
	"MAWDbGroupInfoTxns",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ threads: o("MAWTransactionMode").READONLY }, "convertCreateGroupResult", function(e) {
		return (function(t) {
			var n = o("MAWDbGroupInfoTxns").getGroupInfo(t.jid);
			if (!n.success) throw r("FBLogger")("messenger_web").mustfixThrow("Tried to convert a createGroup result for a group that has not persisted in the DB");
			var a = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(n.value.groupJid)) : e.threads.get({ jid: n.value.groupJid });
			return a.then(function(e) {
				if (e == null) throw r("FBLogger")("messenger_web").mustfixThrow("Tried to convert a createGroup result for a group but its thread is not in DB");
				return {
					chatJid: e.jid,
					type: "msgr"
				};
			});
		});
	});
	l.convertCreateGroupResult = e;
}), 98);
