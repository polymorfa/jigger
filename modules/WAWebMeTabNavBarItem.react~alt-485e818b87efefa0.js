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
		var t = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_ME_TAB
		}), l = i.startInteraction, m = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "profile" } : u.jsx(o("WAWebMeTabFlowLoadable").MeTabFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), {
					disableRotateFocus: !0,
					transition: "none",
					focusOnUnMount: !0
				});
				e && (a(o("WAWebNavBarTypes").NavBarItems.MeTab), o("WAWebDrawerManager").DrawerManager.openDrawerMid(u.jsx(r("WAWebIntroPanelV2.react"), {}), {
					transition: "none",
					disableRotateFocus: !0
				}), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.PROFILE));
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), p = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, { onNavigationTransitioning: m }), _ = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (t !== o("WAWebNavBarTypes").NavBarItems.MeTab) {
					if (l(), p != null) {
						p();
						return;
					}
					return m();
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), f = t === o("WAWebNavBarTypes").NavBarItems.MeTab, g = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), h = c(function() {
			return u.jsx(o("WAWebDetailImage.react").DetailImage, {
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				testId: "navbar-item-me-tab-photo",
				theme: "chatlist_header_profile_photo",
				tabIndex: -1,
				id: g,
				size: 28,
				xstyle: d.circular
			});
		}, [g]);
		return u.jsx(r("WDSMenuBarItem.react"), {
			customIcon: h,
			title: s._(
				/*BTDS*/
				""
			),
			testid: "navbar-item-me-tab",
			isActive: f,
			onClick: _,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.MeTabNavBarItem = m;
}), 226);
