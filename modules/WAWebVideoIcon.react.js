__d("WAWebVideoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "video";
	function m(t) {
		var n, a, i = o("react-compiler-runtime").c(35), l, u, m, p, _, f, g, h, y, C;
		if (i[0] !== t) {
			var b = t.innerStyles, v = babelHelpers.objectWithoutPropertiesLoose(t, e);
			m = b, u = o("WAWebSvgIconHelpers").resolveSvgIcon(v, d, 28, 46, "0 0 46 28"), l = o("WAWebSvgComponentBase").BaseSvgSpan, y = u.otherProps, C = u.iconName, p = u.viewBox, _ = u.height, f = u.width, g = "xMidYMid meet", h = (s || (s = r("stylex")))(u.iconXstyle), i[0] = t, i[1] = l, i[2] = u, i[3] = m, i[4] = p, i[5] = _, i[6] = f, i[7] = g, i[8] = h, i[9] = y, i[10] = C;
		} else l = i[1], u = i[2], m = i[3], p = i[4], _ = i[5], f = i[6], g = i[7], h = i[8], y = i[9], C = i[10];
		var S;
		i[11] !== u.iconName ? (S = c.jsx("title", { children: u.iconName }), i[11] = u.iconName, i[12] = S) : S = i[12];
		var R;
		if (i[13] !== ((n = m) == null ? void 0 : n.primary)) {
			var L, E;
			R = (s || (s = r("stylex")))((L = m) == null ? void 0 : L.primary), i[13] = (E = m) == null ? void 0 : E.primary, i[14] = R;
		} else R = i[14];
		var k;
		i[15] !== R ? (k = c.jsx("path", {
			d: "M.63 3.06C0 4.26 0 5.82 0 8.96v10.08c0 3.14 0 4.7.63 5.9a5.7 5.7 0 0 0 2.54 2.45C4.4 28 6.03 28 9.28 28h14.3c3.26 0 4.88 0 6.12-.61a5.7 5.7 0 0 0 2.54-2.45c.63-1.2.63-2.76.63-5.9V8.96c0-3.14 0-4.7-.63-5.9A5.7 5.7 0 0 0 29.7.6C28.46 0 26.84 0 23.6 0H9.29C6.02 0 4.4 0 3.16.61A5.7 5.7 0 0 0 .63 3.06Z",
			className: R
		}), i[15] = R, i[16] = k) : k = i[16];
		var I;
		if (i[17] !== ((a = m) == null ? void 0 : a.secondary)) {
			var T, D;
			I = (s || (s = r("stylex")))((T = m) == null ? void 0 : T.secondary), i[17] = (D = m) == null ? void 0 : D.secondary, i[18] = I;
		} else I = i[18];
		var x;
		i[19] !== I ? (x = c.jsx("path", {
			d: "M36.7 8.42c-.4.35-.62.85-.62 1.37v8.42c0 .52.23 1.02.63 1.37l5.19 4.61c1.24 1.1 3.24.25 3.24-1.37V5.18c0-1.62-2-2.47-3.24-1.37l-5.2 4.61Z",
			className: I
		}), i[19] = I, i[20] = x) : x = i[20];
		var $;
		i[21] !== p || i[22] !== _ || i[23] !== x || i[24] !== f || i[25] !== g || i[26] !== h || i[27] !== S || i[28] !== k ? ($ = c.jsxs("svg", {
			viewBox: p,
			height: _,
			width: f,
			preserveAspectRatio: g,
			className: h,
			fill: "currentColor",
			children: [
				S,
				k,
				x
			]
		}), i[21] = p, i[22] = _, i[23] = x, i[24] = f, i[25] = g, i[26] = h, i[27] = S, i[28] = k, i[29] = $) : $ = i[29];
		var P;
		return i[30] !== l || i[31] !== $ || i[32] !== y || i[33] !== C ? (P = c.jsx(l, babelHelpers.extends({}, y, {
			name: C,
			children: $
		})), i[30] = l, i[31] = $, i[32] = y, i[33] = C, i[34] = P) : P = i[34], P;
	}
	l.VideoIcon = m;
}), 98);
