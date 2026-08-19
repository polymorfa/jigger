__d("WAWebAdaptiveLayoutRoot.react", [
	"WAWebAdaptiveLayoutContext.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useMemo, c = [
		"chatlist",
		"conversation",
		"right"
	];
	function d(e) {
		var t = o("react-compiler-runtime").c(18), n = e.children, a = e.conversationOpen, i = e.leftDrawerOpen, l = e.mode, u = e.rightDrawerOpen, d = l === "narrow", m;
		t[0] !== l || t[1] !== d ? (m = {
			mode: l,
			isNarrow: d
		}, t[0] = l, t[1] = d, t[2] = m) : m = t[2];
		var p = m, _;
		t[3] !== a || t[4] !== i || t[5] !== l || t[6] !== u ? (_ = "chatlist", l === "narrow" && (u ? _ = "right" : i ? _ = "left" : a && (_ = "conversation")), t[3] = a, t[4] = i, t[5] = l, t[6] = u, t[7] = _) : _ = t[7];
		var f;
		if (t[8] !== n || t[9] !== l || t[10] !== _) {
			var g;
			t[12] !== l || t[13] !== _ ? (g = function(t, n) {
				var e = c[n], r = l === "narrow" && (e == null || _ !== e);
				return s.jsx("div", babelHelpers.extends({}, {
					0: { className: "xjp7ctv" },
					1: { className: "x1s85apg" }
				}[!!r << 0], { children: t }));
			}, t[12] = l, t[13] = _, t[14] = g) : g = t[14], f = s.Children.map(n, g), t[8] = n, t[9] = l, t[10] = _, t[11] = f;
		} else f = t[11];
		var h;
		return t[15] !== p || t[16] !== f ? (h = s.jsx(r("WAWebAdaptiveLayoutContext.react").Provider, {
			value: p,
			children: f
		}), t[15] = p, t[16] = f, t[17] = h) : h = t[17], h;
	}
	l.default = d;
}), 98);
