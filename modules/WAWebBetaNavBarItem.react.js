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
		var t = o("react-compiler-runtime").c(10), a = e.activeNavBarItem, i = e.updateActiveNavBarItem, l = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), d = l[0];
		if (!d) return null;
		var m = a === o("WAWebNavBarTypes").NavBarItems.Beta, p;
		t[0] !== m || t[1] !== i ? (p = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!m) {
					var e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
						descriptorType: "settings",
						initialStep: o("WAWebSettingsConst").SettingsSteps.Help
					} : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
						onEnd: o("WAWebDrawerManager").closeDrawerLeft,
						initialStep: o("WAWebSettingsConst").SettingsSteps.Help
					}), { transition: "pop-drawer-fast" });
					e && (i(o("WAWebNavBarTypes").NavBarItems.Beta), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.SETTINGS_HELP));
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[0] = m, t[1] = i, t[2] = p) : p = t[2];
		var _ = p, f;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[3] = f) : f = t[3];
		var g = f, h = m ? c.iconActive : c.iconInactive, y;
		t[4] !== h ? (y = u.jsx(o("WAWebBetaIcon.react").BetaIcon, { iconXstyle: h }), t[4] = h, t[5] = y) : y = t[5];
		var C;
		return t[6] !== _ || t[7] !== m || t[8] !== y ? (C = u.jsx(r("WDSMenuBarItem.react"), {
			customIcon: y,
			title: g,
			testid: "navbar-item-beta-settings",
			isActive: m,
			onClick: _,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[6] = _, t[7] = m, t[8] = y, t[9] = C) : C = t[9], C;
	}
	l.BetaNavBarItem = d;
}), 226);
