__d("WAWebChatThemeWallpaperStep.react", [
	"fbt",
	"WAWebChatInfoDrawerRow.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WDSIconIcColorize.react",
	"WDSIconIcRefresh.react",
	"WDSMenuBarItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.children, n = e.isResetDisabled, a = e.onBack, i = e.onReset, l = e.onSolidColorPush;
		return u.jsxs("div", {
			className: "x78zum5 xdt5ytf x5yr21d",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				title: s._(
					/*BTDS*/
					""
				),
				onBack: a,
				focusBackOrCancel: !0,
				menu: u.jsx(r("WDSMenuBarItem.react"), {
					disabled: n,
					testid: "wallpaper_reset_btn",
					icon: r("WDSIconIcRefresh.react"),
					onClick: i,
					title: s._(
						/*BTDS*/
						""
					)
				})
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: [u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
					testid: "set-wallpaper-color-item",
					icon: u.jsx(r("WDSIconIcColorize.react"), {}),
					onClick: l,
					title: u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
						/*BTDS*/
						""
					) })
				}), t]
			}) })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
