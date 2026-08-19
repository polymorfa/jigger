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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(90), n = e.chat, a = e.groupImage, i = e.groupTitleOverride, l = e.hideActions, u = e.initialSubtext, d = e.isCallingDisabled, p = e.isVideo, f = e.logger, y = e.onActionTaken, L = e.onCallStart, E = e.participantWids, k = e.useUnifiedUIOverride, I = E != null, T;
		t[0] !== I || t[1] !== k ? (T = k != null ? k : o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType({
			isAdHocGroupCall: I,
			isCallLink: !1,
			isGroup: !I
		}), t[0] = I, t[1] = k, t[2] = T) : T = t[2];
		var D = T, x = o("useWAWebABPropConfigValue").useABPropConfigValue("group_call_max_participants"), $ = _(!1), P = $[0], N = $[1], M;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (M = new Set(), t[3] = M) : M = t[3];
		var w = _(M), A = w[0], F = w[1], O;
		if (t[4] !== n.id || t[5] !== E) {
			e: {
				if (E != null) {
					var B;
					if (t[7] !== E) {
						var W = r("compactMap")(E, R);
						B = W.filter(S), t[7] = E, t[8] = B;
					} else B = t[8];
					O = B;
					break e;
				}
				var q = r("WAWebGroupMetadataCollection").get(n.id.toString());
				if (q && q.participants) {
					var U = q.participants.toArray(), V = r("compactMap")(U, v);
					O = V.filter(b);
					break e;
				}
				var H;
				t[9] === Symbol.for("react.memo_cache_sentinel") ? (H = [], t[9] = H) : H = t[9], O = H;
			}
			t[4] = n.id, t[5] = E, t[6] = O;
		} else O = t[6];
		var G = O, z = A.size, j = G.length + 1, K = z === 0 ? P || j > x : z + 1 > x, Q;
		if (t[10] !== u || t[11] !== P || t[12] !== z) {
			var X = function() {
				return z > 0 ? s._(
					/*BTDS*/
					"",
					[s._param("count", z)]
				) : P && u != null ? u : r("fbs")._(
					/*BTDS*/
					""
				);
			};
			Q = X(), t[10] = u, t[11] = P, t[12] = z, t[13] = Q;
		} else Q = t[13];
		var Y = Q, J;
		t[14] !== x || t[15] !== f ? (J = function(t) {
			var e = t.id.toString();
			F(function(t) {
				var n = new Set(t);
				return n.has(e) ? (f.deselectParticipant(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), n.delete(e)) : n.size + 1 < x ? (f.selectParticipant(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), n.add(e)) : o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					"",
					[s._param("max-participants", x, [0, x])]
				) })), n;
			});
		}, t[14] = x, t[15] = f, t[16] = J) : J = t[16];
		var Z = J, ee;
		t[17] !== P ? (ee = function() {
			N(!P);
		}, t[17] = P, t[18] = ee) : ee = t[18];
		var te = ee, ne;
		t[19] !== G.length || t[20] !== z ? (ne = z === 0 || z === G.length ? r("fbs")._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("count", z)]
		), t[19] = G.length, t[20] = z, t[21] = ne) : ne = t[21];
		var re = ne, oe;
		t[22] !== x || t[23] !== n || t[24] !== G || t[25] !== I || t[26] !== f || t[27] !== L || t[28] !== E || t[29] !== A ? (oe = function(t) {
			t ? f.clickVideoCall(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER) : f.clickAudioCall(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER);
			var e = G.filter(function(e) {
				return A.has(e.id.toString());
			});
			if (e.length + 1 > x) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					"",
					[s._param("max-participants", x, [0, x])]
				) }));
				return;
			}
			var r = G.length;
			if (e.length > 0 && e.length < r) {
				var a = e.map(C);
				o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(a, t, r > x ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.LARGE_GROUP_CHAT_PICKER : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED);
			} else I && E != null ? o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids([].concat(E), t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_DIRECT, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED) : o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(n, t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED);
			L(t);
		}, t[22] = x, t[23] = n, t[24] = G, t[25] = I, t[26] = f, t[27] = L, t[28] = E, t[29] = A, t[30] = oe) : oe = t[30];
		var ae = oe, ie;
		t[31] !== n || t[32] !== Z || t[33] !== A ? (ie = function(t) {
			var e, a = A.has(t.id.toString()), i = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(n), l = t.id.toString();
			return c.jsx(o("WAWebCallDropdownMenuItems.react").ParticipantMenuItem, {
				optionId: "participant-" + l,
				isSelected: a,
				onSelect: function() {
					return Z(t);
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
		}, t[31] = n, t[32] = Z, t[33] = A, t[34] = ie) : ie = t[34];
		var le = ie, se;
		if (t[35] !== n || t[36] !== i) {
			var ue;
			se = (ue = i != null ? i : o("WAWebGroupCallTitleUtils").getUnnamedGroupCallNameOverride(n)) != null ? ue : o("WAWebFrontendChatGetters").getFormattedTitle(n), t[35] = n, t[36] = i, t[37] = se;
		} else se = t[37];
		var ce = se, de = m(), me = m(), pe;
		t[38] !== ae || t[39] !== K || t[40] !== d || t[41] !== y || t[42] !== me || t[43] !== de ? (pe = function(t) {
			var e = r(t ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react"), n = d || K, a = t ? s._(
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
					y(), ae(t);
				}
			});
			if (K && !d) {
				var l = t ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
				return c.jsx(r("WDSTooltip.react"), {
					id: t ? me : de,
					label: l,
					children: i
				});
			}
			return i;
		}, t[38] = ae, t[39] = K, t[40] = d, t[41] = y, t[42] = me, t[43] = de, t[44] = pe) : pe = t[44];
		var _e = pe, fe;
		t[45] === Symbol.for("react.memo_cache_sentinel") ? (fe = [h.paddingAll8, h.dropdownContainer], t[45] = fe) : fe = t[45];
		var ge;
		t[46] !== n || t[47] !== a ? (ge = a != null ? a : c.jsx(r("WAWebGroupChatImage.react"), {
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
		}), t[46] = n, t[47] = a, t[48] = ge) : ge = t[48];
		var he;
		t[49] !== ge ? (he = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: h.groupImageContainer,
			children: ge
		}), t[49] = ge, t[50] = he) : he = t[50];
		var ye;
		t[51] === Symbol.for("react.memo_cache_sentinel") ? (ye = [h.paddingStart12, h.groupTextContainer], t[51] = ye) : ye = t[51];
		var Ce;
		t[52] !== ce ? (Ce = c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx(o("WAWebText.react").WAWebTextTitle, {
			textWrap: "ellipsis",
			children: ce
		}) }), t[52] = ce, t[53] = Ce) : Ce = t[53];
		var be;
		t[54] !== Y ? (be = c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: Y }) }), t[54] = Y, t[55] = be) : be = t[55];
		var ve;
		t[56] !== Ce || t[57] !== be ? (ve = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: ye,
			grow: 1,
			children: [Ce, be]
		}), t[56] = Ce, t[57] = be, t[58] = ve) : ve = t[58];
		var Se;
		t[59] !== P ? (Se = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: h.chevronContainer,
			children: P ? c.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, { height: 20 }) : c.jsx(o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon, { height: 20 })
		}), t[59] = P, t[60] = Se) : Se = t[60];
		var Re;
		t[61] !== he || t[62] !== ve || t[63] !== Se ? (Re = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			grow: 1,
			xstyle: h.firstRowContainer,
			children: [
				he,
				ve,
				Se
			]
		}), t[61] = he, t[62] = ve, t[63] = Se, t[64] = Re) : Re = t[64];
		var Le;
		t[65] !== te || t[66] !== Re ? (Le = c.jsx(o("WAWebCallDropdownMenuItems.react").ExpandableHeaderMenuItem, {
			optionId: "group-header",
			onSelect: te,
			children: Re
		}), t[65] = te, t[66] = Re, t[67] = Le) : Le = t[67];
		var Ee;
		t[68] !== G || t[69] !== P || t[70] !== le ? (Ee = P && c.jsxs(c.Fragment, { children: [
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
			G.length > 0 && c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx("div", {
				className: "x98rzlu x11emyvd x2lwn1j x6ikm8r x1odjw0f",
				children: c.jsx(o("WAWebFlex.react").FlexColumn, {
					grow: 1,
					rowGap: 2,
					children: G.map(function(e) {
						return c.jsx(r("CometVirtualization.react"), {
							unmountHiddenChildren: !0,
							pinChildrenOnInteraction: !1,
							children: le(e)
						}, e.id.toString());
					})
				})
			}) })
		] }), t[68] = G, t[69] = P, t[70] = le, t[71] = Ee) : Ee = t[71];
		var ke;
		t[72] !== re || t[73] !== n || t[74] !== ae || t[75] !== l || t[76] !== I || t[77] !== K || t[78] !== d || t[79] !== P || t[80] !== p || t[81] !== f || t[82] !== y || t[83] !== _e || t[84] !== D ? (ke = D ? c.jsxs(c.Fragment, { children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: h.callButtonsRow,
			children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 1,
				xstyle: h.callButtonWrapper,
				children: _e(!1)
			}), c.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 1,
				xstyle: h.callButtonWrapper,
				children: _e(!0)
			})]
		}), !P && !I && l !== !0 && c.jsxs(c.Fragment, { children: [c.jsx("div", { className: "x3x0x6p xjm9jq1 xav9cv8 x4tpdpg xh8yej3" }), c.jsxs(o("WAWebFlex.react").FlexColumn, {
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
					y(), f.clickCreateVideoCallLinkChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebVoipCreateCallLinksPopupLoadable.react").WAWebVoipCreateCallLinksPopupLoadable, { targetChat: n }));
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
					y(), o("WAWebSharableEventGatingUtils").isSharableScheduledCallCreationEnabled(o("WAWebSharableEventGatingUtils").SharableScheduledCallCreationEntryPoint.NewCallPicker) && !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() ? o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebSchedulingCallsNotSupportedModal.react").SchedulingCallsNotSupportedModal, {})) : (f.clickCreateEventChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), o("WAWebVoipCallsTabScheduleCallModal.react").handleScheduleCallForChat(n));
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
					icon: p ? c.jsx(r("WDSIconIcVideocamFilled.react"), { iconXstyle: d || K ? h.callButtonMenuItemIconDisabled : h.callButtonMenuItemIcon }) : c.jsx(r("WDSIconIcCallFilled.react"), { iconXstyle: d || K ? h.callButtonMenuItemIconDisabled : h.callButtonMenuItemIcon }),
					disabled: d || K,
					label: re,
					onSelect: function() {
						return ae(p);
					}
				})
			})
		}), t[72] = re, t[73] = n, t[74] = ae, t[75] = l, t[76] = I, t[77] = K, t[78] = d, t[79] = P, t[80] = p, t[81] = f, t[82] = y, t[83] = _e, t[84] = D, t[85] = ke) : ke = t[85];
		var Ie;
		return t[86] !== Le || t[87] !== Ee || t[88] !== ke ? (Ie = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			grow: 1,
			xstyle: fe,
			children: [
				Le,
				Ee,
				ke
			]
		}), t[86] = Le, t[87] = Ee, t[88] = ke, t[89] = Ie) : Ie = t[89], Ie;
	}
	function C(e) {
		return e.id;
	}
	function b(e) {
		return !o("WAWebContactGetters").getIsMe(e);
	}
	function v(e) {
		return o("WAWebContactCollection").ContactCollection.get(e.id);
	}
	function S(e) {
		return !o("WAWebContactGetters").getIsMe(e);
	}
	function R(e) {
		return o("WAWebContactCollection").ContactCollection.get(e);
	}
	l.default = y;
}), 226);
