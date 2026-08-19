__d("MAWSecureVideoUnsupportedCodecAttachment.react", [
	"MAWVideoAudioPlaybackErrorHandlerUtils",
	"MWV2AttachmentDownloadablePlaceholderWithBlurImage.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = o("react-compiler-runtime").c(21), n = e.connectBottom, a = e.connectTop, i = e.dbAttachment, l = e.getPlayableUrl, c = e.getPreviewUrl, d = e.hasAppAttribution, m = e.height, p = e.iconSize, _ = e.maxHeight, f = e.maxWidth, g = e.mediaRenderQpl, h = e.message, y = e.outgoing, C = e.previewHeight, b = e.previewWidth, v = e.width, S = e.withTooltip, R = e.xstyle, L;
		t[0] !== g ? (L = function() {
			g == null || g.addPoint("downloadable-unsupported-media-rendered"), g == null || g.endFailAfterDelay("unsupported-media", { bool: { is_unsupported_media: !0 } });
		}, t[0] = g, t[1] = L) : L = t[1], u(L, void 0);
		var E = o("MAWVideoAudioPlaybackErrorHandlerUtils").useGetMetadataForMediaNotRendered(i, !1), k = E.mediaStatusText, I = n != null ? n : !1, T = a != null ? a : !1, D = d != null ? d : !1, x = y != null ? y : !1, $ = S != null ? S : !1, P;
		return t[2] !== i || t[3] !== l || t[4] !== c || t[5] !== m || t[6] !== p || t[7] !== _ || t[8] !== f || t[9] !== h || t[10] !== k || t[11] !== C || t[12] !== b || t[13] !== I || t[14] !== T || t[15] !== D || t[16] !== x || t[17] !== $ || t[18] !== v || t[19] !== R ? (P = s.jsx(r("MWV2AttachmentDownloadablePlaceholderWithBlurImage.react"), {
			connectBottom: I,
			connectTop: T,
			dbAttachment: i,
			getPlayableUrl: l,
			getPreviewUrl: c,
			hasAppAttribution: D,
			height: m,
			iconSize: p,
			maxHeight: _,
			maxWidth: f,
			mediaRenderQpl: null,
			message: h,
			outgoing: x,
			placeholderMessage: k,
			previewHeight: C,
			previewWidth: b,
			width: v,
			withTooltip: $,
			xstyle: R
		}), t[2] = i, t[3] = l, t[4] = c, t[5] = m, t[6] = p, t[7] = _, t[8] = f, t[9] = h, t[10] = k, t[11] = C, t[12] = b, t[13] = I, t[14] = T, t[15] = D, t[16] = x, t[17] = $, t[18] = v, t[19] = R, t[20] = P) : P = t[20], P;
	}
	l.default = c;
}), 98);
