__d("WABulkPutMediaKeysApi", ["MAWTransactionMode", "WADbTransactor"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("WADbTransactor").makeSignalTransactor({ mediaKeys: o("MAWTransactionMode").READWRITE }, "bulkPutMediaKeys", function(e) {
		return function(t) {
			return e.mediaKeys.bulkPut(t).then(function() {});
		};
	});
	l.bulkPutMediaKeys = e;
}), 98);
