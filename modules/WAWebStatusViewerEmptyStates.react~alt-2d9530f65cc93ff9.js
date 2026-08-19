__d("WAWebStatusViewerEmptyStates.react", [
	"fbt",
	"WAWebEmptyState.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.readReceiptsOff;
		return u.jsx(o("WAWebEmptyState.react").Empty, { children: t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		return u.jsx(o("WAWebEmptyState.react").Empty, { children: s._(
			/*BTDS*/
			""
		) });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.NoViews = c, l.NoContactsFound = d;
}), 226);
