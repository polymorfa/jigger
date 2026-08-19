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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = e.activeNavBarItem, n = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(), a = s._(
			/*BTDS*/
			""
		), i = o("WAWebShouldShowAdCreationEntryPoint").computeShouldShowAdCreationEntryPoint({ activeAccountInfo: n });
		c(function() {
			if (i) {
				var e;
				o("WAWebBizNativeAdsWamLogger").logAdCreationImpression(o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_SCREEN_ICON, (e = n !== "not-linked" && (n == null ? void 0 : n.hasFacebookPage)) != null ? e : !1);
			}
		}, [i, n]);
		var l = t === o("WAWebNavBarTypes").NavBarItems.AdCreation, d = function() {
			l || (n != null && o("WAWebChatlistUtils").handleAdCreation({
				adCreationUrlInput: {
					activeAccountInfo: n,
					sourceAdCreation: "whatsapp_smb_web_ad_creation_home_screen_icon"
				},
				lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_SCREEN_ICON
			}), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.ADS_CREATION));
		}, m = r(l ? "WDSIconIcCampaignMegaphoneFilled.react" : "WDSIconIcCampaignMegaphone.react");
		return i ? u.jsx(r("WDSMenuBarItem.react"), {
			icon: m,
			title: a,
			testid: "navbar-item-ads-creation",
			isActive: l,
			onClick: d,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}) : null;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.BizAdCreationNavBarItem = d;
}), 226);
