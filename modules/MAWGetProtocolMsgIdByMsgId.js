__d("MAWGetProtocolMsgIdByMsgId", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"getProtocolMsgIdByMsgIdCommon"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		messages: (e = o("MAWTransactionMode")).READONLY,
		reactions: e.READONLY,
		threads: e.READONLY,
		unrenderedMessages: e.READONLY
	}, "getProtocolMsgByMsgId", function(e) {
		return (function(t) {
			return o("getProtocolMsgIdByMsgIdCommon").getProtocolMsgIdByMsgIdCommon(e, t);
		});
	});
	l.getProtocolMsgIdByMsgId = s;
}), 98);
