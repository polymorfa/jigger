__d("WAWebSelectAllMenuBarItem.react", [
	"fbt",
	"WDSIconIcCheckBox.react",
	"WDSIconIcCheckBoxOutlineBlank.react",
	"WDSMenuBarItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isAllSelected, n = t === void 0 ? !1 : t, o = e.onClick, a = e.ref, i = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), l = r(n ? "WDSIconIcCheckBoxOutlineBlank.react" : "WDSIconIcCheckBox.react");
		return u.jsx(r("WDSMenuBarItem.react"), {
			ref: a,
			testid: "menu-bar-select-all",
			icon: l,
			title: i,
			onClick: o
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
