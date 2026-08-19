__d("MAWAdminWriteGroupNameChangeTxn", [
	"MAWAdminWriteGroupNameChangeAdminMsgContent",
	"MAWDexieTable",
	"MAWExternalId",
	"MAWLocalizationUtils",
	"MAWWriteMsgTxns",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		var a = t.name;
		if (a == null) return o("MAWDexieTable").dexieResolve();
		var i = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg(o("MAWAdminWriteGroupNameChangeAdminMsgContent").getAdminMsgContent(t.nameOwner, a), n.jid, o("MAWExternalId").generateExternalId(), o("WATimeUtils").castMillisTimeToUnixTime(o("WATimeUtils").millisTime()));
		return o("MAWWriteMsgTxns").writeMsg(e, i, n).then(r("emptyFunction"));
	}
	l.writeGroupNameChangeInfo = e;
}), 98);
