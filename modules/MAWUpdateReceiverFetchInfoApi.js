__d("MAWUpdateReceiverFetchInfoApi", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MAWWriteReceiverFetchTxns"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ receiverFetchInfo: o("MAWTransactionMode").READWRITE }, "MAWUpdateReceiverFetchInfo", function(e) {
		return (function(t) {
			var n = t.accessibilitySummaryText, r = t.mimetype, a = t.previewHeight, i = t.previewUrl, l = t.previewUrlExpirationTimestampMs, s = t.previewWidth, u = t.receiverFetchId, c = t.type;
			return o("MAWWriteReceiverFetchTxns").updateReceiverFetchInfoWithPreviewUrl(e, i, l, u, n, r, a, s, c);
		});
	});
	l.updateReceiverFetchInfo = e;
}), 98);
