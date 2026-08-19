__d("WAWebReelPluginVideoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "reel-plugin-video";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 22, 22, "0 0 22 22"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "white",
			d: "M15.1 5.27 11.96 0H7.18c-.33 0-.66.02-.96.04l2.79 5.22h6.1v.01ZM4.55.32A6.05 6.05 0 0 0 .16 5.27h7.02L4.55.32Zm17.29 4.95a6.04 6.04 0 0 0-1.69-3.4C18.81.57 17.31 0 14.55 0h-.74l3.17 5.27h4.86ZM22 7.25 21.99 7H.01v.06L0 7.45v7.32c.03 2.62.6 4.07 1.85 5.37C3.19 21.44 4.69 22 7.45 22h7.31c2.63-.03 4.08-.6 5.38-1.84 1.3-1.35 1.86-2.84 1.86-5.6V7.25Zm-7.41 7.43-5.13 3-.06.02a.8.8 0 0 1-1.15-.72v-6.07a.8.8 0 0 1 1.2-.63l5.14 3 .06.04a.8.8 0 0 1 .19 1.13.72.72 0 0 1-.25.23Z"
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
	l.ReelPluginVideoIcon = d;
}), 98);
