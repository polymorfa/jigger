__d("WAWebEmojiMutatorComponent.react", [
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebMessageLargeEmoji.react",
	"react",
	"useWAWebABPropConfigValue"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t, n = e.emoji, a = e.selectable, i = e.size, l = e.xstyle;
		o("useWAWebABPropConfigValue").useABPropConfigValue("use_custom_soccer_ball_for_reaction_enabled"), o("useWAWebABPropConfigValue").useABPropConfigValue("animated_soccer_ball_prod_enabled");
		var u = o("WAWebEmoji").EmojiUtil.applyGlyphTransformations((t = o("WAWebEmoji").EmojiUtil.normalizeEmoji(n)) != null ? t : n);
		return i === "xlarge" ? s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
			emoji: u,
			xstyle: l,
			size: o("WAWebMessageLargeEmoji.react").SIZE.XLARGE,
			element: "span",
			selectable: a
		}) : s.jsx(r("WAWebEmoji.react"), {
			emoji: u,
			xstyle: l,
			selectable: a,
			size: i
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
