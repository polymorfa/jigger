__d("WAWebChatThemeWallpaperGrid.react", [
	"WAWebChatThemeGrid.react",
	"WAWebNoop",
	"WAWebSolidColorPalette",
	"WAWebSolidColorSwatch.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.activeSolidColorHex, n = e.currentThemeId, a = e.currentWallpaperId, i = e.isDoodleEnabled, l = e.onSelect, u = e.onSolidColorSelect, c = e.pickerItems, d = e.snapshotDoodleEnabled, m = e.snapshotSolidColor, p = e.testid, _ = e.themeMode;
		return s.jsx("div", {
			"data-testid": p,
			children: s.jsx(r("WAWebChatThemeGrid.react"), {
				currentThemeId: n,
				currentWallpaperId: a,
				onSelect: l,
				pickerItems: c,
				showDoodle: i,
				themeMode: _,
				variant: "wallpaper",
				children: m != null ? s.jsx(r("WAWebSolidColorSwatch.react"), {
					colorHex: m,
					colorName: o("WAWebSolidColorPalette").getSolidColorName(m),
					doodleOpacity: o("WAWebSolidColorPalette").getSolidColorDoodleOpacity(m, _),
					isDefault: o("WAWebSolidColorPalette").isDefaultSolidColor(m),
					isSelected: t != null && t.toUpperCase() === m.toUpperCase(),
					onBlur: r("WAWebNoop"),
					onClick: function() {
						return u(m);
					},
					onFocus: r("WAWebNoop"),
					showDoodle: t != null ? i : d,
					tabIndex: 0
				}) : null
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
