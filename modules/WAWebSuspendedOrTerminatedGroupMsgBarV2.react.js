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
	"react-compiler-runtime",
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
		var t, n = o("react-compiler-runtime").c(29), a = e.chat, i = c(!1), l = i[0], p = i[1], f = r("useWAWebWindowSize")(), g = f.width, h;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (h = ["change:suspendAppealStatus"], n[0] = h) : h = n[0];
		var y;
		if (n[1] !== ((t = a.groupMetadata) == null ? void 0 : t.suspendAppealStatus)) {
			var C;
			y = function() {
				var e;
				return (e = a.groupMetadata) == null ? void 0 : e.suspendAppealStatus;
			}, n[1] = (C = a.groupMetadata) == null ? void 0 : C.suspendAppealStatus, n[2] = y;
		} else y = n[2];
		var b = r("useWAWebEventTargetValue")(a.groupMetadata, h, y), v, S;
		n[3] !== a || n[4] !== b ? (S = m(a, b), v = o("WAWebSuspendedGroupUtils").getFooterSurface(S), n[3] = a, n[4] = b, n[5] = v, n[6] = S) : (v = n[5], S = n[6]);
		var R = v;
		o("WAWebSuspendedGroupUtils").useSuspensionImpression(a, o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.FOOTER_IMPRESSION, R);
		var L;
		n[7] !== a || n[8] !== R ? (L = function() {
			new (o("WAWebSuspendedGroupDeleteWamEvent")).SuspendedGroupDeleteWamEvent({ deleteBtnSource: o("WAWebWamEnumDeleteSuspendedGroupBtn").DELETE_SUSPENDED_GROUP_BTN.BLOCKED_COMPOSER_BTN }).commit(), R != null && o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
				chat: a,
				uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.DELETE_GROUP_CLICK,
				uiSurface: R
			}), o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(a);
		}, n[7] = a, n[8] = R, n[9] = L) : L = n[9];
		var E = L, k;
		n[10] !== E || n[11] !== l || n[12] !== S ? (k = S !== "legacy" ? u.jsx(r("WDSButton.react"), {
			disabled: l,
			variant: "borderless",
			type: "destructive",
			onPress: E,
			testid: "suspended-group-exit-delete-group-btn",
			Icon: r("WDSIconIcDelete.react"),
			tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
			label: s._(
				/*BTDS*/
				""
			)
		}) : u.jsxs(o("WAWebButton.react").WAWebButtonSimplified, {
			onClick: E,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
			testid: "suspended-group-exit-delete-group-btn",
			children: [u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, { directional: !0 }), s._(
				/*BTDS*/
				""
			)]
		}), n[10] = E, n[11] = l, n[12] = S, n[13] = k) : k = n[13];
		var I = k, T = g <= o("WAWebSuspendedGroupUtils").STACK_BUTTONS_WIDTH ? o("WAWebFlex.react").FlexColumn : o("WAWebFlex.react").FlexRow, D;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x126k92a" }, n[14] = D) : D = n[14];
		var x;
		n[15] !== a || n[16] !== S ? (x = u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsx("span", babelHelpers.extends({}, D, {
			"data-testid": "suspended-group-status-text",
			children: u.jsx(_, {
				viewState: S,
				chat: a
			})
		})) }), n[15] = a, n[16] = S, n[17] = x) : x = n[17];
		var $ = S !== "in_review_admin" && I, P;
		n[18] !== a || n[19] !== l || n[20] !== S ? (P = S === "suspended_admin" && u.jsx(r("WDSButton.react"), {
			variant: "borderless",
			onPress: function() {
				o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
					chat: a,
					uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.REQUEST_REVIEW_CLICK,
					uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
				}), p(!0), o("WAWebSuspendedGroupUtils").submitGroupAppeal(a, o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER).finally(function() {
					p(!1);
				});
			},
			disabled: l,
			loading: l,
			testid: "suspended-group-request-review-btn",
			Icon: r("WDSIconIcHelp.react"),
			tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
			label: s._(
				/*BTDS*/
				""
			)
		}), n[18] = a, n[19] = l, n[20] = S, n[21] = P) : P = n[21];
		var N;
		n[22] !== $ || n[23] !== P ? (N = u.jsxs(o("WAWebFlex.react").FlexRow, { children: [$, P] }), n[22] = $, n[23] = P, n[24] = N) : N = n[24];
		var M;
		return n[25] !== T || n[26] !== N || n[27] !== x ? (M = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.suspendedMsgBar,
			children: u.jsxs(T, {
				alignSelf: "stretch",
				align: "center",
				justify: "all",
				testid: "suspended-msg-bar",
				children: [x, N]
			})
		}), n[25] = T, n[26] = N, n[27] = x, n[28] = M) : M = n[28], M;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(9), n = e.chat, a = e.viewState;
		if (a === "legacy") {
			var i;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
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
			), t[0] = i) : i = t[0], i;
		}
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignVariantEnabled(), t[1] = l) : l = t[1];
		var c = l, d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[2] = d) : d = t[2];
		var m = d;
		if (a === "in_review_admin") {
			var p;
			if (t[3] !== n) {
				var _ = u.jsx(r("WAWebClickableLink.react"), {
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
					children: m
				});
				p = c ? s._(
					/*BTDS*/
					"",
					[s._param("link to see details", _)]
				) : s._(
					/*BTDS*/
					"",
					[s._param("link to see details", _)]
				), t[3] = n, t[4] = p;
			} else p = t[4];
			return p;
		}
		if (a === "rejected_admin") {
			var f;
			if (t[5] !== n) {
				var g = u.jsx(r("WAWebClickableLink.react"), {
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
					children: m
				});
				f = c ? s._(
					/*BTDS*/
					"",
					[s._param("link to see details", g)]
				) : s._(
					/*BTDS*/
					"",
					[s._param("link to see details", g)]
				), t[5] = n, t[6] = f;
			} else f = t[6];
			return f;
		}
		var h;
		if (t[7] !== n) {
			var y = u.jsx(r("WAWebClickableLink.react"), {
				onClick: function() {
					o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
						chat: n,
						uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
						uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
					}), o("WAWebSuspendedGroupUtils").openSuspendedGroupRedesignModal(n);
				},
				"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				tabIndex: 0,
				testid: "see-details-link",
				children: m
			});
			h = c ? s._(
				/*BTDS*/
				"",
				[s._param("link to see details", y)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to see details", y)]
			), t[7] = n, t[8] = h;
		} else h = t[8];
		return h;
	}
	l.default = p;
}), 226);
