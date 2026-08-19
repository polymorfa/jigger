__d("WAWebShowroomComponentList.react", [
	"WAWebActionMenuItem.react",
	"WAWebMenu.react",
	"WAWebMenuSearch.react",
	"WAWebStaticMenuItem.react",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.active, n = e.list, r = e.onSelectStory, a = [], i = null;
		return n.forEach(function(e, n) {
			i !== e.section && (i = e.section, i != null && a.push(s.jsx(o("WAWebStaticMenuItem.react").MenuHeading, { children: s.jsx(o("WAWebText.react").WAWebTextTitle, {
				color: "teal",
				children: i
			}) }, "heading-" + i)));
			var l = e.storyName;
			a.push(s.jsx(o("WAWebActionMenuItem.react").ActionMenuItem, {
				optionId: l,
				onSelect: function() {
					r(e);
				},
				primary: l,
				searchCriteria: [
					l,
					e.section,
					e.description
				].join(" "),
				forceActive: t === e
			}, n));
		}), s.jsxs(o("WAWebMenu.react").WAWebMenu, {
			size: "small",
			children: [s.jsx(o("WAWebMenuSearch.react").MenuSearchInput, {}), a]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
