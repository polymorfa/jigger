__d("WAWebSecurityDrawerLockIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "security-drawer-lock";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 84, 84, "0 0 84 84"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("circle", {
			cx: 42,
			cy: 42,
			r: 42,
			fill: "#07CD9E"
		}), y = u.jsx("path", {
			fill: "white",
			d: "M53.24 33.43c0-2.08-.5-3.99-1.52-5.73a11.1 11.1 0 0 0-4.1-4.15 10.69 10.69 0 0 0-5.6-1.55 11.34 11.34 0 0 0-11.25 11.43v4.38a5.66 5.66 0 0 0-2.94 2.66c-.3.56-.51 1.18-.64 1.86C27.06 43 27 44 27 45.35v8.53c0 1.34.06 2.34.19 3.02.13.68.34 1.3.64 1.86A5.9 5.9 0 0 0 32 61.81c.69.13 1.68.19 2.98.19h14.06c1.3 0 2.28-.06 2.95-.2a5.9 5.9 0 0 0 4.19-3.04c.3-.56.51-1.18.64-1.86.13-.68.19-1.68.19-3.02v-8.53c0-1.34-.06-2.35-.19-3.02a6.44 6.44 0 0 0-.64-1.86 5.67 5.67 0 0 0-2.93-2.66v-4.38Zm-17.98 0c0-1.24.3-2.38.9-3.43A6.73 6.73 0 0 1 42 26.57 6.73 6.73 0 0 1 47.84 30c.6 1.05.9 2.2.9 3.43v3.8H35.26v-3.8Z"
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
	l.SecurityDrawerLockIcon = d;
}), 98);
