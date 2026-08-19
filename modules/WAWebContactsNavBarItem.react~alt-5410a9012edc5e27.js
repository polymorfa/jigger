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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = n === o("WAWebNavBarTypes").NavBarItems.Contacts, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CONTACTS
		}, t[0] = l) : l = t[0];
		var c = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(l), d = c.startInteraction, m;
		t[1] !== i || t[2] !== d || t[3] !== a ? (m = async function() {
			if (!i) {
				d();
				var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(u.jsx(r("WAWebContactsDrawer.react"), {}), {
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
		}, t[1] = i, t[2] = d, t[3] = a, t[4] = m) : m = t[4];
		var p = m, _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[5] = _) : _ = t[5];
		var f = _, g;
		return t[6] !== p || t[7] !== i ? (g = u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcContacts.react"),
			title: f,
			testid: "navbar-item-contacts",
			isActive: i,
			onClick: p,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[6] = p, t[7] = i, t[8] = g) : g = t[8], g;
	}
	l.default = c;
}), 226);
