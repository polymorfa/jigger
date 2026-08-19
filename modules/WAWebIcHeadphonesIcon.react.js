__d("WAWebIcHeadphonesIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-headphones";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M5 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-7c0-1.25.24-2.42.71-3.51A9.15 9.15 0 0 1 8.5 3.7 8.7 8.7 0 0 1 12 3a8.7 8.7 0 0 1 3.51.71A9.15 9.15 0 0 1 20.3 8.5 8.7 8.7 0 0 1 21 12v7c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59h-2c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-4c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59h2v-1c0-1.95-.68-3.6-2.04-4.96A6.75 6.75 0 0 0 12 5c-1.95 0-3.6.68-4.96 2.04A6.75 6.75 0 0 0 5 12v1h2c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5Zm0-2h2v-4H5v4Zm12 0h2v-4h-2v4Z"
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
	l.IcHeadphonesIcon = d;
}), 98);
