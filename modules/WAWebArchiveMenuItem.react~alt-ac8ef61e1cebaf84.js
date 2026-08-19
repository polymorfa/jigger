__d("WAWebArchiveMenuItem.react", [
	"fbt",
	"WDSIconIcArchive.react",
	"WDSIconIcUnarchive.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.disabled, n = o("useWAWebModelValues").useModelValues(e.chat, ["archive"]), a = e.onArchive.bind(null, !n.archive), i = "mi-archive", l = "ArchiveMenuItem", c = n.archive ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuItem.react"), {
			Icon: n.archive ? r("WDSIconIcUnarchive.react") : r("WDSIconIcArchive.react"),
			title: c,
			testid: i,
			onPress: a,
			disabled: t
		}, l);
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
