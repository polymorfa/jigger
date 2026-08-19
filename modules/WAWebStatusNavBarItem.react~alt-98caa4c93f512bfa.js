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
	"react-compiler-runtime",
	"useWAWebAppTracker",
	"useWAWebStatusActivityIndicator"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(17), n = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = o("useWAWebStatusActivityIndicator").useWAWebStatusActivityIndicator(), l = i.clearUnreadActivity, c = i.hasUnread;
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.StatusTab, n === o("WAWebNavBarTypes").NavBarItems.Status);
		var d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_STATUS
		}, t[0] = d) : d = t[0];
		var m = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(d), p = m.startInteraction, _;
		t[1] !== n || t[2] !== l || t[3] !== p || t[4] !== a ? (_ = async function() {
			if (n !== o("WAWebNavBarTypes").NavBarItems.Status) {
				p();
				var e = await o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
				e && (a(o("WAWebNavBarTypes").NavBarItems.Status), o("WAWebStatusNavigateTo").navigateToStatus(l), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.STATUS), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "mid_drawer_empty_state",
					navBarItem: o("WAWebNavBarTypes").NavBarItems.Status
				} : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: o("WAWebNavBarTypes").NavBarItems.Status }), {
					transition: "none",
					disableRotateFocus: !0
				}));
			}
		}, t[1] = n, t[2] = l, t[3] = p, t[4] = a, t[5] = _) : _ = t[5];
		var f = _, g = n === o("WAWebNavBarTypes").NavBarItems.Status, h = r(g ? "WDSIconWdsIcStatusFilled.react" : "WDSIconWdsIcStatus.react"), y;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
			/*BTDS*/
			""
		), t[6] = y) : y = t[6];
		var C = y, b;
		t[7] !== c ? (b = c ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[7] = c, t[8] = b) : b = t[8];
		var v = b, S;
		t[9] !== v || t[10] !== c ? (S = c ? {
			accessibilityText: v,
			size: "small",
			border: !0
		} : void 0, t[9] = v, t[10] = c, t[11] = S) : S = t[11];
		var R;
		return t[12] !== f || t[13] !== g || t[14] !== h || t[15] !== S ? (R = u.jsx(r("WDSMenuBarItem.react"), {
			icon: h,
			activityIndicator: S,
			title: C,
			testid: "navbar-item-status",
			isActive: g,
			onClick: f,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[12] = f, t[13] = g, t[14] = h, t[15] = S, t[16] = R) : R = t[16], R;
	}
	l.StatusNavBarItem = c;
}), 226);
