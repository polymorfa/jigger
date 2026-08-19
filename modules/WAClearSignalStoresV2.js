__d("WAClearSignalStoresV2", [
	"Promise",
	"WASignalDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function() {
		return o("WASignalDB").getDb().runInTransaction([
			"identity",
			"contacts",
			"meta",
			"prekey",
			"prekeyGeneration",
			"senderKeySessions",
			"sentBytesCache",
			"session",
			"signedPrekey",
			"personalSenderKeyStatuses"
		], "readwrite", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				yield (e || (e = n("Promise"))).all([
					t.stores.identity.clear(),
					t.stores.contacts.clear(),
					t.stores.meta.clear(),
					t.stores.prekey.clear(),
					t.stores.prekeyGeneration.clear(),
					t.stores.senderKeySessions.clear(),
					t.stores.sentBytesCache.clear(),
					t.stores.session.clear(),
					t.stores.signedPrekey.clear(),
					t.stores.personalSenderKeyStatuses.clear()
				]);
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("clearSignalStores"));
	};
	l.clearSignalStores = s;
}), 98);
