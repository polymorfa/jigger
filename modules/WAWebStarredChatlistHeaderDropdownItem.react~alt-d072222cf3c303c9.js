__d("WAWebStarredChatlistHeaderDropdownItem.react", [
	"fbt",
	"WAWebChatlistHeaderDropdownLogEvents",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebStarredDrawerLoadable",
	"WAWebStarredMsgCollection",
	"WAWebWamEnumWebcMenuItemLabel",
	"WDSIconIcGrade.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = function(t) {
			t == null || t.stopPropagation(), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebStarredDrawerLoadable").StarredDrawerLoadable, {
				starredMsgs: o("WAWebStarredMsgCollection").AllStarredMsgsCollection,
				onClose: o("WAWebDrawerManager").closeDrawerLeft,
				headerType: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }), o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.STARRED);
		}, t = s._(
			/*BTDS*/
			""
		), n = "mi-starred menu-item";
		return u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcGrade.react"),
			title: t,
			onPress: e,
			testid: n
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
