__d("WAWebWindowsGeneralSettingsHelpers", ["fbt", "WAWebSettingsConst"], (function(t, n, r, o, a, i, l, s) {
	function e() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function u() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function c() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function d() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function m() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function p() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function _() {
		return s._(
			/*BTDS*/
			""
		);
	}
	var f = {
		step: o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings,
		id: "win_general_settings",
		isAvailable: !0,
		searchCriteria: String(e()).toLowerCase(),
		title: e,
		secondaryTitle: u,
		testid: "li-general-settings"
	}, g = {
		step: o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings,
		id: "system_tray_setting",
		isAvailable: !0,
		searchCriteria: [String(c()), String(_())].join(" ").toLowerCase(),
		title: c,
		testid: "li-system-tray-setting"
	};
	l.getGeneralSettingsTitle = e, l.getStartupAndCloseSectionTitle = u, l.getSystemTraySettingsTitle = c, l.getStartAtSettingsTitle = d, l.getLanguageSectionSettingsTitle = m, l.getFontSizeSectionSettingsTitle = p, l.getSystemTraySettingsHintText = _, l.GeneralSettingsItem = f, l.SystemTraySettingsItem = g;
}), 226);
