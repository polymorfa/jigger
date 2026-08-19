__d("WAWebShoppingCartEmptyIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "shopping-cart-empty";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 90, 90, null), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsxs("g", {
			fill: "currentColor",
			children: [u.jsx("path", { d: "M36.67 55a3.33 3.33 0 1 0 .02 6.66 3.33 3.33 0 0 0-.02-6.66zm-10-25c0 .92.75 1.67 1.66 1.67H30l6 12.65-2.25 4.06a3.34 3.34 0 0 0 2.92 4.95H55c.92 0 1.67-.75 1.67-1.66 0-.92-.75-1.67-1.67-1.67H36.67l1.83-3.33h12.42a3.3 3.3 0 0 0 2.91-1.72l5.97-10.82a1.66 1.66 0 0 0-1.45-2.46H33.68l-1.11-2.39a1.65 1.65 0 0 0-1.5-.95h-2.74c-.91 0-1.66.75-1.66 1.67zm26.66 25a3.33 3.33 0 1 0 .03 6.66 3.33 3.33 0 0 0-.03-6.66z" }), u.jsx("path", { d: "M44.96 2A42.98 42.98 0 0 0 2 45c0 23.74 19.22 43 42.96 43A43.02 43.02 0 0 0 88 45C88 21.26 68.74 2 44.96 2ZM45 90C20.14 90 0 69.86 0 45S20.14 0 45 0s45 20.14 45 45-20.14 45-45 45Z" })]
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.ShoppingCartEmptyIcon = d;
}), 98);
