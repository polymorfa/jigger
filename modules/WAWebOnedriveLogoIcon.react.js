__d("WAWebOnedriveLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "onedrive-logo";
	function d(t) {
		var n = o("react-compiler-runtime").c(28), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20.5, 32, "0 5.5 32 20.5"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C, b;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx("path", {
			fill: "#0364b8",
			d: "m12.2 11.2 6.72 4.02 4-1.69A6.5 6.5 0 0 1 25.5 13l.44.02A10 10 0 0 0 7.9 10H8a7.96 7.96 0 0 1 4.2 1.2"
		}), b = u.jsx("path", {
			fill: "#0078d4",
			d: "M12.2 11.2A7.96 7.96 0 0 0 8 10h-.1a8 8 0 0 0-6.46 12.57l5.92-2.49 2.63-1.1 5.87-2.48 3.06-1.28Z"
		}), h = u.jsx("path", {
			fill: "#1490df",
			d: "M25.94 13.02a7 7 0 0 0-.44-.02 6.5 6.5 0 0 0-2.58.53l-4 1.69 1.16.7 3.8 2.27 1.67 1 5.67 3.4a6.5 6.5 0 0 0-5.28-9.57"
		}), y = u.jsx("path", {
			fill: "#28a8ea",
			d: "m25.55 19.18-1.66-.99-3.8-2.28-1.17-.7-3.06 1.3-5.87 2.46-2.63 1.11-5.92 2.5A7.99 7.99 0 0 0 8 26h17.5a6.5 6.5 0 0 0 5.72-3.42Z"
		}), n[12] = h, n[13] = y, n[14] = C, n[15] = b) : (h = n[12], y = n[13], C = n[14], b = n[15]);
		var v;
		n[16] !== l || n[17] !== s || n[18] !== d || n[19] !== m || n[20] !== p || n[21] !== g ? (v = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
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
	l.OnedriveLogoIcon = d;
}), 98);
