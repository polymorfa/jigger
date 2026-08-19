__d("WAWebGdprRequestAccountInfoSettingsFooterNotice", [
	"fbt",
	"WAWebNewsletterCommonGatingUtils",
	"WAWebText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { availability: {
		marginBottom: "x1e56ztr",
		$$css: !0
	} };
	function d(e) {
		var t = e.daysDelta, n = t === void 0 ? 3 : t, r = e.isPending, a = e.newsletterBodyText, i = n < 1 ? 1 : n, l = s._(
			/*BTDS*/
			""
		);
		return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() ? u.jsx("div", {
			className: "x162tt16 x5zjp28 x109j2v6",
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: r ? l : u.jsx(u.Fragment, { children: a }) })
		}) : u.jsxs("div", {
			className: "x162tt16 x5zjp28 x9orja2",
			children: [u.jsx(o("WAWebText.react").WAWebTextMuted, {
				xstyle: c.availability,
				children: s._(
					/*BTDS*/
					"",
					[s._plural(i, "number", i)]
				)
			}), u.jsx(o("WAWebText.react").WAWebTextMuted, { children: l })]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
