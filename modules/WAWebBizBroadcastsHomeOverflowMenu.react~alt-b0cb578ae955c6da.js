__d("WAWebBizBroadcastsHomeOverflowMenu.react", [
	"WAWebBizBroadcastsHomeStrings",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebDrawerManager",
	"WAWebSettingsFlow.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcSettings.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		var t = e.onMenuOpen, n = e.onOpenSettings, a = e.testid, i = u(function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(o("WAWebSettingsFlow.react").SettingsFlow, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }));
		}, []), l = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() && n != null;
		return s.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcMoreVert.react"),
			onMenuOpen: t,
			testid: a,
			title: o("WAWebBizBroadcastsHomeStrings").getMenuButtonTitle(),
			wdsMenuToRender: s.jsxs(r("WDSMenu.react"), { children: [l ? s.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcSettings.react"),
				onPress: n,
				testid: "biz-broadcasts-home-menu-settings",
				title: o("WAWebBizBroadcastsHomeStrings").getSettingsMenuLabel()
			}, "settings") : null, s.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcSettings.react"),
				onPress: i,
				title: o("WAWebBizBroadcastsHomeStrings").getAccountSettingsLabel()
			}, "account-settings")] })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
