__d("WASaveSignedPreKeyIfNewApi", [
	"Promise",
	"WADbSignal",
	"WASignalDB",
	"WASignalSignatures",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function(r, a) {
		return o("WASignalDB").getDb().runInTransaction(["meta", "signedPrekey"], "readwrite", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var i = yield t.stores.signedPrekey.get(r);
				if (i != null) {
					var l = o("WASignalSignatures").deserializeSignedPreKey(i.encoded);
					if (l != null) return {
						key: l,
						type: "duplicate"
					};
				}
				return yield (e || (e = n("Promise"))).all([t.stores.signedPrekey.bulkPut([{
					encoded: a,
					keyId: r
				}]), t.stores.meta.bulkPut([{
					key: o("WADbSignal").MetaKeysEnum.lastSignedPrekeyId,
					value: { lastSignedPrekeyId: r }
				}])]), { type: "success" };
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("saveSignedPreKeyIfNew"));
	};
	l.saveSignedPreKeyIfNew = s;
}), 98);
