__d("WADbMetaTxns", [
	"WADbSignal",
	"WASignalDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e.meta.bulkGet([o("WADbSignal").MetaKeysEnum.lastSignedPrekeyId, o("WADbSignal").MetaKeysEnum.identityKeyPair]).then(function(e) {
			var t = e[0], n = e[1], r = t == null ? void 0 : t.value.lastSignedPrekeyId, o = n == null ? void 0 : n.value.identityKeyPair;
			return {
				identityPair: o,
				keyId: r
			};
		});
	}
	var s = function(t) {
		return o("WASignalDB").getDb().runInTransaction(["meta"], "readwrite", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				return yield e.stores.meta.bulkPut([{
					key: o("WADbSignal").MetaKeysEnum.cat,
					value: { cat: t }
				}]), t;
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("saveCAT"));
	};
	l.maybeGetLastSignedPrekeyIdAndIdentity = e, l.saveCAT = s;
}), 98);
