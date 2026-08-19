__d("useWAWebVoipCallHandlers", [
	"Promise",
	"WALogger",
	"WAWebABProps",
	"WAWebAvUpgradeBannerState",
	"WAWebBlockedParticipantCallWarning",
	"WAWebCallCollection",
	"WAWebCallRingtone",
	"WAWebChatCollection",
	"WAWebCoreActionsODS",
	"WAWebGuidePopup.react",
	"WAWebPipController",
	"WAWebReleaseToEventLoop",
	"WAWebUserPrefsMeUser",
	"WAWebVoipAcquireMediaStream",
	"WAWebVoipActivityTracker",
	"WAWebVoipAigcGating",
	"WAWebVoipPopoutWindowState",
	"WAWebVoipSignalingEnums",
	"WAWebVoipStackInterface",
	"WAWebVoipUiManager",
	"WAWebVoipUiPopoutWindowPortalContainer.react",
	"WAWebVoipUiVideoCallLoadable",
	"WAWebVoipUiVideoGroupCallLoadable",
	"WAWebVoipVideoStateUtils",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe",
	"nullthrows",
	"react",
	"useWAWebVoipModalManager"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v = b || (b = o("react")), S = b, R = S.useCallback, L = S.useRef, E = S.useState, k = 670007, I = 670020;
	function T() {
		return D.apply(this, arguments);
	}
	function D() {
		return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = r("nullthrows")(yield o("WAWebVoipStackInterface").getVoipStackInterface());
			if (e.type === "web") yield e.rejectCall();
			else throw r("err")("voip: UI: reject click: Unexpected voip stack type: " + e.type);
		}), D.apply(this, arguments);
	}
	function x(t, n) {
		try {
			var r;
			t == null || (r = t.open("#", o("WAWebVoipPopoutWindowState").MAIN_WINDOW_NAME)) == null || r.focus(), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [", "] camera permission prompt would open in the hidden main tab; focusing it so the prompt is visible"])), n);
		} catch (e) {}
	}
	function $(e, t, n, r, o) {
		return P.apply(this, arguments);
	}
	function P() {
		return P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a) {
			var i = o("WAWebABProps").getABPropConfigValue("enable_web_voip_virtual_video_capture_driver") === !0;
			if (i) return !1;
			var l = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(!0), s = l.cameraPermission;
			if (s === "denied") {
				var u;
				return e(v.jsx((u = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: u.Messaging.CAMERA_FAIL,
					type: u.GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: u.FeatureSurface.VOIP_VIDEO_UPGRADE,
					onConfirm: t
				})), o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: [", "] Camera permission denied, showing guide popup"])), n), !0;
			}
			return s === "prompt" && r && x(a, n), !1;
		}), P.apply(this, arguments);
	}
	function N(e) {
		var t, a = e.currentBannerJid, i = e.isDocPip, l = e.isMuted, y = e.isVideoCall, b = e.isVideoMuted, S = e.popoutWindowEl, D = r("useWAWebVoipModalManager")(), x = D.closeModal, P = D.openModal, N = L(!1), M = E(!1), w = M[0], A = M[1], F = R(function() {
			if (a != null) {
				var e = a;
				n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var t = r("nullthrows")(yield o("WAWebVoipStackInterface").getVoipStackInterface());
					if (t.type === "web") {
						var n = yield t.acceptPeerVideo({ jid: e.toString() });
						n === 0 ? r("WAWebAvUpgradeBannerState").removeBannerForJid(e) : o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: UI: acceptPeerVideo failed with status: ", ""])), n);
					} else throw r("err")("voip: UI: acceptPeerVideo not available for " + t.type);
				})();
			}
		}, [a]), O = R(function() {
			a != null && r("WAWebAvUpgradeBannerState").removeBannerForJid(a);
		}, [a]), B = R((t = n("asyncToGeneratorRuntime")).asyncToGenerator(function* () {
			if (!N.current) {
				N.current = !0, A(!0);
				try {
					o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_ACCEPT_CALL_CLICK);
					var e = r("WAWebCallCollection").activeCall;
					if (e != null && o("WAWebVoipAigcGating").showAigcUnsupportedDialogIfNeeded(e.isBotGroupCall, e.isVideo)) {
						N.current = !1;
						return;
					}
					if (o("WAWebCallRingtone").stopCallRingtone(), !l && o("WAWebABProps").getABPropConfigValue("enable_web_voip_eager_mic_acquire") === !0 && o("WAWebVoipAcquireMediaStream").earlyAcquireMic(), (e == null ? void 0 : e.groupJid) != null) {
						var t = o("WAWebChatCollection").ChatCollection.get(e.groupJid), a = t != null ? yield o("WAWebBlockedParticipantCallWarning").maybeShowBlockedParticipantCallWarning(t, "join") : !0;
						if (!a) {
							o("WAWebVoipAcquireMediaStream").cleanupEarlyAcquiredMic(), yield T(), N.current = !1;
							return;
						}
					}
					var i = y && !b, s = !1;
					if (i) {
						var m = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(!0), p = m.cameraPermission;
						p === "denied" && (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: UI: camera permission denied, accepting video call audio-only"]))), i = !1, s = !0);
					}
					var _ = yield o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(i);
					if (!_) {
						o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: UI: media permissions not acquired, sending reject/terminate instead of accept"]))), o("WAWebVoipAcquireMediaStream").cleanupEarlyAcquiredMic(), yield T(), N.current = !1;
						return;
					}
					if (y) {
						var f = (e == null ? void 0 : e.groupJid) != null, g = f ? [o("WAWebVoipUiVideoGroupCallLoadable").requireBundle(), o("WAWebVoipUiVideoCallLoadable").requireBundle()] : [o("WAWebVoipUiVideoCallLoadable").requireBundle()];
						try {
							yield (C || (C = n("Promise"))).all(g);
						} catch (e) {
							o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: UI: video UI bundle preload before acceptCall failed, proceeding anyway"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-accept-bundle-preload-fail");
						}
					}
					var h = r("nullthrows")(yield o("WAWebVoipStackInterface").getVoipStackInterface());
					if (h.type === "web") yield h.acceptCall(!l, !b && !s), o("WAWebCoreActionsODS").logCallIncomingAccept(), y && o("WAWebABProps").getABPropConfigValue("web_calling_auto_popout_video") && !o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow() && o("WAWebReleaseToEventLoop").releaseToEventLoop().then(function() {
						o("WAWebVoipUiManager").openVoipUiPopoutWindow();
					});
					else throw r("err")("voip: UI: accept click: Unexpected voip stack type: " + h.type);
				} catch (e) {
					throw o("WAWebVoipAcquireMediaStream").cleanupEarlyAcquiredMic(), N.current = !1, e;
				} finally {
					A(!1);
				}
			}
		}), [
			l,
			y,
			b
		]), W = R(t.asyncToGenerator(function* () {
			if (!N.current) {
				N.current = !0;
				try {
					o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_REJECT_CALL_CLICK);
					var e = r("WAWebCallCollection").activeCall;
					e != null && (e.userEndedCall = !0), yield T(), o("WAWebCoreActionsODS").logCallIncomingDecline(), r("WAWebPipController").closePiP();
				} catch (e) {
					throw N.current = !1, e;
				}
			}
		}), []), q = R((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				e === void 0 && (e = o("WAWebVoipSignalingEnums").EndCallReason.Self), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_END_CALL_CLICK);
				var t = r("WAWebCallCollection").activeCall;
				t != null && (t.userEndedCall = !0);
				var n = r("nullthrows")(yield o("WAWebVoipStackInterface").getVoipStackInterface());
				if (n.type === "web") yield n.endCall(e, !0);
				else throw r("err")("voip: UI: end click: Unexpected voip stack type: " + n.type);
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), []), U = R(t.asyncToGenerator(function* () {
			var e = r("nullthrows")(yield o("WAWebVoipStackInterface").getVoipStackInterface());
			if (e.type === "web") {
				var t = !l;
				if (!t) {
					var n = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(!1), a = n.micPermission;
					if (a === "denied") {
						var i;
						P(v.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
							messaging: i.Messaging.MIC_FAIL,
							type: i.GuidePopupType.GUIDE_UNBLOCK,
							featureSurface: i.FeatureSurface.VOIP_ACTIVE,
							onConfirm: x
						})), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: [mute toggle] Mic permission denied, showing guide popup"])));
						return;
					}
				}
				o("WAWebVoipActivityTracker").trackUiActivity(t ? o("WAWebVoipActivityTracker").VoipUiActivity.USER_MUTE_MIC : o("WAWebVoipActivityTracker").VoipUiActivity.USER_UNMUTE_MIC);
				var s = yield e.setCallMute(t);
				s !== 0 && o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: setCallMute failed with status: ", ""])), s);
			} else throw r("err")("voip: UI: mute toggle: setCallMute not available for " + e.type);
		}), [
			x,
			l,
			P
		]), V = R(t.asyncToGenerator(function* () {
			var e = r("nullthrows")(yield o("WAWebVoipStackInterface").getVoipStackInterface());
			if (e.type === "web") {
				var t = r("WAWebCallCollection").activeCall, n = t && !t.isVideo && b && o("WAWebVoipVideoStateUtils").isVideoStateInactiveForCallMode(t.selfVideoState);
				if (n === !0) {
					if (yield $(P, x, "A/V switch", i, S)) return;
					o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_UNMUTE_CAMERA);
					var a = yield e.requestVideoUpgrade();
					if (a !== 0) {
						if (o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: [A/V switch] requestVideoUpgrade failed converting audio\n            call to video with status: ", ""])), a), a === k || a === I) return;
						P(v.jsx(o("WAWebGuidePopup.react").GuidePopup, {
							messaging: o("WAWebGuidePopup.react").Messaging.VIDEO_UPGRADE_FAIL,
							type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
							featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP_VIDEO_UPGRADE,
							onConfirm: x
						}));
						return;
					}
				} else {
					var l = !b;
					if (!l && (yield $(P, x, "video toggle", i, S))) return;
					o("WAWebVoipActivityTracker").trackUiActivity(l ? o("WAWebVoipActivityTracker").VoipUiActivity.USER_MUTE_CAMERA : o("WAWebVoipActivityTracker").VoipUiActivity.USER_UNMUTE_CAMERA);
					var s = yield e.setCallVideoMute(l);
					s !== 0 && o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: setCallVideoMute failed with status: ", ""])), s);
				}
			} else throw r("err")("voip: UI: video mute toggle: setCallVideoMute not available for\n          " + e.type);
		}), [
			x,
			i,
			b,
			P,
			S
		]), H = R(t.asyncToGenerator(function* () {
			o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_RAISE_HAND_CLICK);
			var e = r("nullthrows")(yield o("WAWebVoipStackInterface").getVoipStackInterface());
			if (e.type === "web") {
				var t = r("WAWebCallCollection").activeCall;
				if (t != null) {
					var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), a = t.isHandRaisedForParticipant(n), i = !a;
					try {
						yield e.raiseHand(i);
					} catch (e) {
						o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: UI: raise hand toggle failed: ", ""])), String(e));
					}
				}
			}
		}), []), G = R((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.CONTROL_PANEL_REACTIONS_CLICK);
				var t = e, n = r("WAWebCallCollection").activeCall;
				if (n != null) try {
					var a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), i = n.getReactionForParticipant(a);
					t = i === e ? "" : e;
				} catch (e) {
					o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: UI: reaction select: failed to resolve self reaction: ", ""])), String(e));
				}
				var l = r("nullthrows")(yield o("WAWebVoipStackInterface").getVoipStackInterface());
				if (l.type === "web") yield l.sendReaction(t);
				else throw r("err")("voip: UI: reaction select: sendReaction not available for " + l.type);
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), []);
		return {
			handleBannerAccept: F,
			handleBannerIgnore: O,
			handleClickAccept: B,
			handleClickEnd: q,
			handleClickReject: W,
			handleMuteToggle: U,
			handleRaiseHandToggle: H,
			handleReactionSelect: G,
			handleVideoMuteToggle: V,
			isAccepting: w
		};
	}
	l.default = N;
}), 98);
