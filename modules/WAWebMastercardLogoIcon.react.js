__d("WAWebMastercardLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "mastercard-logo";
	function d(t) {
		var n = o("react-compiler-runtime").c(27), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 13, 22, "0 0 22 13"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			d: "M7.93 1.63h6.14v9.73H7.93z",
			style: { fill: "color(display-p3 1 .3725 0)" }
		}), n[12] = h) : h = n[12];
		var y;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx("path", {
			d: "M8.56 6.5c0-.94.22-1.86.64-2.7A6.2 6.2 0 0 1 11 1.63 6.5 6.5 0 0 0 7.74.35a6.55 6.55 0 0 0-3.47.58 6.3 6.3 0 0 0-2.61 2.29A6.06 6.06 0 0 0 .68 6.5c0 1.16.34 2.3.97 3.28a6.3 6.3 0 0 0 2.62 2.29 6.55 6.55 0 0 0 3.47.58A6.5 6.5 0 0 0 11 11.37 6.2 6.2 0 0 1 9.2 9.2a6 6 0 0 1-.64-2.71",
			style: { fill: "color(display-p3 .9216 0 .1059)" }
		}), n[13] = y) : y = n[13];
		var C;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx("path", {
			d: "M20.7 10.34v-.2h.1v-.04h-.21v.04h.08v.2zm.42 0v-.24h-.07l-.07.17-.08-.17h-.06v.24h.05v-.19l.07.16H21l.07-.16v.19zm.2-3.84a6 6 0 0 1-.98 3.28 6.3 6.3 0 0 1-2.61 2.29 6.55 6.55 0 0 1-3.47.58A6.5 6.5 0 0 1 11 11.36a6.2 6.2 0 0 0 1.8-2.15 6.04 6.04 0 0 0 .64-2.71 6.04 6.04 0 0 0-.65-2.7A6.2 6.2 0 0 0 11 1.62 6.5 6.5 0 0 1 14.26.35a6.55 6.55 0 0 1 3.47.58 6.3 6.3 0 0 1 2.62 2.28c.63.99.97 2.13.97 3.29z",
			style: { fill: "color(display-p3 .9686 .6196 .1059)" }
		}), n[14] = C) : C = n[14];
		var b;
		n[15] !== l || n[16] !== s || n[17] !== d || n[18] !== m || n[19] !== p || n[20] !== g ? (b = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				h,
				y,
				C
			]
		}), n[15] = l, n[16] = s, n[17] = d, n[18] = m, n[19] = p, n[20] = g, n[21] = b) : b = n[21];
		var v;
		return n[22] !== a || n[23] !== b || n[24] !== _ || n[25] !== f ? (v = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: b
		})), n[22] = a, n[23] = b, n[24] = _, n[25] = f, n[26] = v) : v = n[26], v;
	}
	l.MastercardLogoIcon = d;
}), 98);
