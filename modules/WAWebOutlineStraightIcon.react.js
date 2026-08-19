__d("WAWebOutlineStraightIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "outline-straight";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M14.4 4.4a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Zm.72 2.41a.8.8 0 0 0-1.21 1.04l1.37 1.6a.8.8 0 1 0 1.21-1.04l-1.37-1.6ZM10.1 7.85a.8.8 0 0 0-1.22-1.04L7.5 8.41a.8.8 0 1 0 1.21 1.04l1.37-1.6Zm8.22 2.7a.8.8 0 0 0-1.21 1.04l1.37 1.6a.8.8 0 0 0 1.21-1.04l-1.37-1.6ZM6.9 11.59a.8.8 0 0 0-1.22-1.04l-1.37 1.6a.8.8 0 0 0 1.21 1.04l1.37-1.6ZM2.4 18a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm19.2 0a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z"
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
	l.OutlineStraightIcon = d;
}), 98);
