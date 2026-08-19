__d("WAWebGroupMembershipApprovalRequestsDrawerMenu.react", [
	"fbt",
	"WAWebFbtCommon",
	"WAWebMembershipApprovalRequestsOrder",
	"WDSIconIcMoreVert.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react"));
	function d(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onSortBySource, l = a.onSortByTime, u = a.orderBy, d = [];
		u !== o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Source && d.push(c.jsx(r("WDSMenuItem.react"), {
			testid: "sort-by-source",
			onPress: i,
			title: s._(
				/*BTDS*/
				""
			)
		}, "sort-by-source")), u !== o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Time && d.push(c.jsx(r("WDSMenuItem.react"), {
			testid: "sort-by-time",
			onPress: l,
			title: s._(
				/*BTDS*/
				""
			)
		}, "sort-by-time"));
		var m = c.jsx(r("WDSMenuBarItem.react"), {
			ref: n,
			testid: "menu-bar-menu",
			icon: r("WDSIconIcMoreVert.react"),
			title: r("WAWebFbtCommon")("Context menu"),
			wdsMenuToRender: c.jsx(r("WDSMenu.react"), { children: d })
		});
		return m;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
