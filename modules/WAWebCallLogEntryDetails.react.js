__d("WAWebCallLogEntryDetails.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebCallButtonsSurface",
	"WAWebCallInfoLoggingUtils",
	"WAWebCallInfoUserJourneyLogger",
	"WAWebCallLogDataUsageText.react",
	"WAWebCallLogEntryCell.react",
	"WAWebCallLogEntryChatImage.react",
	"WAWebCallLogMsgData.flow",
	"WAWebCallLogParticipantsList.react",
	"WAWebCallLogTitle.react",
	"WAWebClock",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebEnvironment",
	"WAWebFlex.react",
	"WAWebFlexBox.react",
	"WAWebFrontendMsgGetters",
	"WAWebGroupMetadataCollection",
	"WAWebInfoFlowLoadable",
	"WAWebKeyboardTabUtils",
	"WAWebMessageLogQplEvents",
	"WAWebMsgGetters",
	"WAWebStateUtils",
	"WAWebTabOrder",
	"WAWebUimUie.react",
	"WAWebVoipCallButtonsLoadable",
	"WAWebVoipCallsTabPanelManager",
	"WAWebVoipGatingUtils",
	"WAWebVoipWaCallEnums",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWamEnumParticipantActionSource",
	"WAWebWamEnumPreCallActionType",
	"WAWebWamEnumProfileEntryPoint",
	"WDSIconIcClose.react",
	"WDSIconIcInfo.react",
	"WDSMenuBarItem.react",
	"WDSText.react",
	"countWhere",
	"err",
	"react",
	"react-compiler-runtime",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
		drawerWithBorder: {
			borderInlineStartWidth: "xpilrb4",
			borderInlineStartStyle: "x1t7ytsu",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		topPanelWrapper: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderStartStartRadius: "x1xn7y0n",
			borderStartEndRadius: "x1uxb8k9",
			$$css: !0
		},
		bottomPanelWrapper: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderEndEndRadius: "x1vmbcc8",
			borderEndStartRadius: "x16xm01d",
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			$$css: !0
		},
		headerWrapper: {
			borderBottomStyle: "x1sy0etr",
			$$css: !0
		},
		panelHeader: {
			width: "xh8yej3",
			boxSizing: "x9f619",
			$$css: !0
		},
		image: {
			minWidth: "xayfy2v",
			$$css: !0
		},
		callBtnsWrapper: {
			marginInlineStart: "xvc5jky",
			$$css: !0
		},
		callLogRow: {
			width: "xh8yej3",
			$$css: !0
		},
		participantsListContainer: {
			width: "xh8yej3",
			boxSizing: "x9f619",
			$$css: !0
		},
		marginStart4: {
			marginInlineStart: "x1wbi8v6",
			$$css: !0
		},
		marginEnd8: {
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		},
		marginHoriz4: {
			marginInlineStart: "x1wbi8v6",
			marginInlineEnd: "x7g7pl8",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		marginTop16: {
			marginTop: "x98l61r",
			$$css: !0
		},
		marginVert8: {
			marginTop: "x1380le5",
			marginBottom: "xefnzgg",
			$$css: !0
		},
		paddingAll12: {
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		paddingStart16: {
			paddingInlineStart: "xdx6fka",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(96), n = e.callLogMsgs;
		if (n.length === 0) throw r("err")("Call log entry details panel requires at least one call log msg");
		var a = n[0], i = o("WAWebFrontendMsgGetters").getChat(a), l;
		t[0] !== a ? (l = o("WAWebMsgGetters").getIsGroupCall(a), t[0] = a, t[1] = l) : l = t[1];
		var m = l, C;
		if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
			var b;
			C = [
				(b = o("WAWebMsgGetters")).getCallParticipants,
				b.getCallLinkToken,
				b.getIsVideoCall,
				b.getIsAdHocGroupCall,
				b.getIsCallLink
			], t[2] = C;
		} else C = t[2];
		var v = o("useWAWebMsgValues").useMsgValues(a.id, C), S = v[0], R = v[1], L = v[2], E = v[3], k = v[4], I = {
			isAdHocGroupCall: E,
			isCallLink: k,
			isGroup: i.id.isGroup()
		}, T = o("WAWebCallInfoLoggingUtils").getCallInfoHeaderCallFromUI(I), D = o("WAWebCallInfoLoggingUtils").getCallSizeTypeForCallInfo(I), x = r("WAWebEnvironment").isWeb && i.id.isGroup() ? (function(e, t, n) {
			var o = r("WAWebGroupMetadataCollection").get(i.id.toString());
			return (e = (t = o == null ? void 0 : o.size) != null ? t : o == null || (n = o.participants) == null ? void 0 : n.length) != null ? e : 0;
		})() : 0, $ = o("WAWebCallInfoLoggingUtils").getCallGroupSizeBucket(x), P, N;
		t[3] !== $ || t[4] !== D ? (P = function() {
			return o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.newSession({
				callSizeType: D,
				callGroupSizeBucket: $
			}), o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({ preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CALL_INFO_OPEN }), y;
		}, N = [D, $], t[3] = $, t[4] = D, t[5] = P, t[6] = N) : (P = t[5], N = t[6]), c(P, N);
		var M;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (M = [], t[7] = M) : M = t[7];
		var w = M;
		if (S != null) {
			var A;
			t[8] !== S ? (A = S.map(h), t[8] = S, t[9] = A) : A = t[9], w = A;
		}
		var F, O, B, W, q, U, V, H, G, z, j, K, Q, X, Y, J;
		if (t[10] !== T || t[11] !== R || t[12] !== n || t[13] !== i || t[14] !== E || t[15] !== k || t[16] !== L || t[17] !== a || t[18] !== w) {
			var Z = n.reduce(g, new Map()), ee = f, te = _, ne;
			t[35] !== i ? (ne = function() {
				i.contact.isBusiness && o("WAWebMessageLogQplEvents").qplStartProfileView("Header");
				var e = i.id.isGroup() ? i : void 0;
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "info_flow",
					chat: o("WAWebStateUtils").unproxy(i),
					profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CALLS,
					sourceGroupChatOrNewsletter: e,
					showBackButton: !0
				} : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
					chat: o("WAWebStateUtils").unproxy(i),
					profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CALLS,
					sourceGroupChatOrNewsletter: e,
					onBack: o("WAWebDrawerManager").closeDrawerRight
				}, "info-" + i.id.toString()), {
					transition: "slide-left",
					uim: null,
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
				});
			}, t[35] = i, t[36] = ne) : ne = t[36];
			var re = ne;
			q = o("WAWebUimUie.react").UIE, z = "CallLogEntryDetails", j = !0, K = ee, W = r("WAWebDrawer.react"), U = "white-bg", V = d.drawerWithBorder, t[37] === Symbol.for("react.memo_cache_sentinel") ? (H = {
				surface: "unknown",
				viewName: "call-log-details"
			}, t[37] = H) : H = t[37];
			var oe;
			t[38] === Symbol.for("react.memo_cache_sentinel") ? (oe = s._(
				/*BTDS*/
				""
			), t[38] = oe) : oe = t[38], t[39] === Symbol.for("react.memo_cache_sentinel") ? (G = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: "tab",
				children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
					align: "center",
					justify: "all",
					children: [oe, u.jsx(r("WDSMenuBarItem.react"), {
						icon: r("WDSIconIcClose.react"),
						onClick: ee,
						tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
						testid: "close-call-info-panel",
						title: s._(
							/*BTDS*/
							""
						)
					})]
				})
			}), t[39] = G) : G = t[39], B = r("WAWebDrawerBody.react"), O = r("WAWebDrawerSection.react"), Y = "refresh-new";
			var ae;
			t[40] === Symbol.for("react.memo_cache_sentinel") ? (ae = [d.topPanelWrapper, d.headerWrapper], t[40] = ae) : ae = t[40];
			var ie;
			t[41] === Symbol.for("react.memo_cache_sentinel") ? (ie = [d.paddingAll12, d.panelHeader], t[41] = ie) : ie = t[41];
			var le;
			t[42] === Symbol.for("react.memo_cache_sentinel") ? (le = [
				d.image,
				d.marginStart4,
				d.marginEnd8
			], t[42] = le) : le = t[42];
			var se;
			t[43] !== a ? (se = u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: le,
				children: u.jsx(r("WAWebCallLogEntryChatImage.react"), { msg: a })
			}), t[43] = a, t[44] = se) : se = t[44];
			var ue;
			t[45] !== a ? (ue = u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: d.marginHoriz4,
				grow: 1,
				children: u.jsx(r("WAWebCallLogTitle.react"), {
					callLogMsg: a,
					isCallInfoHeader: !0
				})
			}), t[45] = a, t[46] = ue) : ue = t[46];
			var ce = R != null ? R : "", de = L != null ? L : !1, me;
			t[47] !== T || t[48] !== i || t[49] !== w || t[50] !== ce || t[51] !== de ? (me = u.jsx("div", {
				onClickCapture: te,
				children: u.jsx(o("WAWebFlexBox.react").FlexRow, { children: u.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
					callFromUI: T,
					lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
					surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails,
					chat: i,
					participants: w,
					callLinkCode: ce,
					isCallLinkVideo: de
				}) })
			}), t[47] = T, t[48] = i, t[49] = w, t[50] = ce, t[51] = de, t[52] = me) : me = t[52];
			var pe;
			t[53] !== i.id || t[54] !== re || t[55] !== E || t[56] !== k ? (pe = k !== !0 && E !== !0 && o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType({
				isAdHocGroupCall: E,
				isCallLink: k,
				isGroup: i.id.isGroup()
			}) && u.jsx(r("WDSMenuBarItem.react"), {
				icon: r("WDSIconIcInfo.react"),
				onClick: re,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "call-info-open-info-panel-button",
				title: i.id.isGroup() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}), t[53] = i.id, t[54] = re, t[55] = E, t[56] = k, t[57] = pe) : pe = t[57];
			var _e;
			t[58] !== me || t[59] !== pe ? (_e = u.jsxs(o("WAWebFlexBox.react").FlexRow, {
				xstyle: d.callBtnsWrapper,
				children: [me, pe]
			}), t[58] = me, t[59] = pe, t[60] = _e) : _e = t[60], t[61] !== se || t[62] !== ue || t[63] !== _e ? (J = u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: ae,
				children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
					align: "center",
					justify: "all",
					xstyle: ie,
					children: [
						se,
						ue,
						_e
					]
				})
			}), t[61] = se, t[62] = ue, t[63] = _e, t[64] = J) : J = t[64], F = o("WAWebFlex.react").FlexColumn, t[65] === Symbol.for("react.memo_cache_sentinel") ? (Q = [
				d.bottomPanelWrapper,
				d.paddingAll12,
				d.paddingStart16
			], t[65] = Q) : Q = t[65], X = Z.entries().map(p), t[10] = T, t[11] = R, t[12] = n, t[13] = i, t[14] = E, t[15] = k, t[16] = L, t[17] = a, t[18] = w, t[19] = F, t[20] = O, t[21] = B, t[22] = W, t[23] = q, t[24] = U, t[25] = V, t[26] = H, t[27] = G, t[28] = z, t[29] = j, t[30] = K, t[31] = Q, t[32] = X, t[33] = Y, t[34] = J;
		} else F = t[19], O = t[20], B = t[21], W = t[22], q = t[23], U = t[24], V = t[25], H = t[26], G = t[27], z = t[28], j = t[29], K = t[30], Q = t[31], X = t[32], Y = t[33], J = t[34];
		var fe;
		t[66] !== m || t[67] !== a || t[68] !== S ? (fe = m && S && S.length > 1 && u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: [d.marginTop16, d.participantsListContainer],
			children: u.jsx(r("WAWebCallLogParticipantsList.react"), { callLogMsg: a })
		}), t[66] = m, t[67] = a, t[68] = S, t[69] = fe) : fe = t[69];
		var ge;
		t[70] !== F || t[71] !== fe || t[72] !== Q || t[73] !== X ? (ge = u.jsxs(F, {
			xstyle: Q,
			children: [X, fe]
		}), t[70] = F, t[71] = fe, t[72] = Q, t[73] = X, t[74] = ge) : ge = t[74];
		var he;
		t[75] !== O || t[76] !== ge || t[77] !== Y || t[78] !== J ? (he = u.jsxs(O, {
			theme: Y,
			children: [J, ge]
		}), t[75] = O, t[76] = ge, t[77] = Y, t[78] = J, t[79] = he) : he = t[79];
		var ye;
		t[80] !== B || t[81] !== he ? (ye = u.jsx(B, { children: he }), t[80] = B, t[81] = he, t[82] = ye) : ye = t[82];
		var Ce;
		t[83] !== W || t[84] !== U || t[85] !== V || t[86] !== H || t[87] !== G || t[88] !== ye ? (Ce = u.jsxs(W, {
			theme: U,
			xstyle: V,
			tsNavigationData: H,
			children: [G, ye]
		}), t[83] = W, t[84] = U, t[85] = V, t[86] = H, t[87] = G, t[88] = ye, t[89] = Ce) : Ce = t[89];
		var be;
		return t[90] !== q || t[91] !== z || t[92] !== j || t[93] !== K || t[94] !== Ce ? (be = u.jsx(q, {
			displayName: z,
			escapable: j,
			requestDismiss: K,
			children: Ce
		}), t[90] = q, t[91] = z, t[92] = j, t[93] = K, t[94] = Ce, t[95] = be) : be = t[95], be;
	}
	function p(e) {
		var t = e[0], n = e[1];
		return u.jsx(C, {
			callLogMsgs: n,
			date: t
		}, t);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.target;
		if (t instanceof Element) {
			var n = t.closest("[data-testid=\"voice-call-button\"], [data-testid=\"video-call-button\"]");
			if (n instanceof Element) {
				var r = n.getAttribute("data-testid") === "video-call-button";
				o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({
					preCallActionType: r ? o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_VIDEO_CALL : o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_AUDIO_CALL,
					isVideo: r,
					participantActionSource: r ? o("WAWebWamEnumParticipantActionSource").PARTICIPANT_ACTION_SOURCE.HEADER_VIDEO : o("WAWebWamEnumParticipantActionSource").PARTICIPANT_ACTION_SOURCE.HEADER_AUDIO
				});
				return;
			}
			var a = t.closest("[data-testid=\"chat-open-button\"]");
			a instanceof Element && o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({ preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.SEND_MESSAGE });
		}
	}
	function f() {
		r("WAWebVoipCallsTabPanelManager").trigger("closeCallLogInfoPanel");
	}
	function g(e, t) {
		var n, r = o("WAWebClock").Clock.relativeDateStr(t.t);
		return e.has(r.toString()) || e.set(r.toString(), []), (n = e.get(r.toString())) == null || n.push(t), e;
	}
	function h(e) {
		return e.participant;
	}
	function y() {
		o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({ preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.DISMISS }), o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.clearSession();
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(7), n = e.callLogMsgs, a = e.date, i;
		t[0] !== a ? (i = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: d.marginVert8,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: a
			})
		}), t[0] = a, t[1] = i) : i = t[1];
		var l;
		t[2] !== n ? (l = n.map(b), t[2] = n, t[3] = l) : l = t[3];
		var s;
		return t[4] !== i || t[5] !== l ? (s = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.panelHeader,
			children: [i, l]
		}), t[4] = i, t[5] = l, t[6] = s) : s = t[6], s;
	}
	function b(e) {
		var t;
		return u.jsxs(o("WAWebFlexBox.react").FlexRow, {
			align: "start",
			justify: "all",
			xstyle: [d.marginVert8, d.callLogRow],
			children: [u.jsxs(o("WAWebFlexBox.react").FlexRow, {
				align: "center",
				children: [
					u.jsx(o("WAWebCallLogEntryCell.react").CallLogIcon, {
						iconHeight: 20,
						isMissedCall: o("WAWebMsgGetters").getIsMissedCall(e),
						isVideoCall: o("WAWebMsgGetters").getIsVideoCall(e),
						isFromMe: o("WAWebMsgGetters").getIsSentByMe(e),
						isCallLink: (t = o("WAWebMsgGetters").getIsCallLink(e)) != null ? t : !1,
						xstyle: d.marginEnd8
					}),
					"\xA0",
					u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsx(v, { msg: e }), u.jsx(S, { msg: e })] })
				]
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "end",
				children: [u.jsx(R, { msg: e }), u.jsx(r("WAWebCallLogDataUsageText.react"), { msg: e })]
			})]
		}, e.id.toString());
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t, n, a = e.msg, i = (n = o("WAWebMsgGetters")).getIsMissedCall(a), l = n.getIsSentByMe(a), c = n.getIsVideoCall(a), d = n.getIsGroupCall(a), m = (t = o("WAWebMsgGetters").getIsCallLink(a)) != null ? t : !1;
		if (m) {
			var p;
			return i ? p = c === !0 ? "MISSED_VIDEO" : "MISSED_VOICE" : p = c === !0 ? "VIDEO" : "VOICE", u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					"",
					[s._enum(p, {
						VIDEO: "Video",
						VOICE: "Voice",
						MISSED_VIDEO: "Missed video",
						MISSED_VOICE: "Missed voice"
					})]
				)
			});
		}
		var _;
		i ? _ = "MISSED" : _ = l ? "OUTGOING" : "INCOMING";
		var f = c ? "VIDEO" : "VOICE";
		return u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				"",
				[
					s._enum(_, {
						MISSED: "Missed",
						OUTGOING: "Outgoing",
						INCOMING: "Incoming"
					}),
					s._enum(d ? 1 : 0, {
						0: "",
						1: "group "
					}),
					s._enum(f, {
						VOICE: "voice",
						VIDEO: "video"
					})
				]
			)
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = o("react-compiler-runtime").c(4), n = e.msg, a;
		t[0] !== n.t ? (a = o("WAWebClock").Clock.timestampStr(n.t), t[0] = n.t, t[1] = a) : a = t[1];
		var i;
		return t[2] !== a ? (i = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: a
		}), t[2] = a, t[3] = i) : i = t[3], i;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(9), n = e.msg, a;
		if (t[0] !== n) {
			var i, l = o("WAWebMsgGetters").getCallDuration(n), c = (i = o("WAWebMsgGetters").getCallOutcome(n)) != null ? i : o("WAWebCallLogMsgData.flow").CallOutcome.Unknown;
			if (l != null && c === o("WAWebCallLogMsgData.flow").CallOutcome.Completed) if (o("WAWebMsgGetters").getIsGroupCall(n) && o("WAWebMsgGetters").getIsSentByMe(n) && !L(n)) {
				var d;
				t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
					/*BTDS*/
					""
				), t[2] = d) : d = t[2], a = d;
			} else a = o("WAWebClock").Clock.callDurationStr(l);
			else if (c === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere) {
				var m;
				t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
					/*BTDS*/
					""
				), t[3] = m) : m = t[3], a = m;
			} else if (c === o("WAWebCallLogMsgData.flow").CallOutcome.Completed || c === o("WAWebCallLogMsgData.flow").CallOutcome.Unknown) {
				var p;
				t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
					/*BTDS*/
					""
				), t[4] = p) : p = t[4], a = p;
			} else if (c === o("WAWebCallLogMsgData.flow").CallOutcome.Missed && o("WAWebMsgGetters").getIsCallSilenced(n)) {
				var _;
				t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
					/*BTDS*/
					""
				), t[5] = _) : _ = t[5], a = _;
			} else {
				var f;
				t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
					/*BTDS*/
					""
				), t[6] = f) : f = t[6], a = f;
			}
			t[0] = n, t[1] = a;
		} else a = t[1];
		var g;
		return t[7] !== a ? (g = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: a
		}), t[7] = a, t[8] = g) : g = t[8], g;
	}
	function L(e) {
		var t = o("WAWebMsgGetters").getCallParticipants(e);
		if (t == null) return !1;
		var n = r("countWhere")(t, function(e) {
			return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
		});
		return n > 1;
	}
	l.default = m;
}), 226);
