__d("MAWWriteThreadThemeCustomizationAdminMsgTxns", [
	"FBLogger",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWLocalizationUtils",
	"MAWWriteMsgTxns",
	"MAWWriteThreadThemeCustomizationAdminMsgContent",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, a, i, l, s, u) {
		var c = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(i)) : e.threads.get({ jid: i });
		return c.then(function(i) {
			var c = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(i, "MAWWriteThreadThemeCustomizationAdminMsgTxns.writeThreadThemeCustomizationAdminMsg");
			if (c == null) throw r("FBLogger")("messenger_web").mustfixThrow("Invalid chat Id when try to write admin message for thread theme customization");
			var d = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg(o("MAWWriteThreadThemeCustomizationAdminMsgContent").getAdminMsgContent(t, n, a, u), c.jid, l, o("WATimeUtils").castMillisTimeToUnixTime(s), void 0, s);
			return o("MAWWriteMsgTxns").writeDedupedAdminMessage(e, d, c, s).then(r("emptyFunction"));
		});
	}
	l.writeThreadThemeCustomizationAdminMsg = e;
}), 98);
