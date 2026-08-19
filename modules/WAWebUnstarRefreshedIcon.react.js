__d("WAWebUnstarRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "unstar-refreshed";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M6.75 8.16 2.8 4.22a1 1 0 0 1 1.41-1.41L21.2 19.78a1 1 0 0 1-1.41 1.41l-1.35-1.34a1.2 1.2 0 0 1-1.8.77L12 17.83l-4.64 2.79a1.2 1.2 0 0 1-1.78-1.3l1.21-5.24-4.08-3.53a1.2 1.2 0 0 1 .68-2.1l3.36-.29Zm9.16 9.16.14.6-3.43-2.05a1.2 1.2 0 0 0-1.24 0l-3.43 2.06.9-3.87a1.2 1.2 0 0 0-.38-1.18l-3.02-2.6L8.6 10l7.32 7.31Z",
			clipRule: "evenodd"
		}), y = u.jsx("path", {
			fill: "currentColor",
			d: "M13.55 9.2c.04.1.08.17.13.24l.27.27c.18.13.38.2.6.22l4 .35-2.16 1.86 1.41 1.42 3.5-3c.8-.7.37-2.02-.69-2.11l-5.4-.47-2.1-4.94a1.2 1.2 0 0 0-2.21 0L9.82 5.58l1.52 1.52.66-1.54 1.55 3.65Z"
		}), n[12] = h, n[13] = y) : (h = n[12], y = n[13]);
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				h,
				y
			]
		}), n[14] = l, n[15] = s, n[16] = d, n[17] = m, n[18] = p, n[19] = g, n[20] = C) : C = n[20];
		var b;
		return n[21] !== a || n[22] !== C || n[23] !== _ || n[24] !== f ? (b = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: C
		})), n[21] = a, n[22] = C, n[23] = _, n[24] = f, n[25] = b) : b = n[25], b;
	}
	l.UnstarRefreshedIcon = d;
}), 98);
