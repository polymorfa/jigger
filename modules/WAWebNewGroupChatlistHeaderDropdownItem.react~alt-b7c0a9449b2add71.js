__d("WAWebNewGroupChatlistHeaderDropdownItem.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebChatlistHeaderDropdownLogEvents",
	"WAWebDrawerManager",
	"WAWebModalManager",
	"WAWebNewGroupFlowLoadable",
	"WAWebReachoutTimelockRestrictedModalLoadable",
	"WAWebReachoutTimelockUtils",
	"WAWebWamEnumWebcMenuItemLabel",
	"WDSIconIcGroupAdd.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = function(t) {
			if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
				return;
			}
			t == null || t.stopPropagation(), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "new_group",
				isSubFlow: !1
			} : u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
				onEnd: o("WAWebDrawerManager").closeDrawerLeft,
				onCreateGroup: async function(t) {
					await t, o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
				},
				isSubFlow: !1
			})), o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.NEW_GROUP);
		}, t = s._(
			/*BTDS*/
			""
		), n = "mi-new-group menu-item";
		return u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcGroupAdd.react"),
			title: t,
			onPress: e,
			testid: n
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
