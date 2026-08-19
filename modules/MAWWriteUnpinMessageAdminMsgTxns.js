__d("MAWWriteUnpinMessageAdminMsgTxns", [
	"FBLogger",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWLocalizationUtils",
	"MAWWriteMsgTxns",
	"MAWWriteUnpinMessageAdminMsgContent",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, a, i) {
		var l = n != null && o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(n)) : e.threads.get({ jid: n });
		return l.then(function(n) {
			var l = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(n, "MAWWriteUnpinMessageAdminMsgTxns.writeUnpinMessageAdminMsg");
			if (l == null) throw r("FBLogger")("messenger_web").mustfixThrow("Invalid chat Id when try to write admin message for unpin message");
			var s = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg(o("MAWWriteUnpinMessageAdminMsgContent").getAdminMsgContent(t), l.jid, a, o("WATimeUtils").castMillisTimeToUnixTime(i), void 0, i);
			return o("MAWWriteMsgTxns").writeDedupedAdminMessage(e, s, l, i).then(r("emptyFunction"));
		});
	}
	l.writeUnpinMessageAdminMsg = e;
}), 98);
