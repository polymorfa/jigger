__d("WAWebWaSquareIconIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "wa-square-icon";
	function m(t) {
		var n, a, i = o("react-compiler-runtime").c(35), l, u, m, p, _, f, g, h, y, C;
		if (i[0] !== t) {
			var b = t.innerStyles, v = babelHelpers.objectWithoutPropertiesLoose(t, e);
			m = b, u = o("WAWebSvgIconHelpers").resolveSvgIcon(v, d, 40, 40, "0 0 40 40"), l = o("WAWebSvgComponentBase").BaseSvgSpan, y = u.otherProps, C = u.iconName, p = u.viewBox, _ = u.height, f = u.width, g = "xMidYMid meet", h = (s || (s = r("stylex")))(u.iconXstyle), i[0] = t, i[1] = l, i[2] = u, i[3] = m, i[4] = p, i[5] = _, i[6] = f, i[7] = g, i[8] = h, i[9] = y, i[10] = C;
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
			width: 40,
			height: 40,
			fill: "#25D366",
			className: R,
			rx: 2
		}), i[15] = R, i[16] = k) : k = i[16];
		var I;
		if (i[17] !== ((a = m) == null ? void 0 : a.primary)) {
			var T, D;
			I = (s || (s = r("stylex")))((T = m) == null ? void 0 : T.primary), i[17] = (D = m) == null ? void 0 : D.primary, i[18] = I;
		} else I = i[18];
		var x;
		i[19] !== I ? (x = c.jsx("path", {
			fill: "white",
			fillRule: "evenodd",
			d: "M7.16 19.89a12.88 12.88 0 0 1 22-9.07 12.72 12.72 0 0 1 3.78 9.08 12.88 12.88 0 0 1-18.9 11.34l-6.46 1.69a.42.42 0 0 1-.5-.52l1.72-6.26a12.76 12.76 0 0 1-1.64-6.26Zm12.89 10.55c-1.89 0-3.73-.5-5.34-1.46l-.39-.22-3.96 1.03 1.06-3.85-.25-.4A10.37 10.37 0 0 1 9.57 20a10.47 10.47 0 0 1 17.9-7.38A10.34 10.34 0 0 1 30.52 20c0 5.76-4.7 10.44-10.48 10.44Zm3.53-8.94a52.15 52.15 0 0 1 2.31 1.1c.22.12.37.19.43.3.08.13.08.76-.18 1.5-.26.73-1.51 1.4-2.12 1.5-.54.08-1.22.11-1.97-.13a17.9 17.9 0 0 1-1.79-.66c-2.93-1.28-4.92-4.15-5.3-4.7l-.05-.07c-.17-.23-1.28-1.72-1.28-3.27 0-1.45.71-2.21 1.04-2.57l.06-.06c.29-.32.63-.4.83-.4a12.4 12.4 0 0 1 .68.01c.18 0 .4 0 .63.55l.35.84c.27.66.56 1.4.62 1.5.07.16.13.34.02.55l-.04.1a1.8 1.8 0 0 1-.27.43 12.6 12.6 0 0 0-.47.55c-.16.16-.32.33-.14.65a9.5 9.5 0 0 0 1.74 2.19 8.08 8.08 0 0 0 2.52 1.56c.32.16.5.13.68-.08.19-.2.79-.92 1-1.23.2-.32.41-.27.7-.16Z",
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
	l.WaSquareIconIcon = m;
}), 98);
