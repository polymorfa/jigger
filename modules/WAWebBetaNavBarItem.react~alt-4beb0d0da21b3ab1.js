__d("WAWebBetaNavBarItem.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebBetaIcon.react",
	"WAWebDrawerManager",
	"WAWebNavBarLogEvents",
	"WAWebNavBarTypes",
	"WAWebSettingsConst",
	"WAWebSettingsFlowLoadable",
	"WAWebWamEnumWebcNavbarItemLabel",
	"WDSMenuBarItem.react",
	"react",
	"useWAWebExternalBetaOptIn"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		iconActive: {
			color: "x14ug900",
			$$css: !0
		},
		iconInactive: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem, a = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), i = a[0];
		if (!i) return null;
		var l = t === o("WAWebNavBarTypes").NavBarItems.Beta, d = async function() {
			if (!l) {
				var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "settings",
					initialStep: o("WAWebSettingsConst").SettingsSteps.Help
				} : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
					onEnd: o("WAWebDrawerManager").closeDrawerLeft,
					initialStep: o("WAWebSettingsConst").SettingsSteps.Help
				}), { transition: "pop-drawer-fast" });
				e && (n(o("WAWebNavBarTypes").NavBarItems.Beta), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.SETTINGS_HELP));
			}
		}, m = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuBarItem.react"), {
			customIcon: u.jsx(o("WAWebBetaIcon.react").BetaIcon, { iconXstyle: l ? c.iconActive : c.iconInactive }),
			title: m,
			testid: "navbar-item-beta-settings",
			isActive: l,
			onClick: d,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.BetaNavBarItem = d;
}), 226);
