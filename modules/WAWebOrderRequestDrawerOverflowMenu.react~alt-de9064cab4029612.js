__d("WAWebOrderRequestDrawerOverflowMenu.react", [
	"fbt",
	"WAWebDropdown.react",
	"WAWebDropdownItem.react",
	"WAWebMenuBar.react",
	"WDSIconIcCancel.react",
	"WDSIconIcMoreVert.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react"));
	function d(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onDecline, l = [c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "decline-dropdown-item",
			action: i,
			icon: c.jsx(r("WDSIconIcCancel.react"), {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "decline-dropdown-item")];
		return c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			ref: n,
			testid: "order-request-overflow-menu",
			icon: c.jsx(r("WDSIconIcMoreVert.react"), {}),
			title: s._(
				/*BTDS*/
				""
			),
			dropdownMenu: {
				dirX: o("WAWebDropdown.react").DirX.LEFT,
				flipOnRTL: !0,
				menu: l,
				type: o("WAWebDropdown.react").MenuType.DropdownMenu
			}
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
