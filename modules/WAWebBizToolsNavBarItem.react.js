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
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebAudienceImportIsFeatureSupported",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState;
	function p(e) {
		"use no forget";
		var t = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = o("WAWebMobilePlatforms").isSMB(), l = d(function() {
			return o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
		}, []), c = m(!1), p = c[0], _ = c[1];
		i && o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(l).then(function() {
			_(!0);
		});
		var f = d(function() {
			return o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(l);
		}, [l]), g = o("useWAWebAudienceImportIsFeatureSupported").useWAWebAudienceImportIsFeatureSupported(), h = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_BROADCAST_AUDIENCE_UPLOAD), y = h[0], C = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_AI_TOOLS_NUX), b = C[0], v = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(f, "change:profileOptions", v);
		var S = p && !o("WAWebBizCatalogGatingUtils").blockCatalogCreationECommerceComplianceIndia(f), R = t === o("WAWebNavBarTypes").NavBarItems.BizTools, L = R ? o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon : o("WAWebStorefrontIcon.react").StorefrontIcon, E = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!R) {
					var e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(u.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, { entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_BUSINESS_TOOLS_TAB }), {
						focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
						transition: "pop-drawer-fast",
						focusOnUnMount: !0
					});
					e && (a(o("WAWebNavBarTypes").NavBarItems.BizTools), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.BUSINESS_TOOLS), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
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
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), k = s._(
			/*BTDS*/
			""
		), I = y && g === !0, T = b && o("WAWebChatAssignmentGatingUtils").isBizAIToolsSettingsEnabled();
		return i && S && o("WAWebBizToolsGatingUtils").isBizToolsDrawerEnabled() ? u.jsx(r("WDSMenuBarItem.react"), {
			icon: L,
			title: k,
			testid: "navbar-item-biz-tools",
			isActive: R,
			onClick: E,
			activityIndicator: I || T ? {
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
