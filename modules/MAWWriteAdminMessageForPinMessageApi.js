__d("MAWWriteAdminMessageForPinMessageApi", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MAWWritePinMessageAdminMsgTxns"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READONLY,
		ftsBackloggedMessages: e.READWRITE,
		groupInfo: e.READONLY,
		media: e.READONLY,
		messages: e.READWRITE,
		threads: e.READWRITE
	}, "MAWWriteAdminMessageForPinMessage", function(e) {
		return (function(t) {
			var n = t.actorFbid, r = t.chatJid, a = t.externalId, i = t.serverAuthoritativeTimestampMs;
			return o("MAWWritePinMessageAdminMsgTxns").writePinMessageAdminMsg(e, n, r, a, i);
		});
	});
	l.writeAdminMessageForPinMessage = s;
}), 98);
