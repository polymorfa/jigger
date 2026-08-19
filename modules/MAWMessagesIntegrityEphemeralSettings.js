__d("MAWMessagesIntegrityEphemeralSettings", [
	"I64",
	"MAWGetEphemeralSettings",
	"MAWMiActOnActThreadReady",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
			var a = yield o("MAWMiActOnActThreadReady").waitForACTThreadReady(t.tables, n, "getIsEphemeralMessagesEnabledForPage"), i = a.chatJid, l = yield o("MAWGetEphemeralSettings").getEphemeralSetting(i, n);
			return l == null || l.ephemeralLastUpdatedOrSetTimestamp === o("WATimeUtils").DEFAULT_UNIXTIME ? "disabled" : o("WATimeUtils").castUnixTimeToMillisTime(l.ephemeralLastUpdatedOrSetTimestamp) < (e || (e = o("I64"))).to_float(r) ? l.ephemeralExpirationInSec > 0 ? "enabled" : "disabled" : l.ephemeralExpirationInSec > 0 ? "maybeDisabled" : "maybeEnabled";
		}), u.apply(this, arguments);
	}
	l.getEphemeralMessagesStatusForPage = s;
}), 98);
