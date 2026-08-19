__d("WAWebBizAdCreationNavBarItem.react", [
	"fbt",
	"WAWebActiveAccountInfoContext.react",
	"WAWebBizNativeAdsWamLogger",
	"WAWebChatlistUtils",
	"WAWebNavBarLogEvents",
	"WAWebNavBarTypes",
	"WAWebShouldShowAdCreationEntryPoint",
	"WAWebWamEnumLwiEntryPoint",
	"WAWebWamEnumWebcNavbarItemLabel",
	"WDSIconIcCampaignMegaphone.react",
	"WDSIconIcCampaignMegaphoneFilled.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = o("react-compiler-runtime").c(15), n = e.activeNavBarItem, a = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(), i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[0] = i) : i = t[0];
		var l = i, d;
		t[1] !== a ? (d = o("WAWebShouldShowAdCreationEntryPoint").computeShouldShowAdCreationEntryPoint({ activeAccountInfo: a }), t[1] = a, t[2] = d) : d = t[2];
		var m = d, p, _;
		t[3] !== a || t[4] !== m ? (p = function() {
			if (m) {
				var e;
				o("WAWebBizNativeAdsWamLogger").logAdCreationImpression(o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_SCREEN_ICON, (e = a !== "not-linked" && (a == null ? void 0 : a.hasFacebookPage)) != null ? e : !1);
			}
		}, _ = [m, a], t[3] = a, t[4] = m, t[5] = p, t[6] = _) : (p = t[5], _ = t[6]), c(p, _);
		var f = n === o("WAWebNavBarTypes").NavBarItems.AdCreation, g;
		t[7] !== a || t[8] !== f ? (g = function() {
			f || (a != null && o("WAWebChatlistUtils").handleAdCreation({
				adCreationUrlInput: {
					activeAccountInfo: a,
					sourceAdCreation: "whatsapp_smb_web_ad_creation_home_screen_icon"
				},
				lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_SCREEN_ICON
			}), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.ADS_CREATION));
		}, t[7] = a, t[8] = f, t[9] = g) : g = t[9];
		var h = g, y = r(f ? "WDSIconIcCampaignMegaphoneFilled.react" : "WDSIconIcCampaignMegaphone.react"), C;
		return t[10] !== h || t[11] !== y || t[12] !== f || t[13] !== m ? (C = m ? u.jsx(r("WDSMenuBarItem.react"), {
			icon: y,
			title: l,
			testid: "navbar-item-ads-creation",
			isActive: f,
			onClick: h,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}) : null, t[10] = h, t[11] = y, t[12] = f, t[13] = m, t[14] = C) : C = t[14], C;
	}
	l.BizAdCreationNavBarItem = d;
}), 226);
