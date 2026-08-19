__d("WAWebVoipUiBodyAudioToVideoOverlay.react", [
	"WAWebVoipUiBodyStyles",
	"WAWebVoipVoiceCallContainer.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(15), a = t.callLogMsg, i = t.callState, l = t.hasCameraAvailable, s = t.isCallActive, c = t.isCallOutgoing, d = t.isCompactLayout, m = t.isSelfHandRaised, p = t.isSelfScreenSharing, _ = t.isTabVisible, f = t.isVideoCall, g = t.isVideoMuted, h = t.peerMicMuted, y = t.selfMicMuted, C;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (C = (e || (e = r("stylex"))).props(o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.audioToVideoOverlayBase, o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.audioToVideoOverlay), n[0] = C) : C = n[0];
		var b;
		return n[1] !== a || n[2] !== i || n[3] !== l || n[4] !== s || n[5] !== c || n[6] !== d || n[7] !== m || n[8] !== p || n[9] !== _ || n[10] !== f || n[11] !== g || n[12] !== h || n[13] !== y ? (b = u.jsx("div", babelHelpers.extends({
			"aria-hidden": !0,
			"data-testid": "voip_audio_to_video_overlay"
		}, C, { children: u.jsx(r("WAWebVoipVoiceCallContainer.react"), {
			anchorContentTop: !0,
			callLogMsg: a,
			callState: i,
			hasCameraAvailable: l,
			isCallActive: s,
			isCallOutgoing: c,
			isCompactLayout: d,
			isSelfHandRaised: m,
			isSelfScreenSharing: p,
			isTabVisible: _,
			isVideoCall: f,
			isVideoMuted: g,
			peerMicMuted: h,
			selfMicMuted: y
		}) })), n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = d, n[7] = m, n[8] = p, n[9] = _, n[10] = f, n[11] = g, n[12] = h, n[13] = y, n[14] = b) : b = n[14], b;
	}
	l.default = c;
}), 98);
