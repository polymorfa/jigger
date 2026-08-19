__d("WAWebWindowsNotificationsDisabledBanner.react", [
	"fbt",
	"WAWebWindowsSettingsBanner.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.onOpenSystemNotificationSettingsRequested, a, i, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			""
		), l = s._(
			/*BTDS*/
			""
		), t[0] = a, t[1] = i, t[2] = l) : (a = t[0], i = t[1], l = t[2]);
		var c;
		return t[3] !== n ? (c = u.jsx(r("WAWebWindowsSettingsBanner.react"), {
			title: a,
			content: i,
			buttonContent: l,
			onClick: n
		}), t[3] = n, t[4] = c) : c = t[4], c;
	}
	l.default = c;
}), 226);
