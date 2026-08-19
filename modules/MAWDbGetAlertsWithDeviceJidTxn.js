__d("MAWDbGetAlertsWithDeviceJidTxn", ["err"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return e.deviceChangeAlerts.filter(function(e) {
			return e.deviceJid === t && !e.loggedOut;
		}).toArray().then(function(e) {
			return e.length > 1 && r("err")("Invalid result, more than one active devices with the same deviceJid: " + t), e[0];
		});
	}
	l.getAlertsWithDeviceJidTxn = e;
}), 98);
