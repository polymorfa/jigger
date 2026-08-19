__d("MAWWriteReceiverFetchTxns", [
	"FBLogger",
	"MAWBridgeReceiverFetchInfo",
	"MAWDbReceiverFetchTxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"WALogger",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n, a, i, l) {
		return o("MAWDbReceiverFetchTxns").maybeGetReceiverFetchInfoFromReceiverFetchId(e, l.receiverFetchId).then(function(s) {
			if (s == null) return e.receiverFetchInfo.add(l).then(function() {
				o("MAWIndexedDb").afterTransaction({
					tag: "NewReceiverFetchInfo",
					value: o("MAWBridgeReceiverFetchInfo").createBridgeReceiverFetchInfoPayloadFromUnstoredInfo(t, n, a, i, l)
				});
			}).catch(function(e) {
				r("FBLogger")("messenger_web_media").mustfix("Failed to add receiver fetch info to db, error: %s", e.message);
			});
			var u = babelHelpers.extends({}, s, l);
			return e.receiverFetchInfo.update(l.receiverFetchId, u).then(function() {
				o("MAWIndexedDb").afterTransaction({
					tag: "NewReceiverFetchInfo",
					value: o("MAWBridgeReceiverFetchInfo").createBridgeReceiverFetchInfoPayloadFromDbInfo(t, n, a, i, u)
				});
			}).catch(function(e) {
				r("FBLogger")("messenger_web_media").mustfix("Failed to update receiver fetch info in db, error: %s", e.message);
			});
		});
	}
	function u(t, n, a, i, l, s, u, c, d) {
		return o("MAWDbReceiverFetchTxns").maybeGetReceiverFetchInfoFromReceiverFetchId(t, i).then(function(m) {
			var p = m;
			if (p == null) {
				if (d == null) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Receiver fetch info not found for receiver fetch id: ", ""])), i), o("MAWDexieTable").dexieResolve();
				p = {
					mimetype: s,
					previewHeight: u,
					previewWidth: c,
					receiverFetchId: i,
					type: d
				};
			}
			var _ = babelHelpers.extends({}, p, {
				accessibilitySummaryText: l != null ? l : void 0,
				previewUrl: n,
				previewUrlExpirationTimestampMs: a
			});
			return t.receiverFetchInfo.put(_).then(r("emptyFunction")).catch(function(e) {
				r("FBLogger")("messenger_web_media").mustfix("Failed to update receiver fetch info in db, error: %s", e.message);
			});
		});
	}
	l.handleUnstoredReceiverFetchInfo = s, l.updateReceiverFetchInfoWithPreviewUrl = u;
}), 98);
