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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(10), n = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), l = i[0];
		if (!l) return null;
		var d = n === o("WAWebNavBarTypes").NavBarItems.Beta, m;
		t[0] !== d || t[1] !== a ? (m = async function() {
			if (!d) {
				var e = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "settings",
					initialStep: o("WAWebSettingsConst").SettingsSteps.Help
				} : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
					onEnd: o("WAWebDrawerManager").closeDrawerLeft,
					initialStep: o("WAWebSettingsConst").SettingsSteps.Help
				}), { transition: "pop-drawer-fast" });
				e && (a(o("WAWebNavBarTypes").NavBarItems.Beta), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.SETTINGS_HELP));
			}
		}, t[0] = d, t[1] = a, t[2] = m) : m = t[2];
		var p = m, _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[3] = _) : _ = t[3];
		var f = _, g = d ? c.iconActive : c.iconInactive, h;
		t[4] !== g ? (h = u.jsx(o("WAWebBetaIcon.react").BetaIcon, { iconXstyle: g }), t[4] = g, t[5] = h) : h = t[5];
		var y;
		return t[6] !== p || t[7] !== d || t[8] !== h ? (y = u.jsx(r("WDSMenuBarItem.react"), {
			customIcon: h,
			title: f,
			testid: "navbar-item-beta-settings",
			isActive: d,
			onClick: p,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[6] = p, t[7] = d, t[8] = h, t[9] = y) : y = t[9], y;
	}
	l.BetaNavBarItem = d;
}), 226);
