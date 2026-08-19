__d("WAWebVoipUiVideoCallCenteredParticipantInfo.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebCallLogUtils",
	"WAWebCallParticipantInfo.react",
	"WAWebOutgoingGroupCallParticipantInfo.react",
	"WAWebVoipEventConstants",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(21), n = e.callLogMsg, a = e.callState, i = e.chatId, l = e.isCallLinkLobby, c = e.isCompactLayout, m = e.outgoingGroupCallNameOverride, p = e.outgoingGroupCallParticipants, _ = e.unnamedGroupCallNameOverride, f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), t[0] = f) : f = t[0];
		var g = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, f, d), h;
		t[1] !== g ? (h = g ? s._(
			/*BTDS*/
			""
		) : null, t[1] = g, t[2] = h) : h = t[2];
		var y = h;
		if (l) {
			var C;
			return t[3] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(r("WAWebCallParticipantInfo.react"), {
				showCallStateTextOnly: !0,
				callStateText: s._(
					/*BTDS*/
					""
				)
			}), t[3] = C) : C = t[3], C;
		}
		if (p != null && p.length > 1) {
			var b;
			t[4] !== n || t[5] !== a ? (b = n != null ? o("WAWebCallLogUtils").getCallStateText(a, n) : void 0, t[4] = n, t[5] = a, t[6] = b) : b = t[6];
			var v = c ? 48 : "auto", S;
			return t[7] !== c || t[8] !== m || t[9] !== p || t[10] !== b || t[11] !== v ? (S = u.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
				callStateText: b,
				compact: c,
				imageSize: v,
				nameText: m,
				participantWids: p
			}), t[7] = c, t[8] = m, t[9] = p, t[10] = b, t[11] = v, t[12] = S) : S = t[12], S;
		}
		if (n != null) {
			var R = i != null ? i : void 0, L;
			t[13] !== y || t[14] !== n || t[15] !== a ? (L = y != null ? y : o("WAWebCallLogUtils").getCallStateText(a, n), t[13] = y, t[14] = n, t[15] = a, t[16] = L) : L = t[16];
			var E;
			return t[17] !== R || t[18] !== L || t[19] !== _ ? (E = u.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: R,
				imageSize: "small",
				textAlign: "center",
				nameOverride: _,
				callStateText: L
			}), t[17] = R, t[18] = L, t[19] = _, t[20] = E) : E = t[20], E;
		}
		return null;
	}
	function d() {
		var e;
		return ((e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.peerBusy) === !0;
	}
	l.default = c;
}), 226);
