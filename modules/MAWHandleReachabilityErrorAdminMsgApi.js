__d("MAWHandleReachabilityErrorAdminMsgApi", [
	"MAWAdminMsgTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WALogger",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (s = o("MAWTransactionMode")).READONLY,
		ftsBackloggedMessages: s.READWRITE,
		groupInfo: s.READONLY,
		media: s.READONLY,
		messages: s.READWRITE,
		threads: s.READWRITE
	}, "handleReachabilityErrorAdminMsg", function(t) {
		return (function(n) {
			return o("WALogger").DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleReachabilityErrorAdminMsg: chat ", ""])), n), o("MAWAdminMsgTxns").writeReachabilityErrorAdminMsg(t, n).then(r("emptyFunction"));
		});
	});
	l.handleReachabilityErrorAdminMsg = u;
}), 98);
