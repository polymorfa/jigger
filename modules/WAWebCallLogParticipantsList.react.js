__d("WAWebCallLogParticipantsList.react", [
	"fbt",
	"WAWebCallInfoLoggingUtils",
	"WAWebCallInfoUserJourneyLogger",
	"WAWebCallLogUtils",
	"WAWebContactCollection",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"WAWebName.react",
	"WAWebNoop",
	"WAWebTabOrder",
	"WAWebUserPrefsMeUser",
	"WAWebVoipActionRequestOpenChat",
	"WAWebVoipGatingUtils",
	"WAWebVoipStartCall",
	"WAWebVoipWaCallEnums",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWamEnumParticipantActionSource",
	"WAWebWamEnumPreCallActionType",
	"WDSIconIcCall.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcVideocam.react",
	"WDSIconWdsIcChat.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = {
		participantItem: {
			width: "xh8yej3",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		avatar: {
			width: "x100vrsf",
			height: "x1vqgdyp",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		participantInfo: {
			minWidth: "xeuugli",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		participantName: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			lineHeight: "x1fc57z9",
			minHeight: "xisnujt",
			minWidth: "xeuugli",
			$$css: !0
		},
		callStatus: {
			fontSize: "x1nxh6w3",
			lineHeight: "xd4r4e8",
			minHeight: "xvrgn94",
			marginTop: "xfl633f",
			$$css: !0
		},
		marginBottom8: {
			marginBottom: "xefnzgg",
			$$css: !0
		},
		marginEnd12: {
			marginInlineEnd: "x14mko6t",
			$$css: !0
		},
		paddingHoriz4: {
			paddingInlineStart: "x181vq82",
			paddingInlineEnd: "x1uc92m",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		sectionHeader: {
			paddingBottom: "x1nbhmlj",
			width: "xh8yej3",
			$$css: !0
		},
		sectionHeaderSpacing: {
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		paddingVert8: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(25), n = e.callLogMsg, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [
			o("WAWebMsgGetters").getCallParticipants,
			o("WAWebMsgGetters").getIsAdHocGroupCall,
			o("WAWebMsgGetters").getIsCallLink
		], t[0] = a) : a = t[0];
		var i = o("useWAWebMsgValues").useMsgValues(n.id, a), l = i[0], c = i[1], m = i[2];
		if (!l || l.length === 0) return null;
		var h, y;
		if (t[1] !== n || t[2] !== c || t[3] !== m) {
			var C = o("WAWebFrontendMsgGetters").getChat(n), b = {
				isAdHocGroupCall: c,
				isCallLink: m,
				isGroup: C.id.isGroup()
			};
			h = o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType(b), y = o("WAWebCallInfoLoggingUtils").getCallInfoParticipantMiniContactSheetCallFromUI(b), t[1] = n, t[2] = c, t[3] = m, t[4] = h, t[5] = y;
		} else h = t[4], y = t[5];
		var v = y, S, R, L, E;
		if (t[6] !== n || t[7] !== l || t[8] !== h || t[9] !== v) {
			E = Symbol.for("react.early_return_sentinel");
			e: {
				var k = o("WAWebCallLogUtils").sortCallParticipants(l, n, { excludeSelf: !h });
				if (k.length === 0) {
					E = null;
					break e;
				}
				var I, T;
				if (t[14] !== n || t[15] !== l || t[16] !== h) {
					if (I = null, T = null, h) {
						var D = l.some(f);
						T = D ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), I = o("WAWebMsgGetters").getIsSentByMe(n) ? T : o("WAWebMsgGetters").getSender(n);
					}
					t[14] = n, t[15] = l, t[16] = h, t[17] = I, t[18] = T;
				} else I = t[17], T = t[18];
				if (!h) {
					var x;
					t[19] === Symbol.for("react.memo_cache_sentinel") ? (x = [d.marginBottom8, d.paddingHoriz4], t[19] = x) : x = t[19];
					var $;
					t[20] === Symbol.for("react.memo_cache_sentinel") ? ($ = u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: x,
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}), t[20] = $) : $ = t[20], E = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [$, k.map(function(e) {
						return u.jsx(g, {
							participant: e,
							callLogMsg: n,
							callCreatorWid: I,
							meWid: T,
							isOptimized: h,
							callFromUI: v,
							numParticipantsShown: k.length
						}, e.participant.toString());
					})] });
					break e;
				}
				var P = k.filter(_), N = k.filter(p), M = k.length;
				S = o("WAWebFlex.react").FlexColumn, R = P.length > 0 && u.jsxs(u.Fragment, { children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "all",
					xstyle: d.sectionHeader,
					children: [u.jsx(o("WAWebFlex.react").FlexItem, { children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}) }), u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							"",
							[s._plural(P.length, "number")]
						)
					})]
				}), P.map(function(e) {
					return u.jsx(g, {
						participant: e,
						callLogMsg: n,
						callCreatorWid: I,
						meWid: T,
						isOptimized: h,
						callFromUI: v,
						numParticipantsShown: M
					}, e.participant.toString());
				})] }), L = N.length > 0 && u.jsxs(u.Fragment, { children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "all",
					xstyle: [d.sectionHeader, P.length > 0 && d.sectionHeaderSpacing],
					children: [u.jsx(o("WAWebFlex.react").FlexItem, { children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}) }), u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							"",
							[s._plural(N.length, "number")]
						)
					})]
				}), N.map(function(e) {
					return u.jsx(g, {
						participant: e,
						callLogMsg: n,
						callCreatorWid: I,
						meWid: T,
						isOptimized: h,
						callFromUI: v,
						numParticipantsShown: M
					}, e.participant.toString());
				})] });
			}
			t[6] = n, t[7] = l, t[8] = h, t[9] = v, t[10] = S, t[11] = R, t[12] = L, t[13] = E;
		} else S = t[10], R = t[11], L = t[12], E = t[13];
		if (E !== Symbol.for("react.early_return_sentinel")) return E;
		var w;
		return t[21] !== S || t[22] !== R || t[23] !== L ? (w = u.jsxs(S, { children: [R, L] }), t[21] = S, t[22] = R, t[23] = L, t[24] = w) : w = t[24], w;
	}
	function p(e) {
		return e.outcome !== o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
	}
	function _(e) {
		return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
	}
	function f(e) {
		return e.participant.isLid();
	}
	function g(e) {
		var t, n = o("react-compiler-runtime").c(69), a = e.callCreatorWid, i = e.callFromUI, l = e.callLogMsg, c = e.isOptimized, m = e.meWid, p = e.numParticipantsShown, _ = e.participant, f, g, h, y, C, b;
		if (n[0] !== a || n[1] !== l || n[2] !== c || n[3] !== m || n[4] !== _.outcome || n[5] !== _.participant) {
			f = o("WAWebContactCollection").ContactCollection.gadd(_.participant);
			var v;
			n[12] !== m || n[13] !== _.participant ? (v = m != null && _.participant.equals(m), n[12] = m, n[13] = _.participant, n[14] = v) : v = n[14], h = v;
			var S;
			n[15] !== a || n[16] !== l || n[17] !== c || n[18] !== _.outcome || n[19] !== _.participant ? (S = function() {
				if (c) {
					var e = a != null && _.participant.equals(a);
					return e ? s._(
						/*BTDS*/
						""
					) : null;
				}
				var t = !o("WAWebMsgGetters").getIsSentByMe(l), n = o("WAWebMsgGetters").getSender(l), r = t && n != null && _.participant.equals(n);
				return r ? s._(
					/*BTDS*/
					""
				) : _.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected ? s._(
					/*BTDS*/
					""
				) : null;
			}, n[15] = a, n[16] = l, n[17] = c, n[18] = _.outcome, n[19] = _.participant, n[20] = S) : S = n[20], g = S, y = _.participant, b = s._(
				/*BTDS*/
				""
			), h ? C = b.toString() : f != null ? C = o("WAWebFrontendContactGetters").getDisplayName(f) : C = y.toString(), n[0] = a, n[1] = l, n[2] = c, n[3] = m, n[4] = _.outcome, n[5] = _.participant, n[6] = f, n[7] = g, n[8] = h, n[9] = y, n[10] = C, n[11] = b;
		} else f = n[6], g = n[7], h = n[8], y = n[9], C = n[10], b = n[11];
		var R;
		n[21] !== y ? (R = y.isBot(), n[21] = y, n[22] = R) : R = n[22];
		var L = R, E;
		n[23] === Symbol.for("react.memo_cache_sentinel") ? (E = [o("WAWebFrontendContactGetters").getIsGuest], n[23] = E) : E = n[23];
		var k = o("useWAWebContactValues").useOptionalContactValues(y, E), I = !h && ((t = k == null ? void 0 : k[0]) != null ? t : !1), T;
		n[24] !== C ? (T = u.jsx(r("WDSMenuItem.react"), {
			type: "groupHeader",
			title: C
		}, "header"), n[24] = C, n[25] = T) : T = n[25];
		var D;
		n[26] !== p || n[27] !== y ? (D = function() {
			o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({
				preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.SEND_MESSAGE,
				numParticipantsShown: p
			}), o("WAWebVoipActionRequestOpenChat").requestOpenChat(y);
		}, n[26] = p, n[27] = y, n[28] = D) : D = n[28];
		var x;
		n[29] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), n[29] = x) : x = n[29];
		var $;
		n[30] !== D ? ($ = u.jsx(r("WDSMenuItem.react"), {
			onPress: D,
			Icon: r("WDSIconWdsIcChat.react"),
			title: x
		}, "message"), n[30] = D, n[31] = $) : $ = n[31];
		var P;
		n[32] !== i || n[33] !== L || n[34] !== h || n[35] !== p || n[36] !== y ? (P = !L && !h && u.jsxs(u.Fragment, { children: [u.jsx(r("WDSMenuItem.react"), {
			onPress: function() {
				o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({
					preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_VIDEO_CALL,
					isVideo: !0,
					participantActionSource: o("WAWebWamEnumParticipantActionSource").PARTICIPANT_ACTION_SOURCE.MINI_CONTACT_SHEET_VIDEO,
					numParticipantsShown: p
				}), o("WAWebVoipStartCall").startWAWebVoipCall(y, !0, i, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED).catch(r("WAWebNoop"));
			},
			Icon: r("WDSIconIcVideocam.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "video"), u.jsx(r("WDSMenuItem.react"), {
			onPress: function() {
				o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({
					preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_AUDIO_CALL,
					isVideo: !1,
					participantActionSource: o("WAWebWamEnumParticipantActionSource").PARTICIPANT_ACTION_SOURCE.MINI_CONTACT_SHEET_AUDIO,
					numParticipantsShown: p
				}), o("WAWebVoipStartCall").startWAWebVoipCall(y, !1, i, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED).catch(r("WAWebNoop"));
			},
			Icon: r("WDSIconIcCall.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "voice")] }), n[32] = i, n[33] = L, n[34] = h, n[35] = p, n[36] = y, n[37] = P) : P = n[37];
		var N;
		n[38] !== T || n[39] !== $ || n[40] !== P ? (N = u.jsxs(r("WDSMenu.react"), { children: [
			T,
			$,
			P
		] }), n[38] = T, n[39] = $, n[40] = P, n[41] = N) : N = n[41];
		var M = N, w;
		n[42] !== p ? (w = function() {
			o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({
				preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_PARTICIPANT_ROW,
				numParticipantsShown: p
			});
		}, n[42] = p, n[43] = w) : w = n[43];
		var A = w, F;
		n[44] !== g ? (F = g(), n[44] = g, n[45] = F) : F = n[45];
		var O = F, B;
		n[46] === Symbol.for("react.memo_cache_sentinel") ? (B = [
			d.participantItem,
			d.paddingVert8,
			d.paddingHoriz4
		], n[46] = B) : B = n[46];
		var W;
		n[47] === Symbol.for("react.memo_cache_sentinel") ? (W = [d.avatar, d.marginEnd12], n[47] = W) : W = n[47];
		var q;
		n[48] !== _.participant ? (q = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: W,
			children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: _.participant,
				size: 40
			})
		}), n[48] = _.participant, n[49] = q) : q = n[49];
		var U;
		n[50] !== f || n[51] !== h || n[52] !== b ? (U = h ? b : u.jsx(o("WAWebName.react").Name, {
			contact: f,
			showNotifyName: !0,
			elevatedPushNamesEnabled: !0
		}), n[50] = f, n[51] = h, n[52] = b, n[53] = U) : U = n[53];
		var V;
		n[54] !== U ? (V = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: d.participantName,
			children: u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				maxLines: 1,
				children: U
			})
		}), n[54] = U, n[55] = V) : V = n[55];
		var H;
		n[56] !== O ? (H = O != null && u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: d.callStatus,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: O
			})
		}), n[56] = O, n[57] = H) : H = n[57];
		var G;
		n[58] !== V || n[59] !== H ? (G = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.participantInfo,
			children: [V, H]
		}), n[58] = V, n[59] = H, n[60] = G) : G = n[60];
		var z;
		n[61] !== A || n[62] !== I || n[63] !== M ? (z = !I && u.jsx("div", {
			onClickCapture: A,
			children: u.jsx(r("WDSMenuBarItem.react"), {
				testid: "participant-more",
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				icon: r("WDSIconIcMoreVert.react"),
				title: s._(
					/*BTDS*/
					""
				),
				wdsMenuToRender: M,
				menuAlign: "end",
				menuPosition: "below"
			})
		}), n[61] = A, n[62] = I, n[63] = M, n[64] = z) : z = n[64];
		var j;
		return n[65] !== q || n[66] !== G || n[67] !== z ? (j = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: B,
			children: [
				q,
				G,
				z
			]
		}), n[65] = q, n[66] = G, n[67] = z, n[68] = j) : j = n[68], j;
	}
	l.default = m;
}), 226);
