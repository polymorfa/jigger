__d("WAWebCallsNavBarItem.react", [
	"fbt",
	"WAWebABProps",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebAppTracker",
	"WAWebCountRenderingUtils",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WAWebLazyPoll",
	"WAWebMidDrawerEmptyState.react",
	"WAWebNavBarTypes",
	"WAWebVoipCallingNavNux.react",
	"WAWebVoipCallingNavNuxSequencing",
	"WAWebVoipCallsTabNavigateTo",
	"WAWebVoipCheckOngoingCalls",
	"WAWebVoipGatingUtils",
	"WAWebVoipOngoingCallCollection",
	"WDSIconIcCall.react",
	"WDSIconIcCallFilled.react",
	"WDSMenuBarItem.react",
	"react",
	"useWAWebAppTracker",
	"useWAWebEventTargetValue",
	"useWAWebIncomingCall",
	"useWAWebIsWinHybridJoinableCallsEnabled",
	"useWAWebMissedCallCount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = 300, _ = new (r("WAWebLazyPoll"))({
		name: "checkOngoingCalls",
		interval: p,
		restingInterval: p * 2,
		sleepWhileResting: !1,
		handler: async function() {
			return await o("WAWebVoipCheckOngoingCalls").checkOngoingCalls(), !0;
		}
	});
	function f() {
		return o("WAWebVoipGatingUtils").isWebGroupCallingUsable() && o("WAWebVoipCallingNavNuxSequencing").isCallsNavNuxUnlockedByHeader() && o("WAWebABProps").getABPropConfigValue("wa_web_calling_sidenav_calls_tab_nux_enabled");
	}
	function g(e) {
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem;
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.VoipCallsTab, t === o("WAWebNavBarTypes").NavBarItems.Calls);
		var a = d(null), i = m(!1), l = i[0], c = i[1], p = r("useWAWebEventTargetValue")(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "all", function() {
			return o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls();
		}), g = r("useWAWebIncomingCall")() != null, h = o("useWAWebIsWinHybridJoinableCallsEnabled").useIsWinHybridJoinableCallsEnabled() && p || g, y = o("useWAWebMissedCallCount").useWAWebMissedCallCount(), C = y.clearMissedCallCount, b = y.missedCallCount, v = function() {
			t !== o("WAWebNavBarTypes").NavBarItems.Calls && (n(o("WAWebNavBarTypes").NavBarItems.Calls), o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({ clearUnreadActivity: C }), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "mid_drawer_empty_state",
				navBarItem: o("WAWebNavBarTypes").NavBarItems.Calls
			} : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: o("WAWebNavBarTypes").NavBarItems.Calls }), {
				transition: "none",
				disableRotateFocus: !0
			}), _.resume());
		}, S = t === o("WAWebNavBarTypes").NavBarItems.Calls, R = r(S ? "WDSIconIcCallFilled.react" : "WDSIconIcCall.react"), L = s._(
			/*BTDS*/
			""
		), E;
		h ? E = {
			size: "small",
			border: !0,
			pulse: !0,
			accessibilityText: g ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		} : b > 0 && (E = {
			border: !0,
			count: o("WAWebCountRenderingUtils").renderCount(b, 100, "missed_call"),
			size: "small"
		});
		var k = f();
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSMenuBarItem.react"), {
			ref: a,
			icon: R,
			title: L,
			testid: "navbar-item-calls",
			isActive: S,
			onClick: v,
			activityIndicator: E,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipDisabled: l,
			tooltipPosition: "end"
		}), k && u.jsx(o("WAWebFlex.react").FlexItem, {
			testid: "navbar-calls-nux-anchor",
			children: u.jsx(r("WAWebVoipCallingNavNux.react"), {
				onVisibilityChange: c,
				targetRef: a
			})
		})] });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
