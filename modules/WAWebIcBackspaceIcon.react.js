__d("WAWebIcBackspaceIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-backspace";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M9 19a2.02 2.02 0 0 1-1.65-.85l-3.52-5a1.94 1.94 0 0 1 0-2.3l3.52-5A1.96 1.96 0 0 1 9 5h10c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v10c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H9Zm0-2h10V7H9l-3.55 5L9 17Zm5-3.6 1.9 1.9c.18.18.42.27.7.27.28 0 .52-.09.7-.27a.95.95 0 0 0 .27-.7.96.96 0 0 0-.27-.7L15.4 12l1.9-1.9a.95.95 0 0 0 .27-.7.96.96 0 0 0-.27-.7.95.95 0 0 0-.7-.27.96.96 0 0 0-.7.27L14 10.6l-1.9-1.9a.95.95 0 0 0-.7-.27.96.96 0 0 0-.7.27.95.95 0 0 0-.27.7c0 .28.09.52.27.7l1.9 1.9-1.9 1.9a.95.95 0 0 0-.27.7c0 .28.09.52.27.7.18.18.42.27.7.27.28 0 .52-.09.7-.27l1.9-1.9Z"
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.IcBackspaceIcon = d;
}), 98);
