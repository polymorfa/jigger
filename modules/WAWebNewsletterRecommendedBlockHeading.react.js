__d("WAWebNewsletterRecommendedBlockHeading.react", [
	"fbt",
	"WAWebKeyboardHotKeys.react",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { headingContainer: {
		textAlign: "x2b8uid",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(6), n = e.xstyle, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = u.jsx(o("WAWebText.react").WAWebTextLarge, { children: s._(
			/*BTDS*/
			""
		) }), t[0] = r) : r = t[0];
		var a = r, i;
		t[1] !== n ? (i = [c.headingContainer, n], t[1] = n, t[2] = i) : i = t[2];
		var l;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			margin: 8,
			color: "secondary",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[3] = l) : l = t[3];
		var d;
		return t[4] !== i ? (d = u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			xstyle: i,
			children: [a, l]
		}), t[4] = i, t[5] = d) : d = t[5], d;
	}
	l.default = d;
}), 226);
