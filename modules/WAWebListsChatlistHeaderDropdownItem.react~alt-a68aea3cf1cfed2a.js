__d("WAWebListsChatlistHeaderDropdownItem.react", [
	"fbt",
	"WAWebChatlistHeaderDropdownLogEvents",
	"WAWebDrawerManager",
	"WAWebLabelFlowLoadable",
	"WAWebLabelOutlineIcon.react",
	"WAWebListPeopleIcon.react",
	"WAWebListsGatingUtils",
	"WAWebMobilePlatforms",
	"WAWebWamEnumUpdateEntryPoint",
	"WAWebWamEnumWebcMenuItemLabel",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		if (!o("WAWebMobilePlatforms").isSMB()) return null;
		var e = o("WAWebListsGatingUtils").isListsEnabled(), t = function(t) {
			t == null || t.stopPropagation(), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
				isInitialStep: !0,
				entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
			})), o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.LABELS);
		}, n = e ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), a = e ? "mi-lists menu-item" : "mi-labels menu-item";
		return u.jsx(r("WDSMenuItem.react"), {
			testid: a,
			Icon: e ? o("WAWebListPeopleIcon.react").ListPeopleIcon : o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
			onPress: t,
			title: n
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
