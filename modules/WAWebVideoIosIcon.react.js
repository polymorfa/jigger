__d("WAWebVideoIosIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "video-ios";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 28, 29, "0 0 29 28"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M5.78 23.09c-2.62 0-4.19-1.53-4.19-4.14V9.57c0-2.62 1.69-4.15 4.2-4.15H17c2.62 0 4.19 1.53 4.19 4.15v1.47l4.06-3.43c.43-.36.9-.6 1.34-.6.95 0 1.57.7 1.57 1.7v11.1c0 1-.62 1.7-1.57 1.7-.44 0-.91-.25-1.34-.6l-4.06-3.44v1.48c0 2.61-1.57 4.14-4.2 4.14H5.79Zm.3-1.62h10.63c1.75 0 2.76-.9 2.76-2.78V9.82c0-1.86-1.01-2.77-2.76-2.77H6.08c-1.76 0-2.76.91-2.76 2.77v8.87c0 1.87 1 2.78 2.76 2.78Zm19.98-2.03c.1.07.16.13.26.13.13 0 .18-.1.18-.26V9.2c0-.16-.05-.25-.18-.25-.1 0-.16.04-.26.12l-4.86 4.01v2.35l4.86 4.01Z"
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
	l.VideoIosIcon = d;
}), 98);
