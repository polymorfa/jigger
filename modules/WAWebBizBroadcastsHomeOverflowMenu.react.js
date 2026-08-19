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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		var t = o("react-compiler-runtime").c(13), n = e.onMenuOpen, a = e.onOpenSettings, i = e.testid, l = d, u;
		t[0] !== a ? (u = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() && a != null, t[0] = a, t[1] = u) : u = t[1];
		var c = u, m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = o("WAWebBizBroadcastsHomeStrings").getMenuButtonTitle(), t[2] = m) : m = t[2];
		var p;
		t[3] !== a || t[4] !== c ? (p = c ? s.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcSettings.react"),
			onPress: a,
			testid: "biz-broadcasts-home-menu-settings",
			title: o("WAWebBizBroadcastsHomeStrings").getSettingsMenuLabel()
		}, "settings") : null, t[3] = a, t[4] = c, t[5] = p) : p = t[5];
		var _;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = s.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcSettings.react"),
			onPress: l,
			title: o("WAWebBizBroadcastsHomeStrings").getAccountSettingsLabel()
		}, "account-settings"), t[6] = _) : _ = t[6];
		var f;
		t[7] !== p ? (f = s.jsxs(r("WDSMenu.react"), { children: [p, _] }), t[7] = p, t[8] = f) : f = t[8];
		var g;
		return t[9] !== n || t[10] !== f || t[11] !== i ? (g = s.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcMoreVert.react"),
			onMenuOpen: n,
			testid: i,
			title: m,
			wdsMenuToRender: f
		}), t[9] = n, t[10] = f, t[11] = i, t[12] = g) : g = t[12], g;
	}
	function d() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(o("WAWebSettingsFlow.react").SettingsFlow, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }));
	}
	l.default = c;
}), 98);
