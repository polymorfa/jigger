__d("WAWebGestureIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "gesture";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M13.85 21c-.9 0-1.66-.3-2.28-.93a3.03 3.03 0 0 1-.92-2.22c0-1.27.51-2.41 1.54-3.44a6.83 6.83 0 0 1 3.83-1.91c-.04-.6-.2-1.05-.45-1.36a1.24 1.24 0 0 0-1.02-.46c-.5 0-1.04.2-1.63.62a12.3 12.3 0 0 0-2.07 2.05 22.69 22.69 0 0 1-2.86 3.03c-.61.46-1.27.7-1.96.7a2.8 2.8 0 0 1-2.16-.95 3.27 3.27 0 0 1-.87-2.3c0-.9.2-1.83.59-2.77.39-.94 1.05-2.07 1.99-3.39.31-.43.54-.8.7-1.1.14-.3.22-.54.22-.72 0-.12-.02-.2-.06-.26-.04-.06-.1-.09-.19-.09a.79.79 0 0 0-.3.08c-.12.04-.24.14-.38.27-.25.23-.53.36-.86.38-.32.01-.6-.1-.83-.33a1.38 1.38 0 0 1-.4-.94c0-.36.13-.65.4-.88.4-.35.8-.62 1.2-.8.4-.19.79-.28 1.17-.28A2.71 2.71 0 0 1 9 5.8a4.1 4.1 0 0 1-.38 1.6 11.8 11.8 0 0 1-1.24 2.1 15 15 0 0 0-1.42 2.38 4.6 4.6 0 0 0-.46 1.8c0 .28.05.5.14.66.09.16.22.23.39.23.16 0 .3-.04.43-.13.13-.1.36-.31.69-.66l.77-.87 1.1-1.26c1.05-1.25 2-2.14 2.86-2.68.84-.53 1.74-.8 2.67-.8 1.12 0 2.03.38 2.75 1.13a4.83 4.83 0 0 1 1.22 3.07h1.23c.35 0 .65.13.89.37s.36.54.36.88c0 .36-.12.65-.36.9a1.2 1.2 0 0 1-.89.36h-1.23a8.2 8.2 0 0 1-1.46 4.46A3.87 3.87 0 0 1 13.85 21Zm.05-2.5c.53 0 .98-.3 1.35-.91.37-.61.62-1.46.75-2.54-.77.18-1.43.55-2 1.09-.57.54-.85 1.08-.85 1.61 0 .23.07.42.2.55.13.13.32.2.55.2Z"
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
	l.GestureIcon = d;
}), 98);
