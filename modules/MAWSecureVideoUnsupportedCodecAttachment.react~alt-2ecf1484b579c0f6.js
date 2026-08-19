__d("MAWSecureVideoUnsupportedCodecAttachment.react", [
	"MAWVideoAudioPlaybackErrorHandlerUtils",
	"MWV2AttachmentDownloadablePlaceholderWithBlurImage.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = e.connectBottom, n = e.connectTop, a = e.dbAttachment, i = e.getPlayableUrl, l = e.getPreviewUrl, c = e.hasAppAttribution, d = e.height, m = e.iconSize, p = e.maxHeight, _ = e.maxWidth, f = e.mediaRenderQpl, g = e.message, h = e.outgoing, y = e.previewHeight, C = e.previewWidth, b = e.width, v = e.withTooltip, S = e.xstyle;
		u(function() {
			f == null || f.addPoint("downloadable-unsupported-media-rendered"), f == null || f.endFailAfterDelay("unsupported-media", { bool: { is_unsupported_media: !0 } });
		}, void 0);
		var R = o("MAWVideoAudioPlaybackErrorHandlerUtils").useGetMetadataForMediaNotRendered(a, !1), L = R.mediaStatusText;
		return s.jsx(r("MWV2AttachmentDownloadablePlaceholderWithBlurImage.react"), {
			connectBottom: t != null ? t : !1,
			connectTop: n != null ? n : !1,
			dbAttachment: a,
			getPlayableUrl: i,
			getPreviewUrl: l,
			hasAppAttribution: c != null ? c : !1,
			height: d,
			iconSize: m,
			maxHeight: p,
			maxWidth: _,
			mediaRenderQpl: null,
			message: g,
			outgoing: h != null ? h : !1,
			placeholderMessage: L,
			previewHeight: y,
			previewWidth: C,
			width: b,
			withTooltip: v != null ? v : !1,
			xstyle: S
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
