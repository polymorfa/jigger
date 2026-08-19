__d("MAWWriteThreadHotlikeCustomizationAdminMsgTxns", [
	"FBLogger",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWLocalizationUtils",
	"MAWWriteMsgTxns",
	"MAWWriteThreadHotlikeCustomizationAdminMsgContent",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, a, i, l) {
		var s = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(a)) : e.threads.get({ jid: a });
		return s.then(function(a) {
			var s = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(a, "MAWWriteThreadHotlikeCustomizationAdminMsgTxns.writeThreadHotlikeCustomizationAdminMsg");
			if (s == null) throw r("FBLogger")("messenger_web").mustfixThrow("Invalid chat Id when try to write admin message for thread hotlike customization");
			var u = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg(o("MAWWriteThreadHotlikeCustomizationAdminMsgContent").getAdminMsgContent(t, n), s.jid, i, o("WATimeUtils").castMillisTimeToUnixTime(l), void 0, l);
			return o("MAWWriteMsgTxns").writeDedupedAdminMessage(e, u, s, l).then(r("emptyFunction"));
		});
	}
	l.writeThreadHotlikeCustomizationAdminMsg = e;
}), 98);
