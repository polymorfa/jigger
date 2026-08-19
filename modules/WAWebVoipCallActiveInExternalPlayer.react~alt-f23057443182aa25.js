__d("WAWebVoipCallActiveInExternalPlayer.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebCallParticipantInfo.react",
	"WAWebContactCollection",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebOutgoingGroupCallParticipantInfo.react",
	"WAWebOutgoingGroupCallUtils",
	"WAWebTabOrder",
	"WAWebVoipCallStateUtils",
	"WAWebVoipEventConstants",
	"WAWebVoipMoveCallConfirmPopup.react",
	"WAWebVoipUiDocPipPortalContainer.react",
	"WAWebVoipUiManager",
	"WDSButton.react",
	"WDSColorStyles.stylex",
	"WDSIconWdsIcPipExitTopRightToBottomLeft.react",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebVoipModalManager"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useMemo, d = {
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
		moveCallHereContainer: {
			width: "x1m22und",
			$$css: !0
		},
		moveCallHereButton: {
			alignItems: "x6s0dn4",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			minHeight: "x21xpn4",
			paddingBottom: "x12xbjc7",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		participantInfoWrapper: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			minWidth: "xeuugli",
			$$css: !0
		},
		buttonWrapper: {
			flexShrink: "x2lah0s",
			$$css: !0
		}
	};
	function m(e) {
		var t, n, a, i, l = e.msg, m = l != null ? o("WAWebFrontendMsgGetters").getChat(l) : null, _ = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.callLinkCreatorJid, f = (n = (a = r("WAWebCallCollection").activeCall) == null ? void 0 : a.isCallLink) != null ? n : !1, g = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SCREEN_SHARE_STATES), function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isSelfScreenSharing()) != null ? e : !1;
		}), h = r("useWAWebVoipModalManager")(), y = h.closeModal, C = h.openModal, b = function() {
			if (g) {
				C(u.jsx(r("WAWebVoipMoveCallConfirmPopup.react"), {
					closeModal: y,
					onConfirm: p
				}));
				return;
			}
			p();
		}, v = c(function() {
			if (!f || _ == null) return null;
			var e = o("WAWebContactCollection").ContactCollection.get(_);
			return e != null ? o("WAWebFrontendContactGetters").getDisplayName(e) : null;
		}, [f, _]), S = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:state", function() {
			var e;
			return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getState();
		}), R = o("WAWebVoipCallStateUtils").isCallOutgoing(S), L = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), function() {
			var e, t;
			return [(e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.groupCallParticipants) != null ? e : []];
		}), E = L[0], k = c(function() {
			return o("WAWebOutgoingGroupCallUtils").getOutgoingGroupCallNameOverride(R, E);
		}, [R, E]), I = c(function() {
			return o("WAWebOutgoingGroupCallUtils").getOutgoingGroupCallParticipants(R, E);
		}, [R, E]), T = c(function() {
			return o("WAWebOutgoingGroupCallUtils").getAdHocGroupCallNameOverride(E);
		}, [E]), D = c(function() {
			return o("WAWebOutgoingGroupCallUtils").getAdHocGroupCallParticipants(E);
		}, [E]), x = k != null ? k : T, $ = I != null ? I : D, P = s._(
			/*BTDS*/
			""
		), N = (i = m == null ? void 0 : m.id) != null ? i : f ? _ : null, M = f && v != null ? s._(
			/*BTDS*/
			"",
			[s._param("name", v)]
		) : null, w;
		return f && M != null && _ != null ? w = u.jsx(r("WAWebCallParticipantInfo.react"), {
			userId: _,
			compact: !0,
			imageSize: "small",
			callStateText: P,
			xstyle: d.fullWidth,
			audioLevelType: "peer",
			nameOverride: M
		}) : $ != null && $.length > 1 ? w = u.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
			callStateText: P,
			compact: !0,
			nameText: x,
			participantWids: $
		}) : N != null ? w = u.jsx(r("WAWebCallParticipantInfo.react"), {
			userId: N,
			compact: !0,
			imageSize: "small",
			callStateText: P,
			xstyle: d.fullWidth,
			audioLevelType: "peer",
			nameOverride: M != null ? M : x
		}) : w = u.jsx(r("WAWebCallParticipantInfo.react"), {
			showCallStateTextOnly: !0,
			callStateText: P,
			compact: !0,
			xstyle: d.fullWidth
		}), u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			xstyle: [
				d.moveCallHereContainer,
				d.surfaceElevated,
				o("WDSColorStyles.stylex").WDSBackgroundColorStyles.surfaceElevatedEmphasized
			],
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				padding: 8,
				gap: 16,
				align: "center",
				children: [u.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					shrink: 1,
					basis: 0,
					xstyle: d.participantInfoWrapper,
					children: w
				}), u.jsx(o("WAWebFlex.react").FlexItem, {
					shrink: 0,
					xstyle: d.buttonWrapper,
					children: u.jsx(r("WDSButton.react"), {
						size: "small",
						Icon: r("WDSIconWdsIcPipExitTopRightToBottomLeft.react"),
						label: s._(
							/*BTDS*/
							""
						),
						xstyle: [d.moveCallHereButton, o("WDSColorStyles.stylex").WDSBackgroundColorStyles.persistentAlwaysWhite],
						onPress: b,
						tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
						testid: "voip_move_call_here_button"
					})
				})]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		window.focus(), o("WAWebVoipUiManager").closeVoipUiPopoutWindow({ callEnded: !1 }), o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen() && o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.trigger("docPipOpenFailed");
	}
	l.default = m;
}), 226);
