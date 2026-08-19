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
	"react-compiler-runtime",
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
		var n, a = o("react-compiler-runtime").c(82), i = t.active, l = t.callLogMsg, u = t.onClick, d;
		a[0] !== l.id ? (d = l.id.toString(), a[0] = l.id, a[1] = d) : d = a[1];
		var p = r("useWAWebActiveSelection")(i, d), y = p[0], C = p[1], b = h, v;
		a[2] !== l ? (v = o("WAWebFrontendMsgGetters").getChat(l), a[2] = l, a[3] = v) : v = a[3];
		var S = v, R;
		if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
			var L;
			R = [
				(L = o("WAWebMsgGetters")).getId,
				L.getIsVideoCall,
				L.getCallId,
				L.getIsCallLink,
				L.getCallParticipants
			], a[4] = R;
		} else R = a[4];
		var E = o("useWAWebMsgValues").useMsgValues(l.id, R), k = E[0], I = E[1], T = E[2], D = E[3], x = E[4], $;
		a[5] !== T ? ($ = function() {
			return T != null ? o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(T) : null;
		}, a[5] = T, a[6] = $) : $ = a[6], r("useWAWebEventTargetValue")(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "all", $);
		var P;
		a[7] === Symbol.for("react.memo_cache_sentinel") ? (P = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), a[7] = P) : P = a[7];
		var N = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), P, g), M;
		a[8] === Symbol.for("react.memo_cache_sentinel") ? (M = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), a[8] = M) : M = a[8];
		var w, A;
		a[9] !== N ? (w = function() {
			return N == null ? void 0 : N.getState();
		}, A = [N], a[9] = N, a[10] = w, a[11] = A) : (w = a[10], A = a[11]);
		var F = r("useWAWebEventTargetValue")(N, M, w, A), O = r("useWAWebCallSurfaceState")(l), B = O.isInPopout || O.isInDocPip, W = I === !0, q = I !== !0, U;
		a[12] !== q || a[13] !== W ? (U = {
			currentBannerJid: null,
			isDocPip: !1,
			isMuted: !1,
			isVideoCall: W,
			isVideoMuted: q,
			popoutWindowEl: null
		}, a[12] = q, a[13] = W, a[14] = U) : U = a[14];
		var V = r("useWAWebVoipCallHandlers")(U), H = V.handleClickAccept, G = (n = o("useWAWebMsgValues").useMsgValues(l.id, [o("WAWebMsgGetters").getSelfOtherDeviceConnected])[0]) != null ? n : !1, z;
		a[15] !== N || a[16] !== F || a[17] !== T ? (z = function() {
			return N == null || T == null ? !1 : N.id === T && o("WAWebVoipCallStateUtils").isCallConnected(F);
		}, a[15] = N, a[16] = F, a[17] = T, a[18] = z) : z = a[18];
		var j = z, K;
		a[19] !== N || a[20] !== T ? (K = function() {
			return N == null || T == null ? !1 : N.id !== T;
		}, a[19] = N, a[20] = T, a[21] = K) : K = a[21];
		var Q = K, X;
		a[22] !== j || a[23] !== G ? (X = function() {
			return j() ? !1 : G;
		}, a[22] = j, a[23] = G, a[24] = X) : X = a[24];
		var Y = X, J;
		a[25] !== j || a[26] !== G ? (J = function() {
			var e = o("WAWebCallLogUtils").getJoinButtonTextType(j(), G, o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled());
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
		}, a[25] = j, a[26] = G, a[27] = J) : J = a[27];
		var Z = J, ee;
		e: {
			if (x == null) {
				var te;
				a[28] === Symbol.for("react.memo_cache_sentinel") ? (te = [], a[28] = te) : te = a[28], ee = te;
				break e;
			}
			var ne;
			if (a[29] !== x) {
				var re = x.filter(f).map(_);
				ne = o("WAWebCallLogUtils").sortParticipantWidsByPriority(re), a[29] = x, a[30] = ne;
			} else ne = a[30];
			ee = ne;
		}
		var oe = ee;
		if (T == null) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: CallLogJoinOngoingCell: CallId is null"]))).sendLogs("voip-call-log-join-ongoing-cell-call-id-null"), null;
		if (o("WAWebVoipGatingUtils").isDeviceSwitchEntryPointHidden(Y())) return null;
		var ae;
		a[31] !== I ? (ae = s._(
			/*BTDS*/
			"",
			[s._enum(I ? "VIDEO" : "VOICE", {
				VOICE: "voice",
				VIDEO: "video"
			})]
		), a[31] = I, a[32] = ae) : ae = a[32];
		var ie;
		a[33] !== T || a[34] !== (S == null ? void 0 : S.id) || a[35] !== oe ? (ie = oe.length > 0 && c.jsx(r("WAWebFacePile.react"), {
			idsOrUrls: oe,
			chatWid: S == null ? void 0 : S.id,
			faceSize: 20,
			keyName: "call-" + T,
			borderColor: m.facePileBorderColor,
			maxVisible: 5,
			overflowThreshold: 8
		}), a[33] = T, a[34] = S == null ? void 0 : S.id, a[35] = oe, a[36] = ie) : ie = a[36];
		var le;
		a[37] !== ae || a[38] !== ie ? (le = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			rowGap: 4,
			children: [ae, ie]
		}), a[37] = ae, a[38] = ie, a[39] = le) : le = a[39];
		var se = le, ue;
		a[40] !== j ? (ue = j(), a[40] = j, a[41] = ue) : ue = a[41];
		var ce = ue, de;
		a[42] === Symbol.for("react.memo_cache_sentinel") ? (de = !r("WAWebEnvironment").isWindows || o("WAWebVoipGatingUtils").isWinHybridPlusEnabled(), a[42] = de) : de = a[42];
		var me = de, pe = Q() || me && ce && !B, _e;
		a[43] !== (N == null ? void 0 : N.id) || a[44] !== F || a[45] !== T || a[46] !== l || a[47] !== S || a[48] !== ce || a[49] !== H || a[50] !== D || a[51] !== Y || a[52] !== I ? (_e = function() {
			if ((N == null ? void 0 : N.id) === T && o("WAWebVoipCallStateUtils").isCallIncoming(F)) {
				H();
				return;
			}
			me && ce ? (window.focus(), o("WAWebVoipUiManager").closeVoipUiPopoutWindow({ callEnded: !1 })) : (N == null ? void 0 : N.id) === T && F != null && !o("WAWebVoipCallStateUtils").isCallTerminal(F) ? r("WAWebPipController").openVoipUiPiP(l) : o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN({
				callId: T,
				chat: S,
				isDeviceSwitch: o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() && Y(),
				isVideo: I,
				joinAndAccept: !0,
				lobbyEntryPoint: D != null && D ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_CALL_LOG : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LOG
			});
		}, a[43] = N == null ? void 0 : N.id, a[44] = F, a[45] = T, a[46] = l, a[47] = S, a[48] = ce, a[49] = H, a[50] = D, a[51] = Y, a[52] = I, a[53] = _e) : _e = a[53];
		var fe = _e, ge = !O.isAnySurfaceOpen && !pe, he;
		a[54] !== (N == null ? void 0 : N.id) || a[55] !== F || a[56] !== fe || a[57] !== T || a[58] !== l || a[59] !== u ? (he = function() {
			u();
			var e = (N == null ? void 0 : N.id) === T && (o("WAWebVoipCallStateUtils").isCallIncoming(F) || o("WAWebVoipCallStateUtils").isCallConnected(F));
			e ? r("WAWebPipController").openVoipUiPiP(l) : fe();
		}, a[54] = N == null ? void 0 : N.id, a[55] = F, a[56] = fe, a[57] = T, a[58] = l, a[59] = u, a[60] = he) : he = a[60];
		var ye = he, Ce;
		a[61] !== ye || a[62] !== ge ? (Ce = function(t) {
			var e = t.target;
			e instanceof HTMLElement && e.closest("button") != null || ge && ye();
		}, a[61] = ye, a[62] = ge, a[63] = Ce) : Ce = a[63];
		var be = Ce, ve;
		a[64] !== be ? (ve = {
			enter: be,
			space: be
		}, a[64] = be, a[65] = ve) : ve = a[65];
		var Se = I === !0, Re;
		a[66] !== Z ? (Re = Z(), a[66] = Z, a[67] = Re) : Re = a[67];
		var Le = ge ? ye : null, Ee = "calls-tab-join-ongoing-cell-" + k.id, ke;
		a[68] !== fe || a[69] !== l || a[70] !== C || a[71] !== pe || a[72] !== se || a[73] !== Se || a[74] !== Re || a[75] !== Le || a[76] !== Ee ? (ke = c.jsx(r("WAWebCallsTabCallCell.react"), {
			callLogMsg: l,
			isVideoCall: Se,
			secondary: se,
			buttonLabel: Re,
			buttonDisabled: pe,
			onButtonPress: fe,
			onCardClick: Le,
			active: C,
			testid: Ee
		}), a[68] = fe, a[69] = l, a[70] = C, a[71] = pe, a[72] = se, a[73] = Se, a[74] = Re, a[75] = Le, a[76] = Ee, a[77] = ke) : ke = a[77];
		var Ie;
		return a[78] !== y || a[79] !== ve || a[80] !== ke ? (Ie = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: ve,
			onFocus: b,
			ref: y,
			children: ke
		}), a[78] = y, a[79] = ve, a[80] = ke, a[81] = Ie) : Ie = a[81], Ie;
	}
	function _(e) {
		return e.participant;
	}
	function f(e) {
		return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
	}
	function g() {
		return r("WAWebCallCollection").activeCall;
	}
	function h(e) {
		e.stopPropagation(), e.preventDefault();
	}
	l.default = p;
}), 226);
