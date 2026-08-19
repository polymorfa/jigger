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
	"asyncToGeneratorRuntime",
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
		var a, i, l, d, p, v, S = t.chat, R = t.msg, L = t.onBack, E = t.onEnd, k = t.onParticipantClick, I = t.ref, T = o("useWAWebMsgValues").useMsgValues(R.id, [
			(v = o("WAWebMsgGetters")).getEventName,
			v.getEventDescription,
			v.getEventStartTime,
			v.getEventEndTime,
			v.getEventLocation,
			v.getEventInvalidated,
			v.getEventJoinLink,
			v.getIsSentByMe,
			v.getIsEventCanceled,
			v.getEventIsScheduledCall
		]), D = T[0], x = T[1], $ = T[2], P = T[3], N = T[4], M = T[5], w = T[6], A = T[7], F = T[8], O = T[9], B = o("useWAWebEventResponses").useEventResponses(R), W = h(!1), q = W[0], U = W[1], V = h(!1), H = V[0], G = V[1], z = h(!1), j = z[0], K = z[1], Q = h(!1), X = Q[0], Y = Q[1], J = h(void 0), Z = J[0], ee = J[1], te = h(!!S.msgs.get(R.id)), ne = te[0], re = te[1];
		o("useWAWebListener").useListener(S.msgs, "change:msgs", function() {
			var e = S.msgs.get(R.id);
			e && re(!0);
		}), o("useWAWebListener").useListener(S.msgs, "remove_msgs", function(e) {
			e.some(function(e) {
				return e == null ? void 0 : e.id.equals(R.id);
			}) === !0 && E();
		}), f(function() {
			o("WAWebMsgInfoCollection").MsgInfoCollection.find(R.id).then(function(e) {
				ee(e);
			});
		}, []);
		var oe = Z == null ? void 0 : Z.delivery.toArray().concat(Z == null ? void 0 : Z.read.toArray()), ae = B.find(function(e) {
			return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
		}), ie = g(null), le = _(), se = o("WAWebEventUtils").shouldDisableInteractionForEvent({
			isSentByMe: A,
			isEventCanceled: F,
			eventInvalidated: M,
			isEventPassed: o("WAWebEventUtils").shouldShowEventAsPassed($, P),
			showJoinCall: !1
		}), ue = w != null && !F && ((ae == null ? void 0 : ae.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING || (ae == null ? void 0 : ae.eventResponse) === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE) && o("WAWebEventUtils").eventIsJoinable($) && o("WAWebVoipGatingUtils").isGroupCallingEnabled(), ce = r("useWAWebCallLinkWaitingRoomState")(A ? w : null);
		function de(e) {
			if (A) {
				var t, n;
				o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebEventsCreateEventModalFlow.react"), {
					preselectedChat: S,
					prefilledData: {
						eventName: D,
						eventDescription: x != null ? x : void 0,
						eventStartTime: o("WAWebEventUtils").eventTimeToUnixTime($),
						eventEndTime: P != null ? o("WAWebEventUtils").eventTimeToUnixTime(P) : void 0,
						eventLocationName: (t = N == null ? void 0 : N.name) != null ? t : N == null ? void 0 : N.address,
						eventCallType: o("WAWebEventUtils").getEventCallLinkType(w),
						requireApproval: (n = ce.isWaitingRoomEnabled) != null ? n : void 0
					},
					existingEventMsg: R,
					onWaitingRoomToggled: ce.refetch,
					showLocationField: !O
				}));
			} else {
				var a;
				(a = le.current) == null || a.open(e);
			}
		}
		function me(e) {
			return pe.apply(this, arguments);
		}
		function pe() {
			return pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				o("WAWebSendEventResponseMsgAction").sendEventResponseMsg(e, R);
			}), pe.apply(this, arguments);
		}
		function _e() {
			w != null ? (o("WAWebCopyToClipboard").copyTextToClipboard(w), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
				msg: s._(
					/*BTDS*/
					""
				),
				id: o("WAWebToast.react").genId()
			}))) : o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[INTERN] Event has no join link but copy link was clicked"])));
		}
		function fe() {
			return ge.apply(this, arguments);
		}
		function ge() {
			return ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (ue) {
					if (w != null) {
						var e = o("WAWebApiParse").parseCallLink(w);
						if (e != null) {
							var t = e.data, n = t.callType, r = t.token, a = n === "video", i = o("WAWebChatGetters").getIsGroup(S), l = i ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.EVENT_GROUP_CHAT : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.EVENT_INDIVIDUAL_CHAT, s = o("WAWebFrontendContactGetters").getMyUsername(), c = yield o("WAWebVoipStackInterface").getVoipStackInterface();
							yield c == null ? void 0 : c.previewCallLink(r, a, l, s);
						}
					}
				} else o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[INTERN] Event has no join link but join button was clicked"])));
			}), ge.apply(this, arguments);
		}
		function he() {
			o("WAWebColumnChangeDispatch").Column.column === 2 && o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebCmd").Cmd.openChatAt({
				chat: S,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.EventInfo,
				msgContext: {
					collection: S.msgs,
					msg: S.msgs.assertGet(R.id),
					key: R.id,
					enableAnimation: !0,
					highlightMsg: !0
				}
			});
		}
		var ye = o("useWAWebModelValues").useOptionalModelValues(S == null ? void 0 : S.groupMetadata, [
			"participants",
			"size",
			"id",
			"parentGroup"
		]), Ce = ye != null && ye.parentGroup ? r("WAWebGroupMetadataCollection").get(ye.parentGroup.toString()) : null, be = r("useWAWebIAmCommunityAdmin")(Ce);
		function ve(e) {
			var t, n = (t = o("WAWebLidMigrationUtils").toPn(e)) != null ? t : e;
			return !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(S) || !!(be || n.isUser() && Ce != null && Ce.participants.userIsAdmin(n));
		}
		var Se = function(t, n) {
			var e = o("WAWebMsgGetters").getSender(R);
			return e != null && e.equals(n.sender) ? 1 : e != null && e.equals(t.sender) ? -1 : n.senderTimestampMs - t.senderTimestampMs;
		}, Re = B.reduce(function(e, t) {
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
		]), Le = Re[0], Ee = Re[1], ke = Re[2], Ie = (a = (i = N == null ? void 0 : N.address) != null ? i : N == null ? void 0 : N.name) != null ? a : "", Te = (l = N == null ? void 0 : N.name) != null ? l : N == null ? void 0 : N.address, De = "https://www.google.com/maps/search/?api=1&query=" + Ie, xe = r("WAWebGoogleCalendarLink")({
			title: D,
			description: x,
			location: Ie,
			startTimeUnixSeconds: $,
			endTimeUnixSeconds: P
		}), $e = Le.slice(0, q ? Le.length : C).sort(Se).map(function(e) {
			return m.jsx(r("WAWebEventParticipantCell.react"), {
				chat: S,
				sender: o("WAWebEventResponseGetters").getSender(e),
				senderTimestampMs: o("WAWebEventResponseGetters").getSenderTimestampMs(e),
				eventCreator: r("nullthrows")(o("WAWebMsgGetters").getSender(R)).equals(e.sender),
				onParticipantClick: k,
				isInteractive: ve(o("WAWebEventResponseGetters").getSender(e))
			}, e.id.toString());
		}), Pe = Ee.slice(0, j ? Ee.length : C).sort(Se).map(function(e) {
			return m.jsx(r("WAWebEventParticipantCell.react"), {
				chat: S,
				sender: o("WAWebEventResponseGetters").getSender(e),
				senderTimestampMs: o("WAWebEventResponseGetters").getSenderTimestampMs(e),
				eventCreator: !1,
				onParticipantClick: k,
				isInteractive: ve(o("WAWebEventResponseGetters").getSender(e))
			}, e.id.toString());
		}), Ne = ke.slice(0, H ? ke.length : C).sort(Se).map(function(e) {
			return m.jsx(r("WAWebEventParticipantCell.react"), {
				chat: S,
				sender: o("WAWebEventResponseGetters").getSender(e),
				senderTimestampMs: o("WAWebEventResponseGetters").getSenderTimestampMs(e),
				eventCreator: !1,
				onParticipantClick: k,
				isInteractive: ve(o("WAWebEventResponseGetters").getSender(e))
			}, e.id.toString());
		}), Me = (A && oe != null ? (d = oe.filter(function(e) {
			return !B.some(function(t) {
				var n = t.sender;
				return r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(n, e == null ? void 0 : e.id));
			});
		})) != null ? d : [] : []).filter(Boolean), we = Me.slice(0, X ? Me.length : C).map(function(e) {
			return m.jsx(r("WAWebEventParticipantCell.react"), {
				chat: S,
				sender: e.id,
				eventCreator: !1,
				onParticipantClick: k,
				isInteractive: ve(e.id)
			}, e.id.toString());
		}), Ae = Le.length > C && !q ? m.jsx(r("WAWebChatCell.react"), {
			"data-testid": "events-attending-view-all-cell",
			onClick: function() {
				return U(!0);
			},
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			primary: s._(
				/*BTDS*/
				""
			),
			theme: "view-all"
		}) : null, Fe = Ee.length > C && !j ? m.jsx(r("WAWebChatCell.react"), {
			"data-testid": "events-maybe-view-all-cell",
			onClick: function() {
				return K(!0);
			},
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			primary: s._(
				/*BTDS*/
				""
			),
			theme: "view-all"
		}) : null, Oe = ke.length > C && !H ? m.jsx(r("WAWebChatCell.react"), {
			"data-testid": "events-not-attending-view-all-cell",
			onClick: function() {
				return G(!0);
			},
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			primary: s._(
				/*BTDS*/
				""
			),
			theme: "view-all"
		}) : null, Be = Me.length > C && !X ? m.jsx(r("WAWebChatCell.react"), {
			"data-testid": "events-unresponded-view-all-cell",
			onClick: function() {
				return Y(!0);
			},
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			primary: s._(
				/*BTDS*/
				""
			),
			theme: "view-all"
		}) : null, We = function(t) {
			return s._(
				/*BTDS*/
				"",
				[s._plural(t, "number")]
			);
		}, qe = Le.length ? m.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, y.paddingBottom10],
			children: [
				m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(b.participantListHeader, y.paddingBottom15, o("WDSPaddings.stylex").wdsPaddings.paddingHor20), { children: [s._(
					/*BTDS*/
					"",
					[s._plural(Le.length)]
				), m.jsx(o("WAWebText.react").WAWebTextMuted, { children: We(Le.length) })] })),
				$e,
				Ae
			]
		}) : null, Ue = Ee.length ? m.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, y.paddingBottom10],
			children: [
				m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(b.participantListHeader, y.paddingBottom15, o("WDSPaddings.stylex").wdsPaddings.paddingHor20), { children: [s._(
					/*BTDS*/
					"",
					[s._plural(Ee.length)]
				), m.jsx(o("WAWebText.react").WAWebTextMuted, { children: We(Ee.length) })] })),
				Pe,
				Fe
			]
		}) : null, Ve = ke.length ? m.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, y.paddingBottom10],
			children: [
				m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(b.participantListHeader, y.paddingBottom15, o("WDSPaddings.stylex").wdsPaddings.paddingHor20), { children: [s._(
					/*BTDS*/
					"",
					[s._plural(ke.length)]
				), m.jsx(o("WAWebText.react").WAWebTextMuted, { children: We(ke.length) })] })),
				Ne,
				Oe
			]
		}) : null, He = we.length ? m.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, y.paddingBottom10],
			children: [
				m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(b.participantListHeader, y.paddingBottom15, o("WDSPaddings.stylex").wdsPaddings.paddingHor20), { children: [s._(
					/*BTDS*/
					"",
					[s._plural(we.length)]
				), m.jsx(o("WAWebText.react").WAWebTextMuted, { children: We(Me.length) })] })),
				we,
				Be
			]
		}) : null, Ge = o("WAWebEventsMessageComponent.react").getEventRespondButtonText({
			eventResponse: (p = ae == null ? void 0 : ae.eventResponse) != null ? p : o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN,
			isSentByMe: A,
			showJoinCall: !1,
			isEventCanceled: F
		}), ze = m.jsxs("span", {
			className: "x3nfvp2 x6s0dn4",
			children: [Ge, !A && m.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
				height: 18,
				"aria-hidden": !0
			})]
		}), je;
		F ? je = m.jsx(o("WAWebTag.react").Tag, {
			theme: o("WAWebTag.react").TagTheme.Error,
			testid: "event-canceled-label",
			xstyle: [b.inline, y.marginBottom6],
			children: Ge
		}) : M && (je = m.jsx(o("WAWebTag.react").Tag, {
			theme: o("WAWebTag.react").TagTheme.Error,
			xstyle: [b.inline, y.marginBottom6],
			testid: "event-invalidated-label",
			children: s._(
				/*BTDS*/
				""
			)
		}));
		var Ke = S.isTrusted() ? o("WAWebFormatConfiguration").TrustedGroupDesc : o("WAWebFormatConfiguration").UntrustedGroupDesc, Qe = ye != null ? o("WAWebGroupType").groupTypeToWamEnum(o("WAWebGroupType").getGroupTypeFromGroupMetadata(o("WAWebStateUtils").unproxy(ye))) : void 0, Xe = s._(
			/*BTDS*/
			""
		);
		return m.jsxs(r("WAWebDrawer.react"), {
			theme: "striped",
			ref: I,
			tsNavigationData: {
				surface: "event-info",
				extras: { typeOfGroup: Qe }
			},
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: L,
				onCancel: L ? void 0 : E
			}), m.jsxs(r("WAWebDrawerBody.react"), { children: [
				m.jsxs(r("WAWebDrawerSection.react"), {
					xstyle: o("WDSPaddings.stylex").wdsPaddings.padding20,
					children: [
						je,
						m.jsx(o("WAWebEmojiText.react").EmojiText, {
							direction: "auto",
							inferLinesDirection: !0,
							xstyle: [
								b.eventName,
								F && b.striked,
								y.marginBottom6
							],
							text: D,
							selectable: !0
						}),
						x != null ? m.jsx(o("WAWebExpandableText.react").ExpandableText, {
							text: x,
							textLimit: 100,
							children: function(t) {
								var e = t.textLimit;
								return m.jsx(o("WAWebEmojiText.react").EmojiText, {
									xstyle: [b.eventDescription, o("WDSMargins.stylex").wdsMargins.marginBottom8],
									text: x,
									textLimit: e,
									formatters: Ke({
										links: o("WAWebLinkify").findLinks(x),
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
						ye != null ? m.jsxs(o("WAWebText.react").WAWebTextMuted, {
							xstyle: b.nameTextContainer,
							children: [
								s._(
									/*BTDS*/
									""
								),
								m.jsx(o("WAWebDetailImage.react").DetailImage, {
									size: 18,
									id: S.id
								}),
								m.jsxs(r("WAWebUnstyledButton.react"), {
									onClick: he,
									disabled: !ne,
									"aria-label": s._(
										/*BTDS*/
										"",
										[s._param("groupName", S.formattedTitle)]
									),
									xstyle: b.nameButton,
									children: [m.jsx(o("WAWebName.react").GroupName, {
										chat: S,
										groupMetadata: ye,
										ellipsify: !0,
										xstyle: b.nameText
									}), ne ? m.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
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
									children: o("WAWebFormatEventDateString").getEventDateStringFor($, P)
								}), F ? m.jsx(o("WAWebText.react").WAWebTextMuted, { children: Xe }) : m.jsx(r("WDSTextualLink.react"), {
									href: xe,
									children: Xe
								})]
							})]
						}),
						Te != null ? m.jsxs(r("WAWebBox.react"), {
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
										text: Te,
										textLimit: 65,
										children: function(t) {
											var e = t.textLimit;
											return m.jsx(o("WAWebEmojiText.react").EmojiText, {
												xstyle: b.eventDescription,
												text: Te,
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
									href: De,
									children: s._(
										/*BTDS*/
										""
									)
								})]
							})]
						}) : null,
						w != null ? m.jsxs(r("WAWebBox.react"), {
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
									children: o("WAWebEventUtils").isEventVideoCallLink(w) ? m.jsx(r("WDSIconIcVideocam.react"), {}) : m.jsx(r("WDSIconIcCall.react"), {})
								}),
								m.jsxs("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(b.eventDetails, o("WDSMargins.stylex").wdsMargins.marginEndAuto), { children: [m.jsx(o("WAWebText.react").WAWebTextTitle, {
									marginBottom: 2,
									children: o("WAWebEventsMessageComponent.react").getEventCallString(w)
								}), m.jsx(r("WDSTextualLink.react"), {
									onClick: _e,
									"aria-label": s._(
										/*BTDS*/
										""
									),
									children: s._(
										/*BTDS*/
										""
									)
								})] })),
								ue ? m.jsx(r("WDSButton.react"), {
									label: s._(
										/*BTDS*/
										""
									),
									Icon: o("WAWebEventUtils").isEventVideoCallLink(w) ? r("WDSIconIcVideocamFilled.react") : r("WDSIconIcCallFilled.react"),
									variant: "filled",
									onPress: function() {
										fe();
									}
								}) : null
							]
						}) : null,
						m.jsx(o("WAWebText.react").WAWebTextMuted, {
							xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
							children: s._(
								/*BTDS*/
								"",
								[s._plural(Le.length + ke.length, "number")]
							)
						})
					]
				}),
				m.jsx(r("WAWebDrawerSection.react"), { children: F ? null : m.jsxs(r("WAWebUnstyledButton.react"), {
					ref: ie,
					disabled: se,
					xstyle: [b.rsvpButton].concat(se ? [b.rsvpButtonDisabled] : []),
					testid: "event-info-drawer-rsvp-button",
					onClick: de,
					children: [ze, m.jsx(r("WAWebEventsRSVPPopup.react"), {
						currentResponse: ae == null ? void 0 : ae.eventResponse,
						onClick: me,
						controlPopupRef: le,
						triggerRef: ie,
						onClose: function() {
							var e;
							(e = ie.current) == null || e.focus();
						}
					})]
				}) }),
				qe,
				Ue,
				Ve,
				He
			] })]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
