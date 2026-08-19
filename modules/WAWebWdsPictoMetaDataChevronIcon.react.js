__d("WAWebWdsPictoMetaDataChevronIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-meta-data-chevron";
	function d(t) {
		var n = o("react-compiler-runtime").c(28), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, "0 0 88 88"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C, b;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx("path", {
			fill: "#25D366",
			d: "m46.93 43.98-8.66 8.68a3.4 3.4 0 0 0 0 4.75 3.34 3.34 0 0 0 4.72 0l11.04-11.05a3.34 3.34 0 0 0 0-4.72L43 30.6a3.34 3.34 0 1 0-4.72 4.73l8.65 8.64Z"
		}), b = u.jsx("path", {
			fill: "#25D366",
			fillRule: "evenodd",
			d: "M44 10.5a33.51 33.51 0 0 1 0 67 33.51 33.51 0 0 1 0-67Zm0 6.7a26.8 26.8 0 1 0 0 53.6 26.8 26.8 0 1 0 0-53.6Z",
			clipRule: "evenodd"
		}), h = u.jsx("path", {
			stroke: "#111B21",
			strokeWidth: 1.47,
			d: "m46.93 43.98-8.66 8.68a3.4 3.4 0 0 0 0 4.75 3.34 3.34 0 0 0 4.72 0l11.04-11.05a3.34 3.34 0 0 0 0-4.72L43 30.6a3.34 3.34 0 1 0-4.72 4.73l8.65 8.64Z"
		}), y = u.jsx("path", {
			stroke: "#111B21",
			strokeWidth: 1.47,
			d: "M44 10.5a33.51 33.51 0 0 1 0 67 33.51 33.51 0 0 1 0-67Zm0 6.7a26.8 26.8 0 1 0 0 53.6 26.8 26.8 0 1 0 0-53.6Z",
			clipRule: "evenodd"
		}), n[12] = h, n[13] = y, n[14] = C, n[15] = b) : (h = n[12], y = n[13], C = n[14], b = n[15]);
		var v;
		n[16] !== l || n[17] !== s || n[18] !== d || n[19] !== m || n[20] !== p || n[21] !== g ? (v = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				C,
				b,
				h,
				y
			]
		}), n[16] = l, n[17] = s, n[18] = d, n[19] = m, n[20] = p, n[21] = g, n[22] = v) : v = n[22];
		var S;
		return n[23] !== a || n[24] !== v || n[25] !== _ || n[26] !== f ? (S = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: v
		})), n[23] = a, n[24] = v, n[25] = _, n[26] = f, n[27] = S) : S = n[27], S;
	}
	l.WdsPictoMetaDataChevronIcon = d;
}), 98);
