__d("MAWGetMsgForProtocolMsgIdTxn", [
	"MAWDbMsgTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({
		messages: o("MAWTransactionMode").READONLY,
		threads: o("MAWTransactionMode").READONLY
	}, "getMsgForProtocolMsgIdTxn", function(e) {
		return function(t) {
			return o("MAWDbMsgTxns").maybeGetMsgByProtocolMsgId(e, t).then(function(e) {
				return e != null ? o("WAResultOrError").makeResult(e) : o("WAResultOrError").makeError("message-not-found");
			});
		};
	});
	l.getMsgForProtocolMsgIdTxn = e;
}), 98);
