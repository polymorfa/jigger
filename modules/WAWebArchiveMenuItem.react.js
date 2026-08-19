__d("WAWebArchiveMenuItem.react", [
	"fbt",
	"WDSIconIcArchive.react",
	"WDSIconIcUnarchive.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(11), n = e.disabled, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["archive"], t[0] = a) : a = t[0];
		var i = o("useWAWebModelValues").useModelValues(e.chat, a), l;
		t[1] !== i.archive || t[2] !== e.onArchive ? (l = e.onArchive.bind(null, !i.archive), t[1] = i.archive, t[2] = e.onArchive, t[3] = l) : l = t[3];
		var c = l, d;
		t[4] !== i.archive ? (d = i.archive ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[4] = i.archive, t[5] = d) : d = t[5];
		var m = d, p = i.archive ? r("WDSIconIcUnarchive.react") : r("WDSIconIcArchive.react"), _;
		return t[6] !== n || t[7] !== c || t[8] !== p || t[9] !== m ? (_ = u.jsx(r("WDSMenuItem.react"), {
			Icon: p,
			title: m,
			testid: "mi-archive",
			onPress: c,
			disabled: n
		}, "ArchiveMenuItem"), t[6] = n, t[7] = c, t[8] = p, t[9] = m, t[10] = _) : _ = t[10], _;
	}
	l.default = c;
}), 226);
