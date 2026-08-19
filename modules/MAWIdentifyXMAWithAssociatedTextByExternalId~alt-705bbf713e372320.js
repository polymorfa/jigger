__d("MAWIdentifyXMAWithAssociatedTextByExternalId", [
	"MAWDbXMATxns",
	"MAWIndexedDb",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e) {
		var t = e.externalIds, n = await o("MAWIndexedDb").makeMsgrTransactor({ xma: o("MAWTransactionMode").READONLY }, "identifyXMAWithAssociatedTextByExternalId", function(e) {
			return function() {
				return o("MAWDbXMATxns").getMultipleXMAByExternalId(e, t);
			};
		})();
		return n.filter(function(e) {
			return e.associatedMessageId != null;
		}).map(function(e) {
			return e.externalId;
		});
	}
	l.identifyXMAWithAssociatedTextByExternalId = e;
}), 98);
