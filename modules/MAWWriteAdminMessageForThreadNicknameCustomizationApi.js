__d("MAWWriteAdminMessageForThreadNicknameCustomizationApi", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MAWWriteThreadNicknameCustomizationAdminMsgTxns"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READONLY,
		ftsBackloggedMessages: e.READWRITE,
		groupInfo: e.READONLY,
		media: e.READONLY,
		messages: e.READWRITE,
		threads: e.READWRITE
	}, "writeAdminMessageForThreadNicknameCustomization", function(e) {
		return (function(t) {
			var n = t.actorFbid, r = t.chatJid, a = t.externalId, i = t.nickName, l = t.participantId, s = t.serverAuthoritativeTimestampMs;
			return o("MAWWriteThreadNicknameCustomizationAdminMsgTxns").writeThreadNicknameCustomizationAdminMsg(e, n, r, i, l, a, s);
		});
	});
	l.writeAdminMessageForThreadNicknameCustomization = s;
}), 98);
