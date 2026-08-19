__d("WAWebQuickRepliesChatlistHeaderDropdownItem.react", [
	"fbt",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebQuickRepliesFlowLoadable",
	"WAWebQuickReplyGatingUtils",
	"WDSIconIcBolt.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		if (!o("WAWebQuickReplyGatingUtils").quickRepliesManagementEnabled()) return null;
		var e = function(t) {
			t == null || t.stopPropagation(), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebQuickRepliesFlowLoadable").QuickRepliesFlowLoadable, { isInitialStep: !0 }), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, t = s._(
			/*BTDS*/
			""
		), n = "mi-quick-replies menu-item";
		return u.jsx(r("WDSMenuItem.react"), {
			testid: n,
			Icon: r("WDSIconIcBolt.react"),
			onPress: e,
			title: t
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
