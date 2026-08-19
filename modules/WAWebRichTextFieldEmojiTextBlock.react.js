__d("WAWebRichTextFieldEmojiTextBlock.react", [
	"WAUnicodeUtils",
	"WAWebEmojiText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(24), a = t.emojiTextXstyle, i = t.isRefresh, l = t.settings, s = t.testid, d = t.textContent, m = i === void 0 ? !1 : i;
		if (!(!l || d == null || d === "")) {
			var p = l.textLimit, _ = l.readMoreText, f = l.onReadMore, g = l.formatters, h = l.ellipsify, y = l.multiline, C = l.inferLinesDirection, b = l.direction, v = l.preserveWhitespace, S = l.breakWord, R = l.emojiXstyle, L = p === void 0 ? 1 / 0 : p, E;
			n[0] !== a || n[1] !== m ? (E = m === !0 ? "x98rzlu x6ikm8r x10wlt62 x1vvkbs" : (e || (e = r("stylex")))(c.emojiText, a), n[0] = a, n[1] = m, n[2] = E) : E = n[2];
			var k = s + "-read-only", I;
			n[3] !== S || n[4] !== b || n[5] !== h || n[6] !== y || n[7] !== R || n[8] !== g || n[9] !== C || n[10] !== v || n[11] !== k || n[12] !== d || n[13] !== L ? (I = u.jsx(o("WAWebEmojiText.react").EmojiText, {
				testid: k,
				text: d,
				ellipsify: h,
				multiline: y,
				selectable: !0,
				emojiSize: o("WAWebEmojiText.react").EMOJI_SIZE.SMALL,
				textLimit: L,
				formatters: g,
				inferLinesDirection: C,
				direction: b,
				preserveWhitespace: v,
				breakWord: S,
				emojiXstyle: R
			}), n[3] = S, n[4] = b, n[5] = h, n[6] = y, n[7] = R, n[8] = g, n[9] = C, n[10] = v, n[11] = k, n[12] = d, n[13] = L, n[14] = I) : I = n[14];
			var T;
			n[15] !== f || n[16] !== _ || n[17] !== d || n[18] !== L ? (T = f && _ != null && o("WAUnicodeUtils").numCodepoints(d == null ? void 0 : d.toString()) > L && u.jsx(r("WDSTextualLink.react"), {
				onClick: f,
				tabIndex: 0,
				children: _
			}), n[15] = f, n[16] = _, n[17] = d, n[18] = L, n[19] = T) : T = n[19];
			var D;
			return n[20] !== E || n[21] !== I || n[22] !== T ? (D = u.jsxs("div", {
				className: E,
				children: [I, T]
			}), n[20] = E, n[21] = I, n[22] = T, n[23] = D) : D = n[23], D;
		}
	}
	l.default = d;
}), 98);
