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
		var t = o("react-compiler-runtime").c(16), n = e.activeNavBarItem, a = e.updateActiveNavBarItem, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_ME_TAB
		}, t[0] = i) : i = t[0];
		var l = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(i), c = l.startInteraction, m;
		t[1] !== a ? (m = async function() {
			var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "profile" } : u.jsx(o("WAWebMeTabFlowLoadable").MeTabFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), {
				disableRotateFocus: !0,
				transition: "none",
				focusOnUnMount: !0
			});
			e && (a(o("WAWebNavBarTypes").NavBarItems.MeTab), o("WAWebDrawerManager").DrawerManager.openDrawerMid(u.jsx(r("WAWebIntroPanelV2.react"), {}), {
				transition: "none",
				disableRotateFocus: !0
			}), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.PROFILE));
		}, t[1] = a, t[2] = m) : m = t[2];
		var p = m, _;
		t[3] !== p ? (_ = { onNavigationTransitioning: p }, t[3] = p, t[4] = _) : _ = t[4];
		var f = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, _), g;
		t[5] !== n || t[6] !== p || t[7] !== f || t[8] !== c ? (g = async function() {
			if (n !== o("WAWebNavBarTypes").NavBarItems.MeTab) {
				if (c(), f != null) {
					f();
					return;
				}
				return p();
			}
		}, t[5] = n, t[6] = p, t[7] = f, t[8] = c, t[9] = g) : g = t[9];
		var h = g, y = n === o("WAWebNavBarTypes").NavBarItems.MeTab, C;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), t[10] = C) : C = t[10];
		var b = C, v;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(o("WAWebDetailImage.react").DetailImage, {
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			testId: "navbar-item-me-tab-photo",
			theme: "chatlist_header_profile_photo",
			tabIndex: -1,
			id: b,
			size: 28,
			xstyle: d.circular
		}), t[11] = v) : v = t[11];
		var S = v, R;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), t[12] = R) : R = t[12];
		var L;
		return t[13] !== h || t[14] !== y ? (L = u.jsx(r("WDSMenuBarItem.react"), {
			customIcon: S,
			title: R,
			testid: "navbar-item-me-tab",
			isActive: y,
			onClick: h,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[13] = h, t[14] = y, t[15] = L) : L = t[15], L;
	}
	l.MeTabNavBarItem = m;
}), 226);
