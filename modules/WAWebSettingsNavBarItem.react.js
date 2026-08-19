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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(10), a = e.activeNavBarItem, i = e.updateActiveNavBarItem, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_SETTINGS
		}, t[0] = l) : l = t[0];
		var c = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(l), m = c.startInteraction, p;
		t[1] !== a || t[2] !== m || t[3] !== i ? (p = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (a !== o("WAWebNavBarTypes").NavBarItems.Settings) {
					m();
					var e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "settings" } : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), {
						focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
						transition: "pop-drawer-fast",
						focusOnUnMount: !0
					});
					e && (i(o("WAWebNavBarTypes").NavBarItems.Settings), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.SETTINGS), self.setTimeout(d, 0));
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[1] = a, t[2] = m, t[3] = i, t[4] = p) : p = t[4];
		var _ = p, f = a === o("WAWebNavBarTypes").NavBarItems.Settings, g = f ? o("WAWebSettingsFilledRefreshedIcon.react").SettingsFilledRefreshedIcon : o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon, h;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[5] = h) : h = t[5];
		var y = h, C;
		return t[6] !== _ || t[7] !== f || t[8] !== g ? (C = u.jsx(r("WDSMenuBarItem.react"), {
			testid: "navbar-item-settings",
			icon: g,
			title: y,
			keyboardShortcutAction: o("WAWebActions").Action.OPEN_SETTINGS,
			onClick: _,
			isActive: f,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[6] = _, t[7] = f, t[8] = g, t[9] = C) : C = t[9], C;
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
