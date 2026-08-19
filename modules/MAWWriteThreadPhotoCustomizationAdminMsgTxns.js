__d("MAWWriteThreadPhotoCustomizationAdminMsgTxns", [
	"FBLogger",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWLocalizationUtils",
	"MAWWriteMsgTxns",
	"MAWWriteThreadPhotoCustomizationAdminMsgContent",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, a, i) {
		var l = n != null && o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(n)) : e.threads.get({ jid: n });
		return l.then(function(n) {
			var l = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(n, "MAWWriteThreadPhotoCustomizationAdminMsgTxns.writeThreadPhotoCustomizationAdminMsg");
			if (l == null) throw r("FBLogger")("messenger_web").mustfixThrow("Invalid chat Id when try to write admin message for thread photo customization");
			var s = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg(o("MAWWriteThreadPhotoCustomizationAdminMsgContent").getAdminMsgContent(t), l.jid, a, o("WATimeUtils").castMillisTimeToUnixTime(i), void 0, i);
			return o("MAWWriteMsgTxns").writeDedupedAdminMessage(e, s, l, i).then(r("emptyFunction"));
		});
	}
	l.writeThreadPhotoCustomizationAdminMsg = e;
}), 98);
