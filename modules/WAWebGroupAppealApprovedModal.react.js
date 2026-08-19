__d("WAWebGroupAppealApprovedModal.react", [
	"fbt",
	"WAWeb-moment",
	"WAWebCxtUrl",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebGroupSuspendCommonStrings",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebSuspendedGroupUtils",
	"WAWebTosUrl",
	"WAWebWamEnumGroupSuspensionAppealUiAction",
	"WAWebWamEnumGroupSuspensionAppealUiSurface",
	"WDSButton.react",
	"WDSIconIcCheck.react",
	"WDSIconIcHelp.react",
	"WDSIconIcVerifiedUser.react",
	"WDSIllustrationWdsPictoCommunitiesFeedbackPositive.react",
	"WDSIllustrationWdsPictoGroupFeedbackPositive.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		illustration: {
			paddingTop: "xl7twdi",
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
		button: {
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
		o("WAWebSuspendedGroupUtils").useSuspensionImpression(a, o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.ACCEPT_BOTTOM_SHEET_IMPRESSION, o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.ACCEPT_BOTTOM_SHEET);
		var d = function() {
			o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: a,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.OK_CLICK,
				uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.ACCEPT_BOTTOM_SHEET
			}), o("WAWebModalManager").closeModalManager();
		}, m = function() {
			o("WAWebModalManager").closeModalManager();
		};
		return u.jsx(o("WAWebModal.react").Modal, {
			onOverlayClick: m,
			testid: "group-suspend-appeal-approved-modal",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "center",
					xstyle: c.illustration,
					children: l ? u.jsx(r("WDSIllustrationWdsPictoCommunitiesFeedbackPositive.react"), {}) : u.jsx(r("WDSIllustrationWdsPictoGroupFeedbackPositive.react"), {})
				}),
				u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "center",
					xstyle: c.title,
					children: u.jsx(r("WDSText.react"), {
						type: "Headline1",
						colorName: "contentDefault",
						textAlign: "center",
						children: l ? o("WAWebGroupSuspendCommonStrings").communityApprovedTitle() : o("WAWebGroupSuspendCommonStrings").groupApprovedTitle()
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
						children: [u.jsx(r("WDSIconIcVerifiedUser.react"), { xstyle: c.icon }), u.jsxs(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: [
								l ? o("WAWebGroupSuspendCommonStrings").communityAppealApprovedExplanation() : o("WAWebGroupSuspendCommonStrings").groupAppealApprovedExplanation(),
								" ",
								u.jsx(o("WAWebExternalLink.react").ExternalLink, {
									href: o("WAWebCxtUrl").getSuspensionAppealsFaqUrl({ isCommunity: l }),
									children: r("WAWebFbtCommon")("Learn more")
								})
							]
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
								"",
								[s._param("terms_of_service_link", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
									href: o("WAWebTosUrl").getTosUrl(),
									children: s._(
										/*BTDS*/
										""
									)
								}))]
							)
						})]
					}),
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: c.bodyRow,
						children: [u.jsx(r("WDSIconIcCheck.react"), { xstyle: c.icon }), u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: l ? s._(
								/*BTDS*/
								""
							) : s._(
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
					xstyle: c.button,
					children: u.jsx(r("WDSButton.react"), {
						variant: "filled",
						onPress: d,
						size: "medium",
						label: r("WAWebFbtCommon")("OK"),
						testid: "group_appeal_approved_ok_btn"
					})
				})
			] })
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
