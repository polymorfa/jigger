__d("WAGetLastPreKeyGenerationIdApi", [
	"Promise",
	"WADbSignal",
	"WASignalDB",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield o("WASignalDB").getDb().runInTransaction(["meta"], "readonly", function(t) {
				return (e || (e = n("Promise"))).all([t.stores.meta.get(o("WADbSignal").MetaKeysEnum.lastPrekeyId).then(function(e) {
					return e == null ? void 0 : e.value.lastPrekeyId;
				}), t.stores.meta.get(o("WADbSignal").MetaKeysEnum.lastPrekeyGenerationId).then(function(e) {
					return e == null ? void 0 : e.value.lastPrekeyGenerationId;
				})]);
			}, o("WASignalDB").signalOp("getLastPreKeyGenerationId")), a = t[0], i = t[1];
			if (a == null && i != null || a != null && i == null) throw r("err")("Last prekey id and Last prekey generation id should both be non-null");
			return a != null && i != null ? {
				lastGenerationId: i,
				lastPreKeyId: a
			} : null;
		});
		return function() {
			return t.apply(this, arguments);
		};
	})();
	l.getLastPreKeyGenerationId = s;
}), 98);
