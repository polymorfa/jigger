__d("WAWebSuspendedGroupRedesignModal.react", [
	"fbt",
	"WAWebCxtUrl",
	"WAWebDeactivateCommunityDrawerLoadable",
	"WAWebDrawerManager",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebGroupSuspendCommonStrings",
	"WAWebLeaveCommunityModalUtils",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebSuspendedGroupUtils",
	"WAWebWamEnumGroupSuspensionAppealUiAction",
	"WAWebWamEnumGroupSuspensionAppealUiSurface",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSIconIcBlock.react",
	"WDSIconIcCheck.react",
	"WDSIconIcClose.react",
	"WDSIconIcGppMaybe.react",
	"WDSIconIcManageAccounts.react",
	"WDSIllustrationWdsPictoCommunitiesBlockFeedbackNegative.react",
	"WDSIllustrationWdsPictoGroupBlockFeedbackNegative.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = {
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		title: {
			paddingTop: "x9orja2",
			paddingBottom: "xwib8y2",
			$$css: !0
		},
		bodyRow: {
			paddingTop: "xyinxu5",
			paddingInlineStart: "x1g0dm76",
			paddingInlineEnd: "xyri2b",
			columnGap: "x1qgv0r9",
			$$css: !0
		},
		buttons: {
			paddingTop: "x1p5oq8j",
			paddingBottom: "xsag5q8",
			alignSelf: "xpvyfi4",
			$$css: !0
		},
		footnote: {
			paddingTop: "x1p57kb1",
			$$css: !0
		}
	};
	function _(e) {
		var t, n = e.chat, a = e.isCommunity, i = ((t = n.groupMetadata) == null ? void 0 : t.participants.iAmAdmin()) === !0, l = a ? o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.COMMUNITY_SUSPENSION_BOTTOM_SHEET : o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.GROUP_SUSPENSION_BOTTOM_SHEET;
		o("WAWebSuspendedGroupUtils").useSuspensionImpression(n, o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SUSPENSION_BOTTOM_SHEET_IMPRESSION, l);
		var c = m(!1), _ = c[0], f = c[1], g = d(function() {
			o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: n,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.REQUEST_REVIEW_CLICK,
				uiSurface: l
			}), f(!0), o("WAWebSuspendedGroupUtils").submitGroupAppeal(n, l).finally(function() {
				f(!1);
			});
		}, [n, l]), h = function() {
			o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: n,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.OK_CLICK,
				uiSurface: l
			}), o("WAWebModalManager").closeModalManager();
		}, y = function() {
			o("WAWebModalManager").closeModalManager();
		}, C, b, v;
		a ? i ? (C = o("WAWebGroupSuspendCommonStrings").deactivateCommunityLabel(), v = "suspended-community-modal-deactivate-btn", b = function() {
			o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: n,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.DEACTIVATE_COMMUNITY,
				uiSurface: l
			}), o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(o("WAWebDeactivateCommunityDrawerLoadable").DeactivateCommunityDrawerLoadable, {
				onBack: o("WAWebDrawerManager").closeDrawerRight,
				chat: n
			}));
		}) : (C = s._(
			/*BTDS*/
			""
		), v = "suspended-community-modal-exit-btn", b = function() {
			o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: n,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.LEAVE_COMMUNITY_CLICK,
				uiSurface: l
			}), o("WAWebModalManager").closeModalManager(), o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({ chat: n });
		}) : (C = o("WAWebGroupSuspendCommonStrings").deleteGroupForMeLabel(), v = "suspended-group-modal-delete-btn", b = function() {
			o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: n,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.DELETE_GROUP_CLICK,
				uiSurface: l
			}), o("WAWebModalManager").ModalManager.close(), o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(n);
		});
		var S;
		return i ? S = s._(
			/*BTDS*/
			""
		) : a ? S = s._(
			/*BTDS*/
			""
		) : S = s._(
			/*BTDS*/
			""
		), u.jsx(o("WAWebModal.react").Modal, {
			onOverlayClick: y,
			testid: "suspended-modal",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "start",
					children: u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						onPress: y,
						variant: "borderless",
						size: "medium",
						"aria-label": s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "center",
					children: a ? u.jsx(r("WDSIllustrationWdsPictoCommunitiesBlockFeedbackNegative.react"), {}) : u.jsx(r("WDSIllustrationWdsPictoGroupBlockFeedbackNegative.react"), {})
				}),
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "center",
					xstyle: p.title,
					children: u.jsx(r("WDSText.react"), {
						type: "Headline1",
						colorName: "contentDefault",
						textAlign: "center",
						testid: "suspended-modal-title",
						children: a ? o("WAWebGroupSuspendCommonStrings").communitySuspendedTitle() : o("WAWebGroupSuspendCommonStrings").groupSuspendedTitle()
					})
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: p.bodyRow,
						children: [u.jsx(r("WDSIconIcBlock.react"), { xstyle: p.icon }), u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							testid: "suspended-modal-restriction",
							children: a ? o("WAWebGroupSuspendCommonStrings").communityRestrictionsText() : o("WAWebGroupSuspendCommonStrings").groupRestrictionsText()
						})]
					}),
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: p.bodyRow,
						children: [i ? u.jsx(r("WDSIconIcCheck.react"), { xstyle: p.icon }) : u.jsx(r("WDSIconIcManageAccounts.react"), { xstyle: p.icon }), u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: S
						})]
					}),
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: p.bodyRow,
						children: [u.jsx(r("WDSIconIcGppMaybe.react"), { xstyle: p.icon }), u.jsxs(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: [
								a ? o("WAWebGroupSuspendCommonStrings").communitySuspendedExplanation() : o("WAWebGroupSuspendCommonStrings").groupSuspendedExplanation(),
								" ",
								u.jsx(o("WAWebExternalLink.react").ExternalLink, {
									href: o("WAWebCxtUrl").getSuspensionAppealsFaqUrl({ isCommunity: a }),
									children: r("WAWebFbtCommon")("Learn more")
								})
							]
						})]
					})
				] }),
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "center",
					xstyle: p.footnote,
					children: u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						textAlign: "center",
						testid: "group_suspend_e2ee_footnote",
						children: a ? o("WAWebGroupSuspendCommonStrings").communityE2eeFootnote() : o("WAWebGroupSuspendCommonStrings").groupE2eeFootnote()
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: p.buttons,
					children: u.jsx(r("WDSButtonGroup.react"), {
						orientation: "horizontal",
						primaryButtonProps: {
							variant: "filled",
							onPress: i ? g : h,
							size: "medium",
							disabled: _,
							loading: _,
							testid: i ? "suspended-modal-request-review-btn" : "suspended-modal-ok-btn",
							label: i ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							)
						},
						secondaryButtonProps: {
							variant: "borderless",
							type: "destructive",
							onPress: b,
							size: "medium",
							testid: v,
							label: C,
							disabled: _
						}
					})
				})
			] })
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
