__d("MAWGetNextDeletePendingStanzaTs", [
	"MAWTransactionMode",
	"MAWTransactor",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWTransactor").makeMsgrTransactor({ pendingStanzas: o("MAWTransactionMode").READONLY }, "getNextDeletePendingStanzaTs", function(e) {
		return function() {
			var t = o("WATimeUtils").unixTime();
			return e.pendingStanzas.orderBy("deleteTs").filter(function(e) {
				return e.deleteTs != null ? e.deleteTs > t : !1;
			}).first().then(function(e) {
				return e == null ? void 0 : e.deleteTs;
			});
		};
	});
	l.getNextDeletePendingStanzaTs = e;
}), 98);
