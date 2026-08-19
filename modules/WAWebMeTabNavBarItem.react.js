__d("WAWebMeTabNavBarItem.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebAppRootInteractionContext.react",
	"WAWebDetailImage.react",
	"WAWebDrawerManager",
	"WAWebInteractionTracePolicy",
	"WAWebIntroPanelV2.react",
	"WAWebMeTabFlowLoadable",
	"WAWebNavBarLogEvents",
	"WAWebNavBarTypes",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumWebcNavbarItemLabel",
	"WDSMenuBarItem.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebNavigateToRouterPage"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = { circular: {
		borderStartStartRadius: "xt8t1vi",
		borderStartEndRadius: "x1xc408v",
		borderEndEndRadius: "x129tdwq",
		borderEndStartRadius: "x15urzxu",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(16), a = e.activeNavBarItem, i = e.updateActiveNavBarItem, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_ME_TAB
		}, t[0] = l) : l = t[0];
		var c = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(l), m = c.startInteraction, p;
		t[1] !== i ? (p = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "profile" } : u.jsx(o("WAWebMeTabFlowLoadable").MeTabFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), {
					disableRotateFocus: !0,
					transition: "none",
					focusOnUnMount: !0
				});
				e && (i(o("WAWebNavBarTypes").NavBarItems.MeTab), o("WAWebDrawerManager").DrawerManager.openDrawerMid(u.jsx(r("WAWebIntroPanelV2.react"), {}), {
					transition: "none",
					disableRotateFocus: !0
				}), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.PROFILE));
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
				if (a !== o("WAWebNavBarTypes").NavBarItems.MeTab) {
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
		var y = h, C = a === o("WAWebNavBarTypes").NavBarItems.MeTab, b;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (b = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), t[10] = b) : b = t[10];
		var v = b, S;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx(o("WAWebDetailImage.react").DetailImage, {
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			testId: "navbar-item-me-tab-photo",
			theme: "chatlist_header_profile_photo",
			tabIndex: -1,
			id: v,
			size: 28,
			xstyle: d.circular
		}), t[11] = S) : S = t[11];
		var R = S, L;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[12] = L) : L = t[12];
		var E;
		return t[13] !== y || t[14] !== C ? (E = u.jsx(r("WDSMenuBarItem.react"), {
			customIcon: R,
			title: L,
			testid: "navbar-item-me-tab",
			isActive: C,
			onClick: y,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[13] = y, t[14] = C, t[15] = E) : E = t[15], E;
	}
	l.MeTabNavBarItem = m;
}), 226);
