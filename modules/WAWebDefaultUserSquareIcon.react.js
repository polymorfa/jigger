__d("WAWebDefaultUserSquareIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-user-square";
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
			d: "M0 0h212v212H0V0z",
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
			d: "M106 125.5c2.6 0 5.2-.3 7.7-.7 1.2-.2 2.4-.5 3.6-.9 1.8-.5 3.5-1.2 5.1-2 2.2-1 4.2-2.3 6.1-3.7 2.9-2.1 5.4-4.6 7.5-7.5.7-1 1.4-1.9 2-3 .9-1.5 1.7-3.2 2.4-4.8.5-1.1.9-2.3 1.2-3.5.2-.6.3-1.2.5-1.8a40.46 40.46 0 0 0 1.1-9.5 40.46 40.46 0 0 0-1.1-9.5c-.1-.6-.3-1.2-.5-1.8-.4-1.2-.8-2.3-1.2-3.5-.7-1.7-1.5-3.3-2.4-4.8-.6-1-1.3-2-2-3-2.1-2.9-4.6-5.4-7.5-7.5-1.9-1.4-4-2.6-6.1-3.7-1.6-.8-3.3-1.4-5.1-2a38.7 38.7 0 0 0-11.3-1.6c-21.2 0-37.3 16.2-37.3 37.3 0 21.3 16.1 37.5 37.3 37.5zm69 48.4c-.4-.7-.9-1.5-1.4-2.3-.6-.9-1.3-1.9-2.1-3-.8-1-1.6-2.2-2.6-3.3s-2-2.3-3.2-3.5a80.9 80.9 0 0 0-5.9-5.5 75.69 75.69 0 0 0-16.2-10.1c-.1 0-.1-.1-.2-.1-9.8-4.4-22.1-7.5-37.4-7.5s-27.6 3.1-37.4 7.5c-.3.2-.7.3-1 .5-1.4.7-2.8 1.4-4.1 2.1l-2.1 1.2c-3.4 2-6.5 4.2-9.1 6.4a63.6 63.6 0 0 0-5.9 5.5c-1.2 1.2-2.2 2.4-3.2 3.5s-1.8 2.2-2.6 3.3c-.8 1-1.5 2-2.1 3-.6.8-1 1.6-1.4 2.3 0 .1-.1.1-.1.2v.1c-9.6 15-9.6 32.9-9.6 32.9H185s-.3-18.1-10-33.2z",
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
	l.DefaultUserSquareIcon = m;
}), 98);
