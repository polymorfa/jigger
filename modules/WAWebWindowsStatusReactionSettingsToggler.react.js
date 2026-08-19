__d("WAWebWindowsStatusReactionSettingsToggler.react", [
	"fbt",
	"WAWebSettingsCheckList.react",
	"WAWebText.react",
	"WAWebWindowsUserPrefsNotifications",
	"react",
	"react-compiler-runtime",
	"useWAWebSettingSync",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(6), n = e.isNotificationEnabled, a = o("useWAWebSettingSync").useSettingSync("isStatusReactionsNotificationEnabled", m), i = r("useWAWebToggle")(d, a), l = i[0], c = i[1], p = !n, _ = n && l, f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[0] = f) : f = t[0];
		var g;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }), t[1] = g) : g = t[1];
		var h;
		return t[2] !== p || t[3] !== _ || t[4] !== c ? (h = u.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
			id: "status-reactions-toggle",
			disabled: p,
			checked: _,
			checkboxRightAligned: !0,
			onChange: c,
			testid: "status-reactions-toogle-id",
			children: [f, g]
		}), t[2] = p, t[3] = _, t[4] = c, t[5] = h) : h = t[5], h;
	}
	function d() {
		return o("WAWebWindowsUserPrefsNotifications").getStatusReactionsSetting();
	}
	function m(e) {
		o("WAWebWindowsUserPrefsNotifications").setStatusReactionsSetting(e);
	}
	l.default = c;
}), 226);
