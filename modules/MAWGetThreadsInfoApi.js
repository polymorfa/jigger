__d("MAWGetThreadsInfoApi", [
	"MAWDbThreadTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({ threads: o("MAWTransactionMode").READONLY }, "getThreadIdByDeduplicationKey", function(t) {
		return (function(n) {
			return o("WALogger").DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["getThreadIdByDeduplicationKey ", ""])), n), o("MAWDbThreadTxns").getThreadByDeduplicationKey(t, n).then(function(e) {
				return e.success ? { jid: e.value.jid } : null;
			});
		});
	});
	l.getThreadIdByDeduplicationKey = s;
}), 98);
