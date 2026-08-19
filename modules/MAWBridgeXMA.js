__d("MAWBridgeXMA", [
	"MAWBridgeXMAUtils",
	"MAWDbMedia",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		if (e != null) switch (e) {
			case "Image":
			case "Sticker": return "image/png";
			case "Gif": return "image/gif";
			case "Video": return "video/mp4";
			case "Ptt": return "audio/wav";
		}
	}
	function u(t, n, r) {
		var a, i, l, u, c = n.author, d = n.contentRef, m = n.ctas, p = n.defaultCTA, _ = n.defaultPreviewMediaId, f = n.defaultPreviewMediaPlaintextHash, g = n.faviconMediaId, h = n.faviconPlaintextHash, y = n.headerMediaId, C = n.headerMediaPlaintextHash, b = n.headerTitle, v = n.maxSubtitleNumOfLines, S = n.maxTitleNumOfLines, R = n.msgId, L = n.offlineAttachmentId, E = n.overlayIconGlyph, k = n.overlayTitle, I = n.subtitleText, T = n.targetId, D = n.targetType, x = n.targetUsername, $ = n.threadJid, P = n.titleText, N = n.xmaDataclass, M = n.xmaId, w = n.xmaLayoutType;
		t != null && t.mediaType !== o("MAWDbMedia").MEDIA_TYPE.IMAGE && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["MAWBridge - createBridgeXMA received unexpected media type - ", ""])), t.mediaType), T != null && o("MAWBridgeXMAUtils").maybeBridgeToLSTargetId(T, D);
		var A = r.hasMedia, F = r.hasXmaFaviconMedia, O = r.hasXmaHeaderMedia;
		return {
			author: c,
			contentRef: d,
			ctas: m == null ? void 0 : m.filter(function(e) {
				return e.ctaType != null;
			}),
			defaultCTA: p,
			defaultPreviewMediaId: _,
			defaultPreviewMediaPlaintextHash: f,
			duration: null,
			faviconMediaId: g,
			faviconPlaintextHash: h,
			filesize: t == null ? void 0 : t.size,
			hasMedia: A,
			hasXmaFaviconMedia: F,
			hasXmaHeaderMedia: O,
			headerMediaId: y,
			headerMediaPlaintextHash: C,
			headerTitle: b,
			maxSubtitleNumOfLines: v,
			maxTitleNumOfLines: S,
			mediaType: t == null ? void 0 : t.mediaType,
			msgId: R,
			offlineAttachmentId: L,
			overlayIconGlyph: E,
			overlayTitle: k,
			playableUrlMimeType: s(t == null ? void 0 : t.mediaType),
			previewHeight: t == null || (a = t.validatedImageInfo) == null ? void 0 : a.jpegThumbnailHeight,
			previewHeightLarge: t == null || (i = t.validatedImageInfo) == null ? void 0 : i.height,
			previewUrlMimeType: s(t == null ? void 0 : t.mediaType),
			previewWidth: t == null || (l = t.validatedImageInfo) == null ? void 0 : l.jpegThumbnailWidth,
			previewWidthLarge: t == null || (u = t.validatedImageInfo) == null ? void 0 : u.width,
			subtitleText: I,
			targetId: T,
			targetType: D,
			targetUsername: x,
			threadJid: $,
			titleText: P,
			ts: t == null ? void 0 : t.ts,
			xmaDataclass: N,
			xmaId: M,
			xmaLayoutType: w
		};
	}
	function c(e, t) {
		var n = e.msgId, r = e.threadJid;
		return {
			msgId: n,
			threadJid: r,
			xmaId: t
		};
	}
	function d(e, t) {
		var n = e.msgId, r = e.threadJid;
		return {
			msgId: n,
			threadJid: r,
			xmaId: t
		};
	}
	l.mediaTypeToMimeType = s, l.createBridgeXMA = u, l.createBridgeXMAShareExpired = c, l.createBridgeXMAShareTombstoned = d;
}), 98);
