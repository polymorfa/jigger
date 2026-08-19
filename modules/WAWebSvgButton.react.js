__d("WAWebSvgButton.react", [
	"WAWebUnstyledButton.react",
	"WDSFocusStateStyles",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s = [
		"Icon",
		"aria-expanded",
		"aria-haspopup",
		"aria-label",
		"dataTab",
		"disabled",
		"onClick",
		"tabIndex",
		"testid",
		"title",
		"type",
		"xstyle"
	], u, c = u || (u = o("react")), d = { disabled: {
		opacity: "x5dmra7",
		$$css: !0
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(37), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l, u, m, p, _, f, g, h, y, C, b, v, S;
		if (n[3] !== a) {
			var R = a;
			l = R.Icon, u = R["aria-expanded"], m = R["aria-haspopup"], p = R["aria-label"], _ = R.dataTab, f = R.disabled, g = R.onClick, y = R.tabIndex, C = R.testid, b = R.title, v = R.type, S = R.xstyle, h = babelHelpers.objectWithoutPropertiesLoose(R, s), n[3] = a, n[4] = l, n[5] = u, n[6] = m, n[7] = p, n[8] = _, n[9] = f, n[10] = g, n[11] = h, n[12] = y, n[13] = C, n[14] = b, n[15] = v, n[16] = S;
		} else l = n[4], u = n[5], m = n[6], p = n[7], _ = n[8], f = n[9], g = n[10], h = n[11], y = n[12], C = n[13], b = n[14], v = n[15], S = n[16];
		var L;
		n[17] !== S ? (L = [S, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus], n[17] = S, n[18] = L) : L = n[18];
		var E = f === !0 && d.disabled, k;
		n[19] !== l || n[20] !== h || n[21] !== E ? (k = c.jsx(l, babelHelpers.extends({}, h, { xstyle: E })), n[19] = l, n[20] = h, n[21] = E, n[22] = k) : k = n[22];
		var I;
		return n[23] !== u || n[24] !== m || n[25] !== p || n[26] !== _ || n[27] !== f || n[28] !== g || n[29] !== i || n[30] !== L || n[31] !== k || n[32] !== y || n[33] !== C || n[34] !== b || n[35] !== v ? (I = c.jsx(r("WAWebUnstyledButton.react"), {
			ref: i,
			xstyle: L,
			disabled: f,
			onClick: g,
			"aria-label": p,
			"aria-haspopup": m,
			"aria-expanded": u,
			title: b,
			dataTab: _,
			type: v,
			testid: C,
			tabIndex: y,
			children: k
		}), n[23] = u, n[24] = m, n[25] = p, n[26] = _, n[27] = f, n[28] = g, n[29] = i, n[30] = L, n[31] = k, n[32] = y, n[33] = C, n[34] = b, n[35] = v, n[36] = I) : I = n[36], I;
	}
	l.default = m;
}), 98);
