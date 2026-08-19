__d("WAWebColumnSelector.react", [
	"fbt",
	"WAWebContactManagerListViewColumns",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WDSChip.react",
	"WDSIconIcTune.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useRef, d = new Set(["actions"]);
	function m(e) {
		var t = o("react-compiler-runtime").c(24), n = e.columnOrder, a = e.onToggleColumn, i = e.testid, l = e.visibleColumns, d = c(null), m;
		if (t[0] !== n || t[1] !== a || t[2] !== l) {
			var _;
			t[4] !== a || t[5] !== l ? (_ = function(t) {
				var e = o("WAWebContactManagerListViewColumns").ALWAYS_VISIBLE_COLUMNS.includes(t);
				return u.jsx(r("WDSMenuItem.react"), {
					title: o("WAWebContactManagerListViewColumns").getColumnLabel(t),
					isToggleable: !0,
					toggled: l.includes(t),
					onPress: function() {
						if (!e) {
							var n = l.includes(t) ? "hidden" : "visible";
							o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.editColumnToggle(t, n), a(t);
						}
					},
					disabled: e,
					testid: "column-selector-" + t
				}, t);
			}, t[4] = a, t[5] = l, t[6] = _) : _ = t[6], m = n.filter(p).map(_), t[0] = n, t[1] = a, t[2] = l, t[3] = m;
		} else m = t[3];
		var f;
		t[7] !== m ? (f = u.jsx(r("WDSMenu.react"), { children: m }), t[7] = m, t[8] = f) : f = t[8];
		var g = f, h;
		t[9] !== g ? (h = {
			targetRef: d,
			menu: g,
			dismissable: !0
		}, t[9] = g, t[10] = h) : h = t[10];
		var y = r("useWDSMenu")(h), C = y.closeMenu, b = y.isMenuOpen, v = y.menuPortal, S = y.openMenu, R;
		t[11] !== C || t[12] !== b || t[13] !== S || t[14] !== l ? (R = function() {
			b ? C() : (o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.viewColumnsMenu(l.length), S());
		}, t[11] = C, t[12] = b, t[13] = S, t[14] = l, t[15] = R) : R = t[15];
		var L = R, E;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
			/*BTDS*/
			""
		), t[16] = E) : E = t[16];
		var k = i != null ? i : "customer_manager_column_selector_chip", I;
		t[17] !== L || t[18] !== b || t[19] !== k ? (I = u.jsx(r("WDSChip.react"), {
			ref: d,
			Icon: r("WDSIconIcTune.react"),
			label: E,
			showEndDropdownIcon: !0,
			onPress: L,
			"aria-haspopup": "menu",
			"aria-expanded": b,
			testid: k
		}), t[17] = L, t[18] = b, t[19] = k, t[20] = I) : I = t[20];
		var T;
		return t[21] !== v || t[22] !== I ? (T = u.jsxs(u.Fragment, { children: [I, v] }), t[21] = v, t[22] = I, t[23] = T) : T = t[23], T;
	}
	function p(e) {
		return !d.has(e);
	}
	l.default = m;
}), 226);
