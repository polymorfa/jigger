__d("WAWebChatlistHeaderDropdown.react", [
	"WAWebAdsCreationChatlistHeaderDropdownItem.react",
	"WAWebArchivedChatlistHeaderDropdownItem.react",
	"WAWebBizBroadcastsChatlistHeaderDropdownItem.react",
	"WAWebBizNativeAdsGatingUtils",
	"WAWebBizToolsChatlistHeaderDropdownItem.react",
	"WAWebCTWAGatingUtils",
	"WAWebCatalogChatlistHeaderDropdownItem.react",
	"WAWebChatlistHeaderDropdownLogEvents",
	"WAWebEligibilityLogging",
	"WAWebListsChatlistHeaderDropdownItem.react",
	"WAWebLogoutChatlistHeaderDropdownItem.react",
	"WAWebManageAdsDropdownItem.react",
	"WAWebMarkAllChatsAsReadChatlistHeaderDropdownItem.react",
	"WAWebMobilePlatforms",
	"WAWebNewGroupChatlistHeaderDropdownItem.react",
	"WAWebOrdersChatlistHeaderDropdownItem.react",
	"WAWebQuickRepliesChatlistHeaderDropdownItem.react",
	"WAWebSMBUserJourneyLogger",
	"WAWebScreenLockChatlistHeaderDropdownItem.react",
	"WAWebSelectChatsChatlistHeaderDropdownItem.react",
	"WAWebSettingsGetters",
	"WAWebStarredChatlistHeaderDropdownItem.react",
	"WAWebUserPrefsScreenLock",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSmbFeatureNameEnum",
	"WAWebWamEnumSmbUserActionTypeEnum",
	"WAWebWamEnumSurfaceType",
	"WAWebWamEnumWebcMenuItemLabel",
	"WAWebWamEnumWebcNativeUpsellCtaSourceType",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebDesktopUpsellWamImpression",
	"useWAWebExternalBetaOptIn",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = e.activeAccountInfo, n = e.chatListCollapsed, a = e.isMultiSelectMode, i = e.startMultiSelect, l = e.updateActiveNavBarItem, c = o("useWAWebSettingsValues").useSettingsValues([o("WAWebSettingsGetters").getShowArchiveV2]), d = c[0];
		u(function() {
			o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.OPEN), o("WAWebMobilePlatforms").isSMB() && o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
				featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
				userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.OVERFLOW_MENU,
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.OVERFLOW_MENU,
				userActionTarget: "overflow_menu_button"
			});
		}, []);
		var m = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), p = m[0], _ = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb();
		o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression({
			isCtaVisible: !1,
			source: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CHATLIST_DROPDOWN,
			isBeta: _,
			isBetaUser: p
		});
		var f = o("WAWebUserPrefsScreenLock").getScreenLockEnabled(), g = o("WAWebEligibilityLogging").eligibilityLogger.getValue("wa_web_app_lock_upsell"), h = s.jsxs(s.Fragment, { children: [
			s.jsx(r("WAWebBizToolsChatlistHeaderDropdownItem.react"), { updateActiveNavBarItem: l }),
			s.jsx(r("WAWebNewGroupChatlistHeaderDropdownItem.react"), {}),
			o("WAWebMobilePlatforms").isSMB() && s.jsx(r("WAWebAdsCreationChatlistHeaderDropdownItem.react"), { activeAccountInfo: t }),
			t != null && t !== "not-linked" && o("WAWebCTWAGatingUtils").shouldShowManageAdsDropdown(t) && !o("WAWebBizNativeAdsGatingUtils").nativeAdsWebCreationRolloutEnabledNoExposure() && s.jsx(r("WAWebManageAdsDropdownItem.react"), { activeAccountInfo: t }),
			s.jsx(r("WAWebBizBroadcastsChatlistHeaderDropdownItem.react"), {}),
			s.jsx(r("WAWebCatalogChatlistHeaderDropdownItem.react"), {}),
			s.jsx(r("WAWebOrdersChatlistHeaderDropdownItem.react"), {}),
			!d && s.jsx(r("WAWebArchivedChatlistHeaderDropdownItem.react"), {}),
			s.jsx(r("WAWebQuickRepliesChatlistHeaderDropdownItem.react"), {}),
			s.jsx(r("WAWebStarredChatlistHeaderDropdownItem.react"), {}),
			s.jsx(r("WAWebSelectChatsChatlistHeaderDropdownItem.react"), {
				chatListCollapsed: n,
				isMultiSelectMode: a,
				startMultiSelect: i
			}),
			s.jsx(r("WAWebListsChatlistHeaderDropdownItem.react"), {}),
			s.jsx(r("WAWebMarkAllChatsAsReadChatlistHeaderDropdownItem.react"), {}),
			s.jsx(r("WDSMenuItem.react"), { type: "separator" }),
			f ? s.jsx(r("WAWebScreenLockChatlistHeaderDropdownItem.react"), {}) : s.jsxs(s.Fragment, { children: [g && s.jsx(r("WAWebScreenLockChatlistHeaderDropdownItem.react"), {}), s.jsx(r("WAWebLogoutChatlistHeaderDropdownItem.react"), {})] })
		] });
		return s.jsx(r("WDSMenu.react"), { children: h });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
