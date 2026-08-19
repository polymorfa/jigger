__d("WAWebGroupCallParticipantSelector.react", [
	"fbt",
	"CometVirtualization.react",
	"WAWebActionMenuItem.react",
	"WAWebCallDropdownMenuItems.react",
	"WAWebCheckBox.react",
	"WAWebChevronCustomIcons",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebContactImage.react",
	"WAWebDetailImage.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebFlex.react",
	"WAWebFrontendChatGetters",
	"WAWebGroupCallTitleUtils",
	"WAWebGroupChatImage.react",
	"WAWebGroupMetadataCollection",
	"WAWebIcChevronDownMenuIcon.react",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebNoop",
	"WAWebSchedulingCallsNotSupportedModal.react",
	"WAWebSharableEventGatingUtils",
	"WAWebStackedCirclesImage.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebVoipCallsTabScheduleCallModal.react",
	"WAWebVoipCreateCallLinksPopupLoadable.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipStartCall",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWamEnumSubSurface",
	"WDSIconIcCalendarMonthFilled.react",
	"WDSIconIcCallFilled.react",
	"WDSIconIcLink.react",
	"WDSIconIcVideocamFilled.react",
	"WDSTooltip.react",
	"compactMap",
	"cr:23046",
	"fbs",
	"react",
	"useWAWebABPropConfigValue"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useId, p = d.useMemo, _ = d.useState, f = (e = n("cr:23046")) != null ? e : {}, g = f.isWindowsHybridEnabled, h = {
		callButtonMenuItemIcon: {
			color: "x1pse0pq",
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		},
		callButtonMenuItemIconDisabled: {
			color: "xhslqc4",
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		},
		participantRow: {
			flex: "x98rzlu",
			width: "xh8yej3",
			$$css: !0
		},
		dropdownContainer: {
			maxHeight: "x14c67g7",
			minHeight: "xi3av73",
			width: "xj6ak53",
			overflowX: "x6ikm8r",
			$$css: !0
		},
		firstRowContainer: {
			flex: "x98rzlu",
			flexShrink: "x2lah0s",
			width: "xh8yej3",
			$$css: !0
		},
		groupImageContainer: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		groupTextContainer: {
			flex: "x98rzlu",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		participantListHeader: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		participantListHeaderBorder: {
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			marginTop: "x1xmf6yo",
			width: "xh8yej3",
			$$css: !0
		},
		callButtonsRow: {
			rowGap: "x1qvou4u",
			columnGap: "x1s70e7g",
			marginBottom: "xefnzgg",
			marginTop: "x1380le5",
			width: "xh8yej3",
			$$css: !0
		},
		callButtonWrapper: {
			flex: "x1cqoux5",
			maxHeight: "x18wx58x",
			$$css: !0
		},
		actionsContainer: {
			rowGap: "x1qvou4u",
			columnGap: "x1s70e7g",
			width: "xh8yej3",
			$$css: !0
		},
		actionItemIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		contactImageContainer: {
			flexShrink: "x2lah0s",
			marginInlineStart: "x1uvdrpn",
			$$css: !0
		},
		participantNameContainer: {
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		checkboxContainer: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		chevronContainer: {
			flexShrink: "x2lah0s",
			marginInlineStart: "x1uvdrpn",
			$$css: !0
		},
		paddingAll8: {
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		paddingStart12: {
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		}
	};
	function y(e) {
		var t, n = e.chat, a = e.groupImage, i = e.groupTitleOverride, l = e.hideActions, u = e.initialSubtext, d = e.isCallingDisabled, f = e.isVideo, y = e.logger, C = e.onActionTaken, b = e.onCallStart, v = e.participantWids, S = e.useUnifiedUIOverride, R = v != null, L = S != null ? S : o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType({
			isAdHocGroupCall: R,
			isCallLink: !1,
			isGroup: !R
		}), E = o("useWAWebABPropConfigValue").useABPropConfigValue("group_call_max_participants"), k = _(!1), I = k[0], T = k[1], D = _(new Set()), x = D[0], $ = D[1], P = p(function() {
			if (v != null) {
				var e = r("compactMap")(v, function(e) {
					return o("WAWebContactCollection").ContactCollection.get(e);
				});
				return e.filter(function(e) {
					return !o("WAWebContactGetters").getIsMe(e);
				});
			}
			var t = r("WAWebGroupMetadataCollection").get(n.id.toString());
			if (t && t.participants) {
				var a = t.participants.toArray(), i = r("compactMap")(a, function(e) {
					return o("WAWebContactCollection").ContactCollection.get(e.id);
				});
				return i.filter(function(e) {
					return !o("WAWebContactGetters").getIsMe(e);
				});
			}
			return [];
		}, [n.id, v]), N = x.size, M = P.length + 1, w = N === 0 ? I || M > E : N + 1 > E, A = function() {
			return N > 0 ? s._(
				/*BTDS*/
				"",
				[s._param("count", N)]
			) : I && u != null ? u : r("fbs")._(
				/*BTDS*/
				""
			);
		}, F = A(), O = function(t) {
			var e = t.id.toString();
			$(function(t) {
				var n = new Set(t);
				return n.has(e) ? (y.deselectParticipant(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), n.delete(e)) : n.size + 1 < E ? (y.selectParticipant(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), n.add(e)) : o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					"",
					[s._param("max-participants", E, [0, E])]
				) })), n;
			});
		}, B = function() {
			T(!I);
		}, W = N === 0 || N === P.length ? r("fbs")._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("count", N)]
		), q = function(t) {
			t ? y.clickVideoCall(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER) : y.clickAudioCall(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER);
			var e = P.filter(function(e) {
				return x.has(e.id.toString());
			});
			if (e.length + 1 > E) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					"",
					[s._param("max-participants", E, [0, E])]
				) }));
				return;
			}
			var r = P.length;
			if (e.length > 0 && e.length < r) {
				var a = e.map(function(e) {
					return e.id;
				});
				o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(a, t, r > E ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.LARGE_GROUP_CHAT_PICKER : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED);
			} else R && v != null ? o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids([].concat(v), t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_DIRECT, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED) : o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(n, t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED);
			b(t);
		}, U = function(t) {
			var e, a = x.has(t.id.toString()), i = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(n), l = t.id.toString();
			return c.jsx(o("WAWebCallDropdownMenuItems.react").ParticipantMenuItem, {
				optionId: "participant-" + l,
				isSelected: a,
				onSelect: function() {
					return O(t);
				},
				children: c.jsxs((e = o("WAWebFlex.react")).FlexRow, {
					align: "center",
					xstyle: [h.paddingAll8, h.participantRow],
					children: [
						c.jsx(e.FlexItem, {
							xstyle: h.checkboxContainer,
							children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
								checked: a,
								theme: o("WAWebCheckBox.react").CheckboxTheme.OUTLINE,
								onChange: r("WAWebNoop")
							})
						}),
						c.jsx(e.FlexItem, {
							xstyle: h.contactImageContainer,
							children: c.jsx(r("WAWebContactImage.react"), {
								contact: t,
								size: 48,
								loadPicture: !0
							})
						}),
						c.jsx(e.FlexItem, {
							xstyle: [h.paddingStart12, h.participantNameContainer],
							children: c.jsx(o("WAWebText.react").WAWebTextTitle, { children: c.jsx(o("WAWebName.react").Name, {
								contact: t,
								showNotifyName: i,
								elevatedPushNamesEnabled: i,
								titlify: !0,
								ellipsify: !0
							}) })
						})
					]
				})
			}, l);
		}, V = (t = i != null ? i : o("WAWebGroupCallTitleUtils").getUnnamedGroupCallNameOverride(n)) != null ? t : o("WAWebFrontendChatGetters").getFormattedTitle(n), H = m(), G = m(), z = function(t) {
			var e = r(t ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react"), n = d || w, a = t ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), i = c.jsx(o("WAWebCallDropdownMenuItems.react").CallButtonMenuItem, {
				optionId: t ? "video-call" : "voice-call",
				testid: t ? "call-dropdown-video-button" : "call-dropdown-voice-button",
				icon: c.jsx(e, { iconXstyle: n ? h.callButtonMenuItemIconDisabled : h.callButtonMenuItemIcon }),
				disabled: n,
				label: a,
				onSelect: function() {
					C(), q(t);
				}
			});
			if (w && !d) {
				var l = t ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
				return c.jsx(r("WDSTooltip.react"), {
					id: t ? G : H,
					label: l,
					children: i
				});
			}
			return i;
		};
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			grow: 1,
			xstyle: [h.paddingAll8, h.dropdownContainer],
			children: [
				c.jsx(o("WAWebCallDropdownMenuItems.react").ExpandableHeaderMenuItem, {
					optionId: "group-header",
					onSelect: B,
					children: c.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						grow: 1,
						xstyle: h.firstRowContainer,
						children: [
							c.jsx(o("WAWebFlex.react").FlexItem, {
								xstyle: h.groupImageContainer,
								children: a != null ? a : c.jsx(r("WAWebGroupChatImage.react"), {
									chat: n,
									theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_HEADER,
									regularChatImage: c.jsx(o("WAWebDetailImage.react").DetailImage, {
										id: n.id,
										size: 40,
										waitIdle: !0
									}),
									selection: null,
									showCommunityInfo: !1,
									size: 40
								})
							}),
							c.jsxs(o("WAWebFlex.react").FlexColumn, {
								xstyle: [h.paddingStart12, h.groupTextContainer],
								grow: 1,
								children: [c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx(o("WAWebText.react").WAWebTextTitle, {
									textWrap: "ellipsis",
									children: V
								}) }), c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: F }) })]
							}),
							c.jsx(o("WAWebFlex.react").FlexItem, {
								xstyle: h.chevronContainer,
								children: I ? c.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, { height: 20 }) : c.jsx(o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon, { height: 20 })
							})
						]
					})
				}),
				I && c.jsxs(c.Fragment, { children: [
					c.jsx(o("WAWebFlex.react").FlexItem, { xstyle: h.participantListHeaderBorder }),
					c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: [h.paddingAll8, h.participantListHeader],
						children: c.jsx(o("WAWebText.react").WAWebTextTitle, {
							weight: "semibold",
							children: r("fbs")._(
								/*BTDS*/
								""
							)
						})
					}),
					P.length > 0 && c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx("div", {
						className: "x98rzlu x11emyvd x2lwn1j x6ikm8r x1odjw0f",
						children: c.jsx(o("WAWebFlex.react").FlexColumn, {
							grow: 1,
							rowGap: 2,
							children: P.map(function(e) {
								return c.jsx(r("CometVirtualization.react"), {
									unmountHiddenChildren: !0,
									pinChildrenOnInteraction: !1,
									children: U(e)
								}, e.id.toString());
							})
						})
					}) })
				] }),
				L ? c.jsxs(c.Fragment, { children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: h.callButtonsRow,
					children: [c.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						xstyle: h.callButtonWrapper,
						children: z(!1)
					}), c.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						xstyle: h.callButtonWrapper,
						children: z(!0)
					})]
				}), !I && !R && l !== !0 && c.jsxs(c.Fragment, { children: [c.jsx("div", { className: "x3x0x6p xjm9jq1 xav9cv8 x4tpdpg xh8yej3" }), c.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: h.actionsContainer,
					children: [c.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
						optionId: "send-call-link",
						detailLeft: c.jsx(r("WDSIconIcLink.react"), {
							testid: "ic-link",
							xstyle: h.actionItemIcon
						}),
						primary: c.jsx(o("WAWebText.react").WAWebTextTitle, {
							color: "secondary",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						onSelect: function() {
							C(), y.clickCreateVideoCallLinkChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebVoipCreateCallLinksPopupLoadable.react").WAWebVoipCreateCallLinksPopupLoadable, { targetChat: n }));
						}
					}), (g == null ? void 0 : g()) === !0 && c.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
						optionId: "schedule-call",
						detailLeft: c.jsx(r("WDSIconIcCalendarMonthFilled.react"), { xstyle: h.actionItemIcon }),
						primary: c.jsx(o("WAWebText.react").WAWebTextTitle, {
							color: "secondary",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						onSelect: function() {
							C(), o("WAWebSharableEventGatingUtils").isSharableScheduledCallCreationEnabled(o("WAWebSharableEventGatingUtils").SharableScheduledCallCreationEntryPoint.NewCallPicker) && !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() ? o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebSchedulingCallsNotSupportedModal.react").SchedulingCallsNotSupportedModal, {})) : (y.clickCreateEventChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), o("WAWebVoipCallsTabScheduleCallModal.react").handleScheduleCallForChat(n));
						}
					})]
				})] })] }) : c.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: h.callButtonsRow,
					children: c.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						xstyle: h.callButtonWrapper,
						children: c.jsx(o("WAWebCallDropdownMenuItems.react").CallButtonMenuItem, {
							optionId: "call-button",
							testid: "call-dropdown-button",
							icon: f ? c.jsx(r("WDSIconIcVideocamFilled.react"), { iconXstyle: d || w ? h.callButtonMenuItemIconDisabled : h.callButtonMenuItemIcon }) : c.jsx(r("WDSIconIcCallFilled.react"), { iconXstyle: d || w ? h.callButtonMenuItemIconDisabled : h.callButtonMenuItemIcon }),
							disabled: d || w,
							label: W,
							onSelect: function() {
								return q(f);
							}
						})
					})
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
