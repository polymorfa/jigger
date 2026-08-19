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
	"react-compiler-runtime",
	"useWAWebAppTracker",
	"useWAWebEventTargetValue",
	"useWAWebNavigateToRouterPage"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(18), n = e.activeNavBarItem, a = e.updateActiveNavBarItem;
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.CommunitiesTab, n === o("WAWebNavBarTypes").NavBarItems.Communities);
		var i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_COMMUNITIES
		}, t[0] = i) : i = t[0];
		var l = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(i), c = l.startInteraction, m;
		t[1] !== a ? (m = async function() {
			var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "community_flow" } : u.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {}), {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				transition: "pop-drawer-fast",
				focusOnUnMount: !0,
				disableRotateFocus: !0
			});
			e && (a(o("WAWebNavBarTypes").NavBarItems.Communities), o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType.TAB_VIEWS), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.COMMUNITIES), o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Communities), o("WAWebOpenLastActiveCommunityAction").openLastActiveCommunity());
		}, t[1] = a, t[2] = m) : m = t[2];
		var p = m, _;
		t[3] !== p ? (_ = { onNavigationTransitioning: p }, t[3] = p, t[4] = _) : _ = t[4];
		var f = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, _), g;
		t[5] !== n || t[6] !== p || t[7] !== f || t[8] !== c ? (g = async function() {
			if (n !== o("WAWebNavBarTypes").NavBarItems.Communities) {
				if (c(), f != null) {
					f();
					return;
				}
				return p();
			}
		}, t[5] = n, t[6] = p, t[7] = f, t[8] = c, t[9] = g) : g = t[9];
		var h = g, y = n === o("WAWebNavBarTypes").NavBarItems.Communities, C = r(y ? "WDSIconWdsIcCommunitiesFilled.react" : "WDSIconWdsIcCommunities.react"), b = r("useWAWebEventTargetValue")(r("WAWebCommunityActivityCollection"), "add change remove community_tab_view", d), v;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), t[10] = v) : v = t[10];
		var S = v, R;
		t[11] !== b ? (R = b ? {
			size: "small",
			border: !0
		} : void 0, t[11] = b, t[12] = R) : R = t[12];
		var L;
		return t[13] !== C || t[14] !== h || t[15] !== y || t[16] !== R ? (L = u.jsx(r("WDSMenuBarItem.react"), {
			icon: C,
			activityIndicator: R,
			title: S,
			testid: "navbar-item-communities",
			isActive: y,
			onClick: h,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[13] = C, t[14] = h, t[15] = y, t[16] = R, t[17] = L) : L = t[17], L;
	}
	function d() {
		return r("WAWebCommunityActivityCollection").shouldShowTabBadge();
	}
	l.CommunitiesNavBarItem = c;
}), 226);
