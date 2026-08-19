__d("MAWWriteAdminMessageForLimitSharingApi", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MAWWriteLimitSharingAdminMsgTxns"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READONLY,
		ftsBackloggedMessages: e.READWRITE,
		groupInfo: e.READONLY,
		media: e.READONLY,
		messages: e.READWRITE,
		threads: e.READWRITE
	}, "MAWWriteAdminMessageForLimitSharing", function(e) {
		return (function(t) {
			var n = t.actorFbid, r = t.chatJid, a = t.externalId, i = t.isLimitSharingEnabled, l = t.serverAuthoritativeTimestampMs;
			return o("MAWWriteLimitSharingAdminMsgTxns").writeLimitSharingAdminMsg(e, n, r, a, i, l);
		});
	});
	l.writeAdminMessageForLimitSharing = s;
}), 98);
