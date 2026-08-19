__d("MAWRemoveExpiredPendingStanzas", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ pendingStanzas: o("MAWTransactionMode").READWRITE }, "removeExpiredPendingStanzas", function(e) {
		return function() {
			var t = o("WATimeUtils").unixTime();
			return e.pendingStanzas.where("deleteTs").belowOrEqual(t).toArray().then(function(t) {
				var n = t.map(function(e) {
					return e.rowId;
				});
				return e.pendingStanzas.bulkDelete(n).then(function() {
					return n.length;
				});
			});
		};
	});
	l.removeExpiredPendingStanzas = e;
}), 98);
