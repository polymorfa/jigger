__d("MAWDeleteMediaChunks_FOR_TESTING_ONLY", [
	"MAWIndexedDb",
	"MAWMediaUtils",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ chunk: o("MAWTransactionMode").READWRITE }, "deleteMediaChunks_FOR_TESTING_ONLY", function(e) {
		return (function(t) {
			var n = t.map(o("MAWMediaUtils").genHMACPlaintextHash);
			return e.chunk.where("hashedPlaintextHash").anyOf(n).delete().then(function() {});
		});
	});
	l.deleteMediaChunks_FOR_TESTING_ONLY = e;
}), 98);
