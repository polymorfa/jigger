__d("MAWDbGetUnArchivedDeviceChangeAlertsCountTxn", ["MAWIndexedDb"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e.deviceChangeAlerts.filter(function(e) {
			return e.isArchived === !1;
		}).toArray().then(function(e) {
			return o("MAWIndexedDb").afterTransaction({
				tag: "UnArchivedSelfDeviceChangeAlerts",
				value: e.length
			});
		});
	}
	l.getUnArchivedDeviceChangeAlertsCountTxn = e;
}), 98);
