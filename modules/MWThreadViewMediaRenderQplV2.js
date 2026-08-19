__d("MWThreadViewMediaRenderQplV2", [
	"CurrentAppID",
	"FBLogger",
	"I64",
	"InteractionTracing",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSMediaUrlUtils",
	"LSReplyMessageAttachmentType",
	"MWMediaRenderQplUtils",
	"MWPActor.react",
	"MessagingAttachmentType",
	"WAHashUtils",
	"WAMediaQplHelper",
	"gkx",
	"react",
	"useLSMessagingInitiatingSource",
	"usePrevious"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = (e || (e = o("react"))).useMemo;
	function d(e, t, n) {
		return p(e, t, n, !1);
	}
	function m(e, t) {
		return p(e, t, null, !0);
	}
	function p(e, t, n, a) {
		var i = r("gkx")("12935"), l = a ? h(e) : g(n), d = (s || (s = o("I64"))).le(e.authorityLevel, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC)), m = r("usePrevious")(d) || d, p = i && l && !m, _ = o("MWPActor.react").useActor(), f = s.equal(e.senderId, _), C = r("useLSMessagingInitiatingSource")(), b = o("CurrentAppID").getAppID(), v = c(function() {
			return babelHelpers.extends({}, o("MWMediaRenderQplUtils").getCommonMessageAnnotations(e, b, f, C, t), {
				content_type: a && e.replyAttachmentType != null ? o("MWMediaRenderQplUtils").deriveMessageContentTypeStringFromAttachmentTypeLessAccurate(e.replyAttachmentType) : o("MWMediaRenderQplUtils").getMessageContentTypeString(e),
				has_db_reply_attachment: e.replyAttachmentId != null,
				is_optimistic: d,
				is_reply_to_media: a
			});
		}, [
			b,
			C,
			d,
			f,
			a,
			e,
			t
		]), S = c(function() {
			if (!p) return null;
			var t = y(e.offlineThreadingId, a), i = r("InteractionTracing").checkAndMarkRevisit(t);
			return i || r("InteractionTracing").trace(o("MWMediaRenderQplUtils").MSGR_WEB_MEDIA_RENDER_EVENT_V2, function(e) {
				var t;
				o("MWMediaRenderQplUtils").addAnnotationsToTrace(e.getTraceId(), babelHelpers.extends({}, v, { attachment_fbid: (t = n == null ? void 0 : n.attachmentFbid) != null ? t : void 0 }));
			}, "fast", "INTERACTION", void 0, t), t;
		}, [e.offlineThreadingId]);
		return { interactionId: S };
	}
	function _(e, t, n) {
		var a, i, l, c, d;
		if (!(e == null || t == null)) {
			var m = t.receiverFetchId, p;
			if (m != null) try {
				var _ = JSON.parse(m), g = _ == null ? void 0 : _.xma_content_type;
				g != null && (p = o("MWMediaRenderQplUtils").getXmaContentTypeStringFromEnum((u || (u = o("LSIntEnum"))).ofNumber(g)));
			} catch (e) {
				r("FBLogger")("messenger_web_sharing").mustfix("Failed to parse contentRef as XmsgMsgrXmaContentRefDataclass");
			}
			var h = t.filesize != null ? (s || (s = o("I64"))).to_float(t.filesize) : void 0, y = t.previewWidth != null ? (s || (s = o("I64"))).to_float(t.previewWidth) : void 0, C = t.previewHeight != null ? (s || (s = o("I64"))).to_float(t.previewHeight) : void 0;
			o("MWMediaRenderQplUtils").addAnnotationsToTrace(e, {
				attachment_logging_type: (a = t.attachmentLoggingType) != null ? a : void 0,
				attachment_transport_key: (i = t.transportKey) != null ? i : void 0,
				attachment_type: o("MWMediaRenderQplUtils").getAttachmentTypeString(t),
				audio_duration_bucket: t.playableDurationMs != null ? o("MWMediaRenderQplUtils").convertDurationToStringBucket((s || (s = o("I64"))).to_float(t.playableDurationMs) / 1e3) : void 0,
				file_size: h,
				file_size_bucket: h != null ? o("WAMediaQplHelper").convertIntegerSizeToStringBucket(h) : void 0,
				has_attachment_receiver_fetch_id: t.receiverFetchId != null,
				has_db_attachment: !0,
				has_db_media: t.hasMedia === !0,
				has_db_playable_url: !!t.playableUrl,
				has_db_preview_url: !!t.previewUrl,
				has_db_preview_url_large: !!t.previewUrlLarge,
				has_db_xma: t.hasXma === !0,
				has_db_xma_favicon: t.hasXmaFavicon === !0,
				has_db_xma_header_image: t.hasXmaHeaderImage === !0,
				has_db_xma_preview: t.hasXmaPreview === !0,
				is_db_playable_url_expired: t.playableUrlExpirationTimestampMs != null ? o("LSMediaUrlUtils").isTimestampExpired(t.playableUrlExpirationTimestampMs) : void 0,
				is_db_preview_url_expired: t.previewUrlExpirationTimestampMs != null ? o("LSMediaUrlUtils").isTimestampExpired(t.previewUrlExpirationTimestampMs) : void 0,
				is_xma_previews_disabled: n,
				playable_url_mime_type: (l = t.playableUrlMimeType) != null ? l : void 0,
				preview_pixel_count: y != null && C != null ? y * C : void 0,
				preview_url_mime_type: (c = t.previewUrlMimeType) != null ? c : void 0,
				sanitized_plaintext_hash: f(t),
				xma_content_type: p != null ? p : t.xmaContentType != null ? o("MWMediaRenderQplUtils").getXmaContentTypeStringFromEnum(t.xmaContentType) : void 0,
				xma_default_cta_type: (d = t.defaultCtaType) != null ? d : void 0,
				xma_layout_type: o("MWMediaRenderQplUtils").getMessageXmaLayoutTypeStringFromEnum(t.xmaLayoutType)
			});
		}
	}
	function f(e) {
		if (!(!r("gkx")("23916") || e == null || isFinite(e.attachmentFbid))) return o("WAHashUtils").sanitisePlaintextHash(o("WAHashUtils").stringToPlaintextHash(e.attachmentFbid));
	}
	function g(e) {
		return e != null && (s || (s = o("I64"))).equal(e.attachmentType, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE));
	}
	function h(e) {
		return e.replyAttachmentType != null && (s || (s = o("I64"))).equal(e.replyAttachmentType, (u || (u = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").PHOTO));
	}
	function y(e, t) {
		var n = t ? "media_reply_render" : "media_render";
		return n + "_" + e;
	}
	l.useMediaRenderQplV2 = d, l.useMediaRenderQplV2ForReply = m, l.addAttachmentAnnotations = _;
}), 98);
