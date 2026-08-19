__d("WAWebVideoPlaceholderIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-placeholder";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 28, 46, "0 0 46 28"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M.63 3.06C0 4.26 0 5.82 0 8.96v10.08c0 3.14 0 4.7.63 5.9a5.7 5.7 0 0 0 2.54 2.45C4.4 28 6.03 28 9.28 28h14.3c3.26 0 4.88 0 6.12-.61a5.7 5.7 0 0 0 2.54-2.45c.63-1.2.63-2.76.63-5.9V8.96c0-3.14 0-4.7-.63-5.9A5.7 5.7 0 0 0 29.7.6C28.46 0 26.84 0 23.6 0H9.29C6.02 0 4.4 0 3.16.61A5.7 5.7 0 0 0 .63 3.06ZM36.7 8.42c-.4.35-.62.85-.62 1.37v8.42c0 .52.23 1.02.63 1.37l5.19 4.61c1.24 1.1 3.24.25 3.24-1.37V5.18c0-1.62-2-2.47-3.24-1.37l-5.2 4.61Z"
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
	l.VideoPlaceholderIcon = d;
}), 98);
