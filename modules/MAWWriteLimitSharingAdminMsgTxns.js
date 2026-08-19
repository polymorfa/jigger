__d("MAWWriteLimitSharingAdminMsgTxns", [
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWLocalizationUtils",
	"MAWWriteLimitSharingAdminMsgContent",
	"MAWWriteMsgTxns",
	"WATimeUtils",
	"emptyFunction",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, a, i, l) {
		var s = n != null && o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(n)) : e.threads.get({ jid: n });
		return s.then(function(n) {
			var s = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(n, "MAWWriteLimitSharingAdminMsgTxns.writeLimitSharingAdminMsg");
			if (s == null) throw r("err")("Invalid chat Id when try to write admin message for limit sharing");
			var u = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg(o("MAWWriteLimitSharingAdminMsgContent").getAdminMsgContent(t, i), s.jid, a, o("WATimeUtils").castMillisTimeToUnixTime(l), void 0, l);
			return o("MAWWriteMsgTxns").writeDedupedAdminMessage(e, u, s, l).then(r("emptyFunction"));
		});
	}
	l.writeLimitSharingAdminMsg = e;
}), 98);
