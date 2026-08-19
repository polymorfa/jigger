__d("WAWebManageAdsDropdownItem.react", [
	"fbt",
	"WAWebAdsStackRefreshedIcon.react",
	"WAWebBizNativeAdsWamLogger",
	"WAWebChatlistUtils",
	"WAWebWamEnumLwiEntryPoint",
	"WAWebWamEnumManageAdsEntryPoint",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = e.activeAccountInfo;
		c(function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsEntryPointImpression(o("WAWebWamEnumManageAdsEntryPoint").MANAGE_ADS_ENTRY_POINT.WEB_OVERFLOW_MENU);
		}, [t]);
		var n = function(n) {
			n == null || n.preventDefault(), o("WAWebChatlistUtils").handleManageAds({
				activeAccountInfo: t,
				entryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_SCREEN_OVERFLOW_MANAGE_ITEM,
				sourceManageAdsType: "whatsapp_smb_web_manage_ads_home_menu_item"
			});
		}, a = s._(
			/*BTDS*/
			""
		), i = "manage-ads-menu-item";
		return u.jsx(r("WDSMenuItem.react"), {
			Icon: o("WAWebAdsStackRefreshedIcon.react").AdsStackRefreshedIcon,
			onPress: n,
			testid: i,
			title: a
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
