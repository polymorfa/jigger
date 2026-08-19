__d("WASaveReceiptApi", [
	"WAMsg",
	"WASignalDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = o("WAMsg").craftWAMsgIdString(e.id), n = Array.from(e.permittedIdentitiesPerDevice).map(function(e) {
				var n = e[0], r = e[1];
				return {
					waMsgId: t,
					deviceJid: n,
					retryCount: 0,
					deviceIdentity: r
				};
			});
			n.length !== 0 && (yield o("WASignalDB").getDb().runInTransaction(["receipts"], "readwrite", function(e) {
				return e.stores.receipts.bulkAdd(n);
			}, "saveReceiptInSignalDb"));
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})();
	l.saveReceipt = e;
}), 98);
