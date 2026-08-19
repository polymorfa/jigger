__d("WAWebWdsSmbPictoArrowsTransferIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-smb-picto-arrows-transfer";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, null), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "#25D366",
			stroke: "#111B21",
			strokeWidth: 1.5,
			d: "m59.67 36.8 1.28-1.28H16.82a4.23 4.23 0 1 1 0-8.47h44.13l-1.28-1.28-1.79-1.8A4.23 4.23 0 1 1 63.87 18l10.3 10.3a4.23 4.23 0 0 1 0 5.99L64.44 44a4.23 4.23 0 0 1-5.99-5.99l1.22-1.21ZM28.32 51.2l-1.28 1.28h44.13a4.23 4.23 0 1 1 0 8.47H27.04l1.28 1.28 1.79 1.8A4.23 4.23 0 1 1 24.12 70l-10.3-10.3a4.23 4.23 0 0 1 0-5.99L23.55 44a4.23 4.23 0 0 1 5.99 5.99l-1.22 1.21Z"
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
	l.WdsSmbPictoArrowsTransferIcon = d;
}), 98);
