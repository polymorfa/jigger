__d("WAWebCollectionRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "collection-refreshed";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M6.64 2C5.46 2 4.5 2.9 4.5 4h15c0-1.1-.96-2-2.14-2H6.64ZM5 22c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V8c0-.55.2-1.02.59-1.41C3.98 6.19 4.45 6 5 6h14c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v12c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5Zm0-2h14V8H5v12Zm2-9.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2Zm0 5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2Zm6.5-5.5a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3Zm-.5 5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2Z",
			clipRule: "evenodd"
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
	l.CollectionRefreshedIcon = d;
}), 98);
