__d("WAWebGroupParticipantSearch.react", [
	"fbt",
	"WAWebBoolFunc",
	"WAWebChatEntryPoint",
	"WAWebChatGroupUtils",
	"WAWebChatRefreshedIcon.react",
	"WAWebCommunityGatingUtils",
	"WAWebCommunityGetGeneralChatParticipantText.react",
	"WAWebContactsModal.react",
	"WAWebDropdownItem.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiText.react",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebGroupHistoryPostJoinEligibility",
	"WAWebGroupHistoryPostJoinLocalJoinTimes",
	"WAWebGroupHistoryPostJoinSendFlow",
	"WAWebGroupHistorySenderUserJourneyLogger",
	"WAWebGroupMemberTagUpdateLogger",
	"WAWebGroupParticipantsFlow.react",
	"WAWebGroupType",
	"WAWebInfoRefreshedIcon.react",
	"WAWebMemberLabelCreateUpdateModalLoadable.react",
	"WAWebMemberLabelsFrontendUtils",
	"WAWebModalManager",
	"WAWebModifyParticipantsGroupAction",
	"WAWebNumbersIcon.react",
	"WAWebOpenChatWithContactAction",
	"WAWebOpenCommunityParticipantDemoteConfirmation",
	"WAWebOpenCommunityParticipantPromoteConfirmation",
	"WAWebPersonShieldCheckIcon.react",
	"WAWebPersonShieldRemoveIcon.react",
	"WAWebText.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUseShowPastParticipants",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumBundleSendSource",
	"WAWebWamEnumTsSurface",
	"WDSIconIcDoNotDisturbOn.react",
	"WDSIconIcEdit.react",
	"WDSIconIcHistory.react",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebChatValues",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useState, p = { paddingInline30: {
		paddingInlineStart: "x162tt16",
		paddingInlineEnd: "x5zjp28",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, _ = {
		dropdownText: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		generalChatContainer: {
			backgroundColor: "x1280gxy",
			$$css: !0
		}
	};
	function f(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.onContactInfo, c = a.onPastParticipants, m = a.onVerification, f = i.groupMetadata, g = h(i, m, l), y = g[0], C = g[1], b = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(f == null ? void 0 : f.participants, [
			"bulk_add",
			"bulk_remove",
			"reset"
		], b);
		var v = o("WAWebUseShowPastParticipants").useShowPastParticipants(i);
		if (f == null) return null;
		var S = f.participants, R = function(t) {
			return !o("WAWebUserPrefsMeUser").isMeAccount(t);
		}, L;
		v && (L = {
			text: s._(
				/*BTDS*/
				""
			),
			onClick: c
		});
		var E = null;
		if (f.groupType === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP && !o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled()) {
			var k = !!f.generalChatAutoAddDisabled;
			E = d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(_.generalChatContainer, o("WDSPaddings.stylex").wdsPaddings.paddingVer12, p.paddingInline30), { children: d.jsx(o("WAWebText.react").WAWebTextMuted, { children: o("WAWebCommunityGetGeneralChatParticipantText.react").getGeneralChatParticipantListText(k) }) }));
		}
		return d.jsxs(d.Fragment, { children: [d.jsx(r("WAWebContactsModal.react"), {
			ref: n,
			title: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			openContextOnClick: !0,
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			contextMenu: R,
			onContext: C,
			showNotifyName: !0,
			elevatedPushNamesEnabled: o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(i),
			listenForAdminChange: !0,
			participantCollection: S,
			contacts: S.map(function(e) {
				return e.contact;
			}),
			button: L,
			showStatusRingAroundProfilePhoto: !0,
			firstRows: [E],
			showMemberLabel: o("WAWebMemberLabelsFrontendUtils").shouldShowMemberLabelForChat(i),
			sourceChat: i
		}), y] });
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = function(t) {
		var e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(t, "group_participant_search_open_chat");
		e != null && (o("WAWebModalManager").ModalManager.close(), o("WAWebOpenChatWithContactAction").openChatWithContact(e, "groupParticipantSearch", o("WAWebChatEntryPoint").ChatEntryPoint.GroupParticipant, { skipComposeBoxFocus: !0 }));
	};
	function h(e, t, n) {
		var a = o("react-compiler-runtime").c(21), i = m(null), l = i[0], u = i[1], c;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (c = [o("WAWebFrontendChatGetters").getShareableHistoryInfo], a[0] = c) : c = a[0];
		var p = o("useWAWebChatValues").useChatValues(e.id, c), f = p[0], h;
		a[1] !== e ? (h = function(n, r) {
			if (n.isAdmin) {
				r && o("WAWebModalManager").ModalManager.close();
				return;
			}
			n.contact.pendingAction = n.contact.pendingAction + 1, o("WAWebModifyParticipantsGroupAction").promoteParticipants(e, [n]).finally(function() {
				n.contact.pendingAction = n.contact.pendingAction - 1;
			}), r && o("WAWebModalManager").ModalManager.close();
		}, a[1] = e, a[2] = h) : h = a[2];
		var y = h, C;
		a[3] !== e ? (C = function(n, r) {
			n.contact.pendingAction = n.contact.pendingAction + 1, o("WAWebModifyParticipantsGroupAction").removeParticipants(e, [n]).finally(function() {
				n.contact.pendingAction = n.contact.pendingAction - 1;
			}), r && o("WAWebModalManager").ModalManager.close();
		}, a[3] = e, a[4] = C) : C = a[4];
		var b = C, v;
		a[5] !== e ? (v = function(n) {
			n.isAdmin && (n.contact.pendingAction = n.contact.pendingAction + 1, o("WAWebModifyParticipantsGroupAction").demoteParticipants(e, [n]).finally(function() {
				n.contact.pendingAction = n.contact.pendingAction - 1;
			}));
		}, a[5] = e, a[6] = v) : v = a[6];
		var S = v, R;
		a[7] !== e || a[8] !== S || a[9] !== n || a[10] !== t || a[11] !== y || a[12] !== b || a[13] !== f ? (R = function(i, l) {
			var a = r("nullthrows")(e.groupMetadata).participants, c = a.assertGet(l.id.toString()), m = [], p = o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e);
			if (o("WAWebMemberLabelsFrontendUtils").canEditMemberLabel(l, e)) {
				var h = function() {
					o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebMemberLabelCreateUpdateModalLoadable.react").MemberLabelCreateUpdateModalLoadable, {
						chat: e,
						entryPoint: o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.ENTRY_POINT.MEMBER_LIST
					}));
				};
				m.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-edit-member-label",
					action: h,
					icon: d.jsx(r("WDSIconIcEdit.react"), {}),
					children: s._(
						/*BTDS*/
						""
					)
				}, "edit-member-label"));
			}
			if (a.canPromote(c)) {
				var C = d.jsx(o("WAWebPersonShieldCheckIcon.react").PersonShieldCheckIcon, {}), v;
				if (p) {
					var R;
					v = s._(
						/*BTDS*/
						""
					);
					var L = (R = e.groupMetadata) == null ? void 0 : R.getParentGroupChat();
					m.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						testid: "mi-grp-promote-community-admin",
						action: function() {
							o("WAWebOpenCommunityParticipantPromoteConfirmation").openCommunityParticipantPromoteConfirmation({
								announcementGroupParticipants: a,
								contact: c.contact,
								parentChat: L,
								participant: c
							});
						},
						icon: C,
						children: v
					}, "promote"));
				} else v = s._(
					/*BTDS*/
					""
				), m.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-promote-admin",
					action: function() {
						return y(c, !1);
					},
					icon: C,
					children: v
				}, "promote"));
			}
			if (a.canRemove(c)) {
				var E = function() {
					return b(c, !1);
				}, k = s._(
					/*BTDS*/
					""
				);
				m.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-remove-participant",
					action: E,
					icon: d.jsx(r("WDSIconIcDoNotDisturbOn.react"), {}),
					children: k
				}, "remove"));
			}
			if (a.canDemote(c)) {
				var I = function() {
					return S(c);
				}, T = s._(
					/*BTDS*/
					""
				), D = d.jsx(o("WAWebPersonShieldRemoveIcon.react").PersonShieldRemoveIcon, {});
				if (p) {
					var x, $ = (x = e.groupMetadata) == null ? void 0 : x.getParentGroupChat();
					m.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						testid: "mi-grp-community-demote",
						action: function() {
							return o("WAWebOpenCommunityParticipantDemoteConfirmation").openCommunityParticipantDemoteConfirmation(c, $);
						},
						icon: D,
						children: T
					}, "demote-admin"));
				} else m.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-demote",
					action: I,
					icon: D,
					children: T
				}, "demote-admin"));
			}
			if (n) {
				var P = function() {
					var e = o("WAWebGroupParticipantsFlow.react").getOneToOneContact(l);
					e && (o("WAWebModalManager").ModalManager.close(), n(e));
				};
				m.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-contact-info",
					action: P,
					icon: d.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, {}),
					children: s._(
						/*BTDS*/
						""
					)
				}, "contact-info"));
			}
			if (a.canVerifyIdentity(c)) {
				var N = function() {
					o("WAWebModalManager").ModalManager.close(), t == null || t(c.contact);
				}, M = s._(
					/*BTDS*/
					""
				);
				m.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-verify-identify",
					action: N,
					icon: d.jsx(o("WAWebNumbersIcon.react").NumbersIcon, {}),
					children: M
				}, "verify-identity"));
			}
			var w = o("WAWebGroupHistoryPostJoinLocalJoinTimes").buildLocalJoinTimeFallbackMap(e).get(c.id.toString());
			e.groupMetadata != null && o("WAWebGroupHistoryPostJoinEligibility").canSendPostJoinHistoryToParticipant(c, o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(e.groupMetadata), w, f) && (o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.dropdownMenuItemDisplayed({
				recipientCount: 1,
				uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE
			}), m.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				action: function() {
					o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.dropdownMenuItemClicked({
						recipientCount: 1,
						uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE
					}), o("WAWebGroupHistoryPostJoinSendFlow").startPostJoinSendFlow(e.id, [c], w, o("WAWebWamEnumBundleSendSource").BUNDLE_SEND_SOURCE.DROPDOWN_MENU, o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE);
				},
				icon: d.jsx(r("WDSIconIcHistory.react"), {}),
				testid: "mi-grp-send-message-history",
				children: s._(
					/*BTDS*/
					""
				)
			}, "send-message-history")));
			var A = o("WAWebUserPrefsMeUser").isMeAccount(c.contact.id), F = A ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("author", o("WAWebFrontendContactGetters").getFormattedShortName(c.contact))]
			);
			m.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				ariaLabel: F,
				action: g.bind(null, c.contact.id),
				addSpacing: !0,
				icon: d.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, { directional: !0 }),
				children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: F,
					xstyle: _.dropdownText
				})
			}, "message author"));
			var O = i.type === "click" ? void 0 : i.target;
			u({
				contactId: l.id,
				menu: m,
				anchor: O,
				event: i.anchor ? void 0 : i
			});
		}, a[7] = e, a[8] = S, a[9] = n, a[10] = t, a[11] = y, a[12] = b, a[13] = f, a[14] = R) : R = a[14];
		var L = R, E;
		a[15] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			u(null);
		}, a[15] = E) : E = a[15];
		var k = E, I;
		if (l) {
			var T;
			a[16] !== l ? (T = d.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "ChatContextMenu",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: k,
				children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: l })
			}), a[16] = l, a[17] = T) : T = a[17], I = T;
		}
		var D;
		return a[18] !== L || a[19] !== I ? (D = [I, L], a[18] = L, a[19] = I, a[20] = D) : D = a[20], D;
	}
	l.default = f;
}), 226);
