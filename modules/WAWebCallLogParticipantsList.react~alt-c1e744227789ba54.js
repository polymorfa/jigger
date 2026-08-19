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
		var t = e.callLogMsg, n = o("useWAWebMsgValues").useMsgValues(t.id, [
			o("WAWebMsgGetters").getCallParticipants,
			o("WAWebMsgGetters").getIsAdHocGroupCall,
			o("WAWebMsgGetters").getIsCallLink
		]), a = n[0], i = n[1], l = n[2];
		if (!a || a.length === 0) return null;
		var c = o("WAWebFrontendMsgGetters").getChat(t), m = {
			isAdHocGroupCall: i,
			isCallLink: l,
			isGroup: c.id.isGroup()
		}, _ = o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType(m), f = o("WAWebCallInfoLoggingUtils").getCallInfoParticipantMiniContactSheetCallFromUI(m), g = o("WAWebCallLogUtils").sortCallParticipants(a, t, { excludeSelf: !_ });
		if (g.length === 0) return null;
		var h = null, y = null;
		if (_) {
			var C = a.some(function(e) {
				return e.participant.isLid();
			});
			y = C ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), h = o("WAWebMsgGetters").getIsSentByMe(t) ? y : o("WAWebMsgGetters").getSender(t);
		}
		if (!_) return u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: [d.marginBottom8, d.paddingHoriz4],
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), g.map(function(e) {
			return u.jsx(p, {
				participant: e,
				callLogMsg: t,
				callCreatorWid: h,
				meWid: y,
				isOptimized: _,
				callFromUI: f,
				numParticipantsShown: g.length
			}, e.participant.toString());
		})] });
		var b = g.filter(function(e) {
			return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
		}), v = g.filter(function(e) {
			return e.outcome !== o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
		}), S = g.length;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [b.length > 0 && u.jsxs(u.Fragment, { children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
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
					[s._plural(b.length, "number")]
				)
			})]
		}), b.map(function(e) {
			return u.jsx(p, {
				participant: e,
				callLogMsg: t,
				callCreatorWid: h,
				meWid: y,
				isOptimized: _,
				callFromUI: f,
				numParticipantsShown: S
			}, e.participant.toString());
		})] }), v.length > 0 && u.jsxs(u.Fragment, { children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			xstyle: [d.sectionHeader, b.length > 0 && d.sectionHeaderSpacing],
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
					[s._plural(v.length, "number")]
				)
			})]
		}), v.map(function(e) {
			return u.jsx(p, {
				participant: e,
				callLogMsg: t,
				callCreatorWid: h,
				meWid: y,
				isOptimized: _,
				callFromUI: f,
				numParticipantsShown: S
			}, e.participant.toString());
		})] })] });
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t, n = e.callCreatorWid, a = e.callFromUI, i = e.callLogMsg, l = e.isOptimized, m = e.meWid, p = e.numParticipantsShown, _ = e.participant, f = o("WAWebContactCollection").ContactCollection.gadd(_.participant), g = m != null && _.participant.equals(m), h = function() {
			if (l) {
				var e = n != null && _.participant.equals(n);
				return e ? s._(
					/*BTDS*/
					""
				) : null;
			}
			var t = !o("WAWebMsgGetters").getIsSentByMe(i), r = o("WAWebMsgGetters").getSender(i), a = t && r != null && _.participant.equals(r);
			return a ? s._(
				/*BTDS*/
				""
			) : _.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected ? s._(
				/*BTDS*/
				""
			) : null;
		}, y = _.participant, C = s._(
			/*BTDS*/
			""
		), b;
		g ? b = C.toString() : f != null ? b = o("WAWebFrontendContactGetters").getDisplayName(f) : b = y.toString();
		var v = y.isBot(), S = o("useWAWebContactValues").useOptionalContactValues(y, [o("WAWebFrontendContactGetters").getIsGuest]), R = !g && ((t = S == null ? void 0 : S[0]) != null ? t : !1), L = c(function() {
			return u.jsxs(r("WDSMenu.react"), { children: [
				u.jsx(r("WDSMenuItem.react"), {
					type: "groupHeader",
					title: b
				}, "header"),
				u.jsx(r("WDSMenuItem.react"), {
					onPress: function() {
						o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({
							preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.SEND_MESSAGE,
							numParticipantsShown: p
						}), o("WAWebVoipActionRequestOpenChat").requestOpenChat(y);
					},
					Icon: r("WDSIconWdsIcChat.react"),
					title: s._(
						/*BTDS*/
						""
					)
				}, "message"),
				!v && !g && u.jsxs(u.Fragment, { children: [u.jsx(r("WDSMenuItem.react"), {
					onPress: function() {
						o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({
							preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_VIDEO_CALL,
							isVideo: !0,
							participantActionSource: o("WAWebWamEnumParticipantActionSource").PARTICIPANT_ACTION_SOURCE.MINI_CONTACT_SHEET_VIDEO,
							numParticipantsShown: p
						}), o("WAWebVoipStartCall").startWAWebVoipCall(y, !0, a, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED).catch(r("WAWebNoop"));
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
						}), o("WAWebVoipStartCall").startWAWebVoipCall(y, !1, a, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED).catch(r("WAWebNoop"));
					},
					Icon: r("WDSIconIcCall.react"),
					title: s._(
						/*BTDS*/
						""
					)
				}, "voice")] })
			] });
		}, [
			a,
			b,
			v,
			g,
			y,
			p
		]), E = function() {
			o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({
				preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_PARTICIPANT_ROW,
				numParticipantsShown: p
			});
		}, k = h();
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: [
				d.participantItem,
				d.paddingVert8,
				d.paddingHoriz4
			],
			children: [
				u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: [d.avatar, d.marginEnd12],
					children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: _.participant,
						size: 40
					})
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: d.participantInfo,
					children: [u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: d.participantName,
						children: u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							maxLines: 1,
							children: g ? C : u.jsx(o("WAWebName.react").Name, {
								contact: f,
								showNotifyName: !0,
								elevatedPushNamesEnabled: !0
							})
						})
					}), k != null && u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: d.callStatus,
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: k
						})
					})]
				}),
				!R && u.jsx("div", {
					onClickCapture: E,
					children: u.jsx(r("WDSMenuBarItem.react"), {
						testid: "participant-more",
						tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
						icon: r("WDSIconIcMoreVert.react"),
						title: s._(
							/*BTDS*/
							""
						),
						wdsMenuToRender: L,
						menuAlign: "end",
						menuPosition: "below"
					})
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);
