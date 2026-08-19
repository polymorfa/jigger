__d("WAWebBizToolsChatlistHeaderDropdownItem.react", [
	"fbt",
	"WAWebBizToolsFlowLoadable",
	"WAWebBizToolsGatingUtils",
	"WAWebChatlistHeaderDropdownLogEvents",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebNavBarTypes",
	"WAWebStorefrontIcon.react",
	"WAWebWamEnumBusinessToolsEntryPointType",
	"WAWebWamEnumWebcMenuItemLabel",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.updateActiveNavBarItem;
		if (!o("WAWebBizToolsGatingUtils").isBizToolsDrawerEnabled()) return null;
		var n = function(n) {
			n == null || n.stopPropagation(), o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.BUSINESS_TOOLS), t != null && t(o("WAWebNavBarTypes").NavBarItems.BizTools), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, { entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_CONVERSATIONS }), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				transition: "pop-drawer-fast"
			});
		}, a = s._(
			/*BTDS*/
			""
		), i = "mi-biz-tools menu-item";
		return u.jsx(r("WDSMenuItem.react"), {
			testid: i,
			Icon: o("WAWebStorefrontIcon.react").StorefrontIcon,
			onPress: n,
			title: a
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
