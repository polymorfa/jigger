__d("WAWebBotCommandSuggestionResult.react", [
	"WAWebBotCommandSuggestions.react",
	"WAWebDetailImage.react",
	"WAWebEmojiText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(29), n = e.command, r = e.imageWid, a = e.onMouseDown, i = e.onMouseEnter, l = e.onMouseUp, u = e.query, c = e.selected, d = n.description, m = n.name, p;
		t[0] !== m || t[1] !== u.length ? (p = m.slice(0, u.length), t[0] = m, t[1] = u.length, t[2] = p) : p = t[2];
		var _ = p, f;
		t[3] !== m || t[4] !== u.length ? (f = m.slice(u.length), t[3] = m, t[4] = u.length, t[5] = f) : f = t[5];
		var g = f, h;
		t[6] !== c ? (h = {
			0: { className: "x78zum5 x6s0dn4 x1qx5ct2 xyamay9 xl3akx1 x1l90r2v x11ahuha x6ikm8r x10wlt62 x1f6kntn xhslqc4 xlyipyv xuxw1ft xxymvpz" },
			1: { className: "x78zum5 x6s0dn4 x1qx5ct2 xyamay9 xl3akx1 x1l90r2v x11ahuha x6ikm8r x10wlt62 x1f6kntn xhslqc4 xlyipyv xuxw1ft xxymvpz x1ru9bj0" }
		}[!!c << 0], t[6] = c, t[7] = h) : h = t[7];
		var y;
		t[8] !== r ? (y = r != null && s.jsx("div", {
			className: "x17pgkn5 xav9cv8 x1sa5p1d",
			children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: r,
				size: 32
			})
		}), t[8] = r, t[9] = y) : y = t[9];
		var C;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (C = s.jsx(o("WAWebEmojiText.react").EmojiText, {
			className: "xyqdw3p x14ug900",
			text: o("WAWebBotCommandSuggestions.react").QUERY_TRIGGER
		}), t[10] = C) : C = t[10];
		var b;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (b = "xyqdw3p x117nqv4 x1v5yvga", t[11] = b) : b = t[11];
		var v;
		t[12] !== _ ? (v = s.jsx(o("WAWebEmojiText.react").EmojiText, {
			className: b,
			text: _
		}), t[12] = _, t[13] = v) : v = t[13];
		var S;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (S = "xyqdw3p x14ug900", t[14] = S) : S = t[14];
		var R;
		t[15] !== g ? (R = s.jsx(o("WAWebEmojiText.react").EmojiText, {
			className: S,
			text: g
		}), t[15] = g, t[16] = R) : R = t[16];
		var L;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (L = "xyqdw3p x1hm9lzh xhslqc4 x1yc453h", t[17] = L) : L = t[17];
		var E;
		t[18] !== d ? (E = s.jsx(o("WAWebEmojiText.react").EmojiText, {
			className: L,
			testid: "bot-command-description",
			ellipsify: !0,
			text: d
		}), t[18] = d, t[19] = E) : E = t[19];
		var k;
		return t[20] !== a || t[21] !== i || t[22] !== l || t[23] !== E || t[24] !== h || t[25] !== y || t[26] !== v || t[27] !== R ? (k = s.jsxs("div", babelHelpers.extends({}, h, {
			onMouseDown: a,
			onMouseUp: l,
			onMouseEnter: i,
			children: [
				y,
				C,
				v,
				R,
				E
			]
		})), t[20] = a, t[21] = i, t[22] = l, t[23] = E, t[24] = h, t[25] = y, t[26] = v, t[27] = R, t[28] = k) : k = t[28], k;
	}
	l.default = u;
}), 98);
