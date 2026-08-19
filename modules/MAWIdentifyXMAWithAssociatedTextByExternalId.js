__d("MAWIdentifyXMAWithAssociatedTextByExternalId", [
	"MAWDbXMATxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.externalIds, n = yield o("MAWIndexedDb").makeMsgrTransactor({ xma: o("MAWTransactionMode").READONLY }, "identifyXMAWithAssociatedTextByExternalId", function(e) {
				return function() {
					return o("MAWDbXMATxns").getMultipleXMAByExternalId(e, t);
				};
			})();
			return n.filter(function(e) {
				return e.associatedMessageId != null;
			}).map(function(e) {
				return e.externalId;
			});
		}), s.apply(this, arguments);
	}
	l.identifyXMAWithAssociatedTextByExternalId = e;
}), 98);
