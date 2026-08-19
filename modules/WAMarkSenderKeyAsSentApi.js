__d("WAMarkSenderKeyAsSentApi", ["WASignalDB", "asyncToGeneratorRuntime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t, r, a) {
		return o("WASignalDB").getDb().runInTransaction(["personalSenderKeyStatuses"], "readwrite", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var n = yield e.stores.personalSenderKeyStatuses.get(t);
				n != null && n.senderKeyId === r && (a.forEach(function(e) {
					n.hasSenderKey.add(e);
				}), yield e.stores.personalSenderKeyStatuses.bulkPut([n]));
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("markSenderKeyAsSent"));
	};
	l.markSenderKeyAsSent = e;
}), 98);
