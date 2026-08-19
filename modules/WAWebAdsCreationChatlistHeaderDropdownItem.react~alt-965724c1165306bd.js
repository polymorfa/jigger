__d("WAWebAdsCreationChatlistHeaderDropdownItem.react", [
	"WAWebAdCreationDropdownItem.react",
	"WAWebShouldShowAdCreationEntryPoint",
	"WAWebWamEnumLwiEntryPoint",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.activeAccountInfo, n = o("WAWebShouldShowAdCreationEntryPoint").computeShouldShowAdCreationEntryPoint({ activeAccountInfo: t }), a = n && t != null ? s.jsx(r("WAWebAdCreationDropdownItem.react"), {
			adCreationUrlInput: {
				sourceAdCreation: "whatsapp_smb_web_ad_creation_home_menu_item",
				activeAccountInfo: t
			},
			lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_SCREEN_OVERFLOW_MENU_ITEM
		}) : null;
		return a;
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
