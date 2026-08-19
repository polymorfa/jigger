__d("WAWebNewsletterIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "newsletter";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M21.92 10.65a9.99 9.99 0 0 0-8.93-8.6 10 10 0 0 0-9.75 14.67l-1.2 3.95A1 1 0 0 0 3.3 21.9l3.88-1.16a10 10 0 0 0 14.74-10.1h.01ZM8.06 14.68c.27.4.24.95-.1 1.29a1 1 0 0 1-1.56-.17 6.8 6.8 0 0 1 .09-7.74c.35-.5 1.08-.52 1.51-.1a1 1 0 0 1 .1 1.3 4.75 4.75 0 0 0-.02 5.41l-.02.01Zm4-1.18a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 1 1 3.01 0c0 .83-.67 1.5-1.5 1.5Zm5.47 2.45a.99.99 0 0 1-1.5.09 1 1 0 0 1-.1-1.3 4.79 4.79 0 0 0-.03-5.5c-.29-.41-.27-.96.08-1.32a1 1 0 0 1 1.5.09 6.74 6.74 0 0 1 .05 7.95v-.01Z"
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
	l.NewsletterIcon = d;
}), 98);
