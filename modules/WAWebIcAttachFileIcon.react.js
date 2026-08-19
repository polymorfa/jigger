__d("WAWebIcAttachFileIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-attach-file";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M18 15.75c0 1.73-.6 3.2-1.82 4.43A6.03 6.03 0 0 1 11.75 22a6 6 0 0 1-4.42-1.82 6.03 6.03 0 0 1-1.83-4.43V6.5c0-1.25.44-2.31 1.31-3.19A4.34 4.34 0 0 1 10 2c1.25 0 2.31.44 3.19 1.31A4.34 4.34 0 0 1 14.5 6.5v8.75c0 .77-.27 1.42-.8 1.95s-1.18.8-1.95.8-1.42-.27-1.95-.8a2.65 2.65 0 0 1-.8-1.95V7a1 1 0 0 1 2 0v8.25a.73.73 0 0 0 .75.75.73.73 0 0 0 .75-.75V6.5c-.02-.7-.26-1.3-.74-1.78A2.37 2.37 0 0 0 10 4c-.7 0-1.3.24-1.78.72A2.41 2.41 0 0 0 7.5 6.5v9.25a4 4 0 0 0 1.22 3.01A4.14 4.14 0 0 0 11.75 20c1.17 0 2.16-.41 2.97-1.24A4.3 4.3 0 0 0 16 15.75V7a1 1 0 1 1 2 0v8.75Z"
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
	l.IcAttachFileIcon = d;
}), 98);
