__d("WAWebWorldIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "world";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M12 22a9.7 9.7 0 0 1-3.88-.79 10.1 10.1 0 0 1-3.18-2.15 10.1 10.1 0 0 1-2.15-3.18A9.7 9.7 0 0 1 2 12q0-2.08.79-3.89a10.2 10.2 0 0 1 2.15-3.17 10.1 10.1 0 0 1 3.19-2.15A9.7 9.7 0 0 1 12 2q2.08 0 3.89.79a10.2 10.2 0 0 1 3.17 2.15 10.2 10.2 0 0 1 2.15 3.17A9.65 9.65 0 0 1 22 12a9.7 9.7 0 0 1-.79 3.88 10.1 10.1 0 0 1-2.15 3.18 10.2 10.2 0 0 1-3.17 2.15A9.65 9.65 0 0 1 12 22m0-2.05q.65-.9 1.13-1.88T13.9 16h-3.8q.3 1.1.78 2.08T12 19.95m-2.6-.4q-.45-.82-.79-1.71A15 15 0 0 1 8.05 16H5.1a8.3 8.3 0 0 0 1.81 2.17 7.2 7.2 0 0 0 2.49 1.38m5.2 0a7.2 7.2 0 0 0 2.49-1.38A8.3 8.3 0 0 0 18.9 16h-2.95q-.23.95-.56 1.84a14 14 0 0 1-.79 1.71M4.25 14h3.4a13 13 0 0 1-.15-2 13 13 0 0 1 .15-2h-3.4A8 8 0 0 0 4 12a8 8 0 0 0 .25 2m5.4 0h4.7q.08-.5.11-.99.04-.48.04-1.01a13 13 0 0 0-.15-2h-4.7q-.07.5-.11.99-.04.48-.04 1.01a13 13 0 0 0 .15 2m6.7 0h3.4a8 8 0 0 0 .25-2 8 8 0 0 0-.25-2h-3.4q.07.5.11.99.04.48.04 1.01a13 13 0 0 1-.15 2m-.4-6h2.95a8.3 8.3 0 0 0-1.81-2.17 7.2 7.2 0 0 0-2.49-1.38q.45.82.79 1.71.33.89.56 1.84M10.1 8h3.8q-.3-1.1-.78-2.08A12.7 12.7 0 0 0 12 4.05q-.65.9-1.13 1.88T10.1 8m-5 0h2.95q.22-.95.56-1.84.34-.89.79-1.71Q8 4.9 6.91 5.83A8.3 8.3 0 0 0 5.1 8"
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
	l.WorldIcon = d;
}), 98);
