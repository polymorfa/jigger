__d("MAWWriteAdminMessageForEphemeralSettingsChange", [
	"MAWDbGroupInfoTxns",
	"MAWEphemeralAdminMsgBuildTxns",
	"MAWGetOrCreateThreadTxns",
	"MAWHIMLogger",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WAJids",
	"WAResultOrError",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (s = o("MAWTransactionMode")).READONLY,
		ephemeralSettings: s.READWRITE,
		ftsBackloggedMessages: s.READWRITE,
		groupInfo: s.READWRITE,
		groupInvites: s.READONLY,
		media: s.READONLY,
		messages: s.READWRITE,
		reactions: s.READONLY,
		threads: s.READWRITE,
		xma: s.READONLY
	}, "writeAdminMessageForEphemeralSettingsChange", function(t) {
		return (function(n) {
			var a = n.author, i = n.chatJid, l = n.expirationInSec, s = n.externalId, u = n.isEphemeralSettingReset, c = n.isTurningOnEphemeralSetting, d = n.serverTs, m = o("WAJids").interpretAsGroupJid(i), p = m != null ? o("MAWDbGroupInfoTxns").getGroupInfo(m) : null;
			return o("MAWGetOrCreateThreadTxns").getExistingThread(t, i).then(function(e) {
				if (e != null) return {
					created: !1,
					thread: e
				};
				var n = p != null && p.success ? p.value.creationTs : null;
				return o("MAWGetOrCreateThreadTxns").getOrCreateThread(t, {
					createTs: n == null ? null : o("WATimeUtils").castUnixTimeToMillisTime(n),
					description: "writeAdminMessageForEphemeralSettingsChange",
					jid: i
				});
			}).then(function(n) {
				var i = n == null ? void 0 : n.thread;
				return i == null ? (r("MAWHIMLogger").MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Cannot create a thread for message after missing thread creation attempt"]))), o("WAResultOrError").makeError({ type: "no_thread" })) : o("MAWEphemeralAdminMsgBuildTxns").writeEphemeralSettingAdminMsg(t, a, l, d, i, c, u, s);
			}).then(r("emptyFunction"));
		});
	});
	l.writeAdminMessageForEphemeralSettingsChange = u;
}), 98);
