__d("WAWebLockIosIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "lock-ios";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 28, 28, "0 0 28 28"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M8.79 24.52c-.8 0-1.4-.2-1.8-.62-.4-.4-.6-1.05-.6-1.93v-7.4c0-.87.2-1.5.6-1.92.4-.41 1-.62 1.8-.62h9.84c.8 0 1.4.2 1.8.62.4.41.6 1.05.6 1.92v7.4c0 .88-.2 1.52-.6 1.93-.4.42-1 .62-1.8.62H8.79Zm.06-1.6h9.73c.25 0 .43-.07.54-.2.12-.12.19-.33.19-.63v-7.63c0-.3-.07-.51-.19-.63-.11-.13-.3-.19-.54-.19H8.85c-.25 0-.43.06-.56.19-.12.12-.18.33-.18.63v7.63c0 .3.06.5.18.63.13.13.31.2.56.2Zm-.6-10.04V9.46c0-1 .14-1.89.44-2.64.31-.75.72-1.37 1.24-1.87a5 5 0 0 1 1.75-1.12 5.6 5.6 0 0 1 5.82 1.12c.52.5.92 1.12 1.23 1.87.3.75.45 1.63.45 2.64v3.42h-1.73V9.24c0-.9-.17-1.66-.52-2.27a3.44 3.44 0 0 0-1.36-1.38 3.76 3.76 0 0 0-1.86-.48 3.8 3.8 0 0 0-1.86.48c-.57.3-1.02.77-1.36 1.38a4.51 4.51 0 0 0-.52 2.27v3.64H8.24Z"
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
	l.LockIosIcon = d;
}), 98);
