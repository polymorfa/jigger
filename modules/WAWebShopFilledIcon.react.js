__d("WAWebShopFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "shop-filled";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M18.28 5.72c0-3.06-2.66-5.55-5.95-5.55C9.05.17 6.4 2.66 6.4 5.72H3.86c-1.25 0-2.3.91-2.37 2.09L.67 19.96c-.12 1.84 1.38 3.42 3.34 3.53l.23.01h16.19C22.4 23.5 24 22 24 20.17v-.21L23.17 7.8a2.32 2.32 0 0 0-2.37-2.09h-2.53ZM12.33 2.4c1.98 0 3.57 1.49 3.57 3.33H8.77c0-1.84 1.59-3.33 3.56-3.33Zm0 11.11c-2.84 0-5.23-1.77-5.9-4.17-.2-.7.39-1.39 1.18-1.39.58 0 1.04.38 1.2.9a3.62 3.62 0 0 0 3.53 2.44c1.68 0 3.1-1.04 3.52-2.45.16-.5.63-.89 1.2-.89.8 0 1.38.7 1.18 1.4-.67 2.4-3.06 4.16-5.9 4.16Z"
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
	l.ShopFilledIcon = d;
}), 98);
