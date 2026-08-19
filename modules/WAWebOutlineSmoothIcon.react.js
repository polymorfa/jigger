__d("WAWebOutlineSmoothIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "outline-smooth";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M12 6.8A2.4 2.4 0 1 0 12 2a2.4 2.4 0 0 0 0 4.8ZM2.4 18a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8ZM24 15.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0ZM8.45 6.81a.8.8 0 1 0-.7-1.44c-.78.38-1.52.86-2.18 1.43A.8.8 0 1 0 6.6 8.02a8.68 8.68 0 0 1 1.85-1.2Zm7.79-1.44a.8.8 0 0 0-.7 1.44c.67.32 1.3.73 1.86 1.2a.8.8 0 0 0 1.03-1.21 9.95 9.95 0 0 0-2.19-1.43ZM4.88 9.95a.8.8 0 1 0-1.33-.88c-.47.7-.87 1.48-1.18 2.3a.8.8 0 1 0 1.5.57 9.3 9.3 0 0 1 1.01-1.99Zm15.57-.88a.8.8 0 0 0-1.33.88c.4.61.75 1.28 1.02 1.99a.8.8 0 1 0 1.5-.57 11.4 11.4 0 0 0-1.2-2.3Z"
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
	l.OutlineSmoothIcon = d;
}), 98);
