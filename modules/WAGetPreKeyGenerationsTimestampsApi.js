__d("WAGetPreKeyGenerationsTimestampsApi", ["WASignalDB", "asyncToGeneratorRuntime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function() {
		return o("WASignalDB").getDb().runInTransaction(["prekeyGeneration"], "readonly", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield e.stores.prekeyGeneration.readAll();
				return t.map(function(e) {
					return {
						id: e.generationId,
						timestamp: e.createdTs
					};
				});
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("getPreKeyGenerationsTimestamps"));
	};
	l.getPreKeyGenerationsTimestamps = e;
}), 98);
