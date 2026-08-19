__d("WAWebStorefrontRefreshedThinIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "storefront-refreshed-thin";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 18, "0 0 18 20"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M2.75 3h12.5a.74.74 0 0 1 .75.75c0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22H2.75A.74.74 0 0 1 2 3.75c0-.2.07-.39.22-.53A.72.72 0 0 1 2.75 3Zm0 14.5a.73.73 0 0 1-.53-.22.73.73 0 0 1-.22-.53V12h-.42a.74.74 0 0 1-.59-.3.67.67 0 0 1-.14-.64l1-5a.75.75 0 0 1 .73-.56h12.84a.73.73 0 0 1 .73.56l1 5c.07.24.02.45-.14.65s-.36.29-.6.29H16v4.74a.74.74 0 0 1-.75.76.73.73 0 0 1-.53-.22.72.72 0 0 1-.22-.53V12H11v4.74a.7.7 0 0 1-.22.54.72.72 0 0 1-.53.22h-7.5ZM3.5 16h6v-4h-6v4Zm-.96-5.5h12.92L14.83 7H3.17l-.63 3.5Z"
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
	l.StorefrontRefreshedThinIcon = d;
}), 98);
