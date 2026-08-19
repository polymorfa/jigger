__d("WAWebSelectAllMenuBarItem.react", [
	"fbt",
	"WDSIconIcCheckBox.react",
	"WDSIconIcCheckBoxOutlineBlank.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(7), n = e.isAllSelected, a = e.onClick, i = e.ref, l = n === void 0 ? !1 : n, c;
		t[0] !== l ? (c = l ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = l, t[1] = c) : c = t[1];
		var d = c, m = r(l ? "WDSIconIcCheckBoxOutlineBlank.react" : "WDSIconIcCheckBox.react"), p;
		return t[2] !== m || t[3] !== a || t[4] !== i || t[5] !== d ? (p = u.jsx(r("WDSMenuBarItem.react"), {
			ref: i,
			testid: "menu-bar-select-all",
			icon: m,
			title: d,
			onClick: a
		}), t[2] = m, t[3] = a, t[4] = i, t[5] = d, t[6] = p) : p = t[6], p;
	}
	l.default = c;
}), 226);
