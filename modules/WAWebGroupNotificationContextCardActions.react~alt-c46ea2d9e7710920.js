__d("WAWebGroupNotificationContextCardActions.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebCommunitySubgroupInviteLinkRestriction",
	"WAWebGroupGatingUtils",
	"WAWebGroupMemberLinkMode",
	"WAWebGroupMemberTagUpdateLogger",
	"WAWebGroupNotificationContextCardActionsUtils",
	"WAWebIcAddCircleIcon.react",
	"WAWebMemberLabelCreateUpdateModalLoadable.react",
	"WAWebMemberLabelGating",
	"WAWebMemberLabelHooks",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebPencilIcon.react",
	"WAWebWamEnumTsSurface",
	"WDSButtonGroup.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLink.react",
	"WDSIconIcPersonAdd.react",
	"react",
	"useWAWebIAmGroupMember"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		return u.jsx(o("WAWebIcAddCircleIcon.react").IcAddCircleIcon, babelHelpers.extends({ viewBox: {
			x: 0,
			y: 0,
			width: 24,
			height: 24
		} }, e));
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = { buttonGroupContainer: {
		minWidth: "x5w4yej",
		columnGap: "xfex06f",
		rowGap: "x3pnbk8",
		$$css: !0
	} };
	function p(e) {
		var t = e.canAddParticipants, n = e.chat, a = e.groupMetadata, i = e.isUnnamed, l = e.onAddGroupMembersClick, p = e.onAddNameClick, _ = e.onGroupInfoClick, f = e.onInviteViaLinkClick, g = c(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebMemberLabelCreateUpdateModalLoadable.react").MemberLabelCreateUpdateModalLoadable, {
				chat: n,
				entryPoint: o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.ENTRY_POINT.NEW_MEMBER_PROMPT,
				uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD
			}));
		}, [n]), h = r("useWAWebIAmGroupMember")(a), y = o("WAWebMemberLabelHooks").useHasSelfMemberLabelForChat(n), C = h && !y && o("WAWebMemberLabelGating").isMemberLabelSenderEnabled(), b = o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupInviteLinkRestrictedByParentCommunity(a), v = t && !a.support, S = a.canSetSubject() && i, R = a.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK && o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled(), L = h && R && !b, E = {
			name: {
				available: S,
				onPress: p,
				icon: o("WAWebPencilIcon.react").PencilIcon,
				testid: "group-notification-context-card-add-name-button",
				label: s._(
					/*BTDS*/
					""
				),
				shadowOnHover: !1
			},
			addMembers: {
				available: v,
				onPress: l,
				icon: r("WDSIconIcPersonAdd.react"),
				testid: "group-notification-context-card-add-members-button",
				label: s._(
					/*BTDS*/
					""
				)
			},
			memberTag: {
				available: C,
				onPress: g,
				icon: d,
				testid: "group-notification-context-card-add-member-tag-button",
				label: s._(
					/*BTDS*/
					""
				),
				useVerticalLayout: !0
			},
			groupInfo: {
				available: !0,
				onPress: _,
				icon: r("WDSIconIcInfo.react"),
				testid: "group-notification-context-card-group-info-button",
				label: s._(
					/*BTDS*/
					""
				)
			},
			inviteViaLink: {
				available: L,
				onPress: f != null ? f : r("WAWebNoop"),
				icon: r("WDSIconIcLink.react"),
				testid: "group-notification-context-card-invite-via-link-button",
				label: s._(
					/*BTDS*/
					""
				),
				useVerticalLayout: !0
			}
		}, k = o("WAWebGroupNotificationContextCardActionsUtils").getGroupNotificationButtonConfig(E), I = k.firstConfig, T = k.secondConfig, D = k.useVerticalLayout;
		if (T != null) {
			var x = I != null ? I : T, $ = {
				variant: "outline",
				type: "default"
			}, P = D ? [x, T] : [T, x], N = P[0], M = P[1];
			return u.jsx("div", babelHelpers.extends({}, {
				0: { className: "x78zum5 x1q0g3np x1qjc9v5 xl56j7k x1a02dak xyamay9 x5w4yej xfex06f x3pnbk8" },
				1: { className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k xyamay9 x5w4yej x3pnbk8 xh8yej3" }
			}[!!D << 0], { children: u.jsx(r("WDSButtonGroup.react"), {
				width: D ? "fill" : "hug",
				orientation: D ? "stacked" : "horizontal",
				primaryButtonProps: babelHelpers.extends({}, $, {
					onPress: N.onPress,
					Icon: N.icon,
					testid: N.testid,
					label: N.label
				}),
				secondaryButtonProps: babelHelpers.extends({}, $, {
					onPress: M.onPress,
					Icon: M.icon,
					testid: M.testid,
					label: M.label
				})
			}) }));
		}
		var w = function(t) {
			return t != null && u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
				onClick: t.onPress,
				icon: t.icon,
				shadowOnHover: t.shadowOnHover,
				testid: t.testid,
				children: t.label
			});
		};
		return u.jsxs(o("WAWebButton.react").ButtonGroup, {
			direction: D ? "vertical" : "horizontal",
			align: "stretch",
			justify: "center",
			wrap: "wrap",
			paddingTop: 16,
			xstyle: m.buttonGroupContainer,
			children: [w(I), w(T)]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.GroupNotificationContextCardActions = p;
}), 226);
