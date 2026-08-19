__d("WAWebChatThemeAllStep.react", [
	"fbt",
	"WAWebChatThemeGrid.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(15), n = e.currentThemeId, a = e.currentWallpaperId, i = e.isDoodleEnabled, l = e.onBack, c = e.onSelect, d = e.pickerItems, m = e.solidWallpaperHex, p = e.themeMode, _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x78zum5 xdt5ytf x5yr21d" }, t[0] = _) : _ = t[0];
		var f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[1] = f) : f = t[1];
		var g;
		t[2] !== l ? (g = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			title: f,
			onBack: l,
			focusBackOrCancel: !0
		}), t[2] = l, t[3] = g) : g = t[3];
		var h;
		t[4] !== n || t[5] !== a || t[6] !== i || t[7] !== c || t[8] !== d || t[9] !== m || t[10] !== p ? (h = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			children: u.jsx(r("WAWebChatThemeGrid.react"), {
				currentThemeId: n,
				currentWallpaperId: a,
				onSelect: c,
				showDoodle: i,
				pickerItems: d,
				solidWallpaperHex: m,
				themeMode: p
			})
		}) }), t[4] = n, t[5] = a, t[6] = i, t[7] = c, t[8] = d, t[9] = m, t[10] = p, t[11] = h) : h = t[11];
		var y;
		return t[12] !== g || t[13] !== h ? (y = u.jsxs("div", babelHelpers.extends({}, _, { children: [g, h] })), t[12] = g, t[13] = h, t[14] = y) : y = t[14], y;
	}
	l.default = c;
}), 226);
