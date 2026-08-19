__d("WAWebStatusLikeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "status-like";
	function m(t) {
		var n, a = o("react-compiler-runtime").c(31), i, l, u, m, p, _, f, g, h, y;
		if (a[0] !== t) {
			var C = t.innerStyles, b = babelHelpers.objectWithoutPropertiesLoose(t, e);
			u = C, l = o("WAWebSvgIconHelpers").resolveSvgIcon(b, d, 17, 18, "0 0 18 17"), i = o("WAWebSvgComponentBase").BaseSvgSpan, h = l.otherProps, y = l.iconName, m = l.viewBox, p = l.height, _ = l.width, f = "xMidYMid meet", g = (s || (s = r("stylex")))(l.iconXstyle), a[0] = t, a[1] = i, a[2] = l, a[3] = u, a[4] = m, a[5] = p, a[6] = _, a[7] = f, a[8] = g, a[9] = h, a[10] = y;
		} else i = a[1], l = a[2], u = a[3], m = a[4], p = a[5], _ = a[6], f = a[7], g = a[8], h = a[9], y = a[10];
		var v;
		a[11] !== l.iconName ? (v = c.jsx("title", { children: l.iconName }), a[11] = l.iconName, a[12] = v) : v = a[12];
		var S;
		a[13] === Symbol.for("react.memo_cache_sentinel") ? (S = c.jsx("path", {
			fill: "#25D366",
			d: "M8.46 3.13A3.76 3.76 0 0 0 3.1 3.1a3.86 3.86 0 0 0 .02 5.42l5.49 5.55c.23.23.6.23.82 0l5.47-5.52a3.86 3.86 0 0 0-.02-5.41 3.77 3.77 0 0 0-5.36-.02l-.53.53-.53-.53Z"
		}), a[13] = S) : S = a[13];
		var R;
		if (a[14] !== ((n = u) == null ? void 0 : n.border)) {
			var L, E;
			R = (s || (s = r("stylex")))((L = u) == null ? void 0 : L.border), a[14] = (E = u) == null ? void 0 : E.border, a[15] = R;
		} else R = a[15];
		var k;
		a[16] !== R ? (k = c.jsx("path", {
			d: "m16.32 9.97-5.46 5.51a2.58 2.58 0 0 1-3.67 0l-5.5-5.54a5.86 5.86 0 0 1 0-8.23 5.76 5.76 0 0 1 7.3-.73 5.77 5.77 0 0 1 7.31.76 5.86 5.86 0 0 1 .02 8.23Zm-6.6-7.03c-.06.06-.14.12-.2.2l-.53.52-.53-.53a3.76 3.76 0 0 0-5.36-.01 3.86 3.86 0 0 0 .02 5.41l5.49 5.55c.23.23.6.23.82 0l5.47-5.52a3.86 3.86 0 0 0-.02-5.41 3.77 3.77 0 0 0-5.15-.21Z",
			className: R,
			clipRule: "evenodd"
		}), a[16] = R, a[17] = k) : k = a[17];
		var I;
		a[18] !== m || a[19] !== p || a[20] !== k || a[21] !== _ || a[22] !== f || a[23] !== g || a[24] !== v ? (I = c.jsxs("svg", {
			viewBox: m,
			height: p,
			width: _,
			preserveAspectRatio: f,
			className: g,
			fill: "none",
			children: [
				v,
				S,
				k
			]
		}), a[18] = m, a[19] = p, a[20] = k, a[21] = _, a[22] = f, a[23] = g, a[24] = v, a[25] = I) : I = a[25];
		var T;
		return a[26] !== i || a[27] !== I || a[28] !== h || a[29] !== y ? (T = c.jsx(i, babelHelpers.extends({}, h, {
			name: y,
			children: I
		})), a[26] = i, a[27] = I, a[28] = h, a[29] = y, a[30] = T) : T = a[30], T;
	}
	l.StatusLikeIcon = m;
}), 98);
