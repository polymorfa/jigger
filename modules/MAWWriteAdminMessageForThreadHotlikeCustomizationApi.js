__d("MAWWriteAdminMessageForThreadHotlikeCustomizationApi", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MAWWriteThreadHotlikeCustomizationAdminMsgTxns"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READONLY,
		ftsBackloggedMessages: e.READWRITE,
		groupInfo: e.READONLY,
		media: e.READONLY,
		messages: e.READWRITE,
		threads: e.READWRITE
	}, "writeAdminMessageForThreadHotlikeCustomization", function(e) {
		return (function(t) {
			var n = t.actorFbid, r = t.chatJid, a = t.externalId, i = t.serverAuthoritativeTimestampMs, l = t.threadIcon;
			return o("MAWWriteThreadHotlikeCustomizationAdminMsgTxns").writeThreadHotlikeCustomizationAdminMsg(e, n, l, r, a, i);
		});
	});
	l.writeAdminMessageForThreadHotlikeCustomization = s;
}), 98);
