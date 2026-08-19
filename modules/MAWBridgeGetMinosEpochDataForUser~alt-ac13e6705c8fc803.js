__d("MAWBridgeGetMinosEpochDataForUser", [
	"EBMinosCheckWasmFeatureSupport",
	"LSDatabaseSingleton",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s() {
		var t = await o("EBMinosCheckWasmFeatureSupport").checkWasmFeatureSupportAndGK();
		if (!t) return Promise.resolve();
		var n = await (e || (e = o("LSDatabaseSingleton"))).getLSDatabaseSingletonPromiseOrValue(), r = await n.runInTransaction(function(e) {
			return o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(e.secure_encrypted_backups_epochs));
		}, "readonly", void 0, void 0, i.id + ":24");
		return r;
	}
	l.getMinosEpochDataForUser = s;
}), 98);
