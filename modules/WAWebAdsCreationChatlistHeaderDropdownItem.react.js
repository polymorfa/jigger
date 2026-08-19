__d("WAWebAdsCreationChatlistHeaderDropdownItem.react", [
	"WAWebAdCreationDropdownItem.react",
	"WAWebShouldShowAdCreationEntryPoint",
	"WAWebWamEnumLwiEntryPoint",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(5), n = e.activeAccountInfo, a;
		t[0] !== n ? (a = o("WAWebShouldShowAdCreationEntryPoint").computeShouldShowAdCreationEntryPoint({ activeAccountInfo: n }), t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] !== n || t[3] !== i ? (l = i && n != null ? s.jsx(r("WAWebAdCreationDropdownItem.react"), {
			adCreationUrlInput: {
				sourceAdCreation: "whatsapp_smb_web_ad_creation_home_menu_item",
				activeAccountInfo: n
			},
			lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_SCREEN_OVERFLOW_MENU_ITEM
		}) : null, t[2] = n, t[3] = i, t[4] = l) : l = t[4];
		var u = l;
		return u;
	}
	l.default = u;
}), 98);
