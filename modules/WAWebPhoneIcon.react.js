__d("WAWebPhoneIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "phone";
	function m(t) {
		var n, a = o("react-compiler-runtime").c(30), i, l, u, m, p, _, f, g, h, y;
		if (a[0] !== t) {
			var C = t.innerStyles, b = babelHelpers.objectWithoutPropertiesLoose(t, e);
			u = C, l = o("WAWebSvgIconHelpers").resolveSvgIcon(b, d, 24, 24, "0 0 24 24"), i = o("WAWebSvgComponentBase").BaseSvgSpan, h = l.otherProps, y = l.iconName, m = l.viewBox, p = l.height, _ = l.width, f = "xMidYMid meet", g = (s || (s = r("stylex")))(l.iconXstyle), a[0] = t, a[1] = i, a[2] = l, a[3] = u, a[4] = m, a[5] = p, a[6] = _, a[7] = f, a[8] = g, a[9] = h, a[10] = y;
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
			d: "m19.23 15.26-2.54-.29a2 2 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85a2 2 0 0 0 .57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07a17 17 0 0 0 15.89 15.89 1.98 1.98 0 0 0 2.07-2v-1.73a1.98 1.98 0 0 0-1.76-1.98z",
			className: S
		}), a[15] = S, a[16] = E) : E = a[16];
		var k;
		a[17] !== m || a[18] !== p || a[19] !== _ || a[20] !== f || a[21] !== g || a[22] !== v || a[23] !== E ? (k = c.jsxs("svg", {
			viewBox: m,
			height: p,
			width: _,
			preserveAspectRatio: f,
			className: g,
			fill: "currentColor",
			children: [v, E]
		}), a[17] = m, a[18] = p, a[19] = _, a[20] = f, a[21] = g, a[22] = v, a[23] = E, a[24] = k) : k = a[24];
		var I;
		return a[25] !== i || a[26] !== k || a[27] !== h || a[28] !== y ? (I = c.jsx(i, babelHelpers.extends({}, h, {
			name: y,
			children: k
		})), a[25] = i, a[26] = k, a[27] = h, a[28] = y, a[29] = I) : I = a[29], I;
	}
	l.PhoneIcon = m;
}), 98);
