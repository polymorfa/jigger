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
	"react-compiler-runtime",
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
		var t, n, a, i = o("react-compiler-runtime").c(45), l = e.chat, p = c(!1), f = p[0], g = p[1], h = r("useWAWebWindowSize")(), y = h.width, C = r("useWAWebUIM")(), b = (t = l.groupMetadata) == null ? void 0 : t.parentGroup, v;
		i[0] !== b ? (v = b != null ? o("WAWebChatCollection").ChatCollection.get(b) : null, i[0] = b, i[1] = v) : v = i[1];
		var S = v, R;
		i[2] === Symbol.for("react.memo_cache_sentinel") ? (R = ["change:suspendAppealStatus"], i[2] = R) : R = i[2];
		var L;
		if (i[3] !== (S == null || (n = S.groupMetadata) == null ? void 0 : n.suspendAppealStatus)) {
			var E;
			L = function() {
				var e;
				return S == null || (e = S.groupMetadata) == null ? void 0 : e.suspendAppealStatus;
			}, i[3] = S == null || (E = S.groupMetadata) == null ? void 0 : E.suspendAppealStatus, i[4] = L;
		} else L = i[4];
		var k = r("useWAWebEventTargetValue")(S == null ? void 0 : S.groupMetadata, R, L), I, T;
		if (i[5] !== (S == null || (a = S.groupMetadata) == null ? void 0 : a.participants) || i[6] !== k) {
			var D, x, $;
			if (i[9] !== (S == null || (D = S.groupMetadata) == null ? void 0 : D.participants)) {
				var P, N;
				$ = S == null || (P = S.groupMetadata) == null ? void 0 : P.participants.iAmAdmin(), i[9] = S == null || (N = S.groupMetadata) == null ? void 0 : N.participants, i[10] = $;
			} else $ = i[10];
			T = m($ === !0, k), I = o("WAWebSuspendedGroupUtils").getFooterSurface(T), i[5] = S == null || (x = S.groupMetadata) == null ? void 0 : x.participants, i[6] = k, i[7] = I, i[8] = T;
		} else I = i[7], T = i[8];
		var M = I;
		if (o("WAWebSuspendedGroupUtils").useSuspensionImpression(S, o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.FOOTER_IMPRESSION, M), S != null) {
			var w;
			i[11] !== S || i[12] !== M || i[13] !== C ? (w = function() {
				M != null && o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
					chat: S,
					uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.DEACTIVATE_COMMUNITY,
					uiSurface: M
				}), o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "deactivate_community",
					chat: S
				} : u.jsx(o("WAWebDeactivateCommunityDrawerLoadable").DeactivateCommunityDrawerLoadable, {
					onBack: o("WAWebDrawerManager").closeDrawerRight,
					chat: S
				}), {
					transition: "slide-left",
					uim: C,
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
				});
			}, i[11] = S, i[12] = M, i[13] = C, i[14] = w) : w = i[14];
			var A = w, F;
			i[15] !== S || i[16] !== M ? (F = function() {
				M != null && o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
					chat: S,
					uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.LEAVE_COMMUNITY_CLICK,
					uiSurface: M
				}), o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({ chat: S });
			}, i[15] = S, i[16] = M, i[17] = F) : F = i[17];
			var O = F, B;
			i[18] !== A || i[19] !== T ? (B = T !== "legacy" ? u.jsx(r("WDSButton.react"), {
				variant: "borderless",
				type: "destructive",
				onPress: A,
				testid: "suspended-community-deactivate-btn",
				Icon: o("WAWebDeactivateIconIcon.react").DeactivateIconIcon,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				label: s._(
					/*BTDS*/
					""
				)
			}) : u.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
				onClick: A,
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
			}), i[18] = A, i[19] = T, i[20] = B) : B = i[20];
			var W = B, q;
			i[21] !== O || i[22] !== f || i[23] !== T ? (q = T !== "legacy" ? u.jsx(r("WDSButton.react"), {
				disabled: f,
				type: "destructive",
				variant: "borderless",
				onPress: O,
				testid: "suspended-community-exit-btn",
				Icon: r("WDSIconIcLogout.react"),
				tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				label: s._(
					/*BTDS*/
					""
				)
			}) : u.jsxs(o("WAWebButton.react").WAWebButtonSimplified, {
				onClick: O,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				testid: "suspended-community-exit-btn",
				children: [u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }), s._(
					/*BTDS*/
					""
				)]
			}), i[21] = O, i[22] = f, i[23] = T, i[24] = q) : q = i[24];
			var U = q, V = y <= o("WAWebSuspendedGroupUtils").STACK_BUTTONS_WIDTH ? o("WAWebFlex.react").FlexColumn : o("WAWebFlex.react").FlexRow, H;
			i[25] !== S || i[26] !== W || i[27] !== U ? (H = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(S) ? W : U, i[25] = S, i[26] = W, i[27] = U, i[28] = H) : H = i[28];
			var G = H, z;
			i[29] === Symbol.for("react.memo_cache_sentinel") ? (z = { className: "x126k92a" }, i[29] = z) : z = i[29];
			var j;
			i[30] !== l || i[31] !== S || i[32] !== T ? (j = u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsx("span", babelHelpers.extends({}, z, {
				"data-testid": "suspended-community-msg-bar-description",
				children: u.jsx(_, {
					chat: l,
					communityChat: S,
					viewState: T
				})
			})) }), i[30] = l, i[31] = S, i[32] = T, i[33] = j) : j = i[33];
			var K = T !== "in_review_admin" && G, Q;
			i[34] !== S || i[35] !== f || i[36] !== T ? (Q = T === "suspended_admin" && u.jsx(r("WDSButton.react"), {
				variant: "borderless",
				onPress: function() {
					o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
						chat: S,
						uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.REQUEST_REVIEW_CLICK,
						uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
					}), g(!0), o("WAWebSuspendedGroupUtils").submitGroupAppeal(S, o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER).finally(function() {
						g(!1);
					});
				},
				disabled: f,
				loading: f,
				testid: "suspended-community-request-review-btn",
				Icon: r("WDSIconIcHelp.react"),
				tabOrder: o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				label: s._(
					/*BTDS*/
					""
				)
			}), i[34] = S, i[35] = f, i[36] = T, i[37] = Q) : Q = i[37];
			var X;
			i[38] !== K || i[39] !== Q ? (X = u.jsxs(o("WAWebFlex.react").FlexRow, { children: [K, Q] }), i[38] = K, i[39] = Q, i[40] = X) : X = i[40];
			var Y;
			return i[41] !== V || i[42] !== j || i[43] !== X ? (Y = u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: d.suspendedMsgBar,
				children: u.jsxs(V, {
					alignSelf: "stretch",
					align: "center",
					justify: "all",
					testid: "suspended-msg-bar",
					children: [j, X]
				})
			}), i[41] = V, i[42] = j, i[43] = X, i[44] = Y) : Y = i[44], Y;
		}
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(10), n = e.chat, a = e.communityChat, i = e.viewState;
		if (i === "legacy") {
			var l;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
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
			), t[0] = l) : l = t[0], l;
		}
		var c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignVariantEnabled(), t[1] = c) : c = t[1];
		var d = c, m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[2] = m) : m = t[2];
		var p = m;
		if (i === "in_review_admin") {
			var _;
			if (t[3] !== a) {
				var f = u.jsx(r("WAWebClickableLink.react"), {
					onClick: function() {
						o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
							chat: a,
							uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
							uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.IN_REVIEW_FOOTER
						}), o("WAWebSuspendedGroupUtils").openGroupAppealInReviewModal(a);
					},
					"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
					tabIndex: 0,
					testid: "see-details-link",
					children: p
				});
				_ = d ? s._(
					/*BTDS*/
					"",
					[s._param("link to see details", f)]
				) : s._(
					/*BTDS*/
					"",
					[s._param("link to see details", f)]
				), t[3] = a, t[4] = _;
			} else _ = t[4];
			return _;
		}
		if (i === "rejected_admin") {
			var g;
			if (t[5] !== a) {
				var h = u.jsx(r("WAWebClickableLink.react"), {
					onClick: function() {
						o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
							chat: a,
							uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
							uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.REJECT_FOOTER
						}), o("WAWebSuspendedGroupUtils").openGroupAppealRejectedModal(a);
					},
					"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
					tabIndex: 0,
					testid: "see-details-link",
					children: p
				});
				g = d ? s._(
					/*BTDS*/
					"",
					[s._param("link to see details", h)]
				) : s._(
					/*BTDS*/
					"",
					[s._param("link to see details", h)]
				), t[5] = a, t[6] = g;
			} else g = t[6];
			return g;
		}
		var y;
		if (t[7] !== n || t[8] !== a) {
			var C = u.jsx(r("WAWebClickableLink.react"), {
				onClick: function() {
					o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
						chat: a,
						uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_DETAILS_CLICK,
						uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
					}), o("WAWebSuspendedCommunityUtils").openSuspendedCommunityRedesignModal(n);
				},
				"data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
				tabIndex: 0,
				testid: "see-details-link",
				children: p
			});
			y = d ? s._(
				/*BTDS*/
				"",
				[s._param("link to see details", C)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("link to see details", C)]
			), t[7] = n, t[8] = a, t[9] = y;
		} else y = t[9];
		return y;
	}
	l.default = p;
}), 226);
