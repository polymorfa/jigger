__d("MAWSecureStickerAttachmentContent.react", [
	"CometPlaceholder.react",
	"MAWThreadViewAttachmentStateHandlerContent.react",
	"MWV2AttachmentErrorPlaceholderV2.react",
	"MWV2Sticker.react",
	"MediaDownloadStatusIconSize",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = e.connectBottom, n = e.connectTop, o = e.dbAttachment, a = e.getPreviewUrl, i = e.mediaRenderQpl, l = e.outgoing, c = e.previewHeight, d = e.previewWidth, m = e.shouldDisableAutoTriggerDownload;
		u(function() {
			i == null || i.addPoint("render-sticker-attachment");
		}, [i]);
		var p = function(a, u) {
			return s.jsx(r("MWV2AttachmentErrorPlaceholderV2.react"), {
				attachment: o,
				connectBottom: t,
				connectTop: n,
				hasAppAttribution: o.attributionAppName != null,
				height: c,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				isRetryableError: a,
				mediaRenderQpl: i,
				onRetry: u,
				outgoing: l,
				width: d
			});
		}, _ = function(t) {
			return o.receiverFetchId != null && o.previewUrl == null ? t("MAWSecureStickerAttachmentContentV2.NoReceiverFetchMedia", !0) : s.jsx(r("CometPlaceholder.react"), {
				fallback: t("MAWSecureStickerAttachmentContentV2.Suspense", !0),
				name: "MAWSecureStickerAttachmentContentV2.Suspense",
				children: s.jsx(r("MWV2Sticker.react"), {
					attachment: o,
					getPreviewUrl: a,
					mediaRenderQpl: i,
					renderUnsupportedAttachment: function() {
						return p(!1);
					}
				})
			});
		}, f = o.receiverFetchId != null ? o.messageId : o.attachmentFbid;
		return s.jsx(r("MAWThreadViewAttachmentStateHandlerContent.react"), {
			connectBottom: t,
			connectTop: n,
			dbAttachment: o,
			descriptionForLogging: "MAWSecureStickerAttachmentContentV2",
			downloadStatusKeyOverride: f,
			errorComponentRenderer: p,
			mediaRenderQpl: i,
			outgoing: l,
			placeholderHeight: c,
			placeholderWidth: d,
			shouldDisableAutoTriggerDownload: m,
			successfulComponentRenderer: _
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
