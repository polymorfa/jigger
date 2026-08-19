__d("WAWebWdsIllBellNotificationsIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ill-bell-notifications";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, "0 0 88 88"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("circle", {
			cx: 44,
			cy: 69.76,
			r: 10.81,
			fill: "#25D366",
			stroke: "#111B21",
			strokeWidth: 1.5
		}), y = u.jsx("path", {
			fill: "#25D366",
			stroke: "#111B21",
			strokeWidth: 1.5,
			d: "M16.57 69.44c-3.72 0-6.07-2.15-6.07-5.32 0-3.76 3.14-6.9 6.3-9.77 2.53-2.32 3.04-7.27 3.62-12.28.72-12.02 4.57-20.69 13.2-23.8 1.5-4.53 5.35-7.94 10.4-7.94 5 0 8.9 3.4 10.4 7.95 8.59 3.1 12.44 11.77 13.16 23.79.58 5.01 1.12 9.96 3.65 12.28 3.13 2.87 6.27 6.01 6.27 9.77 0 3.17-2.32 5.32-6.04 5.32h-54.9Z"
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
	l.WdsIllBellNotificationsIcon = d;
}), 98);
