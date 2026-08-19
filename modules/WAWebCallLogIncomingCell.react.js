__d("WAWebCallLogIncomingCell.react", [
	"fbt",
	"WAWebCallsTabCallCell.react",
	"WAWebPipController",
	"WAWebVoipEventConstants",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebVoipCallHandlers"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(27), n = e.call, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.MSG), t[0] = a) : a = t[0];
		var i;
		t[1] !== n.msg ? (i = function() {
			return n.msg;
		}, t[1] = n.msg, t[2] = i) : i = t[2];
		var l;
		t[3] !== n ? (l = [n], t[3] = n, t[4] = l) : l = t[4];
		var c = r("useWAWebEventTargetValue")(n, a, i, l), d;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (d = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO), t[5] = d) : d = t[5];
		var m;
		t[6] !== n.isVideo ? (m = function() {
			return n.isVideo;
		}, t[6] = n.isVideo, t[7] = m) : m = t[7];
		var p;
		t[8] !== n ? (p = [n], t[8] = n, t[9] = p) : p = t[9];
		var _ = r("useWAWebEventTargetValue")(n, d, m, p), f = !_, g;
		t[10] !== _ || t[11] !== f ? (g = {
			currentBannerJid: null,
			isDocPip: !1,
			isMuted: !1,
			isVideoCall: _,
			isVideoMuted: f,
			popoutWindowEl: null
		}, t[10] = _, t[11] = f, t[12] = g) : g = t[12];
		var h = r("useWAWebVoipCallHandlers")(g), y = h.handleClickAccept, C = h.isAccepting;
		if (c == null) return null;
		var b;
		t[13] !== _ ? (b = s._(
			/*BTDS*/
			"",
			[s._enum(_ ? "VIDEO" : "VOICE", {
				VOICE: "voice",
				VIDEO: "video"
			})]
		), t[13] = _, t[14] = b) : b = t[14];
		var v = b, S;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[15] = S) : S = t[15];
		var R;
		t[16] !== y ? (R = function() {
			y();
		}, t[16] = y, t[17] = R) : R = t[17];
		var L;
		t[18] !== c ? (L = function() {
			r("WAWebPipController").openVoipUiPiP(c);
		}, t[18] = c, t[19] = L) : L = t[19];
		var E;
		return t[20] !== C || t[21] !== _ || t[22] !== c || t[23] !== v || t[24] !== R || t[25] !== L ? (E = u.jsx(r("WAWebCallsTabCallCell.react"), {
			callLogMsg: c,
			isVideoCall: _,
			secondary: v,
			buttonLabel: S,
			buttonDisabled: C,
			buttonVariant: "filled",
			onButtonPress: R,
			onCardClick: L,
			handleKeyboardClick: !0,
			bottomSpacing: !0,
			testid: "calls-tab-incoming-call-cell"
		}), t[20] = C, t[21] = _, t[22] = c, t[23] = v, t[24] = R, t[25] = L, t[26] = E) : E = t[26], E;
	}
	l.default = c;
}), 226);
