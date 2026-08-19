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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(76), n = e.attachmentsFromGroupToRetry, a = e.connectBottom, i = e.connectTop, l = e.dbAttachment, c = e.getPreviewUrl, p = e.isGroupedImage, _ = e.mediaRenderQpl, f = e.message, g = e.outgoing, h = e.previewHeight, y = e.previewWidth, C = e.shouldDisableAutoTriggerDownload, b = C === void 0 ? !1 : C, v = o("MWAnimatedImageControlsUtil").useGetMessengerAutoplaySetting(), S = m(!1), R = S[0], L = S[1], E, k;
		t[0] !== _ ? (E = function() {
			_ == null || _.addPoint("render-image-attachment");
		}, k = [_], t[0] = _, t[1] = E, t[2] = k) : (E = t[1], k = t[2]), d(E, k);
		var I = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), T = I != null ? I : void 0, D;
		t[3] !== p || t[4] !== T ? (D = o("MWMessageListImageSizingUtils").getMaxPreviewHeightAndWidth(!0, T, p), t[3] = p, t[4] = T, t[5] = D) : D = t[5];
		var x = D, $ = x.maxHeight, P = x.maxWidth, N;
		t[6] !== l ? (N = l != null && ((s || (s = o("I64"))).to_int32(l.attachmentType) === r("MessagingAttachmentType").ANIMATED_IMAGE || (l == null ? void 0 : l.gifPlayback) === !0), t[6] = l, t[7] = N) : N = t[7];
		var M = N;
		if (f == null || l == null) {
			var w = (l == null ? void 0 : l.attributionAppName) != null, A;
			t[8] !== a || t[9] !== i || t[10] !== $ || t[11] !== P || t[12] !== _ || t[13] !== g || t[14] !== h || t[15] !== y || t[16] !== w ? (A = u.jsx(r("MWV2AttachmentLoadingPlaceholder.react"), {
				connectBottom: a,
				connectTop: i,
				descriptionForLogging: "MAWSecureImageAttachmentContent.NoMedia",
				hasAppAttribution: w,
				height: h,
				maxHeight: $,
				maxWidth: P,
				mediaRenderQpl: _,
				outgoing: g,
				width: y
			}), t[8] = a, t[9] = i, t[10] = $, t[11] = P, t[12] = _, t[13] = g, t[14] = h, t[15] = y, t[16] = w, t[17] = A) : A = t[17];
			var F;
			t[18] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx(r("CometHeroHoldTrigger.react"), {
				description: "MAWSecureImageAttachmentContent.NoMedia",
				hold: !0
			}), t[18] = F) : F = t[18];
			var O;
			return t[19] !== A ? (O = u.jsxs(u.Fragment, { children: [A, F] }), t[19] = A, t[20] = O) : O = t[20], O;
		}
		var B;
		t[21] !== a || t[22] !== i || t[23] !== l || t[24] !== $ || t[25] !== P || t[26] !== _ || t[27] !== g || t[28] !== h || t[29] !== y ? (B = function(t, n) {
			return u.jsx(r("MWV2AttachmentErrorPlaceholderV2.react"), {
				attachment: l,
				connectBottom: a,
				connectTop: i,
				hasAppAttribution: l.attributionAppName != null,
				height: h,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				isRetryableError: t,
				maxHeight: $,
				maxWidth: P,
				mediaRenderQpl: _,
				onRetry: n,
				outgoing: g,
				width: y
			});
		}, t[21] = a, t[22] = i, t[23] = l, t[24] = $, t[25] = P, t[26] = _, t[27] = g, t[28] = h, t[29] = y, t[30] = B) : B = t[30];
		var W = B, q;
		t[31] !== a || t[32] !== i || t[33] !== l || t[34] !== c || t[35] !== p || t[36] !== $ || t[37] !== P || t[38] !== _ || t[39] !== f || t[40] !== g || t[41] !== h || t[42] !== y ? (q = function(t, n) {
			return t ? u.jsx(r("MWV2AttachmentRetriableErrorPlaceholderWithBlurImage.react"), {
				connectBottom: a,
				connectTop: i,
				dbAttachment: l,
				getPreviewUrl: c,
				height: h,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				isGroupedImage: p,
				maxHeight: $,
				maxWidth: P,
				mediaRenderQpl: _,
				message: f,
				onRetry: n,
				outgoing: g,
				width: y
			}) : u.jsx(r("MWV2AttachmentErrorPlaceholderWithBlurImage.react"), {
				connectBottom: a,
				connectTop: i,
				dbAttachment: l,
				getPreviewUrl: c,
				height: h,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				isGroupedImage: p,
				maxHeight: $,
				maxWidth: P,
				mediaRenderQpl: _,
				message: f,
				outgoing: g,
				width: y
			});
		}, t[31] = a, t[32] = i, t[33] = l, t[34] = c, t[35] = p, t[36] = $, t[37] = P, t[38] = _, t[39] = f, t[40] = g, t[41] = h, t[42] = y, t[43] = q) : q = t[43];
		var U = q, V;
		t[44] !== v || t[45] !== a || t[46] !== i || t[47] !== l || t[48] !== W || t[49] !== c || t[50] !== M || t[51] !== R || t[52] !== p || t[53] !== $ || t[54] !== P || t[55] !== _ || t[56] !== f || t[57] !== g || t[58] !== h || t[59] !== y ? (V = function(t) {
			if (f == null) return t("MAWSecureImageAttachmentContentV2.NoMessage", !1);
			var e = M && v !== o("MWAnimatedImageControlsUtil").MWAutoplayAnimationsSetting.ON;
			return u.jsx(r("CometPlaceholder.react"), {
				fallback: t("MAWSecureImageAttachmentContentV2.Suspense", !0),
				name: "MAWSecureImageAttachmentContentV2.Suspense",
				children: e && R === !1 ? u.jsx(o("MWAnimatedImageThumbnailWithPlayButton.react").MWAnimatedImageThumbnailWithPlayButton, {
					connectBottom: a,
					connectTop: i,
					dbAttachment: l,
					entryPoint: o("MWAnimatedImageThumbnailWithPlayButton.react").AnimatedImageEntryPoint.Thread,
					isSecure: !0,
					mediaRenderQpl: _,
					message: f,
					onPlay: function() {
						return L(!0);
					},
					outgoing: g,
					previewHeight: h,
					previewWidth: y,
					testid: void 0
				}) : u.jsx(r("MWV2ChatImage.react"), {
					attachment: l,
					connectBottom: a,
					connectTop: i,
					getPreviewUrl: c,
					isGroupedImage: p,
					isSecure: !0,
					maxHeight: $,
					maxWidth: P,
					mediaRenderQpl: _,
					message: f,
					navigateToRouteForMediaViewer: !1,
					onPressOverride: e ? function() {
						return L(!1);
					} : void 0,
					outgoing: g,
					renderUnsupportedAttachment: function() {
						return W(!1);
					}
				})
			});
		}, t[44] = v, t[45] = a, t[46] = i, t[47] = l, t[48] = W, t[49] = c, t[50] = M, t[51] = R, t[52] = p, t[53] = $, t[54] = P, t[55] = _, t[56] = f, t[57] = g, t[58] = h, t[59] = y, t[60] = V) : V = t[60];
		var H = V, G;
		return t[61] !== n || t[62] !== a || t[63] !== i || t[64] !== l || t[65] !== W || t[66] !== U || t[67] !== $ || t[68] !== P || t[69] !== _ || t[70] !== g || t[71] !== h || t[72] !== y || t[73] !== b || t[74] !== H ? (G = u.jsx(r("MAWThreadViewAttachmentStateHandlerContent.react"), {
			attachmentsFromGroupToRetry: n,
			connectBottom: a,
			connectTop: i,
			dbAttachment: l,
			descriptionForLogging: "MAWSecureImageAttachmentContentV2",
			errorComponentRenderer: W,
			errorWithBlurComponentRenderer: U,
			mediaRenderQpl: _,
			outgoing: g,
			placeholderHeight: h,
			placeholderMaxHeight: $,
			placeholderMaxWidth: P,
			placeholderWidth: y,
			shouldDisableAutoTriggerDownload: b,
			successfulComponentRenderer: H
		}), t[61] = n, t[62] = a, t[63] = i, t[64] = l, t[65] = W, t[66] = U, t[67] = $, t[68] = P, t[69] = _, t[70] = g, t[71] = h, t[72] = y, t[73] = b, t[74] = H, t[75] = G) : G = t[75], G;
	}
	l.default = p;
}), 98);
