__d("MAWChangeSecurityAlertSettingForSelfApi", [
	"MAWDbMsgTypeVersionTxns",
	"MAWIndexedDb",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ appMeta: o("MAWTransactionMode").READWRITE }, "changeSecurityAlertSettingForSelf", function(e) {
		return (function(t) {
			return o("MAWDbMsgTypeVersionTxns").updateSecurityAlertValueForSelf(e, t);
		});
	});
	l.changeSecurityAlertSettingForSelf = e;
}), 98);
