__d("WAWebStatusAvatarWithPlusBadge.react", [
	"WAWebDetailImage.react",
	"WAWebStatusPlusBadge.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 40;
	function c(e) {
		var t = o("react-compiler-runtime").c(8), n = e.anchorRef, a = e.id, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x1rg5ohu x1n2onr6 x100vrsf x1vqgdyp" }, t[0] = i) : i = t[0];
		var l;
		t[1] !== a ? (l = s.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: a,
			theme: "status",
			size: u
		}), t[1] = a, t[2] = l) : l = t[2];
		var c;
		t[3] !== n ? (c = s.jsx(r("WAWebStatusPlusBadge.react"), { anchorRef: n }), t[3] = n, t[4] = c) : c = t[4];
		var d;
		return t[5] !== l || t[6] !== c ? (d = s.jsxs("div", babelHelpers.extends({}, i, { children: [l, c] })), t[5] = l, t[6] = c, t[7] = d) : d = t[7], d;
	}
	l.default = c;
}), 98);
