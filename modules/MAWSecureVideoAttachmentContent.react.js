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
	"react-compiler-runtime",
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
		var t, n, a = o("react-compiler-runtime").c(71), i = e.connectBottom, l = e.connectTop, u = e.dbAttachment, c = e.getPlayableUrl, m = e.getPreviewUrl, p = e.mediaRenderQpl, f = e.message, g = e.outgoing, h = e.previewHeight, y = e.previewWidth, C = e.shouldDisableAutoTriggerDownload, b = C === void 0 ? !1 : C, v, S;
		a[0] !== p ? (v = function() {
			p == null || p.addPoint("render-video-attachment");
		}, S = [p], a[0] = p, a[1] = v, a[2] = S) : (v = a[1], S = a[2]), d(v, S);
		var R = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), L;
		a[3] !== u || a[4] !== R || a[5] !== h || a[6] !== y ? (L = o("MAWAttachmentSizeUtils").getMaxSizeForVideo({
			height: h,
			width: y
		}, R, u, !0), a[3] = u, a[4] = R, a[5] = h, a[6] = y, a[7] = L) : L = a[7];
		var E = L, k = E.maxHeight, I = E.maxWidth, T = (t = r("useShouldShowPlaybackErrorFallback")(u, p)) != null ? t : !1, D = (n = r("useShouldShowUnsupportedCodecFallback")(u, p)) != null ? n : !1, x;
		a[8] !== i || a[9] !== l || a[10] !== u || a[11] !== c || a[12] !== m || a[13] !== k || a[14] !== I || a[15] !== p || a[16] !== f || a[17] !== g || a[18] !== h || a[19] !== y ? (x = function(t, n, r) {
			return s.jsx(_, {
				connectBottom: i,
				connectTop: l,
				dbAttachment: u,
				errorMessage: r,
				getPlayableUrl: c,
				getPreviewUrl: m,
				isRetryableError: t,
				manualRetry: n,
				maxHeight: k,
				maxWidth: I,
				mediaRenderQpl: p,
				message: f,
				outgoing: g,
				previewHeight: h,
				previewWidth: y
			});
		}, a[8] = i, a[9] = l, a[10] = u, a[11] = c, a[12] = m, a[13] = k, a[14] = I, a[15] = p, a[16] = f, a[17] = g, a[18] = h, a[19] = y, a[20] = x) : x = a[20];
		var $ = x;
		if (T) {
			var P;
			return a[21] === Symbol.for("react.memo_cache_sentinel") ? (P = s.jsx(r("VultureJSDeadComponent.react"), { name: "MAWSecureVideoInvalidAttachment" }), a[21] = P) : P = a[21], P;
		}
		if (D) {
			var N = m != null ? m : c, M;
			return a[22] !== i || a[23] !== l || a[24] !== u || a[25] !== c || a[26] !== k || a[27] !== I || a[28] !== p || a[29] !== f || a[30] !== g || a[31] !== h || a[32] !== y || a[33] !== N ? (M = s.jsx(r("MAWSecureVideoUnsupportedCodecAttachment.react"), {
				connectBottom: i,
				connectTop: l,
				dbAttachment: u,
				getPlayableUrl: c,
				getPreviewUrl: N,
				height: h,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				maxHeight: k,
				maxWidth: I,
				mediaRenderQpl: p,
				message: f,
				outgoing: g,
				width: y
			}), a[22] = i, a[23] = l, a[24] = u, a[25] = c, a[26] = k, a[27] = I, a[28] = p, a[29] = f, a[30] = g, a[31] = h, a[32] = y, a[33] = N, a[34] = M) : M = a[34], M;
		}
		var w = u.gifPlayback === !0, A;
		a[35] !== l || a[36] !== u || a[37] !== $ || a[38] !== c || a[39] !== w || a[40] !== p || a[41] !== f || a[42] !== g ? (A = function(t) {
			return s.jsx(r("CometPlaceholder.react"), {
				fallback: t("MAWSecureVideoAttachmentContentV2.Suspense", !0),
				name: "MAWSecureVideoAttachmentContentV2.Suspense",
				children: s.jsx(r("MWV2ChatVideo.react"), {
					attachment: u,
					autoPlaySetting: w,
					connectTop: l,
					getPlayableUrl: c,
					gifPlayback: w,
					isSecure: !0,
					loops: w,
					mediaRenderQpl: p,
					message: f,
					navigateToRouteForMediaViewer: !1,
					outgoing: g,
					renderUnsupportedAttachment: function(t, n, r) {
						return $(!1, void 0, r);
					}
				})
			});
		}, a[35] = l, a[36] = u, a[37] = $, a[38] = c, a[39] = w, a[40] = p, a[41] = f, a[42] = g, a[43] = A) : A = a[43];
		var F = A, O;
		a[44] !== i || a[45] !== l || a[46] !== u || a[47] !== c || a[48] !== m || a[49] !== k || a[50] !== I || a[51] !== p || a[52] !== f || a[53] !== g || a[54] !== h || a[55] !== y ? (O = function(t, n) {
			return t ? s.jsx(r("MWV2AttachmentRetriableErrorPlaceholderWithBlurImage.react"), {
				connectBottom: i,
				connectTop: l,
				dbAttachment: u,
				getPreviewUrl: m != null ? m : c,
				height: h,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				maxHeight: k,
				maxWidth: I,
				mediaRenderQpl: p,
				message: f,
				onRetry: n,
				outgoing: g,
				width: y
			}) : s.jsx(r("MWV2AttachmentErrorPlaceholderWithBlurImage.react"), {
				connectBottom: i,
				connectTop: l,
				dbAttachment: u,
				getPreviewUrl: m != null ? m : c,
				height: h,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				maxHeight: k,
				maxWidth: I,
				mediaRenderQpl: p,
				message: f,
				outgoing: g,
				width: y
			});
		}, a[44] = i, a[45] = l, a[46] = u, a[47] = c, a[48] = m, a[49] = k, a[50] = I, a[51] = p, a[52] = f, a[53] = g, a[54] = h, a[55] = y, a[56] = O) : O = a[56];
		var B = O, W;
		return a[57] !== i || a[58] !== l || a[59] !== u || a[60] !== $ || a[61] !== B || a[62] !== k || a[63] !== I || a[64] !== p || a[65] !== g || a[66] !== h || a[67] !== y || a[68] !== b || a[69] !== F ? (W = s.jsx(r("MAWThreadViewAttachmentStateHandlerContent.react"), {
			connectBottom: i,
			connectTop: l,
			dbAttachment: u,
			descriptionForLogging: "MAWSecureVideoAttachmentContentV2",
			errorComponentRenderer: $,
			errorWithBlurComponentRenderer: B,
			mediaRenderQpl: p,
			outgoing: g,
			placeholderHeight: h,
			placeholderMaxHeight: k,
			placeholderMaxWidth: I,
			placeholderWidth: y,
			shouldDisableAutoTriggerDownload: b,
			successfulComponentRenderer: F
		}), a[57] = i, a[58] = l, a[59] = u, a[60] = $, a[61] = B, a[62] = k, a[63] = I, a[64] = p, a[65] = g, a[66] = h, a[67] = y, a[68] = b, a[69] = F, a[70] = W) : W = a[70], W;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(45), n = e.connectBottom, a = e.connectTop, i = e.dbAttachment, l = e.errorMessage, u = e.getPlayableUrl, c = e.getPreviewUrl, p = e.isRetryableError, _ = e.manualRetry, f = e.maxHeight, g = e.maxWidth, h = e.mediaRenderQpl, y = e.message, C = e.outgoing, b = e.previewHeight, v = e.previewWidth, S = r("useAsyncReStore")(), R;
		t[0] !== l ? (R = m(l), t[0] = l, t[1] = R) : R = t[1];
		var L = R, E = L === "image/gif" || L === "image/webp", k, I;
		if (t[2] !== i.attachmentFbid || t[3] !== S || t[4] !== p || t[5] !== h || t[6] !== E ? (k = function() {
			E ? h == null || h.addPoint("gif_fallback_to_image", { string: { fallback_reason: "video_playback_failed_for_image_gif" } }) : p || (o("MAWMediaSetMediaValidatedResult").call(S, i.attachmentFbid, { validatedMimeType: "unsupported-video" }), h == null || h.addPoint("browser_cant_play_video", { string: { invalid_media_reason: "browser_cant_play_video" } }));
		}, I = [
			i.attachmentFbid,
			S,
			p,
			h,
			E
		], t[2] = i.attachmentFbid, t[3] = S, t[4] = p, t[5] = h, t[6] = E, t[7] = k, t[8] = I) : (k = t[7], I = t[8]), d(k, I), E) {
			var T;
			return t[9] !== n || t[10] !== a || t[11] !== i || t[12] !== u || t[13] !== h || t[14] !== y || t[15] !== C || t[16] !== b || t[17] !== v ? (T = s.jsx(r("MAWSecureImageAttachmentContent.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: i,
				getPreviewUrl: u,
				mediaRenderQpl: h,
				message: y,
				outgoing: C,
				previewHeight: b,
				previewWidth: v
			}), t[9] = n, t[10] = a, t[11] = i, t[12] = u, t[13] = h, t[14] = y, t[15] = C, t[16] = b, t[17] = v, t[18] = T) : T = t[18], T;
		}
		if (!p) {
			var D = c != null ? c : u, x;
			return t[19] !== n || t[20] !== a || t[21] !== i || t[22] !== u || t[23] !== f || t[24] !== g || t[25] !== h || t[26] !== y || t[27] !== C || t[28] !== b || t[29] !== v || t[30] !== D ? (x = s.jsx(r("MAWSecureVideoUnsupportedCodecAttachment.react"), {
				connectBottom: n,
				connectTop: a,
				dbAttachment: i,
				getPlayableUrl: u,
				getPreviewUrl: D,
				height: b,
				iconSize: r("MediaDownloadStatusIconSize").Large,
				maxHeight: f,
				maxWidth: g,
				mediaRenderQpl: h,
				message: y,
				outgoing: C,
				width: v
			}), t[19] = n, t[20] = a, t[21] = i, t[22] = u, t[23] = f, t[24] = g, t[25] = h, t[26] = y, t[27] = C, t[28] = b, t[29] = v, t[30] = D, t[31] = x) : x = t[31], x;
		}
		var $ = i.attributionAppName != null, P;
		return t[32] !== n || t[33] !== a || t[34] !== i || t[35] !== p || t[36] !== _ || t[37] !== f || t[38] !== g || t[39] !== h || t[40] !== C || t[41] !== b || t[42] !== v || t[43] !== $ ? (P = s.jsx(r("MWV2AttachmentErrorPlaceholderV2.react"), {
			attachment: i,
			connectBottom: n,
			connectTop: a,
			hasAppAttribution: $,
			height: b,
			iconSize: r("MediaDownloadStatusIconSize").Large,
			isRetryableError: p,
			maxHeight: f,
			maxWidth: g,
			mediaRenderQpl: h,
			onRetry: _,
			outgoing: C,
			width: v
		}), t[32] = n, t[33] = a, t[34] = i, t[35] = p, t[36] = _, t[37] = f, t[38] = g, t[39] = h, t[40] = C, t[41] = b, t[42] = v, t[43] = $, t[44] = P) : P = t[44], P;
	}
	l.default = p;
}), 98);
