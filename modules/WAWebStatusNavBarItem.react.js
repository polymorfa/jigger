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
	"react-compiler-runtime",
	"useWAWebAppTracker",
	"useWAWebStatusActivityIndicator"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(17), a = e.activeNavBarItem, i = e.updateActiveNavBarItem, l = o("useWAWebStatusActivityIndicator").useWAWebStatusActivityIndicator(), c = l.clearUnreadActivity, d = l.hasUnread;
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.StatusTab, a === o("WAWebNavBarTypes").NavBarItems.Status);
		var m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_STATUS
		}, t[0] = m) : m = t[0];
		var p = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(m), _ = p.startInteraction, f;
		t[1] !== a || t[2] !== c || t[3] !== _ || t[4] !== i ? (f = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (a !== o("WAWebNavBarTypes").NavBarItems.Status) {
					_();
					var e = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
					e && (i(o("WAWebNavBarTypes").NavBarItems.Status), o("WAWebStatusNavigateTo").navigateToStatus(c), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.STATUS), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
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
		})(), t[1] = a, t[2] = c, t[3] = _, t[4] = i, t[5] = f) : f = t[5];
		var g = f, h = a === o("WAWebNavBarTypes").NavBarItems.Status, y = r(h ? "WDSIconWdsIcStatusFilled.react" : "WDSIconWdsIcStatus.react"), C;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[6] = C) : C = t[6];
		var b = C, v;
		t[7] !== d ? (v = d ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[7] = d, t[8] = v) : v = t[8];
		var S = v, R;
		t[9] !== S || t[10] !== d ? (R = d ? {
			accessibilityText: S,
			size: "small",
			border: !0
		} : void 0, t[9] = S, t[10] = d, t[11] = R) : R = t[11];
		var L;
		return t[12] !== g || t[13] !== h || t[14] !== y || t[15] !== R ? (L = u.jsx(r("WDSMenuBarItem.react"), {
			icon: y,
			activityIndicator: R,
			title: b,
			testid: "navbar-item-status",
			isActive: h,
			onClick: g,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[12] = g, t[13] = h, t[14] = y, t[15] = R, t[16] = L) : L = t[16], L;
	}
	l.StatusNavBarItem = c;
}), 226);
