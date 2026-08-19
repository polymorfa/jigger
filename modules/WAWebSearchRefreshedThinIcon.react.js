__d("WAWebSearchRefreshedThinIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "search-refreshed-thin";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 20, "0 0 20 20"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M4.37 4.37c1-1 2.2-1.5 3.63-1.5 1.42 0 2.64.5 3.63 1.5 1 1 1.5 2.2 1.5 3.63a4.9 4.9 0 0 1-.94 2.94l4.38 4.38c.18.18.27.38.27.62 0 .23-.1.44-.27.61a.86.86 0 0 1-1.25 0l-4.38-4.36a4.91 4.91 0 0 1-2.94.94c-1.42 0-2.64-.5-3.63-1.5-1-1-1.5-2.2-1.5-3.63 0-1.42.5-2.64 1.5-3.63ZM8 4.63c-.94 0-1.73.33-2.39.98A3.25 3.25 0 0 0 4.63 8c0 .94.33 1.73.98 2.39.66.65 1.45.98 2.39.98.94 0 1.73-.33 2.39-.98.65-.66.98-1.45.98-2.39 0-.94-.33-1.73-.98-2.39A3.25 3.25 0 0 0 8 4.63Z",
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
	l.SearchRefreshedThinIcon = d;
}), 98);
