__d("WAWebPaletteOutlineIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "palette-outline";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 20, "0 0 20 20"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M10 20a9.7 9.7 0 0 1-3.88-.79 10.1 10.1 0 0 1-3.18-2.15 10.1 10.1 0 0 1-2.15-3.18A9.7 9.7 0 0 1 0 10q0-2.07.81-3.9a10.1 10.1 0 0 1 2.2-3.17A10.5 10.5 0 0 1 6.25.78 10 10 0 0 1 10.2 0q2 0 3.77.69a9.9 9.9 0 0 1 3.12 1.9 9.1 9.1 0 0 1 2.12 2.87A8.3 8.3 0 0 1 20 9.05q0 2.88-1.75 4.41Q16.5 15 14 15h-1.85q-.23 0-.31.13a.47.47 0 0 0-.09.27q0 .3.38.86t.37 1.29q0 1.25-.69 1.85T10 20m-5.5-9q.65 0 1.07-.42T6 9.5t-.42-1.07T4.5 8t-1.07.42T3 9.5t.42 1.07T4.5 11m3-4q.65 0 1.07-.42T9 5.5t-.42-1.07T7.5 4t-1.07.42T6 5.5t.42 1.07T7.5 7m5 0q.65 0 1.07-.42T14 5.5t-.42-1.07T12.5 4t-1.07.42T11 5.5t.42 1.07T12.5 7m3 4q.65 0 1.07-.42T17 9.5t-.42-1.07T15.5 8t-1.07.42T14 9.5t.42 1.07 1.08.43M10 18q.22 0 .36-.13a.42.42 0 0 0 .14-.32q0-.35-.38-.82t-.37-1.43q0-1.05.72-1.68t1.78-.62H14q1.65 0 2.83-.96Q18 11.08 18 9.05q0-3.02-2.31-5.04Q13.38 2 10.2 2 6.8 2 4.4 4.33T2 10q0 3.33 2.34 5.66T10 18"
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
	l.PaletteOutlineIcon = d;
}), 98);
