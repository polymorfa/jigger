__d("MAWSecureImageAttachmentContent.react", [
	"CometHeroHoldTrigger.react",
	"CometPlaceholder.react",
	"I64",
	"MAWThreadViewAttachmentStateHandlerContent.react",
	"MWAnimatedImageControlsUtil",
	"MWAnimatedImageThumbnailWithPlayButton.react",
	"MWLSThreadDisplayContext",
	"MWMessageListImageSizingUtils",
	"MWV2AttachmentErrorPlaceholderV2.react",
	"MWV2AttachmentErrorPlaceholderWithBlurImage.react",
	"MWV2AttachmentLoadingPlaceholder.react",
	"MWV2AttachmentRetriableErrorPlaceholderWithBlurImage.react",
	"MWV2ChatImage.react",
	"MediaDownloadStatusIconSize",
	"MessagingAttachmentType",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p(e) {
		var t = e.attachmentsFromGroupToRetry, n = e.connectBottom, a = e.connectTop, i = e.dbAttachment, l = e.getPreviewUrl, c = e.isGroupedImage, p = e.mediaRenderQpl, _ = e.message, f = e.outgoing, g = e.previewHeight, h = e.previewWidth, y = e.shouldDisableAutoTriggerDownload, C = y === void 0 ? !1 : y, b = o("MWAnimatedImageControlsUtil").useGetMessengerAutoplaySetting(), v = m(!1), S = v[0], R = v[1];
		d(function() {
			p == null || p.addPoint("render-image-attachment");
		}, [p]);
		var L = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), E = o("MWMessageListImageSizingUtils").getMaxPreviewHeightAndWidth(!0, L != null ? L : void 0, c), k = E.maxHeight, I = E.maxWidth, T = i != null && ((s || (s = o("I64"))).to_int32(i.attachmentType) === r("MessagingAttachmentType").ANIMATED_IMAGE || (i == null ? void 0 : i.gifPlayback) === !0);
		if (_ == null || i == null) return u.jsxs(u.Fragment, { children: [u.jsx(r("MWV2AttachmentLoadingPlaceholder.react"), {
			connectBottom: n,
			connectTop: a,
			descriptionForLogging: "MAWSecureImageAttachmentContent.NoMedia",
			hasAppAttribution: (i == null ? void 0 : i.attributionAppName) != null,
			height: g,
			maxHeight: k,
			maxWidth: I,
			mediaRenderQpl: p,
			outgoing: f,
			width: h
		}), u.jsx(r("CometHeroHoldTrigger.react"), {
			description: "MAWSecureImageAttachmentContent.NoMedia",
			hold: !0
		})] });
		var D = function(t, o) {
			return u.jsx(r("MWV2AttachmentErrorPlaceholderV2.react"), {
				attachment: i,
				connectBottom: n,
				connectTop: a,
				hasAppAttribution: i.attributionAppName != null,
				height: g,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				isRetryableError: t,
				maxHeight: k,
				maxWidth: I,
				mediaRenderQpl: p,
				onRetry: o,
				outgoing: f,
				width: h
			});
		}, x = function(t, o) {
			return t ? u.jsx(r("MWV2AttachmentRetriableErrorPlaceholderWithBlurImage.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: i,
				getPreviewUrl: l,
				height: g,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				isGroupedImage: c,
				maxHeight: k,
				maxWidth: I,
				mediaRenderQpl: p,
				message: _,
				onRetry: o,
				outgoing: f,
				width: h
			}) : u.jsx(r("MWV2AttachmentErrorPlaceholderWithBlurImage.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: i,
				getPreviewUrl: l,
				height: g,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				isGroupedImage: c,
				maxHeight: k,
				maxWidth: I,
				mediaRenderQpl: p,
				message: _,
				outgoing: f,
				width: h
			});
		}, $ = function(t) {
			if (_ == null) return t("MAWSecureImageAttachmentContentV2.NoMessage", !1);
			var e = T && b !== o("MWAnimatedImageControlsUtil").MWAutoplayAnimationsSetting.ON;
			return u.jsx(r("CometPlaceholder.react"), {
				fallback: t("MAWSecureImageAttachmentContentV2.Suspense", !0),
				name: "MAWSecureImageAttachmentContentV2.Suspense",
				children: e && S === !1 ? u.jsx(o("MWAnimatedImageThumbnailWithPlayButton.react").MWAnimatedImageThumbnailWithPlayButton, {
					connectBottom: n,
					connectTop: a,
					dbAttachment: i,
					entryPoint: o("MWAnimatedImageThumbnailWithPlayButton.react").AnimatedImageEntryPoint.Thread,
					isSecure: !0,
					mediaRenderQpl: p,
					message: _,
					onPlay: function() {
						return R(!0);
					},
					outgoing: f,
					previewHeight: g,
					previewWidth: h,
					testid: void 0
				}) : u.jsx(r("MWV2ChatImage.react"), {
					attachment: i,
					connectBottom: n,
					connectTop: a,
					getPreviewUrl: l,
					isGroupedImage: c,
					isSecure: !0,
					maxHeight: k,
					maxWidth: I,
					mediaRenderQpl: p,
					message: _,
					navigateToRouteForMediaViewer: !1,
					onPressOverride: e ? function() {
						return R(!1);
					} : void 0,
					outgoing: f,
					renderUnsupportedAttachment: function() {
						return D(!1);
					}
				})
			});
		};
		return u.jsx(r("MAWThreadViewAttachmentStateHandlerContent.react"), {
			attachmentsFromGroupToRetry: t,
			connectBottom: n,
			connectTop: a,
			dbAttachment: i,
			descriptionForLogging: "MAWSecureImageAttachmentContentV2",
			errorComponentRenderer: D,
			errorWithBlurComponentRenderer: x,
			mediaRenderQpl: p,
			outgoing: f,
			placeholderHeight: g,
			placeholderMaxHeight: k,
			placeholderMaxWidth: I,
			placeholderWidth: h,
			shouldDisableAutoTriggerDownload: C,
			successfulComponentRenderer: $
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
