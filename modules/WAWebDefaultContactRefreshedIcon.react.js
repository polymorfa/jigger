__d("WAWebDefaultContactRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-contact-refreshed";
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
			d: "M24 23q-1.86 0-3.18-1.32T19.5 18.5t1.32-3.18T24 14t3.18 1.32q1.32 1.32 1.32 3.18t-1.32 3.18T24 23m-6.75 10q-.93 0-1.59-.66T15 30.75v-.9q0-.96.5-1.76a3.3 3.3 0 0 1 1.3-1.22 16.7 16.7 0 0 1 3.54-1.3q1.8-.44 3.66-.44t3.66.43 3.54 1.31q.82.42 1.3 1.22t.5 1.76v.9q0 .93-.66 1.59t-1.59.66z",
			className: S
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
	l.DefaultContactRefreshedIcon = m;
}), 98);
