__d("MAWIssueReceiverFetchTask", [
	"LSDispatchMediaReceiverFetchForWebStoredProcedure",
	"LSFactory",
	"MAWBridgeUpdateClientMediaStatusHandler",
	"MAWMediaDownloadStatus",
	"WAHashUtils",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, a) {
		return r("promiseDone")(o("MAWBridgeUpdateClientMediaStatusHandler").call(e, {
			details: "issue_receiver_fetch_task",
			key: o("WAHashUtils").stringToPlaintextHash(t),
			status: r("MAWMediaDownloadStatus").DOWNLOADING,
			type: "main"
		})), e.runInTransaction(function(e) {
			return r("LSDispatchMediaReceiverFetchForWebStoredProcedure")(r("LSFactory")(e), {
				messageId: t,
				receiverFetchId: n,
				shouldFetchAccessibilitySummaryText: !0,
				threadKey: a
			});
		}, "readwrite", void 0, void 0, i.id + ":38");
	}
	l.issueReceiverFetchTask = e;
}), 98);
