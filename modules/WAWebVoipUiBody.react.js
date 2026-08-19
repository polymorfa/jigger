__d("WAWebVoipUiBody.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebAvUpgradeBannerState",
	"WAWebCallCollection",
	"WAWebCallLogUtils",
	"WAWebCallParticipantInfo.react",
	"WAWebChatCollection",
	"WAWebContactCollection",
	"WAWebCurrentUser",
	"WAWebErrorBoundary.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebL10N",
	"WAWebMoveResizeConstants",
	"WAWebToastManager",
	"WAWebUserPrefsMeUser",
	"WAWebVelocityTransitionGroup",
	"WAWebVoipActionRequestOpenChat",
	"WAWebVoipActivityTracker",
	"WAWebVoipAvUpgradeBanner.react",
	"WAWebVoipCallActiveInExternalPlayer.react",
	"WAWebVoipCallControls.react",
	"WAWebVoipCallEndedDisplay.react",
	"WAWebVoipCallLinkPreview.react",
	"WAWebVoipCallLinkSharePanel.react",
	"WAWebVoipCallParticipantsDrawer.react",
	"WAWebVoipCallStateUtils",
	"WAWebVoipDarkThemeRoot.react",
	"WAWebVoipDebugInfoOverlay.react",
	"WAWebVoipEventConstants",
	"WAWebVoipGatingUtils",
	"WAWebVoipLobbyUtils",
	"WAWebVoipNetworkConditionerOverlay.react",
	"WAWebVoipPostCallSurveyLoadable",
	"WAWebVoipScreenShareBanner.react",
	"WAWebVoipSignalingEnums",
	"WAWebVoipStartCall",
	"WAWebVoipUiBodyAudioToVideoOverlay.react",
	"WAWebVoipUiBodyStyles",
	"WAWebVoipUiContext",
	"WAWebVoipUiDocPipPortalContainer.react",
	"WAWebVoipUiLobby.react",
	"WAWebVoipUiManager",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipUiPopoutWindowPortalContainer.react",
	"WAWebVoipUiToastContainer.react",
	"WAWebVoipUiVideoCallLoadable",
	"WAWebVoipUiVideoGroupCallLoadable",
	"WAWebVoipVideoStateUtils",
	"WAWebVoipVoiceCallContainer.react",
	"WAWebVoipWaCallEnums",
	"WAWebVoipWaitingRoomRequestBanner.react",
	"WAWebVoipWebBridgeApi",
	"WAWebVoipWindowConstants",
	"WAWebWidFactory",
	"WDSColorStyles.stylex",
	"WDSIconIcAlertWarning.react",
	"cr:2518",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebPreventCallWindowPinchZoom",
	"useWAWebTimeout",
	"useWAWebVoipCallHandlers",
	"useWAWebVoipCallToasts",
	"useWAWebVoipCameraAvailability",
	"useWAWebVoipCameraHealthCheck",
	"useWAWebVoipContainerSize",
	"useWAWebVoipParticipantAvatarPrefetch",
	"useWAWebVoipPopoutUiReadySignal",
	"useWAWebVoipPostCallSurvey",
	"useWAWebVoipUiAnrTracking",
	"useWAWebVoipUiBodyGroupLayout",
	"useWAWebVoipUiBodySelfSignals",
	"useWAWebVoipVideoStreamPause",
	"useWAWebVoipWakeLock",
	"useWAWebVoipWatchdog",
	"useWAWebVoipWindowSetup",
	"useWAWebWaitingRoomSeeAll",
	"useWAWebWaitingRoomState"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useMemo, g = d.useRef, h = d.useState;
	function y(e) {
		var t, a, i, l, u, d, m, f, y = o("react-compiler-runtime").c(353), H = e.callLogMsg;
		r("useWAWebVoipUiAnrTracking")(), r("useWAWebVoipVideoStreamPause")();
		var G = r("useWAWebEventTargetValue")(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow), z = r("useWAWebEventTargetValue")(o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter, "docPipOpenStateChanged", o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen), j = p(r("WAWebVoipUiPopoutWindowContext"));
		r("useWAWebVoipPopoutUiReadySignal")();
		var K;
		y[0] === Symbol.for("react.memo_cache_sentinel") ? (K = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO), y[0] = K) : K = y[0];
		var Q;
		y[1] !== (H == null ? void 0 : H.isVideoCall) ? (Q = function() {
			var e, t, n;
			return (e = (t = (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.isVideo) != null ? t : H == null ? void 0 : H.isVideoCall) != null ? e : !1;
		}, y[1] = H == null ? void 0 : H.isVideoCall, y[2] = Q) : Q = y[2];
		var X = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, K, Q), Y = (t = (a = r("WAWebCallCollection").activeCall) == null ? void 0 : a.id) != null ? t : null, J = g(null), Z;
		y[3] === Symbol.for("react.memo_cache_sentinel") ? (Z = function() {
			return J.current;
		}, y[3] = Z) : Z = y[3];
		var ee = Z, te = g(null), ne = r("useWAWebVoipContainerSize")(J), re = ne.isCompactLayout, oe = ne.uiHeight, ae = h(!1), ie = ae[0], le = ae[1], se;
		y[4] === Symbol.for("react.memo_cache_sentinel") ? (se = function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_PARTICIPANT_DRAWER_TOGGLE), le(U);
		}, y[4] = se) : se = y[4];
		var ue = se, ce;
		y[5] === Symbol.for("react.memo_cache_sentinel") ? (ce = function() {
			le(!1);
		}, y[5] = ce) : ce = y[5];
		var de = ce, me;
		y[6] === Symbol.for("react.memo_cache_sentinel") ? (me = function(t, n) {
			var e;
			(e = te.current) == null || e.showToast({
				message: t,
				type: "default",
				align: "center",
				dedupId: n
			});
		}, y[6] = me) : me = y[6];
		var pe = me, _e;
		y[7] === Symbol.for("react.memo_cache_sentinel") ? (_e = function(t, n) {
			var e;
			(e = te.current) == null || e.showToast({
				message: t,
				type: "default",
				align: "center",
				Icon: r("WDSIconIcAlertWarning.react"),
				dedupId: n
			});
		}, y[7] = _e) : _e = y[7];
		var fe = _e, ge;
		y[8] === Symbol.for("react.memo_cache_sentinel") ? (ge = function(t, n, r) {
			var e;
			(e = te.current) == null || e.showToast({
				message: t,
				type: "default",
				align: n != null ? n : "center",
				dedupId: r
			});
		}, y[8] = ge) : ge = y[8];
		var he = ge, ye;
		y[9] !== oe ? (ye = {
			uiHeight: oe,
			showCenteredToast: pe,
			showToast: he
		}, y[9] = oe, y[10] = ye) : ye = y[10];
		var Ce = ye, be;
		y[11] === Symbol.for("react.memo_cache_sentinel") ? (be = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), y[11] = be) : be = y[11];
		var ve = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, be, q), Se = ie && ve != null, Re = Se && j.isContextInPopoutWindow, Le, Ee;
		y[12] !== Re ? (Le = function() {
			return o("WAWebVoipWindowConstants").setIsSidebarVisible(Re), (function() {
				Re && o("WAWebVoipWindowConstants").setIsSidebarVisible(!1);
			});
		}, Ee = [Re], y[12] = Re, y[13] = Le, y[14] = Ee) : (Le = y[13], Ee = y[14]), _(Le, Ee);
		var ke;
		y[15] === Symbol.for("react.memo_cache_sentinel") ? (ke = o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE, o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), y[15] = ke) : ke = y[15];
		var Ie = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, ke, W), Te;
		y[16] !== ve ? (Te = o("WAWebVoipCallStateUtils").isCallIncoming(ve), y[16] = ve, y[17] = Te) : Te = y[17];
		var De = Te, xe;
		y[18] !== ve ? (xe = o("WAWebVoipCallStateUtils").isCallOutgoing(ve), y[18] = ve, y[19] = xe) : xe = y[19];
		var $e = xe, Pe = De ? "call_incoming" : "in_call", Ne;
		y[20] === Symbol.for("react.memo_cache_sentinel") ? (Ne = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP), y[20] = Ne) : Ne = y[20];
		var Me = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Ne, B), we;
		y[21] === Symbol.for("react.memo_cache_sentinel") ? (we = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_CREATOR_JID), y[21] = we) : we = y[21];
		var Ae = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, we, O), Fe;
		y[22] !== Ae ? (Fe = V(Ae), y[22] = Ae, y[23] = Fe) : Fe = y[23];
		var Oe = Fe, Be;
		if (y[24] !== Oe || y[25] !== H) {
			var We;
			Be = (We = H ? o("WAWebChatCollection").ChatCollection.get(H.id.remote) : null) != null ? We : Oe, y[24] = Oe, y[25] = H, y[26] = Be;
		} else Be = y[26];
		var qe = Be, Ue;
		y[27] !== ve || y[28] !== Me ? (Ue = o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(Me, ve), y[27] = ve, y[28] = Me, y[29] = Ue) : Ue = y[29];
		var Ve = Ue, He = h(!document.hidden), Ge = He[0], ze = He[1], je = g(null), Ke, Qe;
		y[30] !== $e || y[31] !== De ? (Ke = function() {
			if (De && !$e) {
				var e = function() {
					o("WAWebABProps").getABPropConfigValue("enable_web_voip_anr_optimizations") ? (je.current != null && window.clearTimeout(je.current), je.current = window.setTimeout(function() {
						je.current = null, ze(!document.hidden);
					}, 200)) : ze(!document.hidden);
				};
				return document.addEventListener("visibilitychange", e), (function() {
					document.removeEventListener("visibilitychange", e), je.current != null && (window.clearTimeout(je.current), je.current = null);
				});
			}
		}, Qe = [De, $e], y[30] = $e, y[31] = De, y[32] = Ke, y[33] = Qe) : (Ke = y[32], Qe = y[33]), _(Ke, Qe);
		var Xe, Ye;
		y[34] === Symbol.for("react.memo_cache_sentinel") ? (Xe = function() {
			var e;
			(e = J.current) == null || e.focus();
		}, Ye = [], y[34] = Xe, y[35] = Ye) : (Xe = y[34], Ye = y[35]), _(Xe, Ye);
		var Je;
		y[36] === Symbol.for("react.memo_cache_sentinel") ? (Je = function() {
			pe(s._(
				/*BTDS*/
				""
			), "voip-pinch-zoom-blocked");
		}, y[36] = Je) : Je = y[36], r("useWAWebPreventCallWindowPinchZoom")(J, Je);
		var Ze;
		y[37] === Symbol.for("react.memo_cache_sentinel") ? (Ze = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_MIC_MUTED), y[37] = Ze) : Ze = y[37];
		var et = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Ze, F), tt;
		y[38] === Symbol.for("react.memo_cache_sentinel") ? (tt = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), y[38] = tt) : tt = y[38];
		var nt = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "participantMicStateChange " + tt, A), rt;
		y[39] === Symbol.for("react.memo_cache_sentinel") ? (rt = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), y[39] = rt) : rt = y[39];
		var ot = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, rt, w), at = ot[0], it = ot[1], lt = ot[2], st = Me && at.length === 2 ? nt : et, ut;
		y[40] === Symbol.for("react.memo_cache_sentinel") ? (ut = o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP, o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_JID), y[40] = ut) : ut = y[40];
		var ct = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, ut, M), dt;
		y[41] === Symbol.for("react.memo_cache_sentinel") ? (dt = o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP, o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_JID), y[41] = dt) : dt = y[41];
		var mt = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, dt, N), pt;
		y[42] === Symbol.for("react.memo_cache_sentinel") ? (pt = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_MIC_MUTED), y[42] = pt) : pt = y[42];
		var _t = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, pt, P), ft = r("useWAWebVoipCameraAvailability")(), gt;
		y[43] === Symbol.for("react.memo_cache_sentinel") ? (gt = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_VIDEO_STATE), y[43] = gt) : gt = y[43];
		var ht;
		y[44] !== X ? (ht = function() {
			return r("WAWebCallCollection").activeCall ? !o("WAWebVoipVideoStateUtils").isVideoEnabled(r("WAWebCallCollection").activeCall.selfVideoState) : !X;
		}, y[44] = X, y[45] = ht) : ht = y[45];
		var yt = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, gt, ht), Ct;
		y[46] === Symbol.for("react.memo_cache_sentinel") ? (Ct = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SCREEN_SHARE_STATES), y[46] = Ct) : Ct = y[46];
		var bt = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Ct, $), vt = bt[0], St = bt[1], Rt = bt[2], Lt = vt || St, Et = r("useWAWebVoipUiBodyGroupLayout")(Y, Lt), kt = Et.activeOverride, It = Et.handleActiveOverrideChange, Tt = Et.handleLayoutModeToggle, Dt = Et.handlePinParticipant, xt = Et.layoutMode, $t = Et.pinnedParticipantJid, Pt = g(ve), Nt, Mt;
		y[47] !== ve || y[48] !== It ? (Nt = function() {
			var e = Pt.current;
			Pt.current = ve, e != null && ve == null ? (o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CALL_ENDED_SCREEN_SHOWN), It(null)) : e !== ve && ve != null && o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CALL_STATE_UI_TRANSITION, String(ve));
		}, Mt = [ve, It], y[47] = ve, y[48] = It, y[49] = Nt, y[50] = Mt) : (Nt = y[49], Mt = y[50]), _(Nt, Mt);
		var wt = !j.isContextInPopoutWindow && !j.isDocPip && (G || z), At;
		y[51] !== ve || y[52] !== at || y[53] !== St || y[54] !== wt || y[55] !== vt ? (At = {
			callState: ve,
			groupCallParticipantsConnected: at,
			isCallInExternalPlayer: wt,
			isSelfScreenSharing: vt,
			isAnyPeerScreenSharing: St,
			showCenteredToast: pe,
			showWarningToast: fe
		}, y[51] = ve, y[52] = at, y[53] = St, y[54] = wt, y[55] = vt, y[56] = At) : At = y[56], r("useWAWebVoipCallToasts")(At);
		var Ft = yt || !ft, Ot;
		y[57] === Symbol.for("react.memo_cache_sentinel") ? (Ot = o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE, o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO), y[57] = Ot) : Ot = y[57];
		var Bt = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Ot, x), Wt;
		y[58] === Symbol.for("react.memo_cache_sentinel") ? (Wt = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE), y[58] = Wt) : Wt = y[58];
		var qt = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Wt, D), Ut;
		y[59] === Symbol.for("react.memo_cache_sentinel") ? (Ut = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE), y[59] = Ut) : Ut = y[59];
		var Vt = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Ut, T), Ht;
		y[60] === Symbol.for("react.memo_cache_sentinel") ? (Ht = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE), y[60] = Ht) : Ht = y[60];
		var Gt = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Ht, I), zt;
		y[61] === Symbol.for("react.memo_cache_sentinel") ? (zt = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), y[61] = zt) : zt = y[61];
		var jt = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "participantVideoStateChange " + zt, k), Kt = jt[0], Qt = jt[1], Xt = Me && at.length === 2, Yt = Xt ? Kt : Vt, Jt = Xt ? Qt : Gt, Zt = Xt ? Bt || Yt : Bt, en = h(Y), tn = en[0], nn = en[1], rn = h(Me), on = rn[0], an = rn[1], ln;
		y[62] !== Zt || y[63] !== Me ? (ln = function() {
			return !Me && Zt;
		}, y[62] = Zt, y[63] = Me, y[64] = ln) : ln = y[64];
		var sn = h(ln), un = sn[0], cn = sn[1], dn = h(null), mn = dn[0], pn = dn[1];
		tn !== Y || on !== Me ? (nn(Y), an(Me), cn(!Me && Zt), pn(null)) : !Me && Zt && !un && (cn(!0), pn(re));
		var _n;
		y[65] === Symbol.for("react.memo_cache_sentinel") ? (_n = function() {
			pn(null);
		}, y[65] = _n) : _n = y[65];
		var fn = mn != null, gn;
		y[66] !== fn ? (gn = { immediate: fn }, y[66] = fn, y[67] = gn) : gn = y[67], o("useWAWebTimeout").useTimeout(_n, o("WAWebMoveResizeConstants").MIN_HEIGHT_CHANGE_ANIMATION_DURATION, gn);
		var hn;
		y[68] === Symbol.for("react.memo_cache_sentinel") ? (hn = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING), y[68] = hn) : hn = y[68];
		var yn = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, hn, E), Cn, bn;
		if (y[69] === Symbol.for("react.memo_cache_sentinel")) {
			var vn;
			Cn = (vn = o("WAWebVoipEventConstants")).getChangeEvent(vn.VoipCallModelEvents.PEER_RECONNECTING), bn = vn.getChangeEvent(vn.VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), y[69] = Cn, y[70] = bn;
		} else Cn = y[69], bn = y[70];
		var Sn = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Cn + " " + bn, L), Rn = Xt ? Sn : yn, Ln = R, En;
		y[71] === Symbol.for("react.memo_cache_sentinel") ? (En = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_JID), y[71] = En) : En = y[71];
		var kn = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, En, S), In;
		e: {
			if (Me) {
				var Tn;
				if (y[72] !== at) {
					var Dn, xn;
					Tn = (Dn = (xn = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall(at)) == null ? void 0 : xn.toJid()) != null ? Dn : null, y[72] = at, y[73] = Tn;
				} else Tn = y[73];
				In = Tn;
				break e;
			}
			In = kn;
		}
		var $n = In, Pn;
		y[74] !== G || y[75] !== $e || y[76] !== De || y[77] !== j.isContextInPopoutWindow ? (Pn = {
			isCallRinging: De,
			isCallOutgoing: $e,
			isCallActiveInPopoutWindow: G,
			isContextInPopoutWindow: j.isContextInPopoutWindow
		}, y[74] = G, y[75] = $e, y[76] = De, y[77] = j.isContextInPopoutWindow, y[78] = Pn) : Pn = y[78];
		var Nn = r("useWAWebVoipPostCallSurvey")(Pn), Mn = Nn.handleSurveyDismiss, wn = Nn.handleSurveySubmit, An = Nn.isSurveyDismissed, Fn = Nn.onSurveyInteract, On = Nn.shouldShowPostCallSurvey, Bn = (i = (l = r("WAWebCallCollection").activeCall) == null ? void 0 : l.isCallLink) != null ? i : !1, Wn;
		y[79] !== ve ? (Wn = o("WAWebVoipCallStateUtils").isCallConnected(ve), y[79] = ve, y[80] = Wn) : Wn = y[80];
		var qn = Wn, Un, Vn;
		y[81] !== qn || y[82] !== X || y[83] !== j.isContextInPopoutWindow ? (Un = function() {
			Bn && qn && X && !j.isContextInPopoutWindow && o("WAWebABProps").getABPropConfigValue("web_calling_auto_popout_video") && !o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow() && o("WAWebVoipUiManager").openVoipUiPopoutWindow();
		}, Vn = [
			Bn,
			qn,
			X,
			j.isContextInPopoutWindow
		], y[81] = qn, y[82] = X, y[83] = j.isContextInPopoutWindow, y[84] = Un, y[85] = Vn) : (Un = y[84], Vn = y[85]), _(Un, Vn);
		var Hn = r("useWAWebVoipUiBodySelfSignals")(), Gn = Hn.isSelfHandRaised, zn = Hn.selfReaction;
		r("useWAWebVoipWakeLock")(), r("useWAWebVoipWatchdog")(String(j.isContextInPopoutWindow) + "|" + String(j.isDocPip) + "|" + String(z) + "|" + String(G)), r("useWAWebVoipCameraHealthCheck")(qn);
		var jn = r("useWAWebEventTargetValue")(r("WAWebAvUpgradeBannerState"), "change", v), Kn = r("useWAWebWaitingRoomState")(), Qn = Kn.firstWaitingRoomUserName, Xn = Kn.handleWaitingRoomApprove, Yn = Kn.handleWaitingRoomDeny, Jn = Kn.isWaitingRoomAdmin, Zn = Kn.waitingRoomUsersCount, er;
		y[86] !== Ae || y[87] !== Jn ? (er = Ae != null && o("WAWebUserPrefsMeUser").isMeAccount(Ae) || Jn === !0, y[86] = Ae, y[87] = Jn, y[88] = er) : er = y[88];
		var tr = er, nr, rr;
		y[89] !== ve ? (nr = function() {
			(ve == null || o("WAWebVoipCallStateUtils").isCallTerminal(ve)) && r("WAWebAvUpgradeBannerState").clearAllBanners();
		}, rr = [ve], y[89] = ve, y[90] = nr, y[91] = rr) : (nr = y[90], rr = y[91]), _(nr, rr);
		var or, ar;
		y[92] !== ve ? (or = function() {
			(ve == null || o("WAWebVoipCallStateUtils").isCallTerminal(ve)) && o("WAWebToastManager").ToastManager.close(o("WAWebVoipWebBridgeApi").MICROPHONE_SILENCE_TOAST_ID);
		}, ar = [ve], y[92] = ve, y[93] = or, y[94] = ar) : (or = y[93], ar = y[94]), _(or, ar);
		var ir, lr;
		y[95] !== H || y[96] !== ve ? (ir = function() {
			ve == null && (o("WAWebCallLogUtils").shouldShowCallEndedScreen(H) || o("WAWebVoipUiManager").closeAllVoipWindows({
				callEnded: !0,
				surveyInteracted: !1
			}));
		}, lr = [ve, H], y[95] = H, y[96] = ve, y[97] = ir, y[98] = lr) : (ir = y[97], lr = y[98]), _(ir, lr);
		var sr = r("WAWebCallCollection").activeCall, ur, cr;
		y[99] === Symbol.for("react.memo_cache_sentinel") ? (ur = function() {
			var e, t, n, o = (e = sr == null ? void 0 : sr.id) != null ? e : null, a = (t = (n = r("WAWebCallCollection").lastActiveCall) == null ? void 0 : n.id) != null ? t : null;
			o != null && (a != null && o !== a && r("WAWebAvUpgradeBannerState").clearAllBanners(), r("WAWebCallCollection").lastActiveCall = sr);
		}, cr = [sr], y[99] = ur, y[100] = cr) : (ur = y[99], cr = y[100]), _(ur, cr);
		var dr = (u = jn == null ? void 0 : jn.jid) != null ? u : null, mr;
		y[101] !== _t || y[102] !== X || y[103] !== Ft || y[104] !== j.isDocPip || y[105] !== j.windowEl || y[106] !== dr ? (mr = {
			currentBannerJid: dr,
			isDocPip: j.isDocPip,
			isMuted: _t,
			isVideoCall: X,
			isVideoMuted: Ft,
			popoutWindowEl: j.windowEl
		}, y[101] = _t, y[102] = X, y[103] = Ft, y[104] = j.isDocPip, y[105] = j.windowEl, y[106] = dr, y[107] = mr) : mr = y[107];
		var pr = r("useWAWebVoipCallHandlers")(mr), _r = pr.handleBannerAccept, fr = pr.handleBannerIgnore, gr = pr.handleClickAccept, hr = pr.handleClickEnd, yr = pr.handleClickReject, Cr = pr.handleMuteToggle, br = pr.handleRaiseHandToggle, vr = pr.handleReactionSelect, Sr = pr.handleVideoMuteToggle, Rr = pr.isAccepting, Lr = at.length, Er;
		y[108] === Symbol.for("react.memo_cache_sentinel") ? (Er = o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE, o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), y[108] = Er) : Er = y[108];
		var kr = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Er, b), Ir = Ve && !kr, Tr;
		y[109] !== ve || y[110] !== $e || y[111] !== Ir ? (Tr = Ir ? o("WAWebVoipLobbyUtils").getLobbyButtonDisplayProps($e, ve) : void 0, y[109] = ve, y[110] = $e, y[111] = Ir, y[112] = Tr) : Tr = y[112];
		var Dr = Tr, xr = !Ir && (Lr > 2 || Lt), $r = Me && ve === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely && Lr <= 1 || kr, Pr = !j.isContextInPopoutWindow && !j.isDocPip && (G || z), Nr = Bn && $r && !j.isContextInPopoutWindow && !G && !z && r("WAWebCallCollection").activeCall != null, Mr;
		y[113] !== it || y[114] !== Me ? (Mr = Me ? o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(it) : [], y[113] = it, y[114] = Me, y[115] = Mr) : Mr = y[115];
		var wr = Mr, Ar = (d = (m = r("WAWebCallCollection").activeCall) == null ? void 0 : m.peerJid) != null ? d : null, Fr = xr && !Me && Ar != null, Or;
		y[116] !== at || y[117] !== Fr ? (Or = Fr && Ar != null ? [o("WAWebUserPrefsMeUser").getMeUserMatchingAddressingModeOrThrow(Ar), Ar] : at, y[116] = at, y[117] = Fr, y[118] = Or) : Or = y[118];
		var Br = Or, Wr;
		y[119] !== wr || y[120] !== Fr ? (Wr = Fr && Ar != null ? [Ar] : wr, y[119] = wr, y[120] = Fr, y[121] = Wr) : Wr = y[121];
		var qr = Wr;
		r("useWAWebVoipParticipantAvatarPrefetch")((f = sr == null ? void 0 : sr.id) != null ? f : null, ve, Me && !Pr, Se, lt, wr);
		var Ur = C, Vr;
		y[122] === Symbol.for("react.memo_cache_sentinel") ? (Vr = function() {
			le(!0);
		}, y[122] = Vr) : Vr = y[122];
		var Hr = Vr, Gr = r("useWAWebWaitingRoomSeeAll")(j.isContextInPopoutWindow, Hr, lt, wr, Ur), zr = Gr.handleWaitingRoomSeeAll, jr = Gr.isParticipantsModalOpen, Kr;
		if (On && !An) {
			if (!(G && !j.isContextInPopoutWindow)) {
				var Qr;
				y[123] !== Mn || y[124] !== wn || y[125] !== re || y[126] !== Fn ? (Qr = c.jsx(o("WAWebVoipPostCallSurveyLoadable").WAWebVoipPostCallSurveyLoadable, {
					isCompact: re,
					onDismiss: Mn,
					onInteract: Fn,
					onSubmit: wn
				}), y[123] = Mn, y[124] = wn, y[125] = re, y[126] = Fn, y[127] = Qr) : Qr = y[127], Kr = Qr;
			}
		} else if (ve == null && !kr) {
			if (o("WAWebCallLogUtils").shouldShowCallEndedScreen(H)) {
				var Xr;
				y[128] === Symbol.for("react.memo_cache_sentinel") ? (Xr = c.jsx(r("WAWebVoipCallEndedDisplay.react"), {}), y[128] = Xr) : Xr = y[128], Kr = Xr;
			}
		} else if (Pr) {
			var Yr;
			y[129] !== H ? (Yr = c.jsx(r("WAWebVoipCallActiveInExternalPlayer.react"), { msg: H }), y[129] = H, y[130] = Yr) : Yr = y[130], Kr = Yr;
		} else if (Ie && !kr && r("WAWebCallCollection").activeCall != null) {
			var Jr;
			y[131] === Symbol.for("react.memo_cache_sentinel") ? (Jr = c.jsx(r("WAWebVoipCallLinkPreview.react"), { call: r("WAWebCallCollection").activeCall }), y[131] = Jr) : Jr = y[131], Kr = Jr;
		} else if (xr) {
			var Zr = !X, eo = X ? Dt : void 0, to;
			y[132] !== qe || y[133] !== kt || y[134] !== ve || y[135] !== Br || y[136] !== qr || y[137] !== It || y[138] !== re || y[139] !== mt || y[140] !== vt || y[141] !== xt || y[142] !== $t || y[143] !== Rt || y[144] !== Zr || y[145] !== eo ? (to = c.jsx(o("WAWebVoipUiVideoGroupCallLoadable").WAWebVoipUiVideoGroupCallLoadable, {
				callState: ve,
				groupChat: qe,
				groupCallParticipantsConnected: Br,
				groupParticipantsWithoutSelf: qr,
				isCompactLayout: re,
				isGroupAudioCall: Zr,
				isLinkedGroupCall: mt,
				isSelfScreenSharing: vt,
				getPeerReconnectingState: Ln,
				layoutMode: xt,
				onPinParticipant: eo,
				pinnedParticipantJid: $t,
				screenSharingPeerJid: Rt,
				activeOverride: kt,
				onActiveOverrideChange: It
			}), y[132] = qe, y[133] = kt, y[134] = ve, y[135] = Br, y[136] = qr, y[137] = It, y[138] = re, y[139] = mt, y[140] = vt, y[141] = xt, y[142] = $t, y[143] = Rt, y[144] = Zr, y[145] = eo, y[146] = to) : to = y[146], Kr = to;
		} else if (Ir) {
			var no;
			y[147] !== lt || y[148] !== it ? (no = o("WAWebVoipLobbyUtils").getArePeersActiveInCall(it, lt), y[147] = lt, y[148] = it, y[149] = no) : no = y[149];
			var ro = no, oo = ve != null ? ve : void 0, ao = !j.isContextInPopoutWindow && !j.isDocPip, io;
			y[150] !== ro || y[151] !== H || y[152] !== lt || y[153] !== wr || y[154] !== $e || y[155] !== _t || y[156] !== vt || y[157] !== X || y[158] !== Ft || y[159] !== oo || y[160] !== ao ? (io = c.jsx(o("WAWebFlex.react").FlexItem, {
				testid: "voip-container-lobby",
				grow: 1,
				xstyle: o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.lobbyContainer,
				children: c.jsx(r("WAWebVoipUiLobby.react"), {
					callLogMsg: H,
					callState: oo,
					arePeersActive: ro,
					isSelfScreenSharing: vt,
					isInMiniPlayer: ao,
					isVideoCall: X,
					isVideoMuted: Ft,
					onRingParticipant: Ur,
					participantsWithoutSelf: wr,
					participantStates: lt,
					selfMicMuted: _t,
					isCallOutgoing: $e
				})
			}), y[150] = ro, y[151] = H, y[152] = lt, y[153] = wr, y[154] = $e, y[155] = _t, y[156] = vt, y[157] = X, y[158] = Ft, y[159] = oo, y[160] = ao, y[161] = io) : io = y[161], Kr = io;
		} else if ($r) {
			var lo = j.isContextInPopoutWindow ? o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.videoContainerPopout : o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.videoContainer, so;
			y[162] !== H || y[163] !== ve || y[164] !== _t || y[165] !== Gn || y[166] !== vt || y[167] !== Ft || y[168] !== zn || y[169] !== qt ? (so = c.jsx(o("WAWebVoipUiVideoCallLoadable").WAWebVoipUiVideoCallLoadable, {
				callState: ve,
				isCallLinkLobby: !0,
				isVideoMuted: Ft,
				showPeerVideo: !1,
				showSelfPreview: qt,
				callLogMsg: H,
				selfMicMuted: _t,
				isSelfScreenSharing: vt,
				isSelfHandRaised: Gn,
				selfReaction: zn
			}), y[162] = H, y[163] = ve, y[164] = _t, y[165] = Gn, y[166] = vt, y[167] = Ft, y[168] = zn, y[169] = qt, y[170] = so) : so = y[170];
			var uo;
			y[171] !== lo || y[172] !== so ? (uo = c.jsx(o("WAWebFlex.react").FlexItem, {
				testid: "voip-container-connected-lonely",
				grow: 1,
				xstyle: lo,
				children: so
			}), y[171] = lo, y[172] = so, y[173] = uo) : uo = y[173], Kr = uo;
		} else if ((Zt || un) && !De) {
			var co = vt && !j.isContextInPopoutWindow && !G, mo = j.isContextInPopoutWindow ? o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.videoContainerPopout : o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.videoContainer, po = $n != null ? $n : void 0, _o = Bn && tr, fo;
			y[174] !== H || y[175] !== ve || y[176] !== st || y[177] !== Rn || y[178] !== Jt || y[179] !== Yt || y[180] !== St || y[181] !== re || y[182] !== Me || y[183] !== _t || y[184] !== co || y[185] !== Gn || y[186] !== vt || y[187] !== Ft || y[188] !== zn || y[189] !== qt || y[190] !== po || y[191] !== _o ? (fo = c.jsx(o("WAWebVoipUiVideoCallLoadable").WAWebVoipUiVideoCallLoadable, {
				callState: ve,
				getActivityContainer: ee,
				peerJid: po,
				isCompactLayout: re,
				isGroupCall: Me,
				isScreenShareBannerVisible: co,
				isScreenShareTile: St,
				isSelfHandRaised: Gn,
				isVideoMuted: Ft,
				peerVideoPaused: Jt,
				showPeerVideo: Yt,
				showSelfPreview: qt,
				callLogMsg: H,
				canRemoveParticipant: _o,
				peerMicMuted: st,
				selfMicMuted: _t,
				isSelfScreenSharing: vt,
				videoAnimateInDelay: o("WAWebMoveResizeConstants").MIN_HEIGHT_CHANGE_ANIMATION_DURATION,
				peerReconnectingState: Rn,
				selfReaction: zn
			}), y[174] = H, y[175] = ve, y[176] = st, y[177] = Rn, y[178] = Jt, y[179] = Yt, y[180] = St, y[181] = re, y[182] = Me, y[183] = _t, y[184] = co, y[185] = Gn, y[186] = vt, y[187] = Ft, y[188] = zn, y[189] = qt, y[190] = po, y[191] = _o, y[192] = fo) : fo = y[192];
			var go;
			y[193] !== H || y[194] !== ve || y[195] !== Pe || y[196] !== $e || y[197] !== $n ? (go = !o("WAWebVoipCallStateUtils").isCallActive(ve) && !$e && c.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: $n != null ? o("WAWebWidFactory").createUserWidOrThrow($n) : void 0,
				imageSize: "auto",
				callStateText: o("WAWebCallLogUtils").getCallStateText(ve, H),
				xstyle: [o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.videoCallOverlay, o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.surfaceElevated],
				unknownUserLogContext: Pe
			}), y[193] = H, y[194] = ve, y[195] = Pe, y[196] = $e, y[197] = $n, y[198] = go) : go = y[198];
			var ho;
			y[199] !== mo || y[200] !== fo || y[201] !== go ? (ho = c.jsxs(o("WAWebFlex.react").FlexItem, {
				testid: "voip-container-video-call",
				grow: 1,
				xstyle: mo,
				children: [fo, go]
			}), y[199] = mo, y[200] = fo, y[201] = go, y[202] = ho) : ho = y[202], Kr = ho;
		} else {
			var yo = Bn && tr, Co;
			y[203] !== H || y[204] !== ve || y[205] !== st || y[206] !== ft || y[207] !== qn || y[208] !== $e || y[209] !== re || y[210] !== _t || y[211] !== Gn || y[212] !== vt || y[213] !== Ge || y[214] !== X || y[215] !== Ft || y[216] !== yo ? (Co = c.jsx(r("WAWebVoipVoiceCallContainer.react"), {
				callLogMsg: H,
				callState: ve,
				canRemoveParticipant: yo,
				hasCameraAvailable: ft,
				isCallActive: qn,
				isCallOutgoing: $e,
				isCompactLayout: re,
				isSelfHandRaised: Gn,
				isTabVisible: Ge,
				isVideoCall: X,
				isVideoMuted: Ft,
				peerMicMuted: st,
				selfMicMuted: _t,
				isSelfScreenSharing: vt
			}), y[203] = H, y[204] = ve, y[205] = st, y[206] = ft, y[207] = qn, y[208] = $e, y[209] = re, y[210] = _t, y[211] = Gn, y[212] = vt, y[213] = Ge, y[214] = X, y[215] = Ft, y[216] = yo, y[217] = Co) : Co = y[217], Kr = Co;
		}
		var bo = On && !An, vo = ve != null && !bo, So;
		if (y[218] !== qe || y[219] !== vo || y[220] !== (Oe == null ? void 0 : Oe.id) || y[221] !== (H == null ? void 0 : H.id) || y[222] !== ve || y[223] !== Lr || y[224] !== lt || y[225] !== wr || y[226] !== gr || y[227] !== hr || y[228] !== yr || y[229] !== Tt || y[230] !== Cr || y[231] !== br || y[232] !== vr || y[233] !== Sr || y[234] !== ft || y[235] !== Rr || y[236] !== St || y[237] !== qn || y[238] !== $e || y[239] !== De || y[240] !== Me || y[241] !== mt || y[242] !== $r || y[243] !== _t || y[244] !== Se || y[245] !== Gn || y[246] !== vt || y[247] !== X || y[248] !== Ft || y[249] !== xt || y[250] !== Dr || y[251] !== j.isContextInPopoutWindow || y[252] !== j.isDocPip || y[253] !== zn || y[254] !== Ir || y[255] !== ct) {
			var Ro, Lo, Eo;
			So = vo ? c.jsx(o("WAWebFlex.react").FlexRow, {
				grow: 0,
				shrink: 0,
				basis: "auto",
				xstyle: [
					o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.fullWidth,
					o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.callControlsRow,
					o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain
				],
				style: j.isContextInPopoutWindow && Me ? {
					width: Se ? o("WAWebVoipUiBodyStyles").WIDTH_BESIDE_DRAWER : "100%",
					transition: "width 300ms cubic-bezier(0.1, 0.82, 0.25, 1)"
				} : void 0,
				children: c.jsx(r("WAWebVoipCallControls.react"), {
					callState: ve,
					chat: qe,
					connectedParticipantsCount: Lr,
					isVideoCall: X,
					isCallRinging: De,
					isCallActive: qn,
					isConnectedLonely: $r,
					isInLobby: Ir,
					buttonCustomizations: Dr,
					isMuted: _t,
					isSelfHandRaised: Gn,
					isVideoMuted: Ft,
					hasCameraAvailable: ft,
					isSelfScreenSharing: vt,
					isAnyPeerScreenSharing: St,
					isGroupCall: Me,
					isCallLink: (Ro = (Lo = r("WAWebCallCollection").activeCall) == null ? void 0 : Lo.isCallLink) != null ? Ro : !1,
					showVideoToggle: ((Eo = r("WAWebCallCollection").activeCall) == null ? void 0 : Eo.isCallLink) !== !0 || X,
					layoutMode: xt,
					onLayoutModeToggle: Tt,
					onAccept: function() {
						gr();
					},
					isAccepting: Rr,
					onReject: function() {
						yr();
					},
					onEnd: function() {
						hr();
					},
					onMuteToggle: function() {
						Cr();
					},
					onRaiseHandToggle: function() {
						br();
					},
					onReactionSelect: function(t) {
						vr(t);
					},
					onRingParticipant: Ur,
					onSendMessage: function() {
						var e, t, n = r("WAWebCallCollection").activeCall, a = (e = (t = Oe == null ? void 0 : Oe.id) != null ? t : n == null ? void 0 : n.groupJid) != null ? e : H == null ? void 0 : H.id.remote;
						a != null && o("WAWebVoipActionRequestOpenChat").requestOpenChat(a);
					},
					onToggleParticipantDrawer: ue,
					isParticipantDrawerOpen: Se,
					onVideoMuteToggle: function() {
						Sr();
					},
					participantStates: lt,
					participantsWithoutSelf: wr,
					isLinkedGroupCall: mt,
					showSendMessage: ct && !j.isDocPip,
					selfReaction: zn,
					isCallOutgoing: $e
				})
			}) : null, y[218] = qe, y[219] = vo, y[220] = Oe == null ? void 0 : Oe.id, y[221] = H == null ? void 0 : H.id, y[222] = ve, y[223] = Lr, y[224] = lt, y[225] = wr, y[226] = gr, y[227] = hr, y[228] = yr, y[229] = Tt, y[230] = Cr, y[231] = br, y[232] = vr, y[233] = Sr, y[234] = ft, y[235] = Rr, y[236] = St, y[237] = qn, y[238] = $e, y[239] = De, y[240] = Me, y[241] = mt, y[242] = $r, y[243] = _t, y[244] = Se, y[245] = Gn, y[246] = vt, y[247] = X, y[248] = Ft, y[249] = xt, y[250] = Dr, y[251] = j.isContextInPopoutWindow, y[252] = j.isDocPip, y[253] = zn, y[254] = Ir, y[255] = ct, y[256] = So;
		} else So = y[256];
		var ko = So, Io;
		e: {
			if (jn == null) {
				Io = null;
				break e;
			}
			var To;
			if (y[257] !== jn.jid) {
				var Do = o("WAWebContactCollection").ContactCollection.get(jn.jid);
				To = Do != null ? o("WAWebFrontendContactGetters").getDisplayName(Do) : jn.jid.toString(), y[257] = jn.jid, y[258] = To;
			} else To = y[258];
			Io = To;
		}
		var xo = Io, $o;
		y[259] !== hr || y[260] !== j.windowEl ? ($o = function() {
			hr(o("WAWebVoipSignalingEnums").EndCallReason.Unknown), o("useWAWebVoipWindowSetup").onReactVoipUiCrash(j.windowEl);
		}, y[259] = hr, y[260] = j.windowEl, y[261] = $o) : $o = y[261];
		var Po;
		y[262] === Symbol.for("react.memo_cache_sentinel") ? (Po = [
			o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.voipContainer,
			o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
			o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain
		], y[262] = Po) : Po = y[262];
		var No;
		y[263] !== G || y[264] !== vt || y[265] !== j.isContextInPopoutWindow ? (No = vt && !j.isContextInPopoutWindow && !G && c.jsx(r("WAWebVoipScreenShareBanner.react"), {}), y[263] = G, y[264] = vt, y[265] = j.isContextInPopoutWindow, y[266] = No) : No = y[266];
		var Mo;
		y[267] === Symbol.for("react.memo_cache_sentinel") ? (Mo = [o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.mainUIContainer, o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.fullWidth], y[267] = Mo) : Mo = y[267];
		var wo;
		y[268] !== Me || y[269] !== Se || y[270] !== j.isContextInPopoutWindow ? (wo = j.isContextInPopoutWindow && Me ? {
			width: Se ? o("WAWebVoipUiBodyStyles").WIDTH_BESIDE_DRAWER : "100%",
			transition: "width 300ms cubic-bezier(0.1, 0.82, 0.25, 1)"
		} : void 0, y[268] = Me, y[269] = Se, y[270] = j.isContextInPopoutWindow, y[271] = wo) : wo = y[271];
		var Ao;
		y[272] !== mn || y[273] !== H || y[274] !== ve || y[275] !== st || y[276] !== ft || y[277] !== qn || y[278] !== $e || y[279] !== _t || y[280] !== Gn || y[281] !== vt || y[282] !== Ge || y[283] !== X || y[284] !== Ft || y[285] !== j.isContextInPopoutWindow || y[286] !== j.isDocPip ? (Ao = mn != null && ve != null && !j.isContextInPopoutWindow && !j.isDocPip && c.jsx(r("WAWebVoipUiBodyAudioToVideoOverlay.react"), {
			callLogMsg: H,
			callState: ve,
			hasCameraAvailable: ft,
			isCallActive: qn,
			isCallOutgoing: $e,
			isCompactLayout: mn,
			isSelfHandRaised: Gn,
			isSelfScreenSharing: vt,
			isTabVisible: Ge,
			isVideoCall: X,
			isVideoMuted: Ft,
			peerMicMuted: st,
			selfMicMuted: _t
		}), y[272] = mn, y[273] = H, y[274] = ve, y[275] = st, y[276] = ft, y[277] = qn, y[278] = $e, y[279] = _t, y[280] = Gn, y[281] = vt, y[282] = Ge, y[283] = X, y[284] = Ft, y[285] = j.isContextInPopoutWindow, y[286] = j.isDocPip, y[287] = Ao) : Ao = y[287];
		var Fo;
		y[288] !== Kr || y[289] !== wo || y[290] !== Ao ? (Fo = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			grow: 1,
			shrink: 1,
			basis: "auto",
			xstyle: Mo,
			style: wo,
			children: [Kr, Ao]
		}), y[288] = Kr, y[289] = wo, y[290] = Ao, y[291] = Fo) : Fo = y[291];
		var Oo;
		y[292] !== ko || y[293] !== Fo ? (Oo = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			grow: 1,
			shrink: 1,
			basis: "auto",
			xstyle: o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.mainColumn,
			children: [Fo, ko]
		}), y[292] = ko, y[293] = Fo, y[294] = Oo) : Oo = y[294];
		var Bo;
		y[295] !== Nr ? (Bo = Nr && r("WAWebCallCollection").activeCall && c.jsx(o("WAWebFlex.react").FlexItem, {
			shrink: 0,
			xstyle: o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.sharePanelWrapper,
			children: c.jsx(r("WAWebVoipCallLinkSharePanel.react"), { call: r("WAWebCallCollection").activeCall })
		}), y[295] = Nr, y[296] = Bo) : Bo = y[296];
		var Wo;
		y[297] !== Oo || y[298] !== Bo ? (Wo = c.jsxs(o("WAWebFlex.react").FlexRow, {
			grow: 1,
			xstyle: o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.fullWidth,
			children: [Oo, Bo]
		}), y[297] = Oo, y[298] = Bo, y[299] = Wo) : Wo = y[299];
		var qo;
		y[300] !== xo || y[301] !== jn || y[302] !== _r || y[303] !== fr || y[304] !== G || y[305] !== qn || y[306] !== j.isContextInPopoutWindow ? (qo = jn != null && xo != null && qn && !(!j.isContextInPopoutWindow && G) && c.jsx(r("WAWebVoipAvUpgradeBanner.react"), {
			contactName: xo,
			onAccept: _r,
			onIgnore: fr
		}), y[300] = xo, y[301] = jn, y[302] = _r, y[303] = fr, y[304] = G, y[305] = qn, y[306] = j.isContextInPopoutWindow, y[307] = qo) : qo = y[307];
		var Uo;
		y[308] !== jn || y[309] !== Qn || y[310] !== Xn || y[311] !== Yn || y[312] !== zr || y[313] !== G || y[314] !== qn || y[315] !== Se || y[316] !== jr || y[317] !== Jn || y[318] !== j.isContextInPopoutWindow || y[319] !== Zn ? (Uo = qn && Jn && Zn > 0 && jn == null && !(!j.isContextInPopoutWindow && G) && !Se && !jr && c.jsx(r("WAWebVoipWaitingRoomRequestBanner.react"), {
			firstUserName: Qn,
			onApprove: Xn,
			onDeny: Yn,
			onSeeAll: zr,
			waitingRoomUsersCount: Zn
		}), y[308] = jn, y[309] = Qn, y[310] = Xn, y[311] = Yn, y[312] = zr, y[313] = G, y[314] = qn, y[315] = Se, y[316] = jr, y[317] = Jn, y[318] = j.isContextInPopoutWindow, y[319] = Zn, y[320] = Uo) : Uo = y[320];
		var Vo;
		y[321] !== On ? (Vo = n("cr:2518") != null && !On && c.jsx(n("cr:2518").Bugnub, {}), y[321] = On, y[322] = Vo) : Vo = y[322];
		var Ho;
		y[323] !== qn ? (Ho = o("WAWebCurrentUser").isEmployee() && qn && c.jsx(r("WAWebVoipDebugInfoOverlay.react"), {}), y[323] = qn, y[324] = Ho) : Ho = y[324];
		var Go;
		y[325] !== qn ? (Go = o("WAWebCurrentUser").isEmployee() && qn && c.jsx(r("WAWebVoipNetworkConditionerOverlay.react"), {}), y[325] = qn, y[326] = Go) : Go = y[326];
		var zo = j.isContextInPopoutWindow && Me && Se, jo;
		y[327] !== vo || y[328] !== zo ? (jo = c.jsx(o("WAWebVoipUiToastContainer.react").WAWebVoipUiToastContainer, {
			areCallControlsVisible: vo,
			isSidePanelVisible: zo,
			ref: te
		}), y[327] = vo, y[328] = zo, y[329] = jo) : jo = y[329];
		var Ko;
		y[330] !== qe || y[331] !== lt || y[332] !== wr || y[333] !== Me || y[334] !== mt || y[335] !== Se || y[336] !== X || y[337] !== j.isContextInPopoutWindow ? (Ko = j.isContextInPopoutWindow && Me && c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: r("WAWebL10N").isRTL() ? "slide-left-rtl" : "slide-left",
			component: "div",
			children: Se ? c.jsx(r("WAWebVoipCallParticipantsDrawer.react"), {
				call: r("WAWebCallCollection").activeCall,
				chat: qe,
				isLinkedGroupCall: mt,
				isVideoCall: X,
				onClose: de,
				onRingParticipant: Ur,
				participantStates: lt,
				participantsWithoutSelf: wr,
				showCloseButton: !0
			}, "participant-drawer") : null
		}), y[330] = qe, y[331] = lt, y[332] = wr, y[333] = Me, y[334] = mt, y[335] = Se, y[336] = X, y[337] = j.isContextInPopoutWindow, y[338] = Ko) : Ko = y[338];
		var Qo;
		y[339] !== No || y[340] !== Wo || y[341] !== qo || y[342] !== Uo || y[343] !== Vo || y[344] !== Ho || y[345] !== Go || y[346] !== jo || y[347] !== Ko || y[348] !== Ce ? (Qo = c.jsx(r("WAWebVoipDarkThemeRoot.react"), {
			ref: J,
			tabIndex: -1,
			xstyle: Po,
			children: c.jsxs(r("WAWebVoipUiContext").Provider, {
				value: Ce,
				children: [
					No,
					Wo,
					qo,
					Uo,
					Vo,
					Ho,
					Go,
					jo,
					Ko
				]
			})
		}), y[339] = No, y[340] = Wo, y[341] = qo, y[342] = Uo, y[343] = Vo, y[344] = Ho, y[345] = Go, y[346] = jo, y[347] = Ko, y[348] = Ce, y[349] = Qo) : Qo = y[349];
		var Xo;
		return y[350] !== $o || y[351] !== Qo ? (Xo = c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "WAWebVoipUi",
			onError: $o,
			children: Qo
		}), y[350] = $o, y[351] = Qo, y[352] = Xo) : Xo = y[352], Xo;
	}
	function C(e) {
		o("WAWebVoipStartCall").inviteToCall(e);
	}
	function b() {
		var e;
		return o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() && ((e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.isConnectingToCallLinkLobby()) === !0;
	}
	function v() {
		return r("WAWebAvUpgradeBannerState").getCurrentBanner();
	}
	function S() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null || (t = t.peerJid) == null ? void 0 : t.toJid()) != null ? e : "";
	}
	function R(e) {
		var t = r("WAWebCallCollection").activeCall;
		return t == null || e == null ? null : typeof e == "object" && e != null && "toString" in e ? t.getPeerReconnectingState(e) : null;
	}
	function L() {
		var e, t = r("WAWebCallCollection").activeCall;
		if (t == null || !t.isGroup) return null;
		var n = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall((e = t.groupCallParticipantsConnected) != null ? e : []);
		return n == null ? null : t.getPeerReconnectingState(n);
	}
	function E() {
		var e = r("WAWebCallCollection").activeCall;
		return (e == null ? void 0 : e.peerJid) == null ? null : e.getPeerReconnectingState(e.peerJid);
	}
	function k() {
		var e, t = r("WAWebCallCollection").activeCall;
		if (t == null || !t.isGroup) return [!1, !1];
		var n = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall((e = t.groupCallParticipantsConnected) != null ? e : []);
		if (n == null) return [!1, !1];
		var a = t.getParticipantVideoState(n);
		return [o("WAWebVoipVideoStateUtils").shouldShowVideo(a), o("WAWebVoipVideoStateUtils").isVideoPaused(a)];
	}
	function I() {
		var e = r("WAWebCallCollection").activeCall;
		return (e == null ? void 0 : e.peerVideoState) == null ? !1 : o("WAWebVoipVideoStateUtils").isVideoPaused(e.peerVideoState);
	}
	function T() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.shouldShowPeerVideo()) != null ? e : !1;
	}
	function D() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.shouldShowSelfPreview()) != null ? e : !1;
	}
	function x() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.shouldShowVideoUI()) != null ? e : !1;
	}
	function $() {
		var e, t, n, o, a, i;
		return [
			(e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isSelfScreenSharing()) != null ? e : !1,
			(n = (o = r("WAWebCallCollection").activeCall) == null ? void 0 : o.isAnyPeerScreenSharing()) != null ? n : !1,
			(a = (i = r("WAWebCallCollection").activeCall) == null ? void 0 : i.getScreenSharingPeerJid()) != null ? a : null
		];
	}
	function P() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.selfMicMuted) != null ? e : !1;
	}
	function N() {
		var e = r("WAWebCallCollection").activeCall;
		return (e == null ? void 0 : e.isGroup) === !0 && (e == null ? void 0 : e.groupJid) != null;
	}
	function M() {
		var e = r("WAWebCallCollection").activeCall;
		return e == null ? !1 : !e.isGroup || e.groupJid != null;
	}
	function w() {
		var e, t, n, o, a, i;
		return [
			(e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.groupCallParticipantsConnected) != null ? e : [],
			(n = (o = r("WAWebCallCollection").activeCall) == null ? void 0 : o.groupCallParticipants) != null ? n : [],
			(a = (i = r("WAWebCallCollection").activeCall) == null ? void 0 : i.groupCallParticipantStates) != null ? a : new Map()
		];
	}
	function A() {
		var e, t = r("WAWebCallCollection").activeCall;
		if (t == null || !t.isGroup) return !1;
		var n = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall((e = t.groupCallParticipantsConnected) != null ? e : []);
		return n != null ? t.isParticipantMicMuted(n) : !1;
	}
	function F() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.peerMicMuted) != null ? e : !1;
	}
	function O() {
		var e;
		return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.callLinkCreatorJid;
	}
	function B() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isGroup) != null ? e : !1;
	}
	function W() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isInCallLinkPreview()) != null ? e : !1;
	}
	function q() {
		var e;
		return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getState();
	}
	function U(e) {
		return !e;
	}
	function V(t) {
		if (t == null) return null;
		var n = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(t);
		return n == null && o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: getCallLinkChat: no chat for creator wid (isLid=", ")"])), t.isLid().toString()), n;
	}
	l.default = y;
}), 226);
