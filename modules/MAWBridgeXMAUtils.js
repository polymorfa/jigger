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
	"Promise",
	"Random",
	"ReQL",
	"WAArmadilloXMA.pb",
	"WAJids",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t, n, r, o, a) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a, i, l, s) {
			var c = r.ctas, d = r.defaultCTA, m = p(r.targetId, r.targetType), f = (u || (u = o("I64"))).of_int32(o("Random").uint32());
			if (d != null) {
				var C = g(d, f, i, a, l, m, r.targetType);
				yield y(t, C, f, s.defaultCta);
			}
			var b = o("MAWXMAUtils").isFBXMAPostMention(r.targetType) && r.author === o("WAJids").AUTHOR_ME, v = [];
			return c != null && !b && (v = yield (e || (e = n("Promise"))).all(c.map(function(e, n) {
				var r = _(f, n), o = h(e, r, i, a, l, m), u = n === 0 ? s.attachmentCta1 : n === 1 ? s.attachmentCta2 : n === 2 ? s.attachmentCta3 : void 0;
				return y(t, o, r, u);
			}))), {
				attachmentCta1Id: v.length > 0 ? v[0] : void 0,
				attachmentCta2Id: v.length > 1 ? v[1] : void 0,
				attachmentCta3Id: v.length > 2 ? v[2] : void 0,
				defaultCtaId: d == null ? void 0 : f
			};
		}), d.apply(this, arguments);
	}
	function m(e) {
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
	function p(e, t) {
		if (!o("MAWXMAUtils").isFBXMAPostMention(t)) return e != null ? o("MAWBridgeUIEventDataValidation").stringToI64Opt(e) : void 0;
	}
	function _(e, t) {
		return (u || (u = o("I64"))).add(e, u.of_int32(t + 1));
	}
	function f(e, t, n, r, a, i, l) {
		var s;
		l === void 0 && (l = "xma_web_url");
		var c = e.actionUrl, d = e.nativeUrl;
		return {
			actionContentBlob: void 0,
			actionUrl: c != null ? c : d,
			attachmentFbid: a,
			attachmentIndex: (u || (u = o("I64"))).zero,
			ctaId: t,
			enableExtensions: !1,
			extensionHeightType: void 0,
			messageId: n,
			nativeUrl: d != null ? d : c,
			platformToken: void 0,
			targetId: i != null ? i : void 0,
			threadKey: r,
			title: (s = e.title) != null ? s : "Tap to view status update",
			type_: l != null ? l : "xma_web_url",
			urlWebviewType: void 0
		};
	}
	function g(e, t, n, r, o, a, i) {
		var l = m(i);
		return f(e, t, n, r, o, a, l);
	}
	function h(e, t, n, r, o, a) {
		var i;
		switch (e.ctaType) {
			case "contact_sharing_profile":
				i = "contact_sharing_profile";
				break;
			case "contact_sharing_message":
				i = "contact_sharing_message";
				break;
		}
		return f(e, t, n, r, o, a, i);
	}
	function y(e, t, n, r) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			return r != null ? yield e.attachment_ctas.upsert([r.ctaId], t) : yield e.attachment_ctas.add(t), n;
		}), C.apply(this, arguments);
	}
	function b(e, t, n) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = null, a = {
				attachmentCta1: void 0,
				attachmentCta2: void 0,
				attachmentCta3: void 0,
				defaultCta: void 0
			};
			return r = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.attachments).getKeyRange(t, n)), r != null && (a.defaultCta = yield S(e, r.defaultCtaId), a.attachmentCta1 = yield S(e, r.attachmentCta1Id), a.attachmentCta2 = yield S(e, r.attachmentCta2Id), a.attachmentCta3 = yield S(e, r.attachmentCta3Id)), [r, a];
		}), v.apply(this, arguments);
	}
	function S(t, r) {
		return r == null ? (e || (e = n("Promise"))).resolve(void 0) : o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.attachment_ctas).getKeyRange(r));
	}
	function R(e, t, n, a, i, l, c, d, m) {
		var p, _, f, g, h, y = (u || (u = o("I64"))).zero, C = L(e), b = o("MAWConvertExtendedContentTypeToLSXmaContentType").convertExtendedContentTypeToLSXmaContentType(e.targetType), v = b != null ? (u || (u = o("I64"))).of_int32(b) : void 0, S = (p = e == null || (_ = e.defaultCTA) == null ? void 0 : _.actionUrl) != null ? p : e == null || (f = e.defaultCTA) == null ? void 0 : f.nativeUrl;
		return e.targetType === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_EXTERNAL_LINK_SHARE && [
			e.titleText,
			e.subtitleText,
			S
		].every(function(e) {
			return e == null || e === "";
		}) && r("FBLogger")("messenger_web_sharing").warn("composeAttachmentXMA: MSG_EXTERNAL_LINK_SHARE has no titleText, subtitleText, or actionUrl. XMA will render empty"), e.defaultPreviewMediaId != null && o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.new_xma_handler", "xma_preview_media_has_plaintext_hash." + m + "." + e.targetType + "." + (e.defaultPreviewMediaPlaintextHash != null ? "true" : "false")), {
			accessibilitySummaryText: void 0,
			actionUrl: S != null ? S : void 0,
			attachmentCta1Id: i,
			attachmentCta2Id: l,
			attachmentCta3Id: c,
			attachmentFbid: n,
			attachmentIndex: u.zero,
			attachmentLoggingType: void 0,
			attachmentType: (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA),
			attributionAppIcon: void 0,
			attributionAppIconFallback: void 0,
			attributionAppIconUrlExpirationTimestampMs: void 0,
			attributionAppId: void 0,
			attributionAppName: void 0,
			authorityLevel: u.zero,
			avatarCount: void 0,
			avatarViewAccessibilityLabel: void 0,
			avatarViewSize: void 0,
			avatarViewTitleList: void 0,
			avatarViewUrlExpirationTimestampList: void 0,
			avatarViewUrlFallbackList: void 0,
			avatarViewUrlList: void 0,
			captionBodyText: void 0,
			cta1Title: k(e.ctas, 1),
			cta1Type: E(e.ctas, 1),
			cta2Title: k(e.ctas, 2),
			cta2Type: E(e.ctas, 2),
			cta3Title: k(e.ctas, 3),
			cta3Type: E(e.ctas, 3),
			dashManifest: void 0,
			decryptionKey: void 0,
			defaultCtaId: d,
			defaultCtaTitle: (g = e.defaultCTA) == null ? void 0 : g.title,
			defaultCtaType: C.xmaContentType,
			descriptionText: void 0,
			ephemeralMediaState: void 0,
			faviconUrl: void 0,
			faviconUrlExpirationTimestampMs: void 0,
			faviconUrlFallback: void 0,
			filename: void 0,
			filesize: e.filesize != null ? (u || (u = o("I64"))).of_int32(e.filesize) : void 0,
			gatingTitle: e.overlayTitle,
			gatingType: e.overlayIconGlyph != null ? String(e.overlayIconGlyph) : void 0,
			hasMedia: e.hasMedia != null ? e.hasMedia : !1,
			hasXma: !0,
			hasXmaFavicon: e.faviconPlaintextHash != null,
			hasXmaHeaderImage: e.headerMediaPlaintextHash != null,
			hasXmaPreview: e.defaultPreviewMediaPlaintextHash != null,
			headerImageUrl: void 0,
			headerImageUrlExpirationTimestampMs: void 0,
			headerImageUrlFallback: void 0,
			headerImageUrlMimeType: void 0,
			headerTitle: e.headerTitle,
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
			maxSubtitleNumOfLines: e.maxSubtitleNumOfLines != null ? (u || (u = o("I64"))).of_int32(e.maxSubtitleNumOfLines) : void 0,
			maxTitleNumOfLines: e.maxTitleNumOfLines != null ? (u || (u = o("I64"))).of_int32(e.maxTitleNumOfLines) : void 0,
			messageId: a,
			miniPreview: void 0,
			offlineAttachmentId: (h = e.offlineAttachmentId) != null ? h : n,
			originalFileHash: void 0,
			originalPageSenderId: void 0,
			playableDurationMs: void 0,
			playableUrl: void 0,
			playableUrlExpirationTimestampMs: void 0,
			playableUrlFallback: void 0,
			playableUrlMimeType: void 0,
			preheaderText: void 0,
			previewHeight: C.height,
			previewHeightLarge: e.previewHeightLarge != null ? (u || (u = o("I64"))).of_int32(e.previewHeightLarge) : void 0,
			previewImageDecorationType: T(e.targetType),
			previewUrl: void 0,
			previewUrlExpirationTimestampMs: void 0,
			previewUrlFallback: void 0,
			previewUrlLarge: void 0,
			previewUrlMimeType: void 0,
			previewWidth: C.width,
			previewWidthLarge: e.previewWidthLarge != null ? (u || (u = o("I64"))).of_int32(e.previewWidthLarge) : void 0,
			samplingFrequencyHz: void 0,
			shouldAutoplayVideo: void 0,
			shouldHighlightHeaderTitleInTitle: void 0,
			shouldRespectServerPreviewSize: void 0,
			sourceText: void 0,
			subtitleIconUrl: void 0,
			subtitleText: e.subtitleText,
			targetId: void 0,
			threadKey: t,
			timestampMs: y,
			titleText: e.titleText,
			transportKey: "WhatsApp",
			viewerSeenTimestampMs: void 0,
			waveformData: void 0,
			xmaContentType: v,
			xmaDataclass: e.xmaDataclass,
			xmaFaviconFbid: e.faviconPlaintextHash,
			xmaHeaderImageFbid: e.headerMediaPlaintextHash,
			xmaLayoutType: e.xmaLayoutType != null ? I(e.xmaLayoutType) : void 0,
			xmaPreviewFbid: e.defaultPreviewMediaPlaintextHash,
			xmasTemplateType: e.xmaLayoutType != null ? I(e.xmaLayoutType) : void 0
		};
	}
	function L(e) {
		var t;
		switch (e.targetType) {
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_SHARE:
				t = {
					height: (u || (u = o("I64"))).of_int32(108),
					width: (u || (u = o("I64"))).of_int32(72),
					xmaContentType: "xma_montage_share"
				};
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_ONGOING_AUDIO_CALL:
				t = { xmaContentType: "xma_rtc_audio" };
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_VIDEO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_ONGOING_VIDEO_CALL:
				t = { xmaContentType: "xma_rtc_video" };
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_AUDIO_CALL:
				t = { xmaContentType: "xma_rtc_missed_audio" };
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_VIDEO_CALL:
				t = { xmaContentType: "xma_rtc_missed_video" };
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_AUDIO_CALL:
				t = { xmaContentType: "xma_rtc_missed_group_audio" };
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_VIDEO_CALL:
				t = { xmaContentType: "xma_rtc_missed_group_video" };
				break;
			default:
				t = {
					height: e.previewHeight != null ? (u || (u = o("I64"))).of_int32(e.previewHeight) : void 0,
					width: e.previewWidth != null ? (u || (u = o("I64"))).of_int32(e.previewWidth) : void 0,
					xmaContentType: "xma_web_url"
				};
				break;
		}
		return t;
	}
	function E(e, t) {
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
	function k(e, t) {
		if (e != null) {
			var n = e[t - 1];
			if (n != null) return n.title;
		}
	}
	function I(e) {
		return e === 0 || e !== 3 ? (s || (s = o("LSIntEnum"))).ofNumber(r("MNLSXMALayoutType").SINGLE) : (s || (s = o("LSIntEnum"))).ofNumber(r("MNLSXMALayoutType").PORTRAIT);
	}
	function T(e) {
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
	l.addAttachmentCtas = c, l.maybeBridgeToLSTargetId = p, l.getExistingAttachmentAndAttachmentCtas = b, l.composeAttachmentXMA = R;
}), 98);
