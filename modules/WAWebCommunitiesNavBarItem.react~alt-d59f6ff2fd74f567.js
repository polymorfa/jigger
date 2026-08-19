__d("WAWebCommunitiesNavBarItem.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebAppRootInteractionContext.react",
	"WAWebAppTracker",
	"WAWebCommunityActivityCollection",
	"WAWebCommunityDailyUtils",
	"WAWebCommunityFlowLoadable",
	"WAWebDrawerManager",
	"WAWebInteractionTracePolicy",
	"WAWebKeyboardTabUtils",
	"WAWebNavBarLogEvents",
	"WAWebNavBarTypes",
	"WAWebOpenLastActiveCommunityAction",
	"WAWebSideNavButtonsActivityModel",
	"WAWebWamEnumWebcNavbarItemLabel",
	"WDSIconWdsIcCommunities.react",
	"WDSIconWdsIcCommunitiesFilled.react",
	"WDSMenuBarItem.react",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebAppTracker",
	"useWAWebEventTargetValue",
	"useWAWebNavigateToRouterPage"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, a = e.updateActiveNavBarItem;
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.CommunitiesTab, t === o("WAWebNavBarTypes").NavBarItems.Communities);
		var i = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_COMMUNITIES
		}), l = i.startInteraction, c = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "community_flow" } : u.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {}), {
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
					transition: "pop-drawer-fast",
					focusOnUnMount: !0,
					disableRotateFocus: !0
				});
				e && (a(o("WAWebNavBarTypes").NavBarItems.Communities), o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType.TAB_VIEWS), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.COMMUNITIES), o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Communities), o("WAWebOpenLastActiveCommunityAction").openLastActiveCommunity());
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), d = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, { onNavigationTransitioning: c }), m = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (t !== o("WAWebNavBarTypes").NavBarItems.Communities) {
					if (l(), d != null) {
						d();
						return;
					}
					return c();
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), p = t === o("WAWebNavBarTypes").NavBarItems.Communities, _ = r(p ? "WDSIconWdsIcCommunitiesFilled.react" : "WDSIconWdsIcCommunities.react"), f = r("useWAWebEventTargetValue")(r("WAWebCommunityActivityCollection"), "add change remove community_tab_view", function() {
			return r("WAWebCommunityActivityCollection").shouldShowTabBadge();
		}), g = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: _,
			activityIndicator: f ? {
				size: "small",
				border: !0
			} : void 0,
			title: g,
			testid: "navbar-item-communities",
			isActive: p,
			onClick: m,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.CommunitiesNavBarItem = c;
}), 226);
