__d("MAWDbUpdateDeviceChangeAlertsLogInStatusTxn", ["MAWDbGetAlertsWithDeviceJidTxn", "MAWDbUpdateDeviceChangeAlertsTxn"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return o("MAWDbGetAlertsWithDeviceJidTxn").getAlertsWithDeviceJidTxn(e, t).then(function(t) {
			return o("MAWDbUpdateDeviceChangeAlertsTxn").updateDeviceChangeAlertsTxn(e, babelHelpers.extends({}, t, { loggedOut: !0 }));
		});
	}
	l.updateDeviceChangeAlertsLogInStatusTxn = e;
}), 98);
