__d("MAWGetNextDeleteDFMContentTs", [
	"MAWTransactionMode",
	"MAWTransactor",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWTransactor").makeMsgrTransactor({ unrenderedMessages: o("MAWTransactionMode").READONLY }, "getNextDeleteDFMContentTs", function(e) {
		return function() {
			var t = o("WATimeUtils").unixTime();
			return e.unrenderedMessages.orderBy("messageDeleteForMeTs").filter(function(e) {
				return (e == null ? void 0 : e.messageDeleteForMeTs) != null ? e.messageDeleteForMeTs >= t : !1;
			}).first().then(function(e) {
				return e == null ? void 0 : e.messageDeleteForMeTs;
			});
		};
	});
	l.getNextDeleteDFMContentTs = e;
}), 98);
