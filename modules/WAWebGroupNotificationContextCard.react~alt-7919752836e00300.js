__d("WAWebGroupNotificationContextCard.react", [
	"fbt",
	"WAUnicodeUtils",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebButton.react",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebCommunitySubgroupInviteLinkRestriction",
	"WAWebContactCollection",
	"WAWebConversationSpamUtils",
	"WAWebDetailImage.react",
	"WAWebDrawerManager",
	"WAWebEmojiText.react",
	"WAWebExistingGroupPermissionsDrawer.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFormatConfiguration",
	"WAWebFrontendChatGetters",
	"WAWebGroupGatingUtils",
	"WAWebGroupInfoPhoto.react",
	"WAWebGroupInviteLinkDrawerLoadable",
	"WAWebGroupMemberLinkMode",
	"WAWebGroupNotificationContextCardActions.react",
	"WAWebGroupProfilePictureWamEvent",
	"WAWebGroupSafetyToolsModal.react",
	"WAWebGroupType",
	"WAWebInfoShieldIcon.react",
	"WAWebKeyboardTabUtils",
	"WAWebL10N",
	"WAWebLinkify",
	"WAWebModalManager",
	"WAWebOpenAddParticipantModalFlow",
	"WAWebOpenLeaveAndReportGroupModal",
	"WAWebPhotoViewerModal.react",
	"WAWebProfilePicThumbCollection",
	"WAWebReachoutTimelockRestrictedModalLoadable",
	"WAWebReachoutTimelockUtils",
	"WAWebSpamConstants",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebTrustSignalsUtils",
	"WAWebUnstyledButton.react",
	"WAWebWamEnumGroupProfileActionType",
	"WAWebWamNumberToPreciseSizeBucket",
	"WDSButtonGroup.react",
	"WDSIconIcLogout.react",
	"WDSIconIcPhotoCamera.react",
	"nullthrows",
	"react",
	"useWAWebAddParticipantsSelectedContacts",
	"useWAWebChatValues",
	"useWAWebEventTargetValue",
	"useWAWebFocusOnMount",
	"useWAWebForceUpdate",
	"useWAWebGroupParticipantStatus",
	"useWAWebIAmGroupMember",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = {
		container: {
			textAlign: "x2b8uid",
			maxWidth: "x1rjt51p",
			width: "xh8yej3",
			$$css: !0
		},
		descriptionText: {
			whiteSpace: "xeaf4i8",
			$$css: !0
		},
		editLink: {
			color: "x1v5yvga",
			fontWeight: "x1s688f",
			$$css: !0
		},
		breakText: {
			boxSizing: "x9f619",
			wordBreak: "x1yn0g08",
			$$css: !0
		},
		paddingTop12: {
			paddingTop: "x1xrf6ya",
			$$css: !0
		},
		paddingTop4: {
			paddingTop: "x1tiyuxx",
			$$css: !0
		}
	}, _ = 70;
	function f(e) {
		var t = e.chat, n = e.msg, a = o("useWAWebModelValues").useModelValues(t, ["trusted"]), i = r("useWAWebFocusOnMount")();
		m(function() {
			o("WAWebCmd").Cmd.groupNotificationContextCardRendered(n.id);
		}, [n.id]);
		var l = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: p.container,
			align: "center",
			testid: "group-notification-context-card",
			children: [
				u.jsx(h, { chat: t }),
				u.jsx(y, {
					chat: t,
					msg: n
				}),
				u.jsx(C, {
					chat: t,
					msg: n
				}),
				u.jsx(b, { chat: t }),
				u.jsx(v, { chat: t })
			]
		});
		return a.trusted ? l : u.jsx("div", {
			ref: i,
			role: "alert",
			tabIndex: -1,
			"data-testid": "group-notification-context-card-suspicious-alert",
			children: l
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = function(t) {
		var e, n, r, a = t == null ? void 0 : t.participants, i = (e = a == null ? void 0 : a.length) != null ? e : 0, l = (n = t == null ? void 0 : t.size) != null ? n : 0, s = a != null && a.iAmAdmin() ? i : l, u = o("WAWebWamNumberToPreciseSizeBucket").numberToPreciseSizeBucket(s), c = t == null ? void 0 : t.creation, d = new Date((c != null ? c : 0) * 1e3), m = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d), p = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d), _ = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d), f = c != null ? m + "-" + p + "-" + _ : "", g = (r = a == null ? void 0 : a.iAmAdmin()) != null ? r : !1;
		new (o("WAWebGroupProfilePictureWamEvent")).GroupProfilePictureWamEvent({
			groupCreationDs: f,
			groupProfileAction: o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_VIEW_PHOTO,
			preciseGroupSizeBucket: u,
			isAdmin: g,
			hasProfilePicture: !0
		}).commit();
	};
	function h(e) {
		"use no forget";
		var t = e.chat, n = o("useWAWebModelValues").useModelValues(t, [
			"id",
			"groupMetadata",
			"contact",
			"trusted"
		]), a = o("useWAWebModelValues").useModelValues(r("nullthrows")(t.groupMetadata, "Chat groupMetadata is null in ContextCardPhoto"), [
			"size",
			"creation",
			"participants"
		]), i = a == null ? void 0 : a.participants, l = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(i, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", l);
		var s = r("useWAWebIAmGroupMember")(a), c = u.createRef(), d = function() {
			g(a);
			var e = c.current;
			if (!(!e || !n.id)) {
				var t = function(n) {
					n(e);
				}, i = o("WAWebContactCollection").ContactCollection.assertGet(n.id);
				o("WAWebModalManager").ModalManager.openMedia(u.jsx(r("WAWebPhotoViewerModal.react"), {
					contact: i,
					profilePicThumb: i.getProfilePicThumb(),
					animateBorderRadius: !0,
					getZoomNode: t
				}), { transition: "profile-viewer" });
			}
		}, m = r("useWAWebEventTargetValue")(o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection, ["change:img"], function() {
			var e;
			return ((e = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(n.id)) == null ? void 0 : e.img) != null;
		});
		return m ? u.jsx("div", {
			ref: c,
			children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: n.id,
				onClick: d,
				shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
				quality: o("WAWebDetailImage.react").DetailImageQuality.High,
				size: 88,
				showOutline: !0,
				tabIndex: 0,
				testId: "group-notification-context-card-photo"
			})
		}) : u.jsx(r("WAWebGroupInfoPhoto.react"), {
			chat: n,
			forceClickable: !0,
			HoverIcon: r("WDSIconIcPhotoCamera.react"),
			showAddIconOverlay: !1,
			size: 88,
			testid: "group-notification-context-card-photo-picker",
			readOnly: !n.trusted || !s
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.chat, n = e.msg, r;
		switch (n.subtype) {
			case "create":
				r = s._(
					/*BTDS*/
					""
				);
				break;
			case "add":
				r = n.author ? u.jsx(o("WAWebTrustSignalsUtils").AddGroupCardTitle, {
					chat: t,
					contactId: n.author
				}) : null;
				break;
			case "invite":
				r = s._(
					/*BTDS*/
					""
				);
				break;
		}
		return u.jsx(o("WAWebText.react").WAWebTextLarge, {
			xstyle: [p.breakText, p.paddingTop12],
			weight: "medium",
			testid: "group-notification-context-card-title",
			children: r
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		"use no forget";
		var t = e.chat, n = e.msg, a = o("useWAWebChatValues").useChatValues(t.id, [
			o("WAWebFrontendChatGetters").getGroupMetadata,
			o("WAWebFrontendChatGetters").getTrusted,
			o("WAWebChatGetters").getIsGroup
		]), i = a[0], l = a[1], c = a[2], d = o("useWAWebModelValues").useModelValues(r("nullthrows")(t.groupMetadata, "Chat groupMetadata is null in ContextCardSubtitle"), [
			"groupType",
			"owner",
			"participants",
			"creation",
			"size"
		]), m = d.participants, _ = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(m, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", _);
		var f = d.groupType, g = s._(
			/*BTDS*/
			""
		);
		f === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && (g = s._(
			/*BTDS*/
			""
		));
		var h = o("WAWebTrustSignalsUtils").numberOfMembers(d), y = o("WAWebTrustSignalsUtils").useCreatedAt(t, n.author), C;
		n.subtype === "create" ? d.isSuspendedOrTerminated() || (C = h) : C = y;
		var b = u.jsxs(u.Fragment, { children: [
			!l && u.jsxs(u.Fragment, { children: [s._(
				/*BTDS*/
				""
			), r("WAWebL10N").isRTL() ? " -\xA0" : " ·\xA0"] }),
			g,
			C != null && u.jsxs(u.Fragment, { children: [r("WAWebL10N").isRTL() ? " -\xA0" : " ·\xA0", C] })
		] }), v = h;
		return b = u.jsxs(u.Fragment, { children: [
			v != null && u.jsxs(u.Fragment, { children: [h, " ·\xA0"] }),
			o("WAWebTrustSignalsUtils").numberOfContacts(m),
			y != null && u.jsxs(u.Fragment, { children: [" ·\xA0", y] })
		] }), u.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: "secondaryLighter",
			testid: "group-notification-context-card-subtitle",
			xstyle: [p.breakText, p.paddingTop4],
			children: b
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t, n, a = e.chat, i = o("useWAWebModelValues").useModelValues(a, ["groupMetadata", "trusted"]), l = o("useWAWebModelValues").useModelValues(r("nullthrows")(i.groupMetadata, "Chat groupMetadata is null in ContextCardDescription"), [
			"displayedDesc",
			"memberLinkMode",
			"parentGroup",
			"participants"
		]), c = (t = (n = l.participants) == null ? void 0 : n.iAmAdmin()) != null ? t : !1, m = r("useWAWebEventTargetValue")(l, ["change:desc"], function() {
			return l.displayedDesc;
		}), f = d(function() {
			o("WAWebCmd").Cmd.editGroupDescription(), o("WAWebCmd").Cmd.chatInfoDrawer(a, { focusGroupDescriptionOnMount: !0 });
		}, [a]), g = d(function() {
			o("WAWebCmd").Cmd.chatInfoDrawer(a);
		}, [a]), h = d(function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "existing_group_permissions",
				chat: a,
				groupMetadata: r("nullthrows")(a.groupMetadata)
			} : u.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
				chat: a,
				groupMetadata: r("nullthrows")(a.groupMetadata),
				onClose: o("WAWebDrawerManager").closeDrawerRight
			}), {
				transition: "slide-left",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			});
		}, [a]), y = l.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK && o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled(), C = o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupInviteLinkRestrictedByParentCommunity(l), b = y && !C;
		if (!m && l.canSetDescription()) return i.trusted ? b && c ? u.jsx("div", {
			className: "x1nxh6w3 xcgms0a x9f619 x1yn0g08 x1xrf6ya",
			children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
				testid: "group-notification-context-card-anyone-can-link-description",
				children: s._(
					/*BTDS*/
					"",
					[s._param("edit_link", u.jsx(r("WAWebUnstyledButton.react"), {
						onClick: h,
						xstyle: p.editLink,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			})
		}) : u.jsx("div", {
			className: "x1nxh6w3 xcgms0a x9f619 x1yn0g08 x1xrf6ya",
			children: u.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
				onClick: f,
				testid: "group-notification-context-card-add-description-button",
				children: u.jsx("span", {
					className: "xdx6fka xvtqlqk",
					children: s._(
						/*BTDS*/
						""
					)
				})
			})
		}) : null;
		var v = o("WAUnicodeUtils").numCodepoints(m) > _;
		return u.jsxs("div", {
			className: "x1nxh6w3 xcgms0a x9f619 x1yn0g08 x1xrf6ya",
			children: [u.jsx(o("WAWebEmojiText.react").EmojiText, {
				xstyle: p.descriptionText,
				testid: "group-notification-context-card-description",
				text: m,
				textLimit: _,
				ellipsify: !0,
				direction: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
				inferLinesDirection: !0,
				selectable: !0,
				emojiSize: o("WAWebEmojiText.react").EMOJI_SIZE.SMALL,
				formatters: i.trusted ? o("WAWebFormatConfiguration").TrustedGroupDesc({
					links: o("WAWebLinkify").findLinks(m),
					bulletPointsEnabled: !1
				}) : o("WAWebFormatConfiguration").UntrustedGroupDesc({ bulletPointsEnabled: !1 })
			}), v && u.jsxs(u.Fragment, { children: [" ", u.jsx(r("WAWebUnstyledButton.react"), {
				onClick: g,
				children: u.jsx("span", {
					className: "x1xtgsr3 x1s688f",
					children: s._(
						/*BTDS*/
						""
					)
				})
			})] })]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.chat, n = o("useWAWebModelValues").useModelValues(t, ["groupMetadata", "trusted"]), a = o("useWAWebModelValues").useModelValues(r("nullthrows")(n.groupMetadata, "Chat groupMetadata is null in ContextCardActions"), [
			"isUnnamed",
			"groupType",
			"participants",
			"support",
			"memberLinkMode"
		]), i = r("useWAWebEventTargetValue")(a, ["change:subject"], function() {
			return a.isUnnamed;
		}), l = r("useWAWebGroupParticipantStatus")(a), c = l[0], m = r("useWAWebIAmGroupMember")(a), p = d(function() {
			o("WAWebCmd").Cmd.editGroupSubject(), o("WAWebCmd").Cmd.chatInfoDrawer(t, { focusGroupSubjectOnMount: !0 });
		}, [t]), _ = d(function() {
			o("WAWebCmd").Cmd.chatInfoDrawer(t);
		}, [t]), f = d(function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(o("WAWebGroupInviteLinkDrawerLoadable").GroupInviteLinkDrawerLoadable, {
				chat: t,
				groupMetadata: r("nullthrows")(n.groupMetadata),
				onBack: o("WAWebDrawerManager").closeDrawerRight,
				onGroupSettings: function() {
					return o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
						descriptorType: "existing_group_permissions",
						chat: t,
						groupMetadata: r("nullthrows")(n.groupMetadata)
					} : u.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
						chat: t,
						groupMetadata: r("nullthrows")(n.groupMetadata),
						onClose: o("WAWebDrawerManager").closeDrawerRight
					}));
				}
			}));
		}, [t, n.groupMetadata]), g = r("useWAWebAddParticipantsSelectedContacts")(), h = g.handleClearSelectedContacts, y = g.selectedContactsMap, C = g.updateSelectedContactsState, b = function() {
			var e;
			if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
				return;
			}
			var n = (e = a.getParentGroupChat()) == null ? void 0 : e.formattedTitle;
			o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
				groupMetadata: a,
				chat: t,
				communityName: n,
				selectedContactsMap: y,
				updateSelectedContactsState: C,
				reopenAddGroupFlowCallback: b,
				handleClearSelectedContacts: h
			});
		};
		if (!m || n.isTrusted()) return u.jsx(o("WAWebGroupNotificationContextCardActions.react").GroupNotificationContextCardActions, {
			chat: t,
			groupMetadata: a,
			isUnnamed: i,
			canAddParticipants: c,
			onAddNameClick: p,
			onAddGroupMembersClick: b,
			onGroupInfoClick: _,
			onInviteViaLinkClick: f
		});
		var v = function() {
			o("WAWebGroupSafetyToolsModal.react").displayGroupSafetyToolsModal();
		}, S = function() {
			o("WAWebOpenLeaveAndReportGroupModal").openLeaveAndReportGroupModal(t, o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeave);
		}, R = function() {
			o("WAWebConversationSpamUtils").acknowledgeGroupAsNotSpam(t);
		}, L = u.jsxs(o("WAWebButton.react").WAWebButtonSecondaryDestructive, {
			onClick: S,
			nowrap: !1,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
			testid: "group-notification-context-card-leave-group-button",
			children: [u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }), r("WAWebFbtCommon")("Exit Group")]
		}), E = !n.trusted, k = E ? u.jsx(r("WDSButtonGroup.react"), {
			orientation: "horizontal",
			primaryButtonProps: {
				variant: "outline",
				type: "default",
				onPress: R,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
				testid: "group-notification-context-card-stay-group-button",
				label: s._(
					/*BTDS*/
					""
				)
			},
			secondaryButtonProps: {
				variant: "outline",
				type: "destructive",
				onPress: S,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
				testid: "group-notification-context-card-leave-group-button",
				Icon: r("WDSIconIcLogout.react"),
				directional: !0,
				label: r("WAWebFbtCommon")("Exit Group")
			}
		}) : L;
		return u.jsxs(o("WAWebButton.react").ButtonGroup, {
			direction: "vertical",
			align: "center",
			paddingTop: 12,
			style: { minWidth: 160 },
			children: [u.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
				onClick: v,
				icon: o("WAWebInfoShieldIcon.react").InfoShieldIcon,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
				testid: "group-notification-context-card-safety-tools-button",
				children: s._(
					/*BTDS*/
					""
				)
			}), k]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = f;
}), 226);
