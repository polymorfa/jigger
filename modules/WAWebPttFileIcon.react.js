__d("WAWebPttFileIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ptt-file";
	function d(t) {
		var n = o("react-compiler-runtime").c(28), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 55, 55, "0 0 55 55"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C, b;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx("path", {
			fill: "#FA6533",
			d: "M0 0h55v55H0V0z"
		}), b = u.jsx("path", {
			fill: "#FFFFFF",
			d: "M27.1 14.8c1.8 0 3.2 1.5 3.2 3.5v9.5c0 1.9-1.4 3.5-3.2 3.5-1.8 0-3.2-1.5-3.2-3.5v-9.5c.1-2 1.5-3.5 3.2-3.5z"
		}), h = u.jsx("path", {
			fill: "#FFFFFF",
			d: "M27.4 35.1h-.9c-3.1-.3-5.6-2.9-6-6.3v-.3c0-.4.3-.7.7-.7h.3c.4 0 .7.3.7.7l.1.3c.5 2.5 2.5 4.4 5 4.4 2.4 0 4.5-1.9 4.9-4.4l.1-.4c0-.4.3-.7.7-.7h.3c.4 0 .7.3.7.7 0 0 0 .1-.1.5-.5 3.3-3.1 5.9-6.3 6.1l-.2.1z"
		}), y = u.jsx("path", {
			fill: "#FFFFFF",
			d: "M28 39.5c0 .4-.3.7-.7.7H27c-.4 0-.7-.3-.7-.7v-4.6c0-.4.3-.7.7-.7h.3c.4 0 .7.3.7.7v4.6z"
		}), n[12] = h, n[13] = y, n[14] = C, n[15] = b) : (h = n[12], y = n[13], C = n[14], b = n[15]);
		var v;
		n[16] !== l || n[17] !== s || n[18] !== d || n[19] !== m || n[20] !== p || n[21] !== g ? (v = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
			x: "0px",
			y: "0px",
			enableBackground: "new 0 0 55 55",
			children: [
				g,
				C,
				b,
				h,
				y
			]
		}), n[16] = l, n[17] = s, n[18] = d, n[19] = m, n[20] = p, n[21] = g, n[22] = v) : v = n[22];
		var S;
		return n[23] !== a || n[24] !== v || n[25] !== _ || n[26] !== f ? (S = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: v
		})), n[23] = a, n[24] = v, n[25] = _, n[26] = f, n[27] = S) : S = n[27], S;
	}
	l.PttFileIcon = d;
}), 98);
