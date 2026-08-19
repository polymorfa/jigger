__d("WAWebProductCollectionCollectionsManagementDrawerMenu", [
	"fbt",
	"WAWebDropdown.react",
	"WAWebDropdownItem.react",
	"WAWebMenuBar.react",
	"WAWebNoop",
	"WAWebReorderRefreshedIcons",
	"WDSIconIcMoreVert.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isReorderEnabled, n = e.onReorder, a = n === void 0 ? r("WAWebNoop") : n, i = e.ref, l = [];
		return t && l.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "menu-item",
			action: a,
			icon: u.jsx(r("WAWebReorderRefreshedIcons"), {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "reorder-button")), l.length === 0 ? null : u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			ref: i,
			testid: "menu-bar-menu",
			icon: u.jsx(r("WDSIconIcMoreVert.react"), {}),
			title: s._(
				/*BTDS*/
				""
			),
			dropdownMenu: {
				menu: l,
				type: o("WAWebDropdown.react").MenuType.DropdownMenu,
				flipOnRTL: !0,
				dirX: o("WAWebDropdown.react").DirX.LEFT
			}
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
