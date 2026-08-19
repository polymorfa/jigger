__d("WADeletePreKeyGenerationsApi", [
	"Promise",
	"WAGetPrekeyIdsInRange",
	"WALogger",
	"WASignalDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = function(r) {
		return o("WASignalDB").getDb().runInTransaction(["prekey", "prekeyGeneration"], "readwrite", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var a = yield t.stores.prekeyGeneration.bulkGet(r), i = [];
				for (var l of a) {
					if (l == null) {
						o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Attempting to delete non-existent prekey generation"])));
						continue;
					}
					for (var u of o("WAGetPrekeyIdsInRange").getPrekeyIdsInRange(l.startingId, l.endingId)) i.push(u);
				}
				yield (s || (s = n("Promise"))).all([t.stores.prekeyGeneration.bulkDelete(r), t.stores.prekey.bulkDelete(i)]);
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("deletePreKeyGenerations"));
	};
	l.deletePreKeyGenerations = u;
}), 98);
