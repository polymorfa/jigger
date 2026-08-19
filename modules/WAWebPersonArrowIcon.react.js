__d("WAWebPersonArrowIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "person-arrow";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M9 12a3.9 3.9 0 0 1-2.83-1.18A3.85 3.85 0 0 1 5 8c0-1.1.4-2.04 1.17-2.83A3.85 3.85 0 0 1 9 4c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 13 8c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 9 12Zm-8 6v-.8c0-.57.15-1.09.44-1.56a2.9 2.9 0 0 1 1.16-1.09 13.76 13.76 0 0 1 9.65-1.16c1.07.26 2.12.64 3.15 1.16.48.25.87.61 1.16 1.09.3.47.44 1 .44 1.56v.8c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H3c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41Zm2 0h12v-.8a.97.97 0 0 0-.5-.85c-.9-.45-1.8-.79-2.72-1.01a11.6 11.6 0 0 0-5.55 0c-.92.22-1.83.56-2.73 1.01a.97.97 0 0 0-.5.85v.8Zm6-8c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41C10.02 6.19 9.55 6 9 6c-.55 0-1.02.2-1.41.59C7.19 6.98 7 7.45 7 8c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59Zm5.9 1a1 1 0 0 1 1-1h4.65l-1.88-1.87a.97.97 0 0 1-.3-.72c0-.27.1-.51.3-.71.2-.2.44-.3.72-.3.27 0 .51.1.71.3l3.6 3.6a.96.96 0 0 1 0 1.4l-3.6 3.6a.98.98 0 0 1-.69.29.93.93 0 0 1-.71-.29c-.2-.2-.3-.44-.31-.71a.9.9 0 0 1 .29-.71L20.55 12H15.9a1 1 0 0 1-1-1Z"
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
	l.PersonArrowIcon = d;
}), 98);
