__d("WAWebChatThemeWallpaperStep.react", [
	"fbt",
	"WAWebChatInfoDrawerRow.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WDSIconIcColorize.react",
	"WDSIconIcRefresh.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(19), n = e.children, a = e.isResetDisabled, i = e.onBack, l = e.onReset, c = e.onSolidColorPush, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x78zum5 xdt5ytf x5yr21d" }, t[0] = d) : d = t[0];
		var m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[1] = m) : m = t[1];
		var p;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[2] = p) : p = t[2];
		var _;
		t[3] !== a || t[4] !== l ? (_ = u.jsx(r("WDSMenuBarItem.react"), {
			disabled: a,
			testid: "wallpaper_reset_btn",
			icon: r("WDSIconIcRefresh.react"),
			onClick: l,
			title: p
		}), t[3] = a, t[4] = l, t[5] = _) : _ = t[5];
		var f;
		t[6] !== i || t[7] !== _ ? (f = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			title: m,
			onBack: i,
			focusBackOrCancel: !0,
			menu: _
		}), t[6] = i, t[7] = _, t[8] = f) : f = t[8];
		var g;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(r("WDSIconIcColorize.react"), {}), t[9] = g) : g = t[9];
		var h;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
			/*BTDS*/
			""
		) }), t[10] = h) : h = t[10];
		var y;
		t[11] !== c ? (y = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			testid: "set-wallpaper-color-item",
			icon: g,
			onClick: c,
			title: h
		}), t[11] = c, t[12] = y) : y = t[12];
		var C;
		t[13] !== n || t[14] !== y ? (C = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			children: [y, n]
		}) }), t[13] = n, t[14] = y, t[15] = C) : C = t[15];
		var b;
		return t[16] !== f || t[17] !== C ? (b = u.jsxs("div", babelHelpers.extends({}, d, { children: [f, C] })), t[16] = f, t[17] = C, t[18] = b) : b = t[18], b;
	}
	l.default = c;
}), 226);
