__d("MAWAsyncEBIssueBulkMessagesPointQuery", [
	"MpsMessageToSearchBridge",
	"MpsOverBridge",
	"MpsTypes"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return o("MpsOverBridge").mps().batchLoadMessage({
			debug: { purpose: "MAWAsyncEBIssueBulkMessagesPointQuery" },
			messageIds: t.map(function(e) {
				var t = e.id;
				return o("MpsTypes").toMessageId(t);
			}),
			threadId: o("MpsTypes").toThreadId(e)
		}).then(function(e) {
			var t, n;
			return (t = (n = e.value) == null ? void 0 : n.filter(Boolean).map(o("MpsMessageToSearchBridge").messageToSearchBridge).filter(Boolean)) != null ? t : [];
		});
	}
	l.issueQueryAsPromiseForSearchResult = e;
}), 98);
