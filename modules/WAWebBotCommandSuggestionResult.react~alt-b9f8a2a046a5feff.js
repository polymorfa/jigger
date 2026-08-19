__d("WAWebBotCommandSuggestionResult.react", [
	"WAWebBotCommandSuggestions.react",
	"WAWebDetailImage.react",
	"WAWebEmojiText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.command, n = e.imageWid, r = e.onMouseDown, a = e.onMouseEnter, i = e.onMouseUp, l = e.query, u = e.selected, c = t.description, d = t.name, m = d.slice(0, l.length), p = d.slice(l.length);
		return s.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x78zum5 x6s0dn4 x1qx5ct2 xyamay9 xl3akx1 x1l90r2v x11ahuha x6ikm8r x10wlt62 x1f6kntn xhslqc4 xlyipyv xuxw1ft xxymvpz" },
			1: { className: "x78zum5 x6s0dn4 x1qx5ct2 xyamay9 xl3akx1 x1l90r2v x11ahuha x6ikm8r x10wlt62 x1f6kntn xhslqc4 xlyipyv xuxw1ft xxymvpz x1ru9bj0" }
		}[!!u << 0], {
			onMouseDown: r,
			onMouseUp: i,
			onMouseEnter: a,
			children: [
				n != null && s.jsx("div", {
					className: "x17pgkn5 xav9cv8 x1sa5p1d",
					children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: n,
						size: 32
					})
				}),
				s.jsx(o("WAWebEmojiText.react").EmojiText, {
					className: "xyqdw3p x14ug900",
					text: o("WAWebBotCommandSuggestions.react").QUERY_TRIGGER
				}),
				s.jsx(o("WAWebEmojiText.react").EmojiText, {
					className: "xyqdw3p x117nqv4 x1v5yvga",
					text: m
				}),
				s.jsx(o("WAWebEmojiText.react").EmojiText, {
					className: "xyqdw3p x14ug900",
					text: p
				}),
				s.jsx(o("WAWebEmojiText.react").EmojiText, {
					className: "xyqdw3p x1hm9lzh xhslqc4 x1yc453h",
					testid: "bot-command-description",
					ellipsify: !0,
					text: c
				})
			]
		}));
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
