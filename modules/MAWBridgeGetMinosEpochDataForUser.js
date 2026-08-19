__d("MAWBridgeGetMinosEpochDataForUser", [
	"EBMinosCheckWasmFeatureSupport",
	"LSDatabaseSingleton",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u() {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupportAndGK();
			if (!t) return (s || (s = n("Promise"))).resolve();
			var r = yield (e || (e = o("LSDatabaseSingleton"))).getLSDatabaseSingletonPromiseOrValue(), a = yield r.runInTransaction(function(e) {
				return o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(e.secure_encrypted_backups_epochs));
			}, "readonly", void 0, void 0, i.id + ":24");
			return a;
		}), c.apply(this, arguments);
	}
	l.getMinosEpochDataForUser = u;
}), 98);
