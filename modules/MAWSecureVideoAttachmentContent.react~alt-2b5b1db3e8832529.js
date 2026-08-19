__d("MAWSecureVideoAttachmentContent.react", [
	"CometPlaceholder.react",
	"MAWAttachmentSizeUtils",
	"MAWMediaSetMediaValidatedResult",
	"MAWSecureImageAttachmentContent.react",
	"MAWSecureVideoUnsupportedCodecAttachment.react",
	"MAWThreadViewAttachmentStateHandlerContent.react",
	"MWLSThreadDisplayContext",
	"MWV2AttachmentErrorPlaceholderV2.react",
	"MWV2AttachmentErrorPlaceholderWithBlurImage.react",
	"MWV2AttachmentRetriableErrorPlaceholderWithBlurImage.react",
	"MWV2ChatVideo.react",
	"MediaDownloadStatusIconSize",
	"VultureJSDeadComponent.react",
	"react",
	"useAsyncReStore",
	"useShouldShowPlaybackErrorFallback",
	"useShouldShowUnsupportedCodecFallback"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect;
	function m(e) {
		if (e == null) return null;
		var t = e.match(/Content-Type:([^\s]+)/i);
		return t != null ? t[1].toLowerCase() : null;
	}
	function p(e) {
		var t, n, a = e.connectBottom, i = e.connectTop, l = e.dbAttachment, u = e.getPlayableUrl, m = e.getPreviewUrl, p = e.mediaRenderQpl, f = e.message, g = e.outgoing, h = e.previewHeight, y = e.previewWidth, C = e.shouldDisableAutoTriggerDownload, b = C === void 0 ? !1 : C;
		d(function() {
			p == null || p.addPoint("render-video-attachment");
		}, [p]);
		var v = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), S = o("MAWAttachmentSizeUtils").getMaxSizeForVideo({
			height: h,
			width: y
		}, v, l, !0), R = S.maxHeight, L = S.maxWidth, E = (t = r("useShouldShowPlaybackErrorFallback")(l, p)) != null ? t : !1, k = (n = r("useShouldShowUnsupportedCodecFallback")(l, p)) != null ? n : !1, I = c(function(e, t, n) {
			return s.jsx(_, {
				connectBottom: a,
				connectTop: i,
				dbAttachment: l,
				errorMessage: n,
				getPlayableUrl: u,
				getPreviewUrl: m,
				isRetryableError: e,
				manualRetry: t,
				maxHeight: R,
				maxWidth: L,
				mediaRenderQpl: p,
				message: f,
				outgoing: g,
				previewHeight: h,
				previewWidth: y
			});
		}, [
			a,
			i,
			l,
			u,
			m,
			R,
			L,
			p,
			f,
			g,
			h,
			y
		]);
		if (E) return s.jsx(r("VultureJSDeadComponent.react"), { name: "MAWSecureVideoInvalidAttachment" });
		if (k) return s.jsx(r("MAWSecureVideoUnsupportedCodecAttachment.react"), {
			connectBottom: a,
			connectTop: i,
			dbAttachment: l,
			getPlayableUrl: u,
			getPreviewUrl: m != null ? m : u,
			height: h,
			iconSize: r("MediaDownloadStatusIconSize").Large,
			maxHeight: R,
			maxWidth: L,
			mediaRenderQpl: p,
			message: f,
			outgoing: g,
			width: y
		});
		var T = l.gifPlayback === !0, D = function(t) {
			return s.jsx(r("CometPlaceholder.react"), {
				fallback: t("MAWSecureVideoAttachmentContentV2.Suspense", !0),
				name: "MAWSecureVideoAttachmentContentV2.Suspense",
				children: s.jsx(r("MWV2ChatVideo.react"), {
					attachment: l,
					autoPlaySetting: T,
					connectTop: i,
					getPlayableUrl: u,
					gifPlayback: T,
					isSecure: !0,
					loops: T,
					mediaRenderQpl: p,
					message: f,
					navigateToRouteForMediaViewer: !1,
					outgoing: g,
					renderUnsupportedAttachment: function(t, n, r) {
						return I(!1, void 0, r);
					}
				})
			});
		}, x = function(t, n) {
			return t ? s.jsx(r("MWV2AttachmentRetriableErrorPlaceholderWithBlurImage.react"), {
				connectBottom: a,
				connectTop: i,
				dbAttachment: l,
				getPreviewUrl: m != null ? m : u,
				height: h,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				maxHeight: R,
				maxWidth: L,
				mediaRenderQpl: p,
				message: f,
				onRetry: n,
				outgoing: g,
				width: y
			}) : s.jsx(r("MWV2AttachmentErrorPlaceholderWithBlurImage.react"), {
				connectBottom: a,
				connectTop: i,
				dbAttachment: l,
				getPreviewUrl: m != null ? m : u,
				height: h,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				maxHeight: R,
				maxWidth: L,
				mediaRenderQpl: p,
				message: f,
				outgoing: g,
				width: y
			});
		};
		return s.jsx(r("MAWThreadViewAttachmentStateHandlerContent.react"), {
			connectBottom: a,
			connectTop: i,
			dbAttachment: l,
			descriptionForLogging: "MAWSecureVideoAttachmentContentV2",
			errorComponentRenderer: I,
			errorWithBlurComponentRenderer: x,
			mediaRenderQpl: p,
			outgoing: g,
			placeholderHeight: h,
			placeholderMaxHeight: R,
			placeholderMaxWidth: L,
			placeholderWidth: y,
			shouldDisableAutoTriggerDownload: b,
			successfulComponentRenderer: D
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.connectBottom, n = e.connectTop, a = e.dbAttachment, i = e.errorMessage, l = e.getPlayableUrl, u = e.getPreviewUrl, c = e.isRetryableError, p = e.manualRetry, _ = e.maxHeight, f = e.maxWidth, g = e.mediaRenderQpl, h = e.message, y = e.outgoing, C = e.previewHeight, b = e.previewWidth, v = r("useAsyncReStore")(), S = m(i), R = S === "image/gif" || S === "image/webp";
		return d(function() {
			R ? g == null || g.addPoint("gif_fallback_to_image", { string: { fallback_reason: "video_playback_failed_for_image_gif" } }) : c || (o("MAWMediaSetMediaValidatedResult").call(v, a.attachmentFbid, { validatedMimeType: "unsupported-video" }), g == null || g.addPoint("browser_cant_play_video", { string: { invalid_media_reason: "browser_cant_play_video" } }));
		}, [
			a.attachmentFbid,
			v,
			c,
			g,
			R
		]), R ? s.jsx(r("MAWSecureImageAttachmentContent.react"), {
			connectBottom: t,
			connectTop: n,
			dbAttachment: a,
			getPreviewUrl: l,
			mediaRenderQpl: g,
			message: h,
			outgoing: y,
			previewHeight: C,
			previewWidth: b
		}) : c ? s.jsx(r("MWV2AttachmentErrorPlaceholderV2.react"), {
			attachment: a,
			connectBottom: t,
			connectTop: n,
			hasAppAttribution: a.attributionAppName != null,
			height: C,
			iconSize: r("MediaDownloadStatusIconSize").Large,
			isRetryableError: c,
			maxHeight: _,
			maxWidth: f,
			mediaRenderQpl: g,
			onRetry: p,
			outgoing: y,
			width: b
		}) : s.jsx(r("MAWSecureVideoUnsupportedCodecAttachment.react"), {
			connectBottom: t,
			connectTop: n,
			dbAttachment: a,
			getPlayableUrl: l,
			getPreviewUrl: u != null ? u : l,
			height: C,
			iconSize: r("MediaDownloadStatusIconSize").Large,
			maxHeight: _,
			maxWidth: f,
			mediaRenderQpl: g,
			message: h,
			outgoing: y,
			width: b
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 98);
