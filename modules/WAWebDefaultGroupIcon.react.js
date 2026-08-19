__d("WAWebDefaultGroupIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-group";
	function m(t) {
		var n, a, i = o("react-compiler-runtime").c(35), l, u, m, p, _, f, g, h, y, C;
		if (i[0] !== t) {
			var b = t.innerStyles, v = babelHelpers.objectWithoutPropertiesLoose(t, e);
			m = b, u = o("WAWebSvgIconHelpers").resolveSvgIcon(v, d, 212, 212, "0 0 212 212"), l = o("WAWebSvgComponentBase").BaseSvgSpan, y = u.otherProps, C = u.iconName, p = u.viewBox, _ = u.height, f = u.width, g = "xMidYMid meet", h = (s || (s = r("stylex")))(u.iconXstyle), i[0] = t, i[1] = l, i[2] = u, i[3] = m, i[4] = p, i[5] = _, i[6] = f, i[7] = g, i[8] = h, i[9] = y, i[10] = C;
		} else l = i[1], u = i[2], m = i[3], p = i[4], _ = i[5], f = i[6], g = i[7], h = i[8], y = i[9], C = i[10];
		var S;
		i[11] !== u.iconName ? (S = c.jsx("title", { children: u.iconName }), i[11] = u.iconName, i[12] = S) : S = i[12];
		var R;
		if (i[13] !== ((n = m) == null ? void 0 : n.background)) {
			var L, E;
			R = (s || (s = r("stylex")))((L = m) == null ? void 0 : L.background), i[13] = (E = m) == null ? void 0 : E.background, i[14] = R;
		} else R = i[14];
		var k;
		i[15] !== R ? (k = c.jsx("path", {
			fill: "#DFE5E7",
			d: "M105.95.25C164.32.25 211.64 47.6 211.64 106s-47.32 105.75-105.7 105.75C47.57 211.75.25 164.4.25 106S47.57.25 105.95.25Z",
			className: R
		}), i[15] = R, i[16] = k) : k = i[16];
		var I;
		if (i[17] !== ((a = m) == null ? void 0 : a.primary)) {
			var T, D;
			I = (s || (s = r("stylex")))((T = m) == null ? void 0 : T.primary), i[17] = (D = m) == null ? void 0 : D.primary, i[18] = I;
		} else I = i[18];
		var x;
		i[19] !== I ? (x = c.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M102.28 77.29c0 10.67-8.42 19.28-18.94 19.28-10.51 0-19-8.61-19-19.28 0-10.68 8.49-19.29 19-19.29 10.52 0 18.94 8.61 18.94 19.29Zm48.07 2.85c0 9.8-7.74 17.72-17.4 17.72a17.56 17.56 0 0 1-17.45-17.72c0-9.8 7.8-17.71 17.45-17.71 9.66 0 17.4 7.91 17.4 17.71Zm-67.01 29.29c-14.76 0-44.34 7.52-44.34 22.5v11.78c0 3.54 2.85 4.29 6.33 4.29h76.02c3.48 0 6.33-.75 6.33-4.29v-11.78c0-14.98-29.58-22.5-44.34-22.5Zm43.46 1.42 2.2.04c14.76 0 45 6.06 45 21.04v9.64a6.4 6.4 0 0 1-6.33 6.43h-32.82c.7-2 1.15-4.18 1.15-6.43l-.25-10.5c0-9.56-5.61-13.21-11.59-17.1a84.1 84.1 0 0 1-4.22-2.9.6.6 0 0 0-.2-.18c1.6-.14 4.75-.08 7.06-.04Z",
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
	l.DefaultGroupIcon = m;
}), 98);
