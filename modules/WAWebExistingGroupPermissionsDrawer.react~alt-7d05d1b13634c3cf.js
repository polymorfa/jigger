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
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebChatValues",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.chat, a = e.groupMetadata, i = e.icon, l = e.onConfirm, s = e.onValidateChange, d = e.secondaryTitle, m = e.settingType, p = e.title, _ = function() {
			switch (m) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT: return a.announce !== !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT: return a.restrict !== !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED: return a.noFrequentlyForwarded !== !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE: return a.membershipApprovalMode === !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE: return a.reportToAdminMode === !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE: return a.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE: return a.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE: return a.memberShareGroupHistoryMode === o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.ALL_MEMBER_SHARE;
			}
			return !1;
		}, f = c(function() {
			return _();
		}), g = f[0], h = f[1];
		o("useWAWebListener").useListener(a, [
			"change:restrict",
			"change:announce",
			"change:noFrequentlyForwarded",
			"change:membershipApprovalMode",
			"change:memberAddMode",
			"change:reportToAdminMode",
			"change:memberLinkMode",
			"change:memberShareGroupHistoryMode"
		], function() {
			return h(_());
		});
		var y = function(t) {
			switch (m) {
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
		}, C = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = !g;
				(s == null || (yield s(e))) && (yield o("WAWebSetPropertyGroupAction").setGroupProperty(t, m, y(e)));
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), b = function() {
			l ? l(function() {
				return void C();
			}) : C();
		}, v = u.jsx(r("WDSSwitch.react"), {
			"aria-label": p,
			value: g,
			onChange: b,
			testid: "group_info_" + m + "_switch"
		});
		return u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: i,
			side: v,
			title: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: p }),
			secondaryTitle: u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: d })
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
		var t, a, i = e.chat, l = e.groupLinkingFlow, c = e.groupMetadata, _ = e.onClose, f = e.ref, g = o("useWAWebChatValues").useChatValues(i.id, [o("WAWebChatGetters").getId, o("WAWebChatGetters").getIsNewsletter]), h = g[0], y = g[1], C = o("useWAWebModelValues").useModelValues(c, [
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
		]), b = l != null ? l : !1, v = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = C.membershipApprovalRequests.length;
				if (e === !1 && t > 0) {
					if (!(yield o("WAWebGroupSettingsConfirmation").confirmPendingRequests())) return !1;
					var n = C.participants.length, r = o("WAWebMiscGatingUtils").getGroupSizeLimit() - n;
					if (t > r && !(yield o("WAWebGroupSettingsConfirmation").confirmGroupFull(r, t))) return !1;
				}
				return !0;
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), S = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				return !(e === !1 && !(yield o("WAWebGroupSettingsConfirmation").confirmDeleteReportsForAdminReview()));
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), R = function(t) {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebGroupLinkResetConfirmationModal.react"), { onConfirm: t }));
		}, L = !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(i) && !y && (C.reportToAdminMode || o("WAWebABProps").getABPropConfigValue("report_to_admin_enabled")), E = !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(i) && C.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD && ((t = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata((a = C.getParentGroupChat()) == null ? void 0 : a.groupMetadata)) == null ? void 0 : t.memberAddMode) !== o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD, k = o("WAWebGroupHistoryGating").isGroupHistorySettingsDecoupleEnabled(o("WAWebWidFactory").asGroupWidOrThrow(i.id)), I = !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(i) && o("WAWebGroupHistoryGating").isGroupHistorySettingsToggleUIEnabled(o("WAWebWidFactory").asGroupWidOrThrow(i.id)) && (k || C.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD), T = I ? u.jsx(d, {
			chat: i,
			groupMetadata: C,
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
			ref: f,
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
				onBack: _
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
							chat: i,
							groupMetadata: C,
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
						C.groupType !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? u.jsx(d, {
							chat: i,
							groupMetadata: C,
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT,
							icon: u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {}),
							title: s._(
								/*BTDS*/
								""
							)
						}) : null,
						u.jsx(d, {
							chat: i,
							groupMetadata: C,
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE,
							icon: u.jsx(r("WDSIconIcGroupAdd.react"), {}),
							title: s._(
								/*BTDS*/
								""
							),
							onConfirm: C.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD && C.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK ? R : void 0
						}),
						!k && T,
						E && u.jsx(d, {
							chat: i,
							groupMetadata: C,
							icon: u.jsx(r("WDSIconIcLink.react"), { testid: "ic-link" }),
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE,
							title: s._(
								/*BTDS*/
								""
							),
							onConfirm: C.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK ? R : void 0
						}),
						k && T,
						L && !b ? u.jsx(d, {
							chat: i,
							groupMetadata: C,
							settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE,
							onValidateChange: S,
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
						chat: i,
						groupMetadata: C,
						settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE,
						onValidateChange: v,
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
				C.groupType !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !b ? (function() {
					var e = s._(
						/*BTDS*/
						""
					), t = function() {
						o("WAWebGroupManageAdminModal").openManageAdminModal(i, C);
					}, n = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
						onClick: t,
						icon: u.jsx(o("WAWebPersonGearIcon.react").PersonGearIcon, {}),
						title: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: e }),
						secondaryTitle: u.jsx(p, { groupMetadata: C })
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
