__d("WAWebAcrobatIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "acrobat";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M22.84 14.8c-1.68-1.76-6.3-1.04-7.42-.91a19.84 19.84 0 0 1-3.12-4.1c.6-1.74.96-3.56 1.04-5.4 0-1.63-.65-3.39-2.48-3.39a1.9 1.9 0 0 0-1.56.9c-.78 1.37-.46 4.1.78 6.91a46.9 46.9 0 0 1-3.19 7.43c-1.89.78-5.86 2.6-6.18 4.55-.12.6.08 1.21.52 1.63.46.38 1.03.59 1.63.58 2.4 0 4.75-3.32 6.38-6.12a44.45 44.45 0 0 1 5.67-1.5c2.53 2.21 4.75 2.54 5.92 2.54 1.56 0 2.15-.66 2.34-1.24a1.7 1.7 0 0 0-.33-1.89Zm-1.62 1.1c-.07.46-.66.92-1.7.66a8.96 8.96 0 0 1-3.31-1.69c.85-.13 2.73-.32 4.1-.07.51.13 1.03.46.9 1.1ZM10.34 2.5c.12-.2.31-.32.53-.33.58 0 .72.72.72 1.3a14.46 14.46 0 0 1-.78 4.04c-.99-2.6-.8-4.43-.47-5.02Zm-.12 12.62c.56-1.18 1.06-2.4 1.5-3.64.6.96 1.3 1.85 2.08 2.66 0 .07-2.02.47-3.58.98Zm-3.84 2.6c-1.5 2.48-3.07 4.04-3.91 4.04a1.07 1.07 0 0 1-.4-.12.5.5 0 0 1-.2-.59c.21-.91 1.9-2.15 4.5-3.32Z"
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
	l.AcrobatIcon = d;
}), 98);
