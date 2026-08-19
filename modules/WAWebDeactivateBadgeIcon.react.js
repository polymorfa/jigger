__d("WAWebDeactivateBadgeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "deactivate-badge";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 42, 42, "0 0 42 42"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "#ea0038",
			stroke: "white",
			strokeWidth: 3,
			d: "M22.06 22.76 21 21.7l-1.06 1.06L15.7 27c-.2.2-.5.2-.7 0a.5.5 0 0 1 0-.7l4.24-4.24L20.3 21l-1.06-1.06-4.26-4.24a.5.5 0 0 1 0-.7c.2-.2.5-.2.7 0l4.26 4.24L21 20.3l1.06-1.06L26.3 15c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-4.24 4.24L21.7 21l1.06 1.06L27 26.3l.01.01c.2.2.2.52 0 .7-.18.2-.5.2-.69 0l-4.26-4.25ZM26.8 1.5H15.2c-1.46 0-2.86.58-3.9 1.62l-8.2 8.2a5.5 5.5 0 0 0-1.6 3.88v11.6c0 1.45.57 2.86 1.63 3.89l8.18 8.18a5.43 5.43 0 0 0 3.89 1.63h11.6c1.45 0 2.86-.57 3.89-1.63l8.18-8.18a5.43 5.43 0 0 0 1.63-3.89V15.2c0-1.45-.57-2.86-1.63-3.89L30.7 3.13a5.43 5.43 0 0 0-3.9-1.63Z"
		}), y = u.jsx("path", {
			fill: "white",
			d: "M28.08 28.08a2 2 0 0 1-2.82 0L21 23.82l-4.24 4.24a2 2 0 1 1-2.82-2.82L18.18 21l-4.26-4.24a2 2 0 1 1 2.82-2.82L21 18.18l4.24-4.24a2 2 0 1 1 2.82 2.82L23.82 21l4.24 4.24a2 2 0 0 1 .02 2.84Z"
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
	l.DeactivateBadgeIcon = d;
}), 98);
