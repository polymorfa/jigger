__d("WAWebMediaEditorRotateLeftIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "media-editor-rotate-left";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M6.35 8.14c0-.4-.32-.72-.72-.72h-.61c.01-1.85.45-3.18 1.32-4.05.9-.9 2.25-1.34 4.15-1.34h.12a.6.6 0 0 0 .6-.6V.82c0-.4-.32-.73-.72-.73-2.4 0-4.26.64-5.52 1.9-1.24 1.24-1.87 3.07-1.9 5.43h-.96a.73.73 0 0 0-.56 1.19l1.77 2.12.09.09c.3.26.76.21 1.02-.1l1.76-2.11c.1-.13.16-.3.16-.47Zm3.01.76v8.35c0 1.36 1.1 2.46 2.47 2.46h8.31c1.37 0 2.47-1.1 2.47-2.46V8.9c0-1.37-1.1-2.47-2.47-2.47h-8.31A2.47 2.47 0 0 0 9.36 8.9Zm2.47 8.86a.52.52 0 0 1-.52-.51V8.9c0-.3.23-.52.52-.52h8.31c.29 0 .52.23.52.52v8.35c0 .28-.23.51-.52.51h-8.31Z",
			clipRule: "evenodd"
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
	l.MediaEditorRotateLeftIcon = d;
}), 98);
