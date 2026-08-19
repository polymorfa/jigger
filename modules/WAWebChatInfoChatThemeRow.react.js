__d("WAWebChatInfoChatThemeRow.react", [
	"fbt",
	"WAWebChatInfoDrawerRow.react",
	"WDSIconIcPalette.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(4), n = e.onClick, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(r("WDSIconIcPalette.react"), {}), t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
			/*BTDS*/
			""
		) }), t[1] = i) : i = t[1];
		var l;
		return t[2] !== n ? (l = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			testid: "chat-theme-row",
			icon: a,
			onClick: n,
			title: i
		}), t[2] = n, t[3] = l) : l = t[3], l;
	}
	l.default = c;
}), 226);
