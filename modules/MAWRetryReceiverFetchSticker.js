__d("MAWRetryReceiverFetchSticker", [
	"FBLogger",
	"MAWBridgeUpdateClientMediaStatusHandler",
	"MAWMediaDownloadStatus",
	"MAWMediaIncreaseCount",
	"WAHashUtils",
	"fetchGraphQLMediaReceiverFetchData",
	"nullthrows",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		if (n == null || n.addPoint("receiver_fetch_retry_attempt"), t == null) {
			n == null || n.endFailAfterDelay("receiver_fetch_retry_no_attachment");
			return;
		}
		var a = r("nullthrows")(t.receiverFetchId), i = t.messageId, l = t.threadKey, s = o("WAHashUtils").stringToPlaintextHash(i);
		o("MAWMediaIncreaseCount").call(e, s.toString()), r("promiseDone")(e, function(e) {
			return o("fetchGraphQLMediaReceiverFetchData").fetchGraphQLMediaReceiverFetchData(e, i, a, l);
		}, function(t) {
			n == null || n.endFailAfterDelay("receiver_fetch_task_fail"), r("promiseDone")(e, function(e) {
				return o("MAWBridgeUpdateClientMediaStatusHandler").call(e, {
					details: "receiver_fetch_task_fail_" + t,
					key: s,
					status: r("MAWMediaDownloadStatus").MANUAL_RETRYABLE_FAILURE,
					type: "main"
				});
			}), r("FBLogger")("messenger_web_media").catching(t).warn("Failed to issue media receiver fetch task for manual retry");
		});
	}
	l.retryReceiverFetchSticker = e;
}), 98);
