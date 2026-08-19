__d("WAWebGphotosLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "gphotos-logo";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 59, 59, "0 0 59 59"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", { d: "M-3-3h64v64H-3z" }), n[12] = h) : h = n[12];
		var y;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [h, u.jsxs("g", {
				fillRule: "nonzero",
				children: [
					u.jsx("path", {
						fill: "#FBBC04",
						d: "M14.75 13.41c8.15 0 14.75 6.6 14.75 14.75v1.34H1.34C.6 29.5 0 28.9 0 28.16c0-8.15 6.6-14.75 14.75-14.75"
					}),
					u.jsx("path", {
						fill: "#EA4335",
						d: "M45.59 14.75c0 8.15-6.6 14.75-14.75 14.75H29.5V1.34C29.5.6 30.1 0 30.84 0c8.15 0 14.75 6.6 14.75 14.75"
					}),
					u.jsx("path", {
						fill: "#4285F4",
						d: "M44.25 45.59c-8.15 0-14.75-6.6-14.75-14.75V29.5h28.16c.74 0 1.34.6 1.34 1.34 0 8.15-6.6 14.75-14.75 14.75"
					}),
					u.jsx("path", {
						fill: "#34A853",
						d: "M13.41 44.25c0-8.15 6.6-14.75 14.75-14.75h1.34v28.16c0 .74-.6 1.34-1.34 1.34-8.15 0-14.75-6.6-14.75-14.75"
					})
				]
			})]
		}), n[13] = y) : y = n[13];
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			children: [g, y]
		}), n[14] = l, n[15] = s, n[16] = d, n[17] = m, n[18] = p, n[19] = g, n[20] = C) : C = n[20];
		var b;
		return n[21] !== a || n[22] !== C || n[23] !== _ || n[24] !== f ? (b = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: C
		})), n[21] = a, n[22] = C, n[23] = _, n[24] = f, n[25] = b) : b = n[25], b;
	}
	l.GphotosLogoIcon = d;
}), 98);
