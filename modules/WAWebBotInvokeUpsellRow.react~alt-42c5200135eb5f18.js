__d("WAWebBotInvokeUpsellRow.react", [
	"fbt",
	"WAWebBotProfileCollection",
	"WAWebDefaultUserColorIcon.react",
	"WAWebDetailImage.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.onMouseDown, r = e.onMouseEnter, a = e.onMouseUp, i = e.selected, l = o("WAWebBotProfileCollection").BotProfileCollection.getDefaultBot();
		return u.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x78zum5 x1qughib x6s0dn4 x889kno xl3akx1 x1a8lsjc x11ahuha" },
			1: { className: "x78zum5 x1qughib x6s0dn4 x889kno xl3akx1 x1a8lsjc x11ahuha x1ru9bj0" }
		}[(i === !0) << 0], {
			"data-testid": "contact-mention-list-item",
			onMouseDown: n,
			onMouseUp: a,
			onMouseEnter: r,
			children: [
				u.jsx("div", {
					className: "xs83m0k x1c4vz4f x1sx8fc2",
					children: l != null ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: l.id,
						size: 32
					}) : u.jsx(o("WAWebDefaultUserColorIcon.react").DefaultUserColorIcon, {
						width: 32,
						height: 32
					})
				}),
				u.jsx("div", {
					className: "xs83m0k x1c4vz4f x19l4sor x78zum5 x1cy8zhl x1nxh6w3 x1hm9lzh x1sa5p1d",
					children: (t = l == null ? void 0 : l.name) != null ? t : s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx("div", {
					className: "xs83m0k x1r8uery x1iyjqo2 x78zum5 x1cy8zhl xib33u6 x1pg5gke x1hm9lzh x1sa5p1d",
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		}));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
