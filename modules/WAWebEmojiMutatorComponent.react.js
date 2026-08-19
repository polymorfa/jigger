__d("WAWebEmojiMutatorComponent.react", [
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebMessageLargeEmoji.react",
	"react",
	"react-compiler-runtime",
	"useWAWebABPropConfigValue"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(11), n = e.emoji, a = e.selectable, i = e.size, l = e.xstyle;
		o("useWAWebABPropConfigValue").useABPropConfigValue("use_custom_soccer_ball_for_reaction_enabled"), o("useWAWebABPropConfigValue").useABPropConfigValue("animated_soccer_ball_prod_enabled");
		var u;
		if (t[0] !== n) {
			var c;
			u = o("WAWebEmoji").EmojiUtil.applyGlyphTransformations((c = o("WAWebEmoji").EmojiUtil.normalizeEmoji(n)) != null ? c : n), t[0] = n, t[1] = u;
		} else u = t[1];
		var d = u;
		if (i === "xlarge") {
			var m;
			return t[2] !== d || t[3] !== a || t[4] !== l ? (m = s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
				emoji: d,
				xstyle: l,
				size: o("WAWebMessageLargeEmoji.react").SIZE.XLARGE,
				element: "span",
				selectable: a
			}), t[2] = d, t[3] = a, t[4] = l, t[5] = m) : m = t[5], m;
		}
		var p;
		return t[6] !== d || t[7] !== a || t[8] !== i || t[9] !== l ? (p = s.jsx(r("WAWebEmoji.react"), {
			emoji: d,
			xstyle: l,
			selectable: a,
			size: i
		}), t[6] = d, t[7] = a, t[8] = i, t[9] = l, t[10] = p) : p = t[10], p;
	}
	l.default = u;
}), 98);
