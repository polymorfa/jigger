__d("WAWebNewsletterSystemMessageIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "newsletter-system-message";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 14, 14, "0 0 14 14"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M5.11 4.98a.6.6 0 0 0-.91.03 3.46 3.46 0 0 0-.09 3.92.6.6 0 0 0 .95.09c.2-.21.21-.52.05-.77a2.21 2.21 0 0 1 .04-2.49c.17-.24.17-.57-.04-.78Zm3.8-.02a.63.63 0 0 0-.04.79 2.24 2.24 0 0 1 .04 2.51.62.62 0 0 0 .05.77.6.6 0 0 0 .95-.09A3.46 3.46 0 0 0 9.82 5a.6.6 0 0 0-.91-.04ZM7.01 7.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z"
		}), y = u.jsx("path", {
			fill: "currentColor",
			d: "M11.78 3.39a.6.6 0 0 0-.97.7 4.81 4.81 0 0 1-.11 6 .6.6 0 0 0 .03.79.6.6 0 0 0 .9-.03 6 6 0 0 0 .16-7.45l-.01-.01ZM3.3 3.12a.61.61 0 0 0-.91.04 6 6 0 0 0 0 7.69c.23.28.66.3.91.03a.6.6 0 0 0 .04-.79 4.8 4.8 0 0 1 0-6.18.6.6 0 0 0-.03-.8l-.01.01Z"
		}), n[12] = h, n[13] = y) : (h = n[12], y = n[13]);
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				h,
				y
			]
		}), n[14] = l, n[15] = s, n[16] = d, n[17] = m, n[18] = p, n[19] = g, n[20] = C) : C = n[20];
		var b;
		return n[21] !== a || n[22] !== C || n[23] !== _ || n[24] !== f ? (b = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: C
		})), n[21] = a, n[22] = C, n[23] = _, n[24] = f, n[25] = b) : b = n[25], b;
	}
	l.NewsletterSystemMessageIcon = d;
}), 98);
