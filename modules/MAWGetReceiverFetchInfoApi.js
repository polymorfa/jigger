__d("MAWGetReceiverFetchInfoApi", [
	"FBLogger",
	"MAWBackendReceiverFetchPrefetchExperiment",
	"MAWDbReceiverFetchTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MpsReceiverFetchCache",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
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
	}), s = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			if (!o("MAWBackendReceiverFetchPrefetchExperiment").isMawBackendReceiverFetchPrefetchEnabled()) return t.receiverFetchType === "sticker" ? e(t) : void 0;
			try {
				if (t.receiverFetchType === "xma") {
					var n = yield o("MpsReceiverFetchCache").getOrFetchXMAReceiverFetchInfo(t.receiverFetchId, t.qplInstanceKey);
					return n != null ? { xmaDataclass: n.xmaDataclass } : void 0;
				}
				var a = yield o("MpsReceiverFetchCache").getOrFetchStickerReceiverFetchInfo(t.receiverFetchId);
				if (a != null) return a;
			} catch (e) {
				r("FBLogger")("maw_receiver_fetch").catching(r("getErrorSafe")(e)).mustfix("MPS receiver fetch bridge failed for receiverFetchType: %s", t.receiverFetchType);
			}
		});
		return function(n) {
			return t.apply(this, arguments);
		};
	})();
	l.getReceiverFetchInfo = s;
}), 98);
