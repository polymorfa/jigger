__d("WAWebChatThemeSolidColorStep.react", [
	"fbt",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebSolidColorGrid.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = e.doodleToggleRow, a = e.isDoodleEnabled, i = e.onBack, l = e.onSelect, c = e.themeMode;
		return u.jsxs("div", {
			className: "x78zum5 xdt5ytf x5yr21d",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				title: s._(
					/*BTDS*/
					""
				),
				onBack: i,
				focusBackOrCancel: !0
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: [n, u.jsx(r("WAWebSolidColorGrid.react"), {
					chat: t,
					onSelect: l,
					showDoodle: a,
					themeMode: c
				})]
			}) })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
