__d("useMAWBulkMediaDownloadManualRetry", [
	"MAWClientMediaStatusUtils",
	"MAWDownloadMediaInWorkerDeferred",
	"MAWMediaSetRetryingAndIncreaseCount",
	"MAWRetryReceiverFetchSticker",
	"isReceiverFetchSticker",
	"react",
	"react-compiler-runtime",
	"useAsyncReStore",
	"useClientMediaStatus"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useMemo;
	function d(e, t) {
		var n = o("react-compiler-runtime").c(10), a = r("useAsyncReStore")(), i;
		if (n[0] !== e || n[1] !== t) {
			var l;
			n[3] !== t ? (l = function(n) {
				var e = n.attachment, o = n.mediaStatus, a = r("isReceiverFetchSticker")(e);
				return {
					attachment: e,
					mediaRenderQpl: t,
					mediaStatus: o,
					statusKey: a ? e.messageId : e.attachmentFbid
				};
			}, n[3] = t, n[4] = l) : l = n[4], i = e.map(l), n[0] = e, n[1] = t, n[2] = i;
		} else i = n[2];
		var s = i, u = r("useClientMediaStatus")(s), c;
		return n[5] !== s || n[6] !== u || n[7] !== a || n[8] !== t ? (c = function() {
			s.forEach(function(e) {
				var n, i = e.attachment, l = e.mediaStatus, s = e.statusKey, c = r("isReceiverFetchSticker")(i), d = o("MAWClientMediaStatusUtils").getStatusDataFromLsdb({
					clientMediaStatus: u,
					preloadedMediaStatus: l,
					statusKey: s
				}), m = d.retryCount, p = d.statusData;
				if (t == null || t.start({
					isManualRetry: !0,
					manualRetryCount: m,
					previousManualRetryErrorDetails: (n = p == null ? void 0 : p.mainMediaStatusDetails) != null ? n : "no-previous-status"
				}), c) {
					o("MAWRetryReceiverFetchSticker").retryReceiverFetchSticker(a, i, t);
					return;
				}
				o("MAWMediaSetRetryingAndIncreaseCount").call(a, s), o("MAWDownloadMediaInWorkerDeferred").downloadMediaInWorker({
					attachment: i,
					dbPromise: a,
					mediaRenderQpl: t,
					triggerUIView: "manual-retry-thread"
				});
			});
		}, n[5] = s, n[6] = u, n[7] = a, n[8] = t, n[9] = c) : c = n[9], c;
	}
	l.default = d;
}), 98);
