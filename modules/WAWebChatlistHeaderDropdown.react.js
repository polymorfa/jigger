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
	"react-compiler-runtime",
	"useWAWebDesktopUpsellWamImpression",
	"useWAWebExternalBetaOptIn",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		var t = o("react-compiler-runtime").c(35), n = e.activeAccountInfo, a = e.chatListCollapsed, i = e.isMultiSelectMode, l = e.startMultiSelect, c = e.updateActiveNavBarItem, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = [o("WAWebSettingsGetters").getShowArchiveV2], t[0] = m) : m = t[0];
		var p = o("useWAWebSettingsValues").useSettingsValues(m), _ = p[0], f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = [], t[1] = f) : f = t[1], u(d, f);
		var g = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), h = g[0], y = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(), C;
		t[2] !== h || t[3] !== y ? (C = {
			isCtaVisible: !1,
			source: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CHATLIST_DROPDOWN,
			isBeta: y,
			isBetaUser: h
		}, t[2] = h, t[3] = y, t[4] = C) : C = t[4], o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression(C);
		var b;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (b = o("WAWebUserPrefsScreenLock").getScreenLockEnabled(), t[5] = b) : b = t[5];
		var v = b, S;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (S = o("WAWebEligibilityLogging").eligibilityLogger.getValue("wa_web_app_lock_upsell"), t[6] = S) : S = t[6];
		var R = S, L;
		t[7] !== c ? (L = s.jsx(r("WAWebBizToolsChatlistHeaderDropdownItem.react"), { updateActiveNavBarItem: c }), t[7] = c, t[8] = L) : L = t[8];
		var E;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (E = s.jsx(r("WAWebNewGroupChatlistHeaderDropdownItem.react"), {}), t[9] = E) : E = t[9];
		var k;
		t[10] !== n ? (k = o("WAWebMobilePlatforms").isSMB() && s.jsx(r("WAWebAdsCreationChatlistHeaderDropdownItem.react"), { activeAccountInfo: n }), t[10] = n, t[11] = k) : k = t[11];
		var I;
		t[12] !== n ? (I = n != null && n !== "not-linked" && o("WAWebCTWAGatingUtils").shouldShowManageAdsDropdown(n) && !o("WAWebBizNativeAdsGatingUtils").nativeAdsWebCreationRolloutEnabledNoExposure() && s.jsx(r("WAWebManageAdsDropdownItem.react"), { activeAccountInfo: n }), t[12] = n, t[13] = I) : I = t[13];
		var T, D, x;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (T = s.jsx(r("WAWebBizBroadcastsChatlistHeaderDropdownItem.react"), {}), D = s.jsx(r("WAWebCatalogChatlistHeaderDropdownItem.react"), {}), x = s.jsx(r("WAWebOrdersChatlistHeaderDropdownItem.react"), {}), t[14] = T, t[15] = D, t[16] = x) : (T = t[14], D = t[15], x = t[16]);
		var $;
		t[17] !== _ ? ($ = !_ && s.jsx(r("WAWebArchivedChatlistHeaderDropdownItem.react"), {}), t[17] = _, t[18] = $) : $ = t[18];
		var P, N;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (P = s.jsx(r("WAWebQuickRepliesChatlistHeaderDropdownItem.react"), {}), N = s.jsx(r("WAWebStarredChatlistHeaderDropdownItem.react"), {}), t[19] = P, t[20] = N) : (P = t[19], N = t[20]);
		var M;
		t[21] !== a || t[22] !== i || t[23] !== l ? (M = s.jsx(r("WAWebSelectChatsChatlistHeaderDropdownItem.react"), {
			chatListCollapsed: a,
			isMultiSelectMode: i,
			startMultiSelect: l
		}), t[21] = a, t[22] = i, t[23] = l, t[24] = M) : M = t[24];
		var w, A, F, O;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (w = s.jsx(r("WAWebListsChatlistHeaderDropdownItem.react"), {}), A = s.jsx(r("WAWebMarkAllChatsAsReadChatlistHeaderDropdownItem.react"), {}), F = s.jsx(r("WDSMenuItem.react"), { type: "separator" }), O = v ? s.jsx(r("WAWebScreenLockChatlistHeaderDropdownItem.react"), {}) : s.jsxs(s.Fragment, { children: [R && s.jsx(r("WAWebScreenLockChatlistHeaderDropdownItem.react"), {}), s.jsx(r("WAWebLogoutChatlistHeaderDropdownItem.react"), {})] }), t[25] = w, t[26] = A, t[27] = F, t[28] = O) : (w = t[25], A = t[26], F = t[27], O = t[28]);
		var B;
		if (t[29] !== $ || t[30] !== M || t[31] !== L || t[32] !== k || t[33] !== I) {
			var W = s.jsxs(s.Fragment, { children: [
				L,
				E,
				k,
				I,
				T,
				D,
				x,
				$,
				P,
				N,
				M,
				w,
				A,
				F,
				O
			] });
			B = s.jsx(r("WDSMenu.react"), { children: W }), t[29] = $, t[30] = M, t[31] = L, t[32] = k, t[33] = I, t[34] = B;
		} else B = t[34];
		return B;
	}
	function d() {
		o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.OPEN), o("WAWebMobilePlatforms").isSMB() && o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
			featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
			userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
			surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.OVERFLOW_MENU,
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.OVERFLOW_MENU,
			userActionTarget: "overflow_menu_button"
		});
	}
	l.default = c;
}), 98);
