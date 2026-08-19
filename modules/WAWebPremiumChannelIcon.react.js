__d("WAWebPremiumChannelIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "premium-channel";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsxs("g", {
			fill: "currentColor",
			children: [
				u.jsx("path", { d: "m12.15 19.55 7.8-9.13a1.7 1.7 0 0 0 .14-2.02l-1.63-2.58 1.52-.96 1.63 2.58a3.5 3.5 0 0 1-.29 4.15l-7.8 9.13a2 2 0 0 1-3.04 0l-7.8-9.13a3.5 3.5 0 0 1-.3-4.15l1.64-2.58A4 4 0 0 1 7.4 3h9.2a4 4 0 0 1 3.38 1.86l-1.52.96A2.2 2.2 0 0 0 16.6 4.8H7.4a2.2 2.2 0 0 0-1.86 1.02L3.9 8.4a1.7 1.7 0 0 0 .15 2.02l7.8 9.13a.2.2 0 0 0 .3 0" }),
				u.jsx("path", {
					fillRule: "evenodd",
					d: "M9.12 18.79a.9.9 0 1 0 1.76-.38L8.93 9.36l1.46-5.11a.9.9 0 1 0-1.73-.5L7.07 9.3zm5.76 0a.9.9 0 0 1-1.76-.38l1.95-9.05-1.46-5.11a.9.9 0 1 1 1.73-.5l1.59 5.55z",
					clipRule: "evenodd"
				}),
				u.jsx("path", {
					fillRule: "evenodd",
					d: "M21 10.4H3V8.6h18z",
					clipRule: "evenodd"
				})
			]
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
	l.PremiumChannelIcon = d;
}), 98);
