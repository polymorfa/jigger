__d("MAWWriteAdminMessageForThreadThemeCustomizationApi", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MAWWriteThreadThemeCustomizationAdminMsgTxns"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READONLY,
		ftsBackloggedMessages: e.READWRITE,
		groupInfo: e.READONLY,
		media: e.READONLY,
		messages: e.READWRITE,
		threads: e.READWRITE
	}, "writeAdminMessageForThreadThemeCustomization", function(e) {
		return (function(t) {
			var n = t.actorFbid, r = t.chatJid, a = t.externalId, i = t.serverAuthoritativeTimestampMs, l = t.themeEmoji, s = t.themeNameWithSubtitle, u = t.themeType;
			return o("MAWWriteThreadThemeCustomizationAdminMsgTxns").writeThreadThemeCustomizationAdminMsg(e, n, l, s, r, a, i, u);
		});
	});
	l.writeAdminMessageForThreadThemeCustomization = s;
}), 98);
