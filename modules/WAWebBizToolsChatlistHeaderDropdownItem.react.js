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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.updateActiveNavBarItem;
		if (!o("WAWebBizToolsGatingUtils").isBizToolsDrawerEnabled()) return null;
		var a;
		t[0] !== n ? (a = function(t) {
			t == null || t.stopPropagation(), o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.BUSINESS_TOOLS), n != null && n(o("WAWebNavBarTypes").NavBarItems.BizTools), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, { entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_CONVERSATIONS }), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				transition: "pop-drawer-fast"
			});
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[2] = l) : l = t[2];
		var c = l, d;
		return t[3] !== i ? (d = u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-biz-tools menu-item",
			Icon: o("WAWebStorefrontIcon.react").StorefrontIcon,
			onPress: i,
			title: c
		}), t[3] = i, t[4] = d) : d = t[4], d;
	}
	l.default = c;
}), 226);
