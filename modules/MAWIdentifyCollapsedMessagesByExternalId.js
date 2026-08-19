__d("MAWIdentifyCollapsedMessagesByExternalId", [
	"MAWDbMsgTxns",
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
			var t = e.externalIds, n = yield o("MAWIndexedDb").makeMsgrTransactor({ messages: o("MAWTransactionMode").READONLY }, "identifyCollapsedMessagesByExternalId", function(e) {
				return function() {
					return o("MAWDbMsgTxns").UNSAFE_getMultipleMsgsByExternalId(e, t);
				};
			})();
			return n.filter(function(e) {
				return e.isCollapsed === !0;
			}).map(function(e) {
				return e.externalId;
			});
		}), s.apply(this, arguments);
	}
	l.identifyCollapsedMessagesByExternalId = e;
}), 98);
