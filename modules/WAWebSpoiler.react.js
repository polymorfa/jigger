__d("WAWebSpoiler.react", [
	"fbt",
	"WAWebSpoilerParticlesCanvas.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(24), n = e.children, a = e.interactive, i = a === void 0 ? !0 : a, l = m(!1), c = l[0], d = l[1], p = m(null), _ = p[0], f = p[1], g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = function(t) {
			t.preventDefault(), t.stopPropagation(), f({
				clientX: t.clientX,
				clientY: t.clientY
			}), d(!0);
		}, t[0] = g) : g = t[0];
		var h = g, y;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (y = function(t) {
			t.target === t.currentTarget && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), t.stopPropagation(), d(!0));
		}, t[1] = y) : y = t[1];
		var C = y, b;
		t[2] !== c ? (b = {
			0: { className: "xg01cxk x47corl x5h36tt x1fbs3r x19991ni x9lcvmn" },
			1: { className: "x5h36tt x1fbs3r x19991ni x9lcvmn x1hc1fzr x67bb7w" }
		}[!!c << 0], t[2] = c, t[3] = b) : b = t[3];
		var v;
		t[4] !== n || t[5] !== b ? (v = u.jsx("span", babelHelpers.extends({}, b, { children: n })), t[4] = n, t[5] = b, t[6] = v) : v = t[6];
		var S;
		t[7] !== _ || t[8] !== c ? (S = u.jsx(r("WAWebSpoilerParticlesCanvas.react"), {
			revealed: c,
			dismissCoords: _
		}), t[7] = _, t[8] = c, t[9] = S) : S = t[9];
		var R;
		t[10] !== v || t[11] !== S ? (R = u.jsxs(u.Fragment, { children: [v, S] }), t[10] = v, t[11] = S, t[12] = R) : R = t[12];
		var L = R;
		if (c) {
			var E;
			t[13] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "xbrszos xea3l6g x2q3nzr x18isctg xexx8yu x1j8ymqv x18d9i69 x4tra6z x1n2onr6 xjbqb8w x1heor9g xt0e3qv x1kxipp6" }, t[13] = E) : E = t[13];
			var k;
			return t[14] !== L ? (k = u.jsx("span", babelHelpers.extends({
				"data-spoiler": "revealed",
				"data-testid": "spoiler"
			}, E, { children: L })), t[14] = L, t[15] = k) : k = t[15], k;
		}
		if (i) {
			var I;
			t[16] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
				/*BTDS*/
				""
			), t[16] = I) : I = t[16];
			var T;
			t[17] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "xjbqb8w xbrszos xea3l6g x2q3nzr x18isctg x19co3pv x1ypdohk xexx8yu x1j8ymqv x18d9i69 x4tra6z x1n2onr6 x87ps6o" }, t[17] = T) : T = t[17];
			var D;
			return t[18] !== L ? (D = u.jsx("span", babelHelpers.extends({
				"data-spoiler": "true",
				"data-testid": "spoiler",
				role: "button",
				tabIndex: 0,
				"aria-label": I,
				onClickCapture: h,
				onKeyDown: C
			}, T, { children: L })), t[18] = L, t[19] = D) : D = t[19], D;
		}
		var x, $;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), $ = { className: "xjbqb8w xbrszos xea3l6g x2q3nzr x18isctg x19co3pv xexx8yu x1j8ymqv x18d9i69 x4tra6z x1n2onr6 x87ps6o xt0e3qv" }, t[20] = x, t[21] = $) : (x = t[20], $ = t[21]);
		var P;
		return t[22] !== L ? (P = u.jsx("span", babelHelpers.extends({
			"data-spoiler": "true",
			"data-testid": "spoiler",
			role: "img",
			"aria-label": x
		}, $, { children: L })), t[22] = L, t[23] = P) : P = t[23], P;
	}
	l.default = p;
}), 226);
