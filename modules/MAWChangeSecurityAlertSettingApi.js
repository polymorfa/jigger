__d("MAWChangeSecurityAlertSettingApi", [
	"MAWDbMsgTypeVersionTxns",
	"MAWIndexedDb",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ appMeta: o("MAWTransactionMode").READWRITE }, "changeSecurityAlertSetting", function(e) {
		return (function(t) {
			return o("MAWDbMsgTypeVersionTxns").updateSecurityAlertValueForContact(e, t);
		});
	});
	l.changeSecurityAlertSetting = e;
}), 98);
