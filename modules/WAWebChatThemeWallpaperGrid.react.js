__d("WAWebChatThemeWallpaperGrid.react", [
	"WAWebChatThemeGrid.react",
	"WAWebNoop",
	"WAWebSolidColorPalette",
	"WAWebSolidColorSwatch.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(18), n = e.activeSolidColorHex, a = e.currentThemeId, i = e.currentWallpaperId, l = e.isDoodleEnabled, u = e.onSelect, c = e.onSolidColorSelect, d = e.pickerItems, m = e.snapshotDoodleEnabled, p = e.snapshotSolidColor, _ = e.testid, f = e.themeMode, g;
		t[0] !== n || t[1] !== l || t[2] !== c || t[3] !== m || t[4] !== p || t[5] !== f ? (g = p != null ? s.jsx(r("WAWebSolidColorSwatch.react"), {
			colorHex: p,
			colorName: o("WAWebSolidColorPalette").getSolidColorName(p),
			doodleOpacity: o("WAWebSolidColorPalette").getSolidColorDoodleOpacity(p, f),
			isDefault: o("WAWebSolidColorPalette").isDefaultSolidColor(p),
			isSelected: n != null && n.toUpperCase() === p.toUpperCase(),
			onBlur: r("WAWebNoop"),
			onClick: function() {
				return c(p);
			},
			onFocus: r("WAWebNoop"),
			showDoodle: n != null ? l : m,
			tabIndex: 0
		}) : null, t[0] = n, t[1] = l, t[2] = c, t[3] = m, t[4] = p, t[5] = f, t[6] = g) : g = t[6];
		var h;
		t[7] !== a || t[8] !== i || t[9] !== l || t[10] !== u || t[11] !== d || t[12] !== g || t[13] !== f ? (h = s.jsx(r("WAWebChatThemeGrid.react"), {
			currentThemeId: a,
			currentWallpaperId: i,
			onSelect: u,
			pickerItems: d,
			showDoodle: l,
			themeMode: f,
			variant: "wallpaper",
			children: g
		}), t[7] = a, t[8] = i, t[9] = l, t[10] = u, t[11] = d, t[12] = g, t[13] = f, t[14] = h) : h = t[14];
		var y;
		return t[15] !== h || t[16] !== _ ? (y = s.jsx("div", {
			"data-testid": _,
			children: h
		}), t[15] = h, t[16] = _, t[17] = y) : y = t[17], y;
	}
	l.default = u;
}), 98);
