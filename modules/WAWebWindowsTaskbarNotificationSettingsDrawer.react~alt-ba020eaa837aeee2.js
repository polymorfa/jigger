__d("WAWebWindowsTaskbarNotificationSettingsDrawer.react", [
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebKeyboardRotateFocus.react",
	"WAWebKeyboardTabUtils",
	"WAWebRadio.react",
	"WAWebSettingsSyncBridge",
	"WAWebWindowsTaskbarController",
	"WAWebWindowsTaskbarNotificationOption",
	"WAWebWindowsTaskbarNotificationSettingOptions",
	"WAWebWindowsTaskbarNotificationSettingsHelpers",
	"WAWebWindowsUserPrefsNotifications",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} };
	function d(e) {
		var t = e.onClose, n = e.ref;
		return s.jsx(r("WAWebDrawer.react"), {
			ref: n,
			tsNavigationData: {
				surface: "unknown",
				viewName: "windows-taskbar-notifications"
			},
			children: s.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				children: [s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					testid: "drawer-taskbar-notification-settings",
					title: o("WAWebWindowsTaskbarNotificationSettingsHelpers").taskbarNotificationSettingsTitle(),
					onBack: t,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					focusBackOrCancel: !0
				}), s.jsx(r("WAWebDrawerBody.react"), { children: s.jsx(m, {}) })]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		var e, t = u((e = o("WAWebWindowsUserPrefsNotifications").getTaskbarNotificationSetting()) != null ? e : o("WAWebWindowsTaskbarNotificationOption").TaskbarNotificationOption.Always), n = t[0], a = t[1], i = function(t) {
			n !== t && (a(t), o("WAWebWindowsTaskbarController").WATaskbarController.ChangeTaskbarNotificationSetting(t), o("WAWebSettingsSyncBridge").sendSettingChange("unreadCounterBadgeDisplayMode", o("WAWebWindowsTaskbarNotificationOption").toDisplayMode(t)));
		};
		return s.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			titleXStyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor0],
			theme: "padding-no-vertical",
			children: s.jsx(o("WAWebRadio.react").RadioGroup, {
				name: "radio-taskbar-notification-settings",
				theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
				checkedValue: n,
				options: o("WAWebWindowsTaskbarNotificationSettingOptions").TaskbarNotificationSettingOptions.map(function(e) {
					var t = e.label, n = e.value;
					return {
						value: n,
						label: t(),
						onChange: function(t) {
							var e;
							return i((e = o("WAWebWindowsTaskbarNotificationOption").TaskbarNotificationOption.cast(t)) != null ? e : o("WAWebWindowsTaskbarNotificationOption").TaskbarNotificationOption.Always);
						},
						xstyle: c.paddingBlock10
					};
				})
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 98);
