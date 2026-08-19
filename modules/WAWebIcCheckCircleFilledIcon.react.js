__d("WAWebIcCheckCircleFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "ic-check-circle-filled";
	function m(t) {
		var n, a = o("react-compiler-runtime").c(30), i, l, u, m, p, _, f, g, h, y;
		if (a[0] !== t) {
			var C = t.innerStyles, b = babelHelpers.objectWithoutPropertiesLoose(t, e);
			u = C, l = o("WAWebSvgIconHelpers").resolveSvgIcon(b, d, 12, 12, null), i = o("WAWebSvgComponentBase").BaseSvgSpan, h = l.otherProps, y = l.iconName, m = l.viewBox, p = l.height, _ = l.width, f = "xMidYMid meet", g = (s || (s = r("stylex")))(l.iconXstyle), a[0] = t, a[1] = i, a[2] = l, a[3] = u, a[4] = m, a[5] = p, a[6] = _, a[7] = f, a[8] = g, a[9] = h, a[10] = y;
		} else i = a[1], l = a[2], u = a[3], m = a[4], p = a[5], _ = a[6], f = a[7], g = a[8], h = a[9], y = a[10];
		var v;
		a[11] !== l.iconName ? (v = c.jsx("title", { children: l.iconName }), a[11] = l.iconName, a[12] = v) : v = a[12];
		var S;
		if (a[13] !== ((n = u) == null ? void 0 : n.background)) {
			var R, L;
			S = (s || (s = r("stylex")))((R = u) == null ? void 0 : R.background), a[13] = (L = u) == null ? void 0 : L.background, a[14] = S;
		} else S = a[14];
		var E;
		a[15] !== S ? (E = c.jsx("path", {
			fill: "#0A1014",
			d: "M5.3 6.9 4.22 5.82a.47.47 0 0 0-.34-.13.47.47 0 0 0-.35.13c-.1.1-.14.21-.14.35 0 .15.04.26.13.36l1.43 1.42a.48.48 0 0 0 .7 0l2.82-2.83c.1-.09.14-.2.14-.34a.47.47 0 0 0-.13-.36.47.47 0 0 0-.36-.13.47.47 0 0 0-.34.13zM6 11a4.87 4.87 0 0 1-3.54-1.46A5.05 5.05 0 0 1 1.4 4.05 5.05 5.05 0 0 1 6 1a4.87 4.87 0 0 1 3.54 1.46 5.05 5.05 0 0 1 1.07 5.49A5.05 5.05 0 0 1 6 11",
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
	l.IcCheckCircleFilledIcon = m;
}), 98);
