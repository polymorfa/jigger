__d("WAWebDefaultCommunityRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-community-refreshed";
	function m(t) {
		var n, a, i = o("react-compiler-runtime").c(35), l, u, m, p, _, f, g, h, y, C;
		if (i[0] !== t) {
			var b = t.innerStyles, v = babelHelpers.objectWithoutPropertiesLoose(t, e);
			m = b, u = o("WAWebSvgIconHelpers").resolveSvgIcon(v, d, 212, 212, "0 0 48 48"), l = o("WAWebSvgComponentBase").BaseSvgSpan, y = u.otherProps, C = u.iconName, p = u.viewBox, _ = u.height, f = u.width, g = "xMidYMid meet", h = (s || (s = r("stylex")))(u.iconXstyle), i[0] = t, i[1] = l, i[2] = u, i[3] = m, i[4] = p, i[5] = _, i[6] = f, i[7] = g, i[8] = h, i[9] = y, i[10] = C;
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
			fill: "#606263",
			d: "M15.03 24.9a9.5 9.5 0 0 0-2.97.35c-.59.16-1.26.44-1.82.87a2.96 2.96 0 0 0-1.2 2.02C8.98 28.57 9 29.5 9 30c.02.93.78 2 1.69 2h3.76a5.83 5.83 0 0 1-.37-1.92c-.02-.55-.06-2.04.05-2.83.05-.4.15-.8.28-1.15a5.4 5.4 0 0 1 .6-1.2M33.95 32h3.76c.91 0 1.67-1.07 1.69-2 .01-.51.02-1.43-.02-1.86a2.97 2.97 0 0 0-1.2-2.02 5.44 5.44 0 0 0-1.83-.87 9.5 9.5 0 0 0-2.97-.35 5.17 5.17 0 0 1 .9 2.35c.1.8.06 2.28.04 2.83a5.83 5.83 0 0 1-.37 1.92",
			className: R
		}), i[15] = R, i[16] = k) : k = i[16];
		var I;
		if (i[17] !== ((a = m) == null ? void 0 : a.primary)) {
			var T, D;
			I = (s || (s = r("stylex")))((T = m) == null ? void 0 : T.primary), i[17] = (D = m) == null ? void 0 : D.primary, i[18] = I;
		} else I = i[18];
		var x;
		i[19] !== I ? (x = c.jsx("path", {
			fill: "#606263",
			fillRule: "evenodd",
			d: "M19.8 24.38a16 16 0 0 1 4.4-.61c1.82 0 3.34.3 4.4.61.54.16 1.2.39 1.78.75.6.36 1.19.9 1.48 1.73q.12.32.17.7c.08.56.05 1.82.03 2.46-.03.91-.78 1.98-1.68 1.98H18.02c-.9 0-1.65-1.07-1.68-1.98-.02-.64-.05-1.9.03-2.46q.05-.38.17-.7a3.4 3.4 0 0 1 1.48-1.73 7.28 7.28 0 0 1 1.78-.75m10.6-4.63a3.37 3.37 0 0 1 3.37-3.37 3.37 3.37 0 0 1 3.38 3.37 3.38 3.38 0 0 1-3.38 3.38 3.38 3.38 0 0 1-3.38-3.38m-10.7-2.24A4.51 4.51 0 0 1 24.2 13a4.51 4.51 0 0 1 4.5 4.51 4.5 4.5 0 0 1-4.5 4.5 4.5 4.5 0 0 1-4.5-4.5m-8.45 2.24a3.37 3.37 0 0 1 3.38-3.37 3.37 3.37 0 0 1 3.38 3.37 3.38 3.38 0 0 1-3.38 3.38 3.38 3.38 0 0 1-3.38-3.38",
			className: I,
			clipRule: "evenodd"
		}), i[19] = I, i[20] = x) : x = i[20];
		var $;
		i[21] !== p || i[22] !== _ || i[23] !== x || i[24] !== f || i[25] !== g || i[26] !== h || i[27] !== S || i[28] !== k ? ($ = c.jsxs("svg", {
			viewBox: p,
			height: _,
			width: f,
			preserveAspectRatio: g,
			className: h,
			fill: "none",
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
	l.DefaultCommunityRefreshedIcon = m;
}), 98);
