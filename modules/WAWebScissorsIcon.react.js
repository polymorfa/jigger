__d("WAWebScissorsIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "scissors";
	function d(t) {
		var n = o("react-compiler-runtime").c(28), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C, b;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx("circle", {
			cx: 6,
			cy: 18,
			r: 3.13,
			stroke: "currentColor",
			strokeWidth: 1.75
		}), b = u.jsx("circle", {
			cx: 6,
			cy: 6,
			r: 3.13,
			stroke: "currentColor",
			strokeWidth: 1.75
		}), h = u.jsx("path", {
			fill: "currentColor",
			d: "M7.72 14.74a1 1 0 1 0 1.41 1.42l2.8-2.8-1.4-1.42-2.81 2.8Zm5.65-5.65 1.42 1.41 5.9-5.9a1 1 0 0 0-1.4-1.42l-5.92 5.9Z"
		}), y = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M9.02 7.6A1 1 0 0 0 7.6 9.02l11.76 11.75a1 1 0 1 0 1.41-1.41L9.02 7.6ZM12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
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
	l.ScissorsIcon = d;
}), 98);
