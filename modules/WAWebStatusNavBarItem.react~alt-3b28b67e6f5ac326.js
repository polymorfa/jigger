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
	"react",
	"useWAWebAppTracker",
	"useWAWebStatusActivityIndicator"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem, a = o("useWAWebStatusActivityIndicator").useWAWebStatusActivityIndicator(), i = a.clearUnreadActivity, l = a.hasUnread;
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.StatusTab, t === o("WAWebNavBarTypes").NavBarItems.Status);
		var c = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_STATUS
		}), d = c.startInteraction, m = async function() {
			if (t !== o("WAWebNavBarTypes").NavBarItems.Status) {
				d();
				var e = await o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
				e && (n(o("WAWebNavBarTypes").NavBarItems.Status), o("WAWebStatusNavigateTo").navigateToStatus(i), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.STATUS), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "mid_drawer_empty_state",
					navBarItem: o("WAWebNavBarTypes").NavBarItems.Status
				} : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: o("WAWebNavBarTypes").NavBarItems.Status }), {
					transition: "none",
					disableRotateFocus: !0
				}));
			}
		}, p = t === o("WAWebNavBarTypes").NavBarItems.Status, _ = r(p ? "WDSIconWdsIcStatusFilled.react" : "WDSIconWdsIcStatus.react"), f = s._(
			/*BTDS*/
			""
		), g = l ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: _,
			activityIndicator: l ? {
				accessibilityText: g,
				size: "small",
				border: !0
			} : void 0,
			title: f,
			testid: "navbar-item-status",
			isActive: p,
			onClick: m,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.StatusNavBarItem = c;
}), 226);
