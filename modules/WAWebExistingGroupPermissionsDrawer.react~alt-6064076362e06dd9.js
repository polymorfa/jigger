__d("WAWebExistingGroupPermissionsDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatRefreshedIcon.react",
	"WAWebCommunityAnnouncementGroupUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebFaqUrl",
	"WAWebFbtIntlList",
	"WAWebGroupConstants",
	"WAWebGroupHistoryGating",
	"WAWebGroupHistoryShareMode",
	"WAWebGroupLinkResetConfirmationModal.react",
	"WAWebGroupManageAdminModal",
	"WAWebGroupMemberLinkMode",
	"WAWebGroupSettingsConfirmation",
	"WAWebGroupType",
	"WAWebMessageReportRefreshedIcon.react",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebParticipantListUtils",
	"WAWebPencilRefreshedIcon.react",
	"WAWebPersonClockIcon.react",
	"WAWebPersonGearIcon.react",
	"WAWebSchemaGroupMetadata",
	"WAWebSetPropertyGroupAction",
	"WAWebText.react",
	"WAWebWidFactory",
	"WDSIconIcGroupAdd.react",
	"WDSIconIcHistory.react",
	"WDSIconIcLink.react",
	"WDSPaddings.stylex",
	"WDSSwitch.react",
	"WDSTextualLink.react",
	"react",
	"useWAWebChatValues",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.chat, n = e.groupMetadata, a = e.icon, i = e.onConfirm, l = e.onValidateChange, s = e.secondaryTitle, d = e.settingType, m = e.title, p = function() {
			switch (d) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT: return n.announce !== !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT: return n.restrict !== !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED: return n.noFrequentlyForwarded !== !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE: return n.membershipApprovalMode === !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE: return n.reportToAdminMode === !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE: return n.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE: return n.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE: return n.memberShareGroupHistoryMode === o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.ALL_MEMBER_SHARE;
			}
			return !1;
		}, _ = c(function() {
			return p();
		}), f = _[0], g = _[1];
		o("useWAWebListener").useListener(n, [
			"change:restrict",
			"change:announce",
			"change:noFrequentlyForwarded",
			"change:membershipApprovalMode",
			"change:memberAddMode",
			"change:reportToAdminMode",
			"change:memberLinkMode",
			"change:memberShareGroupHistoryMode"
		], function() {
			return g(p());
		});
		var h = function(t) {
			switch (d) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT: return t ? 0 : 1;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT: return t ? 0 : 1;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED: return t ? 0 : 1;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE: return t ? 1 : 0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE: return t ? 1 : 0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE: return t ? 1 : 0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE: return t ? 1 : 0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE: return t ? 1 : 0;
			}
			return 0;
		}, y = async function() {
			var e = !f;
			(l == null || await l(e)) && await o("WAWebSetPropertyGroupAction").setGroupProperty(t, d, h(e));
		}, C = function() {
			i ? i(function() {
				return void y();
			}) : y();
		}, b = u.jsx(r("WDSSwitch.react"), {
			"aria-label": m,
			value: f,
			onChange: C,
			testid: "group_info_" + d + "_switch"
		});
		return u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: a,
			side: b,
			title: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: m }),
			secondaryTitle: u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: s })
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.title;
		return u.jsx("div", {
			className: "x78zum5 x6s0dn4 x1vqgdyp x1280gxy x162tt16 x5zjp28",
			children: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
				color: "wdsContentDeemphasized",
				children: t
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.groupMetadata, n = c(o("WAWebParticipantListUtils").calculateAdminsList(t)), a = n[0], i = n[1];
		o("useWAWebListener").useListener(t.participants, "change:isAdmin", function() {
			return i(o("WAWebParticipantListUtils").calculateAdminsList(t));
		});
		var l = r("WAWebFbtIntlList")(a, r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA), s = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: l,
			ellipsify: !0
		});
		return u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: s });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t, n, a = e.chat, i = e.groupLinkingFlow, l = e.groupMetadata, c = e.onClose, _ = e.ref, f = o("useWAWebChatValues").useChatValues(a.id, [o("WAWebChatGetters").getId, o("WAWebChatGetters").getIsNewsletter]), g = f[0], h = f[1], y = o("useWAWebModelValues").useModelValues(l, [
			"restrict",
			"announce",
			"noFrequentlyForwarded",
			"participants",
			"owner",
			"groupType",
			"isParentGroup",
			"membershipApprovalMode",
			"reportToAdminMode",
			"memberAddMode",
			"memberLinkMode",
			"membershipApprovalRequests",
			"participants",
			"hasCapi",
			"memberShareGroupHistoryMode",
			"isOpenBotGroup"
		]), C = i != null ? i : !1, b = async function(t) {
			var e = y.membershipApprovalRequests.length;
			if (t === !1 && e > 0) {
				if (!await o("WAWebGroupSettingsConfirmation").confirmPendingRequests()) return !1;
				var n = y.participants.length, r = o("WAWebMiscGatingUtils").getGroupSizeLimit() - n;
				if (e > r && !await o("WAWebGroupSettingsConfirmation").confirmGroupFull(r, e)) return !1;
			}
			return !0;
		}, v = async function(t) {
			return !(t === !1 && !await o("WAWebGroupSettingsConfirmation").confirmDeleteReportsForAdminReview());
		}, S = function(t) {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebGroupLinkResetConfirmationModal.react"), { onConfirm: t }));
		}, R = !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) && !h && (y.reportToAdminMode || o("WAWebABProps").getABPropConfigValue("report_to_admin_enabled")), L = !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) && y.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD && ((t = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata((n = y.getParentGroupChat()) == null ? void 0 : n.groupMetadata)) == null ? void 0 : t.memberAddMode) !== o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD, E = o("WAWebGroupHistoryGating").isGroupHistorySettingsDecoupleEnabled(o("WAWebWidFactory").asGroupWidOrThrow(a.id)), k = !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) && o("WAWebGroupHistoryGating").isGroupHistorySettingsToggleUIEnabled(o("WAWebWidFactory").asGroupWidOrThrow(a.id)) && (E || y.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD), I = k ? u.jsx(d, {
			chat: a,
			groupMetadata: y,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE,
			icon: u.jsx(r("WDSIconIcHistory.react"), { testid: "group_message_history_setting_icon" }),
			title: s._(
				/*BTDS*/
				""
			),
			secondaryTitle: s._(
				/*BTDS*/
				""
			)
		}) : null;
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: _,
			theme: "striped",
			testid: "group-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "existing-group-permissions"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: c
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [
				u.jsx(m, { title: s._(
					/*BTDS*/
					""
				) }),
				u.jsxs(r("WAWebDrawerSection.react"), {
					animation: !1,
					xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
					theme: "refresh-new",
					children: [
						u.jsx(d, {
							chat: a,
							groupMetadata: y,
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT,
							icon: u.jsx(o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon, {}),
							title: s._(
								/*BTDS*/
								""
							),
							secondaryTitle: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
								/*BTDS*/
								""
							) })
						}),
						y.groupType !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? u.jsx(d, {
							chat: a,
							groupMetadata: y,
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT,
							icon: u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {}),
							title: s._(
								/*BTDS*/
								""
							)
						}) : null,
						u.jsx(d, {
							chat: a,
							groupMetadata: y,
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE,
							icon: u.jsx(r("WDSIconIcGroupAdd.react"), {}),
							title: s._(
								/*BTDS*/
								""
							),
							onConfirm: y.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD && y.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK ? S : void 0
						}),
						!E && I,
						L && u.jsx(d, {
							chat: a,
							groupMetadata: y,
							icon: u.jsx(r("WDSIconIcLink.react"), { testid: "ic-link" }),
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE,
							title: s._(
								/*BTDS*/
								""
							),
							onConfirm: y.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK ? S : void 0
						}),
						E && I,
						R && !C ? u.jsx(d, {
							chat: a,
							groupMetadata: y,
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE,
							onValidateChange: v,
							icon: u.jsx(o("WAWebMessageReportRefreshedIcon.react").MessageReportRefreshedIcon, {}),
							title: s._(
								/*BTDS*/
								""
							),
							secondaryTitle: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
								/*BTDS*/
								"",
								[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), {
									href: o("WAWebFaqUrl").getReportToAdminFaqUrl(),
									children: s._(
										/*BTDS*/
										""
									)
								}))]
							) })
						}) : null
					]
				}),
				u.jsx(m, { title: s._(
					/*BTDS*/
					""
				) }),
				u.jsx(r("WAWebDrawerSection.react"), {
					animation: !1,
					theme: "refresh-new",
					xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
					children: u.jsx(d, {
						chat: a,
						groupMetadata: y,
						settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE,
						onValidateChange: b,
						icon: u.jsx(o("WAWebPersonClockIcon.react").PersonClockIcon, {}),
						title: s._(
							/*BTDS*/
							""
						),
						secondaryTitle: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), {
								href: o("WAWebFaqUrl").getMembershipApprovalModeFaqUrl(),
								children: s._(
									/*BTDS*/
									""
								)
							}))]
						) })
					})
				}),
				y.groupType !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !C ? (function() {
					var e = s._(
						/*BTDS*/
						""
					), t = function() {
						o("WAWebGroupManageAdminModal").openManageAdminModal(a, y);
					}, n = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
						onClick: t,
						icon: u.jsx(o("WAWebPersonGearIcon.react").PersonGearIcon, {}),
						title: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: e }),
						secondaryTitle: u.jsx(p, { groupMetadata: y })
					});
					return u.jsxs(u.Fragment, { children: [u.jsx(m, { title: s._(
						/*BTDS*/
						""
					) }), u.jsx(r("WAWebDrawerSection.react"), {
						animation: !1,
						theme: "refresh-new",
						xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
						children: n
					})] });
				})() : null
			] })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
