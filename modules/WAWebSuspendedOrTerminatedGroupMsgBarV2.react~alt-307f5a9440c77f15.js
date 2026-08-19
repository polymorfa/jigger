__d("WAWebSuspendedOrTerminatedGroupMsgBarV2.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebChatGroupUtils",
	"WAWebClickableLink.react",
	"WAWebDeleteIcon.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebGroupGatingUtils",
	"WAWebSuspendedGroupDeleteWamEvent",
	"WAWebSuspendedGroupUtils",
	"WAWebTabOrder",
	"WAWebWamEnumDeleteSuspendedGroupBtn",
	"WAWebWamEnumGroupSuspensionAppealUiAction",
	"WAWebWamEnumGroupSuspensionAppealUiSurface",
	"WDSButton.react",
	"WDSIconIcDelete.react",
	"WDSIconIcHelp.react",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = { suspendedMsgBar: {
		width: "xh8yej3",
		$$css: !0
	} };
	function m(e, t) {
		var n;
		if (o("WAWebChatGroupUtils").isTerminatedGroup(e) || !o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled()) return "legacy";
		var r = ((n = e.groupMetadata) == null ? void 0 : n.participants.iAmAdmin()) === !0;
		return r ? t === "IN_REVIEW" ? "in_review_admin" : t === "REJECTED" ? "rejected_admin" : "suspended_admin" : "suspended_member";
	}
	function p(e) {
		var t = e.chat, n = e.entityId, a = c(!1), i = a[0], l = a[1], p = r("useWAWebWindowSize")(), f = p.width, g = r("useWAWebEventTargetValue")(t.groupMetadata, ["change:suspendAppealStatus"], function() {
			var e;
			return (e = t.groupMetadata) == null ? void 0 : e.suspendAppealStatus;
		}), h = m(t, g), y = o("WAWebSuspendedGroupUtils").getFooterSurface(h);
		o("WAWebSuspendedGroupUtils").useSuspensionImpression(t, o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.FOOTER_IMPRESSION, y);
		var C = function() {
			new (o("WAWebSuspendedGroupDeleteWamEvent")).SuspendedGroupDeleteWamEvent({ deleteBtnSource: o("WAWebWamEnumDeleteSuspendedGroupBtn").DELETE_SUSPENDED_GROUP_BTN.BLOCKED_COMPOSER_BTN }).commit(), y != null && o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: t,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.DELETE_GROUP_CLICK,
				uiSurface: y
			}), o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(t);
		}, b = h !== "legacy" ? u.jsx(r("WDSButton.react"), {
			disabled: i,
			variant: "borderless",
			type: "destructive",
			onPress: C,
			testid: "suspended-group-exit-delete-group-btn",
			Icon: r("WDSIconIcDelete.react"),
			tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
			label: s._(
				/*BTDS*/
				""
			)
		}) : u.jsxs(o("WAWebButton.react").WAWebButtonSimplified, {
			onClick: C,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
			testid: "suspended-group-exit-delete-group-btn",
			children: [u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, { directional: !0 }), s._(
				/*BTDS*/
				""
			)]
		}), v = f <= o("WAWebSuspendedGroupUtils").STACK_BUTTONS_WIDTH ? o("WAWebFlex.react").FlexColumn : o("WAWebFlex.react").FlexRow;
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.suspendedMsgBar,
			children: u.jsxs(v, {
				alignSelf: "stretch",
				align: "center",
				justify: "all",
				testid: "suspended-msg-bar",
				children: [u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsx("span", {
					className: "x126k92a",
					"data-testid": "suspended-group-status-text",
					children: u.jsx(_, {
						viewState: h,
						chat: t
					})
				}) }), u.jsxs(o("WAWebFlex.react").FlexRow, { children: [h !== "in_review_admin" && b, h === "suspended_admin" && u.jsx(r("WDSButton.react"), {
					variant: "borderless",
					onPress: function() {
						o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
							chat: t,
							uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.REQUEST_REVIEW_CLICK,
							uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
						}), l(!0), o("WAWebSuspendedGroupUtils").submitGroupAppeal(t, o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER).finally(function() {
							l(!1);
						});
					},
					disabled: i,
					loading: i,
					testid: "suspended-group-request-review-btn",
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
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.chat, n = e.viewState;
		if (n === "legacy") return s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebSuspendedGroupUtils").getSuspendedFaqUrl(),
				testid: "learn-more-link",
				"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
		var a = o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignVariantEnabled(), i = s._(
			/*BTDS*/
			""
		);
		if (n === "in_review_admin") {
			var l = u.jsx(r("WAWebClickableLink.react"), {
				onClick: function() {
					o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
						chat: t,
						uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
						uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.IN_REVIEW_FOOTER
					}), o("WAWebSuspendedGroupUtils").openGroupAppealInReviewModal(t);
				},
				"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				tabIndex: 0,
				testid: "see-details-link",
				children: i
			});
			return a ? s._(
				/*BTDS*/
				"",
				[s._param("link to see details", l)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to see details", l)]
			);
		}
		if (n === "rejected_admin") {
			var c = u.jsx(r("WAWebClickableLink.react"), {
				onClick: function() {
					o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
						chat: t,
						uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
						uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.REJECT_FOOTER
					}), o("WAWebSuspendedGroupUtils").openGroupAppealRejectedModal(t);
				},
				"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				tabIndex: 0,
				testid: "see-details-link",
				children: i
			});
			return a ? s._(
				/*BTDS*/
				"",
				[s._param("link to see details", c)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to see details", c)]
			);
		}
		var d = u.jsx(r("WAWebClickableLink.react"), {
			onClick: function() {
				o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
					chat: t,
					uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
					uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
				}), o("WAWebSuspendedGroupUtils").openSuspendedGroupRedesignModal(t);
			},
			"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
			tabIndex: 0,
			testid: "see-details-link",
			children: i
		});
		return a ? s._(
			/*BTDS*/
			"",
			[s._param("link to see details", d)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("link to see details", d)]
		);
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);
