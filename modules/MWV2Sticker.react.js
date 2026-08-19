__d("MWV2Sticker.react", [
	"I64",
	"MAWImageUtils",
	"MWChatImageSize",
	"MWLSThreadDisplayContext",
	"MWV2ChatEmojiHotLike.react",
	"Sticker.react",
	"getMWHotlikeSizeFromStickerId",
	"getMWIsDefaultHotlikeStickerId",
	"gkx",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = s || (s = o("react")), d = s, m = d.useEffect, p = d.useMemo;
	function _(e) {
		var t = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), n, r = t != null && t === "Inbox" ? .75 : .5;
		return e < 60 ? n = 1 : e > o("MAWImageUtils").STICKER_THUMBNAIL_MAX_SIZE ? n = o("MAWImageUtils").STICKER_THUMBNAIL_MAX_SIZE / e : n = r, n;
	}
	function f(t) {
		var n, a = o("react-compiler-runtime").c(33), i = t.attachment, l = t.getPreviewUrl, s = t.mediaRenderQpl, d = t.renderUnsupportedAttachment, p = t.scale, f = t.xstyle, g;
		a[0] !== i || a[1] !== l || a[2] !== s ? (g = l(i, "MWV2Sticker", s), a[0] = i, a[1] = l, a[2] = s, a[3] = g) : g = a[3];
		var h = g, y;
		a[4] !== i.previewHeight ? (y = i.previewHeight != null ? (u || (u = o("I64"))).to_int32(i.previewHeight) : void 0, a[4] = i.previewHeight, a[5] = y) : y = a[5];
		var C = y, b;
		a[6] !== i.previewWidth ? (b = i.previewWidth != null ? (u || (u = o("I64"))).to_int32(i.previewWidth) : void 0, a[6] = i.previewWidth, a[7] = b) : b = a[7];
		var v = b, S = _(C != null ? C : 120), R = v != null && C != null, L = o("MWChatImageSize").useImageSize(h, R), E;
		a[8] !== C || a[9] !== L || a[10] !== v ? (E = v != null && C != null ? [v, C] : L != null ? [L.width, L.height] : [24, 24], a[8] = C, a[9] = L, a[10] = v, a[11] = E) : E = a[11];
		var k = E, I = k[0], T = k[1], D, x;
		if (a[12] !== s || a[13] !== h ? (D = function() {
			h == null || h.length === 0 ? s == null || s.endFailAfterDelay("load-image-error") : (s == null || s.addPoint("render-sticker"), s == null || s.endSuccessAfterDelay());
		}, x = [h, s], a[12] = s, a[13] = h, a[14] = D, a[15] = x) : (D = a[14], x = a[15]), m(D, x), r("getMWIsDefaultHotlikeStickerId")(i.attachmentFbid) && !r("gkx")("23249")) {
			var $;
			a[16] !== i.attachmentFbid ? ($ = r("getMWHotlikeSizeFromStickerId")(i.attachmentFbid), a[16] = i.attachmentFbid, a[17] = $) : $ = a[17];
			var P;
			return a[18] !== $ ? (P = c.jsx(r("MWV2ChatEmojiHotLike.react"), { hotEmojiSize: $ }), a[18] = $, a[19] = P) : P = a[19], P;
		}
		if (h == null || h.length === 0) {
			var N;
			return a[20] !== i || a[21] !== d ? (N = d != null ? d(i) : null, a[20] = i, a[21] = d, a[22] = N) : N = a[22], N;
		}
		var M = (n = i.accessibilitySummaryText) != null ? n : "", w;
		a[23] !== f ? (w = (e || (e = r("stylex")))(f), a[23] = f, a[24] = w) : w = a[24];
		var A = p != null ? p : S, F;
		return a[25] !== i.attachmentFbid || a[26] !== T || a[27] !== I || a[28] !== M || a[29] !== w || a[30] !== A || a[31] !== h ? (F = c.jsx(r("Sticker.react"), {
			accessibilityLabel: M,
			animationTrigger: "load_and_hover",
			className: w,
			customColor: "var(--chat-composer-button-color)",
			enablePopoverIfPassesGK: !0,
			frameCount: 0,
			frameRate: void 0,
			framesPerCol: 0,
			framesPerRow: 0,
			packID: void 0,
			paddedSpriteURI: void 0,
			scale: A,
			sourceHeight: T,
			sourceURI: h,
			sourceWidth: I,
			spriteURI: void 0,
			stickerID: i.attachmentFbid,
			tabIndex: -1,
			testid: void 0
		}), a[25] = i.attachmentFbid, a[26] = T, a[27] = I, a[28] = M, a[29] = w, a[30] = A, a[31] = h, a[32] = F) : F = a[32], F;
	}
	l.default = f;
}), 98);
