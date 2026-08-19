__d("MAWBridgeXMAUtils", [
	"FBLogger",
	"I64",
	"LSIntEnum",
	"MAWBridgeUIEventDataValidation",
	"MAWConvertExtendedContentTypeToLSXmaContentType",
	"MAWXMAUtils",
	"MNLSXMALayoutType",
	"MNXMAPreviewImageDecorationType",
	"MWPBumpEntityKey",
	"MessagingAttachmentType",
	"Random",
	"ReQL",
	"WAArmadilloXMA.pb",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	async function u(t, n, r, a, i, l) {
		var s = n.ctas, u = n.defaultCTA, c = d(n.targetId, n.targetType), p = (e || (e = o("I64"))).of_int32(o("Random").uint32());
		if (u != null) {
			var h = _(u, p, a, r, i, c, n.targetType);
			await g(t, h, p, l.defaultCta);
		}
		var y = o("MAWXMAUtils").isFBXMAPostMention(n.targetType) && n.author === o("WAJids").AUTHOR_ME, C = [];
		return s != null && !y && (C = await Promise.all(s.map(function(e, n) {
			var o = m(p, n), s = f(e, o, a, r, i, c), u = n === 0 ? l.attachmentCta1 : n === 1 ? l.attachmentCta2 : n === 2 ? l.attachmentCta3 : void 0;
			return g(t, s, o, u);
		}))), {
			attachmentCta1Id: C.length > 0 ? C[0] : void 0,
			attachmentCta2Id: C.length > 1 ? C[1] : void 0,
			attachmentCta3Id: C.length > 2 ? C[2] : void 0,
			defaultCtaId: u == null ? void 0 : p
		};
	}
	function c(e) {
		var t = "xma_web_url";
		switch (e) {
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_ONGOING_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_AUDIO_CALL:
				t = "xma_rtc_audio";
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_VIDEO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_ONGOING_VIDEO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_VIDEO_CALL:
				t = "xma_rtc_video";
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_AUDIO_CALL:
				t = "xma_rtc_missed_audio";
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_VIDEO_CALL:
				t = "xma_rtc_missed_video";
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_SINGLE_IMAGE_POST_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_MULTIPOST_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_CLIPS_SHARE:
				t = "igd_web_post_share";
				break;
		}
		return t;
	}
	function d(e, t) {
		if (!o("MAWXMAUtils").isFBXMAPostMention(t)) return e != null ? o("MAWBridgeUIEventDataValidation").stringToI64Opt(e) : void 0;
	}
	function m(t, n) {
		return (e || (e = o("I64"))).add(t, e.of_int32(n + 1));
	}
	function p(t, n, r, a, i, l, s) {
		var u;
		s === void 0 && (s = "xma_web_url");
		var c = t.actionUrl, d = t.nativeUrl;
		return {
			actionContentBlob: void 0,
			actionUrl: c != null ? c : d,
			attachmentFbid: i,
			attachmentIndex: (e || (e = o("I64"))).zero,
			ctaId: n,
			enableExtensions: !1,
			extensionHeightType: void 0,
			messageId: r,
			nativeUrl: d != null ? d : c,
			platformToken: void 0,
			targetId: l != null ? l : void 0,
			threadKey: a,
			title: (u = t.title) != null ? u : "Tap to view status update",
			type_: s != null ? s : "xma_web_url",
			urlWebviewType: void 0
		};
	}
	function _(e, t, n, r, o, a, i) {
		var l = c(i);
		return p(e, t, n, r, o, a, l);
	}
	function f(e, t, n, r, o, a) {
		var i;
		switch (e.ctaType) {
			case "contact_sharing_profile":
				i = "contact_sharing_profile";
				break;
			case "contact_sharing_message":
				i = "contact_sharing_message";
				break;
		}
		return p(e, t, n, r, o, a, i);
	}
	async function g(e, t, n, r) {
		return r != null ? await e.attachment_ctas.upsert([r.ctaId], t) : await e.attachment_ctas.add(t), n;
	}
	async function h(e, t, n) {
		var r = null, a = {
			attachmentCta1: void 0,
			attachmentCta2: void 0,
			attachmentCta3: void 0,
			defaultCta: void 0
		};
		return r = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.attachments).getKeyRange(t, n)), r != null && (a.defaultCta = await y(e, r.defaultCtaId), a.attachmentCta1 = await y(e, r.attachmentCta1Id), a.attachmentCta2 = await y(e, r.attachmentCta2Id), a.attachmentCta3 = await y(e, r.attachmentCta3Id)), [r, a];
	}
	function y(e, t) {
		return t == null ? Promise.resolve(void 0) : o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.attachment_ctas).getKeyRange(t));
	}
	function C(t, n, a, i, l, u, c, d, m) {
		var p, _, f, g, h, y = (e || (e = o("I64"))).zero, C = b(t), E = o("MAWConvertExtendedContentTypeToLSXmaContentType").convertExtendedContentTypeToLSXmaContentType(t.targetType), k = E != null ? (e || (e = o("I64"))).of_int32(E) : void 0, I = (p = t == null || (_ = t.defaultCTA) == null ? void 0 : _.actionUrl) != null ? p : t == null || (f = t.defaultCTA) == null ? void 0 : f.nativeUrl;
		return t.targetType === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_EXTERNAL_LINK_SHARE && [
			t.titleText,
			t.subtitleText,
			I
		].every(function(e) {
			return e == null || e === "";
		}) && r("FBLogger")("messenger_web_sharing").warn("composeAttachmentXMA: MSG_EXTERNAL_LINK_SHARE has no titleText, subtitleText, or actionUrl. XMA will render empty"), t.defaultPreviewMediaId != null && o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.new_xma_handler", "xma_preview_media_has_plaintext_hash." + m + "." + t.targetType + "." + (t.defaultPreviewMediaPlaintextHash != null ? "true" : "false")), {
			accessibilitySummaryText: void 0,
			actionUrl: I != null ? I : void 0,
			attachmentCta1Id: l,
			attachmentCta2Id: u,
			attachmentCta3Id: c,
			attachmentFbid: a,
			attachmentIndex: e.zero,
			attachmentLoggingType: void 0,
			attachmentType: (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA),
			attributionAppIcon: void 0,
			attributionAppIconFallback: void 0,
			attributionAppIconUrlExpirationTimestampMs: void 0,
			attributionAppId: void 0,
			attributionAppName: void 0,
			authorityLevel: e.zero,
			avatarCount: void 0,
			avatarViewAccessibilityLabel: void 0,
			avatarViewSize: void 0,
			avatarViewTitleList: void 0,
			avatarViewUrlExpirationTimestampList: void 0,
			avatarViewUrlFallbackList: void 0,
			avatarViewUrlList: void 0,
			captionBodyText: void 0,
			cta1Title: S(t.ctas, 1),
			cta1Type: v(t.ctas, 1),
			cta2Title: S(t.ctas, 2),
			cta2Type: v(t.ctas, 2),
			cta3Title: S(t.ctas, 3),
			cta3Type: v(t.ctas, 3),
			dashManifest: void 0,
			decryptionKey: void 0,
			defaultCtaId: d,
			defaultCtaTitle: (g = t.defaultCTA) == null ? void 0 : g.title,
			defaultCtaType: C.xmaContentType,
			descriptionText: void 0,
			ephemeralMediaState: void 0,
			faviconUrl: void 0,
			faviconUrlExpirationTimestampMs: void 0,
			faviconUrlFallback: void 0,
			filename: void 0,
			filesize: t.filesize != null ? (e || (e = o("I64"))).of_int32(t.filesize) : void 0,
			gatingTitle: t.overlayTitle,
			gatingType: t.overlayIconGlyph != null ? String(t.overlayIconGlyph) : void 0,
			hasMedia: t.hasMedia != null ? t.hasMedia : !1,
			hasXma: !0,
			hasXmaFavicon: t.faviconPlaintextHash != null,
			hasXmaHeaderImage: t.headerMediaPlaintextHash != null,
			hasXmaPreview: t.defaultPreviewMediaPlaintextHash != null,
			headerImageUrl: void 0,
			headerImageUrlExpirationTimestampMs: void 0,
			headerImageUrlFallback: void 0,
			headerImageUrlMimeType: void 0,
			headerTitle: t.headerTitle,
			imageUrl: void 0,
			imageUrlExpirationTimestampMs: void 0,
			imageUrlFallback: void 0,
			imageUrlMimeType: void 0,
			isBorderless: void 0,
			isPreviewImage: void 0,
			isSharable: !0,
			listItemAccessibilityText1: void 0,
			listItemAccessibilityText2: void 0,
			listItemAccessibilityText3: void 0,
			listItemContactUrlExpirationTimestampList1: void 0,
			listItemContactUrlExpirationTimestampList2: void 0,
			listItemContactUrlExpirationTimestampList3: void 0,
			listItemContactUrlFallbackList1: void 0,
			listItemContactUrlFallbackList2: void 0,
			listItemContactUrlFallbackList3: void 0,
			listItemContactUrlList1: void 0,
			listItemContactUrlList2: void 0,
			listItemContactUrlList3: void 0,
			listItemId1: void 0,
			listItemId2: void 0,
			listItemId3: void 0,
			listItemProfilePictureUrl1: void 0,
			listItemProfilePictureUrl2: void 0,
			listItemProfilePictureUrl3: void 0,
			listItemProfilePictureUrlExpirationTimestamp1: void 0,
			listItemProfilePictureUrlExpirationTimestamp2: void 0,
			listItemProfilePictureUrlExpirationTimestamp3: void 0,
			listItemProfilePictureUrlFallback1: void 0,
			listItemProfilePictureUrlFallback2: void 0,
			listItemProfilePictureUrlFallback3: void 0,
			listItemProgressBarFilledPercentage1: void 0,
			listItemProgressBarFilledPercentage2: void 0,
			listItemProgressBarFilledPercentage3: void 0,
			listItemsDescriptionSubtitleText: void 0,
			listItemsDescriptionText: void 0,
			listItemsId: void 0,
			listItemsSecondaryDescriptionText: void 0,
			listItemTitleText1: void 0,
			listItemTitleText2: void 0,
			listItemTitleText3: void 0,
			localPlayableUrl: void 0,
			maxSubtitleNumOfLines: t.maxSubtitleNumOfLines != null ? (e || (e = o("I64"))).of_int32(t.maxSubtitleNumOfLines) : void 0,
			maxTitleNumOfLines: t.maxTitleNumOfLines != null ? (e || (e = o("I64"))).of_int32(t.maxTitleNumOfLines) : void 0,
			messageId: i,
			miniPreview: void 0,
			offlineAttachmentId: (h = t.offlineAttachmentId) != null ? h : a,
			originalFileHash: void 0,
			originalPageSenderId: void 0,
			playableDurationMs: void 0,
			playableUrl: void 0,
			playableUrlExpirationTimestampMs: void 0,
			playableUrlFallback: void 0,
			playableUrlMimeType: void 0,
			preheaderText: void 0,
			previewHeight: C.height,
			previewHeightLarge: t.previewHeightLarge != null ? (e || (e = o("I64"))).of_int32(t.previewHeightLarge) : void 0,
			previewImageDecorationType: L(t.targetType),
			previewUrl: void 0,
			previewUrlExpirationTimestampMs: void 0,
			previewUrlFallback: void 0,
			previewUrlLarge: void 0,
			previewUrlMimeType: void 0,
			previewWidth: C.width,
			previewWidthLarge: t.previewWidthLarge != null ? (e || (e = o("I64"))).of_int32(t.previewWidthLarge) : void 0,
			samplingFrequencyHz: void 0,
			shouldAutoplayVideo: void 0,
			shouldHighlightHeaderTitleInTitle: void 0,
			shouldRespectServerPreviewSize: void 0,
			sourceText: void 0,
			subtitleIconUrl: void 0,
			subtitleText: t.subtitleText,
			targetId: void 0,
			threadKey: n,
			timestampMs: y,
			titleText: t.titleText,
			transportKey: "WhatsApp",
			viewerSeenTimestampMs: void 0,
			waveformData: void 0,
			xmaContentType: k,
			xmaDataclass: t.xmaDataclass,
			xmaFaviconFbid: t.faviconPlaintextHash,
			xmaHeaderImageFbid: t.headerMediaPlaintextHash,
			xmaLayoutType: t.xmaLayoutType != null ? R(t.xmaLayoutType) : void 0,
			xmaPreviewFbid: t.defaultPreviewMediaPlaintextHash,
			xmasTemplateType: t.xmaLayoutType != null ? R(t.xmaLayoutType) : void 0
		};
	}
	function b(t) {
		var n;
		switch (t.targetType) {
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_SHARE:
				n = {
					height: (e || (e = o("I64"))).of_int32(108),
					width: (e || (e = o("I64"))).of_int32(72),
					xmaContentType: "xma_montage_share"
				};
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_ONGOING_AUDIO_CALL:
				n = { xmaContentType: "xma_rtc_audio" };
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_VIDEO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_ONGOING_VIDEO_CALL:
				n = { xmaContentType: "xma_rtc_video" };
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_AUDIO_CALL:
				n = { xmaContentType: "xma_rtc_missed_audio" };
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_VIDEO_CALL:
				n = { xmaContentType: "xma_rtc_missed_video" };
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_AUDIO_CALL:
				n = { xmaContentType: "xma_rtc_missed_group_audio" };
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_VIDEO_CALL:
				n = { xmaContentType: "xma_rtc_missed_group_video" };
				break;
			default:
				n = {
					height: t.previewHeight != null ? (e || (e = o("I64"))).of_int32(t.previewHeight) : void 0,
					width: t.previewWidth != null ? (e || (e = o("I64"))).of_int32(t.previewWidth) : void 0,
					xmaContentType: "xma_web_url"
				};
				break;
		}
		return n;
	}
	function v(e, t) {
		if (e != null) {
			var n = e[t - 1];
			if (n != null) {
				var r = n.buttonType, a = n.ctaType;
				switch (a) {
					case "contact_sharing_profile": return "contact_sharing_profile";
					case "contact_sharing_message": return "contact_sharing_message";
					default: return r === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_SINGLE_VIDEO_POST_SHARE ? "xma_open_native" : void 0;
				}
			}
		}
	}
	function S(e, t) {
		if (e != null) {
			var n = e[t - 1];
			if (n != null) return n.title;
		}
	}
	function R(e) {
		return e === 0 || e !== 3 ? (s || (s = o("LSIntEnum"))).ofNumber(r("MNLSXMALayoutType").SINGLE) : (s || (s = o("LSIntEnum"))).ofNumber(r("MNLSXMALayoutType").PORTRAIT);
	}
	function L(e) {
		switch (e) {
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_MULTIPOST_SHARE: return (s || (s = o("LSIntEnum"))).ofNumber(r("MNXMAPreviewImageDecorationType").COLLAGE);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_CLIPS_SHARE: return (s || (s = o("LSIntEnum"))).ofNumber(r("MNXMAPreviewImageDecorationType").REEL);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_PHOTO_MENTION:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_PHOTO_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_VIDEO_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_PHOTO_HIGHLIGHT_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_VIDEO_HIGHLIGHT_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_REPLY:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_REACTION:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_VIDEO_MENTION: return (s || (s = o("LSIntEnum"))).ofNumber(r("MNXMAPreviewImageDecorationType").INSTAGRAM_ICON);
			default: return (s || (s = o("LSIntEnum"))).ofNumber(r("MNXMAPreviewImageDecorationType").DEFAULT);
		}
	}
	l.addAttachmentCtas = u, l.maybeBridgeToLSTargetId = d, l.getExistingAttachmentAndAttachmentCtas = h, l.composeAttachmentXMA = C;
}), 98);
