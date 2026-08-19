__d("WAWebNewsletterRecommendedBlockHeading.react", [
	"fbt",
	"WAWebKeyboardHotKeys.react",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { headingContainer: {
		textAlign: "x2b8uid",
		$$css: !0
	} };
	function d(e) {
		var t = e.xstyle, n = u.jsx(o("WAWebText.react").WAWebTextLarge, { children: s._(
			/*BTDS*/
			""
		) });
		return u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			xstyle: [c.headingContainer, t],
			children: [n, u.jsx(o("WAWebText.react").WAWebTextTitle, {
				margin: 8,
				color: "secondary",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
