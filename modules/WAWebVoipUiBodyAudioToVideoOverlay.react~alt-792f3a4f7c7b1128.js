__d("WAWebVoipUiBodyAudioToVideoOverlay.react", [
	"WAWebVoipUiBodyStyles",
	"WAWebVoipVoiceCallContainer.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = t.callLogMsg, a = t.callState, i = t.hasCameraAvailable, l = t.isCallActive, s = t.isCallOutgoing, c = t.isCompactLayout, d = t.isSelfHandRaised, m = t.isSelfScreenSharing, p = t.isTabVisible, _ = t.isVideoCall, f = t.isVideoMuted, g = t.peerMicMuted, h = t.selfMicMuted;
		return u.jsx("div", babelHelpers.extends({
			"aria-hidden": !0,
			"data-testid": "voip_audio_to_video_overlay"
		}, (e || (e = r("stylex"))).props(o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.audioToVideoOverlayBase, o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.audioToVideoOverlay), { children: u.jsx(r("WAWebVoipVoiceCallContainer.react"), {
			anchorContentTop: !0,
			callLogMsg: n,
			callState: a,
			hasCameraAvailable: i,
			isCallActive: l,
			isCallOutgoing: s,
			isCompactLayout: c,
			isSelfHandRaised: d,
			isSelfScreenSharing: m,
			isTabVisible: p,
			isVideoCall: _,
			isVideoMuted: f,
			peerMicMuted: g,
			selfMicMuted: h
		}) }));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
