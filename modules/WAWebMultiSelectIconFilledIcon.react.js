__d("WAWebMultiSelectIconFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "multi-select-icon-filled";
	function m(t) {
		var n, a, i = o("react-compiler-runtime").c(35), l, u, m, p, _, f, g, h, y, C;
		if (i[0] !== t) {
			var b = t.innerStyles, v = babelHelpers.objectWithoutPropertiesLoose(t, e);
			m = b, u = o("WAWebSvgIconHelpers").resolveSvgIcon(v, d, 12, 19, null), l = o("WAWebSvgComponentBase").BaseSvgSpan, y = u.otherProps, C = u.iconName, p = u.viewBox, _ = u.height, f = u.width, g = "xMidYMid meet", h = (s || (s = r("stylex")))(u.iconXstyle), i[0] = t, i[1] = l, i[2] = u, i[3] = m, i[4] = p, i[5] = _, i[6] = f, i[7] = g, i[8] = h, i[9] = y, i[10] = C;
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
			fill: "#0A1014",
			d: "m12.3 6.9-1.08-1.07a.47.47 0 0 0-.35-.14.47.47 0 0 0-.34.14c-.1.09-.14.2-.14.35 0 .14.04.25.13.35l1.43 1.42a.48.48 0 0 0 .7 0l2.82-2.82c.1-.1.14-.21.14-.35a.47.47 0 0 0-.13-.35.47.47 0 0 0-.36-.14.47.47 0 0 0-.34.14zM13 11a4.87 4.87 0 0 1-3.54-1.46A5.05 5.05 0 0 1 8.4 4.05 5.05 5.05 0 0 1 13 1a4.87 4.87 0 0 1 3.54 1.46 5.05 5.05 0 0 1 1.07 5.49A5.05 5.05 0 0 1 13 11",
			className: R
		}), i[15] = R, i[16] = k) : k = i[16];
		var I;
		if (i[17] !== ((a = m) == null ? void 0 : a.background)) {
			var T, D;
			I = (s || (s = r("stylex")))((T = m) == null ? void 0 : T.background), i[17] = (D = m) == null ? void 0 : D.background, i[18] = I;
		} else I = i[18];
		var x;
		i[19] !== I ? (x = c.jsx("path", {
			fill: "#0A1014",
			d: "M8.72 10.2A4.87 4.87 0 0 1 6 11a4.87 4.87 0 0 1-3.54-1.46A5.05 5.05 0 0 1 1.4 4.05 5.05 5.05 0 0 1 6 1a4.87 4.87 0 0 1 2.71.8 5.98 5.98 0 0 0-1.65 3.34L5.3 6.9 4.22 5.83a.47.47 0 0 0-.34-.14.47.47 0 0 0-.35.14c-.1.09-.14.2-.14.35 0 .14.04.25.13.35l1.43 1.42a.48.48 0 0 0 .7 0l1.38-1.38a5.93 5.93 0 0 0 1.69 3.63",
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
	l.MultiSelectIconFilledIcon = m;
}), 98);
