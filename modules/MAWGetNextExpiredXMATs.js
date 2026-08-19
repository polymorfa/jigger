__d("MAWGetNextExpiredXMATs", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ xma: o("MAWTransactionMode").READONLY }, "getNextExpiredXMATs", function(e) {
		return function() {
			var t = o("WATimeUtils").unixTime();
			return e.xma.orderBy("targetExpiringAtSec").filter(function(e) {
				return (e == null ? void 0 : e.targetExpiringAtSec) != null ? e.targetExpiringAtSec >= t : !1;
			}).first().then(function(e) {
				return e == null ? void 0 : e.targetExpiringAtSec;
			});
		};
	});
	l.getNextExpiredXMATs = e;
}), 98);
