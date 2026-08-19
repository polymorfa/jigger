__d("MAWIdentifyCollapsedMessagesByExternalId", [
	"MAWDbMsgTxns",
	"MAWIndexedDb",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e) {
		var t = e.externalIds, n = await o("MAWIndexedDb").makeMsgrTransactor({ messages: o("MAWTransactionMode").READONLY }, "identifyCollapsedMessagesByExternalId", function(e) {
			return function() {
				return o("MAWDbMsgTxns").UNSAFE_getMultipleMsgsByExternalId(e, t);
			};
		})();
		return n.filter(function(e) {
			return e.isCollapsed === !0;
		}).map(function(e) {
			return e.externalId;
		});
	}
	l.identifyCollapsedMessagesByExternalId = e;
}), 98);
