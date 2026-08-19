__d("WAWebWdsPictoTimerFeedbackWarningIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "wds-picto-timer-feedback-warning";
	function m(t) {
		var n, a = o("react-compiler-runtime").c(33), i, l, u, m, p, _, f, g, h, y;
		if (a[0] !== t) {
			var C = t.innerStyles, b = babelHelpers.objectWithoutPropertiesLoose(t, e);
			u = C, l = o("WAWebSvgIconHelpers").resolveSvgIcon(b, d, 88, 176, null), i = o("WAWebSvgComponentBase").BaseSvgSpan, h = l.otherProps, y = l.iconName, m = l.viewBox, p = l.height, _ = l.width, f = "xMidYMid meet", g = (s || (s = r("stylex")))(l.iconXstyle), a[0] = t, a[1] = i, a[2] = l, a[3] = u, a[4] = m, a[5] = p, a[6] = _, a[7] = f, a[8] = g, a[9] = h, a[10] = y;
		} else i = a[1], l = a[2], u = a[3], m = a[4], p = a[5], _ = a[6], f = a[7], g = a[8], h = a[9], y = a[10];
		var v;
		a[11] !== l.iconName ? (v = c.jsx("title", { children: l.iconName }), a[11] = l.iconName, a[12] = v) : v = a[12];
		var S;
		if (a[13] !== ((n = u) == null ? void 0 : n.rectContainer)) {
			var R, L;
			S = (s || (s = r("stylex")))((R = u) == null ? void 0 : R.rectContainer), a[13] = (L = u) == null ? void 0 : L.rectContainer, a[14] = S;
		} else S = a[14];
		var E;
		a[15] !== S ? (E = c.jsx("rect", {
			width: 133.5,
			height: 58.5,
			x: 21.3,
			y: 14.8,
			fill: "#F7F5F3",
			stroke: "#111B21",
			strokeWidth: 1.5,
			className: S,
			rx: 15.3
		}), a[15] = S, a[16] = E) : E = a[16];
		var k, I, T;
		a[17] === Symbol.for("react.memo_cache_sentinel") ? (k = c.jsx("path", {
			fill: "#FFB938",
			stroke: "#111B21",
			strokeMiterlimit: 10,
			strokeWidth: 1.5,
			d: "M150.4 84.9a15 15 0 1 1 0-30 15 15 0 0 1 0 30Z"
		}), I = c.jsx("path", {
			fill: "#fff",
			d: "M150 60.4h.9c1.2 0 2.1 1 2.1 2.2v6.6c0 1.2-1 2.1-2.2 2.1h-.9c-1.2 0-2.1-1-2.1-2.1v-6.6c0-1.2 1-2.2 2.1-2.2Zm0 14.2h.9c1.2 0 2.1 1 2.1 2.2v.4c0 1.2-1 2.2-2.2 2.2h-.9c-1.2 0-2.1-1-2.1-2.2v-.4c0-1.2 1-2.2 2.1-2.2Z"
		}), T = c.jsx("path", {
			stroke: "#111B21",
			strokeLinejoin: "round",
			strokeMiterlimit: 10,
			strokeWidth: 1.5,
			d: "M150 60.4h.9c1.2 0 2.1 1 2.1 2.2v6.6c0 1.2-1 2.1-2.2 2.1h-.9c-1.2 0-2.1-1-2.1-2.1v-6.6c0-1.2 1-2.2 2.1-2.2Zm0 14.2h.9c1.2 0 2.1 1 2.1 2.2v.4c0 1.2-1 2.2-2.2 2.2h-.9c-1.2 0-2.1-1-2.1-2.2v-.4c0-1.2 1-2.2 2.1-2.2Z"
		}), a[17] = k, a[18] = I, a[19] = T) : (k = a[17], I = a[18], T = a[19]);
		var D;
		a[20] !== m || a[21] !== p || a[22] !== _ || a[23] !== f || a[24] !== g || a[25] !== v || a[26] !== E ? (D = c.jsxs("svg", {
			viewBox: m,
			height: p,
			width: _,
			preserveAspectRatio: f,
			className: g,
			fill: "none",
			children: [
				v,
				E,
				k,
				I,
				T
			]
		}), a[20] = m, a[21] = p, a[22] = _, a[23] = f, a[24] = g, a[25] = v, a[26] = E, a[27] = D) : D = a[27];
		var x;
		return a[28] !== i || a[29] !== D || a[30] !== h || a[31] !== y ? (x = c.jsx(i, babelHelpers.extends({}, h, {
			name: y,
			children: D
		})), a[28] = i, a[29] = D, a[30] = h, a[31] = y, a[32] = x) : x = a[32], x;
	}
	l.WdsPictoTimerFeedbackWarningIcon = m;
}), 98);
