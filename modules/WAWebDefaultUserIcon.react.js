__d("WAWebDefaultUserIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-user";
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
			d: "M106.25.5C164.65.5 212 47.85 212 106.25S164.65 212 106.25 212 .5 164.65.5 106.25 47.85.5 106.25.5z",
			className: R
		}), i[15] = R, i[16] = k) : k = i[16];
		var I;
		if (i[17] !== ((a = m) == null ? void 0 : a.primary)) {
			var T, D;
			I = (s || (s = r("stylex")))((T = m) == null ? void 0 : T.primary), i[17] = (D = m) == null ? void 0 : D.primary, i[18] = I;
		} else I = i[18];
		var x;
		i[19] !== I ? (x = c.jsx("path", {
			fill: "#FFFFFF",
			d: "M173.56 171.62a62.77 62.77 0 0 0-4.67-6.26 70.11 70.11 0 0 0-9.11-9 72.46 72.46 0 0 0-16.18-10.08l-.18-.08c-9.8-4.44-22.11-7.53-37.42-7.53s-27.62 3.09-37.42 7.53l-.98.47a75.37 75.37 0 0 0-6.23 3.3 72.59 72.59 0 0 0-15.07 11.86 70.06 70.06 0 0 0-7.86 9.78 63.2 63.2 0 0 0-1.45 2.33l-.1.17c-.44.75-.8 1.4-1.07 1.93-.56 1.07-.82 1.68-.82 1.68v.4a101.01 101.01 0 0 0 70.94 28.98c27.68 0 52.77-11.1 71.06-29.1v-.29s-.62-1.45-2-3.77c-.4-.7-.88-1.48-1.44-2.32zM106 125.5a39.87 39.87 0 0 0 11.3-1.63 37.12 37.12 0 0 0 11.28-5.63 35.92 35.92 0 0 0 11.9-15.32 37.05 37.05 0 0 0 2.45-8.95 40.28 40.28 0 0 0-1.22-17.12 37.05 37.05 0 0 0-5.63-11.27 35.92 35.92 0 0 0-13.65-11.18 37.12 37.12 0 0 0-8.75-2.85 39.87 39.87 0 0 0-7.68-.74c-21.16 0-37.34 16.19-37.34 37.35S84.84 125.5 106 125.5z",
			className: I
		}), i[19] = I, i[20] = x) : x = i[20];
		var $;
		i[21] !== p || i[22] !== _ || i[23] !== x || i[24] !== f || i[25] !== g || i[26] !== h || i[27] !== S || i[28] !== k ? ($ = c.jsxs("svg", {
			viewBox: p,
			height: _,
			width: f,
			preserveAspectRatio: g,
			className: h,
			version: "1.1",
			x: "0px",
			y: "0px",
			enableBackground: "new 0 0 212 212",
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
	l.DefaultUserIcon = m;
}), 98);
