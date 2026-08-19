__d("WAWebChromePermissionsIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "chrome-permissions";
	function d(t) {
		var n = o("react-compiler-runtime").c(28), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 14, 14, "0 0 14 14"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C, b;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M11.13 7.62a2.76 2.76 0 0 1 2.62 2.75v.15a2.76 2.76 0 0 1-2.76 2.62h-.14a2.76 2.76 0 0 1-2.62-2.62v-.15a2.76 2.76 0 0 1 2.76-2.76zm-.14 1.8a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.93",
			clipRule: "evenodd"
		}), b = u.jsx("path", {
			fill: "currentColor",
			d: "M7 11.3H.86V9.45H7z"
		}), h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M3.15.87a2.76 2.76 0 0 1 2.62 2.75v.15a2.76 2.76 0 0 1-2.76 2.62h-.14A2.76 2.76 0 0 1 .25 3.76v-.15A2.76 2.76 0 0 1 3.01.87zm-.14 1.8a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.93",
			clipRule: "evenodd"
		}), y = u.jsx("path", {
			fill: "currentColor",
			d: "M13.14 4.54H7V2.7h6.14z"
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
	l.ChromePermissionsIcon = d;
}), 98);
