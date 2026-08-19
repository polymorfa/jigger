__d("WAWebGroupAppealRejectedModal.react", [
	"fbt",
	"WAWeb-moment",
	"WAWebCxtUrl",
	"WAWebDeactivateCommunityDrawerLoadable",
	"WAWebDrawerManager",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebGroupSuspendCommonStrings",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebSuspendedGroupUtils",
	"WAWebWamEnumGroupSuspensionAppealUiAction",
	"WAWebWamEnumGroupSuspensionAppealUiSurface",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSIconIcBlock.react",
	"WDSIconIcClose.react",
	"WDSIconIcGppMaybe.react",
	"WDSIconIcHelp.react",
	"WDSIllustrationWdsPictoCommunitiesBlockFeedbackNegative.react",
	"WDSIllustrationWdsPictoGroupBlockFeedbackNegative.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		title: {
			paddingTop: "x1sk1jro",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		subtitle: {
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		bodyRow: {
			paddingTop: "x1p57kb1",
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xyri2b",
			columnGap: "xrdqr27",
			$$css: !0
		},
		buttons: {
			paddingTop: "xl7twdi",
			paddingBottom: "xscbp6u",
			alignSelf: "xpvyfi4",
			$$css: !0
		},
		footnote: {
			paddingTop: "x1p57kb1",
			$$css: !0
		}
	};
	function d(e) {
		var t, n, a = e.chat, i = (t = a.groupMetadata) == null ? void 0 : t.suspendAppealUpdateTime, l = ((n = a.groupMetadata) == null ? void 0 : n.isParentGroup) === !0;
		o("WAWebSuspendedGroupUtils").useSuspensionImpression(a, o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.REJECT_BOTTOM_SHEET_IMPRESSION, o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.REJECT_BOTTOM_SHEET);
		var d = function() {
			o("WAWebModalManager").closeModalManager();
		}, m = function() {
			l ? (o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: a,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.DEACTIVATE_COMMUNITY,
				uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.REJECT_BOTTOM_SHEET
			}), o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(o("WAWebDeactivateCommunityDrawerLoadable").DeactivateCommunityDrawerLoadable, {
				onBack: o("WAWebDrawerManager").closeDrawerRight,
				chat: a
			}))) : (o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: a,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.DELETE_GROUP_CLICK,
				uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.REJECT_BOTTOM_SHEET
			}), o("WAWebModalManager").ModalManager.close(), o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(a));
		};
		return u.jsx(o("WAWebModal.react").Modal, {
			onOverlayClick: d,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				testid: "group-suspend-appeal-rejected-modal",
				children: [
					u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "start",
						children: u.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcClose.react"),
							onPress: d,
							variant: "borderless",
							size: "medium",
							"aria-label": r("WAWebFbtCommon")("Close"),
							testid: "group-suspend-appeal-rejected-close-btn"
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						children: l ? u.jsx(r("WDSIllustrationWdsPictoCommunitiesBlockFeedbackNegative.react"), {}) : u.jsx(r("WDSIllustrationWdsPictoGroupBlockFeedbackNegative.react"), {})
					}),
					u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						xstyle: c.title,
						children: u.jsx(r("WDSText.react"), {
							type: "Headline1",
							colorName: "contentDefault",
							textAlign: "center",
							children: l ? o("WAWebGroupSuspendCommonStrings").communitySuspendedTitle() : o("WAWebGroupSuspendCommonStrings").groupSuspendedTitle()
						})
					}),
					i != null && u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						xstyle: c.subtitle,
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: s._(
								/*BTDS*/
								"",
								[s._param("review_date", r("WAWeb-moment").unix(i).format("LL"))]
							)
						})
					}),
					u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
						u.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							xstyle: c.bodyRow,
							children: [u.jsx(r("WDSIconIcGppMaybe.react"), { xstyle: c.icon }), u.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: "contentDefault",
								children: l ? o("WAWebGroupSuspendCommonStrings").communityAppealRejectedExplanation() : o("WAWebGroupSuspendCommonStrings").groupAppealRejectedExplanation()
							})]
						}),
						u.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							xstyle: c.bodyRow,
							children: [u.jsx(r("WDSIconIcBlock.react"), { xstyle: c.icon }), u.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: "contentDefault",
								children: l ? o("WAWebGroupSuspendCommonStrings").communityRestrictionsText() : o("WAWebGroupSuspendCommonStrings").groupRestrictionsText()
							})]
						}),
						u.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							xstyle: c.bodyRow,
							children: [u.jsx(r("WDSIconIcHelp.react"), { xstyle: c.icon }), u.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: "contentDefault",
								children: s._(
									/*BTDS*/
									""
								)
							})]
						})
					] }),
					u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						xstyle: c.footnote,
						children: u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							textAlign: "center",
							testid: "group_suspend_e2ee_footnote",
							children: l ? o("WAWebGroupSuspendCommonStrings").communityE2eeFootnote() : o("WAWebGroupSuspendCommonStrings").groupE2eeFootnote()
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: c.buttons,
						children: u.jsx(r("WDSButtonGroup.react"), {
							orientation: "horizontal",
							primaryButtonProps: {
								variant: "filled",
								type: "destructive",
								onPress: m,
								size: "medium",
								label: l ? o("WAWebGroupSuspendCommonStrings").deactivateCommunityLabel() : o("WAWebGroupSuspendCommonStrings").deleteGroupForMeLabel(),
								testid: "group_appeal_rejected_delete_btn"
							},
							secondaryButtonProps: {
								variant: "borderless",
								onPress: function() {
									o("WAWebExternalLink.react").openExternalLink(o("WAWebCxtUrl").getSuspensionAppealsFaqUrl({ isCommunity: l }));
								},
								size: "medium",
								label: r("WAWebFbtCommon")("Learn more")
							}
						})
					})
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
