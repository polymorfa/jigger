__d("MAWDbGetDeviceChangeAlertsByOptionsTxn", ["WAGlobals", "WATimeUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("WATimeUtils").pastUnixTime(30 * o("WATimeUtils").DAY_SECONDS);
	function s(t, n) {
		var r = n.after, a = n.isArchived, i = a === void 0 ? !1 : a, l = n.limit, s = l === void 0 ? 20 : l, u = t.deviceChangeAlerts;
		return (r == null ? u : u.where("deviceChangeAlertsId").above(r)).filter(function(t) {
			return t.isArchived === i && t.ts >= e;
		}).reverse().limit(s).toArray().then(function(e) {
			return e.map(function(e) {
				return babelHelpers.extends({}, e, { isCurrentDevice: o("WAGlobals").getMyDeviceJid() === e.deviceJid });
			});
		});
	}
	l.getDeviceChangeAlertsByOptionsTxn = s;
}), 98);
