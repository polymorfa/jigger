__d("WAWebMeTabSettingsSearchResults.react", [
	"WAWebEmptyState.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebSettings.MenuItem",
	"WAWebSettingsLoggerUtils",
	"WAWebStopEvent",
	"WAWebWamEnumSettingsClickEntryPoint",
	"WAWebWamEnumSettingsPageType",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(14), n = e.filteredResults, a = e.onSettingClick, i = e.searchText, l = e.topLevelSettings, u;
		t[0] !== a ? (u = function(t) {
			t.wamName != null && t.parentId == null && o("WAWebSettingsLoggerUtils").logSettingsClick({
				settingsItem: t.wamName,
				settingsClickEntryPoint: o("WAWebWamEnumSettingsClickEntryPoint").SETTINGS_CLICK_ENTRY_POINT.METAB_SCREEN,
				settingsPageType: o("WAWebWamEnumSettingsPageType").SETTINGS_PAGE_TYPE.ME_TAB
			}), a(t.step);
		}, t[0] = a, t[1] = u) : u = t[1];
		var c = u, d;
		if (i === "") {
			var m;
			if (t[2] !== c || t[3] !== l) {
				var p;
				t[5] !== c ? (p = function(t, n) {
					return t.id === "divider" ? s.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }, n) : s.jsx(o("WAWebSettings.MenuItem").SettingsMenuItem, {
						setting: t,
						onSelect: function() {
							return c(t);
						},
						showIcon: !0,
						border: "bottom-partial",
						isRefresh: !0
					}, t.id);
				}, t[5] = c, t[6] = p) : p = t[6], m = l.map(p), t[2] = c, t[3] = l, t[4] = m;
			} else m = t[4];
			d = m;
		} else if (n.length === 0) {
			var _;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = s.jsx(o("WAWebEmptyState.react").SearchWithoutKeyword, {}), t[7] = _) : _ = t[7], d = _;
		} else {
			var f;
			t[8] !== n || t[9] !== c ? (f = s.jsx(o("WAWebSettings.MenuItem").SettingsMenu, {
				settings: n,
				onSelect: c
			}), t[8] = n, t[9] = c, t[10] = f) : f = t[10], d = f;
		}
		var g;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "xjp7ctv" }, t[11] = g) : g = t[11];
		var h;
		return t[12] !== d ? (h = s.jsx("div", babelHelpers.extends({
			role: "none",
			onMouseDownCapture: o("WAWebStopEvent").preventDefault
		}, g, { children: d })), t[12] = d, t[13] = h) : h = t[13], h;
	}
	l.default = u;
}), 98);
