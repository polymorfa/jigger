__d("MAWEphemeralSettingsCache", ["WATimeUtils", "qex"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = new Map();
	function s() {
		var e;
		return (e = r("qex")._("821")) != null ? e : !1;
	}
	var u = {
		ephemeralExpirationInSec: 0,
		ephemeralLastUpdatedOrSetTimestamp: o("WATimeUtils").castToUnixTime(0)
	};
	function c(t, n) {
		e.set(t, n);
	}
	function d(t) {
		return e.get(t);
	}
	l.ephemeralSettingMigrationEnabled = s, l.ZERO_EPHEMERAL_SETTING = u, l.setEphemeralSettingCache = c, l.getEphemeralSettingCache = d;
}), 98);
