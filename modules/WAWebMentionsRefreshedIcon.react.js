__d("WAWebMentionsRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "mentions-refreshed";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M11.99 21a8.7 8.7 0 0 1-3.49-.7 9.1 9.1 0 0 1-4.8-4.81 8.8 8.8 0 0 1-.7-3.5c0-1.24.23-2.4.7-3.5A9.1 9.1 0 0 1 8.51 3.7a8.8 8.8 0 0 1 3.5-.7c1.24 0 2.4.23 3.5.7a9.1 9.1 0 0 1 4.79 4.8c.47 1.08.7 2.24.7 3.49v1.34c0 .87-.32 1.61-.96 2.22a3.21 3.21 0 0 1-3.77.53 3.39 3.39 0 0 1-1.13-1.06A4.13 4.13 0 0 1 12 16.48c-1.24 0-2.3-.44-3.17-1.31a4.32 4.32 0 0 1-1.3-3.18c0-1.24.43-2.3 1.3-3.16a4.33 4.33 0 0 1 3.18-1.3c1.24 0 2.3.43 3.16 1.3.87.87 1.3 1.93 1.3 3.17v1.23a1.25 1.25 0 0 0 1.28 1.26c.35 0 .64-.12.89-.37.24-.24.36-.54.36-.9V12c0-1.94-.68-3.59-2.05-4.95A6.76 6.76 0 0 0 12 5c-1.93 0-3.59.68-4.95 2.05A6.75 6.75 0 0 0 5 12c0 1.93.68 3.59 2.04 4.95A6.73 6.73 0 0 0 12 19h3.3c.27 0 .51.1.7.29.19.19.29.42.29.7a1 1 0 0 1-.29.71c-.19.2-.43.3-.7.3h-3.31Zm.01-6.51c.7 0 1.28-.24 1.76-.73A2.4 2.4 0 0 0 14.5 12c0-.7-.24-1.28-.73-1.76A2.4 2.4 0 0 0 12 9.5c-.7 0-1.28.24-1.76.73A2.4 2.4 0 0 0 9.5 12c0 .7.24 1.28.73 1.76a2.4 2.4 0 0 0 1.76.73Z"
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
	l.MentionsRefreshedIcon = d;
}), 98);
