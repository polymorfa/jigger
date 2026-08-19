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
	"react-compiler-runtime",
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
		var t, n = o("react-compiler-runtime").c(62), a = e.arePeersActive, i = e.callLogMsg, l = e.callState, c = e.isCallOutgoing, d = e.isInMiniPlayer, p = e.isSelfScreenSharing, h = e.isVideoCall, C = e.isVideoMuted, b = e.onRingParticipant, v = e.participantStates, S = e.participantsWithoutSelf, R = e.selfMicMuted, L = d === void 0 ? !1 : d, E = R === void 0 ? !1 : R, k;
		n[0] !== i || n[1] !== c ? (k = c || i == null ? null : o("WAWebFrontendMsgGetters").getSenderObj(i), n[0] = i, n[1] = c, n[2] = k) : k = n[2];
		var I = k, T = I == null ? void 0 : I.id, D = (t = o("useWAWebContactValues").useOptionalContactValues(T, [o("WAWebFrontendContactGetters").getDisplayNameAndType])) == null ? void 0 : t[0], x = D == null ? void 0 : D.displayName;
		o("useWAWebLogUnknownUserDisplayed").useLogUnknownUserDisplayed(o("WAWebVoipCallStateUtils").isCallIncoming(l) ? "call_incoming" : "in_call", I, (D == null ? void 0 : D.type) === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER);
		var $;
		n[3] !== x || n[4] !== i || n[5] !== l || n[6] !== c ? ($ = c ? o("WAWebCallLogUtils").getCallStateText(l, i) : o("WAWebVoipLobbyUtils").getLobbyParticipantInfoText(i, c, x, l), n[3] = x, n[4] = i, n[5] = l, n[6] = c, n[7] = $) : $ = n[7];
		var P = $, N;
		n[8] !== i ? (N = i != null ? o("WAWebFrontendMsgGetters").getChat(i) : null, n[8] = i, n[9] = N) : N = n[9];
		var M = N, w = o("WAWebOutgoingGroupCallUtils").isAdHocGroupCall(), A;
		e: {
			if (!w) {
				A = void 0;
				break e;
			}
			var F;
			n[10] !== S ? (F = o("WAWebOutgoingGroupCallUtils").getAdHocGroupCallNameOverride(S), n[10] = S, n[11] = F) : F = n[11], A = F;
		}
		var O = A, B;
		n[12] !== i ? (B = i != null && o("WAWebMsgGetters").getIsCallLink(i) === !0, n[12] = i, n[13] = B) : B = n[13];
		var W = B, q;
		n[14] !== i || n[15] !== W ? (q = W && i != null ? o("WAWebMsgGetters").getSender(i) : void 0, n[14] = i, n[15] = W, n[16] = q) : q = n[16];
		var U = q, V;
		if (n[17] !== i || n[18] !== W) {
			e: {
				if (!W || i == null) {
					V = void 0;
					break e;
				}
				var H = o("WAWebFrontendMsgGetters").getSenderObj(i);
				if (H == null) {
					V = void 0;
					break e;
				}
				var G = o("WAWebFrontendContactGetters").getDisplayName(H);
				V = s._(
					/*BTDS*/
					"",
					[s._param("creator_name", G)]
				);
			}
			n[17] = i, n[18] = W, n[19] = V;
		} else V = n[19];
		var z = V, j;
		e: {
			if (c) {
				var K;
				n[20] === Symbol.for("react.memo_cache_sentinel") ? (K = [], n[20] = K) : K = n[20], j = K;
				break e;
			}
			var Q;
			n[21] !== v || n[22] !== S ? (Q = o("WAWebVoipLobbyUtils").getConnectedParticipantsWithoutSelf(S, v), n[21] = v, n[22] = S, n[23] = Q) : Q = n[23], j = Q;
		}
		var X = j, Y = !c && X.length > 0, J = f(!1), Z = J[0], ee = J[1], te = S.length > 0 && (Z || !Y), ne;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (ne = function() {
			ee(y);
		}, n[24] = ne) : ne = n[24];
		var re = ne, oe = _(!1), ae = _(!1), ie, le;
		n[25] !== X.length || n[26] !== c || n[27] !== Z || n[28] !== h || n[29] !== S.length || n[30] !== Y ? (ie = function() {
			if (!c && S.length === 0) {
				o("WAWebVoipLobbyHeightUtils").WAWebVoipLobbyPanelStateEmitter.trigger("panelStateChanged", {
					isExpanded: !1,
					connectedParticipantCount: 0,
					isVideoCall: h,
					hasNoParticipants: !0
				}), ae.current = !0;
				return;
			}
			if (Y) {
				var e = oe.current;
				oe.current = Z;
				var t = e !== Z;
				if (!(ae.current && !t && !Z)) return o("WAWebVoipLobbyHeightUtils").WAWebVoipLobbyPanelStateEmitter.trigger("panelStateChanged", {
					isExpanded: Z,
					connectedParticipantCount: X.length,
					isVideoCall: h
				}), ae.current = !0, (function() {
					o("WAWebVoipLobbyHeightUtils").WAWebVoipLobbyPanelStateEmitter.trigger("panelStateChanged", {
						isExpanded: !1,
						connectedParticipantCount: 0,
						isVideoCall: h
					});
				});
			}
		}, le = [
			Y,
			c,
			h,
			Z,
			X.length,
			S.length
		], n[25] = X.length, n[26] = c, n[27] = Z, n[28] = h, n[29] = S.length, n[30] = Y, n[31] = ie, n[32] = le) : (ie = n[31], le = n[32]), m(ie, le);
		var se;
		e: {
			if (W && U != null) {
				se = U;
				break e;
			}
			if (w) {
				se = void 0;
				break e;
			}
			se = M == null ? void 0 : M.id;
		}
		var ue = !W && w && S.length > 0 ? S : void 0, ce = z != null ? z : O, de;
		n[33] !== P || n[34] !== se || n[35] !== ue || n[36] !== ce ? (de = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "start",
			xstyle: g.participantInfoSection,
			children: u.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: se,
				participantWids: ue,
				nameOverride: ce,
				imageSize: "small",
				textAlign: "start",
				callStateText: P,
				compact: !0
			})
		}), n[33] = P, n[34] = se, n[35] = ue, n[36] = ce, n[37] = de) : de = n[37];
		var me;
		n[38] !== p || n[39] !== h || n[40] !== C || n[41] !== E ? (me = h && u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: g.selfPreviewContainer,
			align: "stretch",
			children: u.jsx(o("WAWebVoipUiVideoCallSelfPreview.react").WAWebVoipUiVideoCallSelfPreviewFullWidth, {
				isLobbyView: !0,
				isSelfScreenSharing: p,
				isVideoMuted: C,
				nameOverride: s._(
					/*BTDS*/
					""
				),
				preserveVideoAspectRatio: !0,
				selfMicMuted: E
			})
		}), n[38] = p, n[39] = h, n[40] = C, n[41] = E, n[42] = me) : me = n[42];
		var pe;
		n[43] !== X || n[44] !== Z || n[45] !== S || n[46] !== Y ? (pe = Y && u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: g.connectedParticipantsSection,
			children: u.jsx(r("WAWebVoipConnectedParticipantsInfo.react"), {
				allParticipants: S,
				connectedParticipants: X,
				isExpanded: Z,
				onToggle: re
			})
		}), n[43] = X, n[44] = Z, n[45] = S, n[46] = Y, n[47] = pe) : pe = n[47];
		var _e;
		n[48] !== a || n[49] !== l || n[50] !== c || n[51] !== L || n[52] !== b || n[53] !== v || n[54] !== S || n[55] !== te ? (_e = te && u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: g.participantPanelWrapper,
			children: u.jsx(r("WAWebVoipUiParticipantPanel.react"), {
				arePeersActive: a,
				callState: l,
				onRingParticipant: b,
				participantsWithoutSelf: S,
				participantStates: v,
				showActionButton: c,
				surface: "lobby",
				transparentBackground: L
			})
		}), n[48] = a, n[49] = l, n[50] = c, n[51] = L, n[52] = b, n[53] = v, n[54] = S, n[55] = te, n[56] = _e) : _e = n[56];
		var fe;
		return n[57] !== de || n[58] !== me || n[59] !== pe || n[60] !== _e ? (fe = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: g.lobbyOuterContainer,
			children: u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: g.lobbyInnerContainer,
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: g.contentContainer,
					children: [
						de,
						me,
						pe,
						_e
					]
				})
			})
		}), n[57] = de, n[58] = me, n[59] = pe, n[60] = _e, n[61] = fe) : fe = n[61], fe;
	}
	function y(e) {
		return !e;
	}
	l.default = h;
}), 226);
