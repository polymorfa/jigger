__d("MAWWriteAdminMessageForThreadPhotoCustomizationApi", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MAWWriteThreadPhotoCustomizationAdminMsgTxns"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READONLY,
		ftsBackloggedMessages: e.READWRITE,
		groupInfo: e.READONLY,
		media: e.READONLY,
		messages: e.READWRITE,
		threads: e.READWRITE
	}, "writeAdminMessageForThreadPhotoCustomization", function(e) {
		return (function(t) {
			var n = t.actorFbid, r = t.chatJid, a = t.externalId, i = t.serverAuthoritativeTimestampMs;
			return o("MAWWriteThreadPhotoCustomizationAdminMsgTxns").writeThreadPhotoCustomizationAdminMsg(e, n, r, a, i);
		});
	});
	l.writeAdminMessageForThreadPhotoCustomization = s;
}), 98);
