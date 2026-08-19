__d("MAWSetEphemeralSettingsOfPeerFromMIApi", [
	"MAWDbGroupInfoTxns",
	"MAWEphemeralSettingsTxns",
	"MAWGetOrCreateThreadTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WAJids",
	"WATimeUtils"
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
	}), s = async function(n) {
		var t = n.author, r = n.chatJid, o = n.ephemeralExpirationInSec, a = n.ephemeralLastUpdatedOrSetTimestamp, i = n.fromWAI, l = n.isEphemeralSettingReset, s = n.serverTs;
		return e(t, r, o, a, l, i, s).then(function() {
			return { success: !0 };
		});
	};
	l.setEphemeralSettingsFromMI = s;
}), 98);
