__d("WAClearSignalStores", [
	"MAWDexieTable",
	"MAWTransactionMode",
	"WADbTransactor"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("WADbTransactor").makeSignalTransactor({ tasks: o("MAWTransactionMode").READWRITE }, "clearSignalStores", function(e) {
		return function() {
			return o("MAWDexieTable").dexieAll([e.tasks.clear()]).then(function() {});
		};
	});
	l.clearSignalStores = e;
}), 98);
