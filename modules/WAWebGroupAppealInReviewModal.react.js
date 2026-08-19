__d("WAWebGroupAppealInReviewModal.react", [
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
	"WDSButtonGroup.react",
	"WDSIconIcBlock.react",
	"WDSIconIcNotifications.react",
	"WDSIllustrationWdsPictoCommunitiesFeedbackClockWarning.react",
	"WDSIllustrationWdsPictoGroupFeedbackClockWarning.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		illustration: {
			paddingTop: "x1p5oq8j",
			$$css: !0
		},
		title: {
			paddingTop: "x9orja2",
			paddingBottom: "xwib8y2",
			$$css: !0
		},
		subtitle: {
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
	function d(e) {
		var t, n, a = e.chat, i = (t = a.groupMetadata) == null ? void 0 : t.suspendAppealUpdateTime, l = ((n = a.groupMetadata) == null ? void 0 : n.isParentGroup) === !0;
		o("WAWebSuspendedGroupUtils").useSuspensionImpression(a, o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.IN_REVIEW_BOTTOM_SHEET_IMPRESSION, o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.IN_REVIEW_BOTTOM_SHEET);
		var d = function() {
			o("WAWebModalManager").closeModalManager();
		}, m = function() {
			l ? (o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(o("WAWebDeactivateCommunityDrawerLoadable").DeactivateCommunityDrawerLoadable, {
				onBack: o("WAWebDrawerManager").closeDrawerRight,
				chat: a
			}))) : (o("WAWebModalManager").ModalManager.close(), o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(a));
		};
		return u.jsx(o("WAWebModal.react").Modal, {
			onOverlayClick: d,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "center",
					xstyle: c.illustration,
					children: l ? u.jsx(r("WDSIllustrationWdsPictoCommunitiesFeedbackClockWarning.react"), {}) : u.jsx(r("WDSIllustrationWdsPictoGroupFeedbackClockWarning.react"), {})
				}),
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "center",
					xstyle: c.title,
					children: u.jsx(r("WDSText.react"), {
						type: "Headline1",
						colorName: "contentDefault",
						textAlign: "center",
						testid: "group-in-review-modal-title",
						children: l ? o("WAWebGroupSuspendCommonStrings").communityInReviewTitle() : o("WAWebGroupSuspendCommonStrings").groupInReviewTitle()
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
				u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: c.bodyRow,
					children: [u.jsx(r("WDSIconIcBlock.react"), { xstyle: c.icon }), u.jsxs(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						testid: "group-in-review-modal-bullet",
						children: [
							l ? o("WAWebGroupSuspendCommonStrings").communityInReviewBullet() : o("WAWebGroupSuspendCommonStrings").groupInReviewBullet(),
							" ",
							u.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: o("WAWebCxtUrl").getSuspensionAppealsFaqUrl({ isCommunity: l }),
								children: r("WAWebFbtCommon")("Learn more")
							})
						]
					})]
				}), u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: c.bodyRow,
					children: [u.jsx(r("WDSIconIcNotifications.react"), { xstyle: c.icon }), u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})] }),
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
							onPress: d,
							size: "medium",
							testid: "group-in-review-modal-ok-btn",
							label: s._(
								/*BTDS*/
								""
							)
						},
						secondaryButtonProps: {
							variant: "borderless",
							type: "destructive",
							onPress: m,
							size: "medium",
							testid: l ? "group-in-review-modal-deactivate-btn" : "group-in-review-modal-delete-btn",
							label: l ? o("WAWebGroupSuspendCommonStrings").deactivateCommunityLabel() : o("WAWebGroupSuspendCommonStrings").deleteGroupForMeLabel()
						}
					})
				})
			] })
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
