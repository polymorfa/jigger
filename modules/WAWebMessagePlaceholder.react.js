__d("WAWebMessagePlaceholder.react", [
	"WAWebMessageSpacerText.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { marginTop3: {
		marginTop: "x7r5mf7",
		$$css: !0
	} };
	function d(t) {
		var n = o("react-compiler-runtime").c(12), a = t.Icon, i = t.children, l = t.hasCaption, s = t.msg, d = t.theme, m;
		n[0] !== i || n[1] !== l || n[2] !== s || n[3] !== d ? (m = l ? i : u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
			c.marginTop3,
			o("WDSMargins.stylex").wdsMargins.marginBottom2,
			d === "small-icon" && o("WDSMargins.stylex").wdsMargins.marginTop0
		]), { children: u.jsx(r("WAWebMessageSpacerText.react"), {
			msg: s,
			theme: "placeholder",
			children: i
		}) })), n[0] = i, n[1] = l, n[2] = s, n[3] = d, n[4] = m) : m = n[4];
		var p = m, _;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x78zum5 x1q0g3np x1cy8zhl x6ikm8r x10wlt62 x1wl59ut x1k4tb9n xd4r4e8 x1vvkbs" }, n[5] = _) : _ = n[5];
		var f;
		n[6] !== a || n[7] !== d ? (f = a != null ? u.jsx("div", babelHelpers.extends({}, {
			0: { className: "x1okw0bk xhslqc4 xf6vk7d" },
			1: { className: "x1okw0bk xhslqc4 xf6vk7d x1ok221b" }
		}[(d === "status-icon") << 0], { children: a })) : null, n[6] = a, n[7] = d, n[8] = f) : f = n[8];
		var g;
		return n[9] !== p || n[10] !== f ? (g = u.jsxs("div", babelHelpers.extends({}, _, { children: [f, p] })), n[9] = p, n[10] = f, n[11] = g) : g = n[11], g;
	}
	l.default = d;
}), 98);
