__d("WAWebVoipUiLobby.react", [
	"fbt",
	"WAWebCallLogUtils",
	"WAWebCallParticipantInfo.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"WAWebOutgoingGroupCallUtils",
	"WAWebVoipCallStateUtils",
	"WAWebVoipConnectedParticipantsInfo.react",
	"WAWebVoipLobbyHeightUtils",
	"WAWebVoipLobbyUtils",
	"WAWebVoipUiParticipantPanel.react",
	"WAWebVoipUiVideoCallSelfPreview.react",
	"WAWebWamEnumOppositeVisibleIdentificationType",
	"react",
	"useWAWebContactValues",
	"useWAWebLogUnknownUserDisplayed"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState, g = {
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
			minHeight: "x2lwn1j",
			width: "xh8yej3",
			paddingTop: "x16ovd2e",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x4tra6z",
			paddingInlineEnd: "x1j8ymqv",
			rowGap: "x1qvou4u",
			boxSizing: "x9f619",
			backgroundColor: "x1c7u0tx",
			$$css: !0
		},
		participantInfoSection: {
			flexShrink: "x2lah0s",
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
			flexShrink: "xs83m0k",
			flexGrow: "x1c4vz4f",
			minHeight: "x2lwn1j",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			boxSizing: "x9f619",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		participantPanelWrapper: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			alignSelf: "xkh2ocl",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		connectedParticipantsSection: {
			width: "xh8yej3",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			boxSizing: "x9f619",
			flexShrink: "x2lah0s",
			$$css: !0
		}
	};
	function h(e) {
		var t, n = e.arePeersActive, a = e.callLogMsg, i = e.callState, l = e.isCallOutgoing, c = e.isInMiniPlayer, h = c === void 0 ? !1 : c, y = e.isSelfScreenSharing, C = e.isVideoCall, b = e.isVideoMuted, v = e.onRingParticipant, S = e.participantStates, R = e.participantsWithoutSelf, L = e.selfMicMuted, E = L === void 0 ? !1 : L, k = p(function() {
			return l || a == null ? null : o("WAWebFrontendMsgGetters").getSenderObj(a);
		}, [l, a]), I = k == null ? void 0 : k.id, T = (t = o("useWAWebContactValues").useOptionalContactValues(I, [o("WAWebFrontendContactGetters").getDisplayNameAndType])) == null ? void 0 : t[0], D = T == null ? void 0 : T.displayName;
		o("useWAWebLogUnknownUserDisplayed").useLogUnknownUserDisplayed(o("WAWebVoipCallStateUtils").isCallIncoming(i) ? "call_incoming" : "in_call", k, (T == null ? void 0 : T.type) === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER);
		var x = l ? o("WAWebCallLogUtils").getCallStateText(i, a) : o("WAWebVoipLobbyUtils").getLobbyParticipantInfoText(a, l, D, i), $ = p(function() {
			return a != null ? o("WAWebFrontendMsgGetters").getChat(a) : null;
		}, [a]), P = o("WAWebOutgoingGroupCallUtils").isAdHocGroupCall(), N = p(function() {
			if (P) return o("WAWebOutgoingGroupCallUtils").getAdHocGroupCallNameOverride(R);
		}, [P, R]), M = a != null && o("WAWebMsgGetters").getIsCallLink(a) === !0, w = M && a != null ? o("WAWebMsgGetters").getSender(a) : void 0, A = p(function() {
			if (!(!M || a == null)) {
				var e = o("WAWebFrontendMsgGetters").getSenderObj(a);
				if (e != null) {
					var t = o("WAWebFrontendContactGetters").getDisplayName(e);
					return s._(
						/*BTDS*/
						"",
						[s._param("creator_name", t)]
					);
				}
			}
		}, [M, a]), F = p(function() {
			return l ? [] : o("WAWebVoipLobbyUtils").getConnectedParticipantsWithoutSelf(R, S);
		}, [
			l,
			R,
			S
		]), O = !l && F.length > 0, B = f(!1), W = B[0], q = B[1], U = R.length > 0 && (W || !O), V = d(function() {
			q(function(e) {
				return !e;
			});
		}, []), H = _(!1), G = _(!1);
		return m(function() {
			if (!l && R.length === 0) {
				o("WAWebVoipLobbyHeightUtils").WAWebVoipLobbyPanelStateEmitter.trigger("panelStateChanged", {
					isExpanded: !1,
					connectedParticipantCount: 0,
					isVideoCall: C,
					hasNoParticipants: !0
				}), G.current = !0;
				return;
			}
			if (O) {
				var e = H.current;
				H.current = W;
				var t = e !== W;
				if (!(G.current && !t && !W)) return o("WAWebVoipLobbyHeightUtils").WAWebVoipLobbyPanelStateEmitter.trigger("panelStateChanged", {
					isExpanded: W,
					connectedParticipantCount: F.length,
					isVideoCall: C
				}), G.current = !0, function() {
					o("WAWebVoipLobbyHeightUtils").WAWebVoipLobbyPanelStateEmitter.trigger("panelStateChanged", {
						isExpanded: !1,
						connectedParticipantCount: 0,
						isVideoCall: C
					});
				};
			}
		}, [
			O,
			l,
			C,
			W,
			F.length,
			R.length
		]), u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: g.lobbyOuterContainer,
			children: u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: g.lobbyInnerContainer,
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: g.contentContainer,
					children: [
						u.jsx(o("WAWebFlex.react").FlexItem, {
							align: "start",
							xstyle: g.participantInfoSection,
							children: u.jsx(r("WAWebCallParticipantInfo.react"), {
								userId: (function() {
									if (M && w != null) return w;
									if (!P) return $ == null ? void 0 : $.id;
								})(),
								participantWids: !M && P && R.length > 0 ? R : void 0,
								nameOverride: A != null ? A : N,
								imageSize: "small",
								textAlign: "start",
								callStateText: x,
								compact: !0
							})
						}),
						C && u.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: g.selfPreviewContainer,
							align: "stretch",
							children: u.jsx(o("WAWebVoipUiVideoCallSelfPreview.react").WAWebVoipUiVideoCallSelfPreviewFullWidth, {
								isLobbyView: !0,
								isSelfScreenSharing: y,
								isVideoMuted: b,
								nameOverride: s._(
									/*BTDS*/
									""
								),
								preserveVideoAspectRatio: !0,
								selfMicMuted: E
							})
						}),
						O && u.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: g.connectedParticipantsSection,
							children: u.jsx(r("WAWebVoipConnectedParticipantsInfo.react"), {
								allParticipants: R,
								connectedParticipants: F,
								isExpanded: W,
								onToggle: V
							})
						}),
						U && u.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: g.participantPanelWrapper,
							children: u.jsx(r("WAWebVoipUiParticipantPanel.react"), {
								arePeersActive: n,
								callState: i,
								onRingParticipant: v,
								participantsWithoutSelf: R,
								participantStates: S,
								showActionButton: l,
								surface: "lobby",
								transparentBackground: h
							})
						})
					]
				})
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
