__d("WAWebDotTwoLoopsIntersectedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "dot-two-loops-intersected";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
		}), y = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M4.22 4.22c1.6-1.6 4.64-1.37 7.78.33 3.13-1.7 6.17-1.94 7.78-.33 1.6 1.6 1.37 4.64-.33 7.78 1.7 3.14 1.94 6.17.33 7.78-1.6 1.6-4.65 1.37-7.78-.33-3.14 1.7-6.17 1.93-7.78.33-1.6-1.6-1.37-4.65.33-7.78-1.7-3.13-1.94-6.17-.33-7.78Zm14.36 4.72c.55-1.88.2-2.9-.22-3.3-.4-.42-1.42-.77-3.3-.22-.35.1-.7.23-1.08.39a19.73 19.73 0 0 1 4.2 4.2c.17-.36.3-.73.4-1.07ZM8.94 5.42c.34.1.7.23 1.08.39a19.72 19.72 0 0 0-4.21 4.2 9.89 9.89 0 0 1-.4-1.07c-.54-1.88-.19-2.9.23-3.3.4-.42 1.42-.77 3.3-.22Zm-3.52 9.64c.1-.35.23-.7.39-1.08a19.74 19.74 0 0 0 4.2 4.21 9.9 9.9 0 0 1-1.07.4c-1.88.54-2.9.18-3.3-.23-.42-.4-.77-1.42-.22-3.3Zm3.75-.23c.92.92 1.88 1.69 2.83 2.3A17.24 17.24 0 0 0 17.13 12 17.24 17.24 0 0 0 12 6.87 17.24 17.24 0 0 0 6.87 12c.61.95 1.38 1.9 2.3 2.83Zm5.9 3.75a9.9 9.9 0 0 1-1.09-.39 19.73 19.73 0 0 0 4.2-4.2c.17.36.3.73.4 1.07.55 1.88.2 2.9-.22 3.3-.4.42-1.42.77-3.3.22Z",
			clipRule: "evenodd"
		}), n[12] = h, n[13] = y) : (h = n[12], y = n[13]);
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				h,
				y
			]
		}), n[14] = l, n[15] = s, n[16] = d, n[17] = m, n[18] = p, n[19] = g, n[20] = C) : C = n[20];
		var b;
		return n[21] !== a || n[22] !== C || n[23] !== _ || n[24] !== f ? (b = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: C
		})), n[21] = a, n[22] = C, n[23] = _, n[24] = f, n[25] = b) : b = n[25], b;
	}
	l.DotTwoLoopsIntersectedIcon = d;
}), 98);
