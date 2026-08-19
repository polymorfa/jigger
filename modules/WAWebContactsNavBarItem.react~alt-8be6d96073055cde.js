__d("WAWebContactsNavBarItem.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebAppRootInteractionContext.react",
	"WAWebContactsDrawer.react",
	"WAWebDrawerManager",
	"WAWebInteractionTracePolicy",
	"WAWebMidDrawerEmptyState.react",
	"WAWebNavBarTypes",
	"WDSIconIcContacts.react",
	"WDSMenuBarItem.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = t === o("WAWebNavBarTypes").NavBarItems.Contacts, l = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CONTACTS
		}), c = l.startInteraction, d = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!i) {
					c();
					var e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(u.jsx(r("WAWebContactsDrawer.react"), {}), {
						transition: "none",
						disableRotateFocus: !0
					});
					e && (a(o("WAWebNavBarTypes").NavBarItems.Contacts), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
						descriptorType: "mid_drawer_empty_state",
						navBarItem: o("WAWebNavBarTypes").NavBarItems.Contacts
					} : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: o("WAWebNavBarTypes").NavBarItems.Contacts }), {
						transition: "none",
						disableRotateFocus: !0
					}));
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), m = r("WDSIconIcContacts.react"), p = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: m,
			title: p,
			testid: "navbar-item-contacts",
			isActive: i,
			onClick: d,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
