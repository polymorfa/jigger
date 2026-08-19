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
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["xmaDataclass"], s, u;
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = yield o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getReceiverFetchInfo", {
				receiverFetchId: t.receiverFetchId,
				receiverFetchType: "sticker"
			}), r = n != null ? n : {}, a = r.xmaDataclass, i = babelHelpers.objectWithoutPropertiesLoose(r, e);
			return babelHelpers.extends({}, t, i);
		}), d.apply(this, arguments);
	}
	function m(e, t, n) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = yield c(t), a = r.msgId, i = r.receiverFetchId, l = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.attachments).getKeyRange(n, a)), s = f(r, n, l);
			yield e.attachments.upsert([
				n,
				a,
				i
			], s);
		}), p.apply(this, arguments);
	}
	function _(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.threadJid, "BridgeNewReceiverFetchInfoHandler", function(e, n) {
			return m(e, t, n);
		});
	}
	function f(e, t, n) {
		var a = e.accessibilitySummaryText, i = e.mimetype, l = e.msgId, c = e.previewHeight, d = e.previewUrl, m = e.previewUrlExpirationTimestampMs, p = e.previewWidth, _ = e.ravenSettings, f = e.receiverFetchId, h = e.sortOrderMs, y = e.transportKey, C = e.type, b = g(C), v = o("MAWImageUtils").boundHeightWidth(c, p, o("MAWImageUtils").STICKER_THUMBNAIL_MAX_SIZE), S = v.height, R = v.width, L = d != null ? d : n == null ? void 0 : n.previewUrl, E = m != null ? (s || (s = o("I64"))).of_float(m) : n == null ? void 0 : n.previewUrlExpirationTimestampMs, k = o("LSMediaUrlUtils").hasValidReceiverFetchPreviewUrl(L, E);
		return {
			accessibilitySummaryText: a,
			attachmentFbid: f,
			attachmentIndex: (s || (s = o("I64"))).zero,
			attachmentType: b,
			authorityLevel: (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE),
			ephemeralMediaState: (_ == null ? void 0 : _.ephemeralMediaState) != null ? (s || (s = o("I64"))).of_int32(_.ephemeralMediaState) : void 0,
			ephemeralMediaViewMode: (_ == null ? void 0 : _.ephemeralMediaViewMode) != null ? (s || (s = o("I64"))).of_int32(_.ephemeralMediaViewMode) : void 0,
			hasMedia: k,
			hasXma: !1,
			isSharable: !1,
			messageId: l,
			previewHeight: s.of_int32(S),
			previewUrl: d != null ? d : n == null ? void 0 : n.previewUrl,
			previewUrlExpirationTimestampMs: m != null ? (s || (s = o("I64"))).of_float(m) : n == null ? void 0 : n.previewUrlExpirationTimestampMs,
			previewUrlMimeType: i,
			previewWidth: s.of_int32(R),
			receiverFetchId: f,
			threadKey: t,
			timestampMs: s.of_float(h),
			transportKey: y != null ? y : "WhatsApp"
		};
	}
	function g(e) {
		switch (e) {
			case "sticker": return (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER);
			default: throw r("FBLogger")("messenger_web_media").mustfixThrow("Unsupported type for MAWBridgeNewReceiverFetchInfoHandler");
		}
	}
	l.call = _, l.composeAttachment = f;
}), 98);
