__d("WAWebBizAILeadGenAddFieldView.react", [
	"fbt",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = 100;
	function _(e) {
		var t = o("react-compiler-runtime").c(42), n = e.onBack, a = e.onSave, i = e.testid, l = i === void 0 ? "lead-gen-add-field" : i, c = m(""), d = c[0], _ = c[1], f;
		t[0] !== d ? (f = d.trim(), t[0] = d, t[1] = f) : f = t[1];
		var g = f, h = g.length > 0 && g.length <= p, y;
		t[2] !== h || t[3] !== a || t[4] !== g ? (y = function() {
			h && a(g);
		}, t[2] = h, t[3] = a, t[4] = g, t[5] = y) : y = t[5];
		var C = y, b;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k" }, t[6] = b) : b = t[6];
		var v;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x6s0dn4 x1s70e7g x78zum5 x1nhvcw1 x12xbjc7" }, t[7] = v) : v = t[7];
		var S;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		).toString(), t[8] = S) : S = t[8];
		var R = l + "-back-btn", L;
		t[9] !== n || t[10] !== R ? (L = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcArrowBack.react"),
			onPress: n,
			variant: "borderless",
			size: "small",
			"aria-label": S,
			testid: R
		}), t[9] = n, t[10] = R, t[11] = L) : L = t[11];
		var E;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[12] = E) : E = t[12];
		var k;
		t[13] !== L ? (k = u.jsxs("div", babelHelpers.extends({}, v, { children: [L, E] })), t[13] = L, t[14] = k) : k = t[14];
		var I;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x12xbjc7 x1phvje8 xcldk2z" }, t[15] = I) : I = t[15];
		var T, D;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (T = u.jsx("div", babelHelpers.extends({}, I, { children: u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), D = { className: "x16ovd2e" }, t[16] = T, t[17] = D) : (T = t[16], D = t[17]);
		var x, $;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), $ = s._(
			/*BTDS*/
			""
		), t[18] = x, t[19] = $) : (x = t[18], $ = t[19]);
		var P;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (P = function(t) {
			return _(t.length > p ? t.slice(0, p) : t);
		}, t[20] = P) : P = t[20];
		var N = l + "-input", M;
		t[21] !== N || t[22] !== d ? (M = u.jsx("div", babelHelpers.extends({}, D, { children: u.jsx(r("WDSTextField.react"), {
			bottomText: x,
			label: $,
			maxCharacterCount: p,
			value: d,
			onValueChange: P,
			testid: N
		}) })), t[21] = N, t[22] = d, t[23] = M) : M = t[23];
		var w;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (w = { className: "x1amjocr x78zum5 x13a6bvl x1h678fw" }, t[24] = w) : w = t[24];
		var A;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
			/*BTDS*/
			""
		), t[25] = A) : A = t[25];
		var F = l + "-cancel-btn", O;
		t[26] !== n || t[27] !== F ? (O = u.jsx(r("WDSButton.react"), {
			variant: "tonal",
			size: "small",
			label: A,
			onPress: n,
			testid: F
		}), t[26] = n, t[27] = F, t[28] = O) : O = t[28];
		var B;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (B = s._(
			/*BTDS*/
			""
		), t[29] = B) : B = t[29];
		var W = !h, q = l + "-save-btn", U;
		t[30] !== C || t[31] !== W || t[32] !== q ? (U = u.jsx(r("WDSButton.react"), {
			variant: "filled",
			size: "small",
			label: B,
			onPress: C,
			disabled: W,
			testid: q
		}), t[30] = C, t[31] = W, t[32] = q, t[33] = U) : U = t[33];
		var V;
		t[34] !== O || t[35] !== U ? (V = u.jsxs("div", babelHelpers.extends({}, w, { children: [O, U] })), t[34] = O, t[35] = U, t[36] = V) : V = t[36];
		var H;
		return t[37] !== k || t[38] !== M || t[39] !== V || t[40] !== l ? (H = u.jsxs("div", babelHelpers.extends({}, b, {
			"data-testid": l,
			children: [
				k,
				T,
				M,
				V
			]
		})), t[37] = k, t[38] = M, t[39] = V, t[40] = l, t[41] = H) : H = t[41], H;
	}
	l.default = _;
}), 226);
