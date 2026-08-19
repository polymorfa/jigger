__d("useWAWebVoipVideoCallDerivedState", [
	"WAWebCallCollection",
	"WAWebFrontendMsgGetters",
	"WAWebGroupCallTitleUtils",
	"WAWebOutgoingGroupCallUtils",
	"WAWebParticipantListUtils",
	"WAWebVoipEventConstants",
	"WAWebVoipGroupCallAccentColors",
	"WAWebVoipWaCallEnums",
	"WAWebWidFactory",
	"react",
	"react-compiler-runtime",
	"useWAWebCameraPrewarm",
	"useWAWebEventTargetValue",
	"useWAWebVoipParticipantHandRaised"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useMemo, u = 160, c = 90, d = 98, m = .035;
	function p(e) {
		return {
			isCallOutgoing: e === o("WAWebVoipWaCallEnums").CallState.Calling || e === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived,
			isCallRinging: e === o("WAWebVoipWaCallEnums").CallState.ReceivedCall || e === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer
		};
	}
	function _(e, t) {
		var n = Math.max(u, Math.floor(Math.sqrt(m * e.width * e.height * 1.7777777777777777))), r = t ? d : c, o = Math.max(r, Math.floor(n * (9 / 16)));
		return {
			centeredSelfPreviewHeight: o * 2,
			centeredSelfPreviewWidth: n * 2,
			selfPreviewHeight: o,
			selfPreviewWidth: n
		};
	}
	function f(e, t, n, a, i, l, s, u) {
		var c, d, m = o("react-compiler-runtime").c(44), f;
		m[0] !== t ? (f = p(t), m[0] = t, m[1] = f) : f = m[1];
		var h = f, y = h.isCallOutgoing, C = h.isCallRinging, b;
		m[2] !== e ? (b = e != null ? o("WAWebFrontendMsgGetters").getChat(e) : null, m[2] = e, m[3] = b) : b = m[3];
		var v = b, S;
		m[4] !== s ? (S = s != null && s !== "" ? o("WAWebWidFactory").createUserWidOrThrow(s) : void 0, m[4] = s, m[5] = S) : S = m[5];
		var R = S, L;
		m[6] === Symbol.for("react.memo_cache_sentinel") ? (L = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), m[6] = L) : L = m[6];
		var E = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, L, g), k = E[0], I = E[1], T = ((c = (d = r("WAWebCallCollection").activeCall) == null ? void 0 : d.isGroup) != null ? c : !1) && k.length === 2, D;
		m[7] !== T || m[8] !== s ? (D = function() {
			return T && s || null;
		}, m[7] = T, m[8] = s, m[9] = D) : D = m[9];
		var x = r("useWAWebVoipParticipantHandRaised")(D), $ = T ? x : !1, P;
		m[10] !== T || m[11] !== R ? (P = T && R != null ? o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder([R], !0) : null, m[10] = T, m[11] = R, m[12] = P) : P = m[12];
		var N = P, M;
		m[13] !== I || m[14] !== y ? (M = o("WAWebOutgoingGroupCallUtils").getOutgoingGroupCallNameOverride(y, I), m[13] = I, m[14] = y, m[15] = M) : M = m[15];
		var w = M, A;
		m[16] !== I || m[17] !== y ? (A = o("WAWebOutgoingGroupCallUtils").getOutgoingGroupCallParticipants(y, I), m[16] = I, m[17] = y, m[18] = A) : A = m[18];
		var F = A, O;
		m[19] !== v ? (O = o("WAWebGroupCallTitleUtils").getUnnamedGroupCallNameOverride(v), m[19] = v, m[20] = O) : O = m[20];
		var B = O, W = y && u || a, q;
		m[21] !== a ? (q = a ? o("WAWebVoipGroupCallAccentColors").getLandingPageAccentColor() : null, m[21] = a, m[22] = q) : q = m[22];
		var U = q;
		r("useWAWebCameraPrewarm")(W && !l);
		var V;
		m[23] !== n || m[24] !== a ? (V = _(n, a), m[23] = n, m[24] = a, m[25] = V) : V = m[25];
		var H = V, G;
		m[26] === Symbol.for("react.memo_cache_sentinel") ? (G = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES), m[26] = G) : G = m[26];
		var z;
		m[27] !== s ? (z = function() {
			var e = r("WAWebCallCollection").activeCall;
			return e == null || s == null ? null : e.getReactionForParticipant(s);
		}, m[27] = s, m[28] = z) : z = m[28];
		var j = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, G, z), K;
		return m[29] !== v || m[30] !== $ || m[31] !== y || m[32] !== C || m[33] !== i || m[34] !== U || m[35] !== w || m[36] !== F || m[37] !== N || m[38] !== j || m[39] !== R || m[40] !== H || m[41] !== W || m[42] !== B ? (K = babelHelpers.extends({}, H, {
			chat: v,
			effectivePeerHandRaised: $,
			effectiveSelfHandRaised: i,
			isCallOutgoing: y,
			isCallRinging: C,
			lobbyAccentColor: U,
			outgoingGroupCallNameOverride: w,
			outgoingGroupCallParticipants: F,
			peerParticipantName: N,
			peerReaction: j,
			peerUserId: R,
			shouldShowCenteredPreview: W,
			unnamedGroupCallNameOverride: B
		}), m[29] = v, m[30] = $, m[31] = y, m[32] = C, m[33] = i, m[34] = U, m[35] = w, m[36] = F, m[37] = N, m[38] = j, m[39] = R, m[40] = H, m[41] = W, m[42] = B, m[43] = K) : K = m[43], K;
	}
	function g() {
		var e, t, n, o;
		return [(e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.groupCallParticipantsConnected) != null ? e : [], (n = (o = r("WAWebCallCollection").activeCall) == null ? void 0 : o.groupCallParticipants) != null ? n : []];
	}
	l.default = f;
}), 98);
