__d("WAWebWdsPictoPrivateMentionIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-private-mention";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, "0 0 88 88"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "#25D366",
			stroke: "black",
			strokeWidth: 1.5,
			d: "M44.67 77.5c5.08 0 9.98-.61 13.16-1.67 2.35-.73 3.63-2.18 3.63-4.08 0-1.84-1.4-3.23-3.23-3.23a7.8 7.8 0 0 0-1.73.33c-3.69.84-6.7 1.4-10.88 1.4-16.4 0-26.67-9.93-26.67-25.89 0-15.9 10.32-26.66 25.55-26.66 14.9 0 24.88 9.31 24.88 23.32 0 8.64-2.79 14.17-6.86 14.17-2.68 0-4.02-1.4-4.02-4.08V30.53c0-2.29-1.45-3.85-3.73-3.85-2.07 0-3.46 1.67-3.46 3.01v1.12a12.24 12.24 0 0 0-9.04-4.13c-8.54 0-14.62 7.3-14.62 17.57C27.65 54.63 33.73 62 42.44 62a11.5 11.5 0 0 0 9.93-5.35c1.56 3.29 4.96 5.35 9.37 5.35 8.98 0 14.95-8.59 14.95-21.2 0-17.96-13.1-30.29-32.13-30.29-19.7 0-33.25 13.72-33.25 33.7 0 19.97 13.39 33.3 33.36 33.3Zm-.95-22.98c-4.74 0-7.7-3.97-7.7-10.44 0-6.41 3.01-10.43 7.76-10.43 4.8 0 7.86 3.9 7.86 10.27 0 6.52-3.12 10.6-7.92 10.6Z"
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
	l.WdsPictoPrivateMentionIcon = d;
}), 98);
