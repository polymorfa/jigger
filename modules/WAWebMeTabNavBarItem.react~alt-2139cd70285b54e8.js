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
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem, a = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_ME_TAB
		}), i = a.startInteraction, l = async function() {
			var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "profile" } : u.jsx(o("WAWebMeTabFlowLoadable").MeTabFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), {
				disableRotateFocus: !0,
				transition: "none",
				focusOnUnMount: !0
			});
			e && (n(o("WAWebNavBarTypes").NavBarItems.MeTab), o("WAWebDrawerManager").DrawerManager.openDrawerMid(u.jsx(r("WAWebIntroPanelV2.react"), {}), {
				transition: "none",
				disableRotateFocus: !0
			}), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.PROFILE));
		}, m = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, { onNavigationTransitioning: l }), p = async function() {
			if (t !== o("WAWebNavBarTypes").NavBarItems.MeTab) {
				if (i(), m != null) {
					m();
					return;
				}
				return l();
			}
		}, _ = t === o("WAWebNavBarTypes").NavBarItems.MeTab, f = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), g = c(function() {
			return u.jsx(o("WAWebDetailImage.react").DetailImage, {
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				testId: "navbar-item-me-tab-photo",
				theme: "chatlist_header_profile_photo",
				tabIndex: -1,
				id: f,
				size: 28,
				xstyle: d.circular
			});
		}, [f]);
		return u.jsx(r("WDSMenuBarItem.react"), {
			customIcon: g,
			title: s._(
				/*BTDS*/
				""
			),
			testid: "navbar-item-me-tab",
			isActive: _,
			onClick: p,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.MeTabNavBarItem = m;
}), 226);
