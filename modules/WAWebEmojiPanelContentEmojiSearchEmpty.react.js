__d("WAWebEmojiPanelContentEmojiSearchEmpty.react", [
	"fbt",
	"$InternalEnum",
	"WAWebEmptyState.react",
	"WAWebFbtCommon",
	"WDSMargins.stylex",
	"bx",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginInline14: {
		marginInlineStart: "xcev3uh",
		marginInlineEnd: "x1my54xf",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, m = r("bx").getURL(r("bx")("9550")), p = n("$InternalEnum").Mirrored(["DEFAULT", "SHORTCUT_TIP"]), _ = { emptySearchDefault: {
		fontSize: "x1f6kntn",
		color: "xhslqc4",
		$$css: !0
	} };
	function f(t) {
		var n = t.emojiSearchEmptyType, a = n === void 0 ? p.DEFAULT : n;
		if (a === p.DEFAULT) return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.emptySearchDefault, o("WDSMargins.stylex").wdsMargins.marginVer0, d.marginInline14), { children: r("WAWebFbtCommon")("No results found") }));
		var i = c.jsx("div", {
			className: "x1n2onr6 x1okw0bk xja02kk x41k7rp xhsvlbd xod5an3 x6ikm8r x10wlt62 xuuw4wc x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
			style: { backgroundImage: "url(" + m + ")" },
			children: c.jsxs("div", {
				className: "x10l6tqk x1t2f1v xth0gu4 x1f6kntn x1epju1n",
				children: [":", s._(
					/*BTDS*/
					""
				)]
			})
		});
		return c.jsx(o("WAWebEmptyState.react").Empty, {
			icon: i,
			text: s._(
				/*BTDS*/
				""
			),
			theme: o("WAWebEmptyState.react").EmptyStateTheme.Compact
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = {
		EmojiSearchEmpty: f,
		EmojiSearchEmptyType: p
	};
	l.default = g;
}), 226);
