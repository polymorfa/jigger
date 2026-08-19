__d("WAWebChatThemeColorStep.react", [
	"fbt",
	"WAWebChatThemeGrid.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WDSIconIcRefresh.react",
	"WDSMenuBarItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.currentThemeId, n = e.isResetDisabled, a = e.onBack, i = e.onReset, l = e.onSelect, c = e.orderedColorThemes, d = e.themeMode;
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
					testid: "chat_color_reset_btn",
					icon: r("WDSIconIcRefresh.react"),
					onClick: i,
					title: s._(
						/*BTDS*/
						""
					)
				})
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: u.jsx(r("WAWebChatThemeGrid.react"), {
					currentThemeId: t,
					onSelect: l,
					themes: c,
					themeMode: d,
					variant: "color"
				})
			}) })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
