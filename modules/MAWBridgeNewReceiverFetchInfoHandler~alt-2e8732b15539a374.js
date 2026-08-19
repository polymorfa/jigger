__d("MAWBridgeNewReceiverFetchInfoHandler", [
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSMediaUrlUtils",
	"MAWBridgeSendAndReceive",
	"MAWImageUtils",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MessagingAttachmentType",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["xmaDataclass"], s, u;
	async function c(t) {
		var n = await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getReceiverFetchInfo", {
			receiverFetchId: t.receiverFetchId,
			receiverFetchType: "sticker"
		}), r = n != null ? n : {}, a = r.xmaDataclass, i = babelHelpers.objectWithoutPropertiesLoose(r, e);
		return babelHelpers.extends({}, t, i);
	}
	async function d(e, t, n) {
		var r = await c(t), a = r.msgId, i = r.receiverFetchId, l = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.attachments).getKeyRange(n, a)), s = p(r, n, l);
		await e.attachments.upsert([
			n,
			a,
			i
		], s);
	}
	function m(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.threadJid, "BridgeNewReceiverFetchInfoHandler", function(e, n) {
			return d(e, t, n);
		});
	}
	function p(e, t, n) {
		var a = e.accessibilitySummaryText, i = e.mimetype, l = e.msgId, c = e.previewHeight, d = e.previewUrl, m = e.previewUrlExpirationTimestampMs, p = e.previewWidth, f = e.ravenSettings, g = e.receiverFetchId, h = e.sortOrderMs, y = e.transportKey, C = e.type, b = _(C), v = o("MAWImageUtils").boundHeightWidth(c, p, o("MAWImageUtils").STICKER_THUMBNAIL_MAX_SIZE), S = v.height, R = v.width, L = d != null ? d : n == null ? void 0 : n.previewUrl, E = m != null ? (s || (s = o("I64"))).of_float(m) : n == null ? void 0 : n.previewUrlExpirationTimestampMs, k = o("LSMediaUrlUtils").hasValidReceiverFetchPreviewUrl(L, E);
		return {
			accessibilitySummaryText: a,
			attachmentFbid: g,
			attachmentIndex: (s || (s = o("I64"))).zero,
			attachmentType: b,
			authorityLevel: (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE),
			ephemeralMediaState: (f == null ? void 0 : f.ephemeralMediaState) != null ? (s || (s = o("I64"))).of_int32(f.ephemeralMediaState) : void 0,
			ephemeralMediaViewMode: (f == null ? void 0 : f.ephemeralMediaViewMode) != null ? (s || (s = o("I64"))).of_int32(f.ephemeralMediaViewMode) : void 0,
			hasMedia: k,
			hasXma: !1,
			isSharable: !1,
			messageId: l,
			previewHeight: s.of_int32(S),
			previewUrl: d != null ? d : n == null ? void 0 : n.previewUrl,
			previewUrlExpirationTimestampMs: m != null ? (s || (s = o("I64"))).of_float(m) : n == null ? void 0 : n.previewUrlExpirationTimestampMs,
			previewUrlMimeType: i,
			previewWidth: s.of_int32(R),
			receiverFetchId: g,
			threadKey: t,
			timestampMs: s.of_float(h),
			transportKey: y != null ? y : "WhatsApp"
		};
	}
	function _(e) {
		switch (e) {
			case "sticker": return (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER);
			default: throw r("FBLogger")("messenger_web_media").mustfixThrow("Unsupported type for MAWBridgeNewReceiverFetchInfoHandler");
		}
	}
	l.call = m, l.composeAttachment = p;
}), 98);
