__d("WAWebSearchTextIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "search-text";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M3 19a.97.97 0 0 1-.71-.29A.97.97 0 0 1 2 18c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h8c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 11 19H3Zm0-5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 2 13c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 6 14H3Zm0-5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 2 8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 6 9H3Zm11 7a4.82 4.82 0 0 1-3.54-1.46A4.82 4.82 0 0 1 9 11c0-1.38.49-2.56 1.46-3.54A4.82 4.82 0 0 1 14 6c1.38 0 2.56.49 3.54 1.46a5 5 0 0 1 .61 6.29l3.15 3.15c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27l-3.15-3.15A5 5 0 0 1 14 16Zm0-2c.83 0 1.54-.3 2.13-.88.58-.58.87-1.29.87-2.12 0-.83-.3-1.54-.88-2.13A2.9 2.9 0 0 0 14 8c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 11 11c0 .83.3 1.54.88 2.13.58.58 1.29.87 2.12.87Z"
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
	l.SearchTextIcon = d;
}), 98);
