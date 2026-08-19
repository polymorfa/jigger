__d("WAWebStatusNavBarItem.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebAppRootInteractionContext.react",
	"WAWebAppTracker",
	"WAWebDrawerManager",
	"WAWebInteractionTracePolicy",
	"WAWebMidDrawerEmptyState.react",
	"WAWebNavBarLogEvents",
	"WAWebNavBarTypes",
	"WAWebStatusNavigateTo",
	"WAWebWamEnumWebcNavbarItemLabel",
	"WDSIconWdsIcStatus.react",
	"WDSIconWdsIcStatusFilled.react",
	"WDSMenuBarItem.react",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebAppTracker",
	"useWAWebStatusActivityIndicator"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = o("useWAWebStatusActivityIndicator").useWAWebStatusActivityIndicator(), l = i.clearUnreadActivity, c = i.hasUnread;
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.StatusTab, t === o("WAWebNavBarTypes").NavBarItems.Status);
		var d = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_STATUS
		}), m = d.startInteraction, p = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (t !== o("WAWebNavBarTypes").NavBarItems.Status) {
					m();
					var e = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
					e && (a(o("WAWebNavBarTypes").NavBarItems.Status), o("WAWebStatusNavigateTo").navigateToStatus(l), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.STATUS), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
						descriptorType: "mid_drawer_empty_state",
						navBarItem: o("WAWebNavBarTypes").NavBarItems.Status
					} : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: o("WAWebNavBarTypes").NavBarItems.Status }), {
						transition: "none",
						disableRotateFocus: !0
					}));
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), _ = t === o("WAWebNavBarTypes").NavBarItems.Status, f = r(_ ? "WDSIconWdsIcStatusFilled.react" : "WDSIconWdsIcStatus.react"), g = s._(
			/*BTDS*/
			""
		), h = c ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: f,
			activityIndicator: c ? {
				accessibilityText: h,
				size: "small",
				border: !0
			} : void 0,
			title: g,
			testid: "navbar-item-status",
			isActive: _,
			onClick: p,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.StatusNavBarItem = c;
}), 226);
