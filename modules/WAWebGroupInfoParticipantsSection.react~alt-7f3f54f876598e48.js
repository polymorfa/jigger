__d("WAWebGroupInfoParticipantsSection.react", [
	"fbt",
	"WALogger",
	"WAWebAddContactLabel",
	"WAWebBotFrontendUtils",
	"WAWebBotUtils",
	"WAWebBulkAddContactsModal.react",
	"WAWebCellFrame.react",
	"WAWebCellV2.react",
	"WAWebChatGroupUtils",
	"WAWebChatInfoDrawerSection.react",
	"WAWebChatInfoExpandButton.react",
	"WAWebChatParticipant.react",
	"WAWebChatParticipantUtils.react",
	"WAWebCommunitySubgroupInviteLinkRestriction",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebContactEditUtils",
	"WAWebContactGetters",
	"WAWebContactLogging",
	"WAWebContactManagementGating",
	"WAWebContactUtils",
	"WAWebDomScroll",
	"WAWebDropdownItem.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiText.react",
	"WAWebFlatList.react",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebGroupBulkAddContactsEligibility",
	"WAWebGroupConstants",
	"WAWebGroupHistoryPostJoinEligibility",
	"WAWebGroupHistoryPostJoinLocalJoinTimes",
	"WAWebGroupHistoryPostJoinSendFlow",
	"WAWebGroupHistorySenderUserJourneyLogger",
	"WAWebGroupMemberLinkMode",
	"WAWebGroupMemberTagUpdateLogger",
	"WAWebGroupParticipantsFlow.react",
	"WAWebGroupType",
	"WAWebListButton.react",
	"WAWebMemberLabelCreateUpdateModalLoadable.react",
	"WAWebMemberLabelsFrontendUtils",
	"WAWebModalManager",
	"WAWebModifyParticipantsGroupAction",
	"WAWebNavigableFlatList.react",
	"WAWebNumbersIcon.react",
	"WAWebOpenCommunityParticipantDemoteConfirmation",
	"WAWebOpenCommunityParticipantPromoteConfirmation",
	"WAWebParticipantListUtils",
	"WAWebPendingParticipantsIcon.react",
	"WAWebPersonShieldCheckIcon.react",
	"WAWebPersonShieldRemoveIcon.react",
	"WAWebRemoveFromCommunityConfirmationPopup.react",
	"WAWebRoundShape.react",
	"WAWebSingleSelection",
	"WAWebTag.react",
	"WAWebText.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUseShowPastParticipants",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumBundleSendSource",
	"WAWebWamEnumTsSurface",
	"WAWebWid",
	"WDSButton.react",
	"WDSIconIcDoNotDisturbOn.react",
	"WDSIconIcEdit.react",
	"WDSIconIcHistory.react",
	"WDSIconIcLink.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconIcPersonAddFilled.react",
	"WDSIconIcRecentActorsFilled.react",
	"WDSIconIcSearch.react",
	"WDSPaddings.stylex",
	"WDSSectionDivider.react",
	"WDSTooltip.react",
	"nullthrows",
	"react",
	"useLazyRef",
	"useWAWebChatValues",
	"useWAWebEventTargetValue",
	"useWAWebForceUpdate",
	"useWAWebGroupParticipantStatus",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useImperativeHandle, _ = d.useMemo, f = d.useRef, g = d.useState, h = 20, y = {
		pendingParticipantsIcon: {
			backgroundColor: "xp0d2wq",
			color: "xhslqc4",
			$$css: !0
		},
		flatListRefreshed: {
			backgroundColor: "xjbqb8w",
			$$css: !0
		}
	};
	function C(t) {
		var n = t.active, a = t.contextMenu, i = t.data, l = t.elevatedPushNamesEnabled, s = l === void 0 ? !1 : l, u = t.handleParticipantClick, d = t.handleParticipantMenu, m = t.menuEnabled, p = t.participants, _ = t.showMemberLabel, f = _ === void 0 ? !1 : _, g = t.sourceChat, h = i.id, y = p.get(h);
		if (!y) throw o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["UnknownDataError: WAWebGroupInfoParticipantsSection"]))), new (o("WAWebFlatList.react")).UnknownDataError(i);
		var C = y.contact, b = !!a && r("WAWebWid").equals(C.id, a.contactId), v = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(C.id), S = v ? o("WAWebBotFrontendUtils").getMetaAiTEEBotDisplayName() : void 0;
		return c.jsx(r("WAWebChatParticipant.react"), {
			active: n,
			contact: C,
			contextEnabled: function() {
				return m(C);
			},
			contextMenu: b,
			elevatedPushNamesEnabled: s,
			nameOverride: S,
			showTeeLockBadge: v,
			onClick: function(t) {
				var e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(C.id, "group_info_participant_section_click");
				e != null && (u == null || u(t, o("WAWebContactCollection").ContactCollection.gadd(e)));
			},
			onContext: function(t) {
				return d(t, C);
			},
			participant: y,
			participantCollection: p,
			showMemberLabel: f,
			showNotifyName: !0,
			showStatusRingAroundProfilePhoto: !0,
			sourceChat: g,
			unknownUserLogContext: "group_member_list",
			theme: "refresh",
			truncateName: !0,
			waitIdle: !0
		}, y.id.toString());
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		"use no forget";
		var t, n = e.chat, a = e.flatListController, i = e.onAddParticipant, l = e.onGroupInviteLink, u = e.onOpenParticipantSearch, d = e.onParticipantClick, b = e.onPendingParticipants, S = e.onVerification, R = e.ref, L = e.scrollToParticipantList, E = o("useWAWebModelValues").useModelValues(r("nullthrows")(n.groupMetadata), [
			"support",
			"size",
			"id",
			"membershipApprovalMode",
			"membershipApprovalRequests",
			"memberLinkMode",
			"isUnnamed",
			"isLidAddressingMode",
			"participants",
			"hasCapi",
			"groupType",
			"memberShareGroupHistoryMode"
		]), k = E.memberLinkMode, I = E.membershipApprovalMode, T = E.membershipApprovalRequests, D = o("WAWebMemberLabelsFrontendUtils").shouldShowMemberLabelForChat(n), x = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}), $ = r("nullthrows")(n.groupMetadata).participants, P = $.toArray();
		E.isLidAddressingMode !== !0 && (P = $.filter(function(e) {
			var t = e.id;
			return o("WAWebUserPrefsMeUser").isMeAccount(t) || !t.isLid();
		}));
		var N = o("WAWebChatGroupUtils").getGroupParticipantsCount(E), M = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener($, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", M);
		var w = g(!0), A = w[0], F = w[1], O = f(), B = g(), W = B[0], q = B[1], U = o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n);
		m(function() {
			L && O.current && o("WAWebDomScroll").scrollIntoViewIfNeeded(O.current, !1);
		}, [L]), p(R, function() {
			return { scrollIntoView: function() {
				var e;
				(e = O.current) == null || e.scrollIntoView();
			} };
		});
		var V = r("useWAWebGroupParticipantStatus")(E), H = V[0], G = V[1], z = r("useWAWebEventTargetValue")(T, [
			"add",
			"remove",
			"reset"
		], function() {
			return T.length;
		}), j = o("WAWebUseShowPastParticipants").useShowPastParticipants(n), K = $.iAmMember(), Q = $.iAmAdmin(), X = {
			groupType: E.groupType,
			groupWid: E.id,
			hasCapi: E.hasCapi,
			iAmAdmin: Q,
			iAmSuperAdmin: $.iAmSuperAdmin(),
			memberShareGroupHistoryMode: E.memberShareGroupHistoryMode
		}, Y = o("WAWebGroupHistoryPostJoinLocalJoinTimes").buildLocalJoinTimeFallbackMap(n), J = o("useWAWebChatValues").useChatValues(n.id, [o("WAWebFrontendChatGetters").getShareableHistoryInfo]), Z = J[0], ee = _(function() {
			var e, t = [], r = [];
			P.forEach(function(n) {
				!K && !n.isAdmin || (o("WAWebContactGetters").getIsMe(n.contact) ? e = n : n.isAdmin ? t.push(n) : r.push(n));
			});
			var a = [];
			return e && a.push(e), a = a.concat(t, r), v(P) && A && (a = a.slice(0, o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS)), x.current.init(a.map(function(e) {
				return e.contact;
			})), a.map(function(e) {
				return {
					itemKey: e.id.toString(),
					id: e.id,
					height: o("WAWebChatParticipantUtils.react").getParticipantItemHeight({
						contact: e.contact,
						showMemberLabel: D,
						chat: n,
						groupMetadata: E
					})
				};
			});
		}, [A, P]);
		if (E.isSuspendedOrTerminated()) return null;
		var te = o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupInviteLinkRestrictedByParentCommunity(E), ne;
		if (H && !E.support) {
			var re = r("WDSIconIcPersonAddFilled.react"), oe = c.jsx(r("WAWebRoundShape.react"), {
				theme: "group-modal",
				children: c.jsx(re, { directional: !0 })
			}), ae = s._(
				/*BTDS*/
				""
			);
			ne = c.jsx(r("WAWebCellV2.react"), {
				detailLeft: oe,
				isRefresh: !0,
				onClick: i,
				primary: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: ae }),
				size: "medium",
				testid: "add-user"
			});
		}
		var ie;
		if (!E.support && l && !te && (Q || K && k === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK)) {
			var le = r("WDSIconIcLink.react"), se = c.jsx(r("WAWebRoundShape.react"), {
				theme: "group-modal",
				children: c.jsx(le, { testid: "ic-link" })
			}), ue = s._(
				/*BTDS*/
				""
			);
			ie = c.jsx(r("WAWebCellV2.react"), {
				detailLeft: se,
				isRefresh: !0,
				onClick: l,
				primary: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: ue }),
				size: "medium"
			});
		}
		var ce;
		if (!E.support && K && $.length <= o("WAWebGroupConstants").MAX_GROUP_SIZE_FOR_BULK_ADD && o("WAWebGroupBulkAddContactsEligibility").hasBulkAddEligibleContacts($) && o("WAWebContactManagementGating").bulkAddContactGroupInfoEnabled()) {
			var de = c.jsx(r("WAWebRoundShape.react"), {
				theme: "group-modal",
				children: c.jsx(r("WDSIconIcRecentActorsFilled.react"), {})
			});
			ce = c.jsx(r("WAWebCellV2.react"), {
				testid: "save-to-contacts",
				detailLeft: de,
				primary: c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: s._(
					/*BTDS*/
					""
				) }),
				onClick: function() {
					return o("WAWebBulkAddContactsModal.react").openBulkAddContactsModal(n);
				},
				size: "medium",
				isRefresh: !0
			});
		}
		var me;
		I && z > 0 && (G || Q) && (me = c.jsx(r("WAWebCellFrame.react"), {
			focusable: !0,
			image: c.jsx(r("WAWebRoundShape.react"), {
				theme: "compact",
				xstyle: y.pendingParticipantsIcon,
				children: c.jsx(o("WAWebPendingParticipantsIcon.react").PendingParticipantsIcon, {})
			}),
			onClick: b,
			primary: s._(
				/*BTDS*/
				""
			),
			primaryDetail: c.jsx(o("WAWebTag.react").Tag, {
				round: !0,
				children: z
			}),
			theme: "chat-info"
		}));
		var pe;
		if (v(P) && A) {
			var _e = P.length <= h, fe = P.length - o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS, ge = function() {
				_e ? F(!1) : u(o("WAWebGroupParticipantsFlow.react").ParticipantsFlowStep.Participants);
			};
			pe = c.jsx(r("WAWebChatInfoExpandButton.react"), {
				numMore: fe,
				onClick: ge,
				viewAll: !_e
			});
		} else if (j) {
			var he = function() {
				u(o("WAWebGroupParticipantsFlow.react").ParticipantsFlowStep.PastParticipants);
			};
			pe = c.jsx(o("WAWebListButton.react").ListButton, {
				onClick: he,
				testid: "row-past-participants",
				children: s._(
					/*BTDS*/
					""
				)
			});
		}
		var ye = function(t) {
			return o("WAWebContactUtils").canSaveAsMyContact(t.id) && !o("WAWebFrontendContactGetters").getIsMyContact(t) && !o("WAWebContactGetters").getIsMe(t) && o("WAWebContactManagementGating").addContactGroupMemberEnabled();
		}, Ce = function(t) {
			var e = $.get(t.id);
			if (!e) return !1;
			var r = o("WAWebMemberLabelsFrontendUtils").canEditMemberLabel(t, n), a = o("WAWebGroupHistoryPostJoinEligibility").canSendPostJoinHistoryToParticipant(e, X, Y.get(e.id.toString()), Z);
			return $.canPromote(e) || $.canDemote(e) || $.canRemove(e) || $.canVerifyIdentity(e) || r || ye(t) || a;
		}, be = function(t, a) {
			var e = $.assertGet(a.id);
			if (Ce(a)) {
				var i = [], l = n.contact.name;
				E.isUnnamed && (l = o("WAWebParticipantListUtils").calculateUnnamedGroupParticipantsList(E).toLocaleString());
				var u = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.contact.id) ? o("WAWebBotFrontendUtils").getMetaAiTEEBotDisplayName() : o("WAWebFrontendContactGetters").getFormattedName(e.contact);
				if (ye(a) && i.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						return o("WAWebContactEditUtils").openContactEditDrawer(o("WAWebContactUtils").getContactDataFromContactModel(a), o("WAWebContactLogging").ContactSourceType.GroupMemberInfo);
					},
					icon: c.jsx(r("WDSIconIcPersonAdd.react"), {}),
					testid: "mi-grp-add-contact",
					children: o("WAWebAddContactLabel").getAddToContactsLabel()
				}, "add-contact")), $.canPromote(e)) {
					var d = function() {
						var t = s._(
							/*BTDS*/
							"",
							[s._param("member", u), s._param("subject", l)]
						), r = function(r) {
							if (e.isAdmin) {
								r && o("WAWebModalManager").ModalManager.close();
								return;
							}
							e.contact.pendingAction++, o("WAWebModifyParticipantsGroupAction").promoteParticipants(n, [e]).finally(function() {
								e.contact.pendingAction--;
							}), r && o("WAWebModalManager").ModalManager.close();
						};
						o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
							cancelText: s._(
								/*BTDS*/
								""
							),
							okText: s._(
								/*BTDS*/
								""
							),
							onCancel: o("WAWebModalManager").closeModalManager,
							onOK: function() {
								return r(!0);
							},
							children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: t })
						}));
					}, m = c.jsx(o("WAWebPersonShieldCheckIcon.react").PersonShieldCheckIcon, {}), p;
					if (U) {
						var _;
						p = s._(
							/*BTDS*/
							""
						);
						var f = (_ = n.groupMetadata) == null ? void 0 : _.getParentGroupChat();
						i.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
							action: function() {
								o("WAWebOpenCommunityParticipantPromoteConfirmation").openCommunityParticipantPromoteConfirmation({
									announcementGroupParticipants: $,
									contact: e.contact,
									parentChat: f,
									participant: e
								});
							},
							icon: m,
							testid: "mi-grp-promote-community-admin",
							children: p
						}, "promote"));
					} else p = s._(
						/*BTDS*/
						""
					), i.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: d,
						icon: m,
						testid: "mi-grp-promote-admin",
						children: p
					}, "promote"));
				}
				if ($.canRemove(e)) {
					var g = function() {
						var t, i = (t = n.groupMetadata) == null ? void 0 : t.getParentGroupChat();
						if (U === !0 && i != null) {
							o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebRemoveFromCommunityConfirmationPopup.react"), {
								contact: a,
								parentGroupChat: i
							}));
							return;
						}
						var d = s._(
							/*BTDS*/
							"",
							[s._param("member", u), s._param("subject", l)]
						), m = function(r) {
							e.contact.pendingAction++, o("WAWebModifyParticipantsGroupAction").removeParticipants(n, [e]).finally(function() {
								e.contact.pendingAction--;
							}), r && o("WAWebModalManager").ModalManager.close();
						};
						o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
							cancelText: s._(
								/*BTDS*/
								""
							),
							okText: s._(
								/*BTDS*/
								""
							),
							onCancel: o("WAWebModalManager").closeModalManager,
							onOK: function() {
								return m(!0);
							},
							children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: d })
						}));
					}, h;
					U === !0 ? h = s._(
						/*BTDS*/
						""
					) : h = s._(
						/*BTDS*/
						""
					), i.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: g,
						icon: c.jsx(r("WDSIconIcDoNotDisturbOn.react"), {}),
						testid: "mi-grp-remove-participant",
						children: h
					}, "remove"));
				}
				if ($.canDemote(e)) {
					var y = function() {
						e.isAdmin && (e.contact.pendingAction++, o("WAWebModifyParticipantsGroupAction").demoteParticipants(n, [e]).finally(function() {
							e.contact.pendingAction--;
						}));
					}, C = s._(
						/*BTDS*/
						""
					), b = c.jsx(o("WAWebPersonShieldRemoveIcon.react").PersonShieldRemoveIcon, {});
					if (U) {
						var v, R = (v = n.groupMetadata) == null ? void 0 : v.getParentGroupChat();
						i.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
							action: function() {
								return o("WAWebOpenCommunityParticipantDemoteConfirmation").openCommunityParticipantDemoteConfirmation(e, R);
							},
							icon: b,
							testid: "mi-grp-community-demote",
							children: C
						}, "demote-admin"));
					} else i.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: y,
						icon: b,
						testid: "mi-grp-demote",
						children: C
					}, "demote-admin"));
				}
				if ($.canVerifyIdentity(e)) {
					var L = function() {
						S && S(e.contact);
					}, k = s._(
						/*BTDS*/
						""
					);
					i.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: L,
						icon: c.jsx(o("WAWebNumbersIcon.react").NumbersIcon, {}),
						testid: "mi-grp-verify-identify",
						children: k
					}, "verify-identity"));
				}
				if (o("WAWebMemberLabelsFrontendUtils").canEditMemberLabel(a, n)) {
					var I = function() {
						o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebMemberLabelCreateUpdateModalLoadable.react").MemberLabelCreateUpdateModalLoadable, {
							chat: n,
							entryPoint: o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.ENTRY_POINT.MEMBER_LIST
						}));
					};
					i.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: I,
						icon: c.jsx(r("WDSIconIcEdit.react"), {}),
						testid: "mi-grp-edit-member-label",
						children: s._(
							/*BTDS*/
							""
						)
					}, "edit-member-label"));
				}
				var T = Y.get(e.id.toString());
				o("WAWebGroupHistoryPostJoinEligibility").canSendPostJoinHistoryToParticipant(e, X, T, Z) && (o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.dropdownMenuItemDisplayed({
					recipientCount: 1,
					uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE
				}), i.push(c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.dropdownMenuItemClicked({
							recipientCount: 1,
							uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE
						}), o("WAWebGroupHistoryPostJoinSendFlow").startPostJoinSendFlow(n.id, [e], T, o("WAWebWamEnumBundleSendSource").BUNDLE_SEND_SOURCE.DROPDOWN_MENU, o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE);
					},
					icon: c.jsx(r("WDSIconIcHistory.react"), {}),
					testid: "mi-grp-send-message-history",
					children: s._(
						/*BTDS*/
						""
					)
				}, "send-message-history"))), q({
					contactId: a.id,
					menu: i,
					anchor: t.anchor,
					event: t.event
				});
			}
		}, ve = function() {
			u(o("WAWebGroupParticipantsFlow.react").ParticipantsFlowStep.Participants);
		}, Se = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(n), Re = ((t = n.groupMetadata) == null ? void 0 : t.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? N : $.length, Le = s._(
			/*BTDS*/
			"",
			[s._plural(Re, "group-participants")]
		), Ee = s._(
			/*BTDS*/
			"",
			[s._plural(Re, "number")]
		), ke = s._(
			/*BTDS*/
			""
		), Ie = s._(
			/*BTDS*/
			""
		), Te = $.length ? c.jsxs(c.Fragment, { children: [c.jsx(r("WDSSectionDivider.react"), {
			header: {
				title: Ee,
				action: c.jsx(r("WDSTooltip.react"), {
					label: Ie,
					children: c.jsx(r("WDSButton.react"), {
						variant: "borderless",
						size: "medium",
						Icon: r("WDSIconIcSearch.react"),
						onPress: ve,
						"aria-label": ke,
						testid: "group-info-participants-search"
					})
				})
			},
			testid: "section-participants"
		}), c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
			ref: O,
			testid: "group-info-participants-section",
			theme: "refresh-new",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
			children: [
				ne,
				ie,
				me,
				c.jsx(r("WAWebNavigableFlatList.react"), {
					ariaLabel: Le,
					flatListController: a,
					listData: ee,
					onRenderItem: function(t) {
						return c.jsx(C, {
							active: x.current,
							contextMenu: W,
							data: t,
							elevatedPushNamesEnabled: Se,
							handleParticipantClick: d,
							handleParticipantMenu: be,
							menuEnabled: Ce,
							participants: $,
							showMemberLabel: D,
							sourceChat: n
						});
					},
					rotateList: !0,
					selection: x.current,
					xstyle: y.flatListRefreshed
				}),
				pe,
				ce
			]
		})] }) : null, De = function() {
			q(null);
		}, xe;
		return W && (xe = c.jsx(o("WAWebUimUie.react").UIE, {
			dismissOnWindowResize: !0,
			displayName: "ChatContextMenu",
			escapable: !0,
			popable: !0,
			requestDismiss: De,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: W })
		})), c.jsxs(c.Fragment, { children: [Te, xe] });
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		return e.length > o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST;
	}
	l.default = b;
}), 226);
