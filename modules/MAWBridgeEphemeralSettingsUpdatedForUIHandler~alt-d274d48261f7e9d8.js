__d("MAWBridgeEphemeralSettingsUpdatedForUIHandler", [
	"MAWChatJid",
	"MAWEphemeralSettingsUpdate",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t) {
		var n = await o("MAWChatJid").toThreadKeyMaybe(e, t.chatJid);
		return n != null ? o("MAWEphemeralSettingsUpdate").updateEphemeralSettingsWithTxn(e, t.ephemeralSettingArgs.ephemeralExpirationInSec, await o("WATimeUtils").castUnixTimeToMillisTime(t.ephemeralSettingArgs.ephemeralLastUpdatedOrSetTimestamp), t.isEphemeralSettingReset, n, !1, t.author) : Promise.resolve();
	}
	l.call = e;
}), 98);
