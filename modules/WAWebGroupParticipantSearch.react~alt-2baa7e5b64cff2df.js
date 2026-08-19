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
		var a = m(null), i = a[0], l = a[1], u = o("useWAWebChatValues").useChatValues(e.id, [o("WAWebFrontendChatGetters").getShareableHistoryInfo]), c = u[0], p = function(n, r) {
			if (n.isAdmin) {
				r && o("WAWebModalManager").ModalManager.close();
				return;
			}
			n.contact.pendingAction++, o("WAWebModifyParticipantsGroupAction").promoteParticipants(e, [n]).finally(function() {
				n.contact.pendingAction--;
			}), r && o("WAWebModalManager").ModalManager.close();
		}, f = function(n, r) {
			n.contact.pendingAction++, o("WAWebModifyParticipantsGroupAction").removeParticipants(e, [n]).finally(function() {
				n.contact.pendingAction--;
			}), r && o("WAWebModalManager").ModalManager.close();
		}, h = function(n) {
			n.isAdmin && (n.contact.pendingAction++, o("WAWebModifyParticipantsGroupAction").demoteParticipants(e, [n]).finally(function() {
				n.contact.pendingAction--;
			}));
		}, y = function(i, u) {
			var a = r("nullthrows")(e.groupMetadata).participants, m = a.assertGet(u.id.toString()), y = [], C = o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e);
			if (o("WAWebMemberLabelsFrontendUtils").canEditMemberLabel(u, e)) {
				var b = function() {
					o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebMemberLabelCreateUpdateModalLoadable.react").MemberLabelCreateUpdateModalLoadable, {
						chat: e,
						entryPoint: o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.ENTRY_POINT.MEMBER_LIST
					}));
				};
				y.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-edit-member-label",
					action: b,
					icon: d.jsx(r("WDSIconIcEdit.react"), {}),
					children: s._(
						/*BTDS*/
						""
					)
				}, "edit-member-label"));
			}
			if (a.canPromote(m)) {
				var v = d.jsx(o("WAWebPersonShieldCheckIcon.react").PersonShieldCheckIcon, {}), S;
				if (C) {
					var R;
					S = s._(
						/*BTDS*/
						""
					);
					var L = (R = e.groupMetadata) == null ? void 0 : R.getParentGroupChat();
					y.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						testid: "mi-grp-promote-community-admin",
						action: function() {
							o("WAWebOpenCommunityParticipantPromoteConfirmation").openCommunityParticipantPromoteConfirmation({
								announcementGroupParticipants: a,
								contact: m.contact,
								parentChat: L,
								participant: m
							});
						},
						icon: v,
						children: S
					}, "promote"));
				} else S = s._(
					/*BTDS*/
					""
				), y.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-promote-admin",
					action: function() {
						return p(m, !1);
					},
					icon: v,
					children: S
				}, "promote"));
			}
			if (a.canRemove(m)) {
				var E = function() {
					return f(m, !1);
				}, k = s._(
					/*BTDS*/
					""
				);
				y.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-remove-participant",
					action: E,
					icon: d.jsx(r("WDSIconIcDoNotDisturbOn.react"), {}),
					children: k
				}, "remove"));
			}
			if (a.canDemote(m)) {
				var I = function() {
					return h(m);
				}, T = s._(
					/*BTDS*/
					""
				), D = d.jsx(o("WAWebPersonShieldRemoveIcon.react").PersonShieldRemoveIcon, {});
				if (C) {
					var x, $ = (x = e.groupMetadata) == null ? void 0 : x.getParentGroupChat();
					y.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						testid: "mi-grp-community-demote",
						action: function() {
							return o("WAWebOpenCommunityParticipantDemoteConfirmation").openCommunityParticipantDemoteConfirmation(m, $);
						},
						icon: D,
						children: T
					}, "demote-admin"));
				} else y.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-demote",
					action: I,
					icon: D,
					children: T
				}, "demote-admin"));
			}
			if (n) {
				var P = function() {
					var e = o("WAWebGroupParticipantsFlow.react").getOneToOneContact(u);
					e && (o("WAWebModalManager").ModalManager.close(), n(e));
				};
				y.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-contact-info",
					action: P,
					icon: d.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, {}),
					children: s._(
						/*BTDS*/
						""
					)
				}, "contact-info"));
			}
			if (a.canVerifyIdentity(m)) {
				var N = function() {
					o("WAWebModalManager").ModalManager.close(), t == null || t(m.contact);
				}, M = s._(
					/*BTDS*/
					""
				);
				y.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-grp-verify-identify",
					action: N,
					icon: d.jsx(o("WAWebNumbersIcon.react").NumbersIcon, {}),
					children: M
				}, "verify-identity"));
			}
			var w = o("WAWebGroupHistoryPostJoinLocalJoinTimes").buildLocalJoinTimeFallbackMap(e).get(m.id.toString());
			e.groupMetadata != null && o("WAWebGroupHistoryPostJoinEligibility").canSendPostJoinHistoryToParticipant(m, o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(e.groupMetadata), w, c) && (o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.dropdownMenuItemDisplayed({
				recipientCount: 1,
				uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE
			}), y.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				action: function() {
					o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.dropdownMenuItemClicked({
						recipientCount: 1,
						uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE
					}), o("WAWebGroupHistoryPostJoinSendFlow").startPostJoinSendFlow(e.id, [m], w, o("WAWebWamEnumBundleSendSource").BUNDLE_SEND_SOURCE.DROPDOWN_MENU, o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE);
				},
				icon: d.jsx(r("WDSIconIcHistory.react"), {}),
				testid: "mi-grp-send-message-history",
				children: s._(
					/*BTDS*/
					""
				)
			}, "send-message-history")));
			var A = o("WAWebUserPrefsMeUser").isMeAccount(m.contact.id), F = A ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("author", o("WAWebFrontendContactGetters").getFormattedShortName(m.contact))]
			);
			y.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				ariaLabel: F,
				action: g.bind(null, m.contact.id),
				addSpacing: !0,
				icon: d.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, { directional: !0 }),
				children: d.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: F,
					xstyle: _.dropdownText
				})
			}, "message author"));
			var O = i.type === "click" ? void 0 : i.target;
			l({
				contactId: u.id,
				menu: y,
				anchor: O,
				event: i.anchor ? void 0 : i
			});
		}, C = function() {
			l(null);
		}, b;
		return i && (b = d.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ChatContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: C,
			children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: i })
		})), [b, y];
	}
	l.default = f;
}), 226);
