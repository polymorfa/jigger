__d("MAWSetEphemeralSettingsOfPeerFromMIApi", [
	"MAWDbGroupInfoTxns",
	"MAWEphemeralSettingsTxns",
	"MAWGetOrCreateThreadTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WAJids",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({
		ephemeralSettings: o("MAWTransactionMode").READWRITE,
		messages: o("MAWTransactionMode").READWRITE,
		threads: o("MAWTransactionMode").READWRITE
	}, "handleAndWriteIncomingEphemeralSetting", function(e) {
		return (function(t, n, r, a, i, l, s) {
			var u = o("WAJids").interpretAsGroupJid(n), c = u != null ? o("MAWDbGroupInfoTxns").getGroupInfo(u) : null;
			return o("MAWGetOrCreateThreadTxns").getExistingThread(e, n).then(function(t) {
				if (t != null) return {
					created: !1,
					thread: t
				};
				var r = c != null && c.success ? c.value.creationTs : null;
				return o("MAWGetOrCreateThreadTxns").getOrCreateThread(e, {
					createTs: r == null ? null : o("WATimeUtils").castUnixTimeToMillisTime(r),
					description: "handleAndWriteIncomingEphemeralSetting",
					jid: n
				});
			}).then(function(n) {
				var u = n.thread;
				return o("MAWEphemeralSettingsTxns").handleAndWriteIncomingEphemeralSetting(e, t, r, a, i, u, s, null, l);
			});
		});
	}), s = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.author, r = t.chatJid, o = t.ephemeralExpirationInSec, a = t.ephemeralLastUpdatedOrSetTimestamp, i = t.fromWAI, l = t.isEphemeralSettingReset, s = t.serverTs;
			return e(n, r, o, a, l, i, s).then(function() {
				return { success: !0 };
			});
		});
		return function(n) {
			return t.apply(this, arguments);
		};
	})();
	l.setEphemeralSettingsFromMI = s;
}), 98);
