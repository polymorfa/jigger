__d("WAWebBizToolsNavBarItem.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizToolsFlowLoadable",
	"WAWebBizToolsGatingUtils",
	"WAWebBusinessProfileCollection",
	"WAWebChatAssignmentGatingUtils",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebMidDrawerEmptyState.react",
	"WAWebMobilePlatforms",
	"WAWebNavBarLogEvents",
	"WAWebNavBarTypes",
	"WAWebNux",
	"WAWebSMBUserJourneyLogger",
	"WAWebStorefrontFilledIcon.react",
	"WAWebStorefrontIcon.react",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumBusinessToolsEntryPointType",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSmbFeatureNameEnum",
	"WAWebWamEnumSmbUserActionTypeEnum",
	"WAWebWamEnumSurfaceType",
	"WAWebWamEnumWebcNavbarItemLabel",
	"WDSMenuBarItem.react",
	"react",
	"useWAWebAudienceImportIsFeatureSupported",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState;
	function p(e) {
		"use no forget";
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem, a = o("WAWebMobilePlatforms").isSMB(), i = d(function() {
			return o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
		}, []), l = m(!1), c = l[0], p = l[1];
		a && o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(i).then(function() {
			p(!0);
		});
		var _ = d(function() {
			return o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(i);
		}, [i]), f = o("useWAWebAudienceImportIsFeatureSupported").useWAWebAudienceImportIsFeatureSupported(), g = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_BROADCAST_AUDIENCE_UPLOAD), h = g[0], y = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_AI_TOOLS_NUX), C = y[0], b = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(_, "change:profileOptions", b);
		var v = c && !o("WAWebBizCatalogGatingUtils").blockCatalogCreationECommerceComplianceIndia(_), S = t === o("WAWebNavBarTypes").NavBarItems.BizTools, R = S ? o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon : o("WAWebStorefrontIcon.react").StorefrontIcon, L = async function() {
			if (!S) {
				var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(u.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, { entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_BUSINESS_TOOLS_TAB }), {
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
					transition: "pop-drawer-fast",
					focusOnUnMount: !0
				});
				e && (n(o("WAWebNavBarTypes").NavBarItems.BizTools), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.BUSINESS_TOOLS), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "mid_drawer_empty_state",
					navBarItem: o("WAWebNavBarTypes").NavBarItems.BizTools
				} : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: o("WAWebNavBarTypes").NavBarItems.BizTools }), {
					transition: "none",
					disableRotateFocus: !0
				}), o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
					featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
					userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
					surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR,
					userActionTarget: "business_tools_button"
				}));
			}
		}, E = s._(
			/*BTDS*/
			""
		), k = h && f === !0, I = C && o("WAWebChatAssignmentGatingUtils").isBizAIToolsSettingsEnabled();
		return a && v && o("WAWebBizToolsGatingUtils").isBizToolsDrawerEnabled() ? u.jsx(r("WDSMenuBarItem.react"), {
			icon: R,
			title: E,
			testid: "navbar-item-biz-tools",
			isActive: S,
			onClick: L,
			activityIndicator: k || I ? {
				border: !0,
				size: "small"
			} : void 0,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}) : null;
	}
	p.displayName = p.name + " [from " + i.id + "]", l.BizToolsNavBarItem = p;
}), 226);
