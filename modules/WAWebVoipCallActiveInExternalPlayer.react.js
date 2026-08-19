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
	"react-compiler-runtime",
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
		var t, n, a, i, l = o("react-compiler-runtime").c(41), c = e.msg, m;
		l[0] !== c ? (m = c != null ? o("WAWebFrontendMsgGetters").getChat(c) : null, l[0] = c, l[1] = m) : m = l[1];
		var h = m, y = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.callLinkCreatorJid, C = (n = (a = r("WAWebCallCollection").activeCall) == null ? void 0 : a.isCallLink) != null ? n : !1, b;
		l[2] === Symbol.for("react.memo_cache_sentinel") ? (b = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SCREEN_SHARE_STATES), l[2] = b) : b = l[2];
		var v = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, b, f), S = r("useWAWebVoipModalManager")(), R = S.closeModal, L = S.openModal, E;
		l[3] !== R || l[4] !== v || l[5] !== L ? (E = function() {
			if (v) {
				L(u.jsx(r("WAWebVoipMoveCallConfirmPopup.react"), {
					closeModal: R,
					onConfirm: g
				}));
				return;
			}
			g();
		}, l[3] = R, l[4] = v, l[5] = L, l[6] = E) : E = l[6];
		var k = E, I;
		e: {
			if (!C || y == null) {
				I = null;
				break e;
			}
			var T;
			if (l[7] === Symbol.for("react.memo_cache_sentinel")) {
				var D = o("WAWebContactCollection").ContactCollection.get(y);
				T = D != null ? o("WAWebFrontendContactGetters").getDisplayName(D) : null, l[7] = T;
			} else T = l[7];
			I = T;
		}
		var x = I, $ = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:state", _), P;
		l[8] !== $ ? (P = o("WAWebVoipCallStateUtils").isCallOutgoing($), l[8] = $, l[9] = P) : P = l[9];
		var N = P, M;
		l[10] === Symbol.for("react.memo_cache_sentinel") ? (M = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), l[10] = M) : M = l[10];
		var w = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, M, p), A = w[0], F;
		l[11] !== A || l[12] !== N ? (F = o("WAWebOutgoingGroupCallUtils").getOutgoingGroupCallNameOverride(N, A), l[11] = A, l[12] = N, l[13] = F) : F = l[13];
		var O = F, B;
		l[14] !== A || l[15] !== N ? (B = o("WAWebOutgoingGroupCallUtils").getOutgoingGroupCallParticipants(N, A), l[14] = A, l[15] = N, l[16] = B) : B = l[16];
		var W = B, q;
		l[17] !== A ? (q = o("WAWebOutgoingGroupCallUtils").getAdHocGroupCallNameOverride(A), l[17] = A, l[18] = q) : q = l[18];
		var U = q, V;
		l[19] !== A ? (V = o("WAWebOutgoingGroupCallUtils").getAdHocGroupCallParticipants(A), l[19] = A, l[20] = V) : V = l[20];
		var H = V, G = O != null ? O : U, z = W != null ? W : H, j;
		l[21] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
			/*BTDS*/
			""
		), l[21] = j) : j = l[21];
		var K = j, Q = (i = h == null ? void 0 : h.id) != null ? i : C ? y : null, X;
		l[22] === Symbol.for("react.memo_cache_sentinel") ? (X = C && x != null ? s._(
			/*BTDS*/
			"",
			[s._param("name", x)]
		) : null, l[22] = X) : X = l[22];
		var Y = X, J;
		if (C && Y != null && y != null) {
			var Z;
			l[23] === Symbol.for("react.memo_cache_sentinel") ? (Z = u.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: y,
				compact: !0,
				imageSize: "small",
				callStateText: K,
				xstyle: d.fullWidth,
				audioLevelType: "peer",
				nameOverride: Y
			}), l[23] = Z) : Z = l[23], J = Z;
		} else if (z != null && z.length > 1) {
			var ee;
			l[24] !== z || l[25] !== G ? (ee = u.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
				callStateText: K,
				compact: !0,
				nameText: G,
				participantWids: z
			}), l[24] = z, l[25] = G, l[26] = ee) : ee = l[26], J = ee;
		} else if (Q != null) {
			var te = Y != null ? Y : G, ne;
			l[27] !== te || l[28] !== Q ? (ne = u.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: Q,
				compact: !0,
				imageSize: "small",
				callStateText: K,
				xstyle: d.fullWidth,
				audioLevelType: "peer",
				nameOverride: te
			}), l[27] = te, l[28] = Q, l[29] = ne) : ne = l[29], J = ne;
		} else {
			var re;
			l[30] === Symbol.for("react.memo_cache_sentinel") ? (re = u.jsx(r("WAWebCallParticipantInfo.react"), {
				showCallStateTextOnly: !0,
				callStateText: K,
				compact: !0,
				xstyle: d.fullWidth
			}), l[30] = re) : re = l[30], J = re;
		}
		var oe;
		l[31] === Symbol.for("react.memo_cache_sentinel") ? (oe = [
			d.moveCallHereContainer,
			d.surfaceElevated,
			o("WDSColorStyles.stylex").WDSBackgroundColorStyles.surfaceElevatedEmphasized
		], l[31] = oe) : oe = l[31];
		var ae;
		l[32] !== J ? (ae = u.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			shrink: 1,
			basis: 0,
			xstyle: d.participantInfoWrapper,
			children: J
		}), l[32] = J, l[33] = ae) : ae = l[33];
		var ie, le;
		l[34] === Symbol.for("react.memo_cache_sentinel") ? (ie = s._(
			/*BTDS*/
			""
		), le = [d.moveCallHereButton, o("WDSColorStyles.stylex").WDSBackgroundColorStyles.persistentAlwaysWhite], l[34] = ie, l[35] = le) : (ie = l[34], le = l[35]);
		var se;
		l[36] !== k ? (se = u.jsx(o("WAWebFlex.react").FlexItem, {
			shrink: 0,
			xstyle: d.buttonWrapper,
			children: u.jsx(r("WDSButton.react"), {
				size: "small",
				Icon: r("WDSIconWdsIcPipExitTopRightToBottomLeft.react"),
				label: ie,
				xstyle: le,
				onPress: k,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "voip_move_call_here_button"
			})
		}), l[36] = k, l[37] = se) : se = l[37];
		var ue;
		return l[38] !== ae || l[39] !== se ? (ue = u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "center",
			xstyle: oe,
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				padding: 8,
				gap: 16,
				align: "center",
				children: [ae, se]
			})
		}), l[38] = ae, l[39] = se, l[40] = ue) : ue = l[40], ue;
	}
	function p() {
		var e, t;
		return [(e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.groupCallParticipants) != null ? e : []];
	}
	function _() {
		var e;
		return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getState();
	}
	function f() {
		var e, t;
		return (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.isSelfScreenSharing()) != null ? e : !1;
	}
	function g() {
		window.focus(), o("WAWebVoipUiManager").closeVoipUiPopoutWindow({ callEnded: !1 }), o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen() && o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.trigger("docPipOpenFailed");
	}
	l.default = m;
}), 226);
