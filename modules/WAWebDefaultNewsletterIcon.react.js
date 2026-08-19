__d("WAWebDefaultNewsletterIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-newsletter";
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
		i[15] !== R ? (k = c.jsx("rect", {
			width: 212,
			height: 212,
			fill: "currentColor",
			className: R,
			rx: 106
		}), i[15] = R, i[16] = k) : k = i[16];
		var I;
		if (i[17] !== ((a = m) == null ? void 0 : a.primary)) {
			var T, D;
			I = (s || (s = r("stylex")))((T = m) == null ? void 0 : T.primary), i[17] = (D = m) == null ? void 0 : D.primary, i[18] = I;
		} else I = i[18];
		var x;
		i[19] !== I ? (x = c.jsx("path", {
			fill: "#FFFFFF",
			d: "M157.12 99.03c-3.1-23.49-22.5-42.21-46.02-44.33-30.55-2.8-55.78 20.69-56.35 51.2-.2 10.97 3.97 20.39 6.09 24.42l-6.14 20.33a5.14 5.14 0 0 0 6.4 6.41l20.02-6a51.34 51.34 0 0 0 24.97 6.47c30.65 0 55.11-27 50.98-58.5h.05Zm-71.41 20.79a5.24 5.24 0 0 1-.52 6.62 5.18 5.18 0 0 1-8.05-.88 35.03 35.03 0 0 1 .47-39.88c1.8-2.53 5.57-2.69 7.8-.46a5.19 5.19 0 0 1 .5 6.67 24.46 24.46 0 0 0-4.38 14.07c0 5.22 1.6 9.88 4.28 13.8l-.1.06Zm20.64-6.1a7.74 7.74 0 0 1-7.74-7.76 7.74 7.74 0 1 1 15.48 0c0 4.3-3.46 7.76-7.74 7.76Zm28.12 12.62a5.1 5.1 0 0 1-7.74.46 5.19 5.19 0 0 1-.51-6.67 24.66 24.66 0 0 0-.1-28.35 5.33 5.33 0 0 1 .4-6.82 5.13 5.13 0 0 1 7.74.46 34.75 34.75 0 0 1 6.71 20.64c0 7.76-2.42 14.59-6.5 20.33v-.05Z",
			className: I
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
	l.DefaultNewsletterIcon = m;
}), 98);
