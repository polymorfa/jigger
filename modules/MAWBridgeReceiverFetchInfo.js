__d("MAWBridgeReceiverFetchInfo", ["WALogger", "WATimeUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n, r, o) {
		var a = o.accessibilitySummaryText, i = o.mimetype, l = o.previewHeight, s = o.previewUrl, u = o.previewUrlExpirationTimestampMs, m = o.previewWidth, p = o.receiverFetchId, _ = o.type;
		return {
			accessibilitySummaryText: a,
			mimetype: i,
			msgId: t,
			previewHeight: l,
			previewUrl: s,
			previewUrlExpirationTimestampMs: d(u),
			previewWidth: m,
			receiverFetchId: p,
			sortOrderMs: c(n, r),
			threadJid: e,
			type: _
		};
	}
	function u(e, t, n, r, o) {
		var a = o.mimetype, i = o.previewHeight, l = o.previewWidth, s = o.receiverFetchId, u = o.type;
		return {
			mimetype: a,
			msgId: t,
			previewHeight: i,
			previewWidth: l,
			receiverFetchId: s,
			sortOrderMs: c(n, r),
			threadJid: e,
			type: u
		};
	}
	function c(e, t) {
		return o("WATimeUtils").castToMillisTime(e != null ? e : t * 1e3);
	}
	function d(t) {
		if (t != null) try {
			return o("WATimeUtils").castLongIntToMillisTime(t);
		} catch (t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to cast previewUrlExpirationTimestampMs to millis time: ", ""])), t);
			return;
		}
	}
	l.createBridgeReceiverFetchInfoPayloadFromDbInfo = s, l.createBridgeReceiverFetchInfoPayloadFromUnstoredInfo = u;
}), 98);
