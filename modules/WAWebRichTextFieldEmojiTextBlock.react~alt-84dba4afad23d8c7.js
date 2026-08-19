__d("WAWebRichTextFieldEmojiTextBlock.react", [
	"WAUnicodeUtils",
	"WAWebEmojiText.react",
	"WDSTextualLink.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { emojiText: {
		flexGrow: "x1iyjqo2",
		flexShrink: "xs83m0k",
		flexBasis: "x1t1x2f9",
		paddingTop: "x1y1aw1k",
		paddingInlineEnd: "x1gabggj",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		lineHeight: "x1fc57z9",
		wordWrap: "x1vvkbs",
		$$css: !0
	} };
	function d(t) {
		var n = t.emojiTextXstyle, a = t.isRefresh, i = a === void 0 ? !1 : a, l = t.settings, s = t.testid, d = t.textContent;
		if (!(!l || d == null || d === "")) {
			var m = l.textLimit, p = m === void 0 ? 1 / 0 : m, _ = l.readMoreText, f = l.onReadMore, g = l.formatters, h = l.ellipsify, y = l.multiline, C = l.inferLinesDirection, b = l.direction, v = l.preserveWhitespace, S = l.breakWord, R = l.emojiXstyle;
			return u.jsxs("div", {
				className: i === !0 ? "x98rzlu x6ikm8r x10wlt62 x1vvkbs" : (e || (e = r("stylex")))(c.emojiText, n),
				children: [u.jsx(o("WAWebEmojiText.react").EmojiText, {
					testid: s + "-read-only",
					text: d,
					ellipsify: h,
					multiline: y,
					selectable: !0,
					emojiSize: o("WAWebEmojiText.react").EMOJI_SIZE.SMALL,
					textLimit: p,
					formatters: g,
					inferLinesDirection: C,
					direction: b,
					preserveWhitespace: v,
					breakWord: S,
					emojiXstyle: R
				}), f && _ != null && o("WAUnicodeUtils").numCodepoints(d == null ? void 0 : d.toString()) > p && u.jsx(r("WDSTextualLink.react"), {
					onClick: f,
					tabIndex: 0,
					children: _
				})]
			});
		}
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
