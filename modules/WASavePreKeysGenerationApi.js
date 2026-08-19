__d("WASavePreKeysGenerationApi", [
	"Promise",
	"WACryptoManager",
	"WADbSignal",
	"WAResultOrError",
	"WASignalDB",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			if (t.length === 0) throw r("err")("Keys provided to savePreKeysGeneration cannot be empty");
			var a = yield o("WASignalDB").getDb().runInTransaction([
				"meta",
				"prekey",
				"prekeyGeneration"
			], "readwrite", (function() {
				var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r) {
					var a, i = yield r.stores.meta.get(o("WADbSignal").MetaKeysEnum.lastPrekeyGenerationId), l = o("WACryptoManager").castToPreKeyGenerationId(((a = i == null ? void 0 : i.value.lastPrekeyGenerationId) != null ? a : 0) + 1), s = t[0].keyId, u = t[t.length - 1].keyId, c = t.map(function(e) {
						return babelHelpers.extends({}, e, { isDeleted: !1 });
					});
					return yield (e || (e = n("Promise"))).all([
						r.stores.prekey.bulkPut(c),
						r.stores.meta.bulkPut([{
							key: o("WADbSignal").MetaKeysEnum.lastPrekeyId,
							value: { lastPrekeyId: u }
						}, {
							key: o("WADbSignal").MetaKeysEnum.lastPrekeyGenerationId,
							value: { lastPrekeyGenerationId: l }
						}]),
						r.stores.prekeyGeneration.bulkPut([{
							createdTs: o("WATimeUtils").unixTime(),
							endingId: u,
							generationId: l,
							startingId: s
						}])
					]), o("WAResultOrError").makeResult(l);
				});
				return function(e) {
					return r.apply(this, arguments);
				};
			})(), o("WASignalDB").signalOp("savePreKeysGeneration"));
			return a;
		});
		return function(n) {
			return t.apply(this, arguments);
		};
	})();
	l.savePreKeysGeneration = s;
}), 98);
