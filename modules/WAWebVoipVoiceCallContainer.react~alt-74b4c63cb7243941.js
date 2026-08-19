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
	"asyncToGeneratorRuntime",
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
		var a, i, l, u, d = t.anchorContentTop, v = d === void 0 ? !1 : d, S = t.callLogMsg, R = t.callState, L = t.canRemoveParticipant, E = L === void 0 ? !1 : L, k = t.hasCameraAvailable, I = k === void 0 ? !0 : k, T = t.isCallActive, D = t.isCallOutgoing, x = t.isCompactLayout, $ = t.isSelfHandRaised, P = $ === void 0 ? !1 : $, N = t.isSelfScreenSharing, M = t.isTabVisible, w = t.isVideoCall, A = t.isVideoMuted, F = t.peerMicMuted, O = t.selfMicMuted, B = p(r("WAWebVoipUiPopoutWindowContext")), W = g(null), q = r("useWAWebVoipPermissionStatus")(w, A), U = q.cameraPermission, V = q.isLoading, H = o("WAWebVoipCallStateUtils").isCallIncoming(R), G = U === "denied", z = w && H && G && !V, j = w && H && !I, K = g(U);
		_(function() {
			if (!V) {
				var t = K.current;
				K.current = U, t === "denied" && U === "granted" && H && w && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[VoiceCallContainer] cam granted, unmuting video"]))), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					(e == null ? void 0 : e.type) === "web" && (yield e.setCallVideoMute(!1));
				})());
			}
		}, [
			U,
			H,
			V,
			w
		]);
		var Q = x && !B.isContextInPopoutWindow && !w && T && F, X = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), function() {
			var e;
			return ((e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.peerBusy) === !0;
		}), Y = o("WAWebCallLogUtils").getCallStateText(R, S);
		X ? Y = s._(
			/*BTDS*/
			""
		) : Q && (Y = s._(
			/*BTDS*/
			""
		));
		var J = o("WAWebABProps").getABPropConfigValue("enable_web_voip_virtual_video_capture_driver") === !0, Z = w && H && M && (U === "granted" || J || z || j), ee = w && H && B.isContextInPopoutWindow && !Z;
		r("useWAWebCameraPrewarm")(Z);
		var te = f(function() {
			return S ? o("WAWebFrontendMsgGetters").getChat(S) : null;
		}, [S]), ne = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), function() {
			var e, t, n, o;
			return [(e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.groupCallParticipantsConnected) != null ? e : y, (n = (o = r("WAWebCallCollection").activeCall) == null ? void 0 : o.groupCallParticipants) != null ? n : y];
		}), re = ne[0], oe = ne[1], ae = f(function() {
			var e, t, n, a = (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isGroup) != null ? e : !1;
			if (a && re.length === 2) {
				var i = o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(re);
				if (i.length === 1) return i[0];
			}
			return (n = te == null ? void 0 : te.id) != null ? n : void 0;
		}, [re, te]), ie = ((a = (i = r("WAWebCallCollection").activeCall) == null ? void 0 : i.isGroup) != null ? a : !1) && re.length === 2, le = g(null), se = o("useWAWebHover").useWAWebHover(ie ? W : le), ue = h(!1), ce = ue[0], de = ue[1], me = m(function(e) {
			de(e);
		}, []), pe = g(null), _e = h(!1), fe = _e[0], ge = _e[1], he = m(function() {
			ie && ge(!0);
		}, [ie]), ye = m(function(e) {
			var t;
			if (ie) {
				var n = e.relatedTarget;
				(!(n instanceof Node) || !((t = pe.current) != null && t.contains(n))) && ge(!1);
			}
		}, [ie]), Ce = r("useWAWebVoipParticipantHandRaised")(function() {
			return ie && ae != null ? ae : null;
		}), be = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES), function() {
			var e = r("WAWebCallCollection").activeCall;
			return e == null || ae == null ? null : e.getReactionForParticipant(ae);
		}, [ae]), ve = f(function() {
			return ie && ae != null ? o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder([ae], !0) : null;
		}, [ie, ae]), Se = f(function() {
			return o("WAWebOutgoingGroupCallUtils").getOutgoingGroupCallNameOverride(D, oe);
		}, [D, oe]), Re = f(function() {
			return o("WAWebOutgoingGroupCallUtils").getOutgoingGroupCallParticipants(D, oe);
		}, [D, oe]), Le = f(function() {
			return o("WAWebGroupCallTitleUtils").getUnnamedGroupCallNameOverride(te);
		}, [te]), Ee = f(function() {
			var e, t = r("WAWebCallCollection").activeCall, n = (e = t == null ? void 0 : t.isGroup) != null ? e : !1;
			if (!n || !T) return null;
			var a = null;
			if ((t == null ? void 0 : t.isCallLink) === !0) {
				var i = t.callLinkCreatorJid, l = i != null ? o("WAWebContactCollection").ContactCollection.get(i) : null, u = l != null ? o("WAWebFrontendContactGetters").getDisplayName(l) : null;
				u != null && (a = s._(
					/*BTDS*/
					"",
					[s._param("creator_name", u)]
				));
			} else if ((t == null ? void 0 : t.groupJid) == null) {
				var d = o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(oe);
				d.length > 0 && (a = o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(d, !0));
			} else o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(re).length === 1 && (a = te ? c.jsx(o("WAWebName.react").Name, { chat: te }) : null);
			return F && x && !B.isContextInPopoutWindow ? s._(
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
					callState: R,
					xstyle: C.inlineTimer
				})]
			});
		}, [
			T,
			x,
			te,
			R,
			oe,
			re,
			F,
			B.isContextInPopoutWindow
		]), ke = Ee != null ? Ee : Y, Ie = (l = (u = r("WAWebCallCollection").activeCall) == null ? void 0 : u.isGroup) != null ? l : !1, Te = ie && ae != null && (se || ce || fe), De;
		return Z ? De = c.jsxs(c.Fragment, { children: [c.jsx("div", {
			className: "x10l6tqk xymx5cc xxrlk4x x1of6sz5",
			children: Re != null && Re.length > 1 ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
				callStateText: Y,
				compact: !0,
				imageSize: 48,
				nameText: Se,
				participantWids: Re
			}) : c.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: ae,
				imageSize: "small",
				textAlign: "start",
				callStateText: Y,
				compact: !0,
				nameOverride: Se != null ? Se : Le,
				suppressPhoneNumberSecondary: Ie,
				unknownUserLogContext: H ? "call_incoming" : "in_call"
			})
		}), c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: C.incomingCallPreviewContainer,
			children: c.jsx(o("WAWebVoipUiVideoCallSelfPreview.react").WAWebVoipUiVideoCallSelfPreviewFullWidth, {
				cameraDenied: z,
				isIncoming: H,
				isSelfScreenSharing: N,
				isVideoMuted: A,
				noCameraDevice: j,
				selfMicMuted: O
			})
		})] }) : ee ? De = c.jsxs(c.Fragment, { children: [c.jsx("div", {
			className: "x10l6tqk xymx5cc xxrlk4x x1of6sz5",
			children: Re != null && Re.length > 1 ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
				callStateText: Y,
				compact: !0,
				imageSize: 48,
				nameText: Se,
				participantWids: Re
			}) : c.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: ae,
				imageSize: "small",
				textAlign: "start",
				callStateText: Y,
				compact: !0,
				nameOverride: Se != null ? Se : Le,
				suppressPhoneNumberSecondary: Ie,
				unknownUserLogContext: H ? "call_incoming" : "in_call"
			})
		}), c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: C.incomingCallPreviewContainer,
			children: c.jsx(o("WAWebVoipDocPipSelfPreviewNotice.react").WAWebVoipDocPipSelfPreviewNotice, {})
		})] }) : De = c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: C.participantInfoContainer,
			children: Re != null && Re.length > 1 ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
				callStateText: ke,
				compact: x,
				imageSize: x ? 48 : "auto",
				nameText: Se,
				participantWids: Re
			}) : c.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: ae,
				compact: x,
				imageSize: x ? "small" : "auto",
				callStateText: ke,
				xstyle: C.fullWidth,
				showAudioWaveform: T && !w && !F,
				audioLevelType: "peer",
				waveformBarCount: B.isContextInPopoutWindow ? 7 : 5,
				nameOverride: Se != null ? Se : Le,
				suppressPhoneNumberSecondary: Ie,
				unknownUserLogContext: H ? "call_incoming" : "in_call"
			})
		}), c.jsxs(o("WAWebFlex.react").FlexRow, {
			ref: W,
			alignSelf: "stretch",
			grow: 1,
			shrink: 1,
			basis: 0,
			xstyle: C.voiceCallContainerWrapper,
			children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: v ? "start" : "center",
				justify: "center",
				alignSelf: "stretch",
				grow: 1,
				shrink: 1,
				basis: 0,
				xstyle: [
					Z || ee ? C.incomingVideoCallContainer : C.voiceCallContainer,
					!Z && !ee && C.surfaceElevated,
					!Z && !ee && B.isContextInPopoutWindow && C.surfaceElevatedPopout,
					T && o("WDSColorStyles.stylex").WDSBackgroundColorStyles.surfaceElevatedEmphasized,
					D && o("WDSColorStyles.stylex").WDSBackgroundColorStyles.surfaceElevatedDefault
				],
				testid: Z || ee ? "voip-container-incoming-video-call" : "voip-container-audio-call",
				children: [
					De,
					T && F && !Q && c.jsx(r("WAWebVoipMicOffIndicator.react"), { size: "medium" }),
					c.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
						inlinePosition: "end",
						isHandRaised: P
					}),
					ie && c.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
						inlinePosition: "start",
						isHandRaised: Ce,
						participantName: ve
					}),
					c.jsx(r("WAWebVoipReactionDisplay.react"), {
						reaction: be,
						shouldHaveOffset: Ce
					})
				]
			}), !H && !D && c.jsxs("div", {
				ref: pe,
				role: "toolbar",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"data-testid": "voip_voice_call_top_right_overlay",
				onFocus: he,
				onBlur: ye,
				className: "x6s0dn4 x1trrmfo x78zum5 x1q0g3np xa3bivy x10l6tqk xymx5cc x1jeq31z",
				children: [Te && ae != null && !o("WAWebVoipGatingUtils").isGuestViewer() && c.jsx(r("WAWebVoipParticipantActionsDropdown.react"), {
					canRemoveParticipant: E,
					isParticipantMuted: F,
					participantJid: ae,
					onOpenChange: me
				}), c.jsx(r("WAWebVoipEncryptionButton.react"), { inline: !0 })]
			})]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
