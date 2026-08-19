__d("MAWSecureAttachment.react", [
	"CometHeroHoldTrigger.react",
	"HelpdeskGeminiNullthrows",
	"I64",
	"InteractionTracingMetrics",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSMediaUrlAttachment",
	"LSXmaContentType",
	"MAWAttachmentBlob.react",
	"MAWAttachmentSizeUtils",
	"MAWGetAttachmentThumbnailBlob",
	"MAWIsFBXMA",
	"MAWIsReceiverFetchXmaInLoadingState",
	"MAWLocalizationType",
	"MAWSecureAudioAttachmentContent.react",
	"MAWSecureFileAttachmentContent.react",
	"MAWSecureGroupedImageAttachment.react",
	"MAWSecureImageAttachmentContent.react",
	"MAWSecureStickerAttachmentContent.react",
	"MAWSecureVideoAttachmentContent.react",
	"MAWSecureViewOnceAttachmentContent.react",
	"MAWSecureXMAAttachmentContent.react",
	"MWChatBubbleEmphasisRing.react",
	"MWChatTypingIndicator.react",
	"MWLSThread",
	"MWPAttachmentDataContext",
	"MWPMessageListAttachmentContainer.react",
	"MWThreadViewMediaRenderQplV2",
	"MWV2AttachmentLoadingPlaceholder.react",
	"MWV2ChatBubbleContainer.react",
	"MWV2TombstonedMessage.react",
	"MWXLink.react",
	"MWXMessageBubble.react",
	"MWXText.react",
	"MessagingAttachmentType",
	"getMAWLocalizedFallbackMsgSnippet",
	"gkx",
	"hero-tracing-placeholder",
	"isReceiverFetchSticker",
	"react",
	"react-compiler-runtime",
	"useGetMediaGroupInformation",
	"useHandleXmaEventsLogging",
	"useIssueMediaReceiverFetchTask",
	"useIssueXMAReceiverFetchTask",
	"useXMAPreviewsDisabledSetting"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = e || (e = o("react")), d = e, m = d.useContext, p = d.useEffect, _ = d.useMemo, f = { unsetWidth: {
		width: "x4pn7vq",
		$$css: !0
	} };
	function g(e) {
		var t = e.dbAttachment, n = e.connectBottom, a = e.connectTop, i = e.hasText, l = e.mediaRenderQpl, d = e.message, _ = e.outgoing, f = t.attachmentFbid, g = t.attachmentType, h = t.authorityLevel, y = m(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext);
		p(function() {
			var e, t = r("gkx")("12935") ? (e = y.current) == null ? void 0 : e.interactionUUID : null;
			l == null || l.addPoint("render-secure-attachment-content"), t != null && r("InteractionTracingMetrics").addMarkerPoint(t, "render-secure-attachment-content", "AppTiming"), f === (s || (s = o("I64"))).to_string((s || (s = o("I64"))).max_int) && (s || (s = o("I64"))).equal(h, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC)) && (l == null || l.addPoint("loading_eb_frontloading"), t != null && r("InteractionTracingMetrics").addMarkerPoint(t, "loading_eb_frontloading", "AppTiming"));
		}, [
			f,
			h,
			t,
			y,
			l
		]);
		var C = r("useGetMediaGroupInformation")(d, !0, l), b = o("MAWAttachmentSizeUtils").getSizeFromAttachment(t), v = b.height, S = b.width;
		switch (!0) {
			case f === (s || (s = o("I64"))).to_string((s || (s = o("I64"))).max_int) && (s || (s = o("I64"))).equal(h, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC)): return c.jsxs(c.Fragment, { children: [c.jsx(r("MWV2AttachmentLoadingPlaceholder.react"), {
				connectBottom: n,
				connectTop: a,
				descriptionForLogging: "MAWSecureAttachment.react.EBFrontloading",
				hasAppAttribution: t.attributionAppName != null,
				height: v,
				mediaRenderQpl: l,
				outgoing: _,
				width: S
			}), c.jsx(r("CometHeroHoldTrigger.react"), {
				description: "MAWSecureAttachment.react.EBFrontloading",
				hold: !0
			})] });
			case (s || (s = o("I64"))).equal(g, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE)): return r("MAWSecureGroupedImageAttachment.react") != null && C != null ? c.jsx(r("MAWSecureGroupedImageAttachment.react"), {
				connectBottom: n,
				connectTop: a,
				mediaGroupInfo: C,
				mediaRenderQpl: l,
				outgoing: _
			}) : c.jsx(r("MAWSecureImageAttachmentContent.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: t,
				getPreviewUrl: o("MAWGetAttachmentThumbnailBlob").getThumbnailBlob_CausesSuspense,
				mediaRenderQpl: l,
				message: d,
				outgoing: _,
				previewHeight: v,
				previewWidth: S
			});
			case (s || (s = o("I64"))).equal(g, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)): return c.jsx(r("MAWSecureVideoAttachmentContent.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: t,
				getPlayableUrl: o("MAWAttachmentBlob.react").getAttachmentBlob_CausesSuspense,
				getPreviewUrl: o("MAWGetAttachmentThumbnailBlob").getThumbnailBlob_CausesSuspense,
				mediaRenderQpl: l,
				message: d,
				outgoing: _,
				previewHeight: v,
				previewWidth: S
			});
			case (s || (s = o("I64"))).equal(g, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO)): return c.jsx(r("MAWSecureAudioAttachmentContent.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: t,
				getPlayableUrl: o("MAWAttachmentBlob.react").getAttachmentBlob_CausesSuspense,
				mediaRenderQpl: l,
				message: d,
				outgoing: _
			});
			case (s || (s = o("I64"))).equal(g, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE)): return c.jsx(r("MAWSecureImageAttachmentContent.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: t,
				getPreviewUrl: o("MAWAttachmentBlob.react").getAttachmentBlob_CausesSuspense,
				mediaRenderQpl: l,
				message: d,
				outgoing: _,
				previewHeight: v,
				previewWidth: S
			});
			case (s || (s = o("I64"))).equal(g, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER)): return t.receiverFetchId != null ? c.jsx(r("MAWSecureStickerAttachmentContent.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: t,
				getPreviewUrl: function(t) {
					return o("LSMediaUrlAttachment").previewUrl(t);
				},
				mediaRenderQpl: l,
				outgoing: _,
				previewHeight: v,
				previewWidth: S
			}) : c.jsx(r("MAWSecureStickerAttachmentContent.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: t,
				getPreviewUrl: o("MAWAttachmentBlob.react").getAttachmentBlob_CausesSuspense,
				mediaRenderQpl: l,
				outgoing: _,
				previewHeight: v,
				previewWidth: S
			});
			case (s || (s = o("I64"))).equal(g, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA)): return c.jsx(r("MAWSecureXMAAttachmentContent.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: t,
				hasText: i,
				mediaRenderQpl: l,
				outgoing: _
			});
			case (s || (s = o("I64"))).equal(g, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").FILE)): return c.jsx(r("MAWSecureFileAttachmentContent.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: t,
				getFileUrl: o("MAWAttachmentBlob.react").getAttachmentBlob_CausesSuspense,
				mediaRenderQpl: l,
				outgoing: _
			});
			case (s || (s = o("I64"))).equal(g, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").EPHEMERAL_IMAGE)):
			case (s || (s = o("I64"))).equal(g, (u || (u = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").EPHEMERAL_VIDEO)): return r("MAWSecureViewOnceAttachmentContent.react") != null ? c.jsx(r("MAWSecureViewOnceAttachmentContent.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: t,
				mediaRenderQpl: l,
				outgoing: _
			}) : c.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: _,
				children: r("getMAWLocalizedFallbackMsgSnippet")(_ ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_UNRENDERABLE_MESSAGE_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_UNRENDERABLE_MESSAGE_FALLBACK)
			});
			default: return l == null || l.endFailAfterDelay("unsupported-attachment"), "Unsupported attachment type";
		}
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = o("react-compiler-runtime").c(73), n = e.connectBottom, a = e.connectTop, i = e.hasEmphasisRing, l = e.hasText, d = e.mediaRenderQpl, _ = e.message, h = e.outgoing, C = o("MWLSThread").useThread(_.threadKey, y), b = r("useXMAPreviewsDisabledSetting")(), v = o("MWPAttachmentDataContext").useMWPGetAttachments(_), S = v != null && v.length > 0 ? v[0] : null, R = _.threadKey, L;
		t[0] !== S || t[1] !== _ || t[2] !== C ? (L = {
			attachment: S,
			message: _,
			threadType: C
		}, t[0] = S, t[1] = _, t[2] = C, t[3] = L) : L = t[3];
		var E = r("useHandleXmaEventsLogging")(L), k = m(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext), I, T;
		t[4] !== S || t[5] !== k || t[6] !== d || t[7] !== b ? (I = function() {
			var e, t = r("gkx")("12935") ? (e = k.current) == null ? void 0 : e.interactionUUID : null;
			S != null && (d == null || d.addAttachmentAnnotations == null || d.addAttachmentAnnotations(S), o("MWThreadViewMediaRenderQplV2").addAttachmentAnnotations(t, S, b)), d == null || d.addPoint("render-secure-attachment", { bool: { has_attachment: S != null } }), t != null && (r("InteractionTracingMetrics").addMarkerPoint(t, "render-secure-attachment", "AppTiming"), r("InteractionTracingMetrics").addMetadata(t, "has_attachment", S != null ? 1 : 0), r("InteractionTracingMetrics").addMetadata(t, "is_receiver_fetch_sticker", S != null && r("isReceiverFetchSticker")(S) ? 1 : 0), r("InteractionTracingMetrics").addMetadata(t, "xma_previews_disabled", b ? 1 : 0));
		}, T = [
			S,
			k,
			d,
			b
		], t[4] = S, t[5] = k, t[6] = d, t[7] = b, t[8] = I, t[9] = T) : (I = t[8], T = t[9]), p(I, T), r("useIssueXMAReceiverFetchTask")(_.messageId, S, R, S == null ? void 0 : S.receiverFetchId, S == null ? void 0 : S.xmaContentType, d);
		var D;
		t[10] !== S ? (D = S ? r("isReceiverFetchSticker")(S) : !1, t[10] = S, t[11] = D) : D = t[11], r("useIssueMediaReceiverFetchTask")(D, _.messageId, R, S == null ? void 0 : S.receiverFetchId, !0, d, S == null ? void 0 : S.previewUrl, S == null ? void 0 : S.previewUrlExpirationTimestampMs, S == null ? void 0 : S.attachmentType);
		var x;
		t[12] !== n || t[13] !== a || t[14] !== i || t[15] !== l || t[16] !== _ || t[17] !== h ? (x = i === !0 ? function(e) {
			return c.jsx(r("MWChatBubbleEmphasisRing.react"), {
				connectBottom: n,
				connectTop: a,
				flattenTop: l,
				message: _,
				outgoing: h,
				precedesXMA: !1,
				children: e
			});
		} : void 0, t[12] = n, t[13] = a, t[14] = i, t[15] = l, t[16] = _, t[17] = h, t[18] = x) : x = t[18];
		var $ = x;
		if (S == null) return null;
		var P = (S == null ? void 0 : S.xmaContentType) != null && (u || (u = o("LSIntEnum"))).toNumber(S.xmaContentType) === r("LSXmaContentType").MSG_RECEIVER_FETCH_ENT_DELETED, N = (S == null ? void 0 : S.xmaContentType) != null && (u || (u = o("LSIntEnum"))).toNumber(S.xmaContentType) === r("LSXmaContentType").MSG_RECEIVER_FETCH_FALLBACK, M = b && o("MAWIsFBXMA").isFBXMA(S == null ? void 0 : S.xmaContentType);
		if (M || N || P) {
			d == null || d.addPoint("render_rf_xma_fallback"), M || P ? d == null || d.endSuccessAfterDelay() : N && (d == null || d.endFailAfterDelay("fetch_xma_data_receiver_fetch_failed"));
			var w = S == null ? void 0 : S.actionUrl, A;
			t[19] !== _ || t[20] !== w ? (A = babelHelpers.extends({}, _, { text: w }), t[19] = _, t[20] = w, t[21] = A) : A = t[21];
			var F = A, O;
			t[22] === Symbol.for("react.memo_cache_sentinel") ? (O = c.jsx("div", { className: "x1eb86dx x36qwtl xh8yej3" }), t[22] = O) : O = t[22];
			var B = h ? "white" : "primary", W;
			t[23] !== h ? (W = {
				0: { className: "x1gslohp x14z9mp x12nagc x1lziwak x1yc453h x126k92a x18lvrbx" },
				1: { className: "x1gslohp x14z9mp x12nagc x1lziwak x1yc453h x126k92a xyk4ms5" }
			}[!!h << 0], t[23] = h, t[24] = W) : W = t[24];
			var q = S == null ? void 0 : S.actionUrl, U;
			t[25] !== E ? (U = function() {
				return E();
			}, t[25] = E, t[26] = U) : U = t[26];
			var V;
			t[27] === Symbol.for("react.memo_cache_sentinel") ? (V = { textDecoration: "underline" }, t[27] = V) : V = t[27];
			var H = S == null ? void 0 : S.actionUrl, G;
			t[28] !== q || t[29] !== U || t[30] !== H ? (G = c.jsx(r("MWXLink.react"), {
				encryptedLink: !0,
				href: q,
				onClick: U,
				style: V,
				children: H
			}), t[28] = q, t[29] = U, t[30] = H, t[31] = G) : G = t[31];
			var z;
			t[32] !== W || t[33] !== G ? (z = c.jsx("div", babelHelpers.extends({}, W, { children: G })), t[32] = W, t[33] = G, t[34] = z) : z = t[34];
			var j;
			t[35] !== z || t[36] !== B ? (j = c.jsx(r("MWXText.react"), {
				color: B,
				type: "bodyLink3",
				children: z
			}), t[35] = z, t[36] = B, t[37] = j) : j = t[37];
			var K;
			return t[38] !== n || t[39] !== a || t[40] !== i || t[41] !== h || t[42] !== j || t[43] !== F ? (K = c.jsxs(c.Fragment, { children: [O, c.jsx(r("MWV2ChatBubbleContainer.react"), {
				connectBottom: n,
				connectTop: a,
				hasEmphasisRing: i,
				message: F,
				outgoing: h,
				precedesXMA: !1,
				children: j
			})] }), t[38] = n, t[39] = a, t[40] = i, t[41] = h, t[42] = j, t[43] = F, t[44] = K) : K = t[44], K;
		}
		if (o("MAWIsReceiverFetchXmaInLoadingState").isReceiverFetchXmaInLoadingState(_.displayedContentTypes, S)) {
			d == null || d.addPoint("fetch_xma_data_receiver_fetch");
			var Q;
			t[45] === Symbol.for("react.memo_cache_sentinel") ? (Q = c.jsx("div", { className: "x1eb86dx x36qwtl xh8yej3" }), t[45] = Q) : Q = t[45];
			var X = h ? "right" : "left", Y, J;
			t[46] === Symbol.for("react.memo_cache_sentinel") ? (Y = c.jsx(r("MWChatTypingIndicator.react"), {}), J = c.jsx(r("CometHeroHoldTrigger.react"), {
				description: "MAWSecureAttachment.receiver_fetch.typing_indicator",
				hold: !0
			}), t[46] = Y, t[47] = J) : (Y = t[46], J = t[47]);
			var Z;
			t[48] !== n || t[49] !== a || t[50] !== X ? (Z = c.jsxs(r("MWXMessageBubble.react"), {
				align: X,
				color: "incoming",
				connectBottom: n,
				connectTop: a,
				children: [Y, J]
			}), t[48] = n, t[49] = a, t[50] = X, t[51] = Z) : Z = t[51];
			var ee;
			return t[52] !== a || t[53] !== _ || t[54] !== h || t[55] !== Z ? (ee = c.jsxs(c.Fragment, { children: [Q, c.jsx(r("MWPMessageListAttachmentContainer.react"), {
				connectTop: a,
				message: _,
				outgoing: h,
				xstyle: f.unsetWidth,
				children: Z
			})] }), t[52] = a, t[53] = _, t[54] = h, t[55] = Z, t[56] = ee) : ee = t[56], ee;
		}
		var te = (s || (s = o("I64"))).equal(_.displayedContentTypes, (u || (u = o("LSIntEnum"))).ofNumber(4)) ? !1 : void 0, ne;
		t[57] !== S ? (ne = o("HelpdeskGeminiNullthrows").nullthrows(S), t[57] = S, t[58] = ne) : ne = t[58];
		var re;
		t[59] !== n || t[60] !== a || t[61] !== l || t[62] !== d || t[63] !== _ || t[64] !== h || t[65] !== ne ? (re = c.jsx(g, {
			connectBottom: n,
			connectTop: a,
			dbAttachment: ne,
			hasText: l,
			mediaRenderQpl: d,
			message: _,
			outgoing: h
		}), t[59] = n, t[60] = a, t[61] = l, t[62] = d, t[63] = _, t[64] = h, t[65] = ne, t[66] = re) : re = t[66];
		var oe;
		return t[67] !== a || t[68] !== _ || t[69] !== $ || t[70] !== te || t[71] !== re ? (oe = c.jsx(r("MWPMessageListAttachmentContainer.react"), {
			connectTop: a,
			message: _,
			paint: te,
			renderEmphasisRing: $,
			children: re
		}), t[67] = a, t[68] = _, t[69] = $, t[70] = te, t[71] = re, t[72] = oe) : oe = t[72], oe;
	}
	function y(e) {
		return e.threadType;
	}
	l.default = h;
}), 98);
