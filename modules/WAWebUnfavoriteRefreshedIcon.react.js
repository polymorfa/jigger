__d("WAWebUnfavoriteRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "unfavorite-refreshed";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M1.06 3.06a1 1 0 0 0 0 1.42l1.61 1.6A5.5 5.5 0 0 0 2 8.82c0 1.92.71 3.67 2.14 5.26 1.42 1.6 3.02 3.2 4.78 4.81l1.73 1.58c.18.18.4.32.64.4a2.18 2.18 0 0 0 1.42 0c.24-.08.46-.22.64-.4l1.7-1.55.24-.22 2.67 2.67a1 1 0 0 0 1.41-1.4L2.47 3.06a1 1 0 0 0-1.4 0ZM13.88 17.3 4.19 7.6c-.13.38-.19.78-.19 1.22 0 .87.3 1.79.92 2.76a19.2 19.2 0 0 0 2.22 2.84c.86.92 1.74 1.77 2.65 2.57L12 18.97l1.88-1.68Zm2.98-2.87-.14.15 1.41 1.4a53.3 53.3 0 0 0 1.74-1.88A7.79 7.79 0 0 0 22 8.82c0-1.57-.53-2.88-1.58-3.93a5.33 5.33 0 0 0-3.92-1.57 5.96 5.96 0 0 0-4.5 2.1 5.96 5.96 0 0 0-6.27-1.84l1.75 1.74h.02c.78 0 1.45.18 2 .54.55.36 1.07.88 1.55 1.56a1.14 1.14 0 0 0 .95.5 1.16 1.16 0 0 0 .95-.5c.48-.68 1-1.2 1.55-1.56a3.58 3.58 0 0 1 2-.54 3.4 3.4 0 0 1 3.5 3.5c0 .87-.3 1.79-.93 2.76-.61.98-1.35 1.92-2.2 2.84Z",
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
	l.UnfavoriteRefreshedIcon = d;
}), 98);
