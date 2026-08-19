__d("WAWebSuspendedCommunityModal.react", [
	"fbt",
	"WAWebABPropsSaga",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebChatCommunityUtils",
	"WAWebCommunitySquircleIcon.react",
	"WAWebConfirmPopup.react",
	"WAWebContactFormWrapper.react",
	"WAWebCxtUrl",
	"WAWebDeactivateCommunityDrawerLoadable",
	"WAWebDrawerManager",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebGroupIntegrityUtils",
	"WAWebIcHelpFilledIcon.react",
	"WAWebLeaveCommunityModalUtils",
	"WAWebModalManager",
	"WAWebSettingsBlockedIcon.react",
	"WAWebSupportAiSessionWamEvent",
	"WAWebSuspendedCommunityUtils",
	"WAWebSuspendedGroupUtils",
	"WAWebText.react",
	"WAWebWamEnumGroupSuspensionAppealUiAction",
	"WAWebWamEnumGroupSuspensionAppealUiSurface",
	"WAWebWamEnumSupportAiEventType",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
		community: {
			color: "x17k9de1",
			$$css: !0
		},
		icon: {
			color: "xshy2n",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			minWidth: "x1hxoosp",
			$$css: !0
		},
		badge: {
			zIndex: "x12xzxwr",
			bottom: "x1c56n8",
			insetInlineEnd: "xptjn4f",
			left: null,
			right: null,
			position: "x1n2onr6",
			marginInlineEnd: "xhg6vv5",
			color: "x30a034",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x1p8t8ri",
			$$css: !0
		},
		marginTop20: {
			marginTop: "x1nmyh1g",
			$$css: !0
		}
	};
	function m(e) {
		c(function() {
			o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: e,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SUSPENSION_BOTTOM_SHEET_IMPRESSION,
				uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.COMMUNITY_SUSPENSION_BOTTOM_SHEET
			});
		}, [e]);
	}
	function p(e) {
		var t, n = e.community;
		m(n);
		var a = function() {
			var e;
			o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: n,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.CONTACT_SUPPORT_CLICK,
				uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.COMMUNITY_SUSPENSION_BOTTOM_SHEET
			}), o("WAWebModalManager").ModalManager.close(), o("WAWebABPropsSaga").getIsSagaV1Enabled() && new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED }).commit(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebContactFormWrapper.react"), {
				supportTag: o("WAWebSuspendedCommunityUtils").SUSPENDED_COMMUNITY_SUPPORT_TAG,
				entityId: (e = n.groupMetadata) == null ? void 0 : e.id.user
			}), { transition: "modal-flow" });
		}, i = function() {
			o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: n,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.DEACTIVATE_COMMUNITY,
				uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.COMMUNITY_SUSPENSION_BOTTOM_SHEET
			}), o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "deactivate_community",
				chat: n
			} : u.jsx(o("WAWebDeactivateCommunityDrawerLoadable").DeactivateCommunityDrawerLoadable, {
				onBack: o("WAWebDrawerManager").closeDrawerRight,
				chat: n
			}));
		}, l = function() {
			o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: n,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.LEAVE_COMMUNITY_CLICK,
				uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.COMMUNITY_SUSPENSION_BOTTOM_SHEET
			}), o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({ chat: n });
		}, c = u.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			children: [u.jsx(o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon, {
				width: 100,
				height: 100,
				iconXstyle: d.community
			}), u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, {
				width: 42,
				height: 42,
				xstyle: d.badge,
				directional: !0
			})]
		}), p = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
				xstyle: d.marginTop20,
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), _ = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			margin: 16,
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m0", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebCxtUrl").getCommunityNotAvailableFaqUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			) })
		}), f = [];
		(t = n.groupMetadata) != null && t.participants.iAmAdmin() && f.push({
			testId: "suspended-community-appeal-row",
			icon: o("WAWebIcHelpFilledIcon.react").IcHelpFilledIcon,
			content: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), {
					onClick: a,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		}), f.push({
			testId: "suspended-community-operations-restricted-row",
			icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
			content: s._(
				/*BTDS*/
				""
			)
		});
		var g = s._(
			/*BTDS*/
			""
		), h = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(n) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), y = function() {
			o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: n,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_GROUP_CLICK,
				uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.COMMUNITY_SUSPENSION_BOTTOM_SHEET
			}), o("WAWebModalManager").closeModalManager();
		}, C = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(n) ? i : l, b = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(n) ? "solid-warning" : "primary";
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "suspended-community"
			},
			onOK: C,
			okText: h,
			cancelText: g,
			onCancel: y,
			okButtonType: b,
			children: [
				c,
				p,
				u.jsx(o("WAWebFlex.react").FlexColumn, { children: f.map(function(e) {
					var t = e.content, n = e.icon, r = e.testId;
					return u.jsx(o("WAWebGroupIntegrityUtils").SuspendedModalBodyParagraph, {
						testId: r,
						icon: u.jsx(n, {
							xstyle: d.icon,
							directional: !0
						}),
						content: t
					}, r);
				}) }),
				_
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.SuspendedCommunityModal = p;
}), 226);
