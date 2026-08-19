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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem, a = o("WAWebMobilePlatforms").isSMB(), i = t === o("WAWebNavBarTypes").NavBarItems.ContactManager, l = function() {
			i || (n(o("WAWebNavBarTypes").NavBarItems.ContactManager), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebContactManagerDrawerLoadable").WAWebContactManagerDrawerLoadable, {}), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				transition: "slide-left"
			}));
		}, c = r("WDSIconIcManageAccounts.react"), d = s._(
			/*BTDS*/
			""
		);
		return !a || !o("WAWebContactManagerGating").contactManagerEnabled() ? null : u.jsx(r("WDSMenuBarItem.react"), {
			icon: c,
			title: d,
			testid: "navbar-item-customer-manager",
			isActive: i,
			onClick: l,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
