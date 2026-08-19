__d("WAWebMicIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "mic";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 12, "0 0 12 20"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M6 12a2.4 2.4 0 0 1-1.77-.73A2.41 2.41 0 0 1 3.5 9.5v-5c0-.7.24-1.28.73-1.77A2.41 2.41 0 0 1 6 2c.7 0 1.28.24 1.77.73S8.5 3.8 8.5 4.5v5c0 .7-.24 1.28-.73 1.77S6.7 12 6 12Zm-.75 5.25v-2.31a5.23 5.23 0 0 1-3.14-1.53 5.34 5.34 0 0 1-1.55-3.14.67.67 0 0 1 .69-.77c.2 0 .39.07.53.22.15.14.24.32.28.53.18.96.65 1.74 1.39 2.34.74.6 1.59.91 2.54.91.97 0 1.82-.3 2.56-.92a3.88 3.88 0 0 0 1.39-2.33c.04-.2.13-.39.27-.53a.71.71 0 0 1 .54-.22c.2 0 .38.08.52.23.14.15.2.33.17.54a5.34 5.34 0 0 1-1.55 3.14 5.23 5.23 0 0 1-3.14 1.53v2.31a.7.7 0 0 1-.21.53A.72.72 0 0 1 6 18a.73.73 0 0 1-.53-.22.72.72 0 0 1-.22-.53Z"
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.MicIcon = d;
}), 98);
