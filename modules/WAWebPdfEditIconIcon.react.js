__d("WAWebPdfEditIconIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "pdf-edit-icon";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 17, 17, "0 0 17 17"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M16.63 10.35c-1.27-1.32-4.73-.78-5.57-.69A15 15 0 0 1 8.72 6.6a14 14 0 0 0 .78-4.05C9.5 1.32 9 0 7.64 0a1.4 1.4 0 0 0-1.17.68c-.58 1.02-.34 3.08.58 5.18a35 35 0 0 1-2.39 5.57C3.25 12 .27 13.38.03 14.84c-.1.45.05.91.39 1.22.34.3.77.45 1.22.44 1.8 0 3.56-2.49 4.78-4.6a33 33 0 0 1 4.25-1.12c1.9 1.66 3.57 1.9 4.45 1.9 1.17 0 1.61-.48 1.75-.92a1.27 1.27 0 0 0-.24-1.41m-1.22.83c-.05.34-.5.68-1.27.49a6.7 6.7 0 0 1-2.49-1.27c.64-.1 2.05-.24 3.07-.05.4.1.78.34.69.83M7.25 1.12a.5.5 0 0 1 .4-.25c.43 0 .54.54.54.98a10.8 10.8 0 0 1-.59 3.03c-.74-1.95-.6-3.32-.35-3.76m-.1 9.47q.64-1.33 1.13-2.73c.45.72.98 1.39 1.56 2 0 .05-1.51.34-2.68.73m-2.88 1.96c-1.13 1.85-2.3 3.02-2.94 3.02a.8.8 0 0 1-.3-.1.37.37 0 0 1-.14-.43c.16-.69 1.42-1.61 3.38-2.5"
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
	l.PdfEditIconIcon = d;
}), 98);
