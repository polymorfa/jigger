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
	"react-compiler-runtime",
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
		var n, a, i, l, u = o("react-compiler-runtime").c(139), d = t.anchorContentTop, m = t.callLogMsg, f = t.callState, y = t.canRemoveParticipant, v = t.hasCameraAvailable, E = t.isCallActive, k = t.isCallOutgoing, I = t.isCompactLayout, T = t.isSelfHandRaised, D = t.isSelfScreenSharing, x = t.isTabVisible, $ = t.isVideoCall, P = t.isVideoMuted, N = t.peerMicMuted, M = t.selfMicMuted, w = d === void 0 ? !1 : d, A = y === void 0 ? !1 : y, F = v === void 0 ? !0 : v, O = T === void 0 ? !1 : T, B = p(r("WAWebVoipUiPopoutWindowContext")), W = g(null), q = r("useWAWebVoipPermissionStatus")($, P), U = q.cameraPermission, V = q.isLoading, H;
		u[0] !== f ? (H = o("WAWebVoipCallStateUtils").isCallIncoming(f), u[0] = f, u[1] = H) : H = u[1];
		var G = H, z = U === "denied", j = $ && G && z && !V, K = $ && G && !F, Q = g(U), X, Y;
		u[2] !== U || u[3] !== G || u[4] !== V || u[5] !== $ ? (X = function() {
			if (!V) {
				var t = Q.current;
				Q.current = U, t === "denied" && U === "granted" && G && $ && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[VoiceCallContainer] cam granted, unmuting video"]))), L());
			}
		}, Y = [
			U,
			G,
			V,
			$
		], u[2] = U, u[3] = G, u[4] = V, u[5] = $, u[6] = X, u[7] = Y) : (X = u[6], Y = u[7]), _(X, Y);
		var J = I && !B.isContextInPopoutWindow && !$ && E && N, Z;
		u[8] === Symbol.for("react.memo_cache_sentinel") ? (Z = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), u[8] = Z) : Z = u[8];
		var ee = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Z, R), te;
		u[9] !== m || u[10] !== f ? (te = o("WAWebCallLogUtils").getCallStateText(f, m), u[9] = m, u[10] = f, u[11] = te) : te = u[11];
		var ne = te;
		if (ee) {
			var re;
			u[12] === Symbol.for("react.memo_cache_sentinel") ? (re = s._(
				/*BTDS*/
				""
			), u[12] = re) : re = u[12], ne = re;
		} else if (J) {
			var oe;
			u[13] === Symbol.for("react.memo_cache_sentinel") ? (oe = s._(
				/*BTDS*/
				""
			), u[13] = oe) : oe = u[13], ne = oe;
		}
		var ae;
		u[14] === Symbol.for("react.memo_cache_sentinel") ? (ae = o("WAWebABProps").getABPropConfigValue("enable_web_voip_virtual_video_capture_driver"), u[14] = ae) : ae = u[14];
		var ie = ae === !0, le = $ && G && x && (U === "granted" || ie || j || K), se = $ && G && B.isContextInPopoutWindow && !le;
		r("useWAWebCameraPrewarm")(le);
		var ue;
		u[15] !== m ? (ue = m ? o("WAWebFrontendMsgGetters").getChat(m) : null, u[15] = m, u[16] = ue) : ue = u[16];
		var ce = ue, de;
		u[17] === Symbol.for("react.memo_cache_sentinel") ? (de = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES), u[17] = de) : de = u[17];
		var me = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, de, S), pe = me[0], _e = me[1], fe;
		e: {
			var ge, he, ye, Ce = (ge = (he = r("WAWebCallCollection").activeCall) == null ? void 0 : he.isGroup) != null ? ge : !1;
			if (Ce && pe.length === 2) {
				var be;
				u[18] !== pe ? (be = o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(pe), u[18] = pe, u[19] = be) : be = u[19];
				var ve = be;
				if (ve.length === 1) {
					fe = ve[0];
					break e;
				}
			}
			fe = (ye = ce == null ? void 0 : ce.id) != null ? ye : void 0;
		}
		var Se = fe, Re = ((n = (a = r("WAWebCallCollection").activeCall) == null ? void 0 : a.isGroup) != null ? n : !1) && pe.length === 2, Le = g(null), Ee = o("useWAWebHover").useWAWebHover(Re ? W : Le), ke = h(!1), Ie = ke[0], Te = ke[1], De;
		u[20] === Symbol.for("react.memo_cache_sentinel") ? (De = function(t) {
			Te(t);
		}, u[20] = De) : De = u[20];
		var xe = De, $e = g(null), Pe = h(!1), Ne = Pe[0], Me = Pe[1], we;
		u[21] !== Re ? (we = function() {
			Re && Me(!0);
		}, u[21] = Re, u[22] = we) : we = u[22];
		var Ae = we, Fe;
		u[23] !== Re ? (Fe = function(t) {
			var e;
			if (Re) {
				var n = t.relatedTarget;
				(!(n instanceof Node) || !((e = $e.current) != null && e.contains(n))) && Me(!1);
			}
		}, u[23] = Re, u[24] = Fe) : Fe = u[24];
		var Oe = Fe, Be;
		u[25] !== Re || u[26] !== Se ? (Be = function() {
			return Re && Se != null ? Se : null;
		}, u[25] = Re, u[26] = Se, u[27] = Be) : Be = u[27];
		var We = r("useWAWebVoipParticipantHandRaised")(Be), qe;
		u[28] === Symbol.for("react.memo_cache_sentinel") ? (qe = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES), u[28] = qe) : qe = u[28];
		var Ue, Ve;
		u[29] !== Se ? (Ue = function() {
			var e = r("WAWebCallCollection").activeCall;
			return e == null || Se == null ? null : e.getReactionForParticipant(Se);
		}, Ve = [Se], u[29] = Se, u[30] = Ue, u[31] = Ve) : (Ue = u[30], Ve = u[31]);
		var He = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, qe, Ue, Ve), Ge;
		u[32] !== Re || u[33] !== Se ? (Ge = Re && Se != null ? o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder([Se], !0) : null, u[32] = Re, u[33] = Se, u[34] = Ge) : Ge = u[34];
		var ze = Ge, je;
		u[35] !== _e || u[36] !== k ? (je = o("WAWebOutgoingGroupCallUtils").getOutgoingGroupCallNameOverride(k, _e), u[35] = _e, u[36] = k, u[37] = je) : je = u[37];
		var Ke = je, Qe;
		u[38] !== _e || u[39] !== k ? (Qe = o("WAWebOutgoingGroupCallUtils").getOutgoingGroupCallParticipants(k, _e), u[38] = _e, u[39] = k, u[40] = Qe) : Qe = u[40];
		var Xe = Qe, Ye;
		u[41] !== ce ? (Ye = o("WAWebGroupCallTitleUtils").getUnnamedGroupCallNameOverride(ce), u[41] = ce, u[42] = Ye) : Ye = u[42];
		var Je = Ye, Ze;
		e: {
			var et, tt = r("WAWebCallCollection").activeCall, nt = (et = tt == null ? void 0 : tt.isGroup) != null ? et : !1;
			if (!nt || !E) {
				Ze = null;
				break e;
			}
			var rt = null;
			if ((tt == null ? void 0 : tt.isCallLink) === !0) {
				var ot = tt.callLinkCreatorJid, at;
				if (u[43] === Symbol.for("react.memo_cache_sentinel")) {
					var it = ot != null ? o("WAWebContactCollection").ContactCollection.get(ot) : null;
					at = it != null ? o("WAWebFrontendContactGetters").getDisplayName(it) : null, u[43] = at;
				} else at = u[43];
				var lt = at;
				if (lt != null) {
					var st;
					u[44] === Symbol.for("react.memo_cache_sentinel") ? (st = s._(
						/*BTDS*/
						"",
						[s._param("creator_name", lt)]
					), u[44] = st) : st = u[44], rt = st;
				}
			} else if ((tt == null ? void 0 : tt.groupJid) == null) if (u[45] !== _e) {
				var ut = o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(_e);
				ut.length > 0 && (rt = o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(ut, !0)), u[45] = _e, u[46] = rt;
			} else rt = u[46];
			else if (o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(pe).length === 1) {
				var ct;
				u[47] !== ce ? (ct = ce ? c.jsx(o("WAWebName.react").Name, { chat: ce }) : null, u[47] = ce, u[48] = ct) : ct = u[48], rt = ct;
			}
			if (N && I && !B.isContextInPopoutWindow) {
				var dt;
				u[49] === Symbol.for("react.memo_cache_sentinel") ? (dt = s._(
					/*BTDS*/
					""
				), u[49] = dt) : dt = u[49], Ze = dt;
				break e;
			}
			var mt;
			u[50] === Symbol.for("react.memo_cache_sentinel") ? (mt = { className: "x3nfvp2 x1q0g3np x1pha0wt xozqiw3 x193iq5w" }, u[50] = mt) : mt = u[50];
			var pt;
			u[51] !== rt ? (pt = rt != null && c.jsxs(c.Fragment, { children: [c.jsx("span", {
				className: "xs83m0k xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft",
				children: rt
			}), c.jsx("span", {
				className: "x2lah0s xdwrcjd x2fvf9",
				children: b
			})] }), u[51] = rt, u[52] = pt) : pt = u[52];
			var _t;
			u[53] !== f ? (_t = c.jsx(r("WAWebCallTimer.react"), {
				callState: f,
				xstyle: C.inlineTimer
			}), u[53] = f, u[54] = _t) : _t = u[54];
			var ft;
			u[55] !== pt || u[56] !== _t ? (ft = c.jsxs("span", babelHelpers.extends({}, mt, { children: [pt, _t] })), u[55] = pt, u[56] = _t, u[57] = ft) : ft = u[57], Ze = ft;
		}
		var gt = Ze, ht = gt != null ? gt : ne, yt = (i = (l = r("WAWebCallCollection").activeCall) == null ? void 0 : l.isGroup) != null ? i : !1, Ct = Re && Se != null && (Ee || Ie || Ne), bt;
		if (le) {
			var vt;
			u[58] === Symbol.for("react.memo_cache_sentinel") ? (vt = { className: "x10l6tqk xymx5cc xxrlk4x x1of6sz5" }, u[58] = vt) : vt = u[58];
			var St;
			u[59] !== ne || u[60] !== G || u[61] !== Ke || u[62] !== Xe || u[63] !== Se || u[64] !== Je ? (St = c.jsx("div", babelHelpers.extends({}, vt, { children: Xe != null && Xe.length > 1 ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
				callStateText: ne,
				compact: !0,
				imageSize: 48,
				nameText: Ke,
				participantWids: Xe
			}) : c.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: Se,
				imageSize: "small",
				textAlign: "start",
				callStateText: ne,
				compact: !0,
				nameOverride: Ke != null ? Ke : Je,
				suppressPhoneNumberSecondary: yt,
				unknownUserLogContext: G ? "call_incoming" : "in_call"
			}) })), u[59] = ne, u[60] = G, u[61] = Ke, u[62] = Xe, u[63] = Se, u[64] = Je, u[65] = St) : St = u[65];
			var Rt;
			u[66] !== G || u[67] !== D || u[68] !== P || u[69] !== K || u[70] !== M || u[71] !== j ? (Rt = c.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				xstyle: C.incomingCallPreviewContainer,
				children: c.jsx(o("WAWebVoipUiVideoCallSelfPreview.react").WAWebVoipUiVideoCallSelfPreviewFullWidth, {
					cameraDenied: j,
					isIncoming: G,
					isSelfScreenSharing: D,
					isVideoMuted: P,
					noCameraDevice: K,
					selfMicMuted: M
				})
			}), u[66] = G, u[67] = D, u[68] = P, u[69] = K, u[70] = M, u[71] = j, u[72] = Rt) : Rt = u[72];
			var Lt;
			u[73] !== St || u[74] !== Rt ? (Lt = c.jsxs(c.Fragment, { children: [St, Rt] }), u[73] = St, u[74] = Rt, u[75] = Lt) : Lt = u[75], bt = Lt;
		} else if (se) {
			var Et;
			u[76] === Symbol.for("react.memo_cache_sentinel") ? (Et = { className: "x10l6tqk xymx5cc xxrlk4x x1of6sz5" }, u[76] = Et) : Et = u[76];
			var kt;
			u[77] !== ne || u[78] !== G || u[79] !== Ke || u[80] !== Xe || u[81] !== Se || u[82] !== Je ? (kt = c.jsx("div", babelHelpers.extends({}, Et, { children: Xe != null && Xe.length > 1 ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
				callStateText: ne,
				compact: !0,
				imageSize: 48,
				nameText: Ke,
				participantWids: Xe
			}) : c.jsx(r("WAWebCallParticipantInfo.react"), {
				userId: Se,
				imageSize: "small",
				textAlign: "start",
				callStateText: ne,
				compact: !0,
				nameOverride: Ke != null ? Ke : Je,
				suppressPhoneNumberSecondary: yt,
				unknownUserLogContext: G ? "call_incoming" : "in_call"
			}) })), u[77] = ne, u[78] = G, u[79] = Ke, u[80] = Xe, u[81] = Se, u[82] = Je, u[83] = kt) : kt = u[83];
			var It;
			u[84] === Symbol.for("react.memo_cache_sentinel") ? (It = c.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				xstyle: C.incomingCallPreviewContainer,
				children: c.jsx(o("WAWebVoipDocPipSelfPreviewNotice.react").WAWebVoipDocPipSelfPreviewNotice, {})
			}), u[84] = It) : It = u[84];
			var Tt;
			u[85] !== kt ? (Tt = c.jsxs(c.Fragment, { children: [kt, It] }), u[85] = kt, u[86] = Tt) : Tt = u[86], bt = Tt;
		} else {
			var Dt;
			u[87] !== ht || u[88] !== E || u[89] !== G || u[90] !== I || u[91] !== $ || u[92] !== Ke || u[93] !== Xe || u[94] !== Se || u[95] !== N || u[96] !== B.isContextInPopoutWindow || u[97] !== Je ? (Dt = c.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				xstyle: C.participantInfoContainer,
				children: Xe != null && Xe.length > 1 ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
					callStateText: ht,
					compact: I,
					imageSize: I ? 48 : "auto",
					nameText: Ke,
					participantWids: Xe
				}) : c.jsx(r("WAWebCallParticipantInfo.react"), {
					userId: Se,
					compact: I,
					imageSize: I ? "small" : "auto",
					callStateText: ht,
					xstyle: C.fullWidth,
					showAudioWaveform: E && !$ && !N,
					audioLevelType: "peer",
					waveformBarCount: B.isContextInPopoutWindow ? 7 : 5,
					nameOverride: Ke != null ? Ke : Je,
					suppressPhoneNumberSecondary: yt,
					unknownUserLogContext: G ? "call_incoming" : "in_call"
				})
			}), u[87] = ht, u[88] = E, u[89] = G, u[90] = I, u[91] = $, u[92] = Ke, u[93] = Xe, u[94] = Se, u[95] = N, u[96] = B.isContextInPopoutWindow, u[97] = Je, u[98] = Dt) : Dt = u[98], bt = Dt;
		}
		var xt = w ? "start" : "center", $t = le || se ? C.incomingVideoCallContainer : C.voiceCallContainer, Pt = !le && !se && C.surfaceElevated, Nt = !le && !se && B.isContextInPopoutWindow && C.surfaceElevatedPopout, Mt = E && o("WDSColorStyles.stylex").WDSBackgroundColorStyles.surfaceElevatedEmphasized, wt = k && o("WDSColorStyles.stylex").WDSBackgroundColorStyles.surfaceElevatedDefault, At;
		u[99] !== $t || u[100] !== Pt || u[101] !== Nt || u[102] !== Mt || u[103] !== wt ? (At = [
			$t,
			Pt,
			Nt,
			Mt,
			wt
		], u[99] = $t, u[100] = Pt, u[101] = Nt, u[102] = Mt, u[103] = wt, u[104] = At) : At = u[104];
		var Ft = le || se ? "voip-container-incoming-video-call" : "voip-container-audio-call", Ot;
		u[105] !== E || u[106] !== N || u[107] !== J ? (Ot = E && N && !J && c.jsx(r("WAWebVoipMicOffIndicator.react"), { size: "medium" }), u[105] = E, u[106] = N, u[107] = J, u[108] = Ot) : Ot = u[108];
		var Bt;
		u[109] !== O ? (Bt = c.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
			inlinePosition: "end",
			isHandRaised: O
		}), u[109] = O, u[110] = Bt) : Bt = u[110];
		var Wt;
		u[111] !== Re || u[112] !== We || u[113] !== ze ? (Wt = Re && c.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
			inlinePosition: "start",
			isHandRaised: We,
			participantName: ze
		}), u[111] = Re, u[112] = We, u[113] = ze, u[114] = Wt) : Wt = u[114];
		var qt;
		u[115] !== We || u[116] !== He ? (qt = c.jsx(r("WAWebVoipReactionDisplay.react"), {
			reaction: He,
			shouldHaveOffset: We
		}), u[115] = We, u[116] = He, u[117] = qt) : qt = u[117];
		var Ut;
		u[118] !== bt || u[119] !== xt || u[120] !== At || u[121] !== Ft || u[122] !== Ot || u[123] !== Bt || u[124] !== Wt || u[125] !== qt ? (Ut = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: xt,
			justify: "center",
			alignSelf: "stretch",
			grow: 1,
			shrink: 1,
			basis: 0,
			xstyle: At,
			testid: Ft,
			children: [
				bt,
				Ot,
				Bt,
				Wt,
				qt
			]
		}), u[118] = bt, u[119] = xt, u[120] = At, u[121] = Ft, u[122] = Ot, u[123] = Bt, u[124] = Wt, u[125] = qt, u[126] = Ut) : Ut = u[126];
		var Vt;
		u[127] !== A || u[128] !== Oe || u[129] !== Ae || u[130] !== k || u[131] !== G || u[132] !== Se || u[133] !== N || u[134] !== Ct ? (Vt = !G && !k && c.jsxs("div", {
			ref: $e,
			role: "toolbar",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"data-testid": "voip_voice_call_top_right_overlay",
			onFocus: Ae,
			onBlur: Oe,
			className: "x6s0dn4 x1trrmfo x78zum5 x1q0g3np xa3bivy x10l6tqk xymx5cc x1jeq31z",
			children: [Ct && Se != null && !o("WAWebVoipGatingUtils").isGuestViewer() && c.jsx(r("WAWebVoipParticipantActionsDropdown.react"), {
				canRemoveParticipant: A,
				isParticipantMuted: N,
				participantJid: Se,
				onOpenChange: xe
			}), c.jsx(r("WAWebVoipEncryptionButton.react"), { inline: !0 })]
		}), u[127] = A, u[128] = Oe, u[129] = Ae, u[130] = k, u[131] = G, u[132] = Se, u[133] = N, u[134] = Ct, u[135] = Vt) : Vt = u[135];
		var Ht;
		return u[136] !== Ut || u[137] !== Vt ? (Ht = c.jsxs(o("WAWebFlex.react").FlexRow, {
			ref: W,
			alignSelf: "stretch",
			grow: 1,
			shrink: 1,
			basis: 0,
			xstyle: C.voiceCallContainerWrapper,
			children: [Ut, Vt]
		}), u[136] = Ut, u[137] = Vt, u[138] = Ht) : Ht = u[138], Ht;
	}
	function S() {
		var e, t, n, o;
		return [(e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.groupCallParticipantsConnected) != null ? e : y, (n = (o = r("WAWebCallCollection").activeCall) == null ? void 0 : o.groupCallParticipants) != null ? n : y];
	}
	function R() {
		var e;
		return ((e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.peerBusy) === !0;
	}
	function L() {
		return E.apply(this, arguments);
	}
	function E() {
		return E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
			(e == null ? void 0 : e.type) === "web" && (yield e.setCallVideoMute(!1));
		}), E.apply(this, arguments);
	}
	l.default = v;
}), 226);
