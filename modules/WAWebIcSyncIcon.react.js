__d("WAWebIcSyncIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-sync";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M6 12.05a5.84 5.84 0 0 0 1.75 4.15l.25.25V15c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v4c0 .28-.1.52-.29.71A.94.94 0 0 1 9 20H5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 19c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h1.75l-.4-.35a6.32 6.32 0 0 1-1.82-2.62A8.82 8.82 0 0 1 4 12.04a8 8 0 0 1 4.43-7.2.77.77 0 0 1 .73-.02c.26.11.43.3.52.57a1.14 1.14 0 0 1-.5 1.32A6.14 6.14 0 0 0 6 12.05Zm12-.1a5.84 5.84 0 0 0-1.75-4.15L16 7.55V9c0 .28-.1.52-.29.71A.94.94 0 0 1 15 10a.97.97 0 0 1-.71-.29A.97.97 0 0 1 14 9V5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h4c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 19 6h-1.75l.4.35a7.77 7.77 0 0 1 2.35 5.6 8 8 0 0 1-4.43 7.2.77.77 0 0 1-.73.02.9.9 0 0 1-.52-.57 1.1 1.1 0 0 1 .02-.75c.09-.25.25-.44.48-.58A6.14 6.14 0 0 0 18 11.95Z"
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
	l.IcSyncIcon = d;
}), 98);
