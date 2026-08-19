__d("MAWUpdateDeviceChangeAlertsApi", [
	"MAWDbGetUnArchivedDeviceChangeAlertsCountTxn",
	"MAWDbUpdateDeviceChangeAlertsTxn",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WmiMetadataDeviceChangeAlertsWriter"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ deviceChangeAlerts: o("MAWTransactionMode").READWRITE }, "updateDeviceChangeAlerts", function(e) {
		return (function(t) {
			return o("MAWDbUpdateDeviceChangeAlertsTxn").updateDeviceChangeAlertsTxn(e, t).then(function(n) {
				return o("WmiMetadataDeviceChangeAlertsWriter").writeDeviceChangeAlertsToMetadataDb([t]), o("MAWDbGetUnArchivedDeviceChangeAlertsCountTxn").getUnArchivedDeviceChangeAlertsCountTxn(e).then(function() {
					return n;
				});
			});
		});
	});
	l.updateDeviceChangeAlerts = e;
}), 98);
