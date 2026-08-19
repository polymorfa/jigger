__d("MWAudioPlayer.react", [
	"I64",
	"MWMediaRenderQplUtils",
	"MWPAudioHighlightStylesHooks",
	"MWPAudioPlaybackButton.react",
	"MWPAudioPlayerButtons.react",
	"MWPAudioPlayerContainer.react",
	"MWPAudioPlayerHighlight.react",
	"MWPAudioPlayerKeyCommands.react",
	"MWPAudioPlayerSharedStyles",
	"MWPAudioPlayerTimer.react",
	"MWPAudioPlayerUtils",
	"MWXMessageBubbleCornerStyles.react",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"stylex",
	"useMAWMediaDownloadStatus",
	"useMWNextAttachment",
	"useMWPAudioWaveformData.react",
	"useMWPMarkAudioAttachmentAsConsumed.react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = s || (s = o("react")), d = s, m = d.useEffect, p = d.useRef, _ = r("requireDeferred")("MWChatAudioLog").__setRef("MWAudioPlayer.react");
	function f() {
		_.onReady(function(e) {
			return e.logBrowserDenyAccess();
		});
	}
	function g(t) {
		var n = o("react-compiler-runtime").c(67), a = t.attachment, i = t.connectBottom, l = t.connectTop, s = t.getPlayableUrl, d = t.isReply, _ = t.isSecure, g = t.mediaRenderQpl, h = t.message, y = t.outgoing, C = t.renderUnsupportedAttachment, b = t.width, v = d === void 0 ? !1 : d, S = a.playableDurationMs, R = (u || (u = o("I64"))).to_float(S != null ? S : (u || (u = o("I64"))).zero) / 1e3, L = r("useMWNextAttachment")(a, h), E = _ ? L : null, k = r("useMAWMediaDownloadStatus")(E, g), I = k.uiState, T;
		n[0] !== a || n[1] !== s || n[2] !== g ? (T = s(a, "MWAudioPlayer", g), n[0] = a, n[1] = s, n[2] = g, n[3] = T) : T = n[3];
		var D = T, x = r("useMWPAudioWaveformData.react")(a, D), $ = o("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({
			align: y === !0 ? "right" : "left",
			connectBottom: i,
			connectTop: l
		}), P;
		n[4] !== s || n[5] !== L || n[6] !== I ? (P = L != null && (I == null || I === "downloaded") ? s(L, "MWAudioPlayer") : void 0, n[4] = s, n[5] = L, n[6] = I, n[7] = P) : P = n[7];
		var N = o("MWPAudioPlayerUtils").useControlCenter(D, P, h.messageId, L == null ? void 0 : L.messageId, f, !1, R, g, x, _, a.attachmentFbid), M = N[0], w = N[1], A = N[2], F = N[3], O = N[4], B = N[5];
		r("useMWPMarkAudioAttachmentAsConsumed.react")(A, a);
		var W;
		if (n[8] !== h.ephemeralDurationInSec) {
			var q;
			W = (u || (u = o("I64"))).gt((q = h.ephemeralDurationInSec) != null ? q : (u || (u = o("I64"))).zero, u.zero), n[8] = h.ephemeralDurationInSec, n[9] = W;
		} else W = n[9];
		var U = W, V = M === o("MWPAudioPlayerUtils").State.NONE, H = M === o("MWPAudioPlayerUtils").State.PLAYING, G = M === o("MWPAudioPlayerUtils").State.PAUSED, z = M === o("MWPAudioPlayerUtils").State.LOADING, j = M === o("MWPAudioPlayerUtils").State.ENDED, K = H || G, Q = p(), X = o("MWPAudioHighlightStylesHooks").useHighlightStyles(y), Y = o("MWPAudioPlayerUtils").useCalculatePlayerWidth(b, U), J = Y + "px", Z;
		n[10] !== J ? (Z = { width: J }, n[10] = J, n[11] = Z) : Z = n[11];
		var ee = Z, te = K ? Math.max(R - w, 0) : 0, ne, re;
		if (n[12] !== R || n[13] !== U || n[14] !== g || n[15] !== L || n[16] !== D || n[17] !== x ? (ne = function() {
			g == null || g.addPoint("render-audio-player", {
				bool: {
					has_next_attachment: L != null,
					has_non_zero_duration: R > 0,
					has_playable_url: !!D,
					has_waveform: x != null,
					is_disappearing_message: U
				},
				string: { audio_blob_duration_bucket: o("MWMediaRenderQplUtils").convertDurationToStringBucket(R) }
			});
		}, re = [
			R,
			U,
			g,
			L,
			D,
			x
		], n[12] = R, n[13] = U, n[14] = g, n[15] = L, n[16] = D, n[17] = x, n[18] = ne, n[19] = re) : (ne = n[18], re = n[19]), m(ne, re), (D == null || D.length === 0) && (g == null || g.endFailAfterDelay("empty_preview_url"), C != null)) {
			var oe;
			return n[20] !== a || n[21] !== C ? (oe = C(a), n[20] = a, n[21] = C, n[22] = oe) : oe = n[22], oe;
		}
		var ae = r("MWPAudioPlayerKeyCommands.react"), ie = r("MWPAudioPlayerContainer.react"), le = "mw_audio_player", se = o("MWPAudioPlayerUtils").UseCase, ue = (e || (e = r("stylex"))).props(o("MWPAudioPlayerSharedStyles").styles.common, $, y ? o("MWPAudioPlayerSharedStyles").styles.commonOutgoing : o("MWPAudioPlayerSharedStyles").styles.commonIncoming, v && o("MWPAudioPlayerSharedStyles").styles.commonReply, y && v && o("MWPAudioPlayerSharedStyles").styles.commonOutgoingReply), ce = a.isAttachmentConsumed === !0, de;
		n[23] !== V || n[24] !== j || n[25] !== z || n[26] !== G || n[27] !== H || n[28] !== F || n[29] !== y ? (de = c.jsx(r("MWPAudioPlaybackButton.react"), {
			disabled: V,
			hasEnded: j,
			isLoading: z,
			isPaused: G,
			isPlaying: H,
			onPress: F,
			outgoing: y,
			scrubberRef: Q
		}), n[23] = V, n[24] = j, n[25] = z, n[26] = G, n[27] = H, n[28] = F, n[29] = y, n[30] = de) : de = n[30];
		var me;
		n[31] !== a.attachmentFbid || n[32] !== A || n[33] !== w || n[34] !== R || n[35] !== j || n[36] !== K || n[37] !== X || n[38] !== H || n[39] !== _ || n[40] !== B || n[41] !== y || n[42] !== O || n[43] !== ce || n[44] !== de || n[45] !== x ? (me = c.jsx(o("MWPAudioPlayerHighlight.react").MWPAudioPlayerHighlightV2, {
			attachmentId: a.attachmentFbid,
			audioEl: A,
			currentTime: w,
			duration: R,
			hasEnded: j,
			hasScrubber: K,
			isListened: ce,
			isPlaying: H,
			isSecure: _,
			onUpdateScrubber: B,
			outgoing: y,
			progressHighlightRef: O,
			scrubberRef: Q,
			waveformData: x,
			xstyle: X,
			children: de
		}), n[31] = a.attachmentFbid, n[32] = A, n[33] = w, n[34] = R, n[35] = j, n[36] = K, n[37] = X, n[38] = H, n[39] = _, n[40] = B, n[41] = y, n[42] = O, n[43] = ce, n[44] = de, n[45] = x, n[46] = me) : me = n[46];
		var pe;
		n[47] !== H || n[48] !== y || n[49] !== te ? (pe = c.jsx("div", { children: H ? c.jsxs(c.Fragment, { children: [c.jsx(r("MWPAudioPlayerTimer.react"), {
			outgoing: y,
			time: te
		}), c.jsx(o("MWPAudioPlayerButtons.react").PlaybackRateButton, { outgoing: y })] }) : c.jsx(r("MWPAudioPlayerTimer.react"), {
			outgoing: y,
			time: te
		}) }), n[47] = H, n[48] = y, n[49] = te, n[50] = pe) : pe = n[50];
		var _e;
		n[51] !== ue || n[52] !== me || n[53] !== pe ? (_e = c.jsxs("div", babelHelpers.extends({}, ue, { children: [me, pe] })), n[51] = ue, n[52] = me, n[53] = pe, n[54] = _e) : _e = n[54];
		var fe;
		n[55] !== ie || n[56] !== A || n[57] !== K || n[58] !== g || n[59] !== ee || n[60] !== se.PLAYER || n[61] !== _e ? (fe = c.jsx(ie, {
			audioEl: A,
			hasScrubber: K,
			mediaRenderQpl: g,
			scrubberRef: Q,
			style: ee,
			testid: void 0,
			useCase: se.PLAYER,
			children: _e
		}), n[55] = ie, n[56] = A, n[57] = K, n[58] = g, n[59] = ee, n[60] = se.PLAYER, n[61] = _e, n[62] = fe) : fe = n[62];
		var ge;
		return n[63] !== ae || n[64] !== A || n[65] !== fe ? (ge = c.jsx(ae, {
			audioEl: A,
			children: fe
		}), n[63] = ae, n[64] = A, n[65] = fe, n[66] = ge) : ge = n[66], ge;
	}
	l.default = g;
}), 98);
