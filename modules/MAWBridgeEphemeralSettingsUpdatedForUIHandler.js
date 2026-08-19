__d("MAWBridgeEphemeralSettingsUpdatedForUIHandler", [
	"MAWChatJid",
	"MAWEphemeralSettingsUpdate",
	"Promise",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
			var a = yield o("MAWChatJid").toThreadKeyMaybe(t, r.chatJid);
			return a != null ? o("MAWEphemeralSettingsUpdate").updateEphemeralSettingsWithTxn(t, r.ephemeralSettingArgs.ephemeralExpirationInSec, yield o("WATimeUtils").castUnixTimeToMillisTime(r.ephemeralSettingArgs.ephemeralLastUpdatedOrSetTimestamp), r.isEphemeralSettingReset, a, !1, r.author) : (e || (e = n("Promise"))).resolve();
		}), u.apply(this, arguments);
	}
	l.call = s;
}), 98);
