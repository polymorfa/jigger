__d("MAWAdminWriteUserDeviceMsgTxn", [
	"MAWDbMsgTxns",
	"MAWDexieTable",
	"MAWExternalId",
	"MAWGetUserDeviceChangeAdminType",
	"MAWLocalizationUtils",
	"MAWUserJidWrapper",
	"MAWWriteMsgTxns",
	"WAJids",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		add: "add",
		remove: "remove",
		update: "update"
	};
	function s(e, t, n, a, i) {
		return o("MAWDbMsgTxns").getIsThreadEmpty(e, n.jid).then(function(l) {
			if (l) return o("MAWDexieTable").dexieResolve();
			var s = t === o("MAWUserJidWrapper").getMyUserJid(), u = o("MAWGetUserDeviceChangeAdminType").getUserDeviceAdminType(a, s), c = s ? [] : [o("WAJids").userIdFromJid(t)], d = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg({
				adminMsgContent: c,
				adminType: u,
				version: 1
			}, n.jid, o("MAWExternalId").generateExternalId(), i);
			return o("MAWWriteMsgTxns").writeMsg(e, d, n).then(r("emptyFunction"));
		});
	}
	l.DeviceChange = e, l.writeUserDeviceAdminMsg = s;
}), 98);
