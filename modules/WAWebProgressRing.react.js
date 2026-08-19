__d("WAWebProgressRing.react", [
	"WAWebL10N",
	"WAWebSpinner.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(19), n = e.color, a = e.labelTestid, i = e.percentage, l = e.size, u = e.stroke, c = e.testid, d = e.textType, m = n === void 0 ? "progress" : n, p = a === void 0 ? "progress_ring_label" : a, _ = u === void 0 ? 3 : u, f = c === void 0 ? "progress_ring" : c, g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x6s0dn4 x3nfvp2 xl56j7k x1n2onr6" }, t[0] = g) : g = t[0];
		var h;
		t[1] !== m || t[2] !== i || t[3] !== l || t[4] !== _ ? (h = s.jsx(o("WAWebSpinner.react").Spinner, {
			value: i,
			max: 100,
			size: l,
			stroke: _,
			color: m
		}), t[1] = m, t[2] = i, t[3] = l, t[4] = _, t[5] = h) : h = t[5];
		var y;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x6s0dn4 x1ey2m1c x78zum5 x1o0tod xtijo5x xl56j7k x10l6tqk x13vifvy" }, t[6] = y) : y = t[6];
		var C;
		t[7] !== i ? (C = r("WAWebL10N").n(i / 100, void 0, {
			style: "percent",
			maximumFractionDigits: 0
		}), t[7] = i, t[8] = C) : C = t[8];
		var b;
		t[9] !== C || t[10] !== d ? (b = s.jsx(r("WDSText.react"), {
			type: d,
			colorName: "contentDefault",
			children: C
		}), t[9] = C, t[10] = d, t[11] = b) : b = t[11];
		var v;
		t[12] !== p || t[13] !== b ? (v = s.jsx("div", babelHelpers.extends({ "data-testid": p }, y, { children: b })), t[12] = p, t[13] = b, t[14] = v) : v = t[14];
		var S;
		return t[15] !== v || t[16] !== h || t[17] !== f ? (S = s.jsxs("div", babelHelpers.extends({ "data-testid": f }, g, { children: [h, v] })), t[15] = v, t[16] = h, t[17] = f, t[18] = S) : S = t[18], S;
	}
	l.default = u;
}), 98);
