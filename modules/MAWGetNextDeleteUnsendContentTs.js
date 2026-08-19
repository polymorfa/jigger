__d("MAWGetNextDeleteUnsendContentTs", [
	"MAWTransactionMode",
	"MAWTransactor",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWTransactor").makeMsgrTransactor({ messages: o("MAWTransactionMode").READONLY }, "getNextDeleteUnsendContentTs", function(e) {
		return function() {
			var t = o("WATimeUtils").unixTime();
			return e.messages.where("unsendMsgContentDeleteTs").aboveOrEqual(t).first().then(function(e) {
				return e == null ? void 0 : e.unsendMsgContentDeleteTs;
			});
		};
	});
	l.getNextDeleteUnsendContentTs = e;
}), 98);
