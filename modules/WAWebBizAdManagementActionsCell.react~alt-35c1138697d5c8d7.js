__d("WAWebBizAdManagementActionsCell.react", [
	"fbt",
	"WAWebBizImpressionLoggingWrapper.react",
	"WAWebBizNativeAdsRecreateConstants",
	"WAWebBizNativeAdsWamLogger",
	"WAWebFlex.react",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"WDSButton.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcDelete.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcPauseCircle.react",
	"WDSIconIcPlayArrow.react",
	"WDSIconIcVisibility.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSTooltip.react",
	"react",
	"useWAWebBizAdDeleteModal",
	"useWAWebBizAdPauseModal",
	"useWAWebBizAdResumeWithToast",
	"useWAWebNativeAdsFlowIDContext",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = [], _ = { container: {
		width: "xh8yej3",
		$$css: !0
	} };
	function f(e) {
		var t = e.boostId, n = e.boostingStatus, a = e.isResuming, i = e.manageAdsFlowID, l = e.onDeletePress, c = e.onPausePress, d = e.onRecreatePress, m = e.onResumePress, _ = e.onViewResults, f = e.regulatedCategories, g = f === void 0 ? p : f, h = n === "ACTIVE", y = n === "PAUSED", C = o("WAWebBizNativeAdsRecreateConstants").getRecreateEligibility(n, g), b = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_PAUSE_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, i, t), c();
		}, v = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_RESUME_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, i, t), m();
		}, S = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_DELETE_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, i, t), l();
		}, R = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_SEE_DETAILS_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, i, t), _();
		}, L = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_INLINE_RECREATE_CTA_CLICK, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, i, t), d();
		};
		return u.jsxs(r("WDSMenu.react"), { children: [
			h ? u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcPauseCircle.react"),
				onPress: b,
				title: s._(
					/*BTDS*/
					""
				)
			}) : null,
			y ? u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcPlayArrow.react"),
				disabled: a,
				onPress: v,
				title: a ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}) : null,
			u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcVisibility.react"),
				onPress: R,
				title: s._(
					/*BTDS*/
					""
				)
			}),
			C === "ineligible" ? null : C === "blocked_by_sac" ? u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
				onImpression: function() {
					return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_INLINE_RECREATE_CTA_IMPRESSION, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, i, t, JSON.stringify({ recreate_blocked_reason: "sac" }));
				},
				children: u.jsx(r("WDSTooltip.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					children: u.jsx(r("WDSMenuItem.react"), {
						Icon: r("WDSIconIcContentCopy.react"),
						disabled: !0,
						title: s._(
							/*BTDS*/
							""
						)
					})
				})
			}) : C === "eligible" ? u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcContentCopy.react"),
				onPress: L,
				title: s._(
					/*BTDS*/
					""
				)
			}) : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + C);
			})(),
			u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDelete.react"),
				destructive: !0,
				onPress: S,
				title: s._(
					/*BTDS*/
					""
				)
			})
		] });
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.boostId, n = e.boostingStatus, a = e.onRecreatePress, i = e.onViewResults, l = e.regulatedCategories, s = l === void 0 ? p : l, c = m(null), g = r("useWAWebNativeAdsFlowIDContext")(), h = r("useWAWebBizAdPauseModal")(t), y = r("useWAWebBizAdDeleteModal")(t), C = r("useWAWebBizAdResumeWithToast")(t), b = C[0], v = C[1], S = r("useWDSMenu")({
			dismissable: !0,
			enableUIM: !1,
			menu: u.jsx(f, {
				boostId: t,
				boostingStatus: n,
				isResuming: v,
				manageAdsFlowID: g.manageAdsFlowID,
				onDeletePress: y,
				onPausePress: h,
				onRecreatePress: a,
				onResumePress: b,
				onViewResults: i,
				regulatedCategories: s
			}),
			targetRef: c
		}), R = S.closeMenu, L = S.isMenuOpen, E = S.menuPortal, k = S.openMenu, I = d(function(e) {
			e.stopPropagation(), L ? R() : (o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_ADS_LISTING_THREE_DOTS_CLICKED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, g.manageAdsFlowID, t), k());
		}, [
			L,
			R,
			t,
			g.manageAdsFlowID,
			k
		]);
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "end",
			xstyle: _.container,
			children: [u.jsx(r("WDSButton.react"), {
				ref: c,
				Icon: r("WDSIconIcMoreVert.react"),
				onPress: I,
				size: "small",
				type: "default",
				variant: "borderless"
			}), E]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
