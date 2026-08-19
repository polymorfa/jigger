__d("WAWebUnstyledButton.react", [
	"WAWebClassnames",
	"WAWebKeyboardIsKeyActivation",
	"WAWebUnstyledButtonStyles",
	"WDSFocusStateStyles",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useMergeRefs"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"ref",
		"children",
		"customDataAttr",
		"dataTab",
		"dir",
		"disabled",
		"onBlur",
		"onClick",
		"onContextMenu",
		"onDisabledClick",
		"onFocus",
		"onKeyDown",
		"onMouseDown",
		"onMouseEnter",
		"onMouseLeave",
		"onMouseOver",
		"onMouseUp",
		"onPaste",
		"role",
		"tabIndex",
		"testid",
		"title",
		"type",
		"xstyle"
	], s, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef;
	function _(t) {
		var n, a = o("react-compiler-runtime").c(60), i, l, u, d, m, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N;
		a[0] !== t ? (k = t.ref, i = t.children, l = t.customDataAttr, u = t.dataTab, d = t.dir, m = t.disabled, _ = t.onBlur, f = t.onClick, g = t.onContextMenu, h = t.onDisabledClick, y = t.onFocus, C = t.onKeyDown, b = t.onMouseDown, v = t.onMouseEnter, S = t.onMouseLeave, R = t.onMouseOver, L = t.onMouseUp, E = t.onPaste, T = t.role, D = t.tabIndex, $ = t.testid, P = t.title, x = t.type, N = t.xstyle, I = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l, a[3] = u, a[4] = d, a[5] = m, a[6] = _, a[7] = f, a[8] = g, a[9] = h, a[10] = y, a[11] = C, a[12] = b, a[13] = v, a[14] = S, a[15] = R, a[16] = L, a[17] = E, a[18] = k, a[19] = I, a[20] = T, a[21] = D, a[22] = x, a[23] = $, a[24] = P, a[25] = N) : (i = a[1], l = a[2], u = a[3], d = a[4], m = a[5], _ = a[6], f = a[7], g = a[8], h = a[9], y = a[10], C = a[11], b = a[12], v = a[13], S = a[14], R = a[15], L = a[16], E = a[17], k = a[18], I = a[19], T = a[20], D = a[21], x = a[22], $ = a[23], P = a[24], N = a[25]);
		var M = D === void 0 ? 0 : D, w = x === void 0 ? "button" : x, A = p(null), F = r("useMergeRefs")(k, A), O = (n = I["aria-label"]) != null ? n : P, B;
		a[26] === Symbol.for("react.memo_cache_sentinel") ? (B = function(t) {
			if (r("WAWebKeyboardIsKeyActivation")(t)) {
				var e;
				t.stopPropagation(), t.preventDefault(), (e = A.current) == null || e.click();
			}
		}, a[26] = B) : B = a[26];
		var W = B, q = m === !0 ? h : f, U;
		a[27] !== m || a[28] !== q ? (U = function(t) {
			q != null && (m === !0 && (t.stopPropagation(), t.preventDefault()), q(t));
		}, a[27] = m, a[28] = q, a[29] = U) : U = a[29];
		var V = U, H;
		a[30] !== m || a[31] !== N ? (H = o("WAWebClassnames").classnamesConvertMeToStylexPlease((s || (s = r("stylex")))(r("WAWebUnstyledButtonStyles").button, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, o("WDSPaddings.stylex").wdsPaddings.padding0, m === !0 && r("WAWebUnstyledButtonStyles").disabled, N)), a[30] = m, a[31] = N, a[32] = H) : H = a[32];
		var G = u != null ? u : void 0, z = m === !0 && h == null, j = m === !0, K = q == null ? null : V, Q;
		return a[33] !== O || a[34] !== i || a[35] !== l || a[36] !== d || a[37] !== F || a[38] !== _ || a[39] !== g || a[40] !== y || a[41] !== C || a[42] !== b || a[43] !== v || a[44] !== S || a[45] !== R || a[46] !== L || a[47] !== E || a[48] !== I || a[49] !== T || a[50] !== H || a[51] !== G || a[52] !== z || a[53] !== j || a[54] !== K || a[55] !== M || a[56] !== $ || a[57] !== P || a[58] !== w ? (Q = c.jsx("button", babelHelpers.extends({
			className: H,
			tabIndex: M,
			"data-tab": G,
			"data-testid": $,
			disabled: z,
			"aria-disabled": j,
			onClick: K,
			onContextMenu: g,
			onMouseEnter: v,
			onMouseOver: R,
			onMouseLeave: S,
			onMouseDown: b,
			onMouseUp: L,
			onKeyDown: C,
			onKeyPress: W,
			onPaste: E,
			onFocus: y,
			onBlur: _,
			ref: F,
			title: P,
			type: w,
			role: T,
			dir: d,
			"aria-label": O,
			"data-custom-attr": l
		}, I, { children: i })), a[33] = O, a[34] = i, a[35] = l, a[36] = d, a[37] = F, a[38] = _, a[39] = g, a[40] = y, a[41] = C, a[42] = b, a[43] = v, a[44] = S, a[45] = R, a[46] = L, a[47] = E, a[48] = I, a[49] = T, a[50] = H, a[51] = G, a[52] = z, a[53] = j, a[54] = K, a[55] = M, a[56] = $, a[57] = P, a[58] = w, a[59] = Q) : Q = a[59], Q;
	}
	l.default = _;
}), 98);
