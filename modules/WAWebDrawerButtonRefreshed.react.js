__d("WAWebDrawerButtonRefreshed.react", [
	"WAWebFlex.react",
	"WAWebL10NFbtTypeUtils",
	"WDSPaddings.stylex",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useMergeRefs",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		paddingBlock10: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		marginInlineEnd14: {
			marginInlineEnd: "x1my54xf",
			$$css: !0
		}
	}, c = {
		container: {
			boxSizing: "x9f619",
			height: "x1x0gksc",
			$$css: !0
		},
		iconContainer: {
			width: "x100vrsf",
			color: "xhslqc4",
			$$css: !0
		},
		danger: {
			color: "xqnyt8g",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(28), n = e.ariaLabel, a = e.children, i = e.danger, l = e.disabled, d = e.icon, m = e.maxLines, p = e.onClick, _ = e.ref, f = e.testid, g = e.title, h;
		t[0] !== l ? (h = { disabled: l }, t[0] = l, t[1] = h) : h = t[1];
		var y = r("useWAWebStaticButtonA11y")(p, h), C = y[0], b = y[1], v = r("useMergeRefs")(C, _), S = o("WAWebL10NFbtTypeUtils").isStringOrFbt(a) ? a : null, R = n != null ? n : S, L = l !== !0 && i === !0, E = L ? "secondaryNegativeEmphasized" : "contentDefault", k;
		t[2] !== a || t[3] !== m || t[4] !== E ? (k = s.jsx(r("WDSText.react"), {
			type: "Body1",
			maxLines: m,
			colorName: E,
			children: a
		}), t[2] = a, t[3] = m, t[4] = E, t[5] = k) : k = t[5];
		var I = k, T;
		t[6] !== l || t[7] !== L ? (T = {
			0: { className: "x7zqoo0 xt1g1te x1iz9ej4 x1ga13z8 x1aiwb2g x1n67ipk x1hm9lzh x1sa5p1d" },
			2: { className: "x7zqoo0 xt1g1te x1iz9ej4 x1ga13z8 xoo5hyf x3039w2 x1hm9lzh x1sa5p1d" },
			1: { className: "x7zqoo0 xt1g1te x1iz9ej4 x1ga13z8 xyd83as xt0e3qv x1rpam2w xlwr4kp x1hm9lzh x1sa5p1d" },
			3: { className: "x7zqoo0 xt1g1te x1iz9ej4 x1ga13z8 xyd83as xt0e3qv x1rpam2w xlwr4kp x1hm9lzh x1sa5p1d" }
		}[!!L << 1 | (l === !0) << 0], t[6] = l, t[7] = L, t[8] = T) : T = t[8];
		var D;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (D = [
			c.container,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
			u.paddingBlock10
		], t[9] = D) : D = t[9];
		var x = L && c.danger, $;
		t[10] !== x ? ($ = [
			c.iconContainer,
			u.marginInlineEnd14,
			x
		], t[10] = x, t[11] = $) : $ = t[11];
		var P;
		t[12] !== d || t[13] !== $ ? (P = s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: $,
			children: d
		}), t[12] = d, t[13] = $, t[14] = P) : P = t[14];
		var N;
		t[15] !== I ? (N = s.jsx(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			grow: 1,
			children: I
		}), t[15] = I, t[16] = N) : N = t[16];
		var M;
		t[17] !== P || t[18] !== N ? (M = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "stretch",
			xstyle: D,
			children: [P, N]
		}), t[17] = P, t[18] = N, t[19] = M) : M = t[19];
		var w;
		return t[20] !== R || t[21] !== b || t[22] !== v || t[23] !== M || t[24] !== T || t[25] !== f || t[26] !== g ? (w = s.jsx("div", babelHelpers.extends({}, b, T, {
			"data-ignore-capture": "any",
			"data-testid": f,
			ref: v,
			title: g,
			"aria-label": R,
			children: M
		})), t[20] = R, t[21] = b, t[22] = v, t[23] = M, t[24] = T, t[25] = f, t[26] = g, t[27] = w) : w = t[27], w;
	}
	l.default = d;
}), 98);
