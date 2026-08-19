__d("WAWebEventInfoDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebApiParse",
	"WAWebBoolFunc",
	"WAWebBox.react",
	"WAWebChatCell.react",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChevronCustomIcons",
	"WAWebChevronIcon.react",
	"WAWebCmd",
	"WAWebColumnChangeDispatch",
	"WAWebCopyToClipboard",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebEventParticipantCell.react",
	"WAWebEventResponseGetters",
	"WAWebEventUtils",
	"WAWebEventsCreateEventModalFlow.react",
	"WAWebEventsMessageComponent.react",
	"WAWebEventsRSVPPopup.react",
	"WAWebExpandableText.react",
	"WAWebFormatConfiguration",
	"WAWebFormatEventDateString",
	"WAWebFrontendContactGetters",
	"WAWebGoogleCalendarLink",
	"WAWebGroupMetadataCollection",
	"WAWebGroupType",
	"WAWebLidMigrationUtils",
	"WAWebLinkify",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMsgInfoCollection",
	"WAWebName.react",
	"WAWebProtobufsE2E.pb",
	"WAWebSendEventResponseMsgAction",
	"WAWebStateUtils",
	"WAWebTag.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnstyledButton.react",
	"WAWebUserPrefsMeUser",
	"WAWebVoipGatingUtils",
	"WAWebVoipStackInterface",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWid",
	"WDSButton.react",
	"WDSIconIcCalendarMonth.react",
	"WDSIconIcCall.react",
	"WDSIconIcCallFilled.react",
	"WDSIconIcLocationOn.react",
	"WDSIconIcVideocam.react",
	"WDSIconIcVideocamFilled.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSTextualLink.react",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebCallLinkWaitingRoomState",
	"useWAWebEventResponses",
	"useWAWebIAmCommunityAdmin",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.createRef, f = p.useEffect, g = p.useRef, h = p.useState, y = {
		paddingBottom10: {
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		paddingBottom15: {
			paddingBottom: "xr1496l",
			$$css: !0
		},
		marginBottom6: {
			marginBottom: "xzueoph",
			$$css: !0
		},
		paddingBlock14: {
			paddingTop: "xyinxu5",
			paddingBottom: "x1g2khh7",
			$$css: !0
		}
	}, C = 9, b = {
		eventName: {
			fontSize: "x1c3i2sq",
			display: "x1lliihq",
			color: "x14ug900",
			$$css: !0
		},
		striked: {
			textDecoration: "xmqliwb",
			$$css: !0
		},
		eventDescription: {
			fontSize: "x1jchvi3",
			display: "x1lliihq",
			wordWrap: "x1vvkbs",
			$$css: !0
		},
		iconxstyle: {
			color: "xhslqc4",
			$$css: !0
		},
		iconContainer: {
			display: "x78zum5",
			width: "xgd8bvy",
			alignItems: "x7a106z",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		eventDetailsContainer: {
			rowGap: "x1rpttp",
			columnGap: "x9bxmr9",
			$$css: !0
		},
		eventDetails: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		participantListHeader: {
			display: "x78zum5",
			justifyContent: "x1qughib",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		rsvpButton: {
			width: "xh8yej3",
			height: "xng8ra",
			color: "x1ph7ams",
			$$css: !0
		},
		rsvpButtonDisabled: {
			color: "xhslqc4",
			$$css: !0
		},
		maybeOverflow: {
			flexWrap: "x1a02dak",
			$$css: !0
		},
		inline: {
			display: "x1rg5ohu",
			lineHeight: "x1hkbg2g",
			$$css: !0
		},
		nameTextContainer: {
			display: "x78zum5",
			columnGap: "x1ihrfj4",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		nameText: {
			maxWidth: "x1ikd3h5",
			$$css: !0
		},
		nameButton: {
			display: "x78zum5",
			$$css: !0
		},
		groupNameChevronIcon: {
			fill: "xvt3oi1",
			$$css: !0
		}
	};
	function v(t) {
		var n, a, i, l, d, p, v = t.chat, S = t.msg, R = t.onBack, L = t.onEnd, E = t.onParticipantClick, k = t.ref, I = o("useWAWebMsgValues").useMsgValues(S.id, [
			(p = o("WAWebMsgGetters")).getEventName,
			p.getEventDescription,
			p.getEventStartTime,
			p.getEventEndTime,
			p.getEventLocation,
			p.getEventInvalidated,
			p.getEventJoinLink,
			p.getIsSentByMe,
			p.getIsEventCanceled,
			p.getEventIsScheduledCall
		]), T = I[0], D = I[1], x = I[2], $ = I[3], P = I[4], N = I[5], M = I[6], w = I[7], A = I[8], F = I[9], O = o("useWAWebEventResponses").useEventResponses(S), B = h(!1), W = B[0], q = B[1], U = h(!1), V = U[0], H = U[1], G = h(!1), z = G[0], j = G[1], K = h(!1), Q = K[0], X = K[1], Y = h(void 0), J = Y[0], Z = Y[1], ee = h(!!v.msgs.get(S.id)), te = ee[0], ne = ee[1];
		o("useWAWebListener").useListener(v.msgs, "change:msgs", function() {
			var e = v.msgs.get(S.id);
			e && ne(!0);
		}), o("useWAWebListener").useListener(v.msgs, "remove_msgs", function(e) {
			e.some(function(e) {
				return e == null ? void 0 : e.id.equals(S.id);
			}) === !0 && L();
		}), f(function() {
			o("WAWebMsgInfoCollection").MsgInfoCollection.find(S.id).then(function(e) {
				Z(e);
			});
		}, []);
		var re = J == null ? void 0 : J.delivery.toArray().concat(J == null ? void 0 : J.read.toArray()), oe = O.find(function(e) {
			return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
		}), ae = g(null), ie = _(), le = o("WAWebEventUtils").shouldDisableInteractionForEvent({
			isSentByMe: w,
			isEventCanceled: A,
			eventInvalidated: N,
			isEventPassed: o("WAWebEventUtils").shouldShowEventAsPassed(x, $),
			showJoinCall: !1
		}), se = M != null && !A && ((oe == null ? void 0 : oe.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING || (oe == null ? void 0 : oe.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE) && o("WAWebEventUtils").eventIsJoinable(x) && o("WAWebVoipGatingUtils").isGroupCallingEnabled(), ue = r("useWAWebCallLinkWaitingRoomState")(w ? M : null);
		function ce(e) {
			if (w) {
				var t, n;
				o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebEventsCreateEventModalFlow.react"), {
					preselectedChat: v,
					prefilledData: {
						eventName: T,
						eventDescription: D != null ? D : void 0,
						eventStartTime: o("WAWebEventUtils").eventTimeToUnixTime(x),
						eventEndTime: $ != null ? o("WAWebEventUtils").eventTimeToUnixTime($) : void 0,
						eventLocationName: (t = P == null ? void 0 : P.name) != null ? t : P == null ? void 0 : P.address,
						eventCallType: o("WAWebEventUtils").getEventCallLinkType(M),
						requireApproval: (n = ue.isWaitingRoomEnabled) != null ? n : void 0
					},
					existingEventMsg: S,
					onWaitingRoomToggled: ue.refetch,
					showLocationField: !F
				}));
			} else {
				var a;
				(a = ie.current) == null || a.open(e);
			}
		}
		async function de(e) {
			o("WAWebSendEventResponseMsgAction").sendEventResponseMsg(e, S);
		}
		function me() {
			M != null ? (o("WAWebCopyToClipboard").copyTextToClipboard(M), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
				msg: s._(
					/*BTDS*/
					""
				),
				id: o("WAWebToast.react").genId()
			}))) : o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[INTERN] Event has no join link but copy link was clicked"])));
		}
		async function pe() {
			if (se) {
				if (M != null) {
					var e = o("WAWebApiParse").parseCallLink(M);
					if (e != null) {
						var t = e.data, n = t.callType, r = t.token, a = n === "video", i = o("WAWebChatGetters").getIsGroup(v), l = i ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.EVENT_GROUP_CHAT : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.EVENT_INDIVIDUAL_CHAT, s = o("WAWebFrontendContactGetters").getMyUsername(), c = await o("WAWebVoipStackInterface").getVoipStackInterface();
						await (c == null ? void 0 : c.previewCallLink(r, a, l, s));
					}
				}
			} else o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[INTERN] Event has no join link but join button was clicked"])));
		}
		function _e() {
			o("WAWebColumnChangeDispatch").Column.column === 2 && o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebCmd").Cmd.openChatAt({
				chat: v,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.EventInfo,
				msgContext: {
					collection: v.msgs,
					msg: v.msgs.assertGet(S.id),
					key: S.id,
					enableAnimation: !0,
					highlightMsg: !0
				}
			});
		}
		var fe = o("useWAWebModelValues").useOptionalModelValues(v == null ? void 0 : v.groupMetadata, [
			"participants",
			"size",
			"id",
			"parentGroup"
		]), ge = fe != null && fe.parentGroup ? r("WAWebGroupMetadataCollection").get(fe.parentGroup.toString()) : null, he = r("useWAWebIAmCommunityAdmin")(ge);
		function ye(e) {
			var t, n = (t = o("WAWebLidMigrationUtils").toPn(e)) != null ? t : e;
			return !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(v) || !!(he || n.isUser() && ge != null && ge.participants.userIsAdmin(n));
		}
		var Ce = function(t, n) {
			var e = o("WAWebMsgGetters").getSender(S);
			return e != null && e.equals(n.sender) ? 1 : e != null && e.equals(t.sender) ? -1 : n.senderTimestampMs - t.senderTimestampMs;
		}, be = O.reduce(function(e, t) {
			var n = e[0], r = e[1], a = e[2];
			return t.eventResponse === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING ? n.push(t) : t.eventResponse === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE ? r.push(t) : t.eventResponse === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING && a.push(t), [
				n,
				r,
				a
			];
		}, [
			[],
			[],
			[]
		]), ve = be[0], Se = be[1], Re = be[2], Le = (n = (a = P == null ? void 0 : P.address) != null ? a : P == null ? void 0 : P.name) != null ? n : "", Ee = (i = P == null ? void 0 : P.name) != null ? i : P == null ? void 0 : P.address, ke = "https://www.google.com/maps/search/?api=1&query=" + Le, Ie = r("WAWebGoogleCalendarLink")({
			title: T,
			description: D,
			location: Le,
			startTimeUnixSeconds: x,
			endTimeUnixSeconds: $
		}), Te = ve.slice(0, W ? ve.length : C).sort(Ce).map(function(e) {
			return m.jsx(r("WAWebEventParticipantCell.react"), {
				chat: v,
				sender: o("WAWebEventResponseGetters").getSender(e),
				senderTimestampMs: o("WAWebEventResponseGetters").getSenderTimestampMs(e),
				eventCreator: r("nullthrows")(o("WAWebMsgGetters").getSender(S)).equals(e.sender),
				onParticipantClick: E,
				isInteractive: ye(o("WAWebEventResponseGetters").getSender(e))
			}, e.id.toString());
		}), De = Se.slice(0, z ? Se.length : C).sort(Ce).map(function(e) {
			return m.jsx(r("WAWebEventParticipantCell.react"), {
				chat: v,
				sender: o("WAWebEventResponseGetters").getSender(e),
				senderTimestampMs: o("WAWebEventResponseGetters").getSenderTimestampMs(e),
				eventCreator: !1,
				onParticipantClick: E,
				isInteractive: ye(o("WAWebEventResponseGetters").getSender(e))
			}, e.id.toString());
		}), xe = Re.slice(0, V ? Re.length : C).sort(Ce).map(function(e) {
			return m.jsx(r("WAWebEventParticipantCell.react"), {
				chat: v,
				sender: o("WAWebEventResponseGetters").getSender(e),
				senderTimestampMs: o("WAWebEventResponseGetters").getSenderTimestampMs(e),
				eventCreator: !1,
				onParticipantClick: E,
				isInteractive: ye(o("WAWebEventResponseGetters").getSender(e))
			}, e.id.toString());
		}), $e = (w && re != null ? (l = re.filter(function(e) {
			return !O.some(function(t) {
				var n = t.sender;
				return r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(n, e == null ? void 0 : e.id));
			});
		})) != null ? l : [] : []).filter(Boolean), Pe = $e.slice(0, Q ? $e.length : C).map(function(e) {
			return m.jsx(r("WAWebEventParticipantCell.react"), {
				chat: v,
				sender: e.id,
				eventCreator: !1,
				onParticipantClick: E,
				isInteractive: ye(e.id)
			}, e.id.toString());
		}), Ne = ve.length > C && !W ? m.jsx(r("WAWebChatCell.react"), {
			"data-testid": "events-attending-view-all-cell",
			onClick: function() {
				return q(!0);
			},
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			primary: s._(
				/*BTDS*/
				""
			),
			theme: "view-all"
		}) : null, Me = Se.length > C && !z ? m.jsx(r("WAWebChatCell.react"), {
			"data-testid": "events-maybe-view-all-cell",
			onClick: function() {
				return j(!0);
			},
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			primary: s._(
				/*BTDS*/
				""
			),
			theme: "view-all"
		}) : null, we = Re.length > C && !V ? m.jsx(r("WAWebChatCell.react"), {
			"data-testid": "events-not-attending-view-all-cell",
			onClick: function() {
				return H(!0);
			},
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			primary: s._(
				/*BTDS*/
				""
			),
			theme: "view-all"
		}) : null, Ae = $e.length > C && !Q ? m.jsx(r("WAWebChatCell.react"), {
			"data-testid": "events-unresponded-view-all-cell",
			onClick: function() {
				return X(!0);
			},
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			primary: s._(
				/*BTDS*/
				""
			),
			theme: "view-all"
		}) : null, Fe = function(t) {
			return s._(
				/*BTDS*/
				"",
				[s._plural(t, "number")]
			);
		}, Oe = ve.length ? m.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, y.paddingBottom10],
			children: [
				m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(b.participantListHeader, y.paddingBottom15, o("WDSPaddings.stylex").wdsPaddings.paddingHor20), { children: [s._(
					/*BTDS*/
					"",
					[s._plural(ve.length)]
				), m.jsx(o("WAWebText.react").WAWebTextMuted, { children: Fe(ve.length) })] })),
				Te,
				Ne
			]
		}) : null, Be = Se.length ? m.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, y.paddingBottom10],
			children: [
				m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(b.participantListHeader, y.paddingBottom15, o("WDSPaddings.stylex").wdsPaddings.paddingHor20), { children: [s._(
					/*BTDS*/
					"",
					[s._plural(Se.length)]
				), m.jsx(o("WAWebText.react").WAWebTextMuted, { children: Fe(Se.length) })] })),
				De,
				Me
			]
		}) : null, We = Re.length ? m.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, y.paddingBottom10],
			children: [
				m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(b.participantListHeader, y.paddingBottom15, o("WDSPaddings.stylex").wdsPaddings.paddingHor20), { children: [s._(
					/*BTDS*/
					"",
					[s._plural(Re.length)]
				), m.jsx(o("WAWebText.react").WAWebTextMuted, { children: Fe(Re.length) })] })),
				xe,
				we
			]
		}) : null, qe = Pe.length ? m.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, y.paddingBottom10],
			children: [
				m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(b.participantListHeader, y.paddingBottom15, o("WDSPaddings.stylex").wdsPaddings.paddingHor20), { children: [s._(
					/*BTDS*/
					"",
					[s._plural(Pe.length)]
				), m.jsx(o("WAWebText.react").WAWebTextMuted, { children: Fe($e.length) })] })),
				Pe,
				Ae
			]
		}) : null, Ue = o("WAWebEventsMessageComponent.react").getEventRespondButtonText({
			eventResponse: (d = oe == null ? void 0 : oe.eventResponse) != null ? d : o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN,
			isSentByMe: w,
			showJoinCall: !1,
			isEventCanceled: A
		}), Ve = m.jsxs("span", {
			className: "x3nfvp2 x6s0dn4",
			children: [Ue, !w && m.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
				height: 18,
				"aria-hidden": !0
			})]
		}), He;
		A ? He = m.jsx(o("WAWebTag.react").Tag, {
			theme: o("WAWebTag.react").TagTheme.Error,
			testid: "event-canceled-label",
			xstyle: [b.inline, y.marginBottom6],
			children: Ue
		}) : N && (He = m.jsx(o("WAWebTag.react").Tag, {
			theme: o("WAWebTag.react").TagTheme.Error,
			xstyle: [b.inline, y.marginBottom6],
			testid: "event-invalidated-label",
			children: s._(
				/*BTDS*/
				""
			)
		}));
		var Ge = v.isTrusted() ? o("WAWebFormatConfiguration").TrustedGroupDesc : o("WAWebFormatConfiguration").UntrustedGroupDesc, ze = fe != null ? o("WAWebGroupType").groupTypeToWamEnum(o("WAWebGroupType").getGroupTypeFromGroupMetadata(o("WAWebStateUtils").unproxy(fe))) : void 0, je = s._(
			/*BTDS*/
			""
		);
		return m.jsxs(r("WAWebDrawer.react"), {
			theme: "striped",
			ref: k,
			tsNavigationData: {
				surface: "event-info",
				extras: { typeOfGroup: ze }
			},
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: R,
				onCancel: R ? void 0 : L
			}), m.jsxs(r("WAWebDrawerBody.react"), { children: [
				m.jsxs(r("WAWebDrawerSection.react"), {
					xstyle: o("WDSPaddings.stylex").wdsPaddings.padding20,
					children: [
						He,
						m.jsx(o("WAWebEmojiText.react").EmojiText, {
							direction: "auto",
							inferLinesDirection: !0,
							xstyle: [
								b.eventName,
								A && b.striked,
								y.marginBottom6
							],
							text: T,
							selectable: !0
						}),
						D != null ? m.jsx(o("WAWebExpandableText.react").ExpandableText, {
							text: D,
							textLimit: 100,
							children: function(t) {
								var e = t.textLimit;
								return m.jsx(o("WAWebEmojiText.react").EmojiText, {
									xstyle: [b.eventDescription, o("WDSMargins.stylex").wdsMargins.marginBottom8],
									text: D,
									textLimit: e,
									formatters: Ge({
										links: o("WAWebLinkify").findLinks(D),
										bulletPointsEnabled: !0,
										expandedFormattingEnabled: !1
									}),
									direction: "auto",
									inferLinesDirection: !0,
									multiline: !0,
									selectable: !0,
									ellipsify: !0
								});
							}
						}) : null,
						fe != null ? m.jsxs(o("WAWebText.react").WAWebTextMuted, {
							xstyle: b.nameTextContainer,
							children: [
								s._(
									/*BTDS*/
									""
								),
								m.jsx(o("WAWebDetailImage.react").DetailImage, {
									size: 18,
									id: v.id
								}),
								m.jsxs(r("WAWebUnstyledButton.react"), {
									onClick: _e,
									disabled: !te,
									"aria-label": s._(
										/*BTDS*/
										"",
										[s._param("groupName", v.formattedTitle)]
									),
									xstyle: b.nameButton,
									children: [m.jsx(o("WAWebName.react").GroupName, {
										chat: v,
										groupMetadata: fe,
										ellipsify: !0,
										xstyle: b.nameText
									}), te ? m.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
										height: 18,
										xstyle: b.groupNameChevronIcon,
										"aria-hidden": !0,
										directional: !0
									}) : null]
								})
							]
						}) : null,
						m.jsxs(r("WAWebBox.react"), {
							xstyle: [y.paddingBlock14, b.eventDetailsContainer],
							flex: !0,
							children: [m.jsx(r("WAWebBox.react"), {
								xstyle: [
									b.iconContainer,
									o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
									b.iconxstyle
								],
								children: m.jsx(r("WDSIconIcCalendarMonth.react"), {})
							}), m.jsxs("div", {
								className: "x1iyjqo2",
								children: [m.jsx(o("WAWebText.react").WAWebTextTitle, {
									marginBottom: 2,
									children: o("WAWebFormatEventDateString").getEventDateStringFor(x, $)
								}), A ? m.jsx(o("WAWebText.react").WAWebTextMuted, { children: je }) : m.jsx(r("WDSTextualLink.react"), {
									href: Ie,
									children: je
								})]
							})]
						}),
						Ee != null ? m.jsxs(r("WAWebBox.react"), {
							xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingVer16, b.eventDetailsContainer],
							flex: !0,
							children: [m.jsx(r("WAWebBox.react"), {
								xstyle: [
									b.iconContainer,
									o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
									b.iconxstyle
								],
								children: m.jsx(r("WDSIconIcLocationOn.react"), {})
							}), m.jsxs("div", {
								className: "x1iyjqo2",
								children: [m.jsx(o("WAWebText.react").WAWebTextTitle, {
									marginBottom: 2,
									children: m.jsx(o("WAWebExpandableText.react").ExpandableText, {
										text: Ee,
										textLimit: 65,
										children: function(t) {
											var e = t.textLimit;
											return m.jsx(o("WAWebEmojiText.react").EmojiText, {
												xstyle: b.eventDescription,
												text: Ee,
												textLimit: e,
												direction: "auto",
												inferLinesDirection: !0,
												multiline: !0,
												selectable: !0,
												ellipsify: !0
											});
										}
									})
								}), m.jsx(r("WDSTextualLink.react"), {
									href: ke,
									children: s._(
										/*BTDS*/
										""
									)
								})]
							})]
						}) : null,
						M != null ? m.jsxs(r("WAWebBox.react"), {
							xstyle: [
								o("WDSPaddings.stylex").wdsPaddings.paddingVer16,
								b.eventDetailsContainer,
								b.maybeOverflow
							],
							flex: !0,
							children: [
								m.jsx(r("WAWebBox.react"), {
									xstyle: [
										b.iconContainer,
										o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
										b.iconxstyle
									],
									children: o("WAWebEventUtils").isEventVideoCallLink(M) ? m.jsx(r("WDSIconIcVideocam.react"), {}) : m.jsx(r("WDSIconIcCall.react"), {})
								}),
								m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(b.eventDetails, o("WDSMargins.stylex").wdsMargins.marginEndAuto), { children: [m.jsx(o("WAWebText.react").WAWebTextTitle, {
									marginBottom: 2,
									children: o("WAWebEventsMessageComponent.react").getEventCallString(M)
								}), m.jsx(r("WDSTextualLink.react"), {
									onClick: me,
									"aria-label": s._(
										/*BTDS*/
										""
									),
									children: s._(
										/*BTDS*/
										""
									)
								})] })),
								se ? m.jsx(r("WDSButton.react"), {
									label: s._(
										/*BTDS*/
										""
									),
									Icon: o("WAWebEventUtils").isEventVideoCallLink(M) ? r("WDSIconIcVideocamFilled.react") : r("WDSIconIcCallFilled.react"),
									variant: "filled",
									onPress: function() {
										pe();
									}
								}) : null
							]
						}) : null,
						m.jsx(o("WAWebText.react").WAWebTextMuted, {
							xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
							children: s._(
								/*BTDS*/
								"",
								[s._plural(ve.length + Re.length, "number")]
							)
						})
					]
				}),
				m.jsx(r("WAWebDrawerSection.react"), { children: A ? null : m.jsxs(r("WAWebUnstyledButton.react"), {
					ref: ae,
					disabled: le,
					xstyle: [b.rsvpButton].concat(le ? [b.rsvpButtonDisabled] : []),
					testid: "event-info-drawer-rsvp-button",
					onClick: ce,
					children: [Ve, m.jsx(r("WAWebEventsRSVPPopup.react"), {
						currentResponse: oe == null ? void 0 : oe.eventResponse,
						onClick: de,
						controlPopupRef: ie,
						triggerRef: ae,
						onClose: function() {
							var e;
							(e = ae.current) == null || e.focus();
						}
					})]
				}) }),
				Oe,
				Be,
				We,
				qe
			] })]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
