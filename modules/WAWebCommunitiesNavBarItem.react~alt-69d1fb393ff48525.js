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
	"react",
	"useWAWebAppTracker",
	"useWAWebEventTargetValue",
	"useWAWebNavigateToRouterPage"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem;
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.CommunitiesTab, t === o("WAWebNavBarTypes").NavBarItems.Communities);
		var a = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_COMMUNITIES
		}), i = a.startInteraction, l = async function() {
			var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "community_flow" } : u.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {}), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				transition: "pop-drawer-fast",
				focusOnUnMount: !0,
				disableRotateFocus: !0
			});
			e && (n(o("WAWebNavBarTypes").NavBarItems.Communities), o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType.TAB_VIEWS), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.COMMUNITIES), o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Communities), o("WAWebOpenLastActiveCommunityAction").openLastActiveCommunity());
		}, c = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, { onNavigationTransitioning: l }), d = async function() {
			if (t !== o("WAWebNavBarTypes").NavBarItems.Communities) {
				if (i(), c != null) {
					c();
					return;
				}
				return l();
			}
		}, m = t === o("WAWebNavBarTypes").NavBarItems.Communities, p = r(m ? "WDSIconWdsIcCommunitiesFilled.react" : "WDSIconWdsIcCommunities.react"), _ = r("useWAWebEventTargetValue")(r("WAWebCommunityActivityCollection"), "add change remove community_tab_view", function() {
			return r("WAWebCommunityActivityCollection").shouldShowTabBadge();
		}), f = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: p,
			activityIndicator: _ ? {
				size: "small",
				border: !0
			} : void 0,
			title: f,
			testid: "navbar-item-communities",
			isActive: m,
			onClick: d,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.CommunitiesNavBarItem = c;
}), 226);
