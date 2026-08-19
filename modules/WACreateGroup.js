__d("WACreateGroup", [
	"WADbPersonalSenderKeyStatusTxns",
	"WAGlobals",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			yield o("WAGlobals").getDependencies().createGroups(e), yield o("WADbPersonalSenderKeyStatusTxns").bulkPutNewPersonalSenderKeyStatus(e.map(function(e) {
				return e.groupToCreate.jid;
			}));
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})();
	l.createGroups = e;
}), 98);
