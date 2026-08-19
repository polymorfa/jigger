__d("WAWebWindowsNotificationsDisabledBanner.react", [
	"fbt",
	"WAWebWindowsSettingsBanner.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onOpenSystemNotificationSettingsRequested;
		return u.jsx(r("WAWebWindowsSettingsBanner.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			content: s._(
				/*BTDS*/
				""
			),
			buttonContent: s._(
				/*BTDS*/
				""
			),
			onClick: t
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
