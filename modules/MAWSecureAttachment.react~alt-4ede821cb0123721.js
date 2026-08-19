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
		var t = e.connectBottom, n = e.connectTop, a = e.hasEmphasisRing, i = e.hasText, l = e.mediaRenderQpl, d = e.message, h = e.outgoing, y = o("MWLSThread").useThread(d.threadKey, function(e) {
			return e.threadType;
		}), C = r("useXMAPreviewsDisabledSetting")(), b = o("MWPAttachmentDataContext").useMWPGetAttachments(d), v = b != null && b.length > 0 ? b[0] : null, S = d.threadKey, R = r("useHandleXmaEventsLogging")({
			attachment: v,
			message: d,
			threadType: y
		}), L = m(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext);
		p(function() {
			var e, t = r("gkx")("12935") ? (e = L.current) == null ? void 0 : e.interactionUUID : null;
			v != null && (l == null || l.addAttachmentAnnotations == null || l.addAttachmentAnnotations(v), o("MWThreadViewMediaRenderQplV2").addAttachmentAnnotations(t, v, C)), l == null || l.addPoint("render-secure-attachment", { bool: { has_attachment: v != null } }), t != null && (r("InteractionTracingMetrics").addMarkerPoint(t, "render-secure-attachment", "AppTiming"), r("InteractionTracingMetrics").addMetadata(t, "has_attachment", v != null ? 1 : 0), r("InteractionTracingMetrics").addMetadata(t, "is_receiver_fetch_sticker", v != null && r("isReceiverFetchSticker")(v) ? 1 : 0), r("InteractionTracingMetrics").addMetadata(t, "xma_previews_disabled", C ? 1 : 0));
		}, [
			v,
			L,
			l,
			C
		]), r("useIssueXMAReceiverFetchTask")(d.messageId, v, S, v == null ? void 0 : v.receiverFetchId, v == null ? void 0 : v.xmaContentType, l), r("useIssueMediaReceiverFetchTask")(v ? r("isReceiverFetchSticker")(v) : !1, d.messageId, S, v == null ? void 0 : v.receiverFetchId, !0, l, v == null ? void 0 : v.previewUrl, v == null ? void 0 : v.previewUrlExpirationTimestampMs, v == null ? void 0 : v.attachmentType);
		var E = _(function() {
			return a === !0 ? function(e) {
				return c.jsx(r("MWChatBubbleEmphasisRing.react"), {
					connectBottom: t,
					connectTop: n,
					flattenTop: i,
					message: d,
					outgoing: h,
					precedesXMA: !1,
					children: e
				});
			} : void 0;
		}, [
			t,
			n,
			a,
			i,
			d,
			h
		]);
		if (v == null) return null;
		var k = (v == null ? void 0 : v.xmaContentType) != null && (u || (u = o("LSIntEnum"))).toNumber(v.xmaContentType) === r("LSXmaContentType").MSG_RECEIVER_FETCH_ENT_DELETED, I = (v == null ? void 0 : v.xmaContentType) != null && (u || (u = o("LSIntEnum"))).toNumber(v.xmaContentType) === r("LSXmaContentType").MSG_RECEIVER_FETCH_FALLBACK, T = C && o("MAWIsFBXMA").isFBXMA(v == null ? void 0 : v.xmaContentType);
		if (T || I || k) {
			l == null || l.addPoint("render_rf_xma_fallback"), T || k ? l == null || l.endSuccessAfterDelay() : I && (l == null || l.endFailAfterDelay("fetch_xma_data_receiver_fetch_failed"));
			var D = babelHelpers.extends({}, d, { text: v == null ? void 0 : v.actionUrl });
			return c.jsxs(c.Fragment, { children: [c.jsx("div", { className: "x1eb86dx x36qwtl xh8yej3" }), c.jsx(r("MWV2ChatBubbleContainer.react"), {
				connectBottom: t,
				connectTop: n,
				hasEmphasisRing: a,
				message: D,
				outgoing: h,
				precedesXMA: !1,
				children: c.jsx(r("MWXText.react"), {
					color: h ? "white" : "primary",
					type: "bodyLink3",
					children: c.jsx("div", babelHelpers.extends({}, {
						0: { className: "x1gslohp x14z9mp x12nagc x1lziwak x1yc453h x126k92a x18lvrbx" },
						1: { className: "x1gslohp x14z9mp x12nagc x1lziwak x1yc453h x126k92a xyk4ms5" }
					}[!!h << 0], { children: c.jsx(r("MWXLink.react"), {
						encryptedLink: !0,
						href: v == null ? void 0 : v.actionUrl,
						onClick: function() {
							return R();
						},
						style: { textDecoration: "underline" },
						children: v == null ? void 0 : v.actionUrl
					}) }))
				})
			})] });
		}
		return o("MAWIsReceiverFetchXmaInLoadingState").isReceiverFetchXmaInLoadingState(d.displayedContentTypes, v) ? (l == null || l.addPoint("fetch_xma_data_receiver_fetch"), c.jsxs(c.Fragment, { children: [c.jsx("div", { className: "x1eb86dx x36qwtl xh8yej3" }), c.jsx(r("MWPMessageListAttachmentContainer.react"), {
			connectTop: n,
			message: d,
			outgoing: h,
			xstyle: f.unsetWidth,
			children: c.jsxs(r("MWXMessageBubble.react"), {
				align: h ? "right" : "left",
				color: "incoming",
				connectBottom: t,
				connectTop: n,
				children: [c.jsx(r("MWChatTypingIndicator.react"), {}), c.jsx(r("CometHeroHoldTrigger.react"), {
					description: "MAWSecureAttachment.receiver_fetch.typing_indicator",
					hold: !0
				})]
			})
		})] })) : c.jsx(r("MWPMessageListAttachmentContainer.react"), {
			connectTop: n,
			message: d,
			paint: (s || (s = o("I64"))).equal(d.displayedContentTypes, (u || (u = o("LSIntEnum"))).ofNumber(4)) ? !1 : void 0,
			renderEmphasisRing: E,
			children: c.jsx(g, {
				connectBottom: t,
				connectTop: n,
				dbAttachment: o("HelpdeskGeminiNullthrows").nullthrows(v),
				hasText: i,
				mediaRenderQpl: l,
				message: d,
				outgoing: h
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 98);
