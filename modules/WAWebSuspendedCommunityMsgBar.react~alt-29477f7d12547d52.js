__d("WAWebSuspendedCommunityMsgBar.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebButton.react",
	"WAWebChatCollection",
	"WAWebChatCommunityUtils",
	"WAWebClickableLink.react",
	"WAWebCxtUrl",
	"WAWebDeactivateCommunityDrawerLoadable",
	"WAWebDeactivateIconIcon.react",
	"WAWebDrawerManager",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebGroupGatingUtils",
	"WAWebKeyboardTabUtils",
	"WAWebLeaveCommunityModalUtils",
	"WAWebSuspendedCommunityUtils",
	"WAWebSuspendedGroupUtils",
	"WAWebTabOrder",
	"WAWebWamEnumGroupSuspensionAppealUiAction",
	"WAWebWamEnumGroupSuspensionAppealUiSurface",
	"WDSButton.react",
	"WDSIconIcHelp.react",
	"WDSIconIcLogout.react",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebUIM",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = {
		deactivate: {
			color: "x30a034",
			$$css: !0
		},
		suspendedMsgBar: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function m(e, t) {
		return o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled() ? e ? t === "IN_REVIEW" ? "in_review_admin" : t === "REJECTED" ? "rejected_admin" : "suspended_admin" : "suspended_member" : "legacy";
	}
	function p(e) {
		var t, n, a = e.chat, i = c(!1), l = i[0], p = i[1], f = r("useWAWebWindowSize")(), g = f.width, h = r("useWAWebUIM")(), y = (t = a.groupMetadata) == null ? void 0 : t.parentGroup, C = y != null ? o("WAWebChatCollection").ChatCollection.get(y) : null, b = r("useWAWebEventTargetValue")(C == null ? void 0 : C.groupMetadata, ["change:suspendAppealStatus"], function() {
			var e;
			return C == null || (e = C.groupMetadata) == null ? void 0 : e.suspendAppealStatus;
		}), v = m((C == null || (n = C.groupMetadata) == null ? void 0 : n.participants.iAmAdmin()) === !0, b), S = o("WAWebSuspendedGroupUtils").getFooterSurface(v);
		if (o("WAWebSuspendedGroupUtils").useSuspensionImpression(C, o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.FOOTER_IMPRESSION, S), C != null) {
			var R = function() {
				S != null && o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
					chat: C,
					uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.DEACTIVATE_COMMUNITY,
					uiSurface: S
				}), o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "deactivate_community",
					chat: C
				} : u.jsx(o("WAWebDeactivateCommunityDrawerLoadable").DeactivateCommunityDrawerLoadable, {
					onBack: o("WAWebDrawerManager").closeDrawerRight,
					chat: C
				}), {
					transition: "slide-left",
					uim: h,
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
				});
			}, L = function() {
				S != null && o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
					chat: C,
					uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.LEAVE_COMMUNITY_CLICK,
					uiSurface: S
				}), o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({ chat: C });
			}, E = v !== "legacy" ? u.jsx(r("WDSButton.react"), {
				variant: "borderless",
				type: "destructive",
				onPress: R,
				testid: "suspended-community-deactivate-btn",
				Icon: o("WAWebDeactivateIconIcon.react").DeactivateIconIcon,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				label: s._(
					/*BTDS*/
					""
				)
			}) : u.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
				onClick: R,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				testid: "suspended-community-deactivate-btn",
				children: u.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: d.deactivate,
					justify: "center",
					align: "center",
					gap: 4,
					children: [u.jsx(o("WAWebDeactivateIconIcon.react").DeactivateIconIcon, { directional: !0 }), s._(
						/*BTDS*/
						""
					)]
				})
			}), k = v !== "legacy" ? u.jsx(r("WDSButton.react"), {
				disabled: l,
				type: "destructive",
				variant: "borderless",
				onPress: L,
				testid: "suspended-community-exit-btn",
				Icon: r("WDSIconIcLogout.react"),
				tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				label: s._(
					/*BTDS*/
					""
				)
			}) : u.jsxs(o("WAWebButton.react").WAWebButtonSimplified, {
				onClick: L,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				testid: "suspended-community-exit-btn",
				children: [u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }), s._(
					/*BTDS*/
					""
				)]
			}), I = g <= o("WAWebSuspendedGroupUtils").STACK_BUTTONS_WIDTH ? o("WAWebFlex.react").FlexColumn : o("WAWebFlex.react").FlexRow, T = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(C) ? E : k;
			return u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: d.suspendedMsgBar,
				children: u.jsxs(I, {
					alignSelf: "stretch",
					align: "center",
					justify: "all",
					testid: "suspended-msg-bar",
					children: [u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsx("span", {
						className: "x126k92a",
						"data-testid": "suspended-community-msg-bar-description",
						children: u.jsx(_, {
							chat: a,
							communityChat: C,
							viewState: v
						})
					}) }), u.jsxs(o("WAWebFlex.react").FlexRow, { children: [v !== "in_review_admin" && T, v === "suspended_admin" && u.jsx(r("WDSButton.react"), {
						variant: "borderless",
						onPress: function() {
							o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
								chat: C,
								uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.REQUEST_REVIEW_CLICK,
								uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
							}), p(!0), o("WAWebSuspendedGroupUtils").submitGroupAppeal(C, o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER).finally(function() {
								p(!1);
							});
						},
						disabled: l,
						loading: l,
						testid: "suspended-community-request-review-btn",
						Icon: r("WDSIconIcHelp.react"),
						tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
						label: s._(
							/*BTDS*/
							""
						)
					})] })]
				})
			});
		}
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.chat, n = e.communityChat, a = e.viewState;
		if (a === "legacy") return s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebCxtUrl").getCommunityNotAvailableFaqUrl(),
				testid: "learn-more-link",
				"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
		var i = o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignVariantEnabled(), l = s._(
			/*BTDS*/
			""
		);
		if (a === "in_review_admin") {
			var c = u.jsx(r("WAWebClickableLink.react"), {
				onClick: function() {
					o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
						chat: n,
						uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
						uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.IN_REVIEW_FOOTER
					}), o("WAWebSuspendedGroupUtils").openGroupAppealInReviewModal(n);
				},
				"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				tabIndex: 0,
				testid: "see-details-link",
				children: l
			});
			return i ? s._(
				/*BTDS*/
				"",
				[s._param("link to see details", c)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to see details", c)]
			);
		}
		if (a === "rejected_admin") {
			var d = u.jsx(r("WAWebClickableLink.react"), {
				onClick: function() {
					o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
						chat: n,
						uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
						uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.REJECT_FOOTER
					}), o("WAWebSuspendedGroupUtils").openGroupAppealRejectedModal(n);
				},
				"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				tabIndex: 0,
				testid: "see-details-link",
				children: l
			});
			return i ? s._(
				/*BTDS*/
				"",
				[s._param("link to see details", d)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to see details", d)]
			);
		}
		var m = u.jsx(r("WAWebClickableLink.react"), {
			onClick: function() {
				o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
					chat: n,
					uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
					uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
				}), o("WAWebSuspendedCommunityUtils").openSuspendedCommunityRedesignModal(t);
			},
			"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
			tabIndex: 0,
			testid: "see-details-link",
			children: l
		});
		return i ? s._(
			/*BTDS*/
			"",
			[s._param("link to see details", m)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("link to see details", m)]
		);
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);
