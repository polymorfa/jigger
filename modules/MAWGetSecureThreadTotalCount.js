__d("MAWGetSecureThreadTotalCount", [
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWTransactionMode",
	"MAWTransactor"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWTransactor").makeMsgrTransactor({ threads: o("MAWTransactionMode").READONLY }, "getSecureThreadTotalCount", function(e) {
		return function() {
			return o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().count()) : e.threads.count();
		};
	});
	l.getSecureThreadTotalCount = e;
}), 98);
