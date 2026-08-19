__d("WAWebStorefrontIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "storefront";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M4 3h16c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 5H4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29Zm0 18a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 20v-6h-.17a.96.96 0 0 1-.78-.36.94.94 0 0 1-.2-.84l1-6a.99.99 0 0 1 .35-.58c.18-.14.4-.22.63-.22h16.35a.99.99 0 0 1 .98.8l.99 6c.07.32 0 .6-.2.84a.96.96 0 0 1-.77.36H21v6c0 .28-.1.52-.29.71A.94.94 0 0 1 20 21a.97.97 0 0 1-.71-.29A.97.97 0 0 1 19 20v-6h-4v6c0 .28-.1.52-.29.71A.94.94 0 0 1 14 21H4Zm1-2h8v-5H5v5Zm-.95-7h15.9l-.6-4H4.65l-.6 4Z"
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
	l.StorefrontIcon = d;
}), 98);
