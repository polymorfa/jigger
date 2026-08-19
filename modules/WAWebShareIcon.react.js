__d("WAWebShareIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "share";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M16.5 20a2.4 2.4 0 0 1-1.77-.73 2.41 2.41 0 0 1-.65-2.37l-4.93-3.02c-.23.19-.48.34-.76.45a2.4 2.4 0 0 1-.89.17 2.4 2.4 0 0 1-1.77-.73A2.41 2.41 0 0 1 5 12c0-.7.24-1.28.73-1.77A2.41 2.41 0 0 1 7.5 9.5a2.39 2.39 0 0 1 1.65.63l4.93-3.03a2.24 2.24 0 0 1-.08-.6c0-.7.24-1.28.73-1.77A2.41 2.41 0 0 1 16.5 4c.7 0 1.28.24 1.77.73S19 5.8 19 6.5s-.24 1.28-.73 1.77S17.2 9 16.5 9a2.39 2.39 0 0 1-1.65-.63L9.92 11.4a2.23 2.23 0 0 1 0 1.2l4.93 3.03A2.58 2.58 0 0 1 16.5 15c.7 0 1.28.24 1.77.73S19 16.8 19 17.5s-.24 1.28-.73 1.77-1.07.73-1.77.73Zm0-1.5c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71a.97.97 0 0 0-.71-.29c-.28 0-.52.1-.71.29a.94.94 0 0 0-.29.71c0 .28.1.52.29.71.19.2.43.29.71.29Zm-9-5.5c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 7.5 11c-.28 0-.52.1-.71.29a.94.94 0 0 0-.29.71c0 .28.1.52.29.71.19.2.43.29.71.29Zm9-5.5c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71a.97.97 0 0 0-.71-.29c-.28 0-.52.1-.71.29a.94.94 0 0 0-.29.71c0 .28.1.52.29.71.19.2.43.29.71.29Z"
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
	l.ShareIcon = d;
}), 98);
