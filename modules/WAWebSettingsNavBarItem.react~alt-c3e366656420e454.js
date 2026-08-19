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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem, a = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_SETTINGS
		}), i = a.startInteraction, l = async function() {
			if (t !== o("WAWebNavBarTypes").NavBarItems.Settings) {
				i();
				var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "settings" } : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), {
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
					transition: "pop-drawer-fast",
					focusOnUnMount: !0
				});
				e && (n(o("WAWebNavBarTypes").NavBarItems.Settings), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.SETTINGS), self.setTimeout(function() {
					o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
						descriptorType: "mid_drawer_empty_state",
						navBarItem: o("WAWebNavBarTypes").NavBarItems.Settings
					} : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: o("WAWebNavBarTypes").NavBarItems.Settings }), {
						transition: "none",
						disableRotateFocus: !0,
						noFocus: !0
					});
				}, 0));
			}
		}, c = t === o("WAWebNavBarTypes").NavBarItems.Settings, d = c ? o("WAWebSettingsFilledRefreshedIcon.react").SettingsFilledRefreshedIcon : o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon, m = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuBarItem.react"), {
			testid: "navbar-item-settings",
			icon: d,
			title: m,
			keyboardShortcutAction: o("WAWebActions").Action.OPEN_SETTINGS,
			onClick: l,
			isActive: c,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.SettingsNavBarItem = c;
}), 226);
