__d("WAWebChatThemeDoodleToggleRow.react", [
	"fbt",
	"WAWebChatInfoDrawerRow.react",
	"WDSIconWdsIcDoodlePattern.react",
	"WDSSwitch.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.isDoodleEnabled, a = e.isWallpaperPresetActive, i = e.onToggle, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(r("WDSIconWdsIcDoodlePattern.react"), {}), t[0] = l) : l = t[0];
		var c = a ? void 0 : i, d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		).toString(), t[1] = d) : d = t[1];
		var m;
		t[2] !== n || t[3] !== a ? (m = u.jsx(r("WDSSwitch.react"), {
			tabIndex: -1,
			value: n,
			disabled: a,
			"aria-label": d
		}), t[2] = n, t[3] = a, t[4] = m) : m = t[4];
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
			/*BTDS*/
			""
		) }), t[5] = p) : p = t[5];
		var _;
		return t[6] !== c || t[7] !== m ? (_ = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			testid: "doodle-toggle",
			icon: l,
			onClick: c,
			side: m,
			title: p
		}), t[6] = c, t[7] = m, t[8] = _) : _ = t[8], _;
	}
	l.default = c;
}), 226);
