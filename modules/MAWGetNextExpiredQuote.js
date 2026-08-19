__d("MAWGetNextExpiredQuote", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ messages: o("MAWTransactionMode").READONLY }, "getNextExpiredQuoteTs", function(e) {
		return function() {
			var t = o("WATimeUtils").unixTime();
			return e.messages.orderBy("quoteExpirationTs").filter(function(e) {
				return e.quoteExpirationTs != null && e.quoteExpirationTs >= t;
			}).first().then(function(e) {
				return e == null ? void 0 : e.quoteExpirationTs;
			});
		};
	});
	l.getNextExpiredQuoteTs = e;
}), 98);
