__d("MAWMessagesIntegrityEphemeralSettings", [
	"I64",
	"MAWGetEphemeralSettings",
	"MAWMiActOnActThreadReady",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s(t, n, r) {
		var a = await o("MAWMiActOnActThreadReady").waitForACTThreadReady(t.tables, n, "getIsEphemeralMessagesEnabledForPage"), i = a.chatJid, l = await o("MAWGetEphemeralSettings").getEphemeralSetting(i, n);
		return l == null || l.ephemeralLastUpdatedOrSetTimestamp === o("WATimeUtils").DEFAULT_UNIXTIME ? "disabled" : o("WATimeUtils").castUnixTimeToMillisTime(l.ephemeralLastUpdatedOrSetTimestamp) < (e || (e = o("I64"))).to_float(r) ? l.ephemeralExpirationInSec > 0 ? "enabled" : "disabled" : l.ephemeralExpirationInSec > 0 ? "maybeDisabled" : "maybeEnabled";
	}
	l.getEphemeralMessagesStatusForPage = s;
}), 98);
