__d("MAWGetNextExpirationTsApi", [
	"MAWTransactionMode",
	"MAWTransactor",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWTransactor").makeMsgrTransactor({ messages: o("MAWTransactionMode").READONLY }, "getNextExpirationTs", function(e) {
		return function() {
			var t = o("WATimeUtils").unixTime();
			return e.messages.where("messageExpirationTs").above(t).first().then(function(e) {
				return e == null ? void 0 : e.messageExpirationTs;
			});
		};
	});
	l.getNextExpirationTs = e;
}), 98);
