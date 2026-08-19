__d("WAWebUserShieldIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "user-shield";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 16, "0 0 16 20"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M8 11c.97 0 1.8-.34 2.47-1.02A3.37 3.37 0 0 0 11.5 7.5c0-.97-.34-1.8-1.03-2.47A3.37 3.37 0 0 0 8 4c-.97 0-1.8.34-2.47 1.03A3.37 3.37 0 0 0 4.5 7.5c0 .97.34 1.8 1.03 2.48C6.2 10.66 7.03 11 8 11Zm0 6.9a7.2 7.2 0 0 0 2.61-1.49c.76-.67 1.42-1.43 1.99-2.28A10.36 10.36 0 0 0 8 13a9.8 9.8 0 0 0-4.6 1.13c.57.85 1.23 1.6 1.99 2.28A7.2 7.2 0 0 0 8 17.9Zm0 2a1.98 1.98 0 0 1-.63-.1A10.11 10.11 0 0 1 2 15.64C.67 13.6 0 11.44 0 9.1V4.38c0-.42.12-.8.36-1.13.24-.33.56-.57.94-.72l6-2.25a2.07 2.07 0 0 1 1.4 0l6 2.25c.38.15.7.39.94.72.24.33.36.7.36 1.13V9.1c0 2.33-.67 4.51-2 6.54a10.11 10.11 0 0 1-5.68 4.24L8 19.9Z"
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
	l.UserShieldIcon = d;
}), 98);
