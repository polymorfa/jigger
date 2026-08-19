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
		var n, a, i, l, u = t.chat, d = t.displayAuthor, b = t.displayType, v = t.msg, S = t.quotedMsg, R = o("useWAWebMsgValues").useMsgValues(v.id, r("WAWebCastToEventCreationMsg"), [
			(l = o("WAWebMsgGetters")).getEventName,
			l.getEventStartTime,
			l.getEventEndTime,
			l.getEventLocation,
			l.getEventJoinLink,
			l.getEventInvalidated,
			l.getIsEventCanceled,
			l.getEventIsScheduledCall,
			l.getIsSentByMe
		]), L = R[0], E = R[1], k = R[2], I = R[3], T = R[4], D = R[5], x = R[6], $ = R[7], P = R[8], N = r("useWAWebUIM")(), M = p(r("WAWebChatThemeModeContext")), w = M.isThemed, A = M.isVibrant, F = o("useWAWebEventResponses").useEventResponses(v), O = L.slice(0, (n = o("WAWebEventsGatingUtils").getEventsNameLengthLimit()) != null ? n : 100), B = o("WAWebEventUtils").shouldShowEventAsPassed(E, k), W = x || B, q = D || W, U = A && P, V = c.jsx(r("WDSIconIcCalendarMonth.react"), { xstyle: [
			g.icon,
			q && g.iconDisabled,
			!q && w && g.iconThemed
		] }), H = m(), G = _(null);
		if (L == null) return null;
		function z() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "event_info",
				chat: u,
				msg: v
			} : c.jsx(o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
				chat: u,
				msg: v,
				onEnd: o("WAWebDrawerManager").closeDrawerRight
			}, "event-info-drawer-" + v.id.toString()), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				uim: N
			});
		}
		async function j(e) {
			if (oe) T != null && await o("WAWebJoinEventCallAction").joinEventCall({
				callLink: T,
				chat: u
			});
			else if (P) {
				var t;
				o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebEventsCreateEventModalFlow.react"), {
					preselectedChat: u,
					prefilledData: {
						eventName: L,
						eventDescription: v.eventDescription,
						eventStartTime: o("WAWebEventUtils").eventTimeToUnixTime(E),
						eventEndTime: k != null ? o("WAWebEventUtils").eventTimeToUnixTime(k) : void 0,
						eventLocationName: (t = I == null ? void 0 : I.name) != null ? t : I == null ? void 0 : I.address,
						eventCallType: o("WAWebEventUtils").getEventCallLinkType(T)
					},
					existingEventMsg: v,
					showLocationField: !$
				}));
			} else {
				var n;
				(n = H.current) == null || n.open(e);
			}
		}
		async function K(e) {
			o("WAWebSendEventResponseMsgAction").sendEventResponseMsg(e, v);
		}
		var Q = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingVer2, g.fullWidth],
			children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
				text: O,
				textLimit: o("WAWebMsgGetters").getInitialPageSize(v),
				children: function(t) {
					var e = t.textLimit;
					return c.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: O,
						dirMismatch: o("WAWebFrontendMsgGetters").getRtl(v) !== r("WAWebL10N").isRTL(),
						direction: "auto",
						selectable: !0,
						textLimit: e,
						xstyle: [o("WDSFontTokenStyles").WDSFontTokenStyles.Body1Emphasized, g.flex]
					});
				}
			})
		}), X = o("WAWebFormatEventDateString").getEventDateStringFor(E, k), Y = E != null ? c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
				g.eventDetailText,
				f.marginBlock1
			],
			children: s._(
				/*BTDS*/
				"",
				[s._param("Event-starttime-string", X)]
			)
		}) : null, J, Z = (a = I == null ? void 0 : I.name) != null ? a : I == null ? void 0 : I.address;
		Z != null && (J = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
				g.eventDetailText,
				g.fullWidth,
				f.marginBlock1
			],
			children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: Z,
				direction: "auto",
				selectable: !0,
				xstyle: [g.fullWidth, g.flex]
			})
		}));
		var ee, te = h(T);
		te != null && (ee = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
				g.eventDetailText,
				f.marginBlock1
			],
			children: te
		}));
		var ne = F.find(function(e) {
			return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
		}), re = !x && ($ || (ne == null ? void 0 : ne.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING && o("WAWebEventUtils").eventIsJoinable(E)), oe = T != null && re && o("WAWebVoipGatingUtils").isGroupCallingEnabled(), ae = o("WAWebEventUtils").shouldDisableInteractionForEvent({
			isSentByMe: P,
			isEventCanceled: x,
			eventInvalidated: D,
			isEventPassed: B,
			showJoinCall: oe
		}), ie = F.filter(function(e) {
			return e.eventResponse === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING;
		}), le = null;
		if (ie.length > 0) {
			var se = ie.sort(function(e, t) {
				return t.senderTimestampMs - e.senderTimestampMs;
			}).map(function(e) {
				return e.sender;
			}).slice(0, 3), ue = P ? g.facepileBorderOutgoing : g.facepileBorderIncoming;
			le = c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: [
					o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
					g.eventDetailText,
					g.fullWidth,
					f.marginBlock1
				],
				children: [c.jsx(r("WAWebFacePile.react"), {
					keyName: v.id.toString(),
					idsOrUrls: se,
					borderColor: ue,
					faceSize: 18
				}), c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStart4), { children: s._(
					/*BTDS*/
					"",
					[s._param("number-of-participants-going", ie.length, [0, ie.length])]
				) }))]
			});
		}
		var ce = y({
			eventResponse: (i = ne == null ? void 0 : ne.eventResponse) != null ? i : o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN,
			isSentByMe: P,
			showJoinCall: oe,
			isEventCanceled: x
		}), de = c.jsxs("span", {
			className: "x3nfvp2 x6s0dn4",
			children: [ce, c.jsx(r("WDSIconIcExpandMore.react"), {
				height: 18,
				displayInline: !0
			})]
		}), me = S ? c.jsx("div", {
			className: "xahult9",
			children: S
		}) : null;
		return c.jsxs(r("WAWebMessageTextBubble.react"), {
			testid: "event-creation-msg",
			msg: v,
			displayType: b,
			displayAuthor: d,
			hideMeta: !0,
			useFixedWidth: !o("WAWebDisplayType").isWideDisplay(b),
			ariaLabel: C(v, F),
			children: [
				me,
				c.jsxs(r("WAWebUnstyledButton.react"), {
					onClick: z,
					xstyle: g.unstyledButton,
					children: [c.jsxs(r("WAWebMessageDeeperContainer.react"), {
						xstyle: [
							g.deepContainer,
							o("WDSPaddings.stylex").wdsPaddings.padding8,
							o("WDSPaddings.stylex").wdsPaddings.paddingBottom12
						],
						outgoingMsg: P,
						children: [c.jsx(o("WAWebFlex.react").FlexColumn, {
							xstyle: [
								g.iconContainer,
								U && g.iconContainerVibrantOutgoing,
								!U && w && g.iconContainerThemed
							],
							shrink: 0,
							align: "center",
							justify: "center",
							padding: 2,
							children: V
						}), c.jsxs(o("WAWebFlex.react").FlexColumn, {
							xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingStart8, g.fullWidth],
							padding: 2,
							children: [
								Q,
								Y,
								J,
								ee,
								le,
								c.jsx("div", {
									className: "x10l6tqk x9q68il xy1j3rs",
									children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: v })
								})
							]
						})]
					}), D && c.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: [
							g.invalidEventWarning,
							P ? g.invalidEventWarningBorderSender : g.invalidEventWarningBorderReceiver,
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
					currentResponse: ne == null ? void 0 : ne.eventResponse,
					onClick: K,
					controlPopupRef: H,
					triggerRef: G
				}),
				c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
					ref: G,
					theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme.EVENT_CREATION,
					items: [{
						label: oe || P || x ? ce : de,
						title: ce,
						onClick: function(t) {
							j(t);
						},
						disabled: !oe && ae,
						testid: "event-rsvp-respond"
					}]
				})
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.getEventCallString = h, l.getEventRespondButtonText = y, l.Event = b;
}), 226);
