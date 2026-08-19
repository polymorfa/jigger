__d("WAWebCallLogJoinOngoingCell.react", [
	"fbt",
	"WALogger",
	"WAWebCallCollection",
	"WAWebCallLogUtils",
	"WAWebCallsTabCallCell.react",
	"WAWebEnvironment",
	"WAWebFacePile.react",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebMsgGetters",
	"WAWebPipController",
	"WAWebVoipCallStateUtils",
	"WAWebVoipEventConstants",
	"WAWebVoipGatingUtils",
	"WAWebVoipOngoingCallCollection",
	"WAWebVoipStartCall",
	"WAWebVoipUiManager",
	"WAWebVoipWaCallEnums",
	"WAWebWamEnumLobbyEntryPointType",
	"react",
	"useWAWebActiveSelection",
	"useWAWebCallSurfaceState",
	"useWAWebEventTargetValue",
	"useWAWebMsgValues",
	"useWAWebVoipCallHandlers"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useMemo, m = { facePileBorderColor: {
		borderTopColor: "xlbpjqr",
		borderInlineEndColor: "xlt81dz",
		borderBottomColor: "x148b211",
		borderInlineStartColor: "xso6r1",
		$$css: !0
	} };
	function p(t) {
		var n, a, i, l = t.active, u = t.callLogMsg, p = t.onClick, _ = r("useWAWebActiveSelection")(l, u.id.toString()), f = _[0], g = _[1], h = function(t) {
			t.stopPropagation(), t.preventDefault();
		}, y = o("WAWebFrontendMsgGetters").getChat(u), C = o("useWAWebMsgValues").useMsgValues(u.id, [
			(a = o("WAWebMsgGetters")).getId,
			a.getIsVideoCall,
			a.getCallId,
			a.getIsCallLink,
			a.getCallParticipants
		]), b = C[0], v = C[1], S = C[2], R = C[3], L = C[4], E = r("useWAWebEventTargetValue")(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "all", function() {
			return S != null ? o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(S) : null;
		}), k = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), (i = o("WAWebVoipEventConstants")).getChangeEvent(i.VoipCallCollectionEvents.ACTIVE_CALL), function() {
			return r("WAWebCallCollection").activeCall;
		}), I = r("useWAWebEventTargetValue")(k, i.getChangeEvent(i.VoipCallModelEvents.STATE), function() {
			return k == null ? void 0 : k.getState();
		}, [k]), T = r("useWAWebCallSurfaceState")(u), D = T.isInPopout || T.isInDocPip, x = r("useWAWebVoipCallHandlers")({
			currentBannerJid: null,
			isDocPip: !1,
			isMuted: !1,
			isVideoCall: v === !0,
			isVideoMuted: v !== !0,
			popoutWindowEl: null
		}), $ = x.handleClickAccept, P = (n = o("useWAWebMsgValues").useMsgValues(u.id, [o("WAWebMsgGetters").getSelfOtherDeviceConnected])[0]) != null ? n : !1, N = function() {
			return k == null || S == null ? !1 : k.id === S && o("WAWebVoipCallStateUtils").isCallConnected(I);
		}, M = function() {
			return k == null || S == null ? !1 : k.id !== S;
		}, w = function() {
			return N() ? !1 : P;
		}, A = function() {
			var e = o("WAWebCallLogUtils").getJoinButtonTextType(N(), P, o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled());
			return e === "return" ? s._(
				/*BTDS*/
				""
			) : e === "join_here" ? s._(
				/*BTDS*/
				""
			) : e === "join" ? s._(
				/*BTDS*/
				""
			) : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
			})();
		}, F = d(function() {
			if (L == null) return [];
			var e = L.filter(function(e) {
				return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
			}).map(function(e) {
				return e.participant;
			});
			return o("WAWebCallLogUtils").sortParticipantWidsByPriority(e);
		}, [L]);
		if (S == null) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: CallLogJoinOngoingCell: CallId is null"]))).sendLogs("voip-call-log-join-ongoing-cell-call-id-null"), null;
		if (o("WAWebVoipGatingUtils").isDeviceSwitchEntryPointHidden(w())) return null;
		var O = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 4,
			children: [s._(
				/*BTDS*/
				"",
				[s._enum(v ? "VIDEO" : "VOICE", {
					VOICE: "voice",
					VIDEO: "video"
				})]
			), F.length > 0 && c.jsx(r("WAWebFacePile.react"), {
				idsOrUrls: F,
				chatWid: y == null ? void 0 : y.id,
				faceSize: 20,
				keyName: "call-" + S,
				borderColor: m.facePileBorderColor,
				maxVisible: 5,
				overflowThreshold: 8
			})]
		}), B = N(), W = !r("WAWebEnvironment").isWindows || o("WAWebVoipGatingUtils").isWinHybridPlusEnabled(), q = M() || W && B && !D, U = function() {
			if ((k == null ? void 0 : k.id) === S && o("WAWebVoipCallStateUtils").isCallIncoming(I)) {
				$();
				return;
			}
			W && B ? (window.focus(), o("WAWebVoipUiManager").closeVoipUiPopoutWindow({ callEnded: !1 })) : (k == null ? void 0 : k.id) === S && I != null && !o("WAWebVoipCallStateUtils").isCallTerminal(I) ? r("WAWebPipController").openVoipUiPiP(u) : o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN({
				callId: S,
				chat: y,
				isDeviceSwitch: o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() && w(),
				isVideo: v,
				joinAndAccept: !0,
				lobbyEntryPoint: R != null && R ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_CALL_LOG : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LOG
			});
		}, V = !T.isAnySurfaceOpen && !q, H = function() {
			p();
			var e = (k == null ? void 0 : k.id) === S && (o("WAWebVoipCallStateUtils").isCallIncoming(I) || o("WAWebVoipCallStateUtils").isCallConnected(I));
			e ? r("WAWebPipController").openVoipUiPiP(u) : U();
		}, G = function(t) {
			var e = t.target;
			e instanceof HTMLElement && e.closest("button") != null || V && H();
		};
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: {
				enter: G,
				space: G
			},
			onFocus: h,
			ref: f,
			children: c.jsx(r("WAWebCallsTabCallCell.react"), {
				callLogMsg: u,
				isVideoCall: v === !0,
				secondary: O,
				buttonLabel: A(),
				buttonDisabled: q,
				onButtonPress: U,
				onCardClick: V ? H : null,
				active: g,
				testid: "calls-tab-join-ongoing-cell-" + b.id
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
