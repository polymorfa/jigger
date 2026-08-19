__d("WALoadReceiptApi", [
	"WAMsg",
	"WAResultOrError",
	"WASignalDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = o("WAMsg").craftWAMsgIdString(e), n = yield o("WASignalDB").getDb().runInTransaction(["receipts"], "readonly", function(e) {
				return e.stores.receipts.readIndexRange("waMsgId+deviceJid", { only: [t] });
			}, "loadReceiptFromSignalDb");
			if (n.length === 0) return o("WAResultOrError").makeError("missing-receipt");
			var r = new Map(), a = new Set();
			for (var i of n) r.set(i.deviceJid, i.deviceIdentity), a.add(i.deviceJid);
			return o("WAResultOrError").makeResult({
				id: e,
				permittedIdentitiesPerDevice: r,
				recipientDevices: a
			});
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})();
	l.loadReceipt = e;
}), 98);
