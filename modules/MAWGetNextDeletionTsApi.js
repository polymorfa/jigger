__d("MAWGetNextDeletionTsApi", ["MAWTransactionMode", "MAWTransactor"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWTransactor").makeMsgrTransactor({ messages: o("MAWTransactionMode").READONLY }, "getNextDeletionTs", function(e) {
		return function() {
			return e.messages.orderBy("messageDeleteTs").first().then(function(e) {
				return e == null ? void 0 : e.messageDeleteTs;
			});
		};
	});
	l.getNextDeletionTs = e;
}), 98);
