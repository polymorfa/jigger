__d("WAWebEventsMessageComponent.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebCastToEventCreationMsg",
	"WAWebChatThemeModeContext",
	"WAWebContactCollection",
	"WAWebDisplayType",
	"WAWebDrawerManager",
	"WAWebEmojiText.react",
	"WAWebEventInfoFlowLoadable",
	"WAWebEventUtils",
	"WAWebEventsCreateEventModalFlow.react",
	"WAWebEventsGatingUtils",
	"WAWebEventsRSVPPopup.react",
	"WAWebExpandableText.react",
	"WAWebFacePile.react",
	"WAWebFbtIntlList",
	"WAWebFlex.react",
	"WAWebFormatEventDateString",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebJoinEventCallAction",
	"WAWebKeyboardTabUtils",
	"WAWebL10N",
	"WAWebMessageBubbleActions.react",
	"WAWebMessageDeeperContainer.react",
	"WAWebMessageMeta.react",
	"WAWebMessageTextBubble.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebProtobufsE2E.pb",
	"WAWebSendEventResponseMsgAction",
	"WAWebUnstyledButton.react",
	"WAWebUserPrefsMeUser",
	"WAWebVoipGatingUtils",
	"WAWebWarningIcon.react",
	"WDSFontTokenStyles",
	"WDSIconIcCalendarMonth.react",
	"WDSIconIcExpandMore.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"compactMap",
	"react",
	"stylex",
	"useWAWebEventResponses",
	"useWAWebMsgValues",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.createRef, p = d.useContext, _ = d.useRef, f = {
		marginBlock1: {
			marginTop: "xvijh9v",
			marginBottom: "x1ty9z65",
			$$css: !0
		},
		paddingInlineStart14: {
			paddingInlineStart: "x1onr9mi",
			$$css: !0
		}
	}, g = {
		unstyledButton: {
			width: "xh8yej3",
			textAlign: "x1yc453h",
			$$css: !0
		},
		deepContainer: {
			cursor: "xmper1u",
			width: "x10rsq8x",
			position: "x1n2onr6",
			display: "x78zum5",
			$$css: !0
		},
		icon: {
			color: "x1v5yvga",
			$$css: !0
		},
		iconDisabled: {
			color: "xshy2n",
			$$css: !0
		},
		iconThemed: {
			color: "x14ug900",
			$$css: !0
		},
		iconContainer: {
			width: "x14qfxbe",
			height: "xc9qbxq",
			backgroundColor: "x4wrhlh",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		iconContainerVibrantOutgoing: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		iconContainerThemed: {
			backgroundColor: "x1ew7x2d",
			$$css: !0
		},
		eventDetailText: {
			color: "xhslqc4",
			$$css: !0
		},
		facepileBorderIncoming: {
			borderTopColor: "x1dla3ec",
			borderInlineEndColor: "x1b76cva",
			borderBottomColor: "xoht4n3",
			borderInlineStartColor: "xd1k3aj",
			$$css: !0
		},
		facepileBorderOutgoing: {
			borderTopColor: "x1dla3ec",
			borderInlineEndColor: "x1b76cva",
			borderBottomColor: "xoht4n3",
			borderInlineStartColor: "xd1k3aj",
			$$css: !0
		},
		invalidEventWarning: {
			alignItems: "x6s0dn4",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			$$css: !0
		},
		invalidEventWarningBorderReceiver: {
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		invalidEventWarningBorderSender: {
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		warningIcon: {
			color: "x1kt8ij1",
			$$css: !0
		},
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		flex: {
			display: "x78zum5",
			$$css: !0
		}
	};
	function h(e) {
		if (e != null && e.includes("/video/")) return s._(
			/*BTDS*/
			""
		);
		if (e != null && e.includes("/voice/")) return s._(
			/*BTDS*/
			""
		);
	}
	function y(e) {
		var t = e.eventResponse, n = e.isEventCanceled, r = e.isSentByMe, a = e.showJoinCall, i;
		return n ? i = s._(
			/*BTDS*/
			""
		) : a ? i = s._(
			/*BTDS*/
			""
		) : r ? i = s._(
			/*BTDS*/
			""
		) : t === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING ? i = s._(
			/*BTDS*/
			""
		) : t === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE ? i = s._(
			/*BTDS*/
			""
		) : t === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING ? i = s._(
			/*BTDS*/
			""
		) : i = s._(
			/*BTDS*/
			""
		), i;
	}
	function C(e, t) {
		var n = e.eventDescription, a = e.eventEndTime, i = e.eventLocation, l = e.eventName, u = e.eventStartTime, c;
		if ((i == null ? void 0 : i.name) != null || (i == null ? void 0 : i.address) != null) {
			var d;
			c = (d = i.name) != null ? d : i.address;
		}
		var m = r("WAWebFbtIntlList")(r("compactMap")(t, function(e) {
			var t = o("WAWebContactCollection").ContactCollection.get(e.sender);
			if (t != null) return o("WAWebFrontendContactGetters").getFormattedName(t);
		}), r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA), p;
		t.length > 0 && (p = s._(
			/*BTDS*/
			"",
			[s._plural(t.length, "number"), s._param("event-attendees-names-readout", m)]
		));
		var _ = o("WAWebFormatEventDateString").getEventDateStringFor(u, a);
		return s._(
			/*BTDS*/
			"",
			[
				s._param("event-name", l),
				s._param("event-description", n != null ? n + "." : ""),
				s._param("event-time", _),
				s._param("event-location", c != null ? c + "." : ""),
				s._param("event-attendees", p)
			]
		);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var a, i, l, u, d = t.chat, b = t.displayAuthor, v = t.displayType, S = t.msg, R = t.quotedMsg, L = o("useWAWebMsgValues").useMsgValues(S.id, r("WAWebCastToEventCreationMsg"), [
			(u = o("WAWebMsgGetters")).getEventName,
			u.getEventStartTime,
			u.getEventEndTime,
			u.getEventLocation,
			u.getEventJoinLink,
			u.getEventInvalidated,
			u.getIsEventCanceled,
			u.getEventIsScheduledCall,
			u.getIsSentByMe
		]), E = L[0], k = L[1], I = L[2], T = L[3], D = L[4], x = L[5], $ = L[6], P = L[7], N = L[8], M = r("useWAWebUIM")(), w = p(r("WAWebChatThemeModeContext")), A = w.isThemed, F = w.isVibrant, O = o("useWAWebEventResponses").useEventResponses(S), B = E.slice(0, (a = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null ? a : 100), W = o("WAWebEventUtils").shouldShowEventAsPassed(k, I), q = $ || W, U = x || q, V = F && N, H = c.jsx(r("WDSIconIcCalendarMonth.react"), { xstyle: [
			g.icon,
			U && g.iconDisabled,
			!U && A && g.iconThemed
		] }), G = m(), z = _(null);
		if (E == null) return null;
		function j() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "event_info",
				chat: d,
				msg: S
			} : c.jsx(o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
				chat: d,
				msg: S,
				onEnd: o("WAWebDrawerManager").closeDrawerRight
			}, "event-info-drawer-" + S.id.toString()), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				uim: M
			});
		}
		function K(e) {
			return Q.apply(this, arguments);
		}
		function Q() {
			return Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (le) D != null && (yield o("WAWebJoinEventCallAction").joinEventCall({
					callLink: D,
					chat: d
				}));
				else if (N) {
					var t;
					o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebEventsCreateEventModalFlow.react"), {
						preselectedChat: d,
						prefilledData: {
							eventName: E,
							eventDescription: S.eventDescription,
							eventStartTime: o("WAWebEventUtils").eventTimeToUnixTime(k),
							eventEndTime: I != null ? o("WAWebEventUtils").eventTimeToUnixTime(I) : void 0,
							eventLocationName: (t = T == null ? void 0 : T.name) != null ? t : T == null ? void 0 : T.address,
							eventCallType: o("WAWebEventUtils").getEventCallLinkType(D)
						},
						existingEventMsg: S,
						showLocationField: !P
					}));
				} else {
					var n;
					(n = G.current) == null || n.open(e);
				}
			}), Q.apply(this, arguments);
		}
		function X(e) {
			return Y.apply(this, arguments);
		}
		function Y() {
			return Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				o("WAWebSendEventResponseMsgAction").sendEventResponseMsg(e, S);
			}), Y.apply(this, arguments);
		}
		var J = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingVer2, g.fullWidth],
			children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
				text: B,
				textLimit: o("WAWebMsgGetters").getInitialPageSize(S),
				children: function(t) {
					var e = t.textLimit;
					return c.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: B,
						dirMismatch: o("WAWebFrontendMsgGetters").getRtl(S) !== r("WAWebL10N").isRTL(),
						direction: "auto",
						selectable: !0,
						textLimit: e,
						xstyle: [o("WDSFontTokenStyles").WDSFontTokenStyles.Body1Emphasized, g.flex]
					});
				}
			})
		}), Z = o("WAWebFormatEventDateString").getEventDateStringFor(k, I), ee = k != null ? c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
				g.eventDetailText,
				f.marginBlock1
			],
			children: s._(
				/*BTDS*/
				"",
				[s._param("Event-starttime-string", Z)]
			)
		}) : null, te, ne = (i = T == null ? void 0 : T.name) != null ? i : T == null ? void 0 : T.address;
		ne != null && (te = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
				g.eventDetailText,
				g.fullWidth,
				f.marginBlock1
			],
			children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: ne,
				direction: "auto",
				selectable: !0,
				xstyle: [g.fullWidth, g.flex]
			})
		}));
		var re, oe = h(D);
		oe != null && (re = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
				g.eventDetailText,
				f.marginBlock1
			],
			children: oe
		}));
		var ae = O.find(function(e) {
			return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
		}), ie = !$ && (P || (ae == null ? void 0 : ae.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING && o("WAWebEventUtils").eventIsJoinable(k)), le = D != null && ie && o("WAWebVoipGatingUtils").isGroupCallingEnabled(), se = o("WAWebEventUtils").shouldDisableInteractionForEvent({
			isSentByMe: N,
			isEventCanceled: $,
			eventInvalidated: x,
			isEventPassed: W,
			showJoinCall: le
		}), ue = O.filter(function(e) {
			return e.eventResponse === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING;
		}), ce = null;
		if (ue.length > 0) {
			var de = ue.sort(function(e, t) {
				return t.senderTimestampMs - e.senderTimestampMs;
			}).map(function(e) {
				return e.sender;
			}).slice(0, 3), me = N ? g.facepileBorderOutgoing : g.facepileBorderIncoming;
			ce = c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: [
					o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
					g.eventDetailText,
					g.fullWidth,
					f.marginBlock1
				],
				children: [c.jsx(r("WAWebFacePile.react"), {
					keyName: S.id.toString(),
					idsOrUrls: de,
					borderColor: me,
					faceSize: 18
				}), c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStart4), { children: s._(
					/*BTDS*/
					"",
					[s._param("number-of-participants-going", ue.length, [0, ue.length])]
				) }))]
			});
		}
		var pe = y({
			eventResponse: (l = ae == null ? void 0 : ae.eventResponse) != null ? l : o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN,
			isSentByMe: N,
			showJoinCall: le,
			isEventCanceled: $
		}), _e = c.jsxs("span", {
			className: "x3nfvp2 x6s0dn4",
			children: [pe, c.jsx(r("WDSIconIcExpandMore.react"), {
				height: 18,
				displayInline: !0
			})]
		}), fe = R ? c.jsx("div", {
			className: "xahult9",
			children: R
		}) : null;
		return c.jsxs(r("WAWebMessageTextBubble.react"), {
			testid: "event-creation-msg",
			msg: S,
			displayType: v,
			displayAuthor: b,
			hideMeta: !0,
			useFixedWidth: !o("WAWebDisplayType").isWideDisplay(v),
			ariaLabel: C(S, O),
			children: [
				fe,
				c.jsxs(r("WAWebUnstyledButton.react"), {
					onClick: j,
					xstyle: g.unstyledButton,
					children: [c.jsxs(r("WAWebMessageDeeperContainer.react"), {
						xstyle: [
							g.deepContainer,
							o("WDSPaddings.stylex").wdsPaddings.padding8,
							o("WDSPaddings.stylex").wdsPaddings.paddingBottom12
						],
						outgoingMsg: N,
						children: [c.jsx(o("WAWebFlex.react").FlexColumn, {
							xstyle: [
								g.iconContainer,
								V && g.iconContainerVibrantOutgoing,
								!V && A && g.iconContainerThemed
							],
							shrink: 0,
							align: "center",
							justify: "center",
							padding: 2,
							children: H
						}), c.jsxs(o("WAWebFlex.react").FlexColumn, {
							xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingStart8, g.fullWidth],
							padding: 2,
							children: [
								J,
								ee,
								te,
								re,
								ce,
								c.jsx("div", {
									className: "x10l6tqk x9q68il xy1j3rs",
									children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: S })
								})
							]
						})]
					}), x && c.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: [
							g.invalidEventWarning,
							N ? g.invalidEventWarningBorderSender : g.invalidEventWarningBorderReceiver,
							o("WDSMargins.stylex").wdsMargins.marginTop4,
							o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
							f.paddingInlineStart14,
							o("WDSPaddings.stylex").wdsPaddings.paddingEnd12
						],
						children: [c.jsx(o("WAWebWarningIcon.react").WarningIcon, {
							width: 19,
							height: 17,
							iconXstyle: g.warningIcon
						}), c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3, o("WDSMargins.stylex").wdsMargins.marginStart8), {
							"data-testid": "invalid-event-bubble-warning",
							children: s._(
								/*BTDS*/
								""
							)
						}))]
					})]
				}),
				c.jsx(r("WAWebEventsRSVPPopup.react"), {
					currentResponse: ae == null ? void 0 : ae.eventResponse,
					onClick: X,
					controlPopupRef: G,
					triggerRef: z
				}),
				c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
					ref: z,
					theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.EVENT_CREATION,
					items: [{
						label: le || N || $ ? pe : _e,
						title: pe,
						onClick: function(t) {
							K(t);
						},
						disabled: !le && se,
						testid: "event-rsvp-respond"
					}]
				})
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.getEventCallString = h, l.getEventRespondButtonText = y, l.Event = b;
}), 226);
