__d("WAWebSearchPluginGoogleIconIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "search-plugin-google-icon";
	function d(t) {
		var n = o("react-compiler-runtime").c(28), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 21, 20, "0 0 20 21"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C, b;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx("path", {
			fill: "#4285F4",
			fillRule: "evenodd",
			d: "M20 10.44c0-.73-.07-1.42-.19-2.1h-9.6v3.96h5.49a4.7 4.7 0 0 1-2.05 3.07v2.57h3.3c1.94-1.78 3.05-4.4 3.05-7.5Z",
			clipRule: "evenodd"
		}), b = u.jsx("path", {
			fill: "#34A853",
			fillRule: "evenodd",
			d: "M10.2 20.4c2.76 0 5.07-.9 6.76-2.46l-3.31-2.57a6.1 6.1 0 0 1-3.45.98 6.1 6.1 0 0 1-5.71-4.2h-3.4v2.64a10.2 10.2 0 0 0 9.11 5.62Z",
			clipRule: "evenodd"
		}), h = u.jsx("path", {
			fill: "#FBBC05",
			fillRule: "evenodd",
			d: "M4.49 12.14a6.11 6.11 0 0 1 0-3.87V5.63h-3.4a10.08 10.08 0 0 0 0 9.15l2.65-2.06.75-.58Z",
			clipRule: "evenodd"
		}), y = u.jsx("path", {
			fill: "#EA4335",
			fillRule: "evenodd",
			d: "M10.2 4.06c1.5 0 2.84.52 3.91 1.52l2.92-2.92A9.79 9.79 0 0 0 10.2 0C6.22 0 2.77 2.3 1.1 5.63l3.39 2.64a6.1 6.1 0 0 1 5.71-4.2Z",
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
	l.SearchPluginGoogleIconIcon = d;
}), 98);
