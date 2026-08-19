__d("WAWebShowroomComponentList.react", [
	"WAWebActionMenuItem.react",
	"WAWebMenu.react",
	"WAWebMenuSearch.react",
	"WAWebStaticMenuItem.react",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(7), n = e.active, r = e.list, a = e.onSelectStory, i;
		if (t[0] !== n || t[1] !== r || t[2] !== a) {
			i = [];
			var l = null;
			r.forEach(function(e, t) {
				l !== e.section && (l = e.section, l != null && i.push(s.jsx(o("WAWebStaticMenuItem.react").MenuHeading, { children: s.jsx(o("WAWebText.react").WAWebTextTitle, {
					color: "teal",
					children: l
				}) }, "heading-" + l)));
				var r = e.storyName;
				i.push(s.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
					optionId: r,
					onSelect: function() {
						a(e);
					},
					primary: r,
					searchCriteria: [
						r,
						e.section,
						e.description
					].join(" "),
					forceActive: n === e
				}, t));
			}), t[0] = n, t[1] = r, t[2] = a, t[3] = i;
		} else i = t[3];
		var u;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (u = s.jsx(o("WAWebMenuSearch.react").MenuSearchInput, {}), t[4] = u) : u = t[4];
		var c;
		return t[5] !== i ? (c = s.jsxs(o("WAWebMenu.react").WAWebMenu, {
			size: "small",
			children: [u, i]
		}), t[5] = i, t[6] = c) : c = t[6], c;
	}
	l.default = u;
}), 98);
