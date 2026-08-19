__d("WAWebVoipCallLinkPreview.react", [
	"fbt",
	"WALogger",
	"WAWebAudioDeviceManager",
	"WAWebCallCollection",
	"WAWebCallParticipantInfo.react",
	"WAWebChatContactUtils",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebElevatedPushNamesFlag",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebNoop",
	"WAWebUserPrefsMeUser",
	"WAWebVoipAcquireMediaStream",
	"WAWebVoipCallControls.react",
	"WAWebVoipEventConstants",
	"WAWebVoipGroupCallAccentColors",
	"WAWebVoipLinkPreviewCallLink",
	"WAWebVoipSignalingEnums",
	"WAWebVoipStackInterface",
	"WAWebVoipUiVideoCallSelfPreview.react",
	"WAWebVoipWaCallEnums",
	"WDSSpinner.react",
	"WDSText.react",
	"err",
	"nullthrows",
	"react",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h = g || (g = o("react")), y = g, C = y.useEffect, b = y.useMemo, v = y.useState, S = {
		lobbyOuterContainer: {
			position: "x1n2onr6",
			display: "x78zum5",
			height: "x5yr21d",
			width: "xh8yej3",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		lobbyInnerContainer: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xh8yej3",
			height: "x5yr21d",
			display: "x78zum5",
			$$css: !0
		},
		contentContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			height: "x5yr21d",
			width: "xh8yej3",
			paddingTop: "x16ovd2e",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x4tra6z",
			paddingInlineEnd: "x1j8ymqv",
			boxSizing: "x9f619",
			backgroundColor: "x1c7u0tx",
			$$css: !0
		},
		participantInfoSection: {
			flexShrink: "x2lah0s",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			alignItems: "x6s0dn4",
			rowGap: "x1f0uite",
			columnGap: "xs2akgl",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			marginInlineStart: "x150mmf0",
			marginInlineEnd: "xqf2s3x",
			marginLeft: null,
			marginRight: null,
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndStartRadius: "x1suzm8a",
			borderEndEndRadius: "x1p453bz",
			width: "x1unu1t6",
			boxSizing: "x9f619",
			$$css: !0
		},
		selfPreviewContainer: {
			width: "xh8yej3",
			flexShrink: "x2lah0s",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			boxSizing: "x9f619",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			marginTop: "x1380le5",
			$$css: !0
		},
		controlsContainer: {
			paddingBottom: "x12xbjc7",
			flexShrink: "x2lah0s",
			width: "xh8yej3",
			boxSizing: "x9f619",
			marginTop: "xr1yuqi",
			$$css: !0
		},
		callEndedContainer: {
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			$$css: !0
		},
		waitingRoomSpinner: {
			marginInlineEnd: "x7g7pl8",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		waitingRoomRow: {
			width: "xh8yej3",
			minWidth: "xeuugli",
			$$css: !0
		}
	}, R = {
		positiveButton: {
			labelKey: "join",
			shouldShow: !0
		},
		negativeButton: {
			labelKey: "leave",
			shouldShow: !0,
			styleType: "borderless"
		}
	}, L = {
		positiveButton: {
			labelKey: "join",
			shouldShow: !1
		},
		negativeButton: {
			labelKey: "end",
			shouldShow: !0,
			showLabel: !1,
			styleType: "filled"
		}
	}, E = {
		positiveButton: {
			labelKey: "join",
			shouldShow: !1
		},
		negativeButton: {
			labelKey: "cancel",
			shouldShow: !0,
			showLabel: !0,
			styleType: "media"
		}
	};
	function k(t) {
		var n = t.call, a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), i = n.callLinkCreatorJid, l = n.isVideo, g = r("useWAWebEventTargetValue")(n, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE), function() {
			return n.callLinkState;
		}), y = g === o("WAWebVoipWaCallEnums").CallLinkState.JoinSent || g === o("WAWebVoipWaCallEnums").CallLinkState.JoinAcked, k = r("useWAWebEventTargetValue")(n, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_IN_WAITING_ROOM), function() {
			return n.isInWaitingRoom;
		}), I = r("useWAWebEventTargetValue")(n, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.DISPLAY_WAITING_ROOM_DENIED), function() {
			return n.displayWaitingRoomDenied;
		}), T = b(function() {
			if (i == null) return null;
			var e = o("WAWebContactCollection").ContactCollection.get(i);
			if (e == null) return null;
			if (o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(e)) {
				var t = o("WAWebChatContactUtils").getFormattedNotifyName(o("WAWebContactGetters").getNotifyName(e));
				if (t !== "") return t;
			}
			return o("WAWebFrontendContactGetters").getDisplayName(e);
		}, [i]), D = T != null ? s._(
			/*BTDS*/
			"",
			[s._param("creator_name", T)]
		) : null, x = l ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), $ = s._(
			/*BTDS*/
			""
		), P = h.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: S.waitingRoomRow,
			children: [h.jsx(r("WDSSpinner.react"), {
				size: 16,
				xstyle: S.waitingRoomSpinner
			}), h.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				maxLines: 1,
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), N;
		y && k ? N = P : y ? N = $ : N = x;
		var M;
		y && k ? M = E : y ? M = L : M = R;
		var w = s._(
			/*BTDS*/
			""
		), A = o("WAWebVoipLinkPreviewCallLink").getLandingPageMutePrefs(), F = v(A.videoMuted), O = F[0], B = F[1], W = v(A.audioMuted), q = W[0], U = W[1], V = b(function() {
			return o("WAWebVoipGroupCallAccentColors").getLandingPageAccentColor();
		}, []), H = v(!1), G = H[0], z = H[1], j = v(!1), K = j[0], Q = j[1];
		C(function() {
			var e;
			async function t() {
				try {
					var e;
					if (!((e = navigator.mediaDevices) != null && e.enumerateDevices)) {
						Q(!1);
						return;
					}
					var t = await o("WAWebAudioDeviceManager").coalescedEnumerateDevices(navigator.mediaDevices), n = t.some(function(e) {
						return e.kind === "videoinput";
					});
					Q(n);
				} catch (e) {
					Q(!1);
				}
			}
			t();
			var n = function() {
				t();
			};
			return (e = navigator.mediaDevices) == null || e.addEventListener("devicechange", n), function() {
				var e;
				(e = navigator.mediaDevices) == null || e.removeEventListener("devicechange", n);
			};
		}, []), C(function() {
			o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(l);
		}, [l]);
		var X = async function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: CallLinkPreview: Leave button pressed"]))), z(!0);
			try {
				var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
				if (t.type === "web") {
					var n, a = r("WAWebCallCollection").activeCall, i = (n = a == null || a.isInCallLinkPreview == null ? void 0 : a.isInCallLinkPreview()) != null ? n : !1, l = !i;
					await t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, l);
				} else throw r("err")("voip: CallLinkPreview: leave click: Unexpected voip stack type: " + t.type);
			} catch (e) {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: CallLinkPreview: Leave failed: ", ""])), String(e)), z(!1);
			}
		}, Y = async function() {
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: CallLinkPreview: Join button pressed"])));
			try {
				var e = await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(l);
				if (!e) {
					o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: CallLinkPreview: media perms denied, join aborted"])));
					return;
				}
				var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
				if (t.type === "web") o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: CallLinkPreview: Joining call link from preview state"]))), await t.joinCallLink();
				else throw r("err")("voip: CallLinkPreview: Unexpected voip stack type: " + t.type);
			} catch (e) {
				o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: CallLinkPreview: Join failed: ", ""])), String(e));
			}
		}, J = async function() {
			var e = !O;
			B(e);
			try {
				var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
				t.type === "web" && await t.setCallVideoMute(e);
			} catch (e) {
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: CallLinkPreview: setCallVideoMute failed: ", ""])), String(e));
			}
		}, Z = async function() {
			var e = !q;
			U(e);
			try {
				var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
				t.type === "web" && await t.setCallMute(e);
			} catch (e) {
				o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: CallLinkPreview: setCallMute failed: ", ""])), String(e));
			}
		};
		return h.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: S.lobbyOuterContainer,
			children: h.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: S.lobbyInnerContainer,
				children: h.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: S.contentContainer,
					children: G || I ? h.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						xstyle: S.callEndedContainer,
						children: h.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							selectable: !1,
							children: w
						})
					}) : h.jsxs(h.Fragment, { children: [
						h.jsx(o("WAWebFlex.react").FlexRow, {
							align: "center",
							xstyle: S.participantInfoSection,
							children: h.jsx(r("WAWebCallParticipantInfo.react"), {
								compact: !0,
								userId: i != null ? i : a,
								nameOverride: D,
								callStateText: N,
								textAlign: "start"
							})
						}),
						l && h.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: S.selfPreviewContainer,
							align: "stretch",
							children: h.jsx(o("WAWebVoipUiVideoCallSelfPreview.react").WAWebVoipUiVideoCallSelfPreviewFullWidth, {
								accentColor: V,
								isSelfScreenSharing: !1,
								isVideoMuted: O,
								nameOverride: s._(
									/*BTDS*/
									""
								),
								preserveVideoAspectRatio: !0,
								selfMicMuted: q
							})
						}),
						h.jsx(o("WAWebFlex.react").FlexRow, {
							xstyle: S.controlsContainer,
							children: h.jsx(r("WAWebVoipCallControls.react"), {
								buttonCustomizations: M,
								chat: null,
								hasCameraAvailable: K,
								isAnyPeerScreenSharing: !1,
								isCallActive: !1,
								isCallRinging: !0,
								isMuted: q,
								isSelfScreenSharing: !1,
								isVideoCall: l,
								isVideoMuted: O || !K,
								onAccept: function() {
									Y();
								},
								onEnd: function() {
									X();
								},
								onMuteToggle: Z,
								onReject: function() {
									X();
								},
								onSendMessage: r("WAWebNoop"),
								onVideoMuteToggle: J,
								showSendMessage: !1
							})
						})
					] })
				})
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]", l.default = k;
}), 226);
