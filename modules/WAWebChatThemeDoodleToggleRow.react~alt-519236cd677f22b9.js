__d("WAWebChatThemeDoodleToggleRow.react", [
	"fbt",
	"WAWebChatInfoDrawerRow.react",
	"WDSIconWdsIcDoodlePattern.react",
	"WDSSwitch.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isDoodleEnabled, n = e.isWallpaperPresetActive, a = e.onToggle;
		return u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			testid: "doodle-toggle",
			icon: u.jsx(r("WDSIconWdsIcDoodlePattern.react"), {}),
			onClick: n ? void 0 : a,
			side: u.jsx(r("WDSSwitch.react"), {
				tabIndex: -1,
				value: t,
				disabled: n,
				"aria-label": s._(
					/*BTDS*/
					""
				).toString()
			}),
			title: u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
				/*BTDS*/
				""
			) })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
