__d("WAWebChatThemeSolidColorStep.react", [
	"fbt",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebSolidColorGrid.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(15), n = e.chat, a = e.doodleToggleRow, i = e.isDoodleEnabled, l = e.onBack, c = e.onSelect, d = e.themeMode, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x78zum5 xdt5ytf x5yr21d" }, t[0] = m) : m = t[0];
		var p;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[1] = p) : p = t[1];
		var _;
		t[2] !== l ? (_ = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			title: p,
			onBack: l,
			focusBackOrCancel: !0
		}), t[2] = l, t[3] = _) : _ = t[3];
		var f;
		t[4] !== n || t[5] !== i || t[6] !== c || t[7] !== d ? (f = u.jsx(r("WAWebSolidColorGrid.react"), {
			chat: n,
			onSelect: c,
			showDoodle: i,
			themeMode: d
		}), t[4] = n, t[5] = i, t[6] = c, t[7] = d, t[8] = f) : f = t[8];
		var g;
		t[9] !== a || t[10] !== f ? (g = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			children: [a, f]
		}) }), t[9] = a, t[10] = f, t[11] = g) : g = t[11];
		var h;
		return t[12] !== _ || t[13] !== g ? (h = u.jsxs("div", babelHelpers.extends({}, m, { children: [_, g] })), t[12] = _, t[13] = g, t[14] = h) : h = t[14], h;
	}
	l.default = c;
}), 226);
