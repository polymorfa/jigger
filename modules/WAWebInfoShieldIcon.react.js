__d("WAWebInfoShieldIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "info-shield";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 16, 12, "0 0 12 16"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", { d: "M5.25 11.75h1.5v-4.5h-1.5v4.5Zm.75-6c.21 0 .4-.07.53-.22A.73.73 0 0 0 6.75 5c0-.21-.07-.4-.22-.53A.73.73 0 0 0 6 4.25c-.21 0-.4.07-.53.22a.73.73 0 0 0-.22.53c0 .21.07.4.22.53a.7.7 0 0 0 .53.22Zm0 9.75a7.47 7.47 0 0 1-4.3-3A8.61 8.61 0 0 1 0 7.34V2.75L6 .5l6 2.25v4.58c0 1.9-.57 3.62-1.7 5.18A7.47 7.47 0 0 1 6 15.5Zm0-1.57a6.1 6.1 0 0 0 3.22-2.48 7.12 7.12 0 0 0 1.28-4.12V3.78L6 2.1 1.5 3.8v3.54c0 1.5.43 2.88 1.27 4.12A6.1 6.1 0 0 0 6 13.93Z" }), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "currentColor",
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.InfoShieldIcon = d;
}), 98);
