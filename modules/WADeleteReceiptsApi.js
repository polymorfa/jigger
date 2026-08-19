__d("WADeleteReceiptsApi", [
	"Promise",
	"WASignalDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			t.length !== 0 && (yield o("WASignalDB").getDb().runInTransaction(["receipts"], "readwrite", (function() {
				var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r) {
					var o = (yield (e || (e = n("Promise"))).all(t.map(function(e) {
						return r.stores.receipts.readIndexRange("waMsgId+deviceJid", { only: [e] });
					}))).flat();
					o.length !== 0 && (yield r.stores.receipts.bulkDelete(o.map(function(e) {
						return e.pk;
					})));
				});
				return function(e) {
					return r.apply(this, arguments);
				};
			})(), "deleteReceiptsInSignalDb"));
		});
		return function(n) {
			return t.apply(this, arguments);
		};
	})();
	l.deleteReceipts = s;
}), 98);
