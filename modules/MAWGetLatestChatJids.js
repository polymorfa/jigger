__d("MAWGetLatestChatJids", [
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ threads: o("MAWTransactionMode").READONLY }, "getLatestChatJids", function(e) {
		return (function(t) {
			var n = e.threads.orderBy("threadOrder").reverse().limit(t).toArray();
			return n.then(function(e) {
				return o("MAWDexieTable").dexieResolve(e.map(function(e) {
					var t = e.jid;
					return t;
				}));
			});
		});
	});
	l.getLatestChatJids = e;
}), 98);
