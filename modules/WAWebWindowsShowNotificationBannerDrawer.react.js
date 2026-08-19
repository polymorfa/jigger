__d("WAWebWindowsShowNotificationBannerDrawer.react", [
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebKeyboardRotateFocus.react",
	"WAWebKeyboardTabUtils",
	"WAWebRadio.react",
	"WAWebSettingsSyncBridge",
	"WAWebWindowsNotificationStrings",
	"WAWebWindowsShowNotificationBannerOption",
	"WAWebWindowsShowNotificationBannerOptions",
	"WAWebWindowsUserPrefsNotifications",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(10), n = e.onClose, a = e.ref, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			surface: "unknown",
			viewName: "windows-notification-banner"
		}, t[0] = i) : i = t[0];
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebWindowsNotificationStrings").showNotificationBannerTitle(), t[1] = l) : l = t[1];
		var u;
		t[2] !== n ? (u = s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "drawer-show-notification-banner",
			title: l,
			onBack: n,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}), t[2] = n, t[3] = u) : u = t[3];
		var c;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(r("WAWebDrawerBody.react"), { children: s.jsx(m, {}) }), t[4] = c) : c = t[4];
		var d;
		t[5] !== u ? (d = s.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
			focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
			children: [u, c]
		}), t[5] = u, t[6] = d) : d = t[6];
		var p;
		return t[7] !== a || t[8] !== d ? (p = s.jsx(r("WAWebDrawer.react"), {
			ref: a,
			tsNavigationData: i,
			children: d
		}), t[7] = a, t[8] = d, t[9] = p) : p = t[9], p;
	}
	function m() {
		var e = o("react-compiler-runtime").c(6), t;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var n;
			t = (n = o("WAWebWindowsUserPrefsNotifications").getNotificationBannerSetting()) != null ? n : o("WAWebWindowsShowNotificationBannerOption").ShowNotificationBannerOption.Always, e[0] = t;
		} else t = e[0];
		var a = u(t), i = a[0], l = a[1], d;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (d = function(t) {
			l(t), o("WAWebWindowsUserPrefsNotifications").setNotificationBannerSetting(t), o("WAWebSettingsSyncBridge").sendSettingChange("bannerNotificationDisplayMode", o("WAWebWindowsShowNotificationBannerOption").toDisplayMode(t));
		}, e[1] = d) : d = e[1];
		var m = d, p;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (p = [o("WDSPaddings.stylex").wdsPaddings.paddingHor0], e[2] = p) : p = e[2];
		var _ = i, f;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebWindowsShowNotificationBannerOptions").ShowNotificationBannerOptions.map(function(e) {
			var t = e.label, n = e.value;
			return {
				value: n,
				label: t(),
				onChange: function(t) {
					var e;
					return m((e = o("WAWebWindowsShowNotificationBannerOption").ShowNotificationBannerOption.cast(t)) != null ? e : o("WAWebWindowsShowNotificationBannerOption").ShowNotificationBannerOption.Always);
				},
				xstyle: c.paddingBlock10
			};
		}), e[3] = f) : f = e[3];
		var g;
		return e[4] !== _ ? (g = s.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			titleXStyle: p,
			theme: "padding-no-vertical",
			children: s.jsx(o("WAWebRadio.react").RadioGroup, {
				name: "radio-show-notification-banner",
				theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
				checkedValue: _,
				options: f
			})
		}), e[4] = _, e[5] = g) : g = e[5], g;
	}
	l.default = d;
}), 98);
