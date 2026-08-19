__d("MAWWriteThreadNicknameCustomizationAdminMsgTxns", [
	"FBLogger",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWLocalizationUtils",
	"MAWWriteMsgTxns",
	"MAWWriteThreadNicknameCustomizationAdminMsgContent",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, a, i, l, s) {
		var u = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(n)) : e.threads.get({ jid: n });
		return u.then(function(n) {
			var u = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(n, "MAWWriteThreadNicknameCustomizationAdminMsgTxns.writeThreadNicknameCustomizationAdminMsg");
			if (u == null) throw r("FBLogger")("messenger_web").mustfixThrow("Invalid chat Id when try to write admin message for thread nickname customization");
			var c = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg(o("MAWWriteThreadNicknameCustomizationAdminMsgContent").getAdminMsgContent(t, i, a), u.jid, l, o("WATimeUtils").castMillisTimeToUnixTime(s), void 0, s);
			return o("MAWWriteMsgTxns").writeDedupedAdminMessage(e, c, u, s).then(r("emptyFunction"));
		});
	}
	l.writeThreadNicknameCustomizationAdminMsg = e;
}), 98);
