__d("WAWebCommunityInfoSection.react", [
	"fbt",
	"WAWebChatCommunityUtils",
	"WAWebChatInfoDrawerSection.react",
	"WAWebCommunityCells.react",
	"WAWebCommunityHomeActionsSection.react",
	"WAWebCommunityHomeDescriptionSection.react",
	"WAWebCommunityInfoMembersSection.react",
	"WAWebCommunitySubgroupSwitcher.react",
	"WAWebGroupInfoCreatedBySection.react",
	"WAWebModalManager",
	"WAWebPeopleIcon.react",
	"WAWebSettingsIcon.react",
	"WDSIconIcGroupAdd.react",
	"WDSPaddings.stylex",
	"react",
	"useWAWebCommunitySubgroups"
], (function(t, n, r, o, a, i, l, s) {
	var e = [
		"callbacks",
		"isAdmin",
		"onAddMembersClick",
		"parentChat",
		"scrollToMemberList",
		"showFullDescription"
	], u, c = u || (u = o("react")), d = { marginBlock10: {
		marginTop: "x1anpbxc",
		marginBottom: "xyorhqc",
		$$css: !0
	} };
	function m(t) {
		var n = t.callbacks, a = t.isAdmin, i = t.onAddMembersClick, l = t.parentChat, u = t.scrollToMemberList, m = t.showFullDescription, p = babelHelpers.objectWithoutPropertiesLoose(t, e), _ = r("useWAWebCommunitySubgroups")(l.groupMetadata), f = _.subgroupCount, g = l ? c.jsx(r("WAWebCommunityHomeDescriptionSection.react"), {
			chat: l,
			showFullDescription: m
		}) : null, h, y;
		o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(l) || (!o("WAWebChatCommunityUtils").isSuspendedCommunity(l) && a && (h = c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			testid: "section-menu",
			xstyle: [d.marginBlock10, o("WDSPaddings.stylex").wdsPaddings.padding0],
			children: [c.jsx(o("WAWebCommunityCells.react").CommunityMenuButton, {
				testid: "row-manage-groups",
				Icon: r("WDSIconIcGroupAdd.react"),
				onClick: n.onManageCommunityGroupsClick,
				title: s._(
					/*BTDS*/
					""
				)
			}), c.jsx(o("WAWebCommunityCells.react").CommunityMenuButton, {
				testid: "row-community-settings",
				Icon: o("WAWebSettingsIcon.react").SettingsIcon,
				iconHeight: 20,
				onClick: n.onCommunitySettingsClick,
				title: s._(
					/*BTDS*/
					""
				)
			})]
		})), y = c.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			testid: "section-menu",
			xstyle: [d.marginBlock10, o("WDSPaddings.stylex").wdsPaddings.padding0],
			children: c.jsx(o("WAWebCommunityCells.react").CommunityMenuButton, {
				testid: "row-view-groups",
				Icon: o("WAWebPeopleIcon.react").PeopleIcon,
				onClick: function() {
					o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCommunitySubgroupSwitcher.react"), { parentChat: l }));
				},
				title: s._(
					/*BTDS*/
					"",
					[s._param("subgroup-count", f, [0])]
				)
			})
		}));
		var C = o("WAWebChatCommunityUtils").isSuspendedCommunity(l) ? null : c.jsx(r("WAWebCommunityInfoMembersSection.react"), babelHelpers.extends({
			parentChat: l,
			onInviteMembersClick: n.onInviteMembersClick,
			onAddMembersClick: i,
			scrollToMemberList: u
		}, p)), b = l ? c.jsx(r("WAWebCommunityHomeActionsSection.react"), {
			chat: l,
			onBack: n.onBack,
			onDeactivateCommunity: n.onDeactivateCommunity,
			onTransferOwnership: n.onTransferOwnership
		}) : null;
		return c.jsxs(c.Fragment, { children: [
			g,
			h,
			y,
			C,
			b,
			c.jsx(r("WAWebGroupInfoCreatedBySection.react"), { chat: l })
		] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
