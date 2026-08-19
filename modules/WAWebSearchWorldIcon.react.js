__d("WAWebSearchWorldIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "search-world";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2c2.12 0 4 .58 5.66 1.75a10.05 10.05 0 0 1 3.61 4.53c.12.28.13.56.02.85a.94.94 0 0 1-1.35.5 1.1 1.1 0 0 1-.52-.6A7.7 7.7 0 0 0 15 4.6V5c.01.55-.19 1.02-.58 1.41-.39.4-.86.59-1.41.59h-2v2c0 .28-.1.52-.29.71a.94.94 0 0 1-.71.29H8v2h1c.28 0 .52.1.71.29.2.19.29.43.29.71v2H9l-4.8-4.8-.14.9a7.78 7.78 0 0 0 1.95 6.22 7.7 7.7 0 0 0 5.06 2.63A1.04 1.04 0 0 1 12 21c0 .28-.1.52-.29.71a.78.78 0 0 1-.69.24 9.75 9.75 0 0 1-6.42-3.2A9.62 9.62 0 0 1 2 12Zm18.4 8.8-2.5-2.5c-.35.2-.72.37-1.13.5a4.34 4.34 0 0 1-4.46-1.11A4.34 4.34 0 0 1 11 14.5c0-1.25.44-2.31 1.31-3.19A4.34 4.34 0 0 1 15.5 10c1.25 0 2.31.44 3.19 1.31a4.34 4.34 0 0 1 1.11 4.46c-.13.4-.3.78-.5 1.13l2.5 2.5c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27ZM15.5 17c.7 0 1.3-.24 1.77-.73.49-.48.73-1.07.73-1.77s-.24-1.3-.73-1.78A2.41 2.41 0 0 0 15.5 12c-.7 0-1.3.24-1.78.72A2.41 2.41 0 0 0 13 14.5c0 .7.24 1.3.72 1.77.49.49 1.08.73 1.78.73Z"
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.SearchWorldIcon = d;
}), 98);
