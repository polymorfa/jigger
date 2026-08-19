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
	"react-compiler-runtime",
	"useWAWebAppTracker",
	"useWAWebEventTargetValue",
	"useWAWebNavigateToRouterPage"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(18), a = e.activeNavBarItem, i = e.updateActiveNavBarItem;
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.CommunitiesTab, a === o("WAWebNavBarTypes").NavBarItems.Communities);
		var l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_COMMUNITIES
		}, t[0] = l) : l = t[0];
		var c = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(l), m = c.startInteraction, p;
		t[1] !== i ? (p = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "community_flow" } : u.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {}), {
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
					transition: "pop-drawer-fast",
					focusOnUnMount: !0,
					disableRotateFocus: !0
				});
				e && (i(o("WAWebNavBarTypes").NavBarItems.Communities), o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType.TAB_VIEWS), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.COMMUNITIES), o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Communities), o("WAWebOpenLastActiveCommunityAction").openLastActiveCommunity());
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[1] = i, t[2] = p) : p = t[2];
		var _ = p, f;
		t[3] !== _ ? (f = { onNavigationTransitioning: _ }, t[3] = _, t[4] = f) : f = t[4];
		var g = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, f), h;
		t[5] !== a || t[6] !== _ || t[7] !== g || t[8] !== m ? (h = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (a !== o("WAWebNavBarTypes").NavBarItems.Communities) {
					if (m(), g != null) {
						g();
						return;
					}
					return _();
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[5] = a, t[6] = _, t[7] = g, t[8] = m, t[9] = h) : h = t[9];
		var y = h, C = a === o("WAWebNavBarTypes").NavBarItems.Communities, b = r(C ? "WDSIconWdsIcCommunitiesFilled.react" : "WDSIconWdsIcCommunities.react"), v = r("useWAWebEventTargetValue")(r("WAWebCommunityActivityCollection"), "add change remove community_tab_view", d), S;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[10] = S) : S = t[10];
		var R = S, L;
		t[11] !== v ? (L = v ? {
			size: "small",
			border: !0
		} : void 0, t[11] = v, t[12] = L) : L = t[12];
		var E;
		return t[13] !== b || t[14] !== y || t[15] !== C || t[16] !== L ? (E = u.jsx(r("WDSMenuBarItem.react"), {
			icon: b,
			activityIndicator: L,
			title: R,
			testid: "navbar-item-communities",
			isActive: C,
			onClick: y,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[13] = b, t[14] = y, t[15] = C, t[16] = L, t[17] = E) : E = t[17], E;
	}
	function d() {
		return r("WAWebCommunityActivityCollection").shouldShowTabBadge();
	}
	l.CommunitiesNavBarItem = c;
}), 226);
