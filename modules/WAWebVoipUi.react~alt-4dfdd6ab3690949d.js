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
		var t, n, a, i = e.callLogMsg;
		u(function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_UI_MOUNTING);
		}, []);
		var l = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.MSG), function() {
			var e;
			return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.msg;
		}), d = (t = i != null ? i : l) != null ? t : null, m = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE, o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), function() {
			var e;
			return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.callLinkState;
		}), p = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), function() {
			var e;
			return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getState();
		}), _ = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE, o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), function() {
			var e;
			return ((e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.isConnectingToCallLinkLobby()) === !0;
		}), f = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:pendingCallLink", function() {
			return r("WAWebCallCollection").pendingCallLink;
		}), g = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PENDING_OUTGOING_CALL), function() {
			return r("WAWebCallCollection").pendingOutgoingCall;
		}), h = r("useWAWebCallLinkEndedState")(), y = h.isCallLinkEnded, C = r("WAWebCallCollection").activeCall, b = i == null && (C == null ? void 0 : C.isInCallLinkPreview()) === !0, v = (n = (a = f == null ? void 0 : f.isVideo) != null ? a : C == null ? void 0 : C.isVideo) != null ? n : !1, S = y && d == null, R = d == null && (C == null ? void 0 : C.isInCallLinkLobby()) === !0;
		if (r("useWAWebTrackCallLinkScreenTransitions")(S, b && C != null, R), f != null && C == null && d == null) return s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), { isVideo: v });
		if (S) return s.jsx(r("WAWebVoipCallEndedScreen.react"), {});
		if ((C == null ? void 0 : C.isCallLink) === !0 && C.callLinkState != null) {
			if (o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() && !o("WAWebVoipGatingUtils").isGuestViewer() && (_ || o("WAWebVoipCallStateUtils").isCallConnected(C.getState()) && d == null)) return s.jsx(r("WAWebVoipUiBody.react"), {});
			if (C.isInCallLinkPreview() && !C.isInCallLinkLobby()) return o("WAWebVoipGatingUtils").isGuestViewer() ? s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), { isVideo: v }) : s.jsx(r("WAWebVoipDarkThemeRoot.react"), {
				xstyle: [
					c.voipContainer,
					o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
					o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain
				],
				children: s.jsx(r("WAWebVoipCallLinkPreview.react"), { call: C })
			});
			if (C.callLinkState === o("WAWebVoipWaCallEnums").CallLinkState.QuerySent) return s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), { isVideo: v });
			var L = C.getState();
			if (!o("WAWebVoipCallStateUtils").isCallConnected(L)) return s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), { isVideo: v });
		}
		return d == null ? f != null ? s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), { isVideo: v }) : g != null ? s.jsx(r("WAWebVoipOutgoingLoadingPreview.react"), {
			isJoin: g.isJoin,
			isVideo: g.isVideo
		}) : (C == null ? void 0 : C.isCallLink) === !0 && C.callLinkState != null && o("WAWebVoipGatingUtils").isGuestViewer() ? s.jsx(r("WAWebVoipUiBody.react"), {}) : null : f != null && ((C == null ? void 0 : C.isCallLink) !== !0 || (C == null ? void 0 : C.callLinkState) == null) ? s.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), { isVideo: v }) : s.jsx(r("WAWebVoipUiBody.react"), { callLogMsg: d });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
