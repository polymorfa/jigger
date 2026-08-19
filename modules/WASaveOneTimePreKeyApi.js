__d("WASaveOneTimePreKeyApi", [
	"Promise",
	"WADbSignal",
	"WAResultOrError",
	"WASignalDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function(r) {
		return o("WASignalDB").getDb().runInTransaction(["meta", "prekey"], "readwrite", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var a = yield t.stores.meta.get(o("WADbSignal").MetaKeysEnum.lastPrekeyId), i = a == null ? void 0 : a.value.lastPrekeyId;
				return i == null ? o("WAResultOrError").makeError("missing_last_prekey") : (yield (e || (e = n("Promise"))).all([t.stores.prekey.bulkPut([babelHelpers.extends({}, r, { isDeleted: !1 })]), t.stores.meta.bulkPut([{
					key: o("WADbSignal").MetaKeysEnum.lastPrekeyId,
					value: { lastPrekeyId: r.keyId }
				}])]), o("WAResultOrError").makeResult());
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("saveOneTimePreKey"));
	};
	l.saveOneTimePreKey = s;
}), 98);
