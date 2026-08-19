__d("MAWGetReceiverFetchInfoApi", [
	"FBLogger",
	"MAWBackendReceiverFetchPrefetchExperiment",
	"MAWDbReceiverFetchTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MpsReceiverFetchCache",
	"WATimeUtils",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ receiverFetchInfo: o("MAWTransactionMode").READONLY }, "MAWGetReceiverFetchInfo", function(e) {
		return function(t) {
			return o("MAWDbReceiverFetchTxns").maybeGetReceiverFetchInfoFromReceiverFetchId(e, t.receiverFetchId).then(function(e) {
				var t;
				if (!(e == null || e.previewUrl == null || e.previewUrlExpirationTimestampMs == null)) return {
					accessibilitySummaryText: (t = e.accessibilitySummaryText) != null ? t : void 0,
					previewUrl: e.previewUrl,
					previewUrlExpirationTimestampMs: o("WATimeUtils").castLongIntToMillisTime(e.previewUrlExpirationTimestampMs)
				};
			});
		};
	}), s = async function(n) {
		if (!o("MAWBackendReceiverFetchPrefetchExperiment").isMawBackendReceiverFetchPrefetchEnabled()) return n.receiverFetchType === "sticker" ? e(n) : void 0;
		try {
			if (n.receiverFetchType === "xma") {
				var t = await o("MpsReceiverFetchCache").getOrFetchXMAReceiverFetchInfo(n.receiverFetchId, n.qplInstanceKey);
				return t != null ? { xmaDataclass: t.xmaDataclass } : void 0;
			}
			var a = await o("MpsReceiverFetchCache").getOrFetchStickerReceiverFetchInfo(n.receiverFetchId);
			if (a != null) return a;
		} catch (e) {
			r("FBLogger")("maw_receiver_fetch").catching(r("getErrorSafe")(e)).mustfix("MPS receiver fetch bridge failed for receiverFetchType: %s", n.receiverFetchType);
		}
	};
	l.getReceiverFetchInfo = s;
}), 98);
