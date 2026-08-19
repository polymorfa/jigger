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
	"asyncToGeneratorRuntime",
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
		var t = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), l = i[0];
		if (!l) return null;
		var d = t === o("WAWebNavBarTypes").NavBarItems.Beta, m = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!d) {
					var e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
						descriptorType: "settings",
						initialStep: o("WAWebSettingsConst").SettingsSteps.Help
					} : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
						onEnd: o("WAWebDrawerManager").closeDrawerLeft,
						initialStep: o("WAWebSettingsConst").SettingsSteps.Help
					}), { transition: "pop-drawer-fast" });
					e && (a(o("WAWebNavBarTypes").NavBarItems.Beta), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.SETTINGS_HELP));
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), p = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuBarItem.react"), {
			customIcon: u.jsx(o("WAWebBetaIcon.react").BetaIcon, { iconXstyle: d ? c.iconActive : c.iconInactive }),
			title: p,
			testid: "navbar-item-beta-settings",
			isActive: d,
			onClick: m,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.BetaNavBarItem = d;
}), 226);
