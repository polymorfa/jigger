__d("WAWebMegaphoneRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "megaphone-refreshed";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M21 13h-2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 18 12c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 21 13Zm-4.4 3.8a.91.91 0 0 1 .65-.4c.27-.03.52.03.75.2l1.6 1.2c.23.17.37.38.4.65.03.27-.03.52-.2.75a.91.91 0 0 1-.65.4c-.27.03-.52-.03-.75-.2l-1.6-1.2a.91.91 0 0 1-.4-.65c-.03-.27.03-.52.2-.75Zm3-10.6L18 7.4c-.23.17-.48.23-.75.2a.91.91 0 0 1-.65-.4 1.03 1.03 0 0 1-.2-.75.91.91 0 0 1 .4-.65l1.6-1.2c.23-.17.48-.23.75-.2s.48.17.65.4c.17.23.23.48.2.75a.91.91 0 0 1-.4.65ZM5 15H4c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-2c0-.55.2-1.02.59-1.41C2.98 9.19 3.45 9 4 9h4l3.47-2.1c.34-.2.68-.2 1.02 0 .34.2.51.5.51.88v8.45c0 .38-.17.67-.51.87-.34.2-.68.2-1.02 0L8 15H7v3c0 .28-.1.52-.29.71A.94.94 0 0 1 6 19a.97.97 0 0 1-.71-.29A.97.97 0 0 1 5 18v-3Zm6-.55v-4.9L8.55 11H4v2h4.55L11 14.45Zm3 .9v-6.7A4.57 4.57 0 0 1 15.5 12a4.57 4.57 0 0 1-1.5 3.35Z"
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
	l.MegaphoneRefreshedIcon = d;
}), 98);
