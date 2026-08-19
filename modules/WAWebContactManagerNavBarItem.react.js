__d("WAWebContactManagerNavBarItem.react", [
	"fbt",
	"WAWebContactManagerDrawerLoadable",
	"WAWebContactManagerGating",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebMobilePlatforms",
	"WAWebNavBarTypes",
	"WDSIconIcManageAccounts.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(7), n = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = o("WAWebMobilePlatforms").isSMB(), l = n === o("WAWebNavBarTypes").NavBarItems.ContactManager, c;
		t[0] !== l || t[1] !== a ? (c = function() {
			l || (a(o("WAWebNavBarTypes").NavBarItems.ContactManager), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebContactManagerDrawerLoadable").WAWebContactManagerDrawerLoadable, {}), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				transition: "slide-left"
			}));
		}, t[0] = l, t[1] = a, t[2] = c) : c = t[2];
		var d = c, m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[3] = m) : m = t[3];
		var p = m;
		if (!i || !o("WAWebContactManagerGating").contactManagerEnabled()) return null;
		var _;
		return t[4] !== d || t[5] !== l ? (_ = u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcManageAccounts.react"),
			title: p,
			testid: "navbar-item-customer-manager",
			isActive: l,
			onClick: d,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[4] = d, t[5] = l, t[6] = _) : _ = t[6], _;
	}
	l.default = c;
}), 226);
