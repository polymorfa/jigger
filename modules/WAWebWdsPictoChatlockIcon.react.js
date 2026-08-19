__d("WAWebWdsPictoChatlockIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-chatlock";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, "0 0 88 88"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "#25d366",
			fillRule: "evenodd",
			stroke: "#111b21",
			strokeWidth: 1.5,
			d: "M62.82 25.63v-3.02A18.7 18.7 0 0 0 44 4a18.7 18.7 0 0 0-18.83 18.61v3.02h-4.32c-4.99 0-9.03 4-9.03 8.93V65.8a9 9 0 0 0 9.03 8.93h4.54v5.94c0 2.6 2.93 4.18 5.19 2.84l11.75-8.77h24.82c4.99 0 9.03-4 9.03-8.94V34.56a9 9 0 0 0-9.03-8.93zm-5.08 0v-3.02c0-7.5-6.15-13.59-13.74-13.59s-13.75 6.09-13.75 13.6v3.01z",
			clipRule: "evenodd"
		}), y = u.jsx("path", {
			stroke: "#111b21",
			strokeLinecap: "round",
			strokeWidth: 1.5,
			d: "M25.49 43.9h37.57M25.49 54.84H52.7"
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
	l.WdsPictoChatlockIcon = d;
}), 98);
