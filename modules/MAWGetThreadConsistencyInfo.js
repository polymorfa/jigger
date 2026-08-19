__d("MAWGetThreadConsistencyInfo", [
	"MAWDexieTable",
	"MAWGetThreadUpdateType",
	"MAWIndexedDb",
	"MAWThreadSnippetUtils",
	"MAWThreadUpdateType",
	"MAWTransactionMode",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({
		messages: o("MAWTransactionMode").READONLY,
		reactions: o("MAWTransactionMode").READONLY,
		xma: o("MAWTransactionMode").READONLY
	}, "getThreadConsistencyInfo", function(e) {
		return (function(t) {
			if (t.action === "GET_SNIPPETS_INFO") return o("MAWDexieTable").dexieAll(t.chatJids.map(function(t) {
				return o("MAWThreadSnippetUtils").getThreadSnippetFromScratch(e, t);
			})).then(function(e) {
				return { snippetsInfo: e };
			});
			if (t.action === "MSG_ELIGIBLE_FOR_SNIPPET_RECALCULATION") return e.messages.get({
				msgId: t.msgId,
				threadJid: t.chatJid
			}).then(function(e) {
				var t = null;
				if (e != null) {
					var n;
					t = o("MAWGetThreadUpdateType").getThreadUpdateTypeForMsg({
						adminType: (n = e.msgContent) == null ? void 0 : n.adminType,
						author: e.author,
						msgType: e.type,
						xmaMessageType: e.xmaMessageType
					});
				}
				return { isSnippetEligible: t !== o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.NO_SNIPPET_OR_ACTIVITY_TS_UPDATE };
			});
			throw r("err")("Invalid params type");
		});
	});
	l.getThreadConsistencyInfo = e;
}), 98);
