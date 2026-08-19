__d("WAWebPersonRefreshedOutlineThinIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "person-refreshed-outline-thin";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 14, "0 0 14 20"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M7 10a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 4 7c0-.83.3-1.54.88-2.13A2.9 2.9 0 0 1 7 4c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12 0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 7 10Zm-6 4.5V14a1.99 1.99 0 0 1 .98-1.62A10.24 10.24 0 0 1 7 11a9.7 9.7 0 0 1 5.02 1.38 2 2 0 0 1 .72.7c.17.3.26.6.26.92v.5c0 .41-.15.77-.44 1.06-.3.3-.65.44-1.06.44h-9c-.42 0-.77-.15-1.06-.44-.3-.3-.44-.65-.44-1.06Zm1.5 0h9V14a.33.33 0 0 0-.06-.2.42.42 0 0 0-.17-.13 7.81 7.81 0 0 0-2.04-.88 8.53 8.53 0 0 0-6.5.88.66.66 0 0 0-.17.16.27.27 0 0 0-.06.17v.5Zm4.5-6c.42 0 .77-.15 1.06-.44.3-.3.44-.65.44-1.06 0-.42-.15-.77-.44-1.06-.3-.3-.65-.44-1.06-.44-.42 0-.77.15-1.06.44-.3.3-.44.65-.44 1.06 0 .42.15.77.44 1.06.3.3.65.44 1.06.44Z"
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
	l.PersonRefreshedOutlineThinIcon = d;
}), 98);
