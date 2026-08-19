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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem, a = t === o("WAWebNavBarTypes").NavBarItems.Contacts, i = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CONTACTS
		}), l = i.startInteraction, c = async function() {
			if (!a) {
				l();
				var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(u.jsx(r("WAWebContactsDrawer.react"), {}), {
					transition: "none",
					disableRotateFocus: !0
				});
				e && (n(o("WAWebNavBarTypes").NavBarItems.Contacts), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "mid_drawer_empty_state",
					navBarItem: o("WAWebNavBarTypes").NavBarItems.Contacts
				} : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: o("WAWebNavBarTypes").NavBarItems.Contacts }), {
					transition: "none",
					disableRotateFocus: !0
				}));
			}
		}, d = r("WDSIconIcContacts.react"), m = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: d,
			title: m,
			testid: "navbar-item-contacts",
			isActive: a,
			onClick: c,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
