__d("WAWebVoipUi.react", [
	"WAWebCallCollection",
	"WAWebVoipActivityTracker",
	"WAWebVoipCallEndedScreen.react",
	"WAWebVoipCallLinkLoadingPreview.react",
	"WAWebVoipCallLinkPreview.react",
	"WAWebVoipCallStateUtils",
	"WAWebVoipDarkThemeRoot.react",
	"WAWebVoipEventConstants",
	"WAWebVoipGatingUtils",
	"WAWebVoipOutgoingLoadingPreview.react",
	"WAWebVoipUiBody.react",
	"WAWebVoipWaCallEnums",
	"WDSColorStyles.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebCallLinkEndedState",
	"useWAWebEventTargetValue",
	"useWAWebTrackCallLinkScreenTransitions"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect, c = { voipContainer: {
		height: "x5yr21d",
		width: "xh8yej3",
		pointerEvents: "x67bb7w",
		position: "x1n2onr6",
		$$css: !0
	} };
	function d(e) {
		var t, n, a, i = o("react-compiler-runtime").c(31), l = e.callLogMsg, d;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (d = [], i[0] = d) : d = i[0], u(y, d);
		var C;
		i[1] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.MSG), i[1] = C) : C = i[1];
		var b = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, C, h), v = (t = l != null ? l : b) != null ? t : null, S;
		i[2] === Symbol.for("react.memo_cache_sentinel") ? (S = o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE, o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), i[2] = S) : S = i[2], r("useWAWebEventTargetValue")(r("WAWebCallCollection"), S, g);
		var R;
		i[3] === Symbol.for("react.memo_cache_sentinel") ? (R = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), i[3] = R) : R = i[3], r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, R, f);
		var L;
		i[4] === Symbol.for("react.memo_cache_sentinel") ? (L = o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE, o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), i[4] = L) : L = i[4];
		var E = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, L, _), k = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:pendingCallLink", p), I;
		i[5] === Symbol.for("react.memo_cache_sentinel") ? (I = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PENDING_OUTGOING_CALL), i[5] = I) : I = i[5];
		var T = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), I, m), D = r("useWAWebCallLinkEndedState")(), x = D.isCallLinkEnded, $ = r("WAWebCallCollection").activeCall, P;
		i[6] !== l ? (P = l == null && ($ == null ? void 0 : $.isInCallLinkPreview()) === !0, i[6] = l, i[7] = P) : P = i[7];
		var N = P, M = (n = (a = k == null ? void 0 : k.isVideo) != null ? a : $ == null ? void 0 : $.isVideo) != null ? n : !1, w = x && v == null, A;
		i[8] !== v ? (A = v == null && ($ == null ? void 0 : $.isInCallLinkLobby()) === !0, i[8] = v, i[9] = A) : A = i[9];
		var F = A;
		if (r("useWAWebTrackCallLinkScreenTransitions")(w, N && $ != null, F), k != null && $ == null && v == null) {
			var O;
			return i[10] !== M ? (O = s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), { isVideo: M }), i[10] = M, i[11] = O) : O = i[11], O;
		}
		if (w) {
			var B;
			return i[12] === Symbol.for("react.memo_cache_sentinel") ? (B = s.jsx(r("WAWebVoipCallEndedScreen.react"), {}), i[12] = B) : B = i[12], B;
		}
		if (($ == null ? void 0 : $.isCallLink) === !0 && $.callLinkState != null) {
			if (o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() && !o("WAWebVoipGatingUtils").isGuestViewer() && (E || o("WAWebVoipCallStateUtils").isCallConnected($.getState()) && v == null)) {
				var W;
				return i[13] === Symbol.for("react.memo_cache_sentinel") ? (W = s.jsx(r("WAWebVoipUiBody.react"), {}), i[13] = W) : W = i[13], W;
			}
			if ($.isInCallLinkPreview() && !$.isInCallLinkLobby()) {
				if (o("WAWebVoipGatingUtils").isGuestViewer()) {
					var q;
					return i[14] !== M ? (q = s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), { isVideo: M }), i[14] = M, i[15] = q) : q = i[15], q;
				}
				var U;
				return i[16] === Symbol.for("react.memo_cache_sentinel") ? (U = s.jsx(r("WAWebVoipDarkThemeRoot.react"), {
					xstyle: [
						c.voipContainer,
						o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
						o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain
					],
					children: s.jsx(r("WAWebVoipCallLinkPreview.react"), { call: $ })
				}), i[16] = U) : U = i[16], U;
			}
			if ($.callLinkState === o("WAWebVoipWaCallEnums").CallLinkState.QuerySent) {
				var V;
				return i[17] !== M ? (V = s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), { isVideo: M }), i[17] = M, i[18] = V) : V = i[18], V;
			}
			var H = $.getState();
			if (!o("WAWebVoipCallStateUtils").isCallConnected(H)) {
				var G;
				return i[19] !== M ? (G = s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), { isVideo: M }), i[19] = M, i[20] = G) : G = i[20], G;
			}
		}
		if (v == null) {
			if (k != null) {
				var z;
				return i[21] !== M ? (z = s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), { isVideo: M }), i[21] = M, i[22] = z) : z = i[22], z;
			}
			if (T != null) {
				var j;
				return i[23] !== T.isJoin || i[24] !== T.isVideo ? (j = s.jsx(r("WAWebVoipOutgoingLoadingPreview.react"), {
					isJoin: T.isJoin,
					isVideo: T.isVideo
				}), i[23] = T.isJoin, i[24] = T.isVideo, i[25] = j) : j = i[25], j;
			}
			if (($ == null ? void 0 : $.isCallLink) === !0 && $.callLinkState != null && o("WAWebVoipGatingUtils").isGuestViewer()) {
				var K;
				return i[26] === Symbol.for("react.memo_cache_sentinel") ? (K = s.jsx(r("WAWebVoipUiBody.react"), {}), i[26] = K) : K = i[26], K;
			}
			return null;
		}
		if (k != null && (($ == null ? void 0 : $.isCallLink) !== !0 || ($ == null ? void 0 : $.callLinkState) == null)) {
			var Q;
			return i[27] !== M ? (Q = s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), { isVideo: M }), i[27] = M, i[28] = Q) : Q = i[28], Q;
		}
		var X;
		return i[29] !== v ? (X = s.jsx(r("WAWebVoipUiBody.react"), { callLogMsg: v }), i[29] = v, i[30] = X) : X = i[30], X;
	}
	function m() {
		return r("WAWebCallCollection").pendingOutgoingCall;
	}
	function p() {
		return r("WAWebCallCollection").pendingCallLink;
	}
	function _() {
		var e;
		return ((e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.isConnectingToCallLinkLobby()) === !0;
	}
	function f() {
		var e;
		return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getState();
	}
	function g() {
		var e;
		return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.callLinkState;
	}
	function h() {
		var e;
		return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.msg;
	}
	function y() {
		o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_UI_MOUNTING);
	}
	l.default = d;
}), 98);
