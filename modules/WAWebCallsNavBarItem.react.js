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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
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
		handler: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				return yield o("WAWebVoipCheckOngoingCalls").checkOngoingCalls(), !0;
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})()
	});
	function f() {
		return o("WAWebVoipGatingUtils").isWebGroupCallingUsable() && o("WAWebVoipCallingNavNuxSequencing").isCallsNavNuxUnlockedByHeader() && o("WAWebABProps").getABPropConfigValue("wa_web_calling_sidenav_calls_tab_nux_enabled");
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(23), n = e.activeNavBarItem, a = e.updateActiveNavBarItem;
		r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.VoipCallsTab, n === o("WAWebNavBarTypes").NavBarItems.Calls);
		var i = d(null), l = m(!1), c = l[0], p = l[1], g = r("useWAWebEventTargetValue")(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "all", h), y = r("useWAWebIncomingCall")() != null, C = o("useWAWebIsWinHybridJoinableCallsEnabled").useIsWinHybridJoinableCallsEnabled() && g || y, b = o("useWAWebMissedCallCount").useWAWebMissedCallCount(), v = b.clearMissedCallCount, S = b.missedCallCount, R;
		t[0] !== n || t[1] !== v || t[2] !== a ? (R = function() {
			n !== o("WAWebNavBarTypes").NavBarItems.Calls && (a(o("WAWebNavBarTypes").NavBarItems.Calls), o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({ clearUnreadActivity: v }), o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "mid_drawer_empty_state",
				navBarItem: o("WAWebNavBarTypes").NavBarItems.Calls
			} : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: o("WAWebNavBarTypes").NavBarItems.Calls }), {
				transition: "none",
				disableRotateFocus: !0
			}), _.resume());
		}, t[0] = n, t[1] = v, t[2] = a, t[3] = R) : R = t[3];
		var L = R, E = n === o("WAWebNavBarTypes").NavBarItems.Calls, k = r(E ? "WDSIconIcCallFilled.react" : "WDSIconIcCall.react"), I;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), t[4] = I) : I = t[4];
		var T = I, D;
		if (C) {
			var x;
			t[5] !== y ? (x = y ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), t[5] = y, t[6] = x) : x = t[6];
			var $;
			t[7] !== x ? ($ = {
				size: "small",
				border: !0,
				pulse: !0,
				accessibilityText: x
			}, t[7] = x, t[8] = $) : $ = t[8], D = $;
		} else if (S > 0) {
			var P;
			t[9] !== S ? (P = o("WAWebCountRenderingUtils").renderCount(S, 100, "missed_call"), t[9] = S, t[10] = P) : P = t[10];
			var N;
			t[11] !== P ? (N = {
				border: !0,
				count: P,
				size: "small"
			}, t[11] = P, t[12] = N) : N = t[12], D = N;
		}
		var M;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (M = f(), t[13] = M) : M = t[13];
		var w = M, A;
		t[14] !== D || t[15] !== k || t[16] !== L || t[17] !== E || t[18] !== c ? (A = u.jsx(r("WDSMenuBarItem.react"), {
			ref: i,
			icon: k,
			title: T,
			testid: "navbar-item-calls",
			isActive: E,
			onClick: L,
			activityIndicator: D,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipDisabled: c,
			tooltipPosition: "end"
		}), t[14] = D, t[15] = k, t[16] = L, t[17] = E, t[18] = c, t[19] = A) : A = t[19];
		var F;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (F = w && u.jsx(o("WAWebFlex.react").FlexItem, {
			testid: "navbar-calls-nux-anchor",
			children: u.jsx(r("WAWebVoipCallingNavNux.react"), {
				onVisibilityChange: p,
				targetRef: i
			})
		}), t[20] = F) : F = t[20];
		var O;
		return t[21] !== A ? (O = u.jsxs(u.Fragment, { children: [A, F] }), t[21] = A, t[22] = O) : O = t[22], O;
	}
	function h() {
		return o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls();
	}
	l.default = g;
}), 226);
