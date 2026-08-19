__d("WAWebSettingsNavBarItem.react", [
	"fbt",
	"WAWebActions",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebAppRootInteractionContext.react",
	"WAWebDrawerManager",
	"WAWebInteractionTracePolicy",
	"WAWebKeyboardTabUtils",
	"WAWebMidDrawerEmptyState.react",
	"WAWebNavBarLogEvents",
	"WAWebNavBarTypes",
	"WAWebSettingsFilledRefreshedIcon.react",
	"WAWebSettingsFlowLoadable",
	"WAWebSettingsRefreshedIcon.react",
	"WAWebWamEnumWebcNavbarItemLabel",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(10), n = e.activeNavBarItem, a = e.updateActiveNavBarItem, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_SETTINGS
		}, t[0] = i) : i = t[0];
		var l = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(i), c = l.startInteraction, m;
		t[1] !== n || t[2] !== c || t[3] !== a ? (m = async function() {
			if (n !== o("WAWebNavBarTypes").NavBarItems.Settings) {
				c();
				var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "settings" } : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), {
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
					transition: "pop-drawer-fast",
					focusOnUnMount: !0
				});
				e && (a(o("WAWebNavBarTypes").NavBarItems.Settings), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.SETTINGS), self.setTimeout(d, 0));
			}
		}, t[1] = n, t[2] = c, t[3] = a, t[4] = m) : m = t[4];
		var p = m, _ = n === o("WAWebNavBarTypes").NavBarItems.Settings, f = _ ? o("WAWebSettingsFilledRefreshedIcon.react").SettingsFilledRefreshedIcon : o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon, g;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[5] = g) : g = t[5];
		var h = g, y;
		return t[6] !== p || t[7] !== _ || t[8] !== f ? (y = u.jsx(r("WDSMenuBarItem.react"), {
			testid: "navbar-item-settings",
			icon: f,
			title: h,
			keyboardShortcutAction: o("WAWebActions").Action.OPEN_SETTINGS,
			onClick: p,
			isActive: _,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[6] = p, t[7] = _, t[8] = f, t[9] = y) : y = t[9], y;
	}
	function d() {
		o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
			descriptorType: "mid_drawer_empty_state",
			navBarItem: o("WAWebNavBarTypes").NavBarItems.Settings
		} : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: o("WAWebNavBarTypes").NavBarItems.Settings }), {
			transition: "none",
			disableRotateFocus: !0,
			noFocus: !0
		});
	}
	l.SettingsNavBarItem = c;
}), 226);
