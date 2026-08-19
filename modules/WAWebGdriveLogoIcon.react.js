__d("WAWebGdriveLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "gdrive-logo";
	function d(t) {
		var n = o("react-compiler-runtime").c(30), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 78, 87.3, "0 0 87.3 78"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C, b, v, S;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx("path", {
			fill: "#0066da",
			d: "m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z"
		}), S = u.jsx("path", {
			fill: "#00ac47",
			d: "M43.65 25 29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44A9.06 9.06 0 0 0 0 53h27.5z"
		}), h = u.jsx("path", {
			fill: "#ea4335",
			d: "M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 11.5z"
		}), y = u.jsx("path", {
			fill: "#00832d",
			d: "M43.65 25 57.4 1.2A8.8 8.8 0 0 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z"
		}), C = u.jsx("path", {
			fill: "#2684fc",
			d: "M59.8 53H27.5L13.75 76.8a8.8 8.8 0 0 0 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
		}), b = u.jsx("path", {
			fill: "#ffba00",
			d: "m73.4 26.5-12.7-22a9.08 9.08 0 0 0-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z"
		}), n[12] = h, n[13] = y, n[14] = C, n[15] = b, n[16] = v, n[17] = S) : (h = n[12], y = n[13], C = n[14], b = n[15], v = n[16], S = n[17]);
		var R;
		n[18] !== l || n[19] !== s || n[20] !== d || n[21] !== m || n[22] !== p || n[23] !== g ? (R = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			children: [
				g,
				v,
				S,
				h,
				y,
				C,
				b
			]
		}), n[18] = l, n[19] = s, n[20] = d, n[21] = m, n[22] = p, n[23] = g, n[24] = R) : R = n[24];
		var L;
		return n[25] !== a || n[26] !== R || n[27] !== _ || n[28] !== f ? (L = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: R
		})), n[25] = a, n[26] = R, n[27] = _, n[28] = f, n[29] = L) : L = n[29], L;
	}
	l.GdriveLogoIcon = d;
}), 98);
