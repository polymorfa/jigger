__d("WAWebDefaultGroupRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-group-refreshed";
	function m(t) {
		var n, a = o("react-compiler-runtime").c(30), i, l, u, m, p, _, f, g, h, y;
		if (a[0] !== t) {
			var C = t.innerStyles, b = babelHelpers.objectWithoutPropertiesLoose(t, e);
			u = C, l = o("WAWebSvgIconHelpers").resolveSvgIcon(b, d, 212, 212, "0 0 48 48"), i = o("WAWebSvgComponentBase").BaseSvgSpan, h = l.otherProps, y = l.iconName, m = l.viewBox, p = l.height, _ = l.width, f = "xMidYMid meet", g = (s || (s = r("stylex")))(l.iconXstyle), a[0] = t, a[1] = i, a[2] = l, a[3] = u, a[4] = m, a[5] = p, a[6] = _, a[7] = f, a[8] = g, a[9] = h, a[10] = y;
		} else i = a[1], l = a[2], u = a[3], m = a[4], p = a[5], _ = a[6], f = a[7], g = a[8], h = a[9], y = a[10];
		var v;
		a[11] !== l.iconName ? (v = c.jsx("title", { children: l.iconName }), a[11] = l.iconName, a[12] = v) : v = a[12];
		var S;
		if (a[13] !== ((n = u) == null ? void 0 : n.primary)) {
			var R, L;
			S = (s || (s = r("stylex")))((R = u) == null ? void 0 : R.primary), a[13] = (L = u) == null ? void 0 : L.primary, a[14] = S;
		} else S = a[14];
		var E;
		a[15] !== S ? (E = c.jsx("path", {
			fill: "#606263",
			fillRule: "evenodd",
			d: "M17.82 21.68Q19.14 23 21 23t3.18-1.32 1.32-3.18-1.32-3.18Q22.86 14 21 14t-3.18 1.32-1.32 3.18 1.32 3.18m-5.16 10.66q.66.66 1.59.66h13.5q.93 0 1.59-.66t.66-1.59v-.9q0-.95-.5-1.76a3.3 3.3 0 0 0-1.3-1.22 16.7 16.7 0 0 0-3.54-1.3q-1.8-.44-3.66-.44t-3.66.43-3.54 1.3a3.3 3.3 0 0 0-1.3 1.23 3.3 3.3 0 0 0-.5 1.76v.9q0 .93.66 1.59m21.09.66h-2.4a4.16 4.16 0 0 0 .65-2.25v-.9c0-1-.26-1.95-.79-2.8a5.3 5.3 0 0 0-1.67-1.72q.56.1 1.12.23 1.8.44 3.54 1.3.81.43 1.3 1.23.5.8.5 1.76v.9q0 .93-.66 1.59t-1.6.66M27 23a4.6 4.6 0 0 1-1.18-.15c1.1-1.2 1.68-2.69 1.68-4.35s-.57-3.14-1.68-4.35A4.6 4.6 0 0 1 27 14q1.86 0 3.18 1.32t1.32 3.18-1.32 3.18T27 23",
			className: S,
			clipRule: "evenodd"
		}), a[15] = S, a[16] = E) : E = a[16];
		var k;
		a[17] !== m || a[18] !== p || a[19] !== _ || a[20] !== f || a[21] !== g || a[22] !== v || a[23] !== E ? (k = c.jsxs("svg", {
			viewBox: m,
			height: p,
			width: _,
			preserveAspectRatio: f,
			className: g,
			fill: "none",
			children: [v, E]
		}), a[17] = m, a[18] = p, a[19] = _, a[20] = f, a[21] = g, a[22] = v, a[23] = E, a[24] = k) : k = a[24];
		var I;
		return a[25] !== i || a[26] !== k || a[27] !== h || a[28] !== y ? (I = c.jsx(i, babelHelpers.extends({}, h, {
			name: y,
			children: k
		})), a[25] = i, a[26] = k, a[27] = h, a[28] = y, a[29] = I) : I = a[29], I;
	}
	l.DefaultGroupRefreshedIcon = m;
}), 98);
