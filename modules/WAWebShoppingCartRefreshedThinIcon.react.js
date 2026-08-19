__d("WAWebShoppingCartRefreshedThinIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "shopping-cart-refreshed-thin";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 17, "0 0 17 20"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M4.5 18c-.42 0-.77-.15-1.06-.44-.3-.3-.44-.65-.44-1.06 0-.42.15-.77.44-1.06.3-.3.65-.44 1.06-.44.42 0 .77.15 1.06.44.3.3.44.65.44 1.06 0 .42-.15.77-.44 1.06-.3.3-.65.44-1.06.44Zm9 0c-.42 0-.77-.15-1.06-.44-.3-.3-.44-.65-.44-1.06 0-.42.15-.77.44-1.06.3-.3.65-.44 1.06-.44.42 0 .77.15 1.06.44.3.3.44.65.44 1.06 0 .42-.15.77-.44 1.06-.3.3-.65.44-1.06.44ZM4.27 5.5 6 9.5h6.27l1.7-4h-9.7ZM3.63 4H15.5c.2 0 .34.08.43.23.09.15.1.31.03.48l-2.32 5.37a1.5 1.5 0 0 1-1.37.92H5.6l-.87 1.5h9.52c.21 0 .4.07.53.21.15.15.22.32.22.54 0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22h-9.5a1.4 1.4 0 0 1-1.32-.75c-.29-.5-.28-1 0-1.5l1.1-1.88L1.78 3.5H.75a.73.73 0 0 1-.53-.21.72.72 0 0 1-.22-.54c0-.2.07-.39.22-.53A.72.72 0 0 1 .75 2h1.52c.15 0 .29.04.4.13.13.08.22.19.29.33L3.63 4Z"
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
	l.ShoppingCartRefreshedThinIcon = d;
}), 98);
