__d("MAWSecureStickerAttachmentContent.react", [
	"CometPlaceholder.react",
	"MAWThreadViewAttachmentStateHandlerContent.react",
	"MWV2AttachmentErrorPlaceholderV2.react",
	"MWV2Sticker.react",
	"MediaDownloadStatusIconSize",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = o("react-compiler-runtime").c(28), n = e.connectBottom, a = e.connectTop, i = e.dbAttachment, l = e.getPreviewUrl, c = e.mediaRenderQpl, d = e.outgoing, m = e.previewHeight, p = e.previewWidth, _ = e.shouldDisableAutoTriggerDownload, f, g;
		t[0] !== c ? (f = function() {
			c == null || c.addPoint("render-sticker-attachment");
		}, g = [c], t[0] = c, t[1] = f, t[2] = g) : (f = t[1], g = t[2]), u(f, g);
		var h;
		t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== c || t[7] !== d || t[8] !== m || t[9] !== p ? (h = function(t, o) {
			return s.jsx(r("MWV2AttachmentErrorPlaceholderV2.react"), {
				attachment: i,
				connectBottom: n,
				connectTop: a,
				hasAppAttribution: i.attributionAppName != null,
				height: m,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				isRetryableError: t,
				mediaRenderQpl: c,
				onRetry: o,
				outgoing: d,
				width: p
			});
		}, t[3] = n, t[4] = a, t[5] = i, t[6] = c, t[7] = d, t[8] = m, t[9] = p, t[10] = h) : h = t[10];
		var y = h, C;
		t[11] !== i || t[12] !== y || t[13] !== l || t[14] !== c ? (C = function(t) {
			return i.receiverFetchId != null && i.previewUrl == null ? t("MAWSecureStickerAttachmentContentV2.NoReceiverFetchMedia", !0) : s.jsx(r("CometPlaceholder.react"), {
				fallback: t("MAWSecureStickerAttachmentContentV2.Suspense", !0),
				name: "MAWSecureStickerAttachmentContentV2.Suspense",
				children: s.jsx(r("MWV2Sticker.react"), {
					attachment: i,
					getPreviewUrl: l,
					mediaRenderQpl: c,
					renderUnsupportedAttachment: function() {
						return y(!1);
					}
				})
			});
		}, t[11] = i, t[12] = y, t[13] = l, t[14] = c, t[15] = C) : C = t[15];
		var b = C, v = i.receiverFetchId != null ? i.messageId : i.attachmentFbid, S;
		return t[16] !== n || t[17] !== a || t[18] !== i || t[19] !== v || t[20] !== y || t[21] !== c || t[22] !== d || t[23] !== m || t[24] !== p || t[25] !== _ || t[26] !== b ? (S = s.jsx(r("MAWThreadViewAttachmentStateHandlerContent.react"), {
			connectBottom: n,
			connectTop: a,
			dbAttachment: i,
			descriptionForLogging: "MAWSecureStickerAttachmentContentV2",
			downloadStatusKeyOverride: v,
			errorComponentRenderer: y,
			mediaRenderQpl: c,
			outgoing: d,
			placeholderHeight: m,
			placeholderWidth: p,
			shouldDisableAutoTriggerDownload: _,
			successfulComponentRenderer: b
		}), t[16] = n, t[17] = a, t[18] = i, t[19] = v, t[20] = y, t[21] = c, t[22] = d, t[23] = m, t[24] = p, t[25] = _, t[26] = b, t[27] = S) : S = t[27], S;
	}
	l.default = c;
}), 98);
