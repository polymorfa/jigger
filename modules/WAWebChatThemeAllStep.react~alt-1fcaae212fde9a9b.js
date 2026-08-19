__d("WAWebChatThemeAllStep.react", [
	"fbt",
	"WAWebChatThemeGrid.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.currentThemeId, n = e.currentWallpaperId, a = e.isDoodleEnabled, i = e.onBack, l = e.onSelect, c = e.pickerItems, d = e.solidWallpaperHex, m = e.themeMode;
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
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: u.jsx(r("WAWebChatThemeGrid.react"), {
					currentThemeId: t,
					currentWallpaperId: n,
					onSelect: l,
					showDoodle: a,
					pickerItems: c,
					solidWallpaperHex: d,
					themeMode: m
				})
			}) })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
