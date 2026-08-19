__d("WAWebPanelEmojiActivityRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "panel-emoji-activity-refreshed";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M4.05 11H6.9a5.84 5.84 0 0 0-1.65-3.25q-.45.72-.76 1.54A7.7 7.7 0 0 0 4.05 11m13.05 0h2.85q-.12-.9-.44-1.71a9 9 0 0 0-.76-1.54A5.84 5.84 0 0 0 17.1 11M5.25 16.25A5.84 5.84 0 0 0 6.9 13H4.05q.13.9.44 1.71.31.82.76 1.54m13.5 0q.45-.72.76-1.54a7.7 7.7 0 0 0 .44-1.71H17.1a5.84 5.84 0 0 0 1.65 3.25M8.95 11H11V4.05a8.8 8.8 0 0 0-2.46.74A7.5 7.5 0 0 0 6.5 6.2a8.6 8.6 0 0 1 1.61 2.16q.64 1.21.84 2.64M13 11h2.05q.2-1.43.84-2.64A8.6 8.6 0 0 1 17.5 6.2a7.5 7.5 0 0 0-2.04-1.41A8.8 8.8 0 0 0 13 4.05zm-2 8.95V13H8.95a8 8 0 0 1-.84 2.64A8.6 8.6 0 0 1 6.5 17.8q.9.88 2.04 1.41 1.13.54 2.46.74m2 0a8.8 8.8 0 0 0 2.46-.74 7.5 7.5 0 0 0 2.04-1.41 8.6 8.6 0 0 1-1.61-2.16 8 8 0 0 1-.84-2.64H13zM12 22a9.7 9.7 0 0 1-3.9-.79 10.1 10.1 0 0 1-3.17-2.14q-1.35-1.35-2.14-3.17A9.7 9.7 0 0 1 2 12q0-2.08.79-3.9a10.1 10.1 0 0 1 2.14-3.17Q6.28 3.57 8.1 2.78A9.7 9.7 0 0 1 12 2q2.08 0 3.9.79a10.1 10.1 0 0 1 3.17 2.14q1.35 1.35 2.14 3.17A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.79 3.9 10.1 10.1 0 0 1-2.14 3.17q-1.35 1.35-3.17 2.14A9.7 9.7 0 0 1 12 22"
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
	l.PanelEmojiActivityRefreshedIcon = d;
}), 98);
