__d("MAWMessageIntegrityFetchAndCompareData", [
	"MAWMessageIntegrityCompareMessagesData",
	"MAWMessageIntegrityFetchMessagesData",
	"MAWMiActOnActThreadReady",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.db, n = e.fromReferencePoint, r = e.localMessages, a = e.pageSize, i = e.threadKey, l = yield o("MAWMiActOnActThreadReady").waitForACTThreadReady(t.tables, i, "fetchAndCompareMessagesData"), s = l.chatJid, u = yield o("MAWMessageIntegrityFetchMessagesData").fetchMessagesDataForComparison(s, a, n, r);
			if (u.success === !1) return u;
			var c = yield o("MAWMessageIntegrityCompareMessagesData").compareMessagesData(i, u.value);
			return o("WAResultOrError").makeResult(c);
		}), s.apply(this, arguments);
	}
	l.fetchAndCompareMessagesData = e;
}), 98);
