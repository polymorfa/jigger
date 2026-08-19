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
		var t, a, i, l, u, d, y, b, v, S, R, L, E = e.callLogMsg;
		r("useWAWebVoipUiAnrTracking")(), r("useWAWebVoipVideoStreamPause")();
		var k = r("useWAWebEventTargetValue")(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow), I = r("useWAWebEventTargetValue")(o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter, "docPipOpenStateChanged", o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen), T = p(r("WAWebVoipUiPopoutWindowContext"));
		r("useWAWebVoipPopoutUiReadySignal")();
		var D = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO), function() {
			var e, t, n;
			return (e = (t = (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.isVideo) != null ? t : E == null ? void 0 : E.isVideoCall) != null ? e : !1;
		}), x = (t = (a = r("WAWebCallCollection").activeCall) == null ? void 0 : a.id) != null ? t : null, $ = g(null), P = m(function() {
			return $.current;
		}, []), N = g(null), M = r("useWAWebVoipContainerSize")($), w = M.isCompactLayout, A = M.uiHeight, F = h(!1), O = F[0], B = F[1], W = m(function() {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_PARTICIPANT_DRAWER_TOGGLE), B(function(e) {
				return !e;
			});
		}, []), q = m(function() {
			B(!1);
		}, []), U = m(function(e, t) {
			var n;
			(n = N.current) == null || n.showToast({
				message: e,
				type: "default",
				align: "center",
				dedupId: t
			});
		}, []), V = m(function(e, t) {
			var n;
			(n = N.current) == null || n.showToast({
				message: e,
				type: "default",
				align: "center",
				Icon: r("WDSIconIcAlertWarning.react"),
				dedupId: t
			});
		}, []), H = m(function(e, t, n) {
			var r;
			(r = N.current) == null || r.showToast({
				message: e,
				type: "default",
				align: t != null ? t : "center",
				dedupId: n
			});
		}, []), G = f(function() {
			return {
				uiHeight: A,
				showCenteredToast: U,
				showToast: H
			};
		}, [
			A,
			U,
			H
		]), z = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), function() {
			var e;
			return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getState();
		}), j = O && z != null, K = j && T.isContextInPopoutWindow;
		_(function() {
			return o("WAWebVoipWindowConstants").setIsSidebarVisible(K), function() {
				K && o("WAWebVoipWindowConstants").setIsSidebarVisible(!1);
			};
		}, [K]);
		var Q = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE, o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isInCallLinkPreview()) != null ? e : !1;
		}), X = o("WAWebVoipCallStateUtils").isCallIncoming(z), Y = o("WAWebVoipCallStateUtils").isCallOutgoing(z), J = X ? "call_incoming" : "in_call", Z = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isGroup) != null ? e : !1;
		}), ee = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_CREATOR_JID), function() {
			var e;
			return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.callLinkCreatorJid;
		}), te = C(ee), ne = (i = E ? o("WAWebChatCollection").ChatCollection.get(E.id.remote) : null) != null ? i : te, re = o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(Z, z), oe = h(!document.hidden), ae = oe[0], ie = oe[1], le = g(null);
		_(function() {
			if (X && !Y) {
				var e = function() {
					o("WAWebABProps").getABPropConfigValue("enable_web_voip_anr_optimizations") ? (le.current != null && window.clearTimeout(le.current), le.current = window.setTimeout(function() {
						le.current = null, ie(!document.hidden);
					}, 200)) : ie(!document.hidden);
				};
				return document.addEventListener("visibilitychange", e), function() {
					document.removeEventListener("visibilitychange", e), le.current != null && (window.clearTimeout(le.current), le.current = null);
				};
			}
		}, [X, Y]), _(function() {
			var e;
			(e = $.current) == null || e.focus();
		}, []), r("useWAWebPreventCallWindowPinchZoom")($, function() {
			U(s._(
				/*BTDS*/
				""
			), "voip-pinch-zoom-blocked");
		});
		var se = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_MIC_MUTED), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.peerMicMuted) != null ? e : !1;
		}), ue = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "participantMicStateChange " + o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), function() {
			var e, t = r("WAWebCallCollection").activeCall;
			if (t == null || !t.isGroup) return !1;
			var n = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall((e = t.groupCallParticipantsConnected) != null ? e : []);
			return n != null ? t.isParticipantMicMuted(n) : !1;
		}), ce = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), function() {
			var e, t, n, o, a, i;
			return [
				(e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.groupCallParticipantsConnected) != null ? e : [],
				(n = (o = r("WAWebCallCollection").activeCall) == null ? void 0 : o.groupCallParticipants) != null ? n : [],
				(a = (i = r("WAWebCallCollection").activeCall) == null ? void 0 : i.groupCallParticipantStates) != null ? a : new Map()
			];
		}), de = ce[0], me = ce[1], pe = ce[2], _e = Z && de.length === 2 ? ue : se, fe = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP, o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_JID), function() {
			var e = r("WAWebCallCollection").activeCall;
			return e == null ? !1 : !e.isGroup || e.groupJid != null;
		}), ge = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP, o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_JID), function() {
			var e = r("WAWebCallCollection").activeCall;
			return (e == null ? void 0 : e.isGroup) === !0 && (e == null ? void 0 : e.groupJid) != null;
		}), he = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_MIC_MUTED), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.selfMicMuted) != null ? e : !1;
		}), ye = r("useWAWebVoipCameraAvailability")(), Ce = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_VIDEO_STATE), function() {
			return r("WAWebCallCollection").activeCall ? !o("WAWebVoipVideoStateUtils").isVideoEnabled(r("WAWebCallCollection").activeCall.selfVideoState) : !D;
		}), be = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SCREEN_SHARE_STATES), function() {
			var e, t, n, o, a, i;
			return [
				(e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isSelfScreenSharing()) != null ? e : !1,
				(n = (o = r("WAWebCallCollection").activeCall) == null ? void 0 : o.isAnyPeerScreenSharing()) != null ? n : !1,
				(a = (i = r("WAWebCallCollection").activeCall) == null ? void 0 : i.getScreenSharingPeerJid()) != null ? a : null
			];
		}), ve = be[0], Se = be[1], Re = be[2], Le = ve || Se, Ee = r("useWAWebVoipUiBodyGroupLayout")(x, Le), ke = Ee.activeOverride, Ie = Ee.handleActiveOverrideChange, Te = Ee.handleLayoutModeToggle, De = Ee.handlePinParticipant, xe = Ee.layoutMode, $e = Ee.pinnedParticipantJid, Pe = g(z);
		_(function() {
			var e = Pe.current;
			Pe.current = z, e != null && z == null ? (o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CALL_ENDED_SCREEN_SHOWN), Ie(null)) : e !== z && z != null && o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CALL_STATE_UI_TRANSITION, String(z));
		}, [z, Ie]);
		var Ne = !T.isContextInPopoutWindow && !T.isDocPip && (k || I);
		r("useWAWebVoipCallToasts")({
			callState: z,
			groupCallParticipantsConnected: de,
			isCallInExternalPlayer: Ne,
			isSelfScreenSharing: ve,
			isAnyPeerScreenSharing: Se,
			showCenteredToast: U,
			showWarningToast: V
		});
		var Me = Ce || !ye, we = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE, o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.shouldShowVideoUI()) != null ? e : !1;
		}), Ae = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.shouldShowSelfPreview()) != null ? e : !1;
		}), Fe = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.shouldShowPeerVideo()) != null ? e : !1;
		}), Oe = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE), function() {
			var e = r("WAWebCallCollection").activeCall;
			return (e == null ? void 0 : e.peerVideoState) == null ? !1 : o("WAWebVoipVideoStateUtils").isVideoPaused(e.peerVideoState);
		}), Be = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "participantVideoStateChange " + o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), function() {
			var e, t = r("WAWebCallCollection").activeCall;
			if (t == null || !t.isGroup) return [!1, !1];
			var n = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall((e = t.groupCallParticipantsConnected) != null ? e : []);
			if (n == null) return [!1, !1];
			var a = t.getParticipantVideoState(n);
			return [o("WAWebVoipVideoStateUtils").shouldShowVideo(a), o("WAWebVoipVideoStateUtils").isVideoPaused(a)];
		}), We = Be[0], qe = Be[1], Ue = Z && de.length === 2, Ve = Ue ? We : Fe, He = Ue ? qe : Oe, Ge = Ue ? we || Ve : we, ze = h(x), je = ze[0], Ke = ze[1], Qe = h(Z), Xe = Qe[0], Ye = Qe[1], Je = h(function() {
			return !Z && Ge;
		}), Ze = Je[0], et = Je[1], tt = h(null), nt = tt[0], rt = tt[1];
		je !== x || Xe !== Z ? (Ke(x), Ye(Z), et(!Z && Ge), rt(null)) : !Z && Ge && !Ze && (et(!0), rt(w)), o("useWAWebTimeout").useTimeout(function() {
			rt(null);
		}, o("WAWebMoveResizeConstants").MIN_HEIGHT_CHANGE_ANIMATION_DURATION, { immediate: nt != null });
		var ot = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING), function() {
			var e = r("WAWebCallCollection").activeCall;
			return (e == null ? void 0 : e.peerJid) == null ? null : e.getPeerReconnectingState(e.peerJid);
		}), at = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING) + " " + o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), function() {
			var e, t = r("WAWebCallCollection").activeCall;
			if (t == null || !t.isGroup) return null;
			var n = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall((e = t.groupCallParticipantsConnected) != null ? e : []);
			return n == null ? null : t.getPeerReconnectingState(n);
		}), it = Ue ? at : ot, lt = m(function(e) {
			var t = r("WAWebCallCollection").activeCall;
			return t == null || e == null ? null : typeof e == "object" && e != null && "toString" in e ? t.getPeerReconnectingState(e) : null;
		}, []), st = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_JID), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null || (t = t.peerJid) == null ? void 0 : t.toJid()) != null ? e : "";
		}), ut = f(function() {
			if (Z) {
				var e, t;
				return (e = (t = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall(de)) == null ? void 0 : t.toJid()) != null ? e : null;
			}
			return st;
		}, [
			Z,
			st,
			de
		]), ct = r("useWAWebVoipPostCallSurvey")({
			isCallRinging: X,
			isCallOutgoing: Y,
			isCallActiveInPopoutWindow: k,
			isContextInPopoutWindow: T.isContextInPopoutWindow
		}), dt = ct.handleSurveyDismiss, mt = ct.handleSurveySubmit, pt = ct.isSurveyDismissed, _t = ct.onSurveyInteract, ft = ct.shouldShowPostCallSurvey, gt = (l = (u = r("WAWebCallCollection").activeCall) == null ? void 0 : u.isCallLink) != null ? l : !1, ht = o("WAWebVoipCallStateUtils").isCallConnected(z);
		_(function() {
			gt && ht && D && !T.isContextInPopoutWindow && o("WAWebABProps").getABPropConfigValue("web_calling_auto_popout_video") && !o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow() && o("WAWebVoipUiManager").openVoipUiPopoutWindow();
		}, [
			gt,
			ht,
			D,
			T.isContextInPopoutWindow
		]);
		var yt = r("useWAWebVoipUiBodySelfSignals")(), Ct = yt.isSelfHandRaised, bt = yt.selfReaction;
		r("useWAWebVoipWakeLock")(), r("useWAWebVoipWatchdog")(String(T.isContextInPopoutWindow) + "|" + String(T.isDocPip) + "|" + String(I) + "|" + String(k)), r("useWAWebVoipCameraHealthCheck")(ht);
		var vt = r("useWAWebEventTargetValue")(r("WAWebAvUpgradeBannerState"), "change", function() {
			return r("WAWebAvUpgradeBannerState").getCurrentBanner();
		}), St = r("useWAWebWaitingRoomState")(), Rt = St.firstWaitingRoomUserName, Lt = St.handleWaitingRoomApprove, Et = St.handleWaitingRoomDeny, kt = St.isWaitingRoomAdmin, It = St.waitingRoomUsersCount, Tt = ee != null && o("WAWebUserPrefsMeUser").isMeAccount(ee) || kt === !0;
		_(function() {
			(z == null || o("WAWebVoipCallStateUtils").isCallTerminal(z)) && r("WAWebAvUpgradeBannerState").clearAllBanners();
		}, [z]), _(function() {
			(z == null || o("WAWebVoipCallStateUtils").isCallTerminal(z)) && o("WAWebToastManager").ToastManager.close(o("WAWebVoipWebBridgeApi").MICROPHONE_SILENCE_TOAST_ID);
		}, [z]), _(function() {
			z == null && (o("WAWebCallLogUtils").shouldShowCallEndedScreen(E) || o("WAWebVoipUiManager").closeAllVoipWindows({
				callEnded: !0,
				surveyInteracted: !1
			}));
		}, [z, E]);
		var Dt = r("WAWebCallCollection").activeCall;
		_(function() {
			var e, t, n, o = (e = Dt == null ? void 0 : Dt.id) != null ? e : null, a = (t = (n = r("WAWebCallCollection").lastActiveCall) == null ? void 0 : n.id) != null ? t : null;
			o != null && (a != null && o !== a && r("WAWebAvUpgradeBannerState").clearAllBanners(), r("WAWebCallCollection").lastActiveCall = Dt);
		}, [Dt]);
		var xt = r("useWAWebVoipCallHandlers")({
			currentBannerJid: (d = vt == null ? void 0 : vt.jid) != null ? d : null,
			isDocPip: T.isDocPip,
			isMuted: he,
			isVideoCall: D,
			isVideoMuted: Me,
			popoutWindowEl: T.windowEl
		}), $t = xt.handleBannerAccept, Pt = xt.handleBannerIgnore, Nt = xt.handleClickAccept, Mt = xt.handleClickEnd, wt = xt.handleClickReject, At = xt.handleMuteToggle, Ft = xt.handleRaiseHandToggle, Ot = xt.handleReactionSelect, Bt = xt.handleVideoMuteToggle, Wt = xt.isAccepting, qt = de.length, Ut = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getMultiChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE, o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), function() {
			var e;
			return o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() && ((e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.isConnectingToCallLinkLobby()) === !0;
		}), Vt = re && !Ut, Ht = Vt ? o("WAWebVoipLobbyUtils").getLobbyButtonDisplayProps(Y, z) : void 0, Gt = !Vt && (qt > 2 || Le), zt = Z && z === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely && qt <= 1 || Ut, jt = !T.isContextInPopoutWindow && !T.isDocPip && (k || I), Kt = gt && zt && !T.isContextInPopoutWindow && !k && !I && r("WAWebCallCollection").activeCall != null, Qt = f(function() {
			return Z ? o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(me) : [];
		}, [me, Z]), Xt = (y = (b = r("WAWebCallCollection").activeCall) == null ? void 0 : b.peerJid) != null ? y : null, Yt = Gt && !Z && Xt != null, Jt = f(function() {
			return Yt && Xt != null ? [o("WAWebUserPrefsMeUser").getMeUserMatchingAddressingModeOrThrow(Xt), Xt] : de;
		}, [
			Yt,
			Xt,
			de
		]), Zt = f(function() {
			return Yt && Xt != null ? [Xt] : Qt;
		}, [
			Yt,
			Xt,
			Qt
		]);
		r("useWAWebVoipParticipantAvatarPrefetch")((v = Dt == null ? void 0 : Dt.id) != null ? v : null, z, Z && !jt, j, pe, Qt);
		var en = m(function(e) {
			o("WAWebVoipStartCall").inviteToCall(e);
		}, []), tn = m(function() {
			B(!0);
		}, []), nn = r("useWAWebWaitingRoomSeeAll")(T.isContextInPopoutWindow, tn, pe, Qt, en), rn = nn.handleWaitingRoomSeeAll, on = nn.isParticipantsModalOpen, an;
		if (ft && !pt) k && !T.isContextInPopoutWindow || (an = c.jsx(o("WAWebVoipPostCallSurveyLoadable").WAWebVoipPostCallSurveyLoadable, {
			isCompact: w,
			onDismiss: dt,
			onInteract: _t,
			onSubmit: mt
		}));
		else if (z == null && !Ut) o("WAWebCallLogUtils").shouldShowCallEndedScreen(E) && (an = c.jsx(r("WAWebVoipCallEndedDisplay.react"), {}));
		else if (jt) an = c.jsx(r("WAWebVoipCallActiveInExternalPlayer.react"), { msg: E });
		else if (Q && !Ut && r("WAWebCallCollection").activeCall != null) an = c.jsx(r("WAWebVoipCallLinkPreview.react"), { call: r("WAWebCallCollection").activeCall });
		else if (Gt) an = c.jsx(o("WAWebVoipUiVideoGroupCallLoadable").WAWebVoipUiVideoGroupCallLoadable, {
			callState: z,
			groupChat: ne,
			groupCallParticipantsConnected: Jt,
			groupParticipantsWithoutSelf: Zt,
			isCompactLayout: w,
			isGroupAudioCall: !D,
			isLinkedGroupCall: ge,
			isSelfScreenSharing: ve,
			getPeerReconnectingState: lt,
			layoutMode: xe,
			onPinParticipant: D ? De : void 0,
			pinnedParticipantJid: $e,
			screenSharingPeerJid: Re,
			activeOverride: ke,
			onActiveOverrideChange: Ie
		});
		else if (Vt) {
			var ln = o("WAWebVoipLobbyUtils").getArePeersActiveInCall(me, pe);
			an = c.jsx(o("WAWebFlex.react").FlexItem, {
				testid: "voip-container-lobby",
				grow: 1,
				xstyle: o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.lobbyContainer,
				children: c.jsx(r("WAWebVoipUiLobby.react"), {
					callLogMsg: E,
					callState: z != null ? z : void 0,
					arePeersActive: ln,
					isSelfScreenSharing: ve,
					isInMiniPlayer: !T.isContextInPopoutWindow && !T.isDocPip,
					isVideoCall: D,
					isVideoMuted: Me,
					onRingParticipant: en,
					participantsWithoutSelf: Qt,
					participantStates: pe,
					selfMicMuted: he,
					isCallOutgoing: Y
				})
			});
		} else if (zt) an = c.jsx(o("WAWebFlex.react").FlexItem, {
			testid: "voip-container-connected-lonely",
			grow: 1,
			xstyle: T.isContextInPopoutWindow ? o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.videoContainerPopout : o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.videoContainer,
			children: c.jsx(o("WAWebVoipUiVideoCallLoadable").WAWebVoipUiVideoCallLoadable, {
				callState: z,
				isCallLinkLobby: !0,
				isVideoMuted: Me,
				showPeerVideo: !1,
				showSelfPreview: Ae,
				callLogMsg: E,
				selfMicMuted: he,
				isSelfScreenSharing: ve,
				isSelfHandRaised: Ct,
				selfReaction: bt
			})
		});
		else if ((Ge || Ze) && !X) {
			var sn = ve && !T.isContextInPopoutWindow && !k;
			an = c.jsxs(o("WAWebFlex.react").FlexItem, {
				testid: "voip-container-video-call",
				grow: 1,
				xstyle: T.isContextInPopoutWindow ? o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.videoContainerPopout : o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.videoContainer,
				children: [c.jsx(o("WAWebVoipUiVideoCallLoadable").WAWebVoipUiVideoCallLoadable, {
					callState: z,
					getActivityContainer: P,
					peerJid: ut != null ? ut : void 0,
					isCompactLayout: w,
					isGroupCall: Z,
					isScreenShareBannerVisible: sn,
					isScreenShareTile: Se,
					isSelfHandRaised: Ct,
					isVideoMuted: Me,
					peerVideoPaused: He,
					showPeerVideo: Ve,
					showSelfPreview: Ae,
					callLogMsg: E,
					canRemoveParticipant: gt && Tt,
					peerMicMuted: _e,
					selfMicMuted: he,
					isSelfScreenSharing: ve,
					videoAnimateInDelay: o("WAWebMoveResizeConstants").MIN_HEIGHT_CHANGE_ANIMATION_DURATION,
					peerReconnectingState: it,
					selfReaction: bt
				}), !o("WAWebVoipCallStateUtils").isCallActive(z) && !Y && c.jsx(r("WAWebCallParticipantInfo.react"), {
					userId: ut != null ? o("WAWebWidFactory").createUserWidOrThrow(ut) : void 0,
					imageSize: "auto",
					callStateText: o("WAWebCallLogUtils").getCallStateText(z, E),
					xstyle: [o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.videoCallOverlay, o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.surfaceElevated],
					unknownUserLogContext: J
				})]
			});
		} else an = c.jsx(r("WAWebVoipVoiceCallContainer.react"), {
			callLogMsg: E,
			callState: z,
			canRemoveParticipant: gt && Tt,
			hasCameraAvailable: ye,
			isCallActive: ht,
			isCallOutgoing: Y,
			isCompactLayout: w,
			isSelfHandRaised: Ct,
			isTabVisible: ae,
			isVideoCall: D,
			isVideoMuted: Me,
			peerMicMuted: _e,
			selfMicMuted: he,
			isSelfScreenSharing: ve
		});
		var un = ft && !pt, cn = z != null && !un, dn = cn ? c.jsx(o("WAWebFlex.react").FlexRow, {
			grow: 0,
			shrink: 0,
			basis: "auto",
			xstyle: [
				o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.fullWidth,
				o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.callControlsRow,
				o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain
			],
			style: T.isContextInPopoutWindow && Z ? {
				width: j ? o("WAWebVoipUiBodyStyles").WIDTH_BESIDE_DRAWER : "100%",
				transition: "width 300ms cubic-bezier(0.1, 0.82, 0.25, 1)"
			} : void 0,
			children: c.jsx(r("WAWebVoipCallControls.react"), {
				callState: z,
				chat: ne,
				connectedParticipantsCount: qt,
				isVideoCall: D,
				isCallRinging: X,
				isCallActive: ht,
				isConnectedLonely: zt,
				isInLobby: Vt,
				buttonCustomizations: Ht,
				isMuted: he,
				isSelfHandRaised: Ct,
				isVideoMuted: Me,
				hasCameraAvailable: ye,
				isSelfScreenSharing: ve,
				isAnyPeerScreenSharing: Se,
				isGroupCall: Z,
				isCallLink: (S = (R = r("WAWebCallCollection").activeCall) == null ? void 0 : R.isCallLink) != null ? S : !1,
				showVideoToggle: ((L = r("WAWebCallCollection").activeCall) == null ? void 0 : L.isCallLink) !== !0 || D,
				layoutMode: xe,
				onLayoutModeToggle: Te,
				onAccept: function() {
					Nt();
				},
				isAccepting: Wt,
				onReject: function() {
					wt();
				},
				onEnd: function() {
					Mt();
				},
				onMuteToggle: function() {
					At();
				},
				onRaiseHandToggle: function() {
					Ft();
				},
				onReactionSelect: function(t) {
					Ot(t);
				},
				onRingParticipant: en,
				onSendMessage: function() {
					var e, t, n = r("WAWebCallCollection").activeCall, a = (e = (t = te == null ? void 0 : te.id) != null ? t : n == null ? void 0 : n.groupJid) != null ? e : E == null ? void 0 : E.id.remote;
					a != null && o("WAWebVoipActionRequestOpenChat").requestOpenChat(a);
				},
				onToggleParticipantDrawer: W,
				isParticipantDrawerOpen: j,
				onVideoMuteToggle: function() {
					Bt();
				},
				participantStates: pe,
				participantsWithoutSelf: Qt,
				isLinkedGroupCall: ge,
				showSendMessage: fe && !T.isDocPip,
				selfReaction: bt,
				isCallOutgoing: Y
			})
		}) : null, mn = f(function() {
			if (vt == null) return null;
			var e = o("WAWebContactCollection").ContactCollection.get(vt.jid);
			return e != null ? o("WAWebFrontendContactGetters").getDisplayName(e) : vt.jid.toString();
		}, [vt]);
		return c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "WAWebVoipUi",
			onError: function() {
				Mt(o("WAWebVoipSignalingEnums").EndCallReason.Unknown), o("useWAWebVoipWindowSetup").onReactVoipUiCrash(T.windowEl);
			},
			children: c.jsx(r("WAWebVoipDarkThemeRoot.react"), {
				ref: $,
				tabIndex: -1,
				xstyle: [
					o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.voipContainer,
					o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
					o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain
				],
				children: c.jsxs(r("WAWebVoipUiContext").Provider, {
					value: G,
					children: [
						ve && !T.isContextInPopoutWindow && !k && c.jsx(r("WAWebVoipScreenShareBanner.react"), {}),
						c.jsxs(o("WAWebFlex.react").FlexRow, {
							grow: 1,
							xstyle: o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.fullWidth,
							children: [c.jsxs(o("WAWebFlex.react").FlexColumn, {
								grow: 1,
								shrink: 1,
								basis: "auto",
								xstyle: o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.mainColumn,
								children: [c.jsxs(o("WAWebFlex.react").FlexColumn, {
									align: "center",
									justify: "center",
									grow: 1,
									shrink: 1,
									basis: "auto",
									xstyle: [o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.mainUIContainer, o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.fullWidth],
									style: T.isContextInPopoutWindow && Z ? {
										width: j ? o("WAWebVoipUiBodyStyles").WIDTH_BESIDE_DRAWER : "100%",
										transition: "width 300ms cubic-bezier(0.1, 0.82, 0.25, 1)"
									} : void 0,
									children: [an, nt != null && z != null && !T.isContextInPopoutWindow && !T.isDocPip && c.jsx(r("WAWebVoipUiBodyAudioToVideoOverlay.react"), {
										callLogMsg: E,
										callState: z,
										hasCameraAvailable: ye,
										isCallActive: ht,
										isCallOutgoing: Y,
										isCompactLayout: nt,
										isSelfHandRaised: Ct,
										isSelfScreenSharing: ve,
										isTabVisible: ae,
										isVideoCall: D,
										isVideoMuted: Me,
										peerMicMuted: _e,
										selfMicMuted: he
									})]
								}), dn]
							}), Kt && r("WAWebCallCollection").activeCall && c.jsx(o("WAWebFlex.react").FlexItem, {
								shrink: 0,
								xstyle: o("WAWebVoipUiBodyStyles").WAWebVoipUiBodyStyles.sharePanelWrapper,
								children: c.jsx(r("WAWebVoipCallLinkSharePanel.react"), { call: r("WAWebCallCollection").activeCall })
							})]
						}),
						vt != null && mn != null && ht && !(!T.isContextInPopoutWindow && k) && c.jsx(r("WAWebVoipAvUpgradeBanner.react"), {
							contactName: mn,
							onAccept: $t,
							onIgnore: Pt
						}),
						ht && kt && It > 0 && vt == null && !(!T.isContextInPopoutWindow && k) && !j && !on && c.jsx(r("WAWebVoipWaitingRoomRequestBanner.react"), {
							firstUserName: Rt,
							onApprove: Lt,
							onDeny: Et,
							onSeeAll: rn,
							waitingRoomUsersCount: It
						}),
						n("cr:2518") != null && !ft && c.jsx(n("cr:2518").Bugnub, {}),
						o("WAWebCurrentUser").isEmployee() && ht && c.jsx(r("WAWebVoipDebugInfoOverlay.react"), {}),
						o("WAWebCurrentUser").isEmployee() && ht && c.jsx(r("WAWebVoipNetworkConditionerOverlay.react"), {}),
						c.jsx(o("WAWebVoipUiToastContainer.react").WAWebVoipUiToastContainer, {
							areCallControlsVisible: cn,
							isSidePanelVisible: T.isContextInPopoutWindow && Z && j,
							ref: N
						}),
						T.isContextInPopoutWindow && Z && c.jsx(r("WAWebVelocityTransitionGroup"), {
							transitionName: r("WAWebL10N").isRTL() ? "slide-left-rtl" : "slide-left",
							component: "div",
							children: j ? c.jsx(r("WAWebVoipCallParticipantsDrawer.react"), {
								call: r("WAWebCallCollection").activeCall,
								chat: ne,
								isLinkedGroupCall: ge,
								isVideoCall: D,
								onClose: q,
								onRingParticipant: en,
								participantStates: pe,
								participantsWithoutSelf: Qt,
								showCloseButton: !0
							}, "participant-drawer") : null
						})
					]
				})
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		if (t == null) return null;
		var n = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(t);
		return n == null && o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: getCallLinkChat: no chat for creator wid (isLid=", ")"])), t.isLid().toString()), n;
	}
	l.default = y;
}), 226);
