__d("WAWebContactsDrawer.react", [
	"fbt",
	"WAWebContactFilters.react",
	"WAWebContactsContactList.react",
	"WAWebContactsDrawerMenu.react",
	"WAWebContactsFlow.react",
	"WAWebContactsOnlineSection.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlatListController",
	"WAWebSearchInput",
	"WDSIconIcMoreVert.react",
	"WDSMenuBarItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useDeferredValue, m = c.useMemo, p = c.useState, _ = { stickySearch: {
		position: "x7wzq59",
		top: "x13vifvy",
		zIndex: "x12xzxwr",
		$$css: !0
	} };
	function f() {
		var e = m(function() {
			return new (r("WAWebFlatListController"))();
		}, []), t = p(""), n = t[0], a = t[1], i = d(n), l = p("all"), c = l[0], f = l[1], g = p(!1), h = g[0], y = g[1], C = function(t) {
			a(t);
		}, b = function(t) {
			f(t);
		}, v = function() {
			y(!0);
		}, S = function() {
			y(!1);
		}, R = u.jsx(r("WDSMenuBarItem.react"), {
			testid: "menu-bar-menu",
			icon: r("WDSIconIcMoreVert.react"),
			title: s._(
				/*BTDS*/
				""
			),
			wdsMenuToRender: u.jsx(r("WAWebContactsDrawerMenu.react"), { onAddContact: v })
		}, "btn-menu");
		return h ? u.jsx(o("WAWebContactsFlow.react").WAWebContactsFlow, { onEnd: S }) : u.jsxs(r("WAWebDrawer.react"), {
			theme: "white-bg",
			testid: "contacts-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "contacts-tab"
			},
			children: [
				u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
					menu: R ? [R] : void 0
				}),
				u.jsx(o("WAWebSearchInput").DrawerSearchInput, {
					placeholder: s._(
						/*BTDS*/
						""
					),
					onSearch: C,
					containerXStyle: _.stickySearch
				}),
				u.jsx(o("WAWebContactFilters.react").WAWebContactFilters, {
					selectedFilter: c,
					onFilterChange: b
				}),
				u.jsx(r("WAWebContactsOnlineSection.react"), {}),
				u.jsx(r("WAWebDrawerBody.react"), {
					backgroundColor: "default",
					flatListControllers: [e],
					children: u.jsx(r("WAWebContactsContactList.react"), {
						flatListController: e,
						searchQuery: i
					})
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
