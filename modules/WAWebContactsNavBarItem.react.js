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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(9), a = e.activeNavBarItem, i = e.updateActiveNavBarItem, l = a === o("WAWebNavBarTypes").NavBarItems.Contacts, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CONTACTS
		}, t[0] = c) : c = t[0];
		var d = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(c), m = d.startInteraction, p;
		t[1] !== l || t[2] !== m || t[3] !== i ? (p = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!l) {
					m();
					var e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(u.jsx(r("WAWebContactsDrawer.react"), {}), {
						transition: "none",
						disableRotateFocus: !0
					});
					e && (i(o("WAWebNavBarTypes").NavBarItems.Contacts), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
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
		})(), t[1] = l, t[2] = m, t[3] = i, t[4] = p) : p = t[4];
		var _ = p, f;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[5] = f) : f = t[5];
		var g = f, h;
		return t[6] !== _ || t[7] !== l ? (h = u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcContacts.react"),
			title: g,
			testid: "navbar-item-contacts",
			isActive: l,
			onClick: _,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[6] = _, t[7] = l, t[8] = h) : h = t[8], h;
	}
	l.default = c;
}), 226);
