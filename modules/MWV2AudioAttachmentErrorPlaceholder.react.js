__d("MWV2AudioAttachmentErrorPlaceholder.react", [
	"I64",
	"MWPAudioHighlightStylesHooks",
	"MWPAudioPlaybackButton.react",
	"MWPAudioPlayerContainer.react",
	"MWPAudioPlayerHighlight.react",
	"MWPAudioPlayerSharedStyles",
	"MWPAudioPlayerTimer.react",
	"MWPAudioPlayerUtils",
	"MWXMessageBubbleCornerStyles.react",
	"emptyFunction",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = s || (s = o("react")), d = s, m = d.useEffect, p = d.useRef;
	function _(t) {
		var n = o("react-compiler-runtime").c(35), a = t.attachment, i = t.connectBottom, l = t.connectTop, s = t.isReply, d = t.isRetryableError, _ = t.mediaRenderQpl, f = t.message, g = t.onRetry, h = t.outgoing, y = t.width, C = s === void 0 ? !1 : s, b = a.playableDurationMs, v = (u || (u = o("I64"))).to_float(b != null ? b : (u || (u = o("I64"))).zero) / 1e3, S = o("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
			align: h === !0 ? "right" : "left",
			connectBottom: i,
			connectTop: l
		}), R = o("MWPAudioPlayerUtils").useControlCenter(void 0, void 0, f.messageId, void 0, r("emptyFunction"), !1, v, _, null, !1), L = R[2], E = R[4], k;
		if (n[0] !== f.ephemeralDurationInSec) {
			var I;
			k = (u || (u = o("I64"))).gt((I = f.ephemeralDurationInSec) != null ? I : (u || (u = o("I64"))).zero, u.zero), n[0] = f.ephemeralDurationInSec, n[1] = k;
		} else k = n[1];
		var T = k, D = p(), x = o("MWPAudioHighlightStylesHooks").useHighlightStyles(h), $ = o("MWPAudioPlayerUtils").useCalculatePlayerWidth(y, T), P = $ + "px", N;
		n[2] !== P ? (N = { width: P }, n[2] = P, n[3] = N) : N = n[3];
		var M = N, w, A;
		n[4] !== d || n[5] !== _ ? (w = function() {
			_ == null || _.addPoint("render-audio-error-placeholder", { bool: { is_retryable_error: d } });
		}, A = [_, d], n[4] = d, n[5] = _, n[6] = w, n[7] = A) : (w = n[6], A = n[7]), m(w, A);
		var F = r("MWPAudioPlayerContainer.react"), O = !1, B = null, W = "mw_audio_player_error_placeholder", q = o("MWPAudioPlayerUtils").UseCase, U = (e || (e = r("stylex"))).props(o("MWPAudioPlayerSharedStyles").styles.common, S, h ? o("MWPAudioPlayerSharedStyles").styles.commonOutgoing : o("MWPAudioPlayerSharedStyles").styles.commonIncoming, C && o("MWPAudioPlayerSharedStyles").styles.commonReply, h && C && o("MWPAudioPlayerSharedStyles").styles.commonOutgoingReply), V = a.isAttachmentConsumed === !0, H;
		n[8] !== g ? (H = function() {
			g && g();
		}, n[8] = g, n[9] = H) : H = n[9];
		var G;
		n[10] !== d || n[11] !== h || n[12] !== H ? (G = c.jsx(r("MWPAudioPlaybackButton.react"), {
			disabled: !0,
			hasEnded: !1,
			isError: !0,
			isLoading: !1,
			isPaused: !1,
			isPlaying: !1,
			isRetryableError: d,
			onPress: H,
			outgoing: h,
			scrubberRef: D
		}), n[10] = d, n[11] = h, n[12] = H, n[13] = G) : G = n[13];
		var z;
		n[14] !== L || n[15] !== v || n[16] !== x || n[17] !== h || n[18] !== E || n[19] !== V || n[20] !== G ? (z = c.jsx(o("MWPAudioPlayerHighlight.react").MWPAudioPlayerHighlightV2, {
			audioEl: L,
			currentTime: v,
			disabled: !0,
			duration: v,
			hasEnded: !1,
			hasScrubber: !1,
			isListened: V,
			isPlaying: !1,
			onUpdateScrubber: r("emptyFunction"),
			outgoing: h,
			progressHighlightRef: E,
			scrubberRef: D,
			waveformData: null,
			xstyle: x,
			children: G
		}), n[14] = L, n[15] = v, n[16] = x, n[17] = h, n[18] = E, n[19] = V, n[20] = G, n[21] = z) : z = n[21];
		var j;
		n[22] !== v || n[23] !== h ? (j = c.jsx("div", { children: c.jsx(r("MWPAudioPlayerTimer.react"), {
			disabled: !0,
			outgoing: h,
			time: v
		}) }), n[22] = v, n[23] = h, n[24] = j) : j = n[24];
		var K;
		n[25] !== U || n[26] !== z || n[27] !== j ? (K = c.jsxs("div", babelHelpers.extends({}, U, { children: [z, j] })), n[25] = U, n[26] = z, n[27] = j, n[28] = K) : K = n[28];
		var Q;
		return n[29] !== F || n[30] !== L || n[31] !== M || n[32] !== q.PLAYER || n[33] !== K ? (Q = c.jsx(F, {
			audioEl: L,
			hasScrubber: O,
			mediaRenderQpl: B,
			scrubberRef: D,
			style: M,
			testid: void 0,
			useCase: q.PLAYER,
			children: K
		}), n[29] = F, n[30] = L, n[31] = M, n[32] = q.PLAYER, n[33] = K, n[34] = Q) : Q = n[34], Q;
	}
	l.default = _;
}), 98);
