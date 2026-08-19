__d("WAWebManageListButton.react", [
	"fbt",
	"WAWebCreateOrEditListDrawer.react",
	"WAWebDrawerManager",
	"WAWebKeyboardHotKeys.react",
	"WAWebTabOrder",
	"WAWebWamEnumUpdateEntryPoint",
	"WDSFontTokenStyles",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		button: {
			cursor: "x1ypdohk",
			display: "x78zum5",
			maxWidth: "x193iq5w",
			minWidth: "xeuugli",
			$$css: !0
		},
		manageListText: {
			color: "xk4n5i7",
			display: "x1lliihq",
			maxWidth: "x193iq5w",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(20), a = t.listId, i = t.listName, l;
		n[0] !== a ? (l = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(r("WAWebCreateOrEditListDrawer.react"), {
				listId: a,
				onBack: o("WAWebDrawerManager").closeDrawerLeft,
				onClose: o("WAWebDrawerManager").closeDrawerLeft,
				entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LIST_FILTER_MANAGE
			}), { focusOnUnMount: !0 });
		}, n[0] = a, n[1] = l) : l = n[1];
		var u = l, m;
		n[2] !== i ? (m = s._(
			/*BTDS*/
			"",
			[s._param("listName", i)]
		), n[2] = i, n[3] = m) : m = n[3];
		var p = m, _;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x78zum5 x6s0dn4 xl56j7k xdd8jsf x1phvje8 xcldk2z" }, n[4] = _) : _ = n[4];
		var f;
		n[5] !== u ? (f = {
			enter: u,
			space: u
		}, n[5] = u, n[6] = f) : f = n[6];
		var g;
		n[7] !== p ? (g = p.toString(), n[7] = p, n[8] = g) : g = n[8];
		var h;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (h = (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, d.manageListText), n[9] = h) : h = n[9];
		var y;
		n[10] !== i ? (y = s._(
			/*BTDS*/
			"",
			[s._param("listName", i)]
		), n[10] = i, n[11] = y) : y = n[11];
		var C;
		n[12] !== i || n[13] !== y ? (C = c.jsx("span", babelHelpers.extends({ title: i }, h, { children: y })), n[12] = i, n[13] = y, n[14] = C) : C = n[14];
		var b;
		return n[15] !== u || n[16] !== f || n[17] !== g || n[18] !== C ? (b = c.jsx("div", babelHelpers.extends({}, _, { children: c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: f,
			"aria-label": g,
			role: "button",
			"data-testid": "manage-list-button",
			onClick: u,
			xstyle: d.button,
			tabIndex: 0,
			"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
			children: C
		}) })), n[15] = u, n[16] = f, n[17] = g, n[18] = C, n[19] = b) : b = n[19], b;
	}
	l.default = m;
}), 226);
