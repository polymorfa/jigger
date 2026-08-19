__d("WAWebChatThemeColorStep.react", [
	"fbt",
	"WAWebChatThemeGrid.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WDSIconIcRefresh.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(17), n = e.currentThemeId, a = e.isResetDisabled, i = e.onBack, l = e.onReset, c = e.onSelect, d = e.orderedColorThemes, m = e.themeMode, p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x78zum5 xdt5ytf x5yr21d" }, t[0] = p) : p = t[0];
		var _;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[1] = _) : _ = t[1];
		var f;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[2] = f) : f = t[2];
		var g;
		t[3] !== a || t[4] !== l ? (g = u.jsx(r("WDSMenuBarItem.react"), {
			disabled: a,
			testid: "chat_color_reset_btn",
			icon: r("WDSIconIcRefresh.react"),
			onClick: l,
			title: f
		}), t[3] = a, t[4] = l, t[5] = g) : g = t[5];
		var h;
		t[6] !== i || t[7] !== g ? (h = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			title: _,
			onBack: i,
			focusBackOrCancel: !0,
			menu: g
		}), t[6] = i, t[7] = g, t[8] = h) : h = t[8];
		var y;
		t[9] !== n || t[10] !== c || t[11] !== d || t[12] !== m ? (y = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			children: u.jsx(r("WAWebChatThemeGrid.react"), {
				currentThemeId: n,
				onSelect: c,
				themes: d,
				themeMode: m,
				variant: "color"
			})
		}) }), t[9] = n, t[10] = c, t[11] = d, t[12] = m, t[13] = y) : y = t[13];
		var C;
		return t[14] !== h || t[15] !== y ? (C = u.jsxs("div", babelHelpers.extends({}, p, { children: [h, y] })), t[14] = h, t[15] = y, t[16] = C) : C = t[16], C;
	}
	l.default = c;
}), 226);
