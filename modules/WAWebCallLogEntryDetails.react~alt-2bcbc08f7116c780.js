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
		var t = e.callLogMsgs;
		if (t.length === 0) throw r("err")("Call log entry details panel requires at least one call log msg");
		var n = t[0], a = o("WAWebFrontendMsgGetters").getChat(n), i = o("WAWebMsgGetters").getIsGroupCall(n), l = o("useWAWebMsgValues").useMsgValues(n.id, [
			o("WAWebMsgGetters").getCallParticipants,
			o("WAWebMsgGetters").getCallLinkToken,
			o("WAWebMsgGetters").getIsVideoCall,
			o("WAWebMsgGetters").getIsAdHocGroupCall,
			o("WAWebMsgGetters").getIsCallLink
		]), m = l[0], _ = l[1], f = l[2], g = l[3], h = l[4], y = {
			isAdHocGroupCall: g,
			isCallLink: h,
			isGroup: a.id.isGroup()
		}, C = o("WAWebCallInfoLoggingUtils").getCallInfoHeaderCallFromUI(y), b = o("WAWebCallInfoLoggingUtils").getCallSizeTypeForCallInfo(y), v = r("WAWebEnvironment").isWeb && a.id.isGroup() ? (function(e, t, n) {
			var o = r("WAWebGroupMetadataCollection").get(a.id.toString());
			return (e = (t = o == null ? void 0 : o.size) != null ? t : o == null || (n = o.participants) == null ? void 0 : n.length) != null ? e : 0;
		})() : 0, S = o("WAWebCallInfoLoggingUtils").getCallGroupSizeBucket(v);
		c(function() {
			return o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.newSession({
				callSizeType: b,
				callGroupSizeBucket: S
			}), o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({ preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CALL_INFO_OPEN }), function() {
				o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({ preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.DISMISS }), o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.clearSession();
			};
		}, [b, S]);
		var R = [];
		m != null && (R = m.map(function(e) {
			return e.participant;
		}));
		var L = t.reduce(function(e, t) {
			var n, r = o("WAWebClock").Clock.relativeDateStr(t.t);
			return e.has(r.toString()) || e.set(r.toString(), []), (n = e.get(r.toString())) == null || n.push(t), e;
		}, new Map()), E = function() {
			r("WAWebVoipCallsTabPanelManager").trigger("closeCallLogInfoPanel");
		}, k = function(t) {
			var e = t.target;
			if (e instanceof Element) {
				var n = e.closest("[data-testid=\"voice-call-button\"], [data-testid=\"video-call-button\"]");
				if (n instanceof Element) {
					var r = n.getAttribute("data-testid") === "video-call-button";
					o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({
						preCallActionType: r ? o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_VIDEO_CALL : o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_AUDIO_CALL,
						isVideo: r,
						participantActionSource: r ? o("WAWebWamEnumParticipantActionSource").PARTICIPANT_ACTION_SOURCE.HEADER_VIDEO : o("WAWebWamEnumParticipantActionSource").PARTICIPANT_ACTION_SOURCE.HEADER_AUDIO
					});
					return;
				}
				var a = e.closest("[data-testid=\"chat-open-button\"]");
				a instanceof Element && o("WAWebCallInfoUserJourneyLogger").CallInfoUserJourneyLogger.logEvent({ preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.SEND_MESSAGE });
			}
		}, I = function() {
			a.contact.isBusiness && o("WAWebMessageLogQplEvents").qplStartProfileView("Header");
			var e = a.id.isGroup() ? a : void 0;
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "info_flow",
				chat: o("WAWebStateUtils").unproxy(a),
				profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CALLS,
				sourceGroupChatOrNewsletter: e,
				showBackButton: !0
			} : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
				chat: o("WAWebStateUtils").unproxy(a),
				profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CALLS,
				sourceGroupChatOrNewsletter: e,
				onBack: o("WAWebDrawerManager").closeDrawerRight
			}, "info-" + a.id.toString()), {
				transition: "slide-left",
				uim: null,
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			});
		};
		return u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "CallLogEntryDetails",
			escapable: !0,
			requestDismiss: E,
			children: u.jsxs(r("WAWebDrawer.react"), {
				theme: "white-bg",
				xstyle: d.drawerWithBorder,
				tsNavigationData: {
					surface: "unknown",
					viewName: "call-log-details"
				},
				children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					type: "tab",
					children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
						align: "center",
						justify: "all",
						children: [s._(
							/*BTDS*/
							""
						), u.jsx(r("WDSMenuBarItem.react"), {
							icon: r("WDSIconIcClose.react"),
							onClick: E,
							tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
							testid: "close-call-info-panel",
							title: s._(
								/*BTDS*/
								""
							)
						})]
					})
				}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
					theme: "refresh-new",
					children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: [d.topPanelWrapper, d.headerWrapper],
						children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
							align: "center",
							justify: "all",
							xstyle: [d.paddingAll12, d.panelHeader],
							children: [
								u.jsx(o("WAWebFlex.react").FlexItem, {
									xstyle: [
										d.image,
										d.marginStart4,
										d.marginEnd8
									],
									children: u.jsx(r("WAWebCallLogEntryChatImage.react"), { msg: n })
								}),
								u.jsx(o("WAWebFlex.react").FlexItem, {
									xstyle: d.marginHoriz4,
									grow: 1,
									children: u.jsx(r("WAWebCallLogTitle.react"), {
										callLogMsg: n,
										isCallInfoHeader: !0
									})
								}),
								u.jsxs(o("WAWebFlexBox.react").FlexRow, {
									xstyle: d.callBtnsWrapper,
									children: [u.jsx("div", {
										onClickCapture: k,
										children: u.jsx(o("WAWebFlexBox.react").FlexRow, { children: u.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
											callFromUI: C,
											lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
											surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.CallLogDetails,
											chat: a,
											participants: R,
											callLinkCode: _ != null ? _ : "",
											isCallLinkVideo: f != null ? f : !1
										}) })
									}), h !== !0 && g !== !0 && o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType({
										isAdHocGroupCall: g,
										isCallLink: h,
										isGroup: a.id.isGroup()
									}) && u.jsx(r("WDSMenuBarItem.react"), {
										icon: r("WDSIconIcInfo.react"),
										onClick: I,
										tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
										testid: "call-info-open-info-panel-button",
										title: a.id.isGroup() ? s._(
											/*BTDS*/
											""
										) : s._(
											/*BTDS*/
											""
										)
									})]
								})
							]
						})
					}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: [
							d.bottomPanelWrapper,
							d.paddingAll12,
							d.paddingStart16
						],
						children: [L.entries().map(function(e) {
							var t = e[0], n = e[1];
							return u.jsx(p, {
								callLogMsgs: n,
								date: t
							}, t);
						}), i && m && m.length > 1 && u.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: [d.marginTop16, d.participantsListContainer],
							children: u.jsx(r("WAWebCallLogParticipantsList.react"), { callLogMsg: n })
						})]
					})]
				}) })]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.callLogMsgs, n = e.date;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.panelHeader,
			children: [u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: d.marginVert8,
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: n
				})
			}), t.map(function(e) {
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
							u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsx(_, { msg: e }), u.jsx(f, { msg: e })] })
						]
					}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "end",
						children: [u.jsx(g, { msg: e }), u.jsx(r("WAWebCallLogDataUsageText.react"), { msg: e })]
					})]
				}, e.id.toString());
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
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
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.msg;
		return u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: o("WAWebClock").Clock.timestampStr(t.t)
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t, n = e.msg, a = o("WAWebMsgGetters").getCallDuration(n), i = (t = o("WAWebMsgGetters").getCallOutcome(n)) != null ? t : o("WAWebCallLogMsgData.flow").CallOutcome.Unknown, l;
		return a != null && i === o("WAWebCallLogMsgData.flow").CallOutcome.Completed ? o("WAWebMsgGetters").getIsGroupCall(n) && o("WAWebMsgGetters").getIsSentByMe(n) && !h(n) ? l = s._(
			/*BTDS*/
			""
		) : l = o("WAWebClock").Clock.callDurationStr(a) : i === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere ? l = s._(
			/*BTDS*/
			""
		) : i === o("WAWebCallLogMsgData.flow").CallOutcome.Completed || i === o("WAWebCallLogMsgData.flow").CallOutcome.Unknown ? l = s._(
			/*BTDS*/
			""
		) : i === o("WAWebCallLogMsgData.flow").CallOutcome.Missed && o("WAWebMsgGetters").getIsCallSilenced(n) ? l = s._(
			/*BTDS*/
			""
		) : l = s._(
			/*BTDS*/
			""
		), u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: l
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = o("WAWebMsgGetters").getCallParticipants(e);
		if (t == null) return !1;
		var n = r("countWhere")(t, function(e) {
			return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
		});
		return n > 1;
	}
	l.default = m;
}), 226);
