__d("WAWebIcBusinessCenterIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-business-center";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M4 21a2 2 0 0 1-1.4-.6A2 2 0 0 1 2 19V8c0-.5.2-1 .6-1.4A2 2 0 0 1 4 6h4V4c0-.5.2-1 .6-1.4A2 2 0 0 1 10 2h4c.6 0 1 .2 1.4.6.4.4.6.9.6 1.4v2h4c.6 0 1 .2 1.4.6.4.4.6.9.6 1.4v11c0 .6-.2 1-.6 1.4a2 2 0 0 1-1.4.6H4Zm6-15h4V4h-4v2Zm10 9h-5v1c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-4a1 1 0 0 1-.7-.3A1 1 0 0 1 9 16v-1H4v4h16v-4Zm-9 0h2v-2h-2v2Zm-7-2h5v-1c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h4c.3 0 .5.1.7.3.2.2.3.4.3.7v1h5V8H4v5Z"
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
	l.IcBusinessCenterIcon = d;
}), 98);
