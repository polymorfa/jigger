__d("WAWebAudioStatusIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "audio-status";
	function m(t) {
		var n, a, i = o("react-compiler-runtime").c(31), l, u, m, p, _, f, g, h, y, C;
		if (i[0] !== t) {
			var b = t.innerStyles, v = babelHelpers.objectWithoutPropertiesLoose(t, e);
			m = b, u = o("WAWebSvgIconHelpers").resolveSvgIcon(v, d, 19, 19, "0 0 19 19"), l = o("WAWebSvgComponentBase").BaseSvgSpan, y = u.otherProps, C = u.iconName, p = u.viewBox, _ = u.height, f = u.width, g = "xMidYMid meet", h = (s || (s = r("stylex")))(u.iconXstyle), i[0] = t, i[1] = l, i[2] = u, i[3] = m, i[4] = p, i[5] = _, i[6] = f, i[7] = g, i[8] = h, i[9] = y, i[10] = C;
		} else l = i[1], u = i[2], m = i[3], p = i[4], _ = i[5], f = i[6], g = i[7], h = i[8], y = i[9], C = i[10];
		var S;
		i[11] !== u.iconName ? (S = c.jsx("title", { children: u.iconName }), i[11] = u.iconName, i[12] = S) : S = i[12];
		var R = (s || (s = r("stylex")))((n = m) == null ? void 0 : n.background) + " ptt-status-background", L;
		i[13] !== R ? (L = c.jsx("path", {
			fill: "#FFFFFF",
			d: "M8.48.46C4.03.76.76 4.63.76 8.96v5.03a3.75 3.75 0 0 0 3.76 3.76h.75c1.65 0 3-1.35 3-3.01v-.01c.5.14 1.02.14 1.52 0v.01a3 3 0 0 0 3 3h.76A3.75 3.75 0 0 0 17.3 14V8.72c0-4.75-4-8.57-8.82-8.26Z",
			className: R
		}), i[13] = R, i[14] = L) : L = i[14];
		var E = s((a = m) == null ? void 0 : a.primary) + " ptt-status-icon", k;
		i[15] !== E ? (k = c.jsx("path", {
			fill: "currentColor",
			d: "M8.7 1.9c-3.58.23-6.3 3.38-6.3 6.99v5.03c0 1.25 1 2.26 2.25 2.26h.76c.82 0 1.5-.68 1.5-1.5v-3.01c0-.83-.68-1.5-1.5-1.5H3.89v-1.3A5.4 5.4 0 0 1 9 3.39a5.27 5.27 0 0 1 5.43 5.27v1.5h-1.5a1.5 1.5 0 0 0-1.51 1.5v3.02c0 .82.67 1.5 1.5 1.5h.75c1.25 0 2.26-1 2.26-2.26V8.66c0-3.9-3.28-7.02-7.22-6.76Z",
			className: E
		}), i[15] = E, i[16] = k) : k = i[16];
		var I;
		i[17] !== p || i[18] !== _ || i[19] !== k || i[20] !== f || i[21] !== g || i[22] !== h || i[23] !== S || i[24] !== L ? (I = c.jsxs("svg", {
			viewBox: p,
			height: _,
			width: f,
			preserveAspectRatio: g,
			className: h,
			fill: "none",
			children: [
				S,
				L,
				k
			]
		}), i[17] = p, i[18] = _, i[19] = k, i[20] = f, i[21] = g, i[22] = h, i[23] = S, i[24] = L, i[25] = I) : I = i[25];
		var T;
		return i[26] !== l || i[27] !== I || i[28] !== y || i[29] !== C ? (T = c.jsx(l, babelHelpers.extends({}, y, {
			name: C,
			children: I
		})), i[26] = l, i[27] = I, i[28] = y, i[29] = C, i[30] = T) : T = i[30], T;
	}
	l.AudioStatusIcon = m;
}), 98);
