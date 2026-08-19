__d("WAWebWdsPictoPasskeyIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-passkey";
	function d(t) {
		var n = o("react-compiler-runtime").c(27), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, "0 0 88 88"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx("path", {
			fill: "#e6ffda",
			stroke: "#111b21",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: "M72.46 49.27A11.11 11.11 0 1 0 57.3 59.6v14l4.05 3.4 6.38-5.78-2.32-3.54v-2.14l2.32-2.8-2.32-3.04v-.11a11.1 11.1 0 0 0 7.05-10.34zm-11.11-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
		}), C = u.jsx("path", {
			fill: "#25d366",
			d: "M40.4 39.42a14.2 14.2 0 1 0 .02-28.4 14.2 14.2 0 0 0-.02 28.4m5.53 4.51q-.98 2.5-1 5.32c0 6.2 4.25 12 7.98 13.64v5.62h-32a5.3 5.3 0 0 1-5.3-5.16c-.17-5.86.01-7.29.08-7.77q.15-1.1.54-2.2c1.93-5.38 7.98-7.14 10.28-7.8l.02-.01a51 51 0 0 1 19.4-1.64"
		}), h = u.jsx("path", {
			stroke: "#111b21",
			strokeLinejoin: "round",
			strokeWidth: 1.5,
			d: "M40.4 39.42a14.2 14.2 0 1 0 .02-28.4 14.2 14.2 0 0 0-.02 28.4Zm5.53 4.51q-.98 2.5-1 5.32c0 6.2 4.25 12 7.98 13.64v5.62h-32a5.3 5.3 0 0 1-5.3-5.16c-.17-5.86.01-7.29.08-7.77q.15-1.1.54-2.2c1.93-5.38 7.98-7.14 10.28-7.8l.02-.01a51 51 0 0 1 19.4-1.64Z"
		}), n[12] = h, n[13] = y, n[14] = C) : (h = n[12], y = n[13], C = n[14]);
		var b;
		n[15] !== l || n[16] !== s || n[17] !== d || n[18] !== m || n[19] !== p || n[20] !== g ? (b = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				y,
				C,
				h
			]
		}), n[15] = l, n[16] = s, n[17] = d, n[18] = m, n[19] = p, n[20] = g, n[21] = b) : b = n[21];
		var v;
		return n[22] !== a || n[23] !== b || n[24] !== _ || n[25] !== f ? (v = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: b
		})), n[22] = a, n[23] = b, n[24] = _, n[25] = f, n[26] = v) : v = n[26], v;
	}
	l.WdsPictoPasskeyIcon = d;
}), 98);
