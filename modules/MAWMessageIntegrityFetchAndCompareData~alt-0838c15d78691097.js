__d("MAWMessageIntegrityFetchAndCompareData", [
	"MAWMessageIntegrityCompareMessagesData",
	"MAWMessageIntegrityFetchMessagesData",
	"MAWMiActOnActThreadReady",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e) {
		var t = e.db, n = e.fromReferencePoint, r = e.localMessages, a = e.pageSize, i = e.threadKey, l = await o("MAWMiActOnActThreadReady").waitForACTThreadReady(t.tables, i, "fetchAndCompareMessagesData"), s = l.chatJid, u = await o("MAWMessageIntegrityFetchMessagesData").fetchMessagesDataForComparison(s, a, n, r);
		if (u.success === !1) return u;
		var c = await o("MAWMessageIntegrityCompareMessagesData").compareMessagesData(i, u.value);
		return o("WAResultOrError").makeResult(c);
	}
	l.fetchAndCompareMessagesData = e;
}), 98);
