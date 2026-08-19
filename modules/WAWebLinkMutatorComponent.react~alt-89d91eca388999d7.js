__d("WAWebLinkMutatorComponent.react", ["WAWebCopyPasteSelectable.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { link: {
		textDecoration: "x1bvjpef x1lku1pv x11iimpl xbvygy2 x1wp9yj1 x1e2wovf",
		color: "x1ph7ams x17f7hit",
		backgroundColor: "x9dqhi0 xn69kzl",
		textUnderlineOffset: "xrys4gj xhmieyt",
		$$css: !0
	} };
	function c(e) {
		var t = e.children, n = t === void 0 ? "" : t, r = e.dataTab, a = e.href, i = e.onClick, l = e.selectable, c = e.xstyle;
		return s.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
			onClick: function(t) {
				i == null || i();
			},
			onContextMenu: function(t) {
				i == null || i();
			},
			xstyle: [u.link, c],
			href: a,
			title: a,
			target: "_blank",
			rel: "noopener noreferrer",
			selectable: l,
			dataTab: r,
			children: n
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
