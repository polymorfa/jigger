__d("WAWebDebugCommandsPluginResult.react", [
	"WAWebDebugCommandGetters",
	"WAWebEmojiText.react",
	"WAWebFormatConfiguration",
	"WAWebFuzzySearch",
	"react",
	"useWAWebDebugCommandValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n = e.debugCommand, r = e.onMouseDown, a = e.onMouseEnter, i = e.onMouseUp, l = e.query, u = e.selected, c = n.id, d = o("useWAWebDebugCommandValues").useDebugCommandValues(c, [
			(t = o("WAWebDebugCommandGetters")).getName,
			t.getNameNormalized,
			t.getDisplayName,
			t.getParams,
			t.getDoc
		]), m = d[0], p = d[1], _ = d[2], f = d[3], g = d[4], h = o("WAWebFuzzySearch").fuzzyMatches(l.toLowerCase(), p), y = _ || m + "(" + f.join(", ") + ")";
		return s.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x78zum5 x1qx5ct2 xyamay9 xl3akx1 x1l90r2v x11ahuha x6ikm8r x10wlt62 x1f6kntn xhslqc4 xlyipyv xuxw1ft xxymvpz" },
			1: { className: "x78zum5 x1qx5ct2 xyamay9 xl3akx1 x1l90r2v x11ahuha x6ikm8r x10wlt62 x1f6kntn xhslqc4 xlyipyv xuxw1ft xxymvpz x1ru9bj0" }
		}[!!u << 0], {
			onMouseDown: r,
			onMouseUp: i,
			onMouseEnter: a,
			children: [
				s.jsx("span", {
					className: "xyqdw3p xbelrpt xhslqc4",
					children: ">"
				}),
				y.split("").map(function(e, t) {
					return s.jsx(o("WAWebEmojiText.react").EmojiText, {
						className: {
							0: "xyqdw3p x14ug900 x1ey7xld",
							1: "xyqdw3p x117nqv4 x1r8hjv8 x1ey7xld"
						}[!!h.includes(t) << 0],
						text: e
					}, t);
				}),
				s.jsx(o("WAWebEmojiText.react").EmojiText, {
					className: "xyqdw3p x1hm9lzh xhslqc4 x1yc453h",
					ellipsify: !0,
					text: g,
					formatters: o("WAWebFormatConfiguration").QuickReply()
				})
			]
		}));
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
