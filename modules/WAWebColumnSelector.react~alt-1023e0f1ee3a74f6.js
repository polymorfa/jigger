__d("WAWebColumnSelector.react", [
	"fbt",
	"WAWebContactManagerListViewColumns",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WDSChip.react",
	"WDSIconIcTune.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useRef, d = new Set(["actions"]);
	function m(e) {
		var t = e.columnOrder, n = e.onToggleColumn, a = e.testid, i = e.visibleColumns, l = c(null), m = u.jsx(r("WDSMenu.react"), { children: t.filter(function(e) {
			return !d.has(e);
		}).map(function(e) {
			var t = o("WAWebContactManagerListViewColumns").ALWAYS_VISIBLE_COLUMNS.includes(e);
			return u.jsx(r("WDSMenuItem.react"), {
				title: o("WAWebContactManagerListViewColumns").getColumnLabel(e),
				isToggleable: !0,
				toggled: i.includes(e),
				onPress: function() {
					if (!t) {
						var r = i.includes(e) ? "hidden" : "visible";
						o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.editColumnToggle(e, r), n(e);
					}
				},
				disabled: t,
				testid: "column-selector-" + e
			}, e);
		}) }), p = r("useWDSMenu")({
			targetRef: l,
			menu: m,
			dismissable: !0
		}), _ = p.closeMenu, f = p.isMenuOpen, g = p.menuPortal, h = p.openMenu, y = function() {
			f ? _() : (o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.viewColumnsMenu(i.length), h());
		};
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSChip.react"), {
			ref: l,
			Icon: r("WDSIconIcTune.react"),
			label: s._(
				/*BTDS*/
				""
			),
			showEndDropdownIcon: !0,
			onPress: y,
			"aria-haspopup": "menu",
			"aria-expanded": f,
			testid: a != null ? a : "customer_manager_column_selector_chip"
		}), g] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
