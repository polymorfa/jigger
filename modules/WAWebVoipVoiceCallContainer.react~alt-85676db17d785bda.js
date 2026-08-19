__d("WAWebVoipVoiceCallContainer.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebCallCollection",
	"WAWebCallLogUtils",
	"WAWebCallParticipantInfo.react",
	"WAWebCallTimer.react",
	"WAWebContactCollection",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGroupCallTitleUtils",
	"WAWebName.react",
	"WAWebOutgoingGroupCallParticipantInfo.react",
	"WAWebOutgoingGroupCallUtils",
	"WAWebParticipantListUtils",
	"WAWebVoipCallStateUtils",
	"WAWebVoipDocPipSelfPreviewNotice.react",
	"WAWebVoipEncryptionButton.react",
	"WAWebVoipEventConstants",
	"WAWebVoipGatingUtils",
	"WAWebVoipLobbyUtils",
	"WAWebVoipMicOffIndicator.react",
	"WAWebVoipParticipantActionsDropdown.react",
	"WAWebVoipRaisedHandDisplay.react",
	"WAWebVoipReactionDisplay.react",
	"WAWebVoipStackInterface",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebVoipUiVideoCallSelfPreview.react",
	"WDSColorStyles.stylex",
	"react",
	"useWAWebCameraPrewarm",
	"useWAWebEventTargetValue",
	"useWAWebHover",
	"useWAWebVoipParticipantHandRaised",
	"useWAWebVoipPermissionStatus"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useMemo, g = d.useRef, h = d.useState, y = [], C = {
		voiceCallContainer: {
			marginBottom: "xat24cr",
			marginInlineEnd: "xqf2s3x",
			marginInlineStart: "x150mmf0",
			marginTop: "x1380le5",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			position: "x1n2onr6",
			$$css: !0
		},
		voiceCallContainerWrapper: {
			position: "x1n2onr6",
			$$css: !0
		},
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		surfaceElevated: {
			marginTop: "x1380le5",
			marginInlineStart: "x150mmf0",
			marginInlineEnd: "xqf2s3x",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		surfaceElevatedPopout: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			$$css: !0
		},
		incomingVideoCallContainer: {
			width: "xh8yej3",
			height: "x5yr21d",
			position: "x1n2onr6",
			paddingBottom: "x12xbjc7",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			minHeight: "x2lwn1j",
			$$css: !0
		},
		participantInfoContainer: {
			position: "x1n2onr6",
			width: "xh8yej3",
			rowGap: "x1f0uite",
			columnGap: "xs2akgl",
			$$css: !0
		},
		incomingCallPreviewContainer: {
			width: "xh8yej3",
			height: "x5yr21d",
			zIndex: "x1n327nk",
			paddingTop: "x14h6c1r",
			$$css: !0
		},
		inlineTimer: {
			display: "xt0psk2",
			$$css: !0
		}
	}, b = "•";
	function v(t) {
		var n, a, i, l, u = t.anchorContentTop, d = u === void 0 ? !1 : u, v = t.callLogMsg, S = t.callState, R = t.canRemoveParticipant, L = R === void 0 ? !1 : R, E = t.hasCameraAvailable, k = E === void 0 ? !0 : E, I = t.isCallActive, T = t.isCallOutgoing, D = t.isCompactLayout, x = t.isSelfHandRaised, $ = x === void 0 ? !1 : x, P = t.isSelfScreenSharing, N = t.isTabVisible, M = t.isVideoCall, w = t.isVideoMuted, A = t.peerMicMuted, F = t.selfMicMuted, O = p(r("WAWebVoipUiPopoutWindowContext")), B = g(null), W = r("useWAWebVoipPermissionStatus")(M, w), q = W.cameraPermission, U = W.isLoading, V = o("WAWebVoipCallStateUtils").isCallIncoming(S), H = q === "denied", G = M && V && H && !U, z = M && V && !k, j = g(q);
		_(function() {
			if (!U) {
				var t = j.current;
				j.current = q, t === "denied" && q === "granted" && V && M && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[VoiceCallContainer] cam granted, unmuting video"]))), (async function() {
					var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
					(e == null ? void 0 : e.type) === "web" && await e.setCallVideoMute(!1);
				})());
			}
		}, [
			q,
			V,
			U,
			M
		]);
		var K = D && !O.isContextInPopoutWindow && !M && I && A, Q = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), function() {
			var e;
			return ((e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.peerBusy) === !0;
		}), X = o("WAWebCallLogUtils").getCallStateText(S, v);
		Q ? X = s._(
			/*BTDS*/
			""
		) : K && (X = s._(
			/*BTDS*/
			""
		));
		var Y = o("WAWebABProps").getABPropConfigValue("enable_web_voip_virtual_video_capture_driver") === !0, J = M && V && N && (q === "granted" || Y || G || z), Z = M && V && O.isContextInPopoutWindow && !J;
		r("useWAWebCameraPrewarm")(J);
		var ee = f(function() {
			return v ? o("WAWebFrontendMsgGetters").getChat(v) : null;
		}, [v]), te = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), function() {
			var e, t, n, o;
			return [(e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.groupCallParticipantsConnected) != null ? e : y, (n = (o = r("WAWebCallCollection").activeCall) == null ? void 0 : o.groupCallParticipants) != null ? n : y];
		}), ne = te[0], re = te[1], oe = f(function() {
			var e, t, n, a = (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isGroup) != null ? e : !1;
			if (a && ne.length === 2) {
				var i = o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(ne);
				if (i.length === 1) return i[0];
			}
			return (n = ee == null ? void 0 : ee.id) != null ? n : void 0;
		}, [ne, ee]), ae = ((n = (a = r("WAWebCallCollection").activeCall) == null ? void 0 : a.isGroup) != null ? n : !1) && ne.length === 2, ie = g(null), le = o("useWAWebHover").useWAWebHover(ae ? B : ie), se = h(!1), ue = se[0], ce = se[1], de = m(function(e) {
			ce(e);
		}, []), me = g(null), pe = h(!1), _e = pe[0], fe = pe[1], ge = m(function() {
			ae && fe(!0);
		}, [ae]), he = m(function(e) {
			var t;
			if (ae) {
				var n = e.relatedTarget;
				(!(n instanceof Node) || !((t = me.current) != null && t.contains(n))) && fe(!1);
			}
		}, [ae]), ye = r("useWAWebVoipParticipantHandRaised")(function() {
			return ae && oe != null ? oe : null;
		}), Ce = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES), function() {
			var e = r("WAWebCallCollection").activeCall;
			return e == null || oe == null ? null : e.getReactionForParticipant(oe);
		}, [oe]), be = f(function() {
			return ae && oe != null ? o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder([oe], !0) : null;
		}, [ae, oe]), ve = f(function() {
			return o("WAWebOutgoingGroupCallUtils").getOutgoingGroupCallNameOverride(T, re);
		}, [T, re]), Se = f(function() {
			return o("WAWebOutgoingGroupCallUtils").getOutgoingGroupCallParticipants(T, re);
		}, [T, re]), Re = f(function() {
			return o("WAWebGroupCallTitleUtils").getUnnamedGroupCallNameOverride(ee);
		}, [ee]), Le = f(function() {
			var e, t = r("WAWebCallCollection").activeCall, n = (e = t == null ? void 0 : t.isGroup) != null ? e : !1;
			if (!n || !I) return null;
			var a = null;
			if ((t == null ? void 0 : t.isCallLink) === !0) {
				var i = t.callLinkCreatorJid, l = i != null ? o("WAWebContactCollection").ContactCollection.get(i) : null, u = l != null ? o("WAWebFrontendContactGetters").getDisplayName(l) : null;
				u != null && (a = s._(
					/*BTDS*/
					"",
					[s._param("creator_name", u)]
				));
			} else if ((t == null ? void 0 : t.groupJid) == null) {
				var d = o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(re);
				d.length > 0 && (a = o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(d, !0));
			} else o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(ne).length === 1 && (a = ee ? c.jsx(o("WAWebName.react").Name, { chat: ee }) : null);
			return A && D && !O.isContextInPopoutWindow ? s._(
				/*BTDS*/
				""
			) : c.jsxs("span", {
				className: "x3nfvp2 x1q0g3np x1pha0wt xozqiw3 x193iq5w",
				children: [a != null && c.jsxs(c.Fragment, { children: [c.jsx("span", {
					className: "xs83m0k xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft",
					children: a
				}), c.jsx("span", {
					className: "x2lah0s xdwrcjd x2fvf9",
					children: b
				})] }), c.jsx(r("WAWebCallTimer.react"), {
					callState: S,
					xstyle: C.inlineTimer
				})]
			});
		}, [
			I,
			D,
			ee,
			S,
			re,
			ne,
			A,
			O.isContextInPopoutWindow
		]), Ee = Le != null ? Le : X, ke = (i = (l = r("WAWebCallCollection").activeCall) == null ? void 0 : l.isGroup) != null ? i : !1, Ie = ae && oe != null && (le || ue || _e), Te;
		return J ? Te = c.jsxs(c.Fragment, { children: [c.jsx("div", {
			className: "x10l6tqk xymx5cc xxrlk4x x1of6sz5",
			children: Se != null && Se.length > 1 ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
				callStateText: X,
				compact: !0,
				imageSize: 48,
				nameText: ve,
				participantWids: Se
			}) : c.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: oe,
				imageSize: "small",
				textAlign: "start",
				callStateText: X,
				compact: !0,
				nameOverride: ve != null ? ve : Re,
				suppressPhoneNumberSecondary: ke,
				unknownUserLogContext: V ? "call_incoming" : "in_call"
			})
		}), c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: C.incomingCallPreviewContainer,
			children: c.jsx(o("WAWebVoipUiVideoCallSelfPreview.react").WAWebVoipUiVideoCallSelfPreviewFullWidth, {
				cameraDenied: G,
				isIncoming: V,
				isSelfScreenSharing: P,
				isVideoMuted: w,
				noCameraDevice: z,
				selfMicMuted: F
			})
		})] }) : Z ? Te = c.jsxs(c.Fragment, { children: [c.jsx("div", {
			className: "x10l6tqk xymx5cc xxrlk4x x1of6sz5",
			children: Se != null && Se.length > 1 ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
				callStateText: X,
				compact: !0,
				imageSize: 48,
				nameText: ve,
				participantWids: Se
			}) : c.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: oe,
				imageSize: "small",
				textAlign: "start",
				callStateText: X,
				compact: !0,
				nameOverride: ve != null ? ve : Re,
				suppressPhoneNumberSecondary: ke,
				unknownUserLogContext: V ? "call_incoming" : "in_call"
			})
		}), c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: C.incomingCallPreviewContainer,
			children: c.jsx(o("WAWebVoipDocPipSelfPreviewNotice.react").WAWebVoipDocPipSelfPreviewNotice, {})
		})] }) : Te = c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: C.participantInfoContainer,
			children: Se != null && Se.length > 1 ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
				callStateText: Ee,
				compact: D,
				imageSize: D ? 48 : "auto",
				nameText: ve,
				participantWids: Se
			}) : c.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: oe,
				compact: D,
				imageSize: D ? "small" : "auto",
				callStateText: Ee,
				xstyle: C.fullWidth,
				showAudioWaveform: I && !M && !A,
				audioLevelType: "peer",
				waveformBarCount: O.isContextInPopoutWindow ? 7 : 5,
				nameOverride: ve != null ? ve : Re,
				suppressPhoneNumberSecondary: ke,
				unknownUserLogContext: V ? "call_incoming" : "in_call"
			})
		}), c.jsxs(o("WAWebFlex.react").FlexRow, {
			ref: B,
			alignSelf: "stretch",
			grow: 1,
			shrink: 1,
			basis: 0,
			xstyle: C.voiceCallContainerWrapper,
			children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: d ? "start" : "center",
				justify: "center",
				alignSelf: "stretch",
				grow: 1,
				shrink: 1,
				basis: 0,
				xstyle: [
					J || Z ? C.incomingVideoCallContainer : C.voiceCallContainer,
					!J && !Z && C.surfaceElevated,
					!J && !Z && O.isContextInPopoutWindow && C.surfaceElevatedPopout,
					I && o("WDSColorStyles.stylex").WDSBackgroundColorStyles.surfaceElevatedEmphasized,
					T && o("WDSColorStyles.stylex").WDSBackgroundColorStyles.surfaceElevatedDefault
				],
				testid: J || Z ? "voip-container-incoming-video-call" : "voip-container-audio-call",
				children: [
					Te,
					I && A && !K && c.jsx(r("WAWebVoipMicOffIndicator.react"), { size: "medium" }),
					c.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
						inlinePosition: "end",
						isHandRaised: $
					}),
					ae && c.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
						inlinePosition: "start",
						isHandRaised: ye,
						participantName: be
					}),
					c.jsx(r("WAWebVoipReactionDisplay.react"), {
						reaction: Ce,
						shouldHaveOffset: ye
					})
				]
			}), !V && !T && c.jsxs("div", {
				ref: me,
				role: "toolbar",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"data-testid": "voip_voice_call_top_right_overlay",
				onFocus: ge,
				onBlur: he,
				className: "x6s0dn4 x1trrmfo x78zum5 x1q0g3np xa3bivy x10l6tqk xymx5cc x1jeq31z",
				children: [Ie && oe != null && !o("WAWebVoipGatingUtils").isGuestViewer() && c.jsx(r("WAWebVoipParticipantActionsDropdown.react"), {
					canRemoveParticipant: L,
					isParticipantMuted: A,
					participantJid: oe,
					onOpenChange: de
				}), c.jsx(r("WAWebVoipEncryptionButton.react"), { inline: !0 })]
			})]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
