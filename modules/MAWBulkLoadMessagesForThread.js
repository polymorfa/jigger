__d("MAWBulkLoadMessagesForThread", [
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWLoadMsgsTxns",
	"MAWTransactionMode",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READONLY,
		editMsgHistory: e.READONLY,
		groupInfo: e.READONLY,
		media: e.READONLY,
		messages: e.READONLY,
		poll: e.READONLY,
		reactions: e.READONLY,
		receiverFetchInfo: e.READONLY,
		threads: e.READONLY,
		xma: e.READONLY
	}, "bulkLoadMessagesForThread", function(e) {
		return (function(t) {
			var n = t.threads;
			return o("MAWDexieTable").dexieAll(n.map(function(t) {
				var n = t.jid, r = t.numOfMsgsToLoad;
				return o("MAWLoadMsgsTxns").loadMsgAndMedia_COMPAT(e, n, r, !0);
			})).then(r("emptyFunction"));
		});
	});
	l.bulkLoadMessagesForThread = s;
}), 98);
